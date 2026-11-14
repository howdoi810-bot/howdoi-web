import type { MetadataRoute } from "next";
import { canonical, isPublicRelease } from "@/lib/site";
export default function robots(): MetadataRoute.Robots {
  // Allow crawling so the preview's noindex directives can be seen. This is not access control.
  return { rules: { userAgent: "*", allow: "/", disallow: ["/api/"] }, ...(isPublicRelease() ? { sitemap: canonical("/sitemap.xml") } : {}) };
}
