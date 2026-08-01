# NSA @ Texas State

The official website of the **Nepalese Student Association at Texas State University**.

It's two things in one: a **resource hub** (visa prep, registration, academic honesty,
housing) and a **community home** (events, photos, the exec board, culture). The goal is
simple — _the one link every Nepali Bobcat can share._

Anyone can propose an idea, request a change, or add a feature — see the
[Contribution Guide](CONTRIBUTING.md) to get started.

---

## Who it's for

- Students **admitted but still in Nepal**, figuring out visas and what to pack.
- **Brand-new Bobcats** in their first 30 days on campus.
- **Current members** looking for events and community.
- The **exec board** keeping it all up to date each semester.

> We're students, not advisors. For anything official (visa, immigration, tuition,
> academic standing) the site points people to the right campus office rather than giving
> the ruling itself.

---

## Tech stack

| Area | Choice |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI | React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS v4 with a token-based global color hub |

> This project uses a modified Next.js. Before writing code, read the relevant guide in
> `node_modules/next/dist/docs/` — see [`AGENTS.md`](AGENTS.md).

---

## Getting started

Requires Node.js 20+.

```bash
npm install     # install dependencies
npm run dev     # start the dev server
```

Then open [http://localhost:3000](http://localhost:3000).

Other useful commands:

```bash
npm run build   # production build
npm run lint    # lint the code
```

---

## Project structure

```
app/                 Routes (App Router)
├── page.tsx         Homepage
├── layout.tsx       Root layout: header, footer, fonts, metadata
├── globals.css      Global color hub — every color lives here as a token
├── (community)/     Events · Gallery · Exec Board · About
└── (resources)/     Coming from Nepal · New Bobcat Guide · Academics · Living · Resources
components/          Reusable UI (ui/, layout/, home/)
lib/                 Site config (nav, socials, contacts) and helpers
public/              Static assets and icons
```

### The color hub

Every color is a token defined once in `app/globals.css`. Components use semantic classes
(`bg-primary`, `text-accent`, …) — never raw hex. Change a token in that one file and it
updates across the whole site, light and dark mode included.

---

## What's new — v0.1.0

First release. The foundation is in place:

- **Design system + global color hub** — one file controls all colors, with dark mode.
- **Responsive layout** — sticky header with a mobile menu, footer, and reusable UI
  primitives (`Button`, `Card`, `Container`, `Section`).
- **Homepage** — bilingual hero (नमस्ते, Bobcat 🐾), a marigold-garland accent, audience
  "Start here" cards, an event teaser, a photo splash, and a community band.
- **All pages routed** — every Community and Survive & Thrive page exists, each with a
  placeholder ready for real content.
- **Favicons + PWA manifest** — wired for browser tabs, iOS, and Android install.

**Coming next:** real content for each page, starting with the New Bobcat Guide checklist,
plus confirmed links, social handles, and photos.

---

## Contributing

We welcome contributions from everyone. Read the [Contribution Guide](CONTRIBUTING.md) for
how to set up locally, submit changes, and propose ideas or features.

Go Bobcats! 🐾
