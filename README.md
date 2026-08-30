# jackbelleville.com

Personal portfolio — React + Vite, deployed to GitHub Pages via GitHub Actions.

## Local development
```bash
npm install
npm run dev
```

## Deployment
Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and deploys `dist/` to GitHub Pages. One-time setup in the repo: **Settings → Pages → Source → GitHub Actions**, then add `jackbelleville.com` as the custom domain (the `public/CNAME` file keeps it set across deploys).

## To do
- [ ] Drop `Jack_Belleville_Resume.pdf` into `public/`
- [ ] Record a short demo clip of the card scanner → `public/demo-pokemon-card-scanner.mp4`, set `hasDemo: true` in `src/App.jsx`
