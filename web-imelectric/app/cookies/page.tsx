import { type Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Cookies | IMELECTRIC",
  description:
    "Información detallada sobre las cookies usadas en imelectric.es: qué se instala, con qué finalidad y cómo gestionarlas.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://imelectric.es/cookies" },
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-10">
    <h2 className="mb-4 text-xl font-bold text-white">{title}</h2>
    <div className="space-y-3 text-sm leading-relaxed text-slate-400">{children}</div>
  </section>
);

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-24">
      <div className="mx-auto max-w-3xl px-6">
        {/* Cabecera */}
        <div className="mb-12 border-b border-slate-800 pb-8">
          <p className="mb-2 text-xs font-bold tracking-widest text-blue-400 uppercase">Legal</p>
          <h1 className="mb-3 text-3xl font-extrabold text-white md:text-4xl">Política de Cookies</h1>
          <p className="text-sm text-slate-500">
            IMELECTRIC S.A.S. · Última actualización: julio 2026
          </p>
          <div className="mt-4 rounded-xl border border-blue-500/20 bg-blue-500/5 p-4 text-xs text-blue-300">
            Las cookies analíticas (Google Analytics y Microsoft Clarity) solo se activan si aceptas
            explícitamente a través del banner de consentimiento. Si rechazas, ninguna cookie de seguimiento
            se instala en tu navegador.
          </div>
        </div>

        <Section title="1. ¿Qué es una cookie?">
          <p>
            Una cookie es un pequeño fichero de texto que un sitio web almacena en tu navegador cuando lo
            visitas. Las cookies permiten que el sitio recuerde tus preferencias y analice cómo se usa para
            mejorarlo.
          </p>
        </Section>

        <Section title="2. Cookies que usa este sitio">
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-slate-800">
                  <th className="py-2 text-left font-bold text-slate-300">Nombre / proveedor</th>
                  <th className="py-2 text-left font-bold text-slate-300">Tipo</th>
                  <th className="py-2 text-left font-bold text-slate-300">Finalidad</th>
                  <th className="py-2 text-left font-bold text-slate-300">Duración</th>
                  <th className="py-2 text-left font-bold text-slate-300">Requiere consentimiento</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-900">
                <tr>
                  <td className="py-2 pr-4 text-slate-400">imelectric_cookie_consent</td>
                  <td className="py-2 pr-4 text-slate-400">Propia / Esencial</td>
                  <td className="py-2 pr-4 text-slate-400">
                    Guarda tu preferencia de consentimiento de cookies (aceptar / rechazar) para no volver a
                    preguntar.
                  </td>
                  <td className="py-2 pr-4 text-slate-400">Persistente (localStorage)</td>
                  <td className="py-2 text-emerald-400 font-semibold">No — esencial</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 text-slate-400">
                    Google Analytics 4<br />
                    <span className="text-slate-600">(_ga, _gid, _ga_*)</span>
                  </td>
                  <td className="py-2 pr-4 text-slate-400">Tercero / Analítica</td>
                  <td className="py-2 pr-4 text-slate-400">
                    Análisis de tráfico anónimo: páginas vistas, sesiones, fuentes de tráfico. IMELECTRIC no
                    envía nombre, correo ni empresa como parámetros de evento.
                  </td>
                  <td className="py-2 pr-4 text-slate-400">Hasta 2 años (_ga)</td>
                  <td className="py-2 text-amber-400 font-semibold">Sí — solo si aceptas</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 text-slate-400">
                    Microsoft Clarity<br />
                    <span className="text-slate-600">(_clck, _clsk, CLID)</span>
                  </td>
                  <td className="py-2 pr-4 text-slate-400">Tercero / Analítica</td>
                  <td className="py-2 pr-4 text-slate-400">
                    Mapas de calor y grabaciones de sesión anonimizadas para entender cómo se usa el sitio.
                    Clarity enmascara por defecto campos de formulario y datos sensibles.
                  </td>
                  <td className="py-2 pr-4 text-slate-400">Hasta 1 año</td>
                  <td className="py-2 text-amber-400 font-semibold">Sí — solo si aceptas</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Section>

        <Section title="3. Cookies esenciales vs. analíticas">
          <p>
            Solo la cookie de preferencia de consentimiento (
            <code className="rounded bg-slate-900 px-1 text-xs">imelectric_cookie_consent</code>) se instala
            sin necesidad de aprobación, porque es la que registra tu decisión. Todas las demás (GA4 y
            Clarity) son <strong className="text-slate-200">cookies analíticas opcionales</strong> y solo se
            activan si aceptas.
          </p>
          <p>
            Este sitio no usa cookies de publicidad, cookies de afiliados ni cookies de redes sociales.
          </p>
        </Section>

        <Section title="4. Cómo gestionar tus preferencias">
          <p>Tienes tres formas de controlar las cookies:</p>
          <ul className="mt-2 list-inside list-disc space-y-2 pl-2">
            <li>
              <strong className="text-slate-300">Banner de consentimiento:</strong> al visitar el sitio por
              primera vez aparece el banner. Puedes aceptar o rechazar.
            </li>
            <li>
              <strong className="text-slate-300">Cambiar tu preferencia:</strong> borra el ítem{" "}
              <code className="rounded bg-slate-900 px-1 text-xs">imelectric_cookie_consent</code> de
              localStorage en las herramientas de desarrollador de tu navegador y recarga la página para que
              aparezca el banner de nuevo.
            </li>
            <li>
              <strong className="text-slate-300">Configuración del navegador:</strong> puedes bloquear o
              eliminar cookies directamente desde tu navegador. Ten en cuenta que esto puede afectar la
              funcionalidad de otros sitios web.
            </li>
          </ul>
        </Section>

        <Section title="5. Transferencia de datos a terceros">
          <p>
            Google Analytics y Microsoft Clarity procesan datos en servidores ubicados fuera de Colombia
            (principalmente Estados Unidos). Ambos proveedores ofrecen mecanismos de adecuación conforme a
            marcos internacionales de protección de datos. Más información:{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Política de privacidad de Google
            </a>{" "}
            y{" "}
            <a
              href="https://privacy.microsoft.com/en-us/privacystatement"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Política de privacidad de Microsoft
            </a>
            .
          </p>
        </Section>

        <Section title="6. Actualizaciones">
          <p>
            Esta política puede actualizarse cuando cambiemos las herramientas analíticas usadas o las
            finalidades del tratamiento. La fecha de última actualización siempre aparece en la cabecera.
          </p>
        </Section>

        <div className="mt-12 border-t border-slate-800 pt-8 text-xs text-slate-600">
          <p>
            Última actualización: 16 de julio de 2026. Este documento puede ser actualizado; la versión vigente
            es la publicada en esta página.
          </p>
          <p className="mt-2">IMELECTRIC S.A.S. · Yondó, Antioquia, Colombia · contacto@imelectric.es</p>
          <div className="mt-3 flex flex-wrap gap-4">
            <Link href="/privacidad" className="hover:text-slate-400">
              Política de Privacidad
            </Link>
            <Link href="/terminos" className="hover:text-slate-400">
              Términos de Servicio
            </Link>
            <Link href="/" className="hover:text-slate-400">
              Inicio
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
