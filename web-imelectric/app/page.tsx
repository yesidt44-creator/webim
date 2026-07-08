import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://imelectric.es",
  },
  title: "IMELECTRIC — Fix AI, Safety On y Nexvia | Software Industrial Colombia",
  description:
    "Fix AI: PWA de mantenimiento industrial con IA para contratistas SAP PM. Safety On: software HSE y SST con permisos digitales. Nexvia: gestión de flotas HSEQ. Soluciones para Oil & Gas, manufactura y transporte en Colombia y Latinoamérica.",
  keywords: [
    // Fix AI
    "Fix AI CMMS",
    "software mantenimiento contratistas SAP PM",
    "PWA mantenimiento industrial Colombia",
    "CMMS contratistas Oil Gas Colombia",
    "exportación IW41 SAP mantenimiento",
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
    // Safety On HSE
    "software gestión HSE",
    "seguridad industrial digital",
    "permisos de trabajo digitales",
    "software HSE Colombia",
    "gestión seguridad industrial",
    "trabajo en alturas digital",
    "software SST Colombia",
    "permisos trabajo altura",
    "trazabilidad HSE",
    // Nexvia — Flotas y HSEQ
    "software gestión flotas Colombia",
    "HSEQ Colombia",
    "seguridad vial digital",
    "inspección preoperacional digital",
    "ISO 9001 transporte",
    "trazabilidad HSEQ",
    // Home extra
    "ingeniero confiabilidad Colombia",
    "software mantenimiento Ecopetrol",
    "CMMS oil gas Colombia",
    "mantenimiento predictivo upstream",
    "gestión activos ISO 55001 Colombia",
    // General
    "IMELECTRIC",
  ],
  openGraph: {
    title: "FixAI CMMS — Mantenimiento Industrial con IA | IMELECTRIC",
    description:
      "El primer CMMS con IA para upstream oil & gas en Latinoamérica. ISO 14224, offline-first y KPIs de confiabilidad en tiempo real.",
    url: "https://imelectric.es",
    siteName: "IMELECTRIC",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FixAI CMMS — Mantenimiento Industrial con IA | IMELECTRIC",
    description:
      "Software de mantenimiento industrial con IA para oil & gas en Colombia y Latinoamérica. ISO 14224, offline-first, KPIs en tiempo real.",
  },
};
import { Hero } from "@/components/Hero";
import { PainPoints } from "@/components/PainPoints";
import { FixAI } from "@/components/FixAI";
import { Nexvia } from "@/components/Nexvia";
import { About } from "@/components/About";
import { SafetyOn } from "@/components/SafetyOn";
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

        <IndustrialServices />

        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

        <Education />
      </div>

      <Footer />
    </main>
  );
}
