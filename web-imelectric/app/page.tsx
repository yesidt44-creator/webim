import { Navbar } from "@/components/Navbar";
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
