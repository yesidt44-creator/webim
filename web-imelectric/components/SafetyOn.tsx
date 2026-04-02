import type { ReactNode } from "react";
import {
  ShieldAlert,
  Fingerprint,
  Scale,
  UserCheck,
  Zap,
  Lock,
  CheckCircle2,
} from "lucide-react";
import { SafetyOnCta } from "./SafetyOnCta";

const safetyOnJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Safety On",
  alternateName: [
    "software gestión HSE",
    "software HSE Colombia",
    "software SST Colombia",
    "permisos de trabajo digitales",
    "gestión seguridad industrial digital",
  ],
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "HSE, SST, Seguridad Industrial, Permisos de Trabajo",
  operatingSystem: "Web, Android, iOS",
  description:
    "Safety On es el software de gestión HSE y SST para Colombia y Latinoamérica. Digitaliza permisos de trabajo, incluyendo trabajo en alturas, con trazabilidad forense SHA-256, firma electrónica con GPS y cumplimiento normativo en tiempo real. Blindaje legal ante auditorías regulatorias.",
  keywords:
    "software gestión HSE, seguridad industrial digital, permisos de trabajo digitales, software HSE Colombia, gestión seguridad industrial, trabajo en alturas digital, software SST Colombia, permisos trabajo altura, trazabilidad HSE, blindaje jurídico HSE",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceCurrency: "USD",
    price: "0",
    priceSpecification: {
      "@type": "PriceSpecification",
      description: "Precio según auditoría de viabilidad. Contactar para demo.",
    },
  },
  provider: {
    "@type": "Organization",
    name: "IMELECTRIC",
    url: "https://imelectric.es",
    areaServed: ["Colombia", "Latinoamérica"],
    knowsAbout: [
      "Gestión HSE",
      "SST Colombia",
      "Permisos de trabajo en alturas",
      "Seguridad industrial digital",
      "Trazabilidad forense",
      "Ley 1581 Habeas Data",
    ],
  },
  featureList: [
    "Permisos de trabajo digitales con firma forense SHA-256",
    "Gestión de trabajo en alturas con verificación de competencias",
    "Trazabilidad HSE minuto a minuto con GPS y timestamp",
    "Verificación automática de certificados y avales vigentes",
    "Análisis de riesgo asistido por IA con alertas normativas",
    "Cumplimiento Resolución 0312 y Decreto 1072",
    "Blindaje legal ante auditorías regulatorias",
    "Cero pérdida documental: S3 Object Lock Technology",
  ],
};

export const SafetyOn = () => {
  return (
    <section
      id="safety-on"
      aria-labelledby="safetyon-heading"
      className="scroll-mt-28 overflow-hidden border-t border-slate-900 bg-slate-950 py-24"
      itemScope
      itemType="https://schema.org/SoftwareApplication"
    >
      {/* JSON-LD estructurado para Google */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(safetyOnJsonLd) }}
      />

      <div className="mx-auto max-w-7xl px-6">
        {/* Cabecera */}
        <div className="mb-20 grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-4 flex items-center gap-2 text-emerald-500 text-xs font-bold tracking-widest uppercase">
              <ShieldAlert size={20} aria-hidden="true" />
              Software de Gestión HSE y SST — Blindaje Jurídico y Operativo
            </p>
            <h2
              id="safetyon-heading"
              className="mb-8 text-4xl leading-tight font-extrabold text-white md:text-6xl"
              itemProp="name"
            >
              Safety On: <span className="text-emerald-500">seguridad industrial digital</span> para Colombia y Latinoamérica.
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-slate-400" itemProp="description">
              Transformamos la <strong>gestión HSE y SST</strong> de reactiva a preventiva. Un{" "}
              <strong>software de seguridad industrial digital</strong> que garantiza que cada{" "}
              <strong>permiso de trabajo</strong> —incluyendo <strong>trabajo en alturas</strong>— esté respaldado por
              evidencia forense inalterable y cumplimiento normativo en tiempo real. Disponible para empresas en{" "}
              <strong>Colombia</strong> y <strong>Latinoamérica</strong>.
            </p>

            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6">
              <h3 className="mb-2 flex items-center gap-2 font-bold text-emerald-400">
                <Scale size={18} aria-hidden="true" /> Protección legal ante incidentes y auditorías
              </h3>
              <p className="text-sm text-slate-400">
                Ante cualquier auditoría regulatoria o incidente, reconstruya minuto a minuto quién aprobó qué,
                cuándo y bajo qué condiciones. <strong className="text-slate-300">Trazabilidad HSE</strong> que el
                papel no puede ofrecer.
              </p>
            </div>
          </div>

          {/* KPIs de Impacto */}
          <div className="grid grid-cols-2 gap-4" aria-label="Indicadores de impacto Safety On">
            <KpiCard
              label="Blindaje Legal HSE"
              value="100%"
              desc="Cadena de decisión documentada e inalterable ante entes reguladores."
            />
            <KpiCard
              label="Reducción Desviaciones SST"
              value="-40%"
              desc="IA verifica cumplimiento normativo antes de autorizar labores de riesgo."
            />
            <KpiCard
              label="Disponibilidad Auditoría"
              value="Instantánea"
              valueClassName="text-base leading-tight tracking-tight sm:text-lg md:text-xl lg:text-2xl break-words"
              desc="Toda la información de permisos disponible sin buscar en archivos físicos."
            />
            <KpiCard
              label="Pérdida Documental"
              value="0%"
              desc="Cero alteración o extravío de permisos de trabajo y certificados SST."
            />
          </div>
        </div>

        {/* Módulos Técnicos */}
        <h3 className="sr-only">Módulos de Safety On — software HSE Colombia</h3>
        <ul
          className="mb-20 grid gap-8 md:grid-cols-3 list-none p-0"
          aria-label="Módulos del software HSE Safety On"
          itemProp="featureList"
        >
          <Feature
            icon={<Fingerprint size={24} />}
            title="Permisos de trabajo digitales con firma SHA-256"
            desc="Validación legal inalterable con GPS y timestamp para cada ejecutor y aprobador de permisos de trabajo en alturas y trabajos críticos."
          />
          <Feature
            icon={<UserCheck size={24} />}
            title="Verificación de competencias SST"
            desc="Cruce automático de certificados, cursos de trabajo en alturas y avales vigentes para garantizar personal competente."
          />
          <Feature
            icon={<Zap size={24} />}
            title="Análisis de riesgo asistido por IA"
            desc="Agentes entrenados en normativas HSE colombianas que alertan sobre riesgos omitidos antes de autorizar labores."
          />
        </ul>

        {/* Bloque: Trazabilidad Forense S3 */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-10">
          <div
            className="absolute top-0 right-0 rounded-full bg-emerald-500/5 p-32 blur-[120px]"
            aria-hidden="true"
          />
          <div className="relative z-10 grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="mb-4 flex items-center gap-2 text-emerald-400 text-xs font-bold tracking-widest uppercase">
                <Lock size={20} aria-hidden="true" />
                S3 Object Lock — Trazabilidad HSE inalterable
              </p>
              <h3 className="mb-6 text-3xl font-bold">
                Integridad documental: el estándar de la <strong>gestión de seguridad industrial digital</strong>
              </h3>
              <p className="mb-6 leading-relaxed text-slate-400">
                Una vez firmado un <strong>permiso de trabajo</strong>, el documento se bloquea a nivel de
                infraestructura. Nadie, ni siquiera un administrador, puede alterar la evidencia original. Este es
                el estándar que exigen las aseguradoras y entes de control en Colombia.
              </p>
              <ul className="space-y-3 list-none p-0">
                <li className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0" aria-hidden="true" />
                  <span>Cumplimiento <strong>Ley 1581</strong> (Habeas Data) y <strong>Decreto 1072</strong></span>
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0" aria-hidden="true" />
                  <span><strong>Trazabilidad HSE</strong> completa minuto a minuto</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0" aria-hidden="true" />
                  <span>Cumplimiento <strong>Resolución 0312</strong> de estándares mínimos SST</span>
                </li>
              </ul>
            </div>
            <div
              className="rounded-2xl border border-slate-800 bg-slate-950 p-6 font-mono text-[10px] text-emerald-500/70"
              aria-label="Log forense de ejemplo Safety On"
            >
              <div className="mb-2 border-b border-slate-800 pb-2 text-slate-500">
                // FORENSIC_LOG — PERMISO_TRABAJO_ALTURAS
              </div>
              <div className="space-y-1">
                <p>&gt; TIMESTAMP: 2026-03-23T18:50:42Z</p>
                <p>&gt; EVENT: PERMIT_APPROVAL_SIGNED</p>
                <p>&gt; USER_ID: ENG_0492_MARTINEZ</p>
                <p>&gt; GPS_LOC: 7.0012, -73.8561 (Yondó, ANT)</p>
                <p className="text-emerald-400">&gt; HASH_SHA256: 8f3c2b1a5e9d8c7b6a5f4e3d2c1b0a...</p>
                <p className="text-emerald-400">&gt; STATUS: IMMUTABLE_LOCK_ACTIVE</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <p className="mb-6 text-slate-400">
            Su <strong className="text-white">software SST para Colombia</strong> listo para auditoría regulatoria.
          </p>
          <SafetyOnCta />
        </div>
      </div>
    </section>
  );
};

const KpiCard = ({
  label,
  value,
  desc,
  valueClassName = "text-3xl",
}: {
  label: string;
  value: string;
  desc: string;
  valueClassName?: string;
}) => (
  <div className="min-w-0 rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all hover:border-emerald-500/30">
    <div className="mb-1 text-[10px] font-bold tracking-widest text-slate-500 uppercase">{label}</div>
    <div className={`mb-2 font-extrabold text-white ${valueClassName}`}>{value}</div>
    <p className="text-xs leading-tight text-slate-500">{desc}</p>
  </div>
);

const Feature = ({ icon, title, desc }: { icon: ReactNode; title: string; desc: string }) => (
  <li className="group rounded-2xl border border-slate-800 bg-slate-900/50 p-8 transition-all hover:bg-slate-900">
    <div className="mb-4 text-emerald-500 transition-transform group-hover:scale-110" aria-hidden="true">{icon}</div>
    <h4 className="mb-2 font-bold text-white">{title}</h4>
    <p className="text-sm leading-relaxed text-slate-500">{desc}</p>
  </li>
);
