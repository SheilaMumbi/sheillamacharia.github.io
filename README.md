# Sheilla Mumbi Macharia — Portfolio

Portfolio for Sheilla Mumbi Macharia: a data scientist and backend engineer who is learning front-end. Work is grouped by those three pillars: backend (FastAPI, Flask, PostgreSQL, AI-assisted pipelines), data science (modeling, analytics, dashboards) and front-end (React, TypeScript, Tailwind).

**Live site:** [sheilamumbi.github.io/sheillamacharia.github.io](https://sheilamumbi.github.io/sheillamacharia.github.io/)

## Stack

React 18, TypeScript, Vite, Tailwind CSS 3, Framer Motion. All content (projects, skills, journey) lives in [`jack-preview/src/data/portfolio.ts`](jack-preview/src/data/portfolio.ts), so adding a project is one object in that file.

## Running locally

```bash
cd jack-preview
pnpm install
pnpm dev      # http://localhost:5173
pnpm build    # type-check + production build into dist/
```

## Deploying

`.github/workflows/deploy.yml` builds `jack-preview` and publishes `dist/` to GitHub Pages on every push to `main`. In the repo's **Settings → Pages**, set the source to **GitHub Actions**.

## Structure

```
jack-preview/        The site (Vite app)
  src/data/          Projects, skills and journey content
  src/components/    Sections: Hero, About, Skills, Projects, MoreWork, Journey, Contact
index.html, cv.html  The previous static site (kept until the new one is live)
```

## Contact

- Email: [sheilamacharia8@gmail.com](mailto:sheilamacharia8@gmail.com)
- LinkedIn: [sheilla-macharia-458422324](https://www.linkedin.com/in/sheilla-macharia-458422324)
- GitHub: [@SheilaMumbi](https://github.com/SheilaMumbi)
