import type { MetadataRoute } from "next"

const url = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3200"

export default function robots(): MetadataRoute.Robots {
  return { rules: [{ userAgent: "*", allow: "/" }], sitemap: `${url}/sitemap.xml` }
}
