# Portfolio — Amanda Aulia

A portfolio website built with **React (Vite)** and **Framer Motion**, based on Amanda Aulia's CV
(Data Scientist / Data Analyst).

## Run locally

Make sure Node.js (v18+) is installed, then run:

```bash
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

## Build for production

```bash
npm run build
```

The output is in the `dist/` folder, ready to deploy to Vercel, Netlify, GitHub Pages, etc.

## Project structure

```
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx      # entry point
    ├── App.jsx        # all sections of the portfolio
    └── index.css      # design tokens (colors, fonts), light/dark theme, styling
```

## Editing content

All data (education, experience, projects, skills, certifications, organizations, contact) lives
near the top of `src/App.jsx` as plain JavaScript arrays/objects (`EDUCATION`, `EXPERIENCE`,
`PROJECTS`, `SKILLS`, `CERTS`, `ORGS`, `ROLES`). Edit the text there — no need to touch the
component code below it.

## Features

- **Light / dark mode** — toggle button in the top navigation (sun/moon icon). The choice is saved
  in the browser (`localStorage`) and defaults to the visitor's system preference on first visit.
- **Rotating role text** under the name on the hero, cycling through `ROLES` (`Data Analyst`,
  `Data Science`, `Marketing Research`) — edit the `ROLES` array to change them.
- **CV section** with a real "Download CV (PDF)" button, plus a client-side "Upload a document"
  dropzone. Note: since this is a static site, the upload only works in the visitor's browser
  session (it shows the selected file name) — to actually receive uploaded files you'll need to
  connect it to a backend or a storage service (e.g. an API route, Firebase, or an email/file
  upload service).
- Scroll-reveal animations (fade + slide up) via Framer Motion throughout.

## Replace placeholder images with real assets

All images live in the `public/` folder and are currently gray placeholders labeled "replace this
image" — the files are named to match their content so they're easy to find:

| What | File location | Used in |
|---|---|---|
| Profile photo | `public/profile.jpg` | Hero (top of page) |
| CV / résumé PDF | `public/Amanda_Aulia_CV.pdf` | CV section (already the real uploaded CV) |
| 8 certificate images | `public/certs/*.jpg` | Skills → Certifications |
| 4 organization documentation images | `public/orgs/*.jpg` | Skills → Organizations |

Simply overwrite the file with the same name using your real photo/scan — no code changes needed.
If you'd rather use different filenames, update the `image` path for that item in `src/App.jsx`
(in the `CERTS` and `ORGS` arrays).

## Update project, certificate, and organization links

In `src/App.jsx`, every item in the `PROJECTS`, `CERTS`, and `ORGS` arrays has a `link` field that
currently points to an example URL (`example.com` / placeholder GitHub). Replace them with:
- `PROJECTS[].link` → the GitHub repo or live demo for each project
- `CERTS[].link` → the real certificate verification URL (e.g. a Coursera or Credly link)
- `ORGS[].link` → a link to real documentation or a certificate for that organizational activity
