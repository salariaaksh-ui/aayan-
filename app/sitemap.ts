import type { MetadataRoute } from "next"

const url = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3200"

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url, lastModified: new Date("2026-09-28"), changeFrequency: "monthly", priority: 1 }]
}
