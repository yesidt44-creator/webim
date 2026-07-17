import Image from "next/image";
import type { ReactNode } from "react";
import { headers } from "next/headers";
import {
  ShieldCheck,
  WifiOff,
  QrCode,
  Database,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  TrendingDown,
  AlertTriangle,
} from "lucide-react";
import { NexviaCta } from "./NexviaCta";

const nexviaJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Nexvia",
  alternateName: [
    "software gestión de flotas Colombia",
    "software HSEQ Colombia",
    "seguridad vial digital Colombia",
    "gestión seguridad industrial flotas",
    "software SST transporte Colombia",
  ],
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "Gestión de Flotas, HSEQ, Seguridad Vial, ISO 9001, SST Transporte",
  operatingSystem: "Web, Android, iOS",
  description:
    "Nexvia es el software de gestión de flotas e HSEQ para PyMEs de transporte en Colombia. Digitaliza inspecciones preoperacionales, evaluaciones de riesgo, trazabilidad de seguridad industrial y cumplimiento ISO 9001 con tecnología offline-first para zonas sin cobertura.",
  keywords:
    "software gestión flotas Colombia, HSEQ Colombia, seguridad industrial digital, gestión seguridad industrial, software SST Colombia, trazabilidad HSEQ, seguridad vial digital, ISO 9001 transporte, permisos trabajo transporte, inspección preoperacional digital",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceCurrency: "USD",
    price: "0",
    priceSpecification: {
      "@type": "PriceSpecification",
      description: "Sistema nativo colombiano accesible para PyMEs. Contactar para cotización según tamaño de flota.",
    },
  },
  provider: {
    "@type": "Organization",
    name: "IMELECTRIC",
    url: "https://imelectric.es",
    areaServed: ["Colombia", "Latinoamérica"],
    knowsAbout: [
      "Gestión de flotas",
      "HSEQ Colombia",
      "Seguridad vial digital",
      "ISO 9001",
      "SST transporte",
      "Inspección preoperacional",
      "Seguridad industrial digital",
    ],
  },
  featureList: [
    "Inspecciones preoperacionales digitales con validación de competencias",
    "Evaluación de riesgo con matriz de 8 criterios y fatiga del conductor",
    "Trazabilidad HSEQ 100% auditable e inalterable",
    "Operación offline-first para zonas sin cobertura en Colombia",
    "Encuestas de satisfacción por código QR vinculadas al viaje",
    "Blindaje legal ante incidentes y auditorías regulatorias",
    "Verificación automática de certificados y avales de conductores",
    "Cumplimiento ISO 9001 para transporte y logística",
  ],
};

export const Nexvia = async () => {
  const nonce = (await headers()).get("x-nonce") ?? undefined;
  return (
    <section
      id="nexvia"
      aria-labelledby="nexvia-heading"
      className="scroll-mt-28 overflow-hidden border-t border-slate-900 bg-slate-950 py-24"
      itemScope
      itemType="https://schema.org/SoftwareApplication"
    >
      {/* JSON-LD estructurado para Google */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        nonce={nonce}
        dangerouslySetInnerHTML={{ __html: JSON.stringify(nexviaJsonLd) }}
      />

      <div className="mx-auto max-w-7xl px-6">
        {/* Cabecera */}
        <div className="mb-20 max-w-3xl">
          <p className="mb-4 flex items-center gap-2 text-blue-500 text-xs font-bold tracking-widest uppercase">
            <ShieldCheck size={20} aria-hidden="true" />
            Software de Gestión de Flotas, HSEQ e ISO 9001
          </p>
          <h2
            id="nexvia-heading"
            className="mb-8 text-4xl leading-tight font-extrabold text-white md:text-6xl"
            itemProp="name"
          >
            Nexvia: <span className="text-blue-500">tu flota, bajo control,</span> incluso sin internet.
          </h2>
          <p className="mb-6 text-lg leading-relaxed text-slate-400" itemProp="description">
            Plataforma HSEQ offline-first para PyMEs de transporte colombiano. Integra operación,{" "}
            <strong>seguridad vial digital</strong> e <strong>HSEQ</strong> en una sola fuente de verdad auditable —
            desde la inspección preoperacional hasta el cierre del viaje, sin depender de señal.
          </p>
          {/* 4 líneas de producto */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { label: "HSEQ", desc: "Seguridad vial e industrial" },
              { label: "Talleres", desc: "Mantenimiento de flota" },
              { label: "Personales", desc: "Gestión de conductores" },
              { label: "EV", desc: "Flota eléctrica" },
            ].map(({ label, desc }) => (
              <div key={label} className="rounded-xl border border-slate-800 bg-slate-900/60 p-3 text-center">
                <p className="text-xs font-bold text-blue-400">{label}</p>
                <p className="mt-1 text-[10px] text-slate-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bloque 1: KPIs y Operación Offline */}
        <div className="mb-24 grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <div className="mb-4 inline-block rounded-lg bg-blue-500/10 p-2 text-blue-400" aria-hidden="true">
                <WifiOff size={24} />
              </div>
              <h3 className="mb-6 text-3xl font-bold text-white">
                Operación real en zonas de silencio — <strong>offline-first</strong>
              </h3>
              <p className="mb-6 leading-relaxed text-slate-400">
                Las rutas colombianas no siempre tienen señal. Nexvia usa tecnología{" "}
                <strong>offline-first</strong> para que los conductores completen checklists preoperacionales,{" "}
                <strong>permisos de trabajo en campo</strong> y reportes de riesgo sin internet. La{" "}
                <strong>gestión de seguridad industrial</strong> no se detiene por falta de cobertura.
              </p>
            </div>

            {/* KPIs */}
            <div className="grid grid-cols-2 gap-4" aria-label="Indicadores de impacto Nexvia">
              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                <div className="mb-2 flex items-center gap-2 text-xs font-bold tracking-tighter text-blue-400 uppercase">
                  <Clock size={14} aria-hidden="true" /> Reporte en campo
                </div>
                <div className="text-lg font-extrabold text-white leading-tight">Diseñado para ser ágil</div>
                <p className="mt-1 text-[10px] text-slate-500 uppercase">Formularios guiados que reducen el tiempo de reporte frente al papel</p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                <div className="mb-2 flex items-center gap-2 text-xs font-bold tracking-tighter text-emerald-400 uppercase">
                  <TrendingDown size={14} aria-hidden="true" /> Ahorro administrativo
                </div>
                <div className="text-lg font-extrabold text-white leading-tight">Menos carga admin</div>
                <p className="mt-1 text-[10px] text-slate-500 uppercase">Automatización de reportes y checklists libera tiempo del equipo</p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                <div className="mb-2 flex items-center gap-2 text-xs font-bold tracking-tighter text-amber-400 uppercase">
                  <ShieldCheck size={14} aria-hidden="true" /> Trazabilidad HSEQ
                </div>
                <div className="text-3xl font-extrabold text-white">Completa</div>
                <p className="mt-1 text-[10px] text-slate-500 uppercase">Cada registro auditable con firma forense y GPS</p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                <div className="mb-2 flex items-center gap-2 text-xs font-bold tracking-tighter text-purple-400 uppercase">
                  <Database size={14} aria-hidden="true" /> Digitalización
                </div>
                <div className="text-3xl font-extrabold text-white">Total</div>
                <p className="mt-1 text-[10px] text-slate-500 uppercase">Checklists, inspecciones y permisos: cero papel</p>
              </div>
            </div>
          </div>

          {/* Beneficios estratégicos */}
          <div className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-10 shadow-2xl">
            <div
              className="absolute top-0 right-0 rounded-full bg-blue-500/5 p-32 blur-[120px] transition-colors group-hover:bg-blue-500/10"
              aria-hidden="true"
            />
            <div className="relative z-10">
              <h3 className="mb-6 border-b border-slate-800 pb-4 text-xl font-bold text-white">
                Beneficios estratégicos — software HSEQ Colombia
              </h3>
              <ul className="space-y-6 list-none p-0">
                <li className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 p-2 text-blue-500" aria-hidden="true">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <span className="block font-bold text-white">Blindaje legal ante incidentes viales</span>
                    <p className="mt-1 text-xs text-slate-400">
                      Toda la cadena de decisión documentada e inalterable: <strong className="text-slate-300">trazabilidad HSE</strong> para protección ante auditorías regulatorias.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 p-2 text-blue-500" aria-hidden="true">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <span className="block font-bold text-white">Verificación automática de competencias SST</span>
                    <p className="mt-1 text-xs text-slate-400">
                      El sistema impide que un conductor sin certificación, aval vigente o{" "}
                      <strong className="text-slate-300">permiso de trabajo</strong> opere el vehículo.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 p-2 text-blue-500" aria-hidden="true">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <span className="block font-bold text-white">Diseñado para el bolsillo de la PyME colombiana</span>
                    <p className="mt-1 text-xs text-slate-400">
                      El único <strong className="text-slate-300">software HSEQ Colombia</strong> nativo diseñado para
                      las realidades operativas y normativas del transporte colombiano, sin el costo de soluciones enterprise.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 p-2 text-blue-500" aria-hidden="true">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <span className="block font-bold text-white">Scoring de riesgo sin hardware adicional</span>
                    <p className="mt-1 text-xs text-slate-400">
                      El modelo de scoring usa el <strong className="text-slate-300">acelerómetro del celular</strong> del
                      conductor. No se requieren dispositivos adicionales ni instalación en el vehículo para detectar
                      patrones de conducción de riesgo.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 p-2 text-blue-500" aria-hidden="true">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <span className="block font-bold text-white">Pasaporte digital del vehículo</span>
                    <p className="mt-1 text-xs text-slate-400">
                      Cada vehículo acumula un historial completo: inspecciones, mantenimientos, incidentes y
                      certificaciones. El pasaporte digital permite auditorías y traspasos sin búsqueda en archivos físicos.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Módulos Operativos */}
        <h3 className="sr-only">Módulos operativos de Nexvia — gestión de flotas e HSEQ Colombia</h3>
        <ul
          className="grid gap-8 md:grid-cols-3 list-none p-0"
          aria-label="Módulos del software Nexvia"
          itemProp="featureList"
        >
          <FeatureItem
            icon={<ClipboardCheck size={24} />}
            title="Inspección preoperacional digital"
            text="Formularios digitales personalizados con validación de competencias del conductor y estado del vehículo antes de cada viaje. Cumplimiento SST transporte."
          />
          <FeatureItem
            icon={<AlertTriangle size={24} />}
            title="Evaluación de riesgo y seguridad vial"
            text="Matriz de 8 criterios que incluye evaluación de fatiga y flujo de aprobación con tokens UUID de un solo uso. Gestión de seguridad industrial en campo."
          />
          <FeatureItem
            icon={<QrCode size={24} />}
            title="Satisfacción del cliente ISO 9001"
            text="Encuestas vinculadas al viaje mediante códigos QR para métricas de calidad en tiempo real y cumplimiento ISO 9001."
          />
        </ul>

        {/* Badge ISO 9001 */}
        <div className="flex items-center justify-center gap-4 py-6">
          <Image
            src="/badges/iso-9001-ll-c.png"
            alt="Certificación ISO 9001 — LL-C Certification"
            width={140}
            height={56}
            className="opacity-90"
          />
          <p className="text-xs text-slate-500">
            Empresa certificada <strong className="text-slate-400">ISO 9001:2015</strong>
          </p>
        </div>

        {/* CTA */}
        <div className="relative mt-20 overflow-hidden rounded-3xl border border-blue-500/30 bg-blue-600/10 p-12 text-center">
          <div
            className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-blue-500 via-emerald-500 to-blue-500"
            aria-hidden="true"
          />
          <h3 className="mb-4 text-3xl font-bold text-white">
            ¿Listo para digitalizar su flota con seguridad industrial hoy mismo?
          </h3>
          <p className="mx-auto mb-8 max-w-xl text-slate-400">
            Nexvia es el único <strong className="text-white">software HSEQ</strong> nativo colombiano que integra
            transporte, <strong className="text-white">seguridad industrial digital</strong> e ISO 9001 en una sola
            plataforma.
          </p>
          <NexviaCta />
        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({ icon, title, text }: { icon: ReactNode; title: string; text: string }) => (
  <li className="group rounded-2xl border border-slate-800 bg-slate-900/50 p-8 transition-all hover:bg-slate-900">
    <div className="mb-4 text-blue-500 transition-transform group-hover:scale-110" aria-hidden="true">{icon}</div>
    <h4 className="mb-2 text-lg font-bold text-white">{title}</h4>
    <p className="text-sm leading-relaxed text-slate-500">{text}</p>
  </li>
);
