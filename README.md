# Aayan — creator portfolio

```bash
npm install
npm run build && npm start   # http://localhost:3200
```

## Updating content (monthly)
Edit **`lib/content.ts`** only: stats, reels (views/likes/URL), collabs, about, services.

## Adding photos
1. Export WebP at the size in `docs/brief.md` §5A, put it in `public/photos/`.
2. Set that slot's `src`, e.g. `hero: { src: "/photos/hero.webp", ... }`.
   Placeholder boxes use the same aspect ratio, so nothing shifts.
Gallery slots 7–9 stay hidden until they have a `src`.

## Before launch — owner inputs
- [ ] `NEXT_PUBLIC_SITE_URL` = real domain (see `.env.example`).
- [ ] Photos (hero, about, 6 reel covers, 2 collab stills, 6–9 gallery).
- [ ] Fill placeholders: bio lines, languages, manager (or set `management: null`).
- [ ] OG image: currently text-only; swap to hero photo + text once photos land.
- [x] Open each reel in a real browser and confirm the Instagram embed plays.
