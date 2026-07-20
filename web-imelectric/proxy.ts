import { type NextRequest, NextResponse } from "next/server";

/**
 * Next.js 16 proxy (reemplaza middleware.ts).
 * Genera un nonce criptográfico único por request y lo inyecta en:
 *   - El header Content-Security-Policy de la RESPUESTA (el navegador lo aplica)
 *   - El header x-nonce de la SOLICITUD (los Server Components lo leen vía headers())
 *
 * Next.js lee el nonce del CSP header y lo aplica automáticamente a todos sus
 * scripts de hidratación (framework bundles, page scripts, etc.).
 * Los scripts que nosotros creamos (JSON-LD, Clarity) reciben el nonce como prop.
 */
export function proxy(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
  const isDev = process.env.NODE_ENV === "development";

  // Con 'strict-dynamic' los dominios en script-src se ignoran → solo el nonce importa.
  // 'unsafe-eval' solo en desarrollo (React lo necesita para los stack traces en dev).
  const cspHeader = [
    "default-src 'none'",
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic'${isDev ? " 'unsafe-eval'" : ""}`,
    "style-src 'self' 'unsafe-inline'",
    "font-src 'self'",
    "img-src 'self' data: https:",
    // GA4 y Clarity hacen fetch/XHR a estos dominios — connect-src los permite.
    "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://region1.google-analytics.com https://*.clarity.ms",
    "media-src 'self'",
    "frame-src 'none'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "upgrade-insecure-requests",
  ].join("; ");

  // Propaga el nonce hacia los Server Components vía header de solicitud.
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set("Content-Security-Policy", cspHeader);

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });
  // Emite el CSP en la respuesta para que el navegador lo aplique.
  response.headers.set("Content-Security-Policy", cspHeader);

  return response;
}

export const config = {
  matcher: [
    {
      // Aplica a todas las rutas excepto archivos estáticos, imágenes optimizadas y favicon.
      // Excluye también prefetches para evitar crear nonces innecesarios en navegación interna.
      source: "/((?!api|_next/static|_next/image|favicon.ico).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
