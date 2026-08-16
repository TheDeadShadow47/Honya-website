# Honya

Landing page for **Honya**, an offline-first web novel reader for Android that runs
LNReader-compatible plugin repositories. It ships with zero built-in sources —
every source comes from a plugin repository you add yourself.

This repository contains the marketing/landing website, built with
[TanStack Start](https://tanstack.com/start) and deployed on Netlify.

## Development

Requires Node.js 22.12+ and [bun](https://bun.sh).

```sh
bun install
bun run dev
```

## Scripts

- `bun run dev` — start the dev server
- `bun run build` — production build (SSR via Nitro)
- `bun run preview` — preview the production build
- `bun run lint` — run ESLint
- `bun run format` — run Prettier
