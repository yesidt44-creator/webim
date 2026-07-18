"use client";

import {
  Check,
  ClipboardCheck,
  FileCheck2,
  Link2,
  Radio,
  Shield,
  TimerReset,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";

type ProductCardProps = {
  className: string;
  headerGradient: string;
  icon: ReactNode;
  name: string;
  description: string;
  secondaryDescription?: string;
  iconGradient: string;
  iconColor: string;
  shadow: string;
  hoverShadow: string;
  rotation: number;
  href: string;
};

const MotionLink = motion.create(Link);

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: (rotation: number) => ({ opacity: 0, y: 16, rotate: rotation * 0.35 }),
  show: (rotation: number) => ({
    opacity: 1,
    y: 0,
    rotate: rotation,
    transition: { duration: 0.4 },
  }),
};

const ProductCard = ({
  className,
  headerGradient,
  icon,
  name,
  description,
  secondaryDescription,
  iconGradient,
  iconColor,
  shadow,
  hoverShadow,
  rotation,
  href,
}: ProductCardProps) => (
  <MotionLink
    href={href}
    variants={cardVariants}
    custom={rotation}
    whileHover={{
      y: -6,
      rotate: 0,
      boxShadow: hoverShadow,
      transition: { duration: 0.25, ease: "easeOut" },
    }}
    aria-label={`Conocer ${name}: ${description}`}
    className={`absolute overflow-hidden rounded-[clamp(0.55rem,1.4vw,1rem)] border border-white/25 bg-slate-50 hover:z-40 focus-visible:z-40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 ${className}`}
    style={{ boxShadow: shadow }}
  >
    <div
      className="flex h-[29%] items-center justify-center px-2 text-xs font-extrabold tracking-tight text-white sm:px-3 sm:text-sm"
      style={{ background: headerGradient }}
    >
      {name}
    </div>
    <div className="flex h-[71%] items-center px-2 sm:gap-[clamp(0.45rem,1.4vw,1rem)] sm:px-[clamp(0.55rem,1.8vw,1.25rem)]">
      <span
        className="hidden shrink-0 items-center justify-center rounded-xl ring-1 ring-white/60 shadow-inner sm:flex sm:size-10 lg:size-12"
        style={{ background: iconGradient, color: iconColor }}
        aria-hidden="true"
      >
        {icon}
      </span>
      <p className="min-w-0 text-xs leading-tight break-words text-slate-900">
        <strong className="font-extrabold">{description}</strong>
        {secondaryDescription ? (
          <span className="mt-[0.22em] block font-medium text-slate-700">
            {secondaryDescription}
          </span>
        ) : null}
      </p>
    </div>
  </MotionLink>
);

const BlueprintPattern = () => (
  <svg
    aria-hidden="true"
    className="absolute inset-[6%] h-[80%] w-[88%] text-cyan-300"
    viewBox="0 0 900 540"
    fill="none"
  >
    <g opacity="0.12" stroke="currentColor" strokeWidth="1.4">
      <path d="M35 80H865V470H35zM70 115H830V435H70z" />
      <path d="M115 435V240h95v195M690 435V200h110v235M250 435V145h150v290M490 435V110h145v325" />
      <path d="M35 350h830M35 285h830M35 220h830M35 155h830" />
      <path d="M115 240l48-58 47 58M690 200l55-70 55 70M490 110l72-48 73 48" />
      <circle cx="325" cy="350" r="34" />
      <circle cx="562" cy="285" r="42" />
      <path d="M291 350h-42v85M359 350h52v85M520 285h-65v150M604 285h54v150" />
      <path strokeDasharray="7 9" d="M25 52h850M25 492h850M12 105v330M888 105v330" />
    </g>
  </svg>
);

const WorkerIcon = () => (
  <svg
    aria-hidden="true"
    className="size-[70%]"
    viewBox="0 0 48 48"
    fill="currentColor"
    fillOpacity="0.16"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2.4"
  >
    <path d="M14 20v-2a10 10 0 0 1 20 0v2M11 20h26" />
    <path d="M20 9v7M28 9v7M16 22c.6 6 3.4 10 8 10s7.4-4 8-10" />
    <path d="M17 32 9 36v7h30v-7l-8-4M19 34l5 5 5-5M24 39v4" />
  </svg>
);

export const ProductEcosystemVisual = () => (
  <motion.figure
    variants={containerVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    aria-label="Ecosistema de productos y servicios de IMELECTRIC"
    className="relative aspect-[3/4] min-w-0 overflow-hidden rounded-[clamp(1rem,3vw,2rem)] border border-white/10 bg-[#0b0e10] shadow-[0_35px_90px_rgba(0,0,0,0.55)] sm:aspect-[4/3]"
    style={{ width: "min(100%, 920px)" }}
  >
    <div
      aria-hidden="true"
      className="absolute inset-[8%] rounded-full bg-[radial-gradient(circle,rgba(20,184,166,0.22)_0%,rgba(37,99,235,0.16)_36%,transparent_72%)] blur-2xl"
    />
    <BlueprintPattern />

    <div aria-hidden="true" className="absolute inset-0">
      <svg className="h-full w-full" viewBox="0 0 1000 688" fill="none">
        <g stroke="url(#connector-gradient)" strokeWidth="3" opacity="0.42">
          <path d="M500 270 310 215M500 270l190-55M500 270 290 365M500 270l210 95M500 270v285" />
        </g>
        <defs>
          <linearGradient id="connector-gradient" x1="250" y1="180" x2="750" y2="560">
            <stop stopColor="#38BDF8" />
            <stop offset="0.55" stopColor="#2DD4BF" />
            <stop offset="1" stopColor="#F59E0B" />
          </linearGradient>
        </defs>
      </svg>
    </div>

    <ProductCard
      className="top-[7%] left-[3%] z-20 h-[26%] w-[44%] sm:top-[7%] sm:left-[9%] sm:h-[27%] sm:w-[38%]"
      headerGradient="linear-gradient(135deg, #2563EB, #1E3A8A)"
      icon={
        <TimerReset
          className="size-[66%] drop-shadow-sm"
          fill="currentColor"
          fillOpacity={0.22}
          strokeWidth={2.2}
        />
      }
      iconGradient="linear-gradient(135deg, #2563EB20, #1E3A8A40)"
      iconColor="#1E3A8A"
      shadow="0 20px 40px -15px rgba(37, 99, 235, 0.35)"
      hoverShadow="0 30px 50px -15px rgba(37, 99, 235, 0.5)"
      rotation={-2}
      name="Fix AI"
      description="Reporte en Minutos"
      secondaryDescription="Cumplimiento y Trazabilidad Total"
      href="/fixai-cmms"
    />
    <ProductCard
      className="top-[9%] right-[3%] z-10 h-[26%] w-[44%] sm:top-[10%] sm:right-[8%] sm:h-[27%] sm:w-[38%]"
      headerGradient="linear-gradient(135deg, #14B8A6, #0F6E56)"
      icon={
        <span className="relative block size-[72%]">
          <Shield
            className="absolute inset-0 size-full drop-shadow-sm"
            fill="currentColor"
            fillOpacity={0.2}
            strokeWidth={2.1}
          />
          <FileCheck2
            className="absolute right-[-8%] bottom-[-5%] size-[54%] rounded-sm"
            fill="currentColor"
            fillOpacity={0.3}
            strokeWidth={2.3}
          />
        </span>
      }
      iconGradient="linear-gradient(135deg, #14B8A620, #0F6E5640)"
      iconColor="#0F6E56"
      shadow="0 20px 40px -15px rgba(20, 184, 166, 0.35)"
      hoverShadow="0 30px 50px -15px rgba(20, 184, 166, 0.5)"
      rotation={2}
      name="Veriwork"
      description="Blindaje Legal HSE"
      secondaryDescription="Aseguramiento Integral de Permisos"
      href="/veriwork"
    />
    <ProductCard
      className="top-[32%] left-[3%] z-10 h-[26%] w-[44%] sm:top-[31%] sm:left-[6%] sm:h-[27%] sm:w-[38%]"
      headerGradient="linear-gradient(135deg, #38BDF8, #2980B9)"
      icon={
        <Radio
          className="size-[63%] drop-shadow-sm"
          fill="currentColor"
          fillOpacity={0.22}
          strokeWidth={2.2}
        />
      }
      iconGradient="linear-gradient(135deg, #38BDF820, #2980B940)"
      iconColor="#2980B9"
      shadow="0 20px 40px -15px rgba(56, 189, 248, 0.35)"
      hoverShadow="0 30px 50px -15px rgba(56, 189, 248, 0.5)"
      rotation={2}
      name="Nexvia"
      description="Tu Flota, Bajo Control"
      secondaryDescription="Incluso Sin Internet"
      href="/nexvia"
    />
    <ProductCard
      className="top-[34%] right-[3%] z-20 h-[26%] w-[44%] sm:top-[34%] sm:right-[5%] sm:h-[27%] sm:w-[38%]"
      headerGradient="linear-gradient(135deg, #A855F7, #6C3483)"
      icon={
        <ClipboardCheck
          className="size-[63%] drop-shadow-sm"
          fill="currentColor"
          fillOpacity={0.22}
          strokeWidth={2.2}
        />
      }
      iconGradient="linear-gradient(135deg, #A855F720, #6C348340)"
      iconColor="#6C3483"
      shadow="0 20px 40px -15px rgba(168, 85, 247, 0.35)"
      hoverShadow="0 30px 50px -15px rgba(168, 85, 247, 0.5)"
      rotation={-2}
      name="Shield AI"
      description="SG-SST en Horas"
      secondaryDescription="IA + Auditor SST Certificado"
      href="/shield-ai"
    />

    <div
      aria-hidden="true"
      className="absolute top-[32%] left-1/2 z-30 hidden size-[clamp(3.2rem,8vw,5.2rem)] -translate-x-1/2 items-center justify-center rounded-full border border-cyan-100/50 bg-gradient-to-br from-cyan-200/90 via-teal-400/90 to-blue-700/90 text-white shadow-[0_0_35px_rgba(45,212,191,0.48)] backdrop-blur-md sm:flex"
    >
      <Check className="size-[68%] drop-shadow-md" strokeWidth={3} />
    </div>

    <div className="absolute top-[62%] left-1/2 z-30 flex w-[84%] -translate-x-1/2 items-center justify-center gap-2 rounded-full border border-cyan-300/35 bg-gradient-to-r from-slate-950/95 via-cyan-950/95 to-slate-950/95 px-3 py-2 text-center text-xs font-semibold leading-tight text-white shadow-[0_10px_30px_rgba(34,211,238,0.14)] backdrop-blur-md sm:w-[64%] sm:px-5">
      <Link2 size={14} className="shrink-0 text-cyan-300" aria-hidden="true" />
      <span>Tecnología propia + ingeniería de campo</span>
    </div>

    <MotionLink
      href="/consultoria-mantenimiento"
      variants={cardVariants}
      custom={0}
      whileHover={{
        y: -6,
        rotate: 0,
        boxShadow: "0 30px 50px -15px rgba(180, 83, 9, 0.5)",
        transition: { duration: 0.25, ease: "easeOut" },
      }}
      aria-label="Conocer Consultoría y Servicios de Ingeniería"
      className="absolute bottom-[2%] left-1/2 z-30 flex h-[25%] w-[90%] -translate-x-1/2 items-center gap-2 rounded-[clamp(0.65rem,1.6vw,1.05rem)] border-2 border-amber-700 bg-gradient-to-br from-stone-100 to-amber-50 px-3 text-stone-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300 sm:w-[65%] sm:gap-[clamp(0.55rem,1.8vw,1.25rem)] sm:px-[clamp(0.65rem,2vw,1.4rem)]"
      style={{ boxShadow: "0 20px 40px -15px rgba(180, 83, 9, 0.35)" }}
    >
      <span
        aria-hidden="true"
        className="hidden size-[clamp(2.1rem,5.2vw,4rem)] shrink-0 items-center justify-center rounded-xl text-[#B45309] sm:flex"
        style={{ background: "linear-gradient(135deg, #F59E0B20, #B4530940)" }}
      >
        <WorkerIcon />
      </span>
      <span className="min-w-0 text-xs leading-tight">
        <span className="block font-extrabold text-amber-800">Consultoría &amp; Servicios de Ingeniería</span>
        <strong className="mt-1 block font-extrabold">Especialistas en Mantenimiento con Experiencia y Criterio</strong>
        <span className="mt-1 block font-medium text-stone-700">
          Diagnóstico y Diseño de Estrategias de Mantenimiento
        </span>
      </span>
    </MotionLink>
  </motion.figure>
);
