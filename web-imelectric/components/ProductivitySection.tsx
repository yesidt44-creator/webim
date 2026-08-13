import { ClipboardCheck, ShieldCheck, TimerReset } from "lucide-react";
import type { ReactNode } from "react";

type ProductivityCardProps = {
  product: string;
  headline: string;
  body: ReactNode;
  footnote?: string;
  icon: ReactNode;
  accentClassName: string;
};

const ProductivityCard = ({
  product,
  headline,
  body,
  footnote,
  icon,
  accentClassName,
}: ProductivityCardProps) => (
  <article className="flex h-full flex-col rounded-3xl border border-slate-200 bg-slate-50 p-7 text-slate-950 shadow-[0_18px_50px_rgba(2,6,23,0.16)]">
    <div className={`mb-6 flex size-12 items-center justify-center rounded-2xl text-white ${accentClassName}`}>
      {icon}
    </div>
    <p className="mb-3 text-xs font-extrabold tracking-widest text-slate-500 uppercase">{product}</p>
    <h3 className="mb-4 text-xl font-extrabold leading-tight">{headline}</h3>
    <div className="text-sm leading-relaxed text-slate-600">{body}</div>
    {footnote ? (
      <p className="mt-5 border-t border-slate-200 pt-4 text-xs font-semibold leading-relaxed text-slate-500">
        *{footnote}
      </p>
    ) : null}
  </article>
);

export const ProductivitySection = () => (
  <section
    aria-labelledby="productivity-heading"
    className="border-b border-slate-800 bg-slate-900 py-20"
  >
    <div className="mx-auto max-w-7xl px-6">
      <div className="mx-auto mb-12 max-w-4xl text-center">
        <p className="mb-3 text-xs font-bold tracking-widest text-cyan-400 uppercase">
          Productividad aplicada
        </p>
        <h2 id="productivity-heading" className="mb-5 text-3xl font-extrabold text-white md:text-5xl">
          Aumenta la productividad de tu operación con IA construida para tu empresa
        </h2>
        <p className="text-lg leading-relaxed text-slate-300">
          Imelectric adapta cada plataforma a tu operación real — implementación en semanas, no meses.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <ProductivityCard
          product="Fix AI"
          headline="Ejecutado vs. planeado, visible desde el campo hasta el ERP"
          icon={<TimerReset size={25} strokeWidth={2.2} aria-hidden="true" />}
          accentClassName="bg-gradient-to-br from-blue-800 via-blue-600 to-cyan-400"
          body={
            <p>
              Sin control de ejecución, el plan de mantenimiento vive en Excel, se pierde en papel y
              llega al ERP tarde o incompleto. Fix AI captura en campo —también offline—, deja ver lo
              ejecutado frente a lo planeado y exporta por archivo hacia el ERP del operador, sin
              doble digitación. Falion asiste en análisis de confiabilidad bajo control del
              supervisor.
            </p>
          }
        />

        <ProductivityCard
          product="Veriwork"
          headline="90% menos fricción entre quien ejecuta y quien autoriza"
          icon={<ShieldCheck size={25} strokeWidth={2.2} aria-hidden="true" />}
          accentClassName="bg-gradient-to-br from-emerald-800 via-emerald-600 to-teal-300"
          body={
            <p>
              El Análisis de Riesgos o Análisis de Trabajo Seguro se valida contra la normativa y las
              especificaciones técnicas de seguridad desde que lo crea el ejecutor — no cuando llega
              a revisión. Esto reduce tiempos de aprobación y vacíos normativos*, con secuencia 100%
              digital: sin recorridos físicos, el ejecutor se enfoca en garantizar los controles y
              ejecutar de forma eficiente.
            </p>
          }
          footnote="Reducción medida en pruebas de campo internas."
        />

        <ProductivityCard
          product="Shield AI"
          headline="Cumplimiento SST al alcance de la pyme, sin fricción"
          icon={<ClipboardCheck size={25} strokeWidth={2.2} aria-hidden="true" />}
          accentClassName="bg-gradient-to-br from-violet-800 via-violet-600 to-fuchsia-400"
          body={
            <p>
              Cada vez más empresas exigen a sus proveedores cumplir SST para poder contratarlos.
              Shield AI le da al microempresario o la pyme una herramienta simple — con el respaldo
              de un profesional de auditoría SST/SGI — para mantener su documentación de calidad y
              seguridad al día, evitar sanciones costosas y facilitar nuevas contrataciones.
            </p>
          }
        />
      </div>
    </div>
  </section>
);
