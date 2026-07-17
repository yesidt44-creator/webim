import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Crawlers genéricos y motores de búsqueda
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      // Crawlers de LLMs — acceso explícito para GEO/AEO
      { userAgent: "GPTBot",       allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "Claude-Web",   allow: "/" },
      { userAgent: "ClaudeBot",    allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "Omgilibot",    allow: "/" },
      { userAgent: "PerplexityBot",allow: "/" },
      { userAgent: "YouBot",       allow: "/" },
      { userAgent: "Applebot",     allow: "/" },
    ],
    sitemap: "https://imelectric.es/sitemap.xml",
  };
}
