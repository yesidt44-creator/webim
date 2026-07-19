import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://imelectric.es",
  },
  title: "Software industrial con IA | IMELECTRIC",
  description:
    "Mantenimiento, HSE y SG-SST digitalizados desde Colombia, con profundidad normativa local. Fix AI, Falion, Veriwork, Nexvia y Shield AI para operaciones industriales.",
  keywords: [
    // Fix AI
    "Fix AI CMMS",
    "software mantenimiento industrial Colombia",
    "PWA mantenimiento industrial Colombia",
    "CMMS contratistas Oil Gas Colombia",
    "software mantenimiento campo sin internet",
    "Falion IA confiabilidad",
    "software mantenimiento offline campo",
    "CMMS Colombia",
    "mantenimiento oil gas Colombia",
    "mantenimiento upstream",
    "órdenes de trabajo digitales",
    "MTBF MTTR",
    "confiabilidad industrial",
    "trazabilidad técnica",
    "mantenimiento preventivo planificado",
    // Veriwork HSE
    "Veriwork software HSE",
    "software gestión HSE Colombia",
    "seguridad industrial digital",
    "permisos de trabajo digitales",
    "software HSE Colombia",
    "gestión seguridad industrial",
    "trabajo en alturas digital",
    "software SST Colombia",
    "trazabilidad HSE",
    // Nexvia
    "software gestión flotas Colombia",
    "HSEQ Colombia",
    "seguridad vial digital",
    "inspección preoperacional digital",
    "ISO 9001 transporte",
    "trazabilidad HSEQ",
    // Shield AI
    "Shield AI SG-SST Colombia",
    "software SG-SST Colombia",
    "Resolución 0312 cumplimiento",
    "Decreto 1072 SG-SST digital",
    // Home extra
    "ingeniero confiabilidad Colombia",
    "CMMS oil gas Colombia",
    "mantenimiento predictivo upstream",
    "gestión activos ISO 55001 Colombia",
    // General
    "IMELECTRIC",
  ],
  openGraph: {
    title: "Software industrial con IA | IMELECTRIC",
    description:
      "Mantenimiento, HSE y SG-SST digitalizados desde Colombia, con profundidad normativa local para operaciones industriales.",
    url: "https://imelectric.es",
    siteName: "IMELECTRIC",
    locale: "es_CO",
    type: "website",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "IMELECTRIC" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software industrial con IA | IMELECTRIC",
    description:
      "Mantenimiento, HSE y SG-SST digitalizados desde Colombia. Fix AI, Falion, Veriwork, Nexvia y Shield AI.",
    images: ["/og-default.png"],
  },
};
import { Hero } from "@/components/Hero";
import { AiPhilosophy } from "@/components/AiPhilosophy";
import { PainPoints } from "@/components/PainPoints";
import { About } from "@/components/About";
import { IndustrialServices } from "@/components/IndustrialServices";
import { Education } from "@/components/Education";
import { Footer } from "@/components/Footer";
import { TrustStrip } from "@/components/TrustStrip";
import { ProductivitySection } from "@/components/ProductivitySection";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-blue-500/30">
      <Navbar />
      
      {/* Contenedor principal con padding superior para compensar el Navbar fijo */}
      <div className="pt-[calc(7.125rem*0.75+1rem)]">
        <Hero />
        <TrustStrip />
        <ProductivitySection />

        {/* Sección Filosofía IA — anclada desde el CTA del Hero */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

        <AiPhilosophy />

        {/* Separador sutil */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
        
        <PainPoints />

        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

        <About />

        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

        <IndustrialServices />

        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

        <Education />
      </div>

      <Footer />
    </main>
  );
}
