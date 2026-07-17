import { type Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de datos personales | IMELECTRIC",
  description:
    "Política de tratamiento de datos personales de IMELECTRIC S.A.S., conforme a la Ley 1581 de 2012 y el Decreto 1377 de 2013.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://imelectric.es/privacidad" },
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-10">
    <h2 className="mb-4 text-xl font-bold text-white">{title}</h2>
    <div className="space-y-3 text-sm leading-relaxed text-slate-400">{children}</div>
  </section>
);

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-24">
      <div className="mx-auto max-w-3xl px-6">
        {/* Cabecera */}
        <div className="mb-12 border-b border-slate-800 pb-8">
          <p className="mb-2 text-xs font-bold tracking-widest text-blue-400 uppercase">Legal</p>
          <h1 className="mb-3 text-3xl font-extrabold text-white md:text-4xl">
            Política de Tratamiento de Datos Personales
          </h1>
          <p className="text-sm text-slate-500">
            Responsable: IMELECTRIC S.A.S. · Última actualización: 16 de julio de 2026 · Vigente desde: 16 de julio de 2026
          </p>
        </div>

        <Section title="1. Responsable del tratamiento">
          <p>
            <strong className="text-slate-200">IMELECTRIC S.A.S.</strong>, sociedad por acciones simplificada
            constituida conforme a las leyes de la República de Colombia.
          </p>
          <p>
            <strong className="text-slate-200">NIT:</strong> 900.809.312-1
          </p>
          <p>
            <strong className="text-slate-200">Domicilio:</strong> Yondó, Antioquia, Colombia.
          </p>
          <p>
            <strong className="text-slate-200">Canal de atención Habeas Data:</strong>{" "}
            <a href="mailto:contacto@imelectric.es" className="text-blue-400 hover:underline">
              contacto@imelectric.es
            </a>{" "}
            ·{" "}
            <a href="tel:+573026002877" className="text-blue-400 hover:underline">
              +57 302 600 2877
            </a>
          </p>
        </Section>

        <Section title="2. Datos personales que se recolectan">
          <p>
            IMELECTRIC recolecta únicamente <strong className="text-slate-200">datos de contacto</strong>{" "}
            —nombre, correo electrónico y, de forma opcional, empresa— suministrados voluntariamente por el
            titular en los formularios de este sitio (formulario de contacto y suscripción a actualizaciones de
            documentos normativos).
          </p>
          <p>
            IMELECTRIC <strong className="text-slate-200">no recolecta</strong> datos sensibles (salud,
            orientación sexual, origen racial, creencias religiosas, datos biométricos) a través de este sitio.
            Los datos de navegación asociados a cookies analíticas se tratan únicamente con consentimiento
            previo y explícito; ver{" "}
            <Link href="/cookies" className="text-blue-400 hover:underline">
              Política de Cookies
            </Link>
            .
          </p>
        </Section>

        <Section title="3. Finalidades del tratamiento">
          <p>
            Los datos personales recolectados a través de los formularios de este sitio se utilizan
            exclusivamente para: (i) responder a la solicitud del titular, (ii) dar seguimiento comercial a
            dicha solicitud (por ejemplo, agendar una demostración de producto), y (iii), en el caso de la
            descarga de documentos normativos, notificar sobre actualizaciones del documento descargado solo si
            el titular lo autoriza expresamente.
          </p>
          <p>
            IMELECTRIC S.A.S. <strong className="text-slate-200">no realiza perfilamiento automatizado</strong>{" "}
            de estos datos ni los cede a terceros para fines de mercadeo directo ajenos a la solicitud del
            titular.
          </p>
        </Section>

        <Section title="4. Autorización del titular">
          <p>
            La autorización para el tratamiento se obtiene mediante una{" "}
            <strong className="text-slate-200">casilla de aceptación expresa</strong> en cada formulario, sin
            marcar por defecto. El envío del formulario solo es posible una vez el titular marca dicha casilla.
          </p>
          <p>
            IMELECTRIC conserva prueba de la autorización otorgada, incluyendo la fecha, hora y formulario de
            origen, conforme al artículo 9 de la Ley 1581 de 2012.
          </p>
        </Section>

        <Section title="5. Derechos del titular (Art. 8, Ley 1581 de 2012)">
          <p>En su condición de titular de los datos, usted tiene derecho a:</p>
          <ul className="mt-2 list-inside list-disc space-y-1 pl-2">
            <li>
              <strong className="text-slate-300">Conocer, actualizar y rectificar</strong> sus datos personales.
            </li>
            <li>
              <strong className="text-slate-300">Solicitar prueba</strong> de la autorización otorgada.
            </li>
            <li>
              <strong className="text-slate-300">Revocar la autorización</strong> y/o solicitar la supresión de
              sus datos cuando no exista un deber legal o contractual de conservarlos.
            </li>
            <li>
              <strong className="text-slate-300">Presentar quejas</strong> ante la Superintendencia de Industria
              y Comercio (SIC) por infracciones a la Ley 1581 de 2012.
            </li>
          </ul>
          <p className="mt-3">
            Para ejercer estos derechos, escriba a{" "}
            <a href="mailto:contacto@imelectric.es" className="text-blue-400 hover:underline">
              contacto@imelectric.es
            </a>
            . IMELECTRIC responderá las consultas en un máximo de{" "}
            <strong className="text-slate-200">10 días hábiles</strong> y los reclamos en un máximo de{" "}
            <strong className="text-slate-200">15 días hábiles</strong>, conforme a los términos de la Ley 1581
            de 2012.
          </p>
        </Section>

        <Section title="6. Tiempo de retención">
          <p>
            Los datos de contacto se conservan por un máximo de{" "}
            <strong className="text-slate-200">2 años</strong> contados desde el último contacto comercial, o
            hasta que el titular solicite su supresión, lo que ocurra primero.
          </p>
        </Section>

        <Section title="7. Transferencias internacionales">
          <p>
            Para la operación de este sitio, los datos pueden ser tratados por proveedores tecnológicos ubicados
            en Estados Unidos (servicio de correo transaccional y, previo consentimiento, herramientas de
            analítica), país que cuenta con un nivel adecuado de protección de datos conforme a los estándares
            de la Superintendencia de Industria y Comercio. Estos proveedores actúan como encargados del
            tratamiento y no usan los datos para fines propios.
          </p>
        </Section>

        <Section title="8. Marco normativo">
          <p>
            Esta política se expide en cumplimiento de la{" "}
            <strong className="text-slate-200">Ley 1581 de 2012</strong>, el{" "}
            <strong className="text-slate-200">Decreto 1377 de 2013</strong> y demás normas concordantes en
            materia de protección de datos personales en Colombia.
          </p>
        </Section>

        <Section title="9. Vigencia y actualización">
          <p>
            La presente política rige desde su fecha de publicación. IMELECTRIC podrá actualizarla; la versión
            vigente será siempre la publicada en esta página.
          </p>
        </Section>

        <div className="mt-12 border-t border-slate-800 pt-8 text-xs text-slate-600">
          <p>
            Última actualización: 16 de julio de 2026. Este documento puede ser actualizado; la versión vigente
            es la publicada en esta página.
          </p>
          <p className="mt-2">IMELECTRIC S.A.S. · Yondó, Antioquia, Colombia · contacto@imelectric.es</p>
          <div className="mt-3 flex flex-wrap gap-4">
            <Link href="/terminos" className="hover:text-slate-400">
              Términos de Servicio
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
