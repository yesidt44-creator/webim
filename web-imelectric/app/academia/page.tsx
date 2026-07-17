import type { Metadata } from "next";
import Link from "next/link";
import { headers } from "next/headers";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, Calculator, GitBranch, Grid3X3, HardHat, BookOpen, CircleDot } from "lucide-react";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://imelectric.es/academia",
  },
  title: "Academia Técnica | Confiabilidad y SST | IMELECTRIC",
  description:
    "Herramientas y artículos técnicos gratuitos: calculadora MTBF/MTTR, FMECA, Ishikawa, trabajo en alturas, biblioteca normativa SST y guías de confiabilidad industrial.",
  openGraph: {
    title: "Academia Técnica | IMELECTRIC",
    description:
      "Herramientas y artículos técnicos para ingenieros: MTBF, FMECA, Ishikawa, SST y confiabilidad.",
    url: "https://imelectric.es/academia",
    siteName: "IMELECTRIC",
    locale: "es_CO",
    type: "website",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "IMELECTRIC" }],
  },
};

const tools = [
  {
    href: "/academia/calculadora-mtbf",
    icon: Calculator,
    title: "Calculadora MTBF / MTTR",
    desc: "Calcula MTBF, MTTR, disponibilidad y confiabilidad R(t) desde datos de fallas o desde un MTBF conocido.",
    color: "text-blue-400",
  },
  {
    href: "/academia/fmeca",
    icon: Grid3X3,
    title: "Matriz FMECA",
    desc: "Analiza modos de falla, efectos y criticidad (S×O×D) en una matriz interactiva.",
    color: "text-blue-400",
  },
  {
    href: "/academia/ishikawa",
    icon: GitBranch,
    title: "Diagrama Ishikawa",
    desc: "Construye un diagrama de causa raíz 6M para fallas e incidentes operativos.",
    color: "text-blue-400",
  },
  {
    href: "/academia/trabajo-en-alturas",
    icon: HardHat,
    title: "Simulador trabajo en alturas",
    desc: "Orientación práctica alineada a la Resolución 4272 de 2021 (DCL y controles).",
    color: "text-emerald-400",
  },
  {
    href: "/academia/rodamientos",
    icon: CircleDot,
    title: "Guía de rodamientos",
    desc: "Nomenclatura, medición e inspección de rodamientos industriales.",
    color: "text-orange-400",
  },
];

const articles = [
  {
    href: "/academia/cmms-vs-gmao",
    title: "CMMS vs GMAO: qué es cada uno",
    desc: "Diferencias reales, cuándo aplicar cada término y cómo encaja Fix AI.",
  },
  {
    href: "/academia/certificacion-trabajo-en-alturas-colombia",
    title: "Certificación de trabajo en alturas en Colombia",
    desc: "Vigencia, requisitos y qué cambió con la Resolución 4272 de 2021.",
  },
  {
    href: "/academia/resolucion-0312-estandares-minimos",
    title: "Resolución 0312: estándares mínimos por tamaño",
    desc: "7, 21 o 60 estándares según trabajadores y clase de riesgo.",
  },
  {
    href: "/academia/firma-electronica-vs-firma-digital-colombia",
    title: "Firma electrónica vs firma digital",
    desc: "Qué exige la norma colombiana para permisos de trabajo y SG-SST.",
  },
  {
    href: "/academia/rca-rcm-fmea-diferencias",
    title: "RCA, RCM y FMEA: diferencias",
    desc: "Cuándo usar cada metodología y cómo se complementan.",
  },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://imelectric.es/" },
    { "@type": "ListItem", position: 2, name: "Academia Técnica", item: "https://imelectric.es/academia" },
  ],
};

export default async function AcademiaPage() {
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-950 font-sans text-slate-50 selection:bg-blue-500/30">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        nonce={nonce}
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Navbar />

      <section className="border-b border-slate-800 bg-slate-900 px-6 pt-32 pb-12">
        <div className="mx-auto max-w-7xl">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-6xl">
            Academia Técnica <span className="text-blue-500">IMELECTRIC</span>
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-slate-400">
            Herramientas interactivas y artículos técnicos para ingenieros de mantenimiento, HSE y confiabilidad.
            Cada recurso tiene su página dedicada.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-20 px-6 py-16">
        <div>
          <div className="mb-8 flex items-center gap-4">
            <div className="h-8 w-1 rounded-full bg-blue-600" />
            <h2 className="text-2xl font-bold text-white">Herramientas</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map(({ href, icon: Icon, title, desc, color }) => (
              <Link
                key={href}
                href={href}
                className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-blue-500/40"
              >
                <Icon className={`mb-4 ${color}`} size={24} />
                <h3 className="mb-2 text-lg font-bold text-white group-hover:text-blue-400">{title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-slate-400">{desc}</p>
                <span className="inline-flex items-center gap-1 text-xs font-bold tracking-widest text-blue-400 uppercase">
                  Abrir <ArrowRight size={12} />
                </span>
              </Link>
            ))}
            <Link
              href="/academia/trabajo-en-alturas#normas"
              className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-emerald-500/40"
            >
              <BookOpen className="mb-4 text-emerald-400" size={24} />
              <h3 className="mb-2 text-lg font-bold text-white group-hover:text-emerald-400">
                Biblioteca normativa SST
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-slate-400">
                PDFs de Res. 4272, Decreto 1072, Res. 0312, Ley 1581 y RETIE — descarga directa.
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-bold tracking-widest text-emerald-400 uppercase">
                Ver normas <ArrowRight size={12} />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <div className="mb-8 flex items-center gap-4">
            <div className="h-8 w-1 rounded-full bg-violet-500" />
            <h2 className="text-2xl font-bold text-white">Artículos técnicos</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {articles.map(({ href, title, desc }) => (
              <Link
                key={href}
                href={href}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 transition hover:border-violet-500/30"
              >
                <h3 className="mb-1 font-bold text-white">{title}</h3>
                <p className="text-sm text-slate-400">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
