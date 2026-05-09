import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/content/siteContent";

/** Declares crawl policy and sitemap location for search engines. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
