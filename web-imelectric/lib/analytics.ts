/**
 * Eventos personalizados para GA4 (requiere `GoogleAnalytics` en layout y `NEXT_PUBLIC_GA_MEASUREMENT_ID`).
 * Si `gtag` no está cargado, la llamada se ignora de forma segura.
 */
export function trackEvent(eventName: string, params?: Record<string, unknown>): void {
  if (typeof window === "undefined") return;
  const gtag = window.gtag;
  if (typeof gtag !== "function") return;
  gtag("event", eventName, params ?? {});
}
