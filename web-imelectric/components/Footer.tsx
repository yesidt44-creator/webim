import Link from "next/link";

const linkClass =
  "text-slate-400 transition-colors hover:text-blue-400 focus-visible:outline-none focus-visible:text-blue-400";

const LINKEDIN_URL = "https://www.linkedin.com/company/imelectric/?viewAsMember=true";

function LinkedInGlyph({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 pt-16 pb-8">
      <div className="mx-auto mb-12 max-w-7xl px-6">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-6">
          {/* Marca */}
          <div className="lg:col-span-2">
            <div className="mb-6 text-xl font-bold text-white">
              IMELECTRIC<span className="text-blue-500">.</span>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-slate-500">
              Ingeniería técnica y digital operando desde Yondó, Antioquia para toda la industria global.
            </p>
          </div>

          {/* Plataformas y servicios (inicio) */}
          <div>
            <h4 className="mb-6 text-sm font-bold tracking-wide text-white uppercase">Plataformas</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/#fixai" className={linkClass}>
                  FixAI CMMS
                </Link>
              </li>
              <li>
                <Link href="/#safety-on" className={linkClass}>
                  Safety On
                </Link>
              </li>
              <li>
                <Link href="/#nexvia" className={linkClass}>
                  Nexvia
                </Link>
              </li>
              <li>
                <Link href="/#servicios" className={linkClass}>
                  Servicios de respuesta crítica
                </Link>
              </li>
            </ul>
          </div>

          {/* Knowledge Hub / Academia */}
          <div>
            <h4 className="mb-6 text-sm font-bold tracking-wide text-white uppercase">Knowledge Hub</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/academia" className={`${linkClass} font-semibold text-slate-300`}>
                  Portada Academia
                </Link>
              </li>
              <li>
                <Link href="/academia#confiabilidad" className={linkClass}>
                  Confiabilidad & herramientas
                </Link>
              </li>
              <li>
                <Link href="/academia#sst" className={linkClass}>
                  SST, alturas & normativa
                </Link>
              </li>
              <li>
                <Link href="/#excelencia" className={linkClass}>
                  Fundamentos en inicio
                </Link>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="mb-6 text-sm font-bold tracking-wide text-white uppercase">Empresa</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/#nosotros" className={linkClass}>
                  Sectores industriales
                </Link>
              </li>
              <li>
                <Link href="/#productos" className={linkClass}>
                  Retos del sector
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto + WhatsApp */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="mb-6 text-sm font-bold tracking-wide text-white uppercase">Contacto</h4>
            <ul className="mb-6 space-y-3 text-sm text-slate-400">
              <li>
                <a href="mailto:contacto@imelectric.es" className={linkClass}>
                  contacto@imelectric.es
                </a>
              </li>
              <li>
                <a href="tel:+573026002877" className={`${linkClass} font-bold text-green-500 hover:text-green-400`}>
                  +57 302 600 2877
                </a>
              </li>
              <li>Yondó, Antioquia, CO</li>
              <li>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-semibold text-slate-400 transition-colors hover:text-[#0A66C2] focus-visible:text-[#0A66C2] focus-visible:outline-none"
                  aria-label="IMELECTRIC en LinkedIn (se abre en una pestaña nueva)"
                >
                  <LinkedInGlyph className="h-5 w-5 shrink-0 text-[#0A66C2]" />
                  LinkedIn
                </a>
              </li>
            </ul>
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 text-center">
              <p className="mb-3 text-xs font-bold tracking-wide text-slate-400 uppercase">Soporte inmediato</p>
              <a
                href="https://wa.me/573026002877"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full rounded-xl bg-green-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-green-700"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 border-t border-slate-900 px-6 pt-8 text-xs text-slate-600 md:flex-row">
        <p>© 2026 IMELECTRIC S.A.S. Todos los derechos reservados.</p>
        <div className="flex flex-wrap items-center gap-6">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-slate-600 transition-colors hover:text-[#0A66C2]"
            aria-label="LinkedIn IMELECTRIC"
          >
            <LinkedInGlyph className="h-4 w-4" />
            LinkedIn
          </a>
          <a href="#" className="transition-colors hover:text-slate-400">
            Política de Privacidad
          </a>
          <a href="#" className="transition-colors hover:text-slate-400">
            Términos de Servicio
          </a>
          <a href="#" className="transition-colors hover:text-slate-400">
            Cookies
          </a>
        </div>
      </div>
    </footer>
  );
};
