# Arya Kumalajati — Engineering Portfolio

A responsive engineering portfolio built with **Next.js App Router**, **TypeScript**, **Tailwind CSS v4**, and **Lucide icons**.

## Run locally

Requirements: Node.js 20.9+ and npm.

```bash
npm install
npm run dev
```

Open http://localhost:3000. For a production check:

```bash
npm run lint
npm run typecheck
npm run build
```

## Deploy on Vercel

1. Use the repository at `https://github.com/aryazeref/Portfolio`.
2. Upload these files to its root (or push from your local Git checkout):

```bash
git init
git branch -M main
git add .
git commit -m "Initial engineering portfolio"
git remote add origin https://github.com/aryazeref/Portfolio.git
git push -u origin main
```

3. Go to https://vercel.com/new, import your new repo, and choose **Deploy**.
4. Next.js is auto-detected. No environment variables or database are required.
5. Optionally connect your own domain in Vercel's project settings.

**Note:** The repository is already initialized. For an existing clone, simply run `git pull` before making changes.

## Customize

- Edit `lib/data.ts` for all projects, experience, links, and skills.
- Edit `app/page.tsx` for the homepage layout and copy.
- Edit `app/globals.css` for the design palette and animations.
- Project detail pages are generated automatically from the projects array.
- Replace `public/arya-kumalajati-cv.pdf` whenever you update your CV.
- `public/favicon.svg` is the custom site icon.
- The contact form is intentionally a `mailto:` link (no backend, no data collection).

## Privacy / accuracy

- PPI registration records and employer source code are **not included**.
- Course projects and MVPs are labeled as such; no unverified speedup claims.
- Before publishing, review all copy, dates, contact details, and links.

## License

This is a personal portfolio. Contact the owner before reproducing the design or personal content elsewhere.
