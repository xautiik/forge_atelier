# Forge Atelier Website

A marketing and portfolio site for Forge Atelier built with Next.js and SCSS. The app runs entirely on local dummy data (no backend required) to showcase services, portfolio case studies, team, blog, testimonials, and contact flows.

## Tech Stack
- Next.js (pages router)
- React
- SCSS modules & global styles
- Dummy data source: `assets/data/dummydata.js`

## Getting Started
1) Install dependencies
```bash
npm install
```

2) Run the dev server
```bash
npm run dev
```
App defaults to http://localhost:3000

## Project Structure (high level)
- `pages/` – route files (home, services, portfolio, blogs, team, contact, career)
- `sections/` – page sections (Hero, About, Services, Portfolio, Team, Blog, Contact, Career)
- `components/` – reusable UI (cards, headers, footers, dashboard stubs)
- `assets/data/dummydata.js` – all display content (services, case studies, blogs, testimonials, brands, team, dashboard counts)
- `public/images/` – images referenced by dummy data

## Notes on Dummy Data
- All API calls have been removed; UI pulls from `assets/data/dummydata.js`.
- Detail pages (blogs/[id], services/[id], case-studies/[id]) generate paths from dummy data.

## Available Scripts
- `npm run dev` – start dev server
- `npm run build` – production build
- `npm start` – run built app

## Customization
- Update copy or lists in `assets/data/dummydata.js`.
- Replace images in `public/images/` and adjust paths in dummy data if needed.
- Styles live in `styles/` (SCSS) and component-specific files.

## License
Proprietary / internal use. Update this section if you plan to open source.
