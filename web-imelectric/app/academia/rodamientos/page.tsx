import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BearingAcademy } from "@/components/BearingAcademy";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://imelectric.es/academia/rodamientos",
  },
  title: "Rodamientos Industriales — Nomenclatura, Medición e Inspección | IMELECTRIC Academia",
  description:
    "Guía técnica completa de rodamientos industriales: decodificador de nomenclatura ISO, buscador de referencias cruzadas SKF/FAG/NSK/Timken, guía de medición con calibrador, checklist de inspección visual y modos de falla según ISO 15243. Herramienta gratuita para técnicos e ingenieros de mantenimiento.",
  keywords: [
    "rodamientos industriales",
    "nomenclatura rodamientos ISO",
    "referencia cruzada rodamientos SKF FAG NSK",
    "rodamiento 6205 equivalencias",
    "modos de falla rodamientos ISO 15243",
    "inspección visual rodamientos",
    "cómo medir un rodamiento calibrador",
    "DGBB ACBB SRB CRB TRB rodamientos",
    "rodamientos confiabilidad industrial",
    "vida útil rodamiento cálculo L10",
    "brinelling spalling fluting rodamientos",
    "rodamientos Colombia mantenimiento industrial",
    "checklist inspección rodamientos",
    "sufijos rodamientos 2RS ZZ C3 C4",
    "decodificador referencia rodamiento",
    "rodamientos SKF NSK FAG NTN Timken Koyo Nachi",
    "rodamientos para motores eléctricos",
    "rodamientos minería Colombia",
    "confiabilidad de rodamientos",
    "academia ingeniería mantenimiento",
  ],
  openGraph: {
    title: "Rodamientos Industriales — Guía Técnica Completa | IMELECTRIC",
    description:
      "Decodificador de nomenclatura, referencia cruzada entre fabricantes, checklist de inspección y modos de falla ISO 15243. Para técnicos e ingenieros.",
    url: "https://imelectric.es/academia/rodamientos",
    type: "website",
  },
};

export default function RodamientosPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      {/* Hero */}
      <section className="border-b border-slate-800 bg-slate-950 px-6 pt-36 pb-14">
        <div className="mx-auto max-w-4xl">
          <nav className="mb-6 flex items-center gap-2 text-xs text-slate-500" aria-label="Breadcrumb">
            <a href="/" className="transition hover:text-slate-300">Inicio</a>
            <span>/</span>
            <a href="/academia" className="transition hover:text-slate-300">Academia</a>
            <span>/</span>
            <span className="text-slate-400">Rodamientos</span>
          </nav>

          <div className="mb-3 text-xs font-bold tracking-widest text-blue-500 uppercase">
            Academia Técnica IMELECTRIC
          </div>

          <h1 className="mb-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
            Rodamientos Industriales
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-slate-400">
            Nomenclatura, medición, inspección, modos de falla y referencia cruzada entre fabricantes
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {["ISO 15243","ISO 492","SKF · FAG · NSK · NTN · Timken","L10 · Cr · C0r","DGBB · ACBB · SRB · CRB · TRB"].map(tag=>(
              <span key={tag} className="rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-xs text-slate-400">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Tool */}
      <section className="px-6 py-10">
        <div className="mx-auto max-w-4xl">
          <BearingAcademy />
        </div>
      </section>

      {/* SEO content */}
      <section className="border-t border-slate-800 bg-slate-900/30 px-6 py-14">
        <div className="mx-auto max-w-4xl space-y-10">
          <article>
            <h2 className="mb-4 text-xl font-bold text-white">
              ¿Para qué sirve esta herramienta de rodamientos?
            </h2>
            <p className="leading-relaxed text-slate-400">
              Esta guía interactiva está diseñada para técnicos de mantenimiento e ingenieros de confiabilidad
              que necesitan consultar información técnica de rodamientos de forma rápida y precisa. Puedes
              buscar cualquier rodamiento por su referencia (6205, NU207, 22208…) o por sus dimensiones (d × D × B),
              consultar su equivalencia entre fabricantes como SKF, FAG, NSK, NTN, Timken, Koyo y Nachi,
              y obtener sus parámetros de capacidad de carga dinámica (Cr) y estática (C0r).
            </p>
          </article>

          <article>
            <h2 className="mb-4 text-xl font-bold text-white">
              Decodificador de nomenclatura según ISO 15
            </h2>
            <p className="mb-3 leading-relaxed text-slate-400">
              El sistema de designación de rodamientos sigue la norma ISO 15. Un número como{" "}
              <strong className="font-mono text-slate-200">6205-2RS/C3</strong> contiene información completa
              sobre el tipo de rodamiento, la serie dimensional, el diámetro del agujero y los sufijos que
              definen sellado, juego interno y tolerancias. El decodificador desglosa cada parte para que
              puedas entender qué especifica cada dígito.
            </p>
            <ul className="space-y-2 text-sm leading-relaxed text-slate-400">
              <li>· El primer dígito (<strong className="text-slate-300">6</strong>) indica rodamiento de bolas de ranura profunda (DGBB).</li>
              <li>· El segundo dígito (<strong className="text-slate-300">2</strong>) define la serie de diámetro: ligera.</li>
              <li>· Los últimos dos dígitos (<strong className="text-slate-300">05</strong>) dan el código de agujero: 05 × 5 = 25 mm de diámetro interior.</li>
              <li>· El sufijo <strong className="text-slate-300">2RS</strong> indica doble sello de caucho. <strong className="text-slate-300">C3</strong> indica juego radial mayor al normal.</li>
            </ul>
          </article>

          <article>
            <h2 className="mb-4 text-xl font-bold text-white">
              Modos de falla de rodamientos según ISO 15243
            </h2>
            <p className="leading-relaxed text-slate-400">
              La norma ISO 15243 clasifica los daños en rodamientos en seis categorías principales: fatiga por
              contacto rodante (spalling, micropitting), desgaste (abrasivo y adhesivo/smearing), corrosión
              (por humedad y fretting), erosión eléctrica (fluting por corrientes parásitas de variadores VFD),
              deformación plástica (brinelling) y fractura. El inspector visual incluye para cada modo de falla
              su aspecto visual característico, causas raíz, indicadores observables y la acción correctiva recomendada.
            </p>
          </article>

          <article>
            <h2 className="mb-4 text-xl font-bold text-white">
              Cómo medir un rodamiento con calibrador Vernier
            </h2>
            <p className="leading-relaxed text-slate-400">
              La guía paso a paso explica cómo medir correctamente el diámetro exterior (D), el diámetro
              interior (d) y la anchura (B) de un rodamiento usando un calibrador Vernier o pie de rey.
              Incluye consejos sobre temperatura de medición, número de puntos de medición para detectar
              ovalización, y cómo verificar el juego radial. El simulador interactivo del calibrador Vernier
              te permite practicar la lectura de las escalas principal y Vernier.
            </p>
          </article>

          <article>
            <h2 className="mb-4 text-xl font-bold text-white">
              Comparativa de fabricantes: SKF, FAG, NSK, NTN, Timken, Koyo, Nachi
            </h2>
            <p className="leading-relaxed text-slate-400">
              Cada fabricante de rodamientos tiene fortalezas específicas. SKF (Suecia, 1907) es el mayor
              fabricante mundial con su reconocida serie Explorer. FAG/Schaeffler (Alemania, 1883) es referente
              en precisión para máquinas-herramienta y turbinas eólicas. NSK (Japón, 1916) sobresale en
              aceros de ultra-larga vida. Timken (EE.UU., 1899) es autoridad mundial en rodamientos cónicos
              para minería y ferrocarril. La referencia cruzada de esta herramienta te permite identificar el
              equivalente en cualquier marca cuando necesites sustituir o cotizar.
            </p>
          </article>
        </div>
      </section>

      {/* Links to other tools */}
      <section className="border-t border-slate-800 px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <h3 className="mb-6 text-center text-sm font-bold tracking-widest text-slate-500 uppercase">
            Más herramientas de la Academia IMELECTRIC
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { href:"/academia/calculadora-mtbf",  label:"Calculadora MTBF / MTTR" },
              { href:"/academia/fmeca",              label:"Matriz FMECA" },
              { href:"/academia/ishikawa",           label:"Diagrama Ishikawa" },
              { href:"/academia/trabajo-en-alturas", label:"Trabajo en Alturas Res. 4272" },
              { href:"/academia",                    label:"← Volver a la Academia" },
            ].map(l=>(
              <a key={l.href} href={l.href}
                className="rounded-full border border-slate-800 bg-slate-900 px-4 py-2 text-sm text-slate-400 transition hover:border-blue-500/40 hover:text-blue-400">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
