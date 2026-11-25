# coloringpro-site

Marketing website for the Coloring PRO app. React 19 + TypeScript + Vite,
organized by MVC: `src/models` (data), `src/controllers` (state/logic hooks),
`src/views` (granular components, one file = one component).
The visual language mirrors the mobile app (`../coloring_app/core_ui`):
Playfair Display + Montserrat, warm off-white backgrounds, sage accents,
pill shapes and soft shadows.

## Pages (client-side routes)

- `/` (`index.html`) — landing page
- `/privacy.html` — privacy policy
- `/terms.html` — terms of use
- `/delete-account.html` — account deletion instructions

## Commands

- `npm install` — install dependencies
- `npm run dev` — start dev server (http://localhost:5173)
- `npm run build` — typecheck + production build to `dist/`
- `npm run preview` — serve the production build locally

## Assets

Static files live in `public/` (`public/assets`, `favicon.ico`). Fonts are
bundled from `src/assets/fonts` via `src/index.css`.
