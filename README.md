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

## License

MIT. See [LICENSE](LICENSE).
