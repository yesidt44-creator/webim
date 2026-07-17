import { type Metadata } from "next";
import { ProductEcosystemVisual } from "@/components/ProductEcosystemVisual";

export const metadata: Metadata = {
  title: "Preview ecosistema | IMELECTRIC",
  description: "Página interna de previsualización del visual del ecosistema de productos.",
  robots: { index: false, follow: false },
  alternates: {
    canonical: "https://imelectric.es/preview-ecosistema",
  },
};

export default function EcosystemPreviewPage() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#0A0A0A] px-4 py-12 sm:px-8">
      <style>{`
        [aria-label="Aviso de cookies"],
        a[href*="wa.me"] {
          display: none !important;
        }
      `}</style>
      <ProductEcosystemVisual />
    </main>
  );
}
