# ICPCCI 2026 static website

This is a dependency-free static conference website. It can be opened directly from `index.html` and can be hosted on GitHub Pages, Vercel, Netlify, or any ordinary web server.

## Maintenance rule

**Edit conference content in `data/schedule-data.js`.** Do not duplicate conference details in `index.html` or `assets/app.js`.

- `data/schedule-data.js` is the single source of truth for conference details, announcements, guests, presenter notes, partners, agenda items, sessions, and papers.
- `index.html` contains structural containers and accessibility markup.
- `assets/app.js` renders the data and provides search, filters, and tabs.
- `assets/styles.css` controls presentation and responsive layout.

The page remains fully static. There is no database, build step, or runtime backend.

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

The folder is ready for Git-based deployment, but a remote repository and hosting account must be selected by the site owner.

Recommended workflow:

1. Create a GitHub repository and push this folder to its `main` branch.
2. Import that repository into Vercel as a static site. No build command is required.
3. Connect the production domain in Vercel.
4. Make future content edits on a branch and push it to receive a preview deployment.
5. Merge the approved change into `main`; Vercel publishes it automatically.

GitHub Pages can also publish directly from the repository root on the `main` branch.

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
