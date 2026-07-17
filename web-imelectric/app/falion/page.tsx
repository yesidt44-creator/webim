import { type Metadata } from "next";
import { headers } from "next/headers";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Falion } from "@/components/Falion";
import { ContactModal } from "@/components/ContactModal";

export const metadata: Metadata = {
  title: "Falion — Análisis de causa raíz RCA asistido por IA | IMELECTRIC",
  description:
    "Falion asiste el análisis de causa raíz (RCA), FMECA, Weibull y confiabilidad industrial con los datos reales de tu operación. Generación del informe asistido en ~60 segundos (no el ciclo completo de investigación). El ingeniero siempre decide.",
  keywords: [
    "análisis causa raíz Colombia",
    "RCA industrial IA",
    "software confiabilidad industrial",
    "FMECA automatizado",
    "análisis Weibull mantenimiento",
    "RAM confiabilidad",
    "CBM mantenimiento basado condición",
    "LCC costo ciclo vida",
    "Falion IMELECTRIC",
    "software mantenimiento confiabilidad Colombia",
  ],
  openGraph: {
    type: "website",
    title: "Falion — Informe asistido en ~60 segundos",
    description:
      "Análisis de causa raíz, FMECA, Weibull y RAM con los datos reales de tu operación. El tiempo de 60 s es de generación del informe, no del ciclo completo. El ingeniero revisa, valida y firma.",
    siteName: "IMELECTRIC",
    locale: "es_CO",
    url: "https://imelectric.es/falion",
  },
  twitter: {
    card: "summary_large_image",
    title: "Falion — Análisis de confiabilidad industrial asistido por IA",
    description:
      "RCA, FMECA, Weibull, RAM y más — con grounding en tus datos propios, no en internet. El ingeniero siempre valida.",
  },
  alternates: {
    canonical: "https://imelectric.es/falion",
  },
};

const heroJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Falion",
  url: "https://imelectric.es/falion",
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "Confiabilidad Industrial, RCA, FMECA, Weibull",
  operatingSystem: "Web",
  description:
    "Sistema de análisis de confiabilidad industrial con IA. Asiste RCA, FMECA, Weibull, RAM, CBM, LCC y más, usando los datos reales de los activos del cliente.",
  provider: {
    "@type": "Organization",
    name: "IMELECTRIC",
    url: "https://imelectric.es",
  },
  featureList: [
    "RCA con árbol de causas basado en historial real de activos",
    "Análisis Weibull con guardrails de confianza estadística",
    "FMECA con índice de criticidad",
    "Entregable en Word con trazabilidad normativa (GTC-45, RETIE, ISO 14224, API)",
    "Grounding en datos propios — no en conocimiento genérico",
    "Flujo de aprobación: Falion propone, el ingeniero decide",
    "8 módulos de análisis: RCA, Weibull, FMECA, RAM, CBM, LCC, PST-IA, Chat RAG",
  ],
};

export default async function FalionPage() {
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        nonce={nonce}
        dangerouslySetInnerHTML={{ __html: JSON.stringify(heroJsonLd) }}
      />

      {/* ── HERO ───────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-slate-950 py-28 md:py-36">
        {/* Fondo decorativo */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.12),transparent_65%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(99,102,241,0.08),transparent_65%)]"
        />

        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <p className="mb-5 inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-bold tracking-widest text-blue-400 uppercase">
            Confiabilidad industrial con IA · Fase de pruebas
          </p>

          <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
            De la falla al informe
            <br />
            <span className="text-blue-400">en 60 segundos.</span>
          </h1>

          <p className="mx-auto mb-4 max-w-2xl text-lg leading-relaxed text-slate-400 md:text-xl">
            Tiempo de generación del informe asistido — no del ciclo completo de investigación.
            RCA, FMECA, Weibull y análisis de confiabilidad con los datos reales de tus activos — no con conocimiento genérico de internet.
          </p>
          <p className="mx-auto mb-10 max-w-xl text-base text-slate-500">
            El ingeniero revisa, valida y firma. Falion propone. La decisión siempre es del experto.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <ContactModal>
              <button
                type="button"
                className="flex items-center gap-2 rounded-2xl bg-blue-600 px-8 py-4 font-bold text-white shadow-2xl shadow-blue-900/50 transition hover:bg-blue-500"
              >
                Solicitar acceso a la fase de pruebas <ArrowRight size={18} />
              </button>
            </ContactModal>
            <Link
              href="/fixai-cmms"
              className="flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-900 px-8 py-4 font-bold text-slate-300 transition hover:border-blue-500/40 hover:text-blue-400"
            >
              Ver Fix AI →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CONTENIDO ──────────────────────────────────────────────── */}
      <Falion />

      {/* ── CTA FINAL ──────────────────────────────────────────────── */}
      <section className="bg-slate-950 pb-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="mb-4 text-2xl font-bold text-white">
            La IA acelera. La persona decide.
          </p>
          <p className="mb-8 text-slate-400">
            Falion nunca ejecuta cambios automáticamente en tu CMMS. El ingeniero revisa cada propuesta antes de que se convierta en acción.
          </p>
          <ContactModal>
            <button
              type="button"
              className="rounded-2xl bg-blue-600 px-10 py-4 font-bold text-white shadow-2xl shadow-blue-900/50 transition hover:bg-blue-500"
            >
              Hablar con el equipo de IMELECTRIC
            </button>
          </ContactModal>
        </div>
      </section>
    </>
  );
}
