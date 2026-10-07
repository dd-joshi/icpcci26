# ICPCCI 2026 static website

This is a dependency-free static conference website. It can be opened directly from `index.html` and is configured to publish through GitHub Pages.

## Maintenance rule

**Edit conference content in `data/schedule-data.js`.** Do not duplicate conference details in `index.html` or `assets/app.js`.

- `data/schedule-data.js` is the single source of truth for conference details, announcements, latest updates, guests, presenter notes, partners, agenda items, sessions, and papers.
- `index.html` contains structural containers and accessibility markup.
- `assets/app.js` renders the data and provides search, filters, and tabs.
- `assets/styles.css` controls presentation and responsive layout.

The page remains fully static. There is no database, build step, or runtime backend.

## Current technical-program authority

The live technical program contains **74 unique papers in 10 theme-based sessions**. Session names, chairs, paper allocation, and paper sequence follow the organizer-supplied workbook `5oct.xlsx`, confirmed on 6 October 2026, plus the site owner's corrections confirmed on 7 October 2026. Rows without a paper title or presentation mode are routing notes and are not counted as presentations. Complete author lists come from the accepted-paper export `Papers (7).xlsx`. The website assigns 15-minute presentation times in the listed paper order.

- Keep paper 237 titled **“Design and Performance Analysis of a Minimized-Switch Multilevel Inverter with Advanced PWM Control for Grid-Connected Renewable Energy Applications”** unless the site owner supplies a newer correction.
- The site owner moved paper 224 to Session 8 on 9 October and confirmed its author as **P, Elangovan\***. Its current scheduled time is 10:00–10:15 AM. This explicit correction overrides its earlier PDF placement in Session 3.
- Session 4 is titled **“AI for Healthcare”**.
- Session 6 is titled **“Energy Technology”**.
- Paper 73 is in Session 3 after paper 23, with its complete title and author entry from `Papers (7).xlsx`.
- Paper 35 is the final Session 3 presentation at **3:15–3:30 PM**. It must not also appear in Session 9.
- Paper 57 is in Session 7 at 10:15–10:30 AM, with its complete title and author list from `Papers (7).xlsx`.
- Dr. Ravi Bhandari is a Session 7 chair. Dr. Ajit Kumar is a Session 9 chair.
- Papers 225, 23, and 247 are assigned only to Sessions 8, 3, and 9 respectively. Do not recreate their routing-note rows as duplicate presentations.
- The site owner replaced every L205 session venue with **S401** and set **S401** as the venue for the Opening Ceremony and IEEE Student Branch Inauguration.
- Session 5 runs **3:45–6:15 PM** so its 10 papers retain 15-minute presentation slots.
- Presentation-mode information is internal operational data. Do not copy it into the public data file, page, print layout, labels, chair details, or documentation examples.
- Do not regroup papers by their older discipline labels. The current public program uses the theme-based session titles stored on each session and paper.

## Common updates

### Change the venue, dates, contact, or official link

Edit the `conference` object:

```js
"conference": {
  "dates": "8–9 October 2026",
  "venue": "Full venue used in the footer",
  "venueShort": "Short venue used in the header",
  "contact": "email@example.com",
  "officialSite": "https://example.com/",
  "lastUpdated": "7 October 2026, 11:19 PM IST"
}
```

Update `lastUpdated` whenever public program information changes.

### Add an announcement

Add an object to `announcements`. Leave `link` and `linkText` out when no link is needed.

```js
{
  "text": "Registration is now open.",
  "linkText": "Register",
  "link": "https://example.com/register",
  "visible": true,
  "order": 1
}
```

The announcement bar stays hidden when the array is empty.

### Change the scrolling latest update

Edit the `latestUpdates` array. The section stays hidden when there are no visible items.

```js
{
  "text": "Student participants must carry their institute ID cards.",
  "visible": true,
  "order": 1
}
```

Use one short sentence per item. The small bullet and scrolling behavior are supplied automatically by the page.

### Back-to-top button

The fixed `#backToTop` button is defined in `index.html`, shown after the reader scrolls 480 pixels by `assets/app.js`, and styled in `assets/styles.css`. Keep these three parts together when changing or removing the control.

### Add a guest or speaker

Place the photograph in `assets/guests/`, then add an object to `guests`:

```js
{
  "name": "Guest Name",
  "role": "Chief Guest",
  "organisation": "Organisation Name",
  "bio": "Optional one-sentence introduction.",
  "photo": "assets/guests/guest-name.jpg",
  "photoAlt": "Guest Name",
  "link": "",
  "visible": true,
  "order": 1
}
```

The guest section stays hidden when there are no visible guests. A guest without a photograph receives an initials placeholder.

### Add or reorder partners

Add an image under `assets/` and add an object to `partners`:

```js
{
  "name": "Partner name",
  "logo": "assets/partner-logo.png",
  "link": "https://partner.example.com/",
  "visible": true,
  "order": 5
}
```

Logo cards share one row on wide screens and reflow automatically on smaller screens. Keep whitespace inside source images when it is part of the supplied logo; use a targeted CSS width only when one mark appears visually oversized.

### Change agenda, session, or paper sequence

Collections display in array order by default. For explicit ordering, add numeric `order` values to every item in that collection. Smaller numbers appear first.

This works for announcements, guests, presenter points, partners, agenda items, sessions, and papers. Set `visible: false` on any item to hide it without deleting it.

When moving a session, update its `date`, `dateLabel`, `slot`, and `room` together. When moving a paper, update `startTime` and `endTime`. If the general timetable changes, also update the matching item in `agenda`.

Session chair names appear in a compact line under the session title. Their affiliations remain in the A4 print header. Update both from each session's `chairs` array; do not hardcode chair names in HTML.

### Add a paper

Add the paper inside the correct session's `papers` array:

```js
{
  "paperId": 999,
  "title": "Paper title",
  "authors": "Author One; Author Two",
  "track": "AI for Healthcare",
  "startTime": "3:00 PM",
  "endTime": "3:15 PM",
  "visible": true,
  "order": 8
}
```

Paper and session totals are calculated automatically.

Always enter the **complete author list** from an authoritative submission export. Keep the source punctuation and mark the corresponding author with `*` when the source does so. Do not shorten the list to the registered or presenting author.

Numeric searches are treated as exact paper-ID searches. For example, both `30` and `#30` show only paper ID 30. Text searches continue to match titles, authors, tracks, sessions, rooms, and dates.

## Print one session for a notice board

The regular website and the notice-board printout use the same schedule data; there is no separate print page to maintain.

1. Open **Technical program**.
2. Choose one value under **Session theme**. Each of the 10 themes identifies one session.
3. Select **Print Session _n_**, or press **Ctrl+P**.
4. Keep the paper size at **A4** and orientation at **Landscape**.

The print layout includes the session number and theme, date, time, venue, session chairs, paper sequence, paper ID, title, and complete author list. Other active search, day, and room filters are temporarily ignored while the selected session is printed, then restored after printing.

## Validate an update

Node.js is the only tool required for automated validation:

```powershell
npm test
```

The validator checks syntax, required fields, session-chair records, duplicate paper IDs, 15-minute paper timing, whether every paper fits inside its declared session slot, local asset paths, HTML file references, and removed legacy print-page artifacts.

For a browser preview from this folder:

```powershell
python -m http.server 5500
```

Then open `http://localhost:5500/` and check both program tabs, filters, mobile layout, guest images, and external links.

## Publishing workflow

The repository is `https://github.com/dd-joshi/icpcci26` and the GitHub Pages workflow is in `.github/workflows/pages.yml`.

1. Make and validate the content update locally.
2. Commit the update to Git.
3. Push it to the `main` branch.
4. GitHub Actions runs `npm test` and publishes the site automatically.
5. Check the Actions tab if an update does not appear on the public site.

The expected public address is `https://dd-joshi.github.io/icpcci26/`. A repository administrator must enable GitHub Pages with **GitHub Actions** as its source once; subsequent pushes deploy automatically.

## Instructions for future AI maintainers

Before changing the site:

1. Read this file and `data/schedule-data.js` completely.
2. Treat supplied event details as authoritative. Do not invent names, titles, dates, rooms, links, or affiliations.
3. Make routine content edits only in `data/schedule-data.js`.
4. Preserve `paperId` values, complete author lists, and check for duplicates.
5. Keep a session, its chairs, and its matching agenda entry consistent.
6. Use relative asset paths and meaningful image alternative text.
7. Update `conference.lastUpdated` after a public content change.
8. Run `npm test` after every edit.
9. Perform a browser check when markup, rendering logic, or styles change.
10. Maintain the current in-page A4 landscape print layout. Do not create a separate print page or duplicate schedule data.

If a requested section does not exist in the data model, add its data to `data/schedule-data.js`, add an empty structural container to `index.html`, render it safely in `assets/app.js`, document it here, and validate it in `scripts/validate-data.js`.
