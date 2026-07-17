import { ProductEcosystemVisual } from "@/components/ProductEcosystemVisual";

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
