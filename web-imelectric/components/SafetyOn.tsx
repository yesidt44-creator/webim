import type { ReactNode } from "react";
import { headers } from "next/headers";
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
  name: "Veriwork",
  alternateName: [
    "Veriwork software HSE",
    "software gestión HSE Colombia",
    "software HSE Colombia",
    "software SST Colombia",
    "permisos de trabajo digitales verificables",
    "gestión seguridad industrial digital",
  ],
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "HSE, SST, Seguridad Industrial, Permisos de Trabajo",
  operatingSystem: "Web, Android, iOS",
  description:
    "Veriwork es la plataforma de gestión HSE y SST para Colombia y Latinoamérica. La gestión HSE que tu operación puede verificar, no solo archivar. Digitaliza permisos de trabajo con firma criptográfica verificable, cumplimiento normativo en tiempo real y trazabilidad inalterable.",
  keywords:
    "Veriwork software HSE, software gestión HSE Colombia, seguridad industrial digital, permisos de trabajo digitales, software HSE Colombia, gestión seguridad industrial, trabajo en alturas digital, software SST Colombia, trazabilidad HSE forense, firma Ed25519 permisos trabajo, PAdES sello de tiempo HSE, firma electrónica seguridad industrial Colombia",
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

export const SafetyOn = async () => {
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  return (
    <section
      id="veriwork"
      aria-labelledby="veriwork-heading"
      className="scroll-mt-28 overflow-hidden border-t border-slate-900 bg-slate-950 py-24"
      itemScope
      itemType="https://schema.org/SoftwareApplication"
    >
      {/* JSON-LD estructurado para Google */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        nonce={nonce}
        dangerouslySetInnerHTML={{ __html: JSON.stringify(safetyOnJsonLd) }}
      />

      <div className="mx-auto max-w-7xl px-6">
        {/* Cabecera */}
        <div className="mb-20 grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-4 flex items-center gap-2 text-emerald-500 text-xs font-bold tracking-widest uppercase">
              <ShieldAlert size={20} aria-hidden="true" />
              Gestión HSE verificable — No solo archivada
            </p>
            <h2
              id="veriwork-heading"
              className="mb-8 text-4xl leading-tight font-extrabold text-white md:text-6xl"
              itemProp="name"
            >
              Veriwork: <span className="text-emerald-500">la gestión HSE que tu operación puede verificar,</span> no solo archivar.
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
          <div className="grid grid-cols-2 gap-4" aria-label="Indicadores de impacto Veriwork">
            <KpiCard
              label="Trazabilidad HSE"
              value="Completa"
              valueClassName="text-base leading-tight tracking-tight sm:text-lg md:text-xl lg:text-2xl break-words"
              desc="Cadena de decisión documentada e inalterable ante entes reguladores."
            />
            <KpiCard
              label="Verificación normativa"
              value="Antes de autorizar"
              valueClassName="text-sm leading-tight tracking-tight sm:text-base md:text-lg break-words"
              desc="El sistema alerta sobre riesgos y omisiones normativas — la persona competente revisa y autoriza."
            />
            <KpiCard
              label="Disponibilidad Auditoría"
              value="Instantánea"
              valueClassName="text-base leading-tight tracking-tight sm:text-lg md:text-xl lg:text-2xl break-words"
              desc="Toda la información de permisos disponible sin buscar en archivos físicos."
            />
            <KpiCard
              label="Pérdida Documental"
              value="Diseñado para cero"
              valueClassName="text-xs leading-tight tracking-tight sm:text-sm md:text-base break-words"
              desc="Arquitectura diseñada para cero alteración o extravío de permisos de trabajo y certificados SST."
            />
          </div>
        </div>

        {/* Módulos Técnicos */}
        <h3 className="sr-only">Módulos de Veriwork — software HSE Colombia</h3>
        <ul
          className="mb-20 grid gap-8 md:grid-cols-3 list-none p-0"
          aria-label="Módulos del software HSE Veriwork"
          itemProp="featureList"
        >
          <Feature
            icon={<Fingerprint size={24} />}
            title="Firma Ed25519 por empresa — verificable públicamente"
            desc="Cada permiso lleva firma criptográfica Ed25519 ligada a la empresa emisora, GPS y timestamp. Cualquier parte puede verificar la autenticidad con el enlace o el QR del documento."
          />
          <Feature
            icon={<UserCheck size={24} />}
            title="Verificación de competencias SST"
            desc="Cruce automático de certificados, cursos de trabajo en alturas y avales vigentes para garantizar personal competente."
          />
          <Feature
            icon={<Zap size={24} />}
            title="Análisis de riesgo asistido por IA"
            desc="El sistema analiza el cumplimiento normativo HSE colombiano y alerta sobre riesgos omitidos — la persona competente revisa y es quien autoriza la labor."
          />
        </ul>

        {/* Bloque: Trazabilidad Forense — Ed25519 / PAdES */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-10">
          <div
            className="absolute top-0 right-0 rounded-full bg-emerald-500/5 p-32 blur-[120px]"
            aria-hidden="true"
          />
          <div className="relative z-10 grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="mb-4 flex items-center gap-2 text-emerald-400 text-xs font-bold tracking-widest uppercase">
                <Lock size={20} aria-hidden="true" />
                Firma Ed25519 · PAdES · Sello de tiempo · QR verificable
              </p>
              <h3 className="mb-6 text-3xl font-bold">
                Trazabilidad forense: el registro <strong>no se puede alterar</strong> después de firmado
              </h3>
              <p className="mb-6 leading-relaxed text-slate-400">
                Cada <strong>permiso de trabajo</strong> lleva firma Ed25519 de la empresa, sello de tiempo PAdES
                y un QR de verificación pública. Nadie — ni siquiera un administrador — puede alterar la evidencia
                original. Las actas de alta severidad se refuerzan con protocolo notarial cuando el caso lo requiere.
              </p>
              <ul className="space-y-3 list-none p-0">
                <li className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0" aria-hidden="true" />
                  <span>Cumplimiento <strong>Ley 1581</strong> (Habeas Data) y <strong>Decreto 1072</strong></span>
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0" aria-hidden="true" />
                  <span>Firma electrónica con valor legal (Decreto 2364/2012) — segregación de roles</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0" aria-hidden="true" />
                  <span>Cumplimiento <strong>Resolución 0312</strong> de estándares mínimos SST</span>
                </li>
              </ul>
            </div>
            <div
              className="rounded-2xl border border-slate-800 bg-slate-950 p-6 font-mono text-[10px] text-emerald-500/70"
              aria-label="Log forense de ejemplo Veriwork"
            >
              <div className="mb-2 border-b border-slate-800 pb-2 text-slate-500">
                // FORENSIC_LOG — PERMISO_TRABAJO_ALTURAS
              </div>
              <div className="space-y-1">
                <p>&gt; TIMESTAMP: 2026-03-23T18:50:42Z</p>
                <p>&gt; EVENT: PERMIT_APPROVAL_SIGNED</p>
                <p>&gt; ROLE: PERSONA_COMPETENTE · COORD_ALTURAS</p>
                <p>&gt; GPS_LOC: 7.0012, -73.8561 (Yondó, ANT)</p>
                <p className="text-emerald-400">&gt; SIG_ALGO: Ed25519 (empresa_key_id: VW-2026-001)</p>
                <p className="text-emerald-400">&gt; PADES_SEAL: RFC3161 · TSA_HASH: a7f3d...</p>
                <p className="text-emerald-400">&gt; VERIFY_QR: imelectric.es/v/PT-2026-0492</p>
                <p className="text-emerald-400">&gt; STATUS: IMMUTABLE · NOTARIAL: NO (low-severity)</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <p className="mb-6 text-slate-400">
            <strong className="text-white">Veriwork</strong> — software HSE verificable para Colombia y Latinoamérica.
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
