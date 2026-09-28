/**
 * THE ONE FILE TO EDIT.
 * All stats, reels, collabs, contact details and image slots live here.
 * Update monthly without touching layout. Numbers are strings on purpose —
 * they render exactly as written (source: docs/brief.md, public counts 28 Sep 2026).
 *
 * Images: `src: null` shows a labelled placeholder. Drop a file in /public/photos
 * and set e.g. src: "/photos/hero.webp" to swap in the real photo.
 */

export type ImageSlot = {
  src: string | null
  alt: string
  label: string
  /** CSS aspect-ratio, e.g. "4 / 5" */
  ratio: string
}

export const site = {
  name: "Aayan",
  handle: "@aayann26_",
  instagram: "https://www.instagram.com/aayann26_/",
  email: "aayangupta2604@gmail.com",
  // Placeholder until filled. Set to null to hide the Management line.
  management: "[MANAGER NAME + EMAIL, if collabs go through the manager]" as string | null,
  // Set to "/media-kit.pdf" (or a URL) to show the Download media kit button.
  mediaKit: null as string | null,
  // Formspree form ID (e.g. "xyzabcd"), from formspree.io — create the form with
  // aayangupta2604@gmail.com. While null, the form shows the "email directly" error.
  formspreeId: null as string | null,
  statsDate: "28 Sep 2026",
  title: "Aayan | Creator for College Humour, Fits & Travel",
  description:
    "Aayan (@aayann26_) is a Delhi/Jammu creator making relatable college humour, outfit reels and travel content. 1.8M+ reel views. Collab enquiries welcome.",
}

export const hero = {
  eyebrow: "CREATOR · DELHI / JAMMU",
  headline: "Aayan",
  // Rendered as: sub + highlighted subMark
  sub: "College humour, fits and travel,",
  subMark: "made to be shared.",
  support:
    "1.8M+ reel views across his own reels and collabs, with Zudio and campus pages already on the list.",
  tag: "513K views · top reel",
}

export const stats = [
  { value: "1.8M+", label: "total reel views" },
  { value: "513K", label: "views on his top reel" },
  { value: "5", label: "reels past 125K views" },
  { value: "54K", label: "median views per reel" },
  { value: "1,000+", label: "shares across reels" },
]

export const lanes = [
  {
    label: "REACH",
    title: "Relatable humour",
    text: "Text-overlay reels about college, dating and roasting himself. People tag friends and share them, so they travel well past his followers.",
    stat: "~178K avg views · 6 reels",
  },
  {
    label: "FASHION & GROOMING",
    title: "Fits & transitions",
    text: "Walk-ins, glow-ups and outfit transitions. The natural home for fashion, grooming and gym brands.",
    stat: "Best: 83K views · 7.3% engagement",
  },
  {
    label: "ENGAGEMENT",
    title: "Travel",
    text: "Treks and trips around Jammu & Kashmir. Viewers comment asking for the location.",
    stat: "Kashmir trek: 65K views · 6.0% engagement",
  },
]

export type Reel = {
  chip: string
  brand?: boolean
  views: string
  caption: string
  likes: string
  comments: string
  shares: string
  engagement: string
  /** views relative to top reel, as given in the brief */
  bar: number
  url: string
  cover: ImageSlot
}

const cover = (n: number, alt: string): ImageSlot => ({
  src: null,
  alt,
  label: `REEL COVER ${n} · 9:16`,
  ratio: "9 / 16",
})

export const reels: Reel[] = [
  {
    chip: "Campus collab (with @amityfreshers)",
    views: "513K",
    caption: "100% acceptance rate btw",
    likes: "9.4K",
    comments: "569",
    shares: "84",
    engagement: "2.0%",
    bar: 100,
    url: "https://www.instagram.com/aayann26_/reel/Dbs2cMlJHxn/",
    cover: cover(1, "Cover of Aayan's college meme reel with @amityfreshers"),
  },
  {
    chip: "Brand collab (Zudio)",
    brand: true,
    views: "310K",
    caption: "School's out, drip's in",
    likes: "3.5K",
    comments: "94",
    shares: "30",
    engagement: "1.2%",
    bar: 60,
    url: "https://www.instagram.com/aayann26_/reel/DdjWW9bsgkW/",
    cover: cover(2, "Cover of Aayan's Zudio collab reel"),
  },
  {
    chip: "Humour",
    views: "204K",
    caption: "kya baat hai ❤️‍🔥",
    likes: "12.6K",
    comments: "66",
    shares: "288",
    engagement: "6.3%",
    bar: 40,
    url: "https://www.instagram.com/aayann26_/reel/DXwTELrRX6L/",
    cover: cover(3, "Cover of Aayan's humour reel"),
  },
  {
    chip: "Humour",
    views: "129K",
    caption: "lyrics don't match my appearance",
    likes: "4.7K",
    comments: "36",
    shares: "192",
    engagement: "3.8%",
    bar: 25,
    url: "https://www.instagram.com/aayann26_/reel/DX0_xOdx4Zo/",
    cover: cover(4, "Cover of Aayan's humour reel"),
  },
  {
    chip: "Fits & transitions",
    views: "83K",
    caption: "i am turning footsteps into electricity",
    likes: "5.8K",
    comments: "99",
    shares: "129",
    engagement: "7.3%",
    bar: 16,
    url: "https://www.instagram.com/aayann26_/reel/DVlLpO-EaWb/",
    cover: cover(5, "Cover of Aayan's outfit transition reel"),
  },
  {
    chip: "Travel",
    views: "65K",
    caption: "conquered",
    likes: "3.9K",
    comments: "23",
    shares: "21",
    engagement: "6.0%",
    bar: 13,
    url: "https://www.instagram.com/aayann26_/reel/DZkCcAVRB7Y/",
    cover: cover(6, "Cover of Aayan's Kashmir trek reel"),
  },
]

export const collabs = [
  {
    title: "Zudio · back-to-school reel",
    chip: "BRAND",
    stats: [
      { value: "310K", label: "views" },
      { value: "3.5K", label: "likes" },
      { value: "94", label: "comments" },
    ],
    text: "Outfit reel posted as a collab on Zudio's own Instagram account. Commenters called him a fashion influencer.",
    url: reels[1].url,
    image: {
      src: null,
      alt: "Still from Aayan's Zudio reel",
      label: "ZUDIO COLLAB STILL · 4:5",
      ratio: "4 / 5",
    } as ImageSlot,
  },
  {
    title: "@amityfreshers · college meme",
    chip: "CAMPUS PAGE",
    stats: [
      { value: "513K", label: "views" },
      { value: "9.4K", label: "likes" },
      { value: "569", label: "comments" },
    ],
    text: "His most-watched reel. A collab with a freshers page, it reached a large student audience.",
    url: reels[0].url,
    image: {
      src: null,
      alt: "Still from Aayan's @amityfreshers reel",
      label: "AMITY COLLAB STILL · 4:5",
      ratio: "4 / 5",
    } as ImageSlot,
  },
]

export const images = {
  hero: { src: null, alt: "Aayan, portrait", label: "HERO PHOTO · 4:5 · 1200×1500", ratio: "4 / 5" },
  about: { src: null, alt: "Aayan, candid photo", label: "ABOUT PHOTO · CANDID", ratio: "4 / 5" },
} satisfies Record<string, ImageSlot>

/** Slots 7–9 are optional: hidden while src is null. */
export const gallery: (ImageSlot & { optional?: boolean })[] = [
  { src: null, alt: "Aayan, outfit photo", label: "GALLERY 1 · FIT", ratio: "4 / 5" },
  { src: null, alt: "Aayan, portrait", label: "GALLERY 2 · PORTRAIT", ratio: "1 / 1" },
  { src: null, alt: "Aayan on a trek in Kashmir", label: "GALLERY 3 · TRAVEL", ratio: "4 / 5" },
  { src: null, alt: "Aayan, outfit photo", label: "GALLERY 4 · FIT", ratio: "3 / 4" },
  { src: null, alt: "Aayan, shoot photo", label: "GALLERY 5 · SHOOT", ratio: "1 / 1" },
  { src: null, alt: "Aayan, travel photo", label: "GALLERY 6 · TRAVEL", ratio: "4 / 5" },
  { src: null, alt: "Aayan, outfit photo", label: "GALLERY 7 · FIT", ratio: "3 / 4", optional: true },
  { src: null, alt: "Aayan, candid photo", label: "GALLERY 8 · CANDID", ratio: "1 / 1", optional: true },
  { src: null, alt: "Aayan at college", label: "GALLERY 9 · COLLEGE", ratio: "4 / 5", optional: true },
]

export const about = {
  title: "Hi, I'm Aayan.",
  body: "I make reels about college life, dating and the stuff everyone's thinking but nobody says, plus fits and the occasional trek. I split my time between Delhi and Jammu.",
  bodyPlaceholder:
    "[1–2 lines in Aayan's own words: what he studies or does, what he's into, what kind of brands he loves working with.]",
  facts: [
    ["Based in", "Delhi / Jammu"],
    ["Content", "humour · fits & transitions · travel"],
    ["Languages", "[e.g. Hindi, English]"],
    ["Available for", "reels, integrations, campus launches, shoots"],
  ],
}

export const services = [
  {
    mark: "A",
    title: "Humour integration",
    text: "Your product inside a relatable college or dating skit, in the format that gets his most shares.",
  },
  {
    mark: "B",
    title: "Outfit & transition reels",
    text: "For fashion, grooming and gym brands. Walk-ins, glow-ups and styling transitions.",
  },
  {
    mark: "C",
    title: "Campus launches",
    text: "Content for the Delhi and Jammu college crowd, including collabs with campus pages.",
  },
  { mark: "D", title: "Shoots", text: "Photo and reel shoots for your own channels." },
]

export const form = {
  collabTypes: ["Reel integration", "Outfit/transition reel", "Campus launch", "Shoot", "Other"],
  // Owner to set real ranges, e.g. "₹10k–25k". Placeholder shown until then.
  budgets: ["[owner to set ranges]", "Prefer to discuss"],
}
