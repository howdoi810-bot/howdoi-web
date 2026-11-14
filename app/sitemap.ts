import type { MetadataRoute } from "next";
import { canonical, isPublicRelease } from "@/lib/site";
import { getPublishedGuides } from "@/lib/guides";
export default function sitemap(): MetadataRoute.Sitemap {
  if (!isPublicRelease()) return [];
  const pages = ["/", "/guides", "/build-with-me", "/about", "/editorial-policy", "/contact"].map(path => ({ url: canonical(path) }));
  return [...pages, ...getPublishedGuides().map(g => ({ url: canonical(`/guides/${g.slug}`), lastModified: g.editorial.updated_at ?? g.editorial.published_at }))];
}
