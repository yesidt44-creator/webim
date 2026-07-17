import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://imelectric.es",
  },
  title: "IMELECTRIC — Fix AI, Veriwork, Nexvia y Shield AI | Software Industrial Colombia",
  description:
    "Fix AI: PWA de mantenimiento industrial con IA para contratistas. Veriwork: gestión HSE y permisos de trabajo verificables. Nexvia: gestión de flotas HSEQ. Shield AI: SG-SST para toda empresa colombiana. Soluciones para Oil & Gas, manufactura y transporte en Colombia y Latinoamérica.",
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
    title: "La IA hace el trabajo repetitivo. Tu equipo toma las decisiones. | IMELECTRIC",
    description:
      "Fix AI, Veriwork, Nexvia y Shield AI automatizan el reporte, la trazabilidad y el cumplimiento normativo de tu operación — para que tu equipo invierta su tiempo en lo que requiere criterio humano.",
    url: "https://imelectric.es",
    siteName: "IMELECTRIC",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software industrial con IA para contratistas y operadores en Colombia | IMELECTRIC",
    description:
      "Fix AI, Veriwork, Nexvia y Shield AI: mantenimiento, HSE, flotas y SG-SST con IA. La IA acelera, la persona decide.",
  },
};
import { Hero } from "@/components/Hero";
import { AiPhilosophy } from "@/components/AiPhilosophy";
import { PainPoints } from "@/components/PainPoints";
import { FixAI } from "@/components/FixAI";
import { Nexvia } from "@/components/Nexvia";
import { About } from "@/components/About";
import { SafetyOn } from "@/components/SafetyOn";
import { ShieldAI } from "@/components/ShieldAI";
import { IndustrialServices } from "@/components/IndustrialServices";
import { Education } from "@/components/Education";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-blue-500/30">
      <Navbar />
      
      {/* Contenedor principal con padding superior para compensar el Navbar fijo */}
      <div className="pt-[calc(7.125rem*0.75+1rem)]">
        <Hero />

        {/* Sección Filosofía IA — anclada desde el CTA del Hero */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

        <AiPhilosophy />
        
        {/* Separador sutil */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
        
        <PainPoints />

        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

        <FixAI />

        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

        <Nexvia />

        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

        <About />

        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

        <SafetyOn />

        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

        <ShieldAI />

        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

        <IndustrialServices />

        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

        <Education />
      </div>

      <Footer />
    </main>
  );
}
