# Website build prompt: Aayan (@aayann26_) creator portfolio

Copy everything below the line into AI Kaarigar.

---

## 1. What to build

Build a professional, photo-led, single-page portfolio website for **Aayan**, an Instagram creator (**@aayann26_**) based between **Delhi and Jammu**, India. He makes relatable college/dating humour reels, outfit and transition reels, and travel content.

The site's job is to get **brands, influencer-marketing agencies and campus/meme pages** to contact him for paid collabs. A brand manager should understand within 10 seconds who he is, how far his content reaches, what he's done with brands, and how to contact him.

Tone: confident, young, clean and credible. It should feel like a creator who is easy to work with, not a meme page and not a corporate site.

## 2. Hard rules

- Use **only the numbers in this prompt**. Never invent follower counts, audience demographics, rates or brand names.
- Do **not** put the follower count anywhere prominent. Lead with views, shares and engagement.
- Do **not** use the Zudio or Instagram logos. Write brand names as plain text.
- Keep every stat in **one editable data object or config file** so it can be updated monthly without touching the layout.
- Anything in `[square brackets]` is a placeholder the owner will fill in. Show it as visible placeholder text; don't make something up.
- **Every photo is a placeholder for now** (see section 5A). Do **not** use stock photos, AI-generated people or random images from the internet. The site is about a real person, so a fake face would be misleading.

## 3. Site structure (single page, anchor navigation)

1. Sticky nav
2. Hero
3. Numbers strip
4. What he makes (3 content lanes)
5. Featured reels (6 Instagram embeds)
6. Brand & campus collabs
7. Gallery (fits / portraits / travel photos)
8. About
9. Ways to collab
10. Contact (form + email + Instagram)
11. Footer

## 4. Section-by-section content and layout

### 4.1 Sticky nav
- Left: wordmark **AAYAN** in the display font, heavy weight, wide.
- Right links: Work · Collabs · About · Contact
- Right CTA button: **Work with me** (scrolls to Contact).
- Transparent over the hero, turning to a solid background with a hairline bottom border after scrolling. On mobile, use a hamburger that opens a full-screen menu.

### 4.2 Hero
- Layout: split screen on desktop. Left 55% is text; right 45% is a tall portrait photo (4:5) with slightly rounded corners. On mobile, stack the photo above the text.
- Eyebrow (small mono caps): `CREATOR · DELHI / JAMMU`
- Headline (very large display type): **Aayan**
- Subheadline: **College humour, fits and travel, made to be shared.**
- Supporting line: *1.8M+ reel views across his own reels and collabs, with Zudio and campus pages already on the list.*
- Buttons: primary **Work with me** (to Contact); secondary **Watch reels** (to Featured reels).
- Small floating tag overlapping the photo corner: `513K views · top reel`
- Photo: `[HERO PHOTO: best portrait/fit shot, vertical]`

### 4.3 Numbers strip
A full-width band with 5 stats in a row (3 + 2 on tablet, 2 columns on mobile). Big numbers in the display font, small grey labels below. Count up from 0 once when scrolled into view (skip if the user prefers reduced motion).

| Number | Label |
|---|---|
| 1.8M+ | total reel views |
| 513K | views on his top reel |
| 5 | reels past 125K views |
| 54K | median views per reel |
| 1,000+ | shares across reels |

Small caption under the strip: *Public reel counts as of 28 Sep 2026.*

### 4.4 What he makes (3 content lanes)
Section title: **Three kinds of content**
Three cards side by side (stacked on mobile). Each card has a small accent-coloured label, a title, 1–2 lines of text and a mono stat line at the bottom.

1. Label `REACH` · **Relatable humour**
   Text-overlay reels about college, dating and roasting himself. People tag friends and share them, so they travel well past his followers.
   Stat: `~178K avg views · 6 reels`
2. Label `FASHION & GROOMING` · **Fits & transitions**
   Walk-ins, glow-ups and outfit transitions. The natural home for fashion, grooming and gym brands.
   Stat: `Best: 83K views · 7.3% engagement`
3. Label `ENGAGEMENT` · **Travel**
   Treks and trips around Jammu & Kashmir. Viewers comment asking for the location.
   Stat: `Kashmir trek: 65K views · 6.0% engagement`

### 4.5 Featured reels
Section title: **Reels that show the range**
Intro line: *Tap any reel to watch it here.*

Show a grid of 6 vertical reel cards (3 columns on desktop, 2 on tablet, horizontal swipe carousel on mobile). For speed, **don't load all 6 Instagram embeds on page load.** Each card shows a 9:16 cover image (`[REEL COVER]` placeholder) with a play icon. On click, load the official Instagram embed for that reel in a modal (blockquote embed + `https://www.instagram.com/embed.js`). If the embed fails, open the reel on Instagram in a new tab.

Under each card: a category chip, a big view count, the caption in quotes, a small line with likes · comments · shares, and a thin bar showing views relative to the top reel (513K = 100%).

| # | Chip | Views | Caption | Likes · Comments · Shares | Engagement | Bar | URL |
|---|---|---|---|---|---|---|---|
| 1 | Campus collab (with @amityfreshers) | 513K | "100% acceptance rate btw" | 9.4K · 569 · 84 | 2.0% | 100% | https://www.instagram.com/aayann26_/reel/Dbs2cMlJHxn/ |
| 2 | Brand collab (Zudio) | 310K | "School's out, drip's in" | 3.5K · 94 · 30 | 1.2% | 60% | https://www.instagram.com/aayann26_/reel/DdjWW9bsgkW/ |
| 3 | Humour | 204K | "kya baat hai ❤️‍🔥" | 12.6K · 66 · 288 | 6.3% | 40% | https://www.instagram.com/aayann26_/reel/DXwTELrRX6L/ |
| 4 | Humour | 129K | "lyrics don't match my appearance" | 4.7K · 36 · 192 | 3.8% | 25% | https://www.instagram.com/aayann26_/reel/DX0_xOdx4Zo/ |
| 5 | Fits & transitions | 83K | "i am turning footsteps into electricity" | 5.8K · 99 · 129 | 7.3% | 16% | https://www.instagram.com/aayann26_/reel/DVlLpO-EaWb/ |
| 6 | Travel | 65K | "conquered" | 3.9K · 23 · 21 | 6.0% | 13% | https://www.instagram.com/aayann26_/reel/DZkCcAVRB7Y/ |

The brand-collab chip is filled with the accent colour; the others are outlined.

### 4.6 Brand & campus collabs
Section title: **Collabs so far**
Two large case cards side by side (stacked on mobile). Each has an image on the left (`[COLLAB STILL]`) and details on the right.

**Card 1: Zudio · back-to-school reel** (chip: `BRAND`)
- Stats row: **310K** views · **3.5K** likes · **94** comments
- Text: Outfit reel posted as a collab on Zudio's own Instagram account. Commenters called him a fashion influencer.
- Link: Watch the reel ↗ (reel #2 URL)

**Card 2: @amityfreshers · college meme** (chip: `CAMPUS PAGE`)
- Stats row: **513K** views · **9.4K** likes · **569** comments
- Text: His most-watched reel. A collab with a freshers page, it reached a large student audience.
- Link: Watch the reel ↗ (reel #1 URL)

Below the cards, a single line of muted text: *Open to brand, agency and campus-page collabs.*

### 4.7 Gallery
Section title: **Fits, shoots & travel**
A masonry grid of 6–9 photos (3 columns desktop, 2 mobile), with slight rounding, a subtle zoom on hover and a click-to-open lightbox. Placeholders: `[PHOTO 1–9: mix of fits, portraits, Zudio shoot, Kashmir trek]`.

### 4.8 About
Two columns: a photo on the left (`[ABOUT PHOTO: casual/candid]`), text on the right.
Title: **Hi, I'm Aayan.**
Body (keep the placeholders visible until they're filled):
> I make reels about college life, dating and the stuff everyone's thinking but nobody says, plus fits and the occasional trek. I split my time between Delhi and Jammu. [1–2 lines in Aayan's own words: what he studies or does, what he's into, what kind of brands he loves working with.]

Small facts list in mono:
- Based in: Delhi / Jammu
- Content: humour · fits & transitions · travel
- Languages: [e.g. Hindi, English]
- Available for: reels, integrations, campus launches, shoots

### 4.9 Ways to collab
Section title: **Ways to work together**
A 2×2 grid of service tiles with a small letter marker (A, B, C, D) and a hairline border.

- **A. Humour integration:** Your product inside a relatable college or dating skit, in the format that gets his most shares.
- **B. Outfit & transition reels:** For fashion, grooming and gym brands. Walk-ins, glow-ups and styling transitions.
- **C. Campus launches:** Content for the Delhi and Jammu college crowd, including collabs with campus pages.
- **D. Shoots:** Photo and reel shoots for your own channels.

Under the grid: *Rates and full Instagram Insights (reach, audience age and top cities) shared on request.*
Button: **Download media kit (PDF)** → `[MEDIA KIT PDF LINK]` (hide the button if no link is set).

### 4.10 Contact
A full-width dark block (it inverts the page colours).
Eyebrow: `COLLAB ENQUIRIES`
Headline (large): **Let's make something people share.**
Left: a contact form. Right: direct contact.

Form fields:
- Name (required)
- Brand / agency (required)
- Email (required, validated)
- Type of collab (dropdown: Reel integration, Outfit/transition reel, Campus launch, Shoot, Other)
- Budget range (optional dropdown: [owner to set ranges] / Prefer to discuss)
- Message (required)
- Submit button: **Send enquiry**. On success show "Thanks, we'll reply within 48 hours." On error show "That didn't send. Email aayangupta2604@gmail.com directly."
- Send submissions to **aayangupta2604@gmail.com** using the platform's form handling, or Formspree/Web3Forms/Netlify Forms. Add a honeypot field against spam.

Direct contact (right column):
- Email: **aayangupta2604@gmail.com**, with a "Copy" button
- Instagram: **@aayann26_** → https://www.instagram.com/aayann26_/
- Management: `[MANAGER NAME + EMAIL, if collabs go through the manager]`

### 4.11 Footer
- Left: AAYAN wordmark and "© 2026 Aayan"
- Middle: *Stats from public reel counts, 28 Sep 2026. Engagement = (likes + comments + shares) ÷ views.*
- Right: Instagram link, email, and a back-to-top button

## 5. Design system

### Direction
Clean, editorial and photo-led, with one bold element: huge, wide display type for names and numbers. Lots of whitespace, strong alignment and real photos doing the talking. Avoid gradients, glassmorphism, neon, emoji as icons, and generic "influencer template" looks.

### Colours (light mode is the default; include a dark mode that follows the system setting)
| Token | Light | Dark | Use |
|---|---|---|---|
| Background | #F3F4F7 | #0F1117 | page background (slightly cool off-white) |
| Surface | #FFFFFF | #181B24 | cards |
| Ink | #15171C | #ECEEF3 | main text |
| Muted | #5A5F6E | #9BA1B2 | secondary text, labels |
| Line | #DCDFE7 | #2A2F3C | borders, dividers |
| Accent (cobalt) | #2B45F0 | #8C9BFF | buttons, chips, bars, links |
| Highlight (marker yellow) | #FFE14D | rgba(233,205,60,.4) | a highlighter-pen underline behind 1–2 key phrases only |

The contact section uses Ink as its background and Background as its text colour.

### Typography (Google Fonts)
- **Display:** Archivo, expanded width (`font-stretch` 115–125%), weights 800–900. Use it for the wordmark, headlines and big numbers.
- **Body:** Instrument Sans, 400/500/600, 16–18px, line-height 1.55.
- **Labels/data:** JetBrains Mono, 11–13px, uppercase, letter-spacing 0.06–0.08em.
- Scale: Hero name 96–140px desktop / 56–64px mobile · H2 36–44px · H3 20px · body 17px.
- Use tabular numbers for all stats.

### Spacing & shapes
- Max content width 1120px; side padding 20px (16px on mobile).
- Section spacing 120px on desktop, 72px on mobile.
- Corner radius: 16px on cards and images, pill shape on buttons and chips.
- Shadows: at most one soft shadow, on the hero photo only. Everything else uses hairline borders.

### Buttons
- Primary: Ink background, Background-coloured text, pill shape, 12px × 22px padding, 1px lift on hover.
- Secondary: transparent with a 1px Ink border.
- Every interactive element needs a visible focus ring (2px accent outline).

### Motion (subtle)
- Sections fade up 12px as they enter (once only, 400ms ease-out). Content must stay visible if JS fails.
- The numbers strip counts up once.
- Cards lift 2px on hover and their border turns accent.
- Respect `prefers-reduced-motion`: turn all of this off.

## 5A. Photo placeholders (use these until real photos are added)

Build every image slot as a styled placeholder block so the site looks finished now and each photo can be swapped in later with one change in the config file.

### How every placeholder looks
- Same size, aspect ratio and corner radius as the final photo, so nothing shifts when a real image replaces it.
- Background: the Line colour, with a faint 45° diagonal stripe pattern (1px stripes, 12px apart, in the Muted colour at 15% opacity).
- Centre: a simple outline camera icon (24px, Muted colour), with the slot's label below it in JetBrains Mono, 11–12px uppercase, e.g. `HERO PHOTO · 4:5 · 1200×1500`.
- Works in both light and dark mode, since it uses the colour tokens.
- Reel covers keep the play icon on top of the placeholder, and clicking them still opens the reel.
- In the config file, each image has `src: null` and a preset `alt` text. When `src` is null, show the placeholder. When a file path is added, show the photo (cover-fit, WebP, lazy-loaded except the hero).

### Every image slot
| Slot ID | Where | Aspect ratio | Recommended size | Placeholder label | Alt text (preset) |
|---|---|---|---|---|---|
| hero | Hero, right side | 4:5 | 1200×1500 | HERO PHOTO · 4:5 | Aayan, portrait |
| reel-1 | Featured reel 1 (Amity meme) | 9:16 | 1080×1920 | REEL COVER 1 · 9:16 | Cover of Aayan's college meme reel with @amityfreshers |
| reel-2 | Featured reel 2 (Zudio) | 9:16 | 1080×1920 | REEL COVER 2 · 9:16 | Cover of Aayan's Zudio collab reel |
| reel-3 | Featured reel 3 | 9:16 | 1080×1920 | REEL COVER 3 · 9:16 | Cover of Aayan's humour reel |
| reel-4 | Featured reel 4 | 9:16 | 1080×1920 | REEL COVER 4 · 9:16 | Cover of Aayan's humour reel |
| reel-5 | Featured reel 5 | 9:16 | 1080×1920 | REEL COVER 5 · 9:16 | Cover of Aayan's outfit transition reel |
| reel-6 | Featured reel 6 | 9:16 | 1080×1920 | REEL COVER 6 · 9:16 | Cover of Aayan's Kashmir trek reel |
| collab-zudio | Collab card 1 | 4:5 | 1000×1250 | ZUDIO COLLAB STILL · 4:5 | Still from Aayan's Zudio reel |
| collab-amity | Collab card 2 | 4:5 | 1000×1250 | AMITY COLLAB STILL · 4:5 | Still from Aayan's @amityfreshers reel |
| gallery-1 | Gallery | 4:5 | 1200×1500 | GALLERY 1 · FIT | Aayan, outfit photo |
| gallery-2 | Gallery | 1:1 | 1200×1200 | GALLERY 2 · PORTRAIT | Aayan, portrait |
| gallery-3 | Gallery | 4:5 | 1200×1500 | GALLERY 3 · TRAVEL | Aayan on a trek in Kashmir |
| gallery-4 | Gallery | 3:4 | 1200×1600 | GALLERY 4 · FIT | Aayan, outfit photo |
| gallery-5 | Gallery | 1:1 | 1200×1200 | GALLERY 5 · SHOOT | Aayan, shoot photo |
| gallery-6 | Gallery | 4:5 | 1200×1500 | GALLERY 6 · TRAVEL | Aayan, travel photo |
| gallery-7 | Gallery (optional) | 3:4 | 1200×1600 | GALLERY 7 · FIT | Aayan, outfit photo |
| gallery-8 | Gallery (optional) | 1:1 | 1200×1200 | GALLERY 8 · CANDID | Aayan, candid photo |
| gallery-9 | Gallery (optional) | 4:5 | 1200×1500 | GALLERY 9 · COLLEGE | Aayan at college |
| about | About section | 4:5 | 1000×1250 | ABOUT PHOTO · CANDID | Aayan, candid photo |
| og-image | Social share preview | 1.91:1 | 1200×630 | Generate as text only for now: off-white background, "AAYAN" in the display font, "1.8M+ reel views" below in cobalt | Aayan, creator portfolio |

Gallery slots 7–9 are optional. If their `src` is still null when the site goes live, hide them rather than showing placeholders, so the gallery has 6 items.

## 6. Technical requirements
- Fully responsive: test at 375px, 768px, 1280px and 1440px. No horizontal scrolling.
- Fast: compress images to WebP, lazy-load everything below the hero, and load Instagram embeds only on click. Target Lighthouse 90+ for performance and accessibility.
- Accessible: alt text on every image, correct heading order, labelled form fields, colour contrast of at least 4.5:1.
- SEO:
  - Title: `Aayan | Creator for College Humour, Fits & Travel`
  - Meta description: `Aayan (@aayann26_) is a Delhi/Jammu creator making relatable college humour, outfit reels and travel content. 1.8M+ reel views. Collab enquiries welcome.`
  - Open Graph/Twitter card image: `[OG IMAGE 1200×630: hero photo + "Aayan · 1.8M+ reel views"]`
  - Favicon: a bold "A" in cobalt on the off-white background.
- Keep all stats, reel links, collab data and contact details in one config/data file.
- Deploy target: [owner's host, e.g. Netlify/Vercel], custom domain `[e.g. aayangupta.in]`.

## 7. Assets the owner will supply later
The site launches with placeholders for all of these (section 5A). Each one gets swapped in by setting its `src` in the config file.
- 1 hero portrait (vertical, high-res)
- 1 about photo (candid)
- 6 reel cover images (9:16), one per featured reel
- 2 collab stills (Zudio reel, @amityfreshers reel)
- 6–9 gallery photos
- Optional: media kit PDF, manager contact, full name, languages, 1–2 lines of bio in Aayan's words

## 8. Done when
- All 11 sections render correctly on mobile and desktop, in light and dark mode.
- Every reel opens (as an embed or on Instagram).
- A test enquiry arrives at aayangupta2604@gmail.com.
- Every number on the site matches this prompt exactly.
- Every image slot shows its labelled placeholder with no layout shift, and replacing one `src` in the config swaps in a real photo.
