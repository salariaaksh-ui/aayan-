import type { MetadataRoute } from "next"

import { siteUrl as url } from "@/lib/site-url"

export default function robots(): MetadataRoute.Robots {
  return { rules: [{ userAgent: "*", allow: "/" }], sitemap: `${url}/sitemap.xml` }
}
