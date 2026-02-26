# Santako Music Web

Archivo vivo de música y cultura urbana.

> Documentación completa: [ARCHITECTURE.md](ARCHITECTURE.md) · Manual operativo: [PROJECT_MANUALmd](PROJECT_MANUALmd)

## 🚀 Project Structure

```text
/
├── public/
├── src/
│   ├── components/
│   │   ├── ui/
│   │   ├── grid/
│   │   └── home/
│   ├── data/
│   │   └── mock/
│   ├── layouts/
│   ├── pages/
│   ├── styles/
│   └── types/
└── package.json
```

## 🧞 Commands

| Command             | Action                                        |
| :------------------ | :-------------------------------------------- |
| `npm install`       | Installs dependencies                         |
| `npm run dev`       | Starts local dev server at `localhost:4321`   |
| `npm run build`     | Build your production site to `./dist/`       |
| `npm run preview`   | Preview your build locally                    |
| `npm run deploy`         | Push a main (Netlify auto-deploy)         |
| `npm run deploy:preview` | Build + Netlify preview deploy            |
| `npm run deploy:prod`    | Build + Netlify production deploy         |
| `npm run test`           | Run tests (Vitest)                        |
| `npm run test:watch`     | Tests in watch mode                       |

## Tech Stack

- Astro 5
- Tailwind CSS 4
- TypeScript (strict mode)
- Vitest (testing)

Imágenes: **SmartImage** (variantes `hero` / `card` / `agenda` / `portrait`), placeholders en `public/images/` y `src/assets/`. Efectos unificados en grids (zoom, sombra, overlay). Ver [ARCHITECTURE.md](ARCHITECTURE.md) §4.3.

## Cursor Rules

### Git

| Command | Action |
| :------ | :----- |
| new feature \<nombre\> | Crea rama `feature/` desde develop |
| new content \<nombre\> | Crea rama `content/` desde develop |
| new fix \<nombre\> | Crea rama `fix/` desde develop |
| merge feature | Mergea la rama actual (feature/content/fix) a develop |
| prepare production | Mergea develop a main |
| preview | Build + Netlify preview deploy |
| deploy prod | Push a main (Netlify auto deploy) |

### Commit format

`type: short description`

| Type | Use for |
|------|---------|
| `feat` | New features, components, functionality |
| `content` | Text, copy, media, data (no code logic change) |
| `fix` | Bug fixes, corrections |
| `refactor` | Code improvements without changing behavior |
| `style` | Visual adjustments (CSS, spacing) |
| `docs` | Documentation |
| `chore` | Tooling, config, maintenance |