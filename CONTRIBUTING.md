# Contributing to NSA-TXSTATE

Thanks for your interest in contributing! This is the official website of the
**NSA (Texas State University)**. Anyone is welcome to present ideas, request
changes, or add features. This guide explains how.

## Ways to contribute

- **Present an idea or request a change** — open a [GitHub Issue](../../issues).
- **Add a feature or fix** — open a Pull Request (see below).
- **Improve docs or content** — same PR workflow; even small fixes are welcome.

## Tech stack

This site is built with:

- [Next.js](https://nextjs.org/) 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4

## Local setup

```bash
# 1. Fork and clone the repo
git clone https://github.com/<your-username>/NSA-TXSTATE.git
cd NSA-TXSTATE

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site. Edits to
files under `app/` hot-reload automatically.

## Submitting changes

1. **Create a branch** off `main`:
   ```bash
   git checkout -b feature/short-description
   ```
2. **Make your changes.** Keep them focused — one feature or fix per PR.
3. **Check your work** before pushing:
   ```bash
   npm run lint    # lint
   npm run build   # ensure it builds
   ```
4. **Commit** with a clear message:
   ```bash
   git commit -m "Add: short description of the change"
   ```
5. **Push and open a Pull Request** against `main`. In the PR description,
   explain *what* you changed and *why*.

## Reporting ideas & requesting features

Not ready to write code? That's fine. Open an issue and include:

- **What** you'd like to see (the idea or feature).
- **Why** it matters (the problem it solves or value it adds).
- Any mockups, links, or examples that help explain it.

A maintainer will review, discuss, and help move it forward.

## Guidelines

- Be respectful and constructive in issues and reviews.
- Match the existing code style; run `npm run lint` before submitting.
- Keep pull requests small and self-contained where possible.
- Discuss large changes in an issue first so we can align early.

## Questions

Open an issue with the `question` label and we'll help out. Welcome aboard! 🎉
