import { headers } from "next/headers";
import type { Metadata } from "next";
import {
  BarChart3,
  CheckCircle2,
  ClipboardCheck,
  Factory,
  Gauge,
  Mountain,
  Utensils,
  Zap,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactModal } from "@/components/ContactModal";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://imelectric.es/consultoria-mantenimiento",
  },
  title: "Consultoría en Mantenimiento y Confiabilidad | IMELECTRIC",
  description:
    "Consultoría en mantenimiento industrial, confiabilidad y gestión de activos físicos en Colombia. Diagnóstico de madurez, planes RCM/PM e implementación de KPIs y RAM.",
  openGraph: {
    title: "Consultoría en Mantenimiento y Confiabilidad Industrial | IMELECTRIC",
    description:
      "Diagnóstico de madurez, diseño de estrategias RCM/PM e implementación de KPIs y RAM para operaciones industriales.",
    url: "https://imelectric.es/consultoria-mantenimiento",
    siteName: "IMELECTRIC",
    locale: "es_CO",
    type: "website",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué incluye la consultoría en mantenimiento y confiabilidad de IMELECTRIC?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La consultoría puede incluir diagnóstico de madurez del sistema de mantenimiento, diseño o ajuste del plan RCM y de mantenimiento preventivo, e implementación de indicadores de desempeño y modelos RAM. El alcance final se define a partir del diagnóstico inicial y de las prioridades operativas de cada organización.",
      },
    },
    {
      "@type": "Question",
      name: "¿La consultoría se contrata por proyecto o como acompañamiento continuo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IMELECTRIC ofrece dos modalidades: proyecto de alcance fijo, con objetivos y entregables definidos, o acompañamiento continuo para apoyar la implementación, seguimiento de indicadores y mejora progresiva de la estrategia de mantenimiento.",
      },
    },
    {
      "@type": "Question",
      name: "¿En qué sectores presta IMELECTRIC sus servicios de consultoría?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La consultoría está dirigida a empresas de Petróleo y Gas, Energía, Minería, Alimentos y Manufactura, y puede adaptarse a otras operaciones intensivas en activos físicos dentro del alcance certificado de IMELECTRIC.",
      },
    },
  ],
};

const sectors = [
  { name: "Petróleo y Gas", icon: Gauge },
  { name: "Energía", icon: Zap },
  { name: "Minería", icon: Mountain },
  { name: "Alimentos", icon: Utensils },
  { name: "Manufactura", icon: Factory },
];

const services = [
  {
    title: "Diagnóstico de madurez",
    description:
      "Evaluación estructurada del sistema de mantenimiento, procesos, datos, roles y prácticas actuales para priorizar brechas y oportunidades.",
    icon: ClipboardCheck,
  },
  {
    title: "Diseño de plan RCM / PM",
    description:
      "Diseño o ajuste de estrategias de mantenimiento centradas en criticidad, modos de falla y contexto operacional de los activos.",
    icon: CheckCircle2,
  },
  {
    title: "Implementación de KPIs / RAM",
    description:
      "Definición e implementación de indicadores y modelos de confiabilidad, disponibilidad y mantenibilidad para sostener decisiones con datos.",
    icon: BarChart3,
  },
];

export default async function ConsultoriaMantenimientoPage() {
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        nonce={nonce}
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />

      <section className="border-b border-slate-800 px-6 pt-36 pb-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-xs font-bold tracking-widest text-amber-400 uppercase">
            Consultoría especializada · Colombia
          </p>
          <h1 className="max-w-5xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Consultoría en Mantenimiento y Confiabilidad Industrial en Colombia
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-400">
            Acompañamos a equipos industriales a convertir sus datos, experiencia operativa y
            criticidad de activos en una estrategia de mantenimiento clara, medible y ejecutable.
          </p>
          <div className="mt-8">
            <ContactModal>
              <button
                type="button"
                className="rounded-xl bg-amber-600 px-7 py-4 font-bold text-white shadow-lg shadow-amber-950/30 transition-colors hover:bg-amber-500"
              >
                Agendar diagnóstico inicial
              </button>
            </ContactModal>
          </div>
        </div>
      </section>

      <section className="px-6 py-20" aria-labelledby="sectores-consultoria">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-bold tracking-widest text-slate-500 uppercase">Sectores</p>
          <h2 id="sectores-consultoria" className="mt-2 text-3xl font-bold">
            Experiencia aplicable a operaciones intensivas en activos
          </h2>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {sectors.map(({ name, icon: Icon }) => (
              <li key={name} className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
                <Icon className="mb-4 text-amber-400" size={24} aria-hidden="true" />
                <span className="font-semibold">{name}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-slate-800 bg-slate-900/30 px-6 py-20" aria-labelledby="alcance-consultoria">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-bold tracking-widest text-amber-400 uppercase">Qué incluye</p>
          <h2 id="alcance-consultoria" className="mt-2 max-w-3xl text-3xl font-bold">
            Del diagnóstico a una estrategia que el equipo pueda ejecutar
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {services.map(({ title, description, icon: Icon }) => (
              <article key={title} className="rounded-2xl border border-slate-800 bg-slate-950 p-7">
                <Icon className="mb-5 text-blue-400" size={28} aria-hidden="true" />
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20" aria-labelledby="modalidad-consultoria">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-bold tracking-widest text-slate-500 uppercase">Modalidad</p>
          <h2 id="modalidad-consultoria" className="mt-2 text-3xl font-bold">
            Dos formas de acompañar la mejora
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-blue-500/30 bg-blue-500/5 p-8">
              <h3 className="text-xl font-bold">Proyecto de alcance fijo</h3>
              <p className="mt-3 leading-relaxed text-slate-400">
                Objetivos, alcance, cronograma y entregables definidos para resolver una brecha
                concreta o diseñar una estrategia específica.
              </p>
            </article>
            <article className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-8">
              <h3 className="text-xl font-bold">Acompañamiento continuo</h3>
              <p className="mt-3 leading-relaxed text-slate-400">
                Seguimiento periódico para implementar el plan, revisar indicadores y ajustar las
                decisiones con la evidencia que produce la operación.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-800 bg-slate-900/40 px-6 py-20" aria-labelledby="iso-consultoria">
        <div className="mx-auto max-w-4xl rounded-3xl border border-amber-500/30 bg-slate-950 p-8 sm:p-10">
          <p className="text-xs font-bold tracking-widest text-amber-400 uppercase">
            Alcance certificado
          </p>
          <h2 id="iso-consultoria" className="mt-2 text-3xl font-bold">
            Consultoría respaldada por ISO 9001:2015
          </h2>
          <p className="mt-5 leading-relaxed text-slate-300">
            Esta línea está dentro del alcance de la certificación ISO 9001:2015 de IMELECTRIC
            (Certificado No. 576091), emitida por LL-C Certification y vigente hasta junio de 2029.
          </p>
          <blockquote className="mt-6 border-l-2 border-amber-500 pl-5 text-sm leading-relaxed text-slate-400">
            “Diseño, desarrollo, implementación y mantenimiento remoto de soluciones digitales y
            software orientados a la operación y gestión de sus clientes, así como la consultoría
            especializada en mantenimiento industrial, confiabilidad y gestión de activos físicos,
            prestada de forma remota o presencial según requerimiento, para empresas de los sectores
            industrial, petrolero, energético, agroindustrial, manufacturero, minero, de
            infraestructura y del sector salud, a nivel nacional e internacional.”
          </blockquote>
          <a
            href="https://www.ll-c.info"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block font-semibold text-blue-400 underline underline-offset-4 hover:text-blue-300"
          >
            Verificar certificado · código 6B39360F-AAF
          </a>
        </div>
      </section>

      <section className="px-6 py-20" aria-labelledby="faq-consultoria">
        <div className="mx-auto max-w-3xl">
          <h2 id="faq-consultoria" className="text-3xl font-bold">
            Preguntas frecuentes
          </h2>
          <div className="mt-10 space-y-5">
            {faqJsonLd.mainEntity.map((faq) => (
              <details key={faq.name} className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
                <summary className="cursor-pointer font-semibold">{faq.name}</summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {faq.acceptedAnswer.text}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-800 px-6 py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Convierta el diagnóstico en un plan ejecutable</h2>
          <p className="mt-4 text-slate-400">
            Cuéntenos el estado actual de su operación y definiremos el alcance inicial con su equipo.
          </p>
          <div className="mt-8">
            <ContactModal>
              <button
                type="button"
                className="rounded-xl bg-amber-600 px-7 py-4 font-bold text-white transition-colors hover:bg-amber-500"
              >
                Agendar diagnóstico inicial
              </button>
            </ContactModal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
