"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const screens = [
  {
    src: "/fixai-screen-2.png",
    alt: "Fix AI — ejecución de una orden de trabajo desde campo",
    width: 588,
    height: 1024,
    eyebrow: "Paso 1",
    title: "El técnico ejecuta la OT en campo",
    description:
      "Clasifica la orden, registra la fecha de ejecución y completa la información operativa desde una interfaz preparada para trabajo móvil.",
    bullets: [
      "Registra la ejecución y la evidencia desde campo.",
      "Completa las operaciones y documenta los hallazgos.",
      "Deja la OT preparada para revisión del supervisor.",
    ],
  },
  {
    src: "/fixai-screen-supervisor.jpg",
    alt: "Fix AI — tablero del supervisor en PC: revisión de OT, sugerencias de texto y aprobación con PDF",
    width: 1024,
    height: 530,
    eyebrow: "Paso 2",
    title: "El supervisor revisa, corrige y aprueba",
    description:
      "Controla el avance semanal, identifica sesiones pendientes y revisa cada OT con sus operaciones, hallazgos y nivel de criticidad antes de aprobarla.",
    bullets: [
      "Prioriza las sesiones que necesitan revisión.",
      "Valida avance, tiempos, hallazgos y sugerencias.",
      "Aprueba la OT y genera el PDF trazable.",
    ],
  },
  {
    src: "/fixai-screen-report-email.png",
    alt: "Correo automático de Fix AI con informe semanal de órdenes de trabajo pendientes",
    width: 537,
    height: 1024,
    eyebrow: "Paso 3",
    title: "Fix AI informa automáticamente a la operación",
    description:
      "Envía informes automáticos semanales de OTs pendientes y puede reportar hallazgos relevantes o cualquier otra novedad que la operación necesite comunicar.",
    bullets: [
      "Resume semanalmente las OTs que siguen incompletas.",
      "Notifica hallazgos relevantes y novedades operativas.",
      "Adapta destinatarios y contenido a cada operación.",
    ],
  },
] as const;

export const ProductTour = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = screens[activeIndex];
  const isDesktopBoard = active.width > active.height;

  const showPrevious = () =>
    setActiveIndex((current) => (current === 0 ? screens.length - 1 : current - 1));

  const showNext = () =>
    setActiveIndex((current) => (current === screens.length - 1 ? 0 : current + 1));

  return (
    <div
      id="tour-fix-ai"
      aria-labelledby="product-tour-heading"
      className="mb-20"
    >
      <div className="mb-10 text-center">
        <p className="mb-3 text-xs font-bold tracking-widest text-emerald-400 uppercase">
          Fix AI en acción
        </p>
        <h3
          id="product-tour-heading"
          className="mb-4 text-3xl font-extrabold text-white md:text-4xl"
        >
          Recorre el flujo desde la orden hasta el reporte
        </h3>
        <p className="mx-auto max-w-3xl leading-relaxed text-slate-400">
          Tres pantallas reales muestran cómo el trabajo de campo se convierte en control para
          supervisión, aprobación trazable e informes automáticos para la operación.
        </p>
      </div>

      <div
        className={`grid items-center gap-8 rounded-3xl border border-slate-800 bg-slate-900/60 p-5 sm:p-8 lg:gap-12 ${
          isDesktopBoard
            ? "lg:grid-cols-1"
            : "lg:grid-cols-[minmax(0,0.8fr)_minmax(18rem,1.2fr)]"
        }`}
      >
          <div
            id="product-tour-screen"
            className={`mx-auto w-full overflow-hidden rounded-2xl border border-slate-700 ${
              isDesktopBoard
                ? "max-w-5xl bg-slate-950"
                : "max-w-[21rem] bg-slate-100"
            }`}
          >
            <Image
              key={active.src}
              src={active.src}
              alt={active.alt}
              width={active.width}
              height={active.height}
              quality={95}
              unoptimized
              sizes={
                isDesktopBoard
                  ? "(max-width: 1024px) 92vw, 1024px"
                  : "(max-width: 640px) 85vw, 336px"
              }
              className="h-auto w-full"
            />
          </div>

          <div className={isDesktopBoard ? "mx-auto w-full max-w-3xl" : undefined}>
            <p className="mb-3 text-xs font-bold tracking-widest text-blue-400 uppercase">
              {active.eyebrow}
            </p>
            <h4 className="mb-4 text-2xl font-bold text-white md:text-3xl">{active.title}</h4>
            <p className="mb-7 leading-relaxed text-slate-400">{active.description}</p>

            <ol className="mb-8 space-y-3 text-sm text-slate-300">
              {active.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-400" size={17} />
                  {bullet}
                </li>
              ))}
            </ol>

            <div className="mb-7 flex flex-wrap gap-3" aria-label="Seleccionar pantalla del tour">
              {screens.map((screen, index) => (
                <button
                  key={screen.src}
                  type="button"
                  aria-controls="product-tour-screen"
                  aria-pressed={activeIndex === index}
                  onClick={() => setActiveIndex(index)}
                  className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                    activeIndex === index
                      ? "bg-blue-600 text-white"
                      : "border border-slate-700 text-slate-300 hover:border-blue-500/50 hover:text-white"
                  }`}
                >
                  {screen.eyebrow}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={showPrevious}
                  aria-label="Pantalla anterior"
                  className="rounded-full border border-slate-700 p-3 text-slate-300 transition hover:border-blue-500/50 hover:text-white"
                >
                  <ArrowLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  aria-label="Pantalla siguiente"
                  className="rounded-full border border-slate-700 p-3 text-slate-300 transition hover:border-blue-500/50 hover:text-white"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
              <Link
                href="/fixai-cmms"
                className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 transition hover:text-blue-300"
              >
                Conocer Fix AI <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
    </div>
  );
};
