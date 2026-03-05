import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://adriatek-limited.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/checkout/", "/api/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
