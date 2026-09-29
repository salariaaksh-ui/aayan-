# Aayan (@aayann26_) — creator portfolio

**NOT a real-estate site.** Ignore the agency RE page set (listings, maps, agent
schema, Hostinger rule) from the parent `CLAUDE.md`. Craft floor still applies:
LCP ≤2.5s, CLS ≤0.1, WCAG 2.2 AA, mobile-first, no horizontal scroll.

- Brief (source of truth for every number/word): `docs/brief.md`
- Home page (`/`) plus a full gallery page (`/gallery`; home shows the 3 `featured` shots). Next.js 16 App Router, Tailwind v4, no UI kit, no Motion
  (reveal = CSS + IntersectionObserver, hidden only under `html.js`).
- **All editable content lives in `lib/content.ts`.** Numbers are strings; never
  invent stats, rates, demographics or brand names. Follower count stays out.
- No Zudio logo. WhatsApp + Instagram glyphs (Simple Icons, CC0) only in the corner dock (`components/social-dock.tsx`), owner-approved; plain text elsewhere.
- No stock / AI people photos. Image slots are `src: null` placeholders until
  real photos land in `public/photos/`.
- No contact form (portfolio is sent in DMs): email, Instagram and management only. Instagram embeds: loaded on click only.
- Tailwind v4 ships an `invert` utility — the token-swap class is `.inverted`.
- Dev/prod port: 3200.
