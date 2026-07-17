import { type Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Términos de Servicio | IMELECTRIC",
  description:
    "Términos y condiciones de uso del sitio web de IMELECTRIC S.A.S. y de sus plataformas de software industrial.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://imelectric.es/terminos" },
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-10">
    <h2 className="mb-4 text-xl font-bold text-white">{title}</h2>
    <div className="space-y-3 text-sm leading-relaxed text-slate-400">{children}</div>
  </section>
);

export default function TerminosPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-24">
      <div className="mx-auto max-w-3xl px-6">
        {/* Cabecera */}
        <div className="mb-12 border-b border-slate-800 pb-8">
          <p className="mb-2 text-xs font-bold tracking-widest text-blue-400 uppercase">Legal</p>
          <h1 className="mb-3 text-3xl font-extrabold text-white md:text-4xl">Términos de Servicio</h1>
          <p className="text-sm text-slate-500">
            IMELECTRIC S.A.S. · Última actualización: 16 de julio de 2026 · Vigentes desde: 16 de julio de 2026
          </p>
        </div>

        <Section title="1. Aceptación de los términos">
          <p>
            El acceso y uso de este sitio web (
            <strong className="text-slate-200">imelectric.es</strong>) implica la aceptación plena de los
            presentes Términos de Servicio. Si no está de acuerdo con alguno de estos términos, deberá
            abstenerse de usar el sitio.
          </p>
        </Section>

        <Section title="2. Identidad del prestador de servicios">
          <p>
            <strong className="text-slate-200">IMELECTRIC S.A.S.</strong>, sociedad por acciones simplificada,
            constituida bajo las leyes de la República de Colombia, con domicilio en Yondó, Antioquia.
          </p>
          <p>
            Correo de contacto:{" "}
            <a href="mailto:contacto@imelectric.es" className="text-blue-400 hover:underline">
              contacto@imelectric.es
            </a>
          </p>
        </Section>

        <Section title="3. Objeto del sitio web">
          <p>
            Este sitio web tiene por objeto presentar los productos y servicios de IMELECTRIC (Fix AI, Falion,
            Veriwork, Nexvia y Shield AI), ofrecer recursos técnicos educativos a través de la Academia, y
            facilitar el contacto entre potenciales clientes e IMELECTRIC.
          </p>
        </Section>

        <Section title="4. Propiedad intelectual">
          <p>
            Todos los contenidos del sitio (textos, imágenes, código, logos, estructura) son propiedad de
            IMELECTRIC S.A.S. o de sus licenciantes, y están protegidos por las leyes de propiedad intelectual
            colombianas e internacionales. Su reproducción, distribución o uso comercial no autorizado está
            prohibido.
          </p>
          <p>
            Los recursos técnicos de la Academia (calculadoras, herramientas interactivas, artículos) pueden ser
            usados libremente con fines educativos no comerciales, con atribución explícita a IMELECTRIC.
          </p>
        </Section>

        <Section title="5. Limitación de responsabilidad">
          <p>
            El sitio y su contenido educativo (Academia, calculadoras, artículos) se ofrecen con fines
            exclusivamente informativos. <strong className="text-slate-200">No constituyen asesoría de
            ingeniería ni jurídica</strong> para casos específicos. Las decisiones operativas, técnicas o de
            cumplimiento que el usuario tome con base en las herramientas o contenidos de este sitio son de su
            exclusiva responsabilidad.
          </p>
          <p>
            IMELECTRIC no garantiza que los contenidos estén permanentemente actualizados con las últimas
            versiones de las normas citadas. Los servicios y productos de software se rigen por los contratos
            que se suscriban individualmente entre IMELECTRIC y cada cliente.
          </p>
        </Section>

        <Section title="6. Uso aceptable">
          <p>Queda prohibido usar este sitio para:</p>
          <ul className="mt-2 list-inside list-disc space-y-1 pl-2">
            <li>Scraping masivo automatizado de contenidos.</li>
            <li>Intentos de acceso no autorizado a sistemas o APIs.</li>
            <li>Envío masivo de solicitudes a través del formulario de contacto (spam).</li>
            <li>Cualquier actividad que viole las leyes colombianas o internacionales aplicables.</li>
          </ul>
        </Section>

        <Section title="7. Software como Servicio (SaaS)">
          <p>
            Los términos específicos aplicables al uso de Fix AI, Falion, Veriwork, Nexvia y Shield AI como
            plataformas SaaS se rigen por los contratos separados que se suscriban entre IMELECTRIC y cada
            cliente.
          </p>
        </Section>

        <Section title="8. Datos personales">
          <p>
            El tratamiento de datos personales se rige por la{" "}
            <Link href="/privacidad" className="text-blue-400 hover:underline">
              Política de Tratamiento de Datos Personales
            </Link>{" "}
            de IMELECTRIC, conforme a la Ley 1581 de 2012.
          </p>
        </Section>

        <Section title="9. Ley aplicable y jurisdicción">
          <p>
            Estos Términos se rigen por las leyes de la República de Colombia. Cualquier controversia derivada
            del uso de este sitio se someterá a los jueces y tribunales competentes con domicilio en Yondó,
            Antioquia, Colombia.
          </p>
        </Section>

        <Section title="10. Modificaciones">
          <p>
            IMELECTRIC se reserva el derecho de modificar estos Términos. Las modificaciones entrarán en vigor
            desde su publicación en este sitio. El uso continuado del sitio tras la publicación implica la
            aceptación de los nuevos Términos.
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
              Política de Tratamiento de Datos
            </Link>
            <Link href="/cookies" className="hover:text-slate-400">
              Política de Cookies
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
