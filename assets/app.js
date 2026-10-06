/*
 * Rendering and interaction code.
 * Conference content belongs in ../data/schedule-data.js, not in this file.
 * See ../README.md before changing the data model or adding a new section.
 */
(() => {
  const data = window.ICPCCI_DATA;
  if (!data) return;

  const site = data.site || {};
  const conference = data.conference || {};

  const sessionColors = [
    "#2864dc", "#d36619", "#0a8a82", "#7448b8", "#b13e65",
    "#1d7697", "#a05b12", "#31744c", "#9b3f69", "#5362a8",
  ];

  function escapeHtml(value) {
    return String(value ?? "").replace(/[&<>'"]/g, (character) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;",
    })[character]);
  }

  function safeHref(value) {
    const href = String(value || "").trim();
    return /^(https?:|mailto:|#|\/|\.\.?\/)/i.test(href) ? href : "#";
  }

  function setText(selector, value) {
    const element = document.querySelector(selector);
    if (element) element.textContent = value ?? "";
  }

  function orderedVisible(items = []) {
    return items
      .map((item, index) => ({ item, index }))
      .filter(({ item }) => item && item.visible !== false)
      .sort((left, right) => {
        const leftOrder = Number.isFinite(Number(left.item.order)) ? Number(left.item.order) : left.index + 1;
        const rightOrder = Number.isFinite(Number(right.item.order)) ? Number(right.item.order) : right.index + 1;
        return leftOrder - rightOrder || left.index - right.index;
      })
      .map(({ item }) => item);
  }

  const sessions = orderedVisible(data.sessions).map((session) => ({
    ...session,
    papers: orderedVisible(session.papers),
  }));
  const agenda = orderedVisible(data.agenda);

  function colorForSession(session) {
    const index = Math.max(0, Number(session.sessionNumber || 1) - 1);
    return sessionColors[index % sessionColors.length];
  }

  function renderChairList(session) {
    return orderedVisible(session.chairs).map((chair) => {
      const affiliation = chair.affiliation ? `, ${escapeHtml(chair.affiliation)}` : "";
      return `<span><strong>${escapeHtml(chair.name)}</strong>${affiliation}</span>`;
    }).join(" · ");
  }

  function renderChairNames(session) {
    return orderedVisible(session.chairs).map((chair) => escapeHtml(chair.name)).join(" · ");
  }

  function renderSiteContent() {
    document.title = site.pageTitle || `${conference.shortTitle || "Conference"} Technical Program`;
    const description = document.querySelector("#metaDescription");
    if (description) description.content = site.description || "Conference technical program";

    const conferenceMark = document.querySelector("#conferenceMark");
    conferenceMark.href = safeHref(conference.officialSite);
    conferenceMark.setAttribute("aria-label", `Open the official ${conference.shortTitle || "conference"} website`);

    const logo = document.querySelector("#conferenceLogo");
    logo.src = site.logo || "assets/iitram-logo.png";
    logo.alt = site.logoAlt || conference.shortTitle || "Conference";

    setText("#brandName", site.brandName);
    setText("#brandYear", site.brandYear);
    setText("#conferenceDates", conference.dates);
    setText("#conferenceVenueShort", conference.venueShort || conference.venue);
    setText("#conferenceRecord", conference.record ? `IEEE Conference Record #${conference.record}` : "");

    const officialLink = document.querySelector("#officialLink");
    officialLink.href = safeHref(conference.officialSite);

    setText("#heroEyebrow", site.heroEyebrow);
    setText("#heroTitle", site.heroTitle);
    setText("#heroSubtitle", site.heroSubtitle);
    setText("#paperMetric", sessions.reduce((sum, session) => sum + session.papers.length, 0));
    setText("#sessionMetric", sessions.length);
    setText("#minutesMetric", site.minutesPerPaper);
    setText("#daysMetric", site.conferenceDays);
    setText("#updatedLabel", conference.lastUpdated ? `Updated ${conference.lastUpdated}` : "");

    setText("#agendaEyebrow", site.agendaEyebrow);
    setText("#agendaTitle", site.agendaTitle);
    setText("#agendaDescription", site.agendaDescription);
    setText("#guestsEyebrow", site.guestsEyebrow);
    setText("#guestsTitle", site.guestsTitle);
    setText("#partnersEyebrow", site.partnersEyebrow);
    setText("#latestUpdateLabel", site.latestUpdateLabel || "Latest Update");

    const presenter = data.presenter || {};
    setText("#presenterEyebrow", presenter.eyebrow);
    setText("#presenterTitle", presenter.title);
    document.querySelector("#presenterPoints").innerHTML = orderedVisible(presenter.points).map((point) => `
      <p><strong>${escapeHtml(point.label)}:</strong> ${escapeHtml(point.text)}</p>
    `).join("");

    setText("#footerShortTitle", conference.shortTitle);
    setText("#footerTitle", conference.title);
    setText("#footerVenue", conference.venue);
    const footerContact = document.querySelector("#footerContact");
    footerContact.textContent = conference.contact || "";
    footerContact.href = conference.contact ? `mailto:${conference.contact}` : "#";

    renderAnnouncements();
    renderLatestUpdates();
    renderGuests();
    renderPartners();
  }

  function renderAnnouncements() {
    const announcements = orderedVisible(data.announcements);
    const container = document.querySelector("#announcementBar");
    container.hidden = announcements.length === 0;
    container.innerHTML = announcements.map((item) => `
      <p>${escapeHtml(item.text)}${item.link && item.linkText ? ` <a href="${escapeHtml(safeHref(item.link))}">${escapeHtml(item.linkText)}</a>` : ""}</p>
    `).join("");
  }

  function renderLatestUpdates() {
    const updates = orderedVisible(data.latestUpdates);
    const section = document.querySelector("#latestUpdates");
    section.hidden = updates.length === 0;
    document.querySelector("#latestUpdateTrack").innerHTML = updates.map((item) => {
      const content = item.link && item.linkText
        ? `${escapeHtml(item.text)} <a href="${escapeHtml(safeHref(item.link))}">${escapeHtml(item.linkText)}</a>`
        : escapeHtml(item.text);
      return `<span class="latest-update-item">${content}</span>`;
    }).join("");
  }

  function renderGuests() {
    const guests = orderedVisible(data.guests);
    const section = document.querySelector("#guestsSection");
    section.hidden = guests.length === 0;
    document.querySelector("#guestGrid").innerHTML = guests.map((guest) => {
      const initials = String(guest.name || "Guest").split(/\s+/).slice(0, 2).map((part) => part[0]).join("");
      const portrait = guest.photo
        ? `<img src="${escapeHtml(guest.photo)}" alt="${escapeHtml(guest.photoAlt || guest.name)}">`
        : `<span aria-hidden="true">${escapeHtml(initials)}</span>`;
      const name = guest.link
        ? `<a href="${escapeHtml(safeHref(guest.link))}" target="_blank" rel="noreferrer">${escapeHtml(guest.name)}</a>`
        : escapeHtml(guest.name);
      return `
        <article class="guest-card">
          <div class="guest-photo">${portrait}</div>
          <div>
            <p class="guest-role">${escapeHtml(guest.role)}</p>
            <h3>${name}</h3>
            ${guest.organisation ? `<p class="guest-organisation">${escapeHtml(guest.organisation)}</p>` : ""}
            ${guest.bio ? `<p class="guest-bio">${escapeHtml(guest.bio)}</p>` : ""}
          </div>
        </article>
      `;
    }).join("");
  }

  function renderPartners() {
    const partners = orderedVisible(data.partners);
    document.querySelector("#partnerLogos").innerHTML = partners.map((partner) => {
      const image = `<img src="${escapeHtml(partner.logo)}" alt="${escapeHtml(partner.name)}">`;
      return partner.link
        ? `<a href="${escapeHtml(safeHref(partner.link))}" target="_blank" rel="noreferrer">${image}</a>`
        : `<div>${image}</div>`;
    }).join("");
  }

  const state = { query: "", day: "", track: "", room: "" };
  const searchInput = document.querySelector("#searchInput");
  const dayFilter = document.querySelector("#dayFilter");
  const trackFilter = document.querySelector("#trackFilter");
  const roomFilter = document.querySelector("#roomFilter");
  const sessionList = document.querySelector("#sessionList");
  const emptyState = document.querySelector("#emptyState");
  const resultsLabel = document.querySelector("#resultsLabel");
  const printButton = document.querySelector("#printSession");
  const papersView = document.querySelector("#papersView");
  const agendaView = document.querySelector("#agendaView");

  const unique = (items) => [...new Set(items)].sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  const addOptions = (select, items) => items.forEach((item) => {
    const option = document.createElement("option");
    option.value = item;
    option.textContent = item;
    select.append(option);
  });

  const themes = unique(sessions.map((session) => session.track));
  addOptions(dayFilter, unique(sessions.map((session) => session.dateLabel)));
  addOptions(trackFilter, themes);
  addOptions(roomFilter, unique(sessions.map((session) => session.room)));

  document.querySelector("#trackLegend").innerHTML = sessions
    .map((session) => `<span><i style="background:${colorForSession(session)}"></i>S${escapeHtml(session.sessionNumber)} · ${escapeHtml(session.track)}</span>`).join("");

  const requestedTheme = new URLSearchParams(window.location.search).get("theme");
  if (requestedTheme && themes.includes(requestedTheme)) {
    state.track = requestedTheme;
    trackFilter.value = requestedTheme;
  }

  function matches(session, paper) {
    if (state.day && session.dateLabel !== state.day) return false;
    if (state.track && paper.track !== state.track) return false;
    if (state.room && session.room !== state.room) return false;
    if (!state.query) return true;

    // A numeric query is a paper-ID lookup. This prevents a search such as
    // "30" from also matching every session whose time contains ":30".
    const paperIdQuery = state.query.replace(/^#/, "");
    if (/^\d+$/.test(paperIdQuery)) return String(paper.paperId) === paperIdQuery;

    const haystack = [paper.paperId, paper.title, paper.authors, paper.track, session.sessionNumber, session.title, session.room, session.dateLabel, session.slot]
      .join(" ").toLowerCase();
    return haystack.includes(state.query);
  }

  function render() {
    const groups = [];
    let paperCount = 0;
    sessions.forEach((session) => {
      const papers = session.papers.filter((paper) => matches(session, paper));
      if (papers.length) {
        groups.push({ ...session, papers });
        paperCount += papers.length;
      }
    });

    const groupedDays = new Map();
    groups.forEach((session) => {
      if (!groupedDays.has(session.dateLabel)) groupedDays.set(session.dateLabel, []);
      groupedDays.get(session.dateLabel).push(session);
    });

    sessionList.innerHTML = [...groupedDays.entries()].map(([dateLabel, daySessions]) => `
      <section class="day-group">
        <div class="day-heading"><h2>${escapeHtml(dateLabel)}</h2></div>
        ${daySessions.map(renderSession).join("")}
      </section>
    `).join("");

    resultsLabel.textContent = `${paperCount} paper${paperCount === 1 ? "" : "s"} across ${groups.length} session${groups.length === 1 ? "" : "s"}`;
    emptyState.hidden = groups.length !== 0;
    const selectedSession = sessions.find((session) => session.track === state.track);
    printButton.disabled = !selectedSession;
    printButton.textContent = selectedSession ? `Print Session ${selectedSession.sessionNumber}` : "Print selected theme";
  }

  function renderSession(session) {
    const color = colorForSession(session);
    const chairs = renderChairList(session);
    const chairNames = renderChairNames(session);
    const chairLabel = orderedVisible(session.chairs).length === 1 ? "Session chair:" : "Session chairs:";
    return `
      <article class="session-card" style="--session-color:${color}">
        <div class="print-only print-session-banner">
          <div class="print-brand">
            <img src="${escapeHtml(site.logo || "assets/iitram-logo.png")}" alt="${escapeHtml(site.logoAlt || conference.shortTitle || "Conference")}">
            <div>
              <p>${escapeHtml(conference.shortTitle)} · Technical Program</p>
              <h1>Session ${escapeHtml(session.sessionNumber)} · ${escapeHtml(session.title)}</h1>
            </div>
          </div>
          <div class="print-session-meta">
            <span><strong>Date</strong>${escapeHtml(session.dateLabel)}</span>
            <span><strong>Time</strong>${escapeHtml(session.slot)}</span>
            <span><strong>Venue</strong>${escapeHtml(session.room)}</span>
          </div>
          ${chairs ? `<p class="print-chairs"><strong>Session chair${orderedVisible(session.chairs).length === 1 ? "" : "s"}:</strong> ${chairs}</p>` : ""}
        </div>
        <header class="session-head">
          <div class="session-title-block">
            <p class="session-kicker">Session ${escapeHtml(session.sessionNumber)} · ${escapeHtml(session.track)}</p>
            <h3>${escapeHtml(session.title)}</h3>
            ${chairNames ? `<p class="session-chair-summary"><span>${chairLabel}</span>${chairNames}</p>` : ""}
          </div>
          <div class="session-place">
            <span><strong>${escapeHtml(session.room)}</strong><br>Room</span>
            <span><strong>${escapeHtml(session.slot)}</strong><br>Time</span>
            <span><strong>${session.papers.length}</strong><br>Papers</span>
          </div>
        </header>
        <table class="paper-table">
          <thead><tr><th class="paper-sequence">No.</th><th>Time</th><th>Paper</th><th>Title and complete author list</th></tr></thead>
          <tbody>
            ${session.papers.map((paper, index) => `
              <tr>
                <td class="paper-sequence">${escapeHtml(paper.order || index + 1)}</td>
                <td class="paper-time">${escapeHtml(paper.startTime)}</td>
                <td class="paper-id">#${escapeHtml(paper.paperId)}</td>
                <td class="paper-title">${escapeHtml(paper.title)}<span class="paper-authors">${escapeHtml(paper.authors)}</span></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </article>
    `;
  }

  function renderAgenda() {
    const byDay = new Map();
    agenda.forEach((item) => {
      if (!byDay.has(item.dateLabel)) byDay.set(item.dateLabel, []);
      byDay.get(item.dateLabel).push(item);
    });
    document.querySelector("#agendaDays").innerHTML = [...byDay.entries()].map(([dateLabel, items]) => `
      <article class="agenda-day">
        <h3>${escapeHtml(dateLabel)}</h3>
        ${items.map((item) => `
          <div class="agenda-row ${item.technical ? "is-technical" : ""}">
            <time>${escapeHtml(item.time)}</time>
            <div><strong>${escapeHtml(item.program)}</strong>${item.location ? `<small>${escapeHtml(item.location)}</small>` : ""}</div>
          </div>
        `).join("")}
      </article>
    `).join("");
  }

  searchInput.addEventListener("input", () => { state.query = searchInput.value.trim().toLowerCase(); render(); });
  dayFilter.addEventListener("change", () => { state.day = dayFilter.value; render(); });
  trackFilter.addEventListener("change", () => { state.track = trackFilter.value; render(); });
  roomFilter.addEventListener("change", () => { state.room = roomFilter.value; render(); });
  document.querySelector("#clearFilters").addEventListener("click", () => {
    searchInput.value = ""; dayFilter.value = ""; trackFilter.value = ""; roomFilter.value = "";
    Object.assign(state, { query: "", day: "", track: "", room: "" });
    render();
    searchInput.focus();
  });

  let printSnapshot = null;
  function prepareSessionPrint() {
    if (!state.track || printSnapshot) return;
    printSnapshot = {
      state: { ...state },
      papersHidden: papersView.hidden,
      agendaHidden: agendaView.hidden,
    };
    Object.assign(state, { query: "", day: "", room: "" });
    papersView.hidden = false;
    agendaView.hidden = true;
    document.body.classList.add("printing-session");
    render();
  }

  function restoreAfterPrint() {
    if (!printSnapshot) return;
    Object.assign(state, printSnapshot.state);
    papersView.hidden = printSnapshot.papersHidden;
    agendaView.hidden = printSnapshot.agendaHidden;
    document.body.classList.remove("printing-session");
    printSnapshot = null;
    render();
  }

  printButton.addEventListener("click", () => {
    if (!state.track) return;
    prepareSessionPrint();
    window.print();
  });
  window.addEventListener("beforeprint", prepareSessionPrint);
  window.addEventListener("afterprint", restoreAfterPrint);

  document.querySelectorAll(".view-tab").forEach((button) => button.addEventListener("click", () => {
    const view = button.dataset.view;
    document.querySelectorAll(".view-tab").forEach((tab) => {
      const active = tab === button;
      tab.classList.toggle("is-active", active);
      tab.setAttribute("aria-selected", String(active));
    });
    document.querySelector("#papersView").hidden = view !== "papers";
    document.querySelector("#agendaView").hidden = view !== "agenda";
  }));

  renderSiteContent();
  renderAgenda();
  render();
})();
