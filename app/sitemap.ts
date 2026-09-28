import type { MetadataRoute } from "next"

import { siteUrl as url } from "@/lib/site-url"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url, lastModified: new Date("2026-09-28"), changeFrequency: "monthly", priority: 1 },
    { url: `${url}/gallery`, lastModified: new Date("2026-09-28"), changeFrequency: "monthly", priority: 0.6 },
  ]
}
