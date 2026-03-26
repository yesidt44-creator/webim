"use client";

import type { ReactNode } from "react";
import {
  ShieldAlert,
  Fingerprint,
  Scale,
  UserCheck,
  Zap,
  ArrowRight,
  Lock,
  CheckCircle2,
} from "lucide-react";
import { ContactModal } from "./ContactModal";

export const SafetyOn = () => {
  return (
    <section id="safety-on" className="scroll-mt-28 overflow-hidden border-t border-slate-900 bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Cabecera: El Concepto de Blindaje */}
        <div className="mb-20 grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-4 flex items-center gap-2 text-emerald-500">
              <ShieldAlert size={20} />
              <span className="text-xs font-bold tracking-widest uppercase">Blindaje Jurídico y Operativo HSE</span>
            </div>
            <h2 className="mb-8 text-4xl leading-tight font-extrabold text-white md:text-6xl">
              Safety On: Su póliza de <span className="text-emerald-500">seguridad digital.</span>
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-slate-400">
              Transformamos la gestión HSE de reactiva a preventiva. Un sistema inteligente que garantiza que cada permiso
              de trabajo y análisis de riesgo esté respaldado por evidencia forense inalterable y cumplimiento normativo en
              tiempo real.
            </p>

            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6">
              <h4 className="mb-2 flex items-center gap-2 font-bold text-emerald-400">
                <Scale size={18} /> Protección ante Incidentes
              </h4>
              <p className="text-sm text-slate-400">
                Ante cualquier auditoría regulatoria o incidente, reconstruya minuto a minuto quién aprobó qué, cuándo y
                bajo qué condiciones. Un nivel de trazabilidad que el papel no puede ofrecer.
              </p>
            </div>
          </div>

          {/* Zona de KPIs de Impacto */}
          <div className="grid grid-cols-2 gap-4">
            <KpiCard
              label="Blindaje Legal"
              value="100%"
              desc="Cadena de decisión documentada e inalterable."
            />
            <KpiCard
              label="Reducción Desviaciones"
              value="-40%"
              desc="IA verifica cumplimiento antes de autorizar labores."
            />
            <KpiCard
              label="Disponibilidad Auditoría"
              value="Instantánea"
              valueClassName="text-base leading-tight tracking-tight sm:text-lg md:text-xl lg:text-2xl break-words"
              desc="Toda la información disponible sin buscar en archivos físicos."
            />
            <KpiCard label="Pérdida Documental" value="0%" desc="Cero alteración o extravío de permisos y certificados." />
          </div>
        </div>

        {/* Módulos Técnicos */}
        <div className="mb-20 grid gap-8 md:grid-cols-3">
          <Feature
            icon={<Fingerprint size={24} />}
            title="Firma Forense SHA-256"
            desc="Validación legal inalterable con GPS y timestamp para cada ejecutor y aprobador."
          />
          <Feature
            icon={<UserCheck size={24} />}
            title="Verificación de Competencias"
            desc="Cruce automático de certificados, cursos de alturas y avales vigentes en tiempo real."
          />
          <Feature
            icon={<Zap size={24} />}
            title="Análisis Asistido por IA"
            desc="Agentes entrenados en normativas HSE que alertan sobre riesgos omitidos en el análisis inicial."
          />
        </div>

        {/* Bloque: Trazabilidad Forense S3 */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-10">
          <div className="absolute top-0 right-0 rounded-full bg-emerald-500/5 p-32 blur-[120px]"></div>
          <div className="relative z-10 grid items-center gap-12 md:grid-cols-2">
            <div>
              <div className="mb-4 flex items-center gap-2 text-emerald-400">
                <Lock size={20} />
                <span className="text-xs font-bold tracking-widest uppercase">S3 Object Lock Technology</span>
              </div>
              <h3 className="mb-6 text-3xl font-bold">Integridad de la prueba</h3>
              <p className="mb-6 leading-relaxed text-slate-400">
                Una vez que un permiso es firmado, el documento se bloquea a nivel de infraestructura. Nadie, ni siquiera
                un administrador, puede alterar la evidencia original. Este es el estándar que exigen las aseguradoras y
                entes de control.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 size={16} className="text-emerald-500" />
                  <span>Cumplimiento Ley 1581 (Habeas Data)</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 size={16} className="text-emerald-500" />
                  <span>Trazabilidad completa Minute-by-Minute</span>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 font-mono text-[10px] text-emerald-500/70">
              <div className="mb-2 border-b border-slate-800 pb-2 text-slate-500">// FORENSIC_LOG_VERIFICATION</div>
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
          <ContactModal>
            <button
              type="button"
              className="mx-auto flex items-center gap-2 rounded-xl bg-emerald-600 px-10 py-4 font-bold text-white shadow-lg shadow-emerald-900/50 transition hover:bg-emerald-500"
            >
              Agendar Auditoría de Viabilidad HSE <ArrowRight size={20} />
            </button>
          </ContactModal>
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
  /** Valores largos (p. ej. «Instantánea») necesitan un escalado menor que «100%». */
  valueClassName?: string;
}) => (
  <div className="min-w-0 rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all hover:border-emerald-500/30">
    <div className="mb-1 text-[10px] font-bold tracking-widest text-slate-500 uppercase">{label}</div>
    <div className={`mb-2 font-extrabold text-white ${valueClassName}`}>{value}</div>
    <p className="text-xs leading-tight text-slate-500">{desc}</p>
  </div>
);

const Feature = ({ icon, title, desc }: { icon: ReactNode; title: string; desc: string }) => (
  <div className="group rounded-2xl border border-slate-800 bg-slate-900/50 p-8 transition-all hover:bg-slate-900">
    <div className="mb-4 text-emerald-500 transition-transform group-hover:scale-110">{icon}</div>
    <h4 className="mb-2 font-bold text-white">{title}</h4>
    <p className="text-sm leading-relaxed text-slate-500">{desc}</p>
  </div>
);
