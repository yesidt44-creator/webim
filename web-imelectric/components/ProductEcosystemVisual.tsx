"use client";

import { motion } from "framer-motion";

export const ProductEcosystemVisual = () => (
  <motion.figure
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.25 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    aria-label="Ecosistema de productos y servicios de IMELECTRIC: Fix AI, Veriwork, Nexvia, Shield AI, Falion y Consultoría"
    className="relative mx-auto aspect-[1256/732] w-full max-w-5xl"
  >
    {/* Glow pulsante detrás */}
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute inset-[8%] -z-10 rounded-full bg-[radial-gradient(circle,rgba(45,212,191,0.28)_0%,rgba(37,99,235,0.18)_40%,transparent_70%)] blur-3xl"
      animate={{
        scale: [1, 1.12, 1],
        opacity: [0.45, 0.75, 0.45],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />

    <video
      className="h-full w-full object-contain mix-blend-lighten shadow-[0_0_80px_40px_rgba(56,189,248,0.12)] [mask-image:radial-gradient(ellipse_at_center,_black_30%,_transparent_80%,_transparent_100%)]"
      width={1256}
      height={732}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
    >
      <source src="/imelectric-animacion.mp4" type="video/mp4" />
    </video>
  </motion.figure>
);
