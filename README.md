# Sheilla Macharia

My portfolio.

- **Live:** [sheilla-macharia.vercel.app](https://sheilla-macharia.vercel.app)
- **Mirror:** [sheilamumbi.github.io/sheillamacharia.github.io](https://sheilamumbi.github.io/sheillamacharia.github.io/)

Built with React, TypeScript and Vite, with hand-written CSS. Icons from lucide-react and simple-icons. Set in Plus Jakarta Sans.

## Editing

- All text, experience, projects, tools and stats: `src/content.ts`
- Screenshots and the SokoLive recording: `public/work/`
- Hero portrait (background removed): `public/sheilla-cutout.webp`

```bash
pnpm install
pnpm dev     # http://localhost:5173
pnpm build
```

Pushing to `main` deploys to both: Vercel builds it through its GitHub integration (settings in `vercel.json`), and GitHub Pages builds it through `.github/workflows/deploy.yml`.
