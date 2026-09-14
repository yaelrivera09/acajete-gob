import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://acajete.gob.mx/sitemap.xml",
    host: "https://acajete.gob.mx",
  };
}
