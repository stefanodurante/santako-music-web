# Santako Music Web

Archivo vivo de música y cultura urbana.

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
| `npm run deploy:preview` | Build + Netlify preview deploy           |
| `npm run deploy:prod`    | Build + Netlify production deploy         |

## Tech Stack

- Astro 5
- Tailwind CSS 4
- TypeScript (strict mode)

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

`type: short description` — tipos: feat, fix, refactor, style, content, docs, chore