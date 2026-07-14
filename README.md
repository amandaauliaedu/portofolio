# Portfolio — Amanda Aulia

A bilingual (Indonesian/English) portfolio site built with **React (Vite)**, **Tailwind CSS**, and
**Framer Motion**.

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

Output is in the `dist/` folder, ready to deploy to Vercel, Netlify, GitHub Pages, etc.

## Project structure

```
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── src/
    ├── main.jsx      # entry point
    ├── App.jsx        # the entire portfolio (all sections + logic)
    └── index.css      # Tailwind directives
```

## Editing content

All content lives near the top of `src/App.jsx` as plain JavaScript arrays/objects — `NAV`,
`ROLES`, `ABOUT`, `EDUCATION`, `EXPERIENCE`, `PROJECTS`, `SKILLS`, `CERTS`, `ORGS`, `COMMITTEES`,
and the `T` dictionary for UI labels. Most text fields use a bilingual `{ id: "...", en: "..." }`
shape — edit both, or just one language if you don't need the other.

## Features

- **Light / dark mode** toggle (sun/moon icon, top right of the nav).
- **ID / EN language switch** next to the theme toggle — nearly all copy is bilingual.
- **Rotating role text** under the name (`ROLES` array — Data Analyst / Data Scientist / ML
  Enthusiast). Edit the array to change the roles shown.
- **CV download button** in the hero, next to "Get in Touch" — links to the real CV PDF.
- Auto-advancing **skills carousel** and **certificates coverflow carousel**.
- Filterable **projects grid** by category, with a featured project shown larger.
- A contact form that opens the visitor's email client with a pre-filled message (`mailto:`),
  plus a click-to-copy email address and a WhatsApp link.
- Scroll-reveal animations throughout via Framer Motion.

## Replace placeholder images with real assets

| What | File location | Used in |
|---|---|---|
| Profile photo | `public/profile.jpg` | Hero, next to the name |
| CV / résumé PDF | `public/Amanda_Aulia_CV.pdf` | "Download CV" button in the hero |

Overwrite these files with the real photo/PDF — no code changes needed.

## Update social & project links

In `src/App.jsx`:
- `SOCIALS` → LinkedIn, GitHub, email, and WhatsApp links (top of the file)
- `PROJECTS[].` → add a `link` field per project if you want a "view project" link (not included
  by default in this template — the cards currently just display an arrow icon as a visual accent)

## About the "Topic-Based Legislation Network Mapping" publication

This version intentionally does **not** include the "Topic-Based Legislation Network Mapping with
ChatGPT and Neo4j" publication. Instead, it adds three other projects from the CV: **PCA Impact
Analysis**, **Study Program News Retrieval** (TF-IDF & Cosine Similarity), and **Classification
Model Comparison**. If you'd like the Neo4j publication included after all, just ask.
