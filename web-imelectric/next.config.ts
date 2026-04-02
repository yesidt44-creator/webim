import path from "path";
import type { NextConfig } from "next";

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
    ];
  },
};

export default nextConfig;
