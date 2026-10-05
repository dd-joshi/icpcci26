# ICPCCI 2026 static website

This is a dependency-free static conference website. It can be opened directly from `index.html` and is configured to publish through GitHub Pages.

## Maintenance rule

**Edit conference content in `data/schedule-data.js`.** Do not duplicate conference details in `index.html` or `assets/app.js`.

- `data/schedule-data.js` is the single source of truth for conference details, announcements, guests, presenter notes, partners, agenda items, sessions, and papers.
- `index.html` contains structural containers and accessibility markup.
- `assets/app.js` renders the data and provides search, filters, and tabs.
- `assets/styles.css` controls presentation and responsive layout.

The page remains fully static. There is no database, build step, or runtime backend.

## Current technical-program authority

The theme-based session names, rooms, paper allocation, and paper sequence currently follow the organizer-supplied PDF `4ICPCCI 2026 - Technical Program - Print.pdf`, dated 5 October 2026. The website assigns 15-minute presentation times in the listed paper order.

- Keep paper 237 titled **“Design and Performance Analysis of a Minimized-Switch Multilevel Inverter with Advanced PWM Control for Grid-Connected Renewable Energy Applications”** unless the site owner supplies a newer correction.
- The site owner moved paper 224 to Session 8 on 9 October, at 10:30–10:45 AM, and confirmed its author as **P, Elangovan\***. This explicit correction overrides its earlier PDF placement in Session 3.
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
  "lastUpdated": "5 October 2026, 4:30 PM IST"
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

### Change agenda, session, or paper sequence

Collections display in array order by default. For explicit ordering, add numeric `order` values to every item in that collection. Smaller numbers appear first.

This works for announcements, guests, presenter points, partners, agenda items, sessions, and papers. Set `visible: false` on any item to hide it without deleting it.

When moving a session, update its `date`, `dateLabel`, `slot`, and `room` together. When moving a paper, update `startTime` and `endTime`. If the general timetable changes, also update the matching item in `agenda`.

### Add a paper

Add the paper inside the correct session's `papers` array:

```js
{
  "paperId": 999,
  "title": "Paper title",
  "authors": "Author One; Author Two",
  "track": "AI/ML",
  "startTime": "3:00 PM",
  "endTime": "3:15 PM",
  "visible": true,
  "order": 8
}
```

Paper and session totals are calculated automatically.

Numeric searches are treated as exact paper-ID searches. For example, both `30` and `#30` show only paper ID 30. Text searches continue to match titles, authors, tracks, sessions, rooms, and dates.

## Validate an update

Node.js is the only tool required for automated validation:

```powershell
npm test
```

The validator checks syntax, required fields, duplicate paper IDs, local asset paths, HTML file references, and removed print-page artifacts.

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
5. Check the Actions tab if an update does not appear online.

The expected public address is `https://dd-joshi.github.io/icpcci26/`. A repository administrator must enable GitHub Pages with **GitHub Actions** as its source once; subsequent pushes deploy automatically.

## Instructions for future AI maintainers

Before changing the site:

1. Read this file and `data/schedule-data.js` completely.
2. Treat supplied event details as authoritative. Do not invent names, titles, dates, rooms, links, or affiliations.
3. Make routine content edits only in `data/schedule-data.js`.
4. Preserve `paperId` values and check for duplicates.
5. Keep a session and its matching agenda entry consistent.
6. Use relative asset paths and meaningful image alternative text.
7. Update `conference.lastUpdated` after a public content change.
8. Run `npm test` after every edit.
9. Perform a browser check when markup, rendering logic, or styles change.
10. Do not recreate the removed print page or print-specific assets unless the site owner explicitly requests them.

If a requested section does not exist in the data model, add its data to `data/schedule-data.js`, add an empty structural container to `index.html`, render it safely in `assets/app.js`, document it here, and validate it in `scripts/validate-data.js`.
