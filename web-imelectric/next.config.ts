import path from "path";
import type { NextConfig } from "next";

// El Content-Security-Policy se emite por request en proxy.ts (nonce dinámico).
// Aquí solo van los headers estáticos que no requieren cambiar en cada request.
const securityHeaders = [
  // Fuerza HTTPS durante 1 año. Sin includeSubDomains por precaución
  // (desconocemos qué otros subdominios existen en el VPS compartido).
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000",
  },
  // Evita que el navegador "adivine" el tipo MIME de una respuesta.
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  // Impide que la página sea embebida en un <iframe> en otro origen.
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  // Solo envía el origen (sin path ni query) como Referer a sitios externos.
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  // Desactiva explícitamente APIs de navegador no usadas por la app.
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=()",
  },
];

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },

  /**
   * Redirige automáticamente todas las variantes de URL a la versión canónica.
   * Esto elimina duplicados que Google penaliza como "sin canónica":
   *   http://imelectric.es      → https://imelectric.es  (lo hace el servidor/nginx)
   *   https://www.imelectric.es → https://imelectric.es  (este redirect)
   *   /ruta/                    → /ruta   (trailing slash)
   */
  trailingSlash: false,

  async redirects() {
    return [
      // www → sin www
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.imelectric.es" }],
        destination: "https://imelectric.es/:path*",
        permanent: true,
      },
      // Safety On → Veriwork (301 permanente)
      {
        source: "/safety-on",
        destination: "/veriwork",
        permanent: true,
      },
      {
        source: "/safety-on/:path*",
        destination: "/veriwork/:path*",
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        // Aplica a todas las rutas de imelectric.es.
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
