import { type Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad y Tratamiento de Datos Personales | IMELECTRIC",
  description:
    "Política de privacidad y tratamiento de datos personales de IMELECTRIC S.A.S., conforme a la Ley 1581 de 2012 y el Decreto 1074 de 2015.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://imelectric.es/privacidad" },
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-10">
    <h2 className="mb-4 text-xl font-bold text-white">{title}</h2>
    <div className="space-y-3 text-sm leading-relaxed text-slate-400">{children}</div>
  </section>
);

const Placeholder = ({ label }: { label: string }) => (
  <span className="rounded bg-amber-500/15 px-2 py-0.5 text-xs font-mono text-amber-400">
    {/* TODO: texto legal a validar con abogado — {label} */}
    [PENDIENTE REVISIÓN LEGAL: {label}]
  </span>
);

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-24">
      <div className="mx-auto max-w-3xl px-6">
        {/* Cabecera */}
        <div className="mb-12 border-b border-slate-800 pb-8">
          <p className="mb-2 text-xs font-bold tracking-widest text-blue-400 uppercase">Legal</p>
          <h1 className="mb-3 text-3xl font-extrabold text-white md:text-4xl">
            Política de Privacidad y Tratamiento de Datos Personales
          </h1>
          <p className="text-sm text-slate-500">
            Responsable: IMELECTRIC S.A.S. · Última actualización: julio 2026 · Vigente desde: julio 2026
          </p>
          <div className="mt-4 rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-xs text-amber-300">
            <strong>Nota interna (no publicar aún):</strong> Las secciones 1–7 y 9–11 están confirmadas.
            Quedan 3 puntos pendientes de revisión legal antes de publicar en producción: (5) transferencias
            internacionales de datos — hay desarrollo normativo reciente (Circular SIC 003 de 2025), (6)
            limitación de responsabilidad, y (7) jurisdicción y ley aplicable.
          </div>
        </div>

        <Section title="1. Identidad y domicilio del Responsable del Tratamiento">
          <p>
            <strong className="text-slate-200">IMELECTRIC S.A.S.</strong>, sociedad por acciones simplificada
            constituida conforme a las leyes de la República de Colombia.
          </p>
          <p>
            <strong className="text-slate-200">NIT:</strong> 900.809.312-1
          </p>
          <p>
            <strong className="text-slate-200">Domicilio principal:</strong> Yondó, Antioquia, Colombia.
          </p>
          <p>
            <strong className="text-slate-200">Correo de Habeas Data:</strong>{" "}
            <a href="mailto:contacto@imelectric.es" className="text-blue-400 hover:underline">
              contacto@imelectric.es
            </a>
          </p>
        </Section>

        <Section title="2. Marco legal aplicable">
          <p>
            Este aviso de privacidad se expide en cumplimiento de la{" "}
            <strong className="text-slate-200">Ley Estatutaria 1581 de 2012</strong> (Protección de Datos
            Personales), el <strong className="text-slate-200">Decreto Único Reglamentario 1074 de 2015</strong>{" "}
            (Título 2, Capítulo 25), las instrucciones de la{" "}
            <strong className="text-slate-200">Superintendencia de Industria y Comercio (SIC)</strong> y las
            políticas de IMELECTRIC S.A.S.
          </p>
        </Section>

        <Section title="3. Datos personales que se recopilan">
          <p>IMELECTRIC recopila los siguientes datos personales a través de este sitio web:</p>
          <ul className="mt-2 list-inside list-disc space-y-1 pl-2">
            <li>
              <strong className="text-slate-300">Nombre completo</strong> — a través del formulario de contacto y
              del formulario de descarga de documentos normativos.
            </li>
            <li>
              <strong className="text-slate-300">Correo electrónico corporativo</strong> — mismo origen.
            </li>
            <li>
              <strong className="text-slate-300">Nombre de empresa / organización</strong> — mismo origen.
            </li>
            <li>
              <strong className="text-slate-300">Datos de navegación (cookies analíticas)</strong> — solo si el
              usuario otorga consentimiento explícito. Ver{" "}
              <Link href="/cookies" className="text-blue-400 hover:underline">
                Política de Cookies
              </Link>
              .
            </li>
          </ul>
          <p className="mt-3">
            IMELECTRIC <strong className="text-slate-200">no recopila</strong> datos sensibles (salud,
            orientación sexual, origen racial, creencias religiosas, datos biométricos) a través de este sitio.
          </p>
        </Section>

        <Section title="4. Finalidades del tratamiento">
          <p>
            Los datos personales recolectados a través de los formularios de este sitio (formulario de contacto
            y descarga de biblioteca normativa) se utilizan exclusivamente para: (i) responder a la solicitud
            del titular, (ii) dar seguimiento comercial a dicha solicitud (por ejemplo, agendar una demostración
            de producto), y (iii), en el caso de la descarga de documentos normativos, notificar sobre
            actualizaciones del documento descargado si el titular lo autoriza expresamente. IMELECTRIC S.A.S.
            no realiza perfilamiento automatizado de estos datos ni los comparte con terceros para fines de
            mercadeo directo ajenos a la solicitud del titular.
          </p>
          <p>
            El análisis de uso del sitio web (GA4 y Microsoft Clarity) solo se realiza con consentimiento previo
            y explícito del titular, a través del banner de cookies. Ver{" "}
            <Link href="/cookies" className="text-blue-400 hover:underline">
              Política de Cookies
            </Link>
            .
          </p>
        </Section>

        <Section title="5. Base legal del tratamiento">
          <p>
            El tratamiento de los datos personales suministrados a través de los formularios de este sitio web se
            realiza con base en el{" "}
            <strong className="text-slate-200">consentimiento libre, previo y expreso del titular</strong>,
            manifestado al enviar el formulario correspondiente. El usuario puede retirar su consentimiento en
            cualquier momento mediante el procedimiento descrito en la sección 7 de este documento.
          </p>
          <p>
            <Placeholder label="Verificar con abogado si aplican otras bases legales (ej. cumplimiento de obligación legal, interés legítimo)" />
          </p>
        </Section>

        <Section title="6. Tiempo de retención">
          <p>
            Los datos de contacto (nombre, empresa, correo) recolectados a través de los formularios de este
            sitio se conservan por un máximo de{" "}
            <strong className="text-slate-200">2 años</strong> contados desde el último contacto comercial, o
            hasta que el titular solicite su eliminación, lo que ocurra primero.
          </p>
          <p>
            Los datos de navegación asociados a cookies analíticas se conservan conforme a los períodos
            declarados por cada proveedor (GA4: hasta 2 años para la cookie <code className="rounded bg-slate-900 px-1 text-xs">_ga</code>;
            Clarity: hasta 1 año). Ver{" "}
            <Link href="/cookies" className="text-blue-400 hover:underline">
              Política de Cookies
            </Link>
            .
          </p>
        </Section>

        <Section title="7. Derechos del Titular (Habeas Data — Ley 1581 de 2012)">
          <p>
            En virtud de la Ley 1581 de 2012, usted tiene derecho a:
          </p>
          <ul className="mt-2 list-inside list-disc space-y-1 pl-2">
            <li>
              <strong className="text-slate-300">Conocer</strong> los datos personales que IMELECTRIC conserva
              sobre usted.
            </li>
            <li>
              <strong className="text-slate-300">Actualizar y rectificar</strong> los datos cuando sean
              inexactos, incompletos o desactualizados.
            </li>
            <li>
              <strong className="text-slate-300">Suprimir</strong> sus datos cuando no sean necesarios para la
              finalidad declarada, cuando haya caducado el período de retención, o cuando revoque su
              consentimiento.
            </li>
            <li>
              <strong className="text-slate-300">Revocar el consentimiento</strong> otorgado para el
              tratamiento.
            </li>
            <li>
              <strong className="text-slate-300">Presentar quejas</strong> ante la Superintendencia de Industria
              y Comercio cuando considere que sus derechos han sido vulnerados.
            </li>
          </ul>
          <p className="mt-3">
            Para ejercer estos derechos, envíe su solicitud a{" "}
            <a href="mailto:privacidad@imelectric.es" className="text-blue-400 hover:underline">
              privacidad@imelectric.es
            </a>
            . IMELECTRIC responderá en los plazos establecidos por la ley (máximo 15 días hábiles para consultas
            y 15 días hábiles para reclamos, prorrogables).
          </p>
        </Section>

        <Section title="8. Transferencias internacionales de datos">
          <p>
            <Placeholder label="Declarar si se realizan transferencias o transmisiones internacionales de datos — en particular a Resend (EE.UU.), Google (GA4, EE.UU.), Microsoft (Clarity, EE.UU.) y cualquier otro proveedor cloud — y la base legal para cada una (ej. cláusulas contractuales tipo, adecuación, consentimiento)" />
          </p>
        </Section>

        <Section title="9. Uso de cookies y tecnologías de seguimiento">
          <p>
            Ver la{" "}
            <Link href="/cookies" className="text-blue-400 hover:underline">
              Política de Cookies
            </Link>{" "}
            para información detallada sobre qué cookies se usan, con qué finalidad y cómo gestionarlas.
          </p>
        </Section>

        <Section title="10. Cambios en esta política">
          <p>
            IMELECTRIC se reserva el derecho de modificar esta política. Las modificaciones sustanciales serán
            notificadas a través del sitio web con al menos 10 días de anticipación a su entrada en vigor.
          </p>
        </Section>

        <Section title="11. Autoridad de control">
          <p>
            Si considera que IMELECTRIC ha vulnerado sus derechos de protección de datos, puede presentar
            denuncia ante la{" "}
            <strong className="text-slate-200">
              Superintendencia de Industria y Comercio (SIC) de Colombia
            </strong>
            , a través de{" "}
            <a
              href="https://www.sic.gov.co"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              www.sic.gov.co
            </a>
            .
          </p>
        </Section>

        <div className="mt-12 border-t border-slate-800 pt-8 text-xs text-slate-600">
          <p>IMELECTRIC S.A.S. · Yondó, Antioquia, Colombia · hola@imelectric.es</p>
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
