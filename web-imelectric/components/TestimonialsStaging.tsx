import { Quote, UserRound } from "lucide-react";

const testimonialDrafts = [
  {
    avatar: "[Pendiente: fotografía autorizada]",
    quote: "[Pendiente: primer testimonio del piloto de Veriwork, agosto 2026]",
    metric: "[Pendiente: métrica validada del piloto]",
    attribution: "[Pendiente: nombre, cargo y empresa con autorización de publicación]",
  },
] as const;

export const TestimonialsStaging = () => {
  if (process.env.NODE_ENV === "production") {
    return null;
  }

  return (
    <section
      aria-labelledby="testimonials-staging-heading"
      className="border-t border-dashed border-amber-500/30 bg-amber-500/5 py-16"
    >
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-2 text-xs font-bold tracking-widest text-amber-400 uppercase">
          Solo desarrollo / staging
        </p>
        <h2 id="testimonials-staging-heading" className="mb-8 text-2xl font-bold text-white">
          Estructura de testimonios pendiente de evidencia autorizada
        </h2>

        {testimonialDrafts.map((item) => (
          <article
            key={item.quote}
            className="grid gap-6 rounded-2xl border border-slate-800 bg-slate-900 p-7 md:grid-cols-[auto_1fr_auto] md:items-center"
          >
            <div className="flex size-20 items-center justify-center rounded-full bg-slate-800 text-slate-400">
              <UserRound size={34} aria-hidden="true" />
              <span className="sr-only">{item.avatar}</span>
            </div>
            <div>
              <Quote size={22} className="mb-3 text-amber-400" aria-hidden="true" />
              <blockquote className="font-semibold text-slate-200">{item.quote}</blockquote>
              <p className="mt-3 text-sm text-slate-500">{item.attribution}</p>
            </div>
            <p className="rounded-xl border border-amber-500/20 bg-amber-500/10 p-4 text-sm font-bold text-amber-300">
              {item.metric}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};
