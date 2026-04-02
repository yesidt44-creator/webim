"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, type ReactNode } from "react";
import {
  ChevronDown,
  Wrench,
  ShieldCheck,
  Truck,
  PackageSearch,
  CircuitBoard,
  Menu,
  X,
} from "lucide-react";
import { ContactModal } from "./ContactModal";

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-slate-200 bg-white shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link
          href="/"
          className="relative flex min-w-0 shrink-0 items-center rounded-sm bg-white"
          aria-label="IMELECTRIC - Inicio"
          onClick={closeMobile}
        >
          <Image
            src="/imelectric-logo.png"
            alt="IMELECTRIC — Inteligencia en movimiento industrial"
            width={1024}
            height={553}
            className="h-[calc(7.125rem*0.75)] w-auto max-h-none object-contain object-left"
            priority
            unoptimized
          />
        </Link>

        <div className="hidden items-center gap-8 text-sm font-semibold text-blue-950 md:flex">
          <div className="group relative">
            <button
              type="button"
              className="flex items-center gap-1 py-8 transition-colors hover:text-blue-700"
            >
              Soluciones e Ingeniería <ChevronDown size={16} className="opacity-80" />
            </button>
            <div className="invisible absolute top-full left-1/2 mt-0 grid w-[800px] max-w-[calc(100vw-2rem)] -translate-x-1/2 grid-cols-2 gap-12 rounded-xl border border-slate-800 bg-slate-900 p-8 opacity-0 shadow-2xl transition-all group-hover:visible group-hover:opacity-100">
              <div>
                <h4 className="mb-4 border-b border-slate-800 pb-2 text-[10px] font-bold tracking-widest text-blue-400 uppercase">
                  Plataformas SaaS IA
                </h4>
                <div className="space-y-4">
                  <MenuLink
                    href="/fixai-cmms"
                    icon={<Wrench size={18} />}
                    title="FixAI CMMS"
                    desc="Mantenimiento ISO 14224"
                  />
                  <MenuLink
                    href="/safety-on"
                    icon={<ShieldCheck size={18} />}
                    title="Safety On"
                    desc="Blindaje Legal HSE"
                  />
                  <MenuLink
                    href="/nexvia"
                    icon={<Truck size={18} />}
                    title="Nexvia"
                    desc="Gestión de Flotas e ISO 9001"
                  />
                </div>
              </div>
              <div>
                <h4 className="mb-4 border-b border-slate-800 pb-2 text-[10px] font-bold tracking-widest text-emerald-400 uppercase">
                  Servicios de Respuesta Crítica
                </h4>
                <div className="space-y-4">
                  <MenuLink
                    href="/#servicios"
                    icon={<PackageSearch size={18} />}
                    title="Suministros Críticos"
                    desc="Localización global de repuestos"
                  />
                  <MenuLink
                    href="/#servicios"
                    icon={<CircuitBoard size={18} />}
                    title="Mantenimiento Electrónico"
                    desc="Reparación de activos complejos"
                  />
                </div>
              </div>
            </div>
          </div>

          <a href="/#nosotros" className="transition hover:text-blue-700">
            Sectores
          </a>
          <Link
            href="/academia"
            className="font-bold text-blue-400 underline decoration-2 underline-offset-4 transition hover:text-blue-600"
          >
            Academia Técnica
          </Link>
        </div>

        <div className="flex shrink-0 items-center gap-2 sm:gap-4">
          <button
            type="button"
            className="flex min-h-11 min-w-11 items-center justify-center rounded-lg text-blue-950 md:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-panel"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
          <a
            href="https://www.linkedin.com/company/imelectric/?viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-h-10 min-w-10 items-center justify-center rounded-full text-[#0A66C2] transition-colors hover:bg-blue-50 hover:text-[#004182] focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:outline-none sm:flex"
            aria-label="IMELECTRIC en LinkedIn (se abre en una pestaña nueva)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="currentColor"
              aria-hidden
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <ContactModal>
            <button
              type="button"
              className="rounded-full bg-blue-950 px-3 py-2 text-xs font-bold text-white shadow-md transition hover:bg-blue-900 sm:px-5 sm:text-sm"
            >
              Contactar
            </button>
          </ContactModal>
        </div>
      </div>

      {mobileOpen ? (
        <div
          id="mobile-nav-panel"
          className="fixed inset-0 top-20 z-40 flex flex-col overflow-y-auto border-t border-slate-200 bg-white px-4 pb-8 pt-4 shadow-lg md:hidden [-webkit-overflow-scrolling:touch]"
          role="navigation"
          aria-label="Menú principal"
        >
          <p className="mb-3 text-[10px] font-bold tracking-widest text-slate-400 uppercase">Plataformas SaaS IA</p>
          <ul className="space-y-1 border-b border-slate-100 pb-4">
            <MobileNavRow href="/fixai-cmms" onNavigate={closeMobile}>
              FixAI CMMS
            </MobileNavRow>
            <MobileNavRow href="/safety-on" onNavigate={closeMobile}>
              Safety On
            </MobileNavRow>
            <MobileNavRow href="/nexvia" onNavigate={closeMobile}>
              Nexvia
            </MobileNavRow>
          </ul>
          <p className="mb-3 mt-4 text-[10px] font-bold tracking-widest text-slate-400 uppercase">Servicios</p>
          <ul className="space-y-1 border-b border-slate-100 pb-4">
            <MobileNavRow href="/#servicios" onNavigate={closeMobile}>
              Suministros críticos
            </MobileNavRow>
            <MobileNavRow href="/#servicios" onNavigate={closeMobile}>
              Mantenimiento electrónico
            </MobileNavRow>
          </ul>
          <ul className="mt-4 space-y-2">
            <li>
              <a
                href="/#nosotros"
                className="block rounded-lg px-3 py-3 text-base font-semibold text-blue-950 hover:bg-slate-50"
                onClick={closeMobile}
              >
                Sectores
              </a>
            </li>
            <li>
              <Link
                href="/academia"
                className="block rounded-lg px-3 py-3 text-base font-bold text-blue-600 hover:bg-slate-50"
                onClick={closeMobile}
              >
                Academia Técnica
              </Link>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/imelectric/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg px-3 py-3 text-base font-semibold text-[#0A66C2] hover:bg-blue-50"
                onClick={closeMobile}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="currentColor" aria-hidden>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </nav>
  );
};

const MobileNavRow = ({
  href,
  children,
  onNavigate,
}: {
  href: string;
  children: ReactNode;
  onNavigate: () => void;
}) => (
  <li>
    <a
      href={href}
      className="block rounded-lg px-3 py-3 text-base font-medium text-blue-950 hover:bg-slate-50"
      onClick={onNavigate}
    >
      {children}
    </a>
  </li>
);

const MenuLink = ({ icon, title, desc, href }: { icon: ReactNode; title: string; desc: string; href: string }) => (
  <a href={href} className="group flex cursor-pointer gap-3 rounded-lg p-2 transition hover:bg-slate-800">
    <div className="text-slate-500 transition-colors group-hover:text-blue-500">{icon}</div>
    <div>
      <div className="text-sm font-bold text-white">{title}</div>
      <div className="text-[10px] font-bold tracking-tighter text-slate-500 uppercase">{desc}</div>
    </div>
  </a>
);
