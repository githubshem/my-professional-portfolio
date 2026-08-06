# My Professional Portfolio

A single-page personal portfolio built with React 19, Vite, and Tailwind CSS. Dark synthwave theme, terminal boot loader, and a content layer kept separate from the components. Design inspired by [brittanychiang.com](https://brittanychiang.com).

**Live:** [shemportfolio.tech](https://www.shemportfolio.tech/)

## Tech stack

- **React 19** (function components and hooks, single page with hash anchors, no router)
- **Vite 7**, aliased to `rolldown-vite` through the `overrides` field in `package.json`
- **Tailwind CSS 3.4** with PostCSS and Autoprefixer
- **react-icons** (Feather set)
- Plain JavaScript and JSX, no TypeScript
- Motion is CSS keyframes, `requestAnimationFrame`, and `IntersectionObserver`, no animation library

## Getting started

Requires Node 22 and npm.

```bash
npm install
```

```bash
npm run dev
```

The dev server runs at `http://localhost:5173`.

## Scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the Vite dev server with hot reload |
| `npm run build` | Build the production bundle into `dist/` |
| `npm run preview` | Serve the built `dist/` locally |
| `npm run lint` | Run ESLint over all `.js` and `.jsx` files |

There is also `npm run lint:sarif`, which is the same lint run with SARIF output for CI. GitHub Actions runs the lint and the build on every push and pull request to `main`.

## Project structure

```
src/
  App.jsx          Loader, background layers, section composition
  index.css        Tailwind layers plus the hover and cursor effect system
  components/      Navbar, Hero, About, Experience, Projects, Certifications, Contact, Footer
  config/site.js   One-off copy: identity, hero, about, contact, nav, socials
  data/            Collections: experience, projects, skills, certifications
  utils/           Shared helpers (pointer spotlight coordinates)
  assets/          Profile photos and badge images
```

## Customizing the content

Edit content in the config and data files rather than in the components.

- **`src/config/site.js`** holds everything that appears once: name, role, email, hero copy, about paragraphs, contact block, footer credits, nav items, social links, and the terminal loader boot sequence.
- **`src/data/`** holds collections that grow over time: `experience.js`, `projects.js`, `skills.js`, and `certifications.js`.

Two things to watch out for:

1. `index.html` cannot import the config, so the page `<title>` and meta description are static. If you change the name or role in `site.js`, update `index.html` to match.
2. `src/assets/` is listed in `.gitignore`. The tracked images were force-added because the build imports them directly, so if you swap in your own photos you need `git add -f src/assets/your-image.png` or the production build will fail.

## Deployment

`npm run build` produces a static `dist/` folder that any static host will serve. `vite.config.js` does not set a `base`, so deploying to a root path (a custom domain, Vercel, or Netlify) works as is. A GitHub Pages *project* site served from a subpath would need `base` set to the repo name.

## License

MIT. See [LICENSE](LICENSE).
