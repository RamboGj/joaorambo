# joaorambo — Portfolio Landing Page

The source for my personal portfolio: a single-page landing site introducing me as a
Fullstack Software Engineer, with an interactive 3D hero, my experience, tech stack, and
ways to get in touch.

**🌐 Live site → [joaorambo.vercel.app](https://joaorambo.vercel.app)**

---

## About

A fast, animated one-pager built with the App Router. Content is kept entirely in
[`app/_data/profile.ts`](app/_data/profile.ts) so copy can be edited without touching
layout. The page is composed of independent section components — hero, marquee, stats,
highlights, experience, stack, and contact.

Highlights:

- **Interactive 3D hero** — a wireframe icosahedron with a vertex point cloud and drifting
  motes rendered in [Three.js](https://threejs.org/), rotating on its own and leaning toward
  the cursor. Respects `prefers-reduced-motion`.
- **Scroll reveals** driven by an `IntersectionObserver`, with a `<noscript>` fallback so the
  page still renders without JavaScript.
- **SEO & social cards** — Open Graph and Twitter metadata plus a generated share card.
- **Fully responsive**, accessible, and typography-forward using Space Grotesk, Manrope, and
  JetBrains Mono.

## Tech Stack

| Area       | Tools                                        |
| ---------- | -------------------------------------------- |
| Framework  | [Next.js 16](https://nextjs.org) (App Router)|
| Language   | [TypeScript](https://www.typescriptlang.org) |
| UI         | [React 19](https://react.dev)                |
| Styling    | [Tailwind CSS 4](https://tailwindcss.com)    |
| 3D         | [Three.js](https://threejs.org)              |
| Deployment | [Vercel](https://vercel.com)                 |

## Getting Started

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

### Scripts

| Command         | Description                       |
| --------------- | --------------------------------- |
| `npm run dev`   | Start the local dev server        |
| `npm run build` | Create a production build         |
| `npm run start` | Serve the production build        |
| `npm run lint`  | Run ESLint                        |

## Project Structure

```
app/
├── _components/    Section components (hero, stats, experience, stack, contact …)
├── _data/          Site copy and content (profile.ts)
├── _social/        Open Graph / share card artwork
├── layout.tsx      Root layout, fonts, and metadata
└── page.tsx        Page composition
```

## Deployment

Deployed on [Vercel](https://vercel.com) with automatic builds on push to `main`.

**Live at → [joaorambo.vercel.app](https://joaorambo.vercel.app)**

## Contact

**João Rambo** — Fullstack Software Engineer

- 🌐 [joaorambo.vercel.app](https://joaorambo.vercel.app)
- 💼 [LinkedIn](https://www.linkedin.com/in/rambog/)
- 🐙 [GitHub](https://github.com/RamboGj)
- ✉️ jpramboguanabarar@gmail.com
