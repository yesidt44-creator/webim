import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { AnalyticsLoader } from "@/components/AnalyticsLoader";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const clarityProjectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;

export const metadata: Metadata = {
  metadataBase: new URL("https://imelectric.es"),
  alternates: {
    canonical: "/",
  },
  title: "IMELECTRIC — Inteligencia en movimiento industrial",
  description: "Software industrial, EAM, SST y servicios de respuesta crítica para sectores de alto riesgo.",
  openGraph: {
    type: "website",
    locale: "es_CO",
    siteName: "IMELECTRIC",
    title: "IMELECTRIC — Software industrial con IA",
    description: "Fix AI, Falion, Veriwork, Nexvia y Shield AI para operaciones industriales en Colombia.",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "IMELECTRIC — Software industrial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IMELECTRIC — Software industrial con IA",
    description: "Fix AI, Falion, Veriwork, Nexvia y Shield AI para operaciones industriales en Colombia.",
    images: ["/og-default.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "IMELECTRIC",
  url: "https://imelectric.es",
  logo: "https://imelectric.es/imelectric-logo.png",
  sameAs: ["https://www.linkedin.com/company/imelectric/"],
  description:
    "Empresa colombiana de software industrial con IA. Desarrolla Fix AI (CMMS), Falion (Confiabilidad RCA), Veriwork (HSE), Nexvia (Flotas) y Shield AI (SG-SST) para contratistas industriales y operadores en Colombia y Latinoamérica.",
  areaServed: ["Colombia", "Latinoamérica"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: "hola@imelectric.es",
    availableLanguage: ["Spanish"],
  },
  knowsAbout: [
    "Mantenimiento industrial",
    "Software CMMS",
    "Gestión HSE Colombia",
    "Software SST Colombia",
    "Gestión de flotas HSEQ",
    "SG-SST Colombia",
    "Seguridad industrial digital",
    "Confiabilidad industrial",
    "Análisis de causa raíz RCA",
    "FMECA y Weibull industrial",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "IMELECTRIC",
  url: "https://imelectric.es",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  return (
    <html
      lang="es"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}
    >
      <head>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          nonce={nonce}
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          nonce={nonce}
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="flex min-h-full flex-col">
        {children}
        <WhatsAppFloat />
        <AnalyticsLoader
          gaMeasurementId={gaMeasurementId}
          clarityProjectId={clarityProjectId}
          nonce={nonce}
        />
      </body>
    </html>
  );
}
