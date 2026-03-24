export {};

declare global {
  interface Window {
    /** GA4 data layer (inyectado por GoogleAnalytics de @next/third-parties) */
    gtag?: (command: string, ...args: unknown[]) => void;
  }
}
