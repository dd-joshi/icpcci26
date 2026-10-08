/* Dependency-free content validation for local editors, CI, and AI maintainers. */
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const dataFile = path.join(root, "data", "schedule-data.js");
const errors = [];

function fail(message) {
  errors.push(message);
}

function requireText(object, key, location) {
  if (!object || typeof object[key] !== "string" || !object[key].trim()) {
    fail(`${location}.${key} must be a non-empty string.`);
  }
}

function checkLocalFile(relativePath, location) {
  if (!relativePath) return;
  if (/^(https?:|data:)/i.test(relativePath)) return;
  const absolutePath = path.resolve(root, relativePath);
  if (!absolutePath.startsWith(root + path.sep)) {
    fail(`${location} points outside the website folder: ${relativePath}`);
  } else if (!fs.existsSync(absolutePath)) {
    fail(`${location} does not exist: ${relativePath}`);
  }
}

function clockToMinutes(value, fallbackSuffix = "") {
  const match = String(value || "").trim().match(/^(\d{1,2}):(\d{2})\s*(AM|PM)?$/i);
  if (!match) return null;
  const suffix = (match[3] || fallbackSuffix).toUpperCase();
  if (!suffix) return null;
  let hour = Number(match[1]);
  const minute = Number(match[2]);
  if (hour < 1 || hour > 12 || minute < 0 || minute > 59) return null;
  if (hour === 12) hour = 0;
  if (suffix === "PM") hour += 12;
  return hour * 60 + minute;
}

function parseSessionSlot(value) {
  const match = String(value || "").trim().match(/^(\d{1,2}:\d{2})\s*(AM|PM)?\s*[–-]\s*(\d{1,2}:\d{2})\s*(AM|PM)$/i);
  if (!match) return null;
  const endSuffix = match[4].toUpperCase();
  const start = clockToMinutes(match[1], match[2] || endSuffix);
  const end = clockToMinutes(match[3], endSuffix);
  return start === null || end === null ? null : { start, end };
}

let data;
try {
  const source = fs.readFileSync(dataFile, "utf8");
  const context = { window: {} };
  vm.createContext(context);
  vm.runInContext(source, context, { filename: dataFile });
  data = context.window.ICPCCI_DATA;
} catch (error) {
  fail(`Unable to load data/schedule-data.js: ${error.message}`);
}

if (data) {
  requireText(data.site, "pageTitle", "site");
  requireText(data.site, "description", "site");
  requireText(data.site, "latestUpdateLabel", "site");
  checkLocalFile(data.site && data.site.logo, "site.logo");

  ["title", "shortTitle", "dates", "venue", "contact", "officialSite", "lastUpdated"].forEach((key) => {
    requireText(data.conference, key, "conference");
  });

  if (!Array.isArray(data.agenda)) fail("agenda must be an array.");
  if (!Array.isArray(data.latestUpdates)) fail("latestUpdates must be an array.");
  if (!Array.isArray(data.sessions)) fail("sessions must be an array.");
  if (!Array.isArray(data.guests)) fail("guests must be an array.");
  if (!Array.isArray(data.partners)) fail("partners must be an array.");

  const paperIds = new Set();
  (data.latestUpdates || []).forEach((item, index) => {
    if (item.visible === false) return;
    requireText(item, "text", `latestUpdates[${index}]`);
  });
  (data.agenda || []).forEach((item, index) => {
    if (item.visible === false) return;
    ["dateLabel", "time", "program"].forEach((key) => requireText(item, key, `agenda[${index}]`));
    ["speaker", "topic", "note"].forEach((key) => {
      if (item[key] !== undefined) requireText(item, key, `agenda[${index}]`);
    });
    if (item.location !== undefined && typeof item.location !== "string") {
      fail(`agenda[${index}].location must be a string when provided.`);
    }
    if (item.parallel !== undefined && typeof item.parallel !== "boolean") {
      fail(`agenda[${index}].parallel must be a boolean when provided.`);
    }
    if (/\b(?:am|pm)\b/.test(item.time)) {
      fail(`agenda[${index}].time must use uppercase AM/PM.`);
    }
  });

  (data.sessions || []).forEach((session, sessionIndex) => {
    if (session.visible === false) return;
    ["title", "track", "date", "dateLabel", "slot", "room"].forEach((key) => requireText(session, key, `sessions[${sessionIndex}]`));
    if (session.sessionNumber === undefined || session.sessionNumber === null) {
      fail(`sessions[${sessionIndex}].sessionNumber is required.`);
    }
    if (session.chairs !== undefined && !Array.isArray(session.chairs)) {
      fail(`sessions[${sessionIndex}].chairs must be an array when provided.`);
    }
    (session.chairs || []).forEach((chair, chairIndex) => {
      if (chair.visible === false) return;
      requireText(chair, "name", `sessions[${sessionIndex}].chairs[${chairIndex}]`);
      if (chair.affiliation !== undefined && typeof chair.affiliation !== "string") {
        fail(`sessions[${sessionIndex}].chairs[${chairIndex}].affiliation must be a string when provided.`);
      }
    });
    if (!Array.isArray(session.papers)) {
      fail(`sessions[${sessionIndex}].papers must be an array.`);
      return;
    }
    const sessionSlot = parseSessionSlot(session.slot);
    if (!sessionSlot) fail(`sessions[${sessionIndex}].slot must use a time range such as 1:30–3:30 PM.`);
    let previousPaperEnd = null;
    session.papers.forEach((paper, paperIndex) => {
      if (paper.visible === false) return;
      const location = `sessions[${sessionIndex}].papers[${paperIndex}]`;
      ["title", "authors", "track", "startTime", "endTime"].forEach((key) => requireText(paper, key, location));
      if (paper.paperId === undefined || paper.paperId === null || paper.paperId === "") {
        fail(`${location}.paperId is required.`);
      } else if (paperIds.has(String(paper.paperId))) {
        fail(`Duplicate paperId: ${paper.paperId}`);
      } else {
        paperIds.add(String(paper.paperId));
      }
      const start = clockToMinutes(paper.startTime);
      const end = clockToMinutes(paper.endTime);
      if (start === null || end === null || end <= start) {
        fail(`${location} has an invalid startTime/endTime range.`);
      } else {
        if (Number.isFinite(Number(data.site.minutesPerPaper)) && end - start !== Number(data.site.minutesPerPaper)) {
          fail(`${location} must use the configured ${data.site.minutesPerPaper}-minute presentation duration.`);
        }
        if (previousPaperEnd !== null && start < previousPaperEnd) {
          fail(`${location}.startTime overlaps the previous visible paper.`);
        } else if (previousPaperEnd !== null && start > previousPaperEnd && session.allowTimeGaps !== true) {
          fail(`${location}.startTime must immediately follow the previous visible paper.`);
        }
        previousPaperEnd = end;
      }
    });
    const firstVisiblePaper = session.papers.find((paper) => paper.visible !== false);
    const firstPaperStart = firstVisiblePaper ? clockToMinutes(firstVisiblePaper.startTime) : null;
    if (sessionSlot && firstPaperStart !== null && firstPaperStart < sessionSlot.start) {
      fail(`sessions[${sessionIndex}] starts before its declared slot.`);
    }
    if (sessionSlot && previousPaperEnd !== null && previousPaperEnd > sessionSlot.end) {
      fail(`sessions[${sessionIndex}] papers end after the declared slot.`);
    }
  });

  (data.guests || []).forEach((guest, index) => {
    if (guest.visible === false) return;
    requireText(guest, "name", `guests[${index}]`);
    requireText(guest, "role", `guests[${index}]`);
    checkLocalFile(guest.photo, `guests[${index}].photo`);
  });

  (data.partners || []).forEach((partner, index) => {
    if (partner.visible === false) return;
    requireText(partner, "name", `partners[${index}]`);
    requireText(partner, "logo", `partners[${index}]`);
    checkLocalFile(partner.logo, `partners[${index}].logo`);
  });
}

const indexFile = path.join(root, "index.html");
if (fs.existsSync(indexFile)) {
  const html = fs.readFileSync(indexFile, "utf8");
  const referencePattern = /(?:src|href)="([^"]+)"/g;
  for (const match of html.matchAll(referencePattern)) {
    const reference = match[1];
    if (/^(https?:|mailto:|data:|#)/i.test(reference)) continue;
    checkLocalFile(reference, "index.html reference");
  }
  if (/print(?:\.html|\.css|\.js| program| schedule)/i.test(html)) {
    fail("index.html contains a print-page reference, which should remain removed.");
  }
}

["print.html", "assets/print.css", "assets/print.js"].forEach((relativePath) => {
  if (fs.existsSync(path.join(root, relativePath))) fail(`${relativePath} should remain removed.`);
});

if (errors.length) {
  console.error(`Validation failed with ${errors.length} error(s):`);
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

const visibleSessions = (data.sessions || []).filter((item) => item.visible !== false);
const visiblePapers = visibleSessions.flatMap((session) => session.papers || []).filter((item) => item.visible !== false);
console.log(`Validation passed: ${visibleSessions.length} sessions, ${visiblePapers.length} papers, ${(data.agenda || []).length} agenda items.`);
