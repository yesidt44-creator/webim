import path from "path";
import type { NextConfig } from "next";

/** Raíz explícita: evita el aviso de Turbopack si hay otro `package-lock.json` en la carpeta padre (monorepo local). */
const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
