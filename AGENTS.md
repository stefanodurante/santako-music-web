# AGENTS.md

## Cursor Cloud specific instructions

This is a single Astro 5 static site (not a monorepo). No Docker, database, or `.env` files required.

### Quick reference

| Action | Command |
|---|---|
| Install deps | `npm install` |
| Dev server | `npm run dev` (serves on `localhost:4321` with `--host`) |
| Build | `npm run build` (outputs to `dist/`) |
| Tests | `npm run test` (Vitest, 28 tests in `src/lib/git-workflow.test.ts`) |
| Tests (watch) | `npm run test:watch` |

Full command list is in `README.md` under "Commands".

### Notes

- The site fetches some content from an external WordPress API (`santakomusic.com`). This is optional — all calls have graceful fallback, so local dev works fully without it. Pages affected when offline: `/noticias` and `/legal/*`.
- The build fetches WordPress content at build time, so `npm run build` takes ~10s due to network requests. The dev server is fast.
- Node.js v20+ is required (specified in `netlify.toml`).
- Both `package-lock.json` and `pnpm-lock.yaml` exist; the project scripts use `npm`.
- Git workflow rules are in `.cursor/rules/git-feature-workflow.mdc` and `.cursor/rules/commit-types.mdc`.
