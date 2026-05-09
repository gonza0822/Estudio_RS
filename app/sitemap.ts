import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/content/siteContent";

/** Defines public pages for sitemap indexing. */
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/quienes-somos", "/nuestro-equipo", "/areas-de-practica", "/contacto"];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
