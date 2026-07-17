# Estado actual verificable — imelectric.es

**Fecha de generación:** 17 de julio de 2026  
**Repositorio inventariado:** `web-imelectric/`  
**Método:** inspección estática de `app/`, `components/`, `public/`, configuración y manifiestos; `npm outdated` y `npm audit` ejecutados al generar este documento.  
**Alcance:** fotografía del código local en esta fecha. No describe planes ni funcionalidades que no estén presentes.

---

## 1. Mapa completo de rutas

### Reglas globales

- El único layout es `app/layout.tsx`.
- Todas las páginas heredan `metadataBase`, Open Graph/Twitter por defecto y los JSON-LD globales `Organization` y `WebSite` (`app/layout.tsx:24-57,60-95`).
- Todas las páginas reales tienen `metadata` propia con `title` y `description`; no existe `generateMetadata`.
- La indexación es `index, follow` implícita salvo `/preview-ecosistema`.
- `app/robots.ts` permite `/`, bloquea `/api/` y anuncia `https://imelectric.es/sitemap.xml`.
- `app/sitemap.ts` contiene 20 URLs. `lastModified` se calcula con `new Date()` en cada entrada.

| URL | Archivo | Metadata propia | JSON-LD específico (además de globales) | Sitemap | Robots |
|---|---|---|---|---|---|
| `/` | `app/page.tsx` | Sí: `IMELECTRIC — Software industrial con IA \| Colombia` | `SoftwareApplication` Fix AI, Nexvia y Veriwork por los componentes renderizados | Sí, `weekly`, `1` | Indexación implícita |
| `/fixai-cmms` | `app/fixai-cmms/page.tsx` | Sí: `Fix AI — CMMS con IA para contratistas \| IMELECTRIC` | `FAQPage`; `SoftwareApplication` Fix AI por `<FixAI />` | Sí, `monthly`, `0.9` | Implícita |
| `/falion` | `app/falion/page.tsx` | Sí: `Falion — Análisis de causa raíz RCA asistido por IA \| IMELECTRIC` | `SoftwareApplication` Falion | Sí, `monthly`, `0.9` | Implícita |
| `/veriwork` | `app/veriwork/page.tsx` | Sí: `Veriwork — Gestión HSE verificable \| IMELECTRIC` | `FAQPage`; `SoftwareApplication` Veriwork por `<SafetyOn />` | Sí, `monthly`, `0.9` | Implícita |
| `/nexvia` | `app/nexvia/page.tsx` | Sí: `Nexvia — Flotas HSEQ para Colombia \| IMELECTRIC` | `FAQPage`; `SoftwareApplication` Nexvia por `<Nexvia />` | Sí, `monthly`, `0.9` | Implícita |
| `/shield-ai` | `app/shield-ai/page.tsx` | Sí: `Shield AI — SG-SST con IA \| Res. 0312 \| IMELECTRIC` | `FAQPage` | Sí, `monthly`, `0.9` | Implícita |
| `/preview-ecosistema` | `app/preview-ecosistema/page.tsx` | Sí: `Preview ecosistema \| IMELECTRIC` | Ninguno específico | No | `noindex, nofollow` |
| `/academia` | `app/academia/page.tsx` | Sí: `Academia Técnica \| Confiabilidad y SST \| IMELECTRIC` | `BreadcrumbList` | Sí, `weekly`, `0.9` | Implícita |
| `/academia/calculadora-mtbf` | `app/academia/calculadora-mtbf/page.tsx` | Sí: `Calculadora MTBF y MTTR \| IMELECTRIC` | Ninguno específico | Sí, `monthly`, `0.85` | Implícita |
| `/academia/fmeca` | `app/academia/fmeca/page.tsx` | Sí: `Matriz FMECA online \| IMELECTRIC` | Ninguno específico | Sí, `monthly`, `0.85` | Implícita |
| `/academia/ishikawa` | `app/academia/ishikawa/page.tsx` | Sí: `Diagrama Ishikawa Online — Análisis Causa Raíz 6M \| IMELECTRIC` | Ninguno específico | Sí, `monthly`, `0.85` | Implícita |
| `/academia/trabajo-en-alturas` | `app/academia/trabajo-en-alturas/page.tsx` | Sí: `Simulador Res. 4272 — Alturas \| IMELECTRIC` | Ninguno específico | Sí, `monthly`, `0.85` | Implícita |
| `/academia/rodamientos` | `app/academia/rodamientos/page.tsx` | Sí: `Rodamientos industriales \| IMELECTRIC` | Ninguno específico | Sí, `monthly`, `0.85` | Implícita |
| `/academia/cmms-vs-gmao` | `app/academia/cmms-vs-gmao/page.tsx` | Sí: `CMMS vs GMAO: diferencias \| IMELECTRIC` | `FAQPage`, `Article`, `BreadcrumbList` | Sí, `monthly`, `0.8` | Implícita |
| `/academia/certificacion-trabajo-en-alturas-colombia` | `app/academia/certificacion-trabajo-en-alturas-colombia/page.tsx` | Sí: `Certificación trabajo en alturas \| Res. 4272 \| IMELECTRIC` | `FAQPage`, `Article`, `BreadcrumbList` | Sí, `monthly`, `0.8` | Implícita |
| `/academia/resolucion-0312-estandares-minimos` | `app/academia/resolucion-0312-estandares-minimos/page.tsx` | Sí: `Resolución 0312: estándares SG-SST \| IMELECTRIC` | `FAQPage`, `Article`, `BreadcrumbList` | Sí, `monthly`, `0.8` | Implícita |
| `/academia/firma-electronica-vs-firma-digital-colombia` | `app/academia/firma-electronica-vs-firma-digital-colombia/page.tsx` | Sí: `Firma electrónica vs digital Colombia \| IMELECTRIC` | `FAQPage`, `Article`, `BreadcrumbList` | Sí, `monthly`, `0.8` | Implícita |
| `/academia/rca-rcm-fmea-diferencias` | `app/academia/rca-rcm-fmea-diferencias/page.tsx` | Sí: `RCA, RCM y FMEA: diferencias \| IMELECTRIC` | `FAQPage`, `Article`, `BreadcrumbList` | Sí, `monthly`, `0.8` | Implícita |
| `/privacidad` | `app/privacidad/page.tsx` | Sí: `Política de datos personales \| IMELECTRIC` | Ninguno específico | Sí, `yearly`, `0.3` | `index: true, follow: true` |
| `/terminos` | `app/terminos/page.tsx` | Sí: `Términos de Servicio \| IMELECTRIC` | Ninguno específico | Sí, `yearly`, `0.3` | `index: true, follow: true` |
| `/cookies` | `app/cookies/page.tsx` | Sí: `Política de Cookies \| IMELECTRIC` | Ninguno específico | Sí, `yearly`, `0.3` | `index: true, follow: true` |
| `/api/contact` | `app/api/contact/route.ts` | No aplica; solo `POST`, runtime Node.js | No | No | Bloqueada por `robots.ts` |
| `/robots.txt` | `app/robots.ts` | Generada por Next.js | No | No | Es la definición de robots |
| `/sitemap.xml` | `app/sitemap.ts` | Generada por Next.js | No | No | No |

No existen `not-found.tsx`, `manifest.ts` ni layouts anidados. `/preview-ecosistema` es la única página real excluida del sitemap.

---

## 2. Inventario de componentes

### Componentes de aplicación

| Componente | Qué renderiza | Dónde se usa |
|---|---|---|
| `components/About.tsx` | Sectores industriales, experiencia y tarjetas de impacto | `app/page.tsx` |
| `components/AiPhilosophy.tsx` | Filosofía “la IA acelera, la persona decide” y aplicación por producto | `app/page.tsx` |
| `components/AnalyticsLoader.tsx` | Banner CMP y carga condicional de GA4/Clarity | Global desde `app/layout.tsx` |
| `components/BearingAcademy.tsx` | Herramienta interactiva de rodamientos: búsqueda, nomenclatura, medición, fallas e inspección | `/academia/rodamientos` |
| `components/ConsentBanner.tsx` | Diálogo para aceptar/rechazar cookies analíticas | Desde `AnalyticsLoader` |
| `components/ContactModal.tsx` | Modal de contacto técnico, formulario, WhatsApp y correo | Navbar, Hero, servicios, CTAs de Fix AI/Nexvia/Veriwork, Shield AI, Falion y hero de `/falion` |
| `components/Education.tsx` | Contenido de gestión de activos, RAM/RCM y CTA a Academia | Home |
| `components/Falion.tsx` | Diferenciadores, módulos, prueba de campo, ROI y FAQ visual de Falion | `/falion` |
| `components/FalionRoiCalc.tsx` | Calculadora local de ahorro y ROI de RCA | Desde `Falion` |
| `components/FixAI.tsx` | Presentación completa de Fix AI, capturas, funciones y CTA | Home y `/fixai-cmms` |
| `components/FixAICta.tsx` | CTA de demo y enlace a Fix AI | Desde `FixAI` |
| `components/Fmeca.tsx` | Matriz FMECA editable y cálculo NPR | `/academia/fmeca` |
| `components/Footer.tsx` | Pie con plataformas, Academia, contacto, redes y legales | Todas las páginas principales salvo `/falion`, legales y preview |
| `components/Hero.tsx` | Hero del home y CTA | Home |
| `components/IndustrialServices.tsx` | Suministros críticos y mantenimiento electrónico | Home |
| `components/Ishikawa.tsx` | Diagrama editable causa-raíz 6M | `/academia/ishikawa` |
| `components/LeadModal.tsx` | Modal legacy de captura de lead/descarga normativa | **Sin importaciones: código muerto candidato** |
| `components/Navbar.tsx` | Navegación desktop/móvil, megamenú, LinkedIn y contacto | Home, productos y Academia |
| `components/Nexvia.tsx` | Presentación completa de Nexvia | Home y `/nexvia` |
| `components/NexviaCta.tsx` | CTA de demo y enlace a Nexvia | Desde `Nexvia` |
| `components/NormsLibrary.tsx` | Biblioteca de PDFs y suscripción opcional a avisos | `/academia/trabajo-en-alturas` |
| `components/PainPoints.tsx` | Grid comercial de plataformas | Home |
| `components/ProductEcosystemVisual.tsx` | Infografía del ecosistema de productos y consultoría | `/preview-ecosistema` |
| `components/ReliabilityCalculator.tsx` | Calculadora MTBF, MTTR, disponibilidad y R(t) | `/academia/calculadora-mtbf` |
| `components/SSTAcademy.tsx` | Simulador de caída en alturas y áreas clasificadas | `/academia/trabajo-en-alturas` |
| `components/SafetyOn.tsx` | Presentación visible de Veriwork; conserva nombre de archivo legacy | Home y `/veriwork` |
| `components/SafetyOnCta.tsx` | CTA de auditoría HSE y enlace a Veriwork | Desde `SafetyOn` |
| `components/ShieldAI.tsx` | Presentación de Shield AI, SG-SST, retención y CTA | Home y `/shield-ai` |
| `components/WhatsAppFloat.tsx` | Botón flotante de WhatsApp | Global desde `app/layout.tsx` |

### Primitivas UI

| Archivo | Uso |
|---|---|
| `components/ui/button.tsx` | `ContactModal` y `dialog.tsx` |
| `components/ui/dialog.tsx` | `ContactModal` |
| `components/ui/input.tsx` | `ContactModal` |
| `components/ui/select.tsx` | `ContactModal` |
| `components/ui/tabs.tsx` | **Sin importaciones: código muerto candidato.** `Education.tsx` importa Radix directamente. |

`app/falion/page.tsx` no renderiza `Navbar` ni `Footer`. Los otros productos y páginas de Academia sí los renderizan. Las páginas legales tampoco renderizan el Navbar/Footer global; contienen su propio pie mínimo.

---

## 3. Todos los bloques JSON-LD existentes

No existe ningún `@id` en los schemas. `sameAs` solo existe en el `Organization` global.

### `app/layout.tsx:60-95` — `Organization` y `WebSite`

```ts
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
```

### `components/FixAI.tsx:16-56` — `SoftwareApplication`

```ts
const fixAiJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Fix AI",
  alternateName: [
    "FixAI CMMS",
    "Fix AI PWA mantenimiento",
    "software mantenimiento industrial Colombia",
    "CMMS contratistas Oil Gas Colombia",
  ],
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "CMMS, EAM, Mantenimiento Industrial",
  operatingSystem: "Web, PWA, Android, iOS",
  description:
    "Fix AI es una PWA de gestión de mantenimiento industrial con IA diseñada para contratistas. Digitaliza el ciclo completo de ejecución: reporte de campo offline, supervisión, exportación compatible con el ERP del operador y módulo Falion de análisis de confiabilidad.",
  keywords:
    "Fix AI CMMS, software mantenimiento industrial Colombia, PWA mantenimiento industrial, reporte OT digital Colombia, CMMS Oil Gas Colombia, mantenimiento offline campo, Falion IA confiabilidad, gestión mantenimiento Colombia",
  provider: {
    "@type": "Organization",
    name: "IMELECTRIC",
    url: "https://imelectric.es",
    areaServed: ["Colombia", "Latinoamérica"],
      knowsAbout: [
      "Mantenimiento industrial",
      "CMMS contratistas",
      "Oil & Gas Colombia",
      "Confiabilidad industrial",
      "ERP mantenimiento",
    ],
  },
  featureList: [
    "Reporte de campo con foto, firma electrónica y hash de trazabilidad",
    "Modo offline-first para zonas sin cobertura",
    "Supervisión y aprobación digital de reportes antes de ERP",
    "Exportación compatible con el ERP del operador (IW38/IW41 y otros formatos)",
    "Dashboard en tiempo real: backlog, OTs sin tratar y avance por frente",
    "Falion: módulo de IA para análisis de confiabilidad y hallazgos recurrentes",
    "Aislamiento de datos por empresa (multiproyecto)",
    "Control de repuestos y consumibles por orden de trabajo",
  ],
};
```

### `components/Nexvia.tsx:17-60` — `SoftwareApplication`

```ts
const nexviaJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Nexvia",
  alternateName: [
    "software gestión de flotas Colombia",
    "software HSEQ Colombia",
    "seguridad vial digital Colombia",
    "gestión seguridad industrial flotas",
    "software SST transporte Colombia",
  ],
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "Gestión de Flotas, HSEQ, Seguridad Vial, ISO 9001, SST Transporte",
  operatingSystem: "Web, Android, iOS",
  description:
    "Nexvia es el software de gestión de flotas e HSEQ para PyMEs de transporte en Colombia. Digitaliza inspecciones preoperacionales, evaluaciones de riesgo, trazabilidad de seguridad industrial y cumplimiento ISO 9001 con tecnología offline-first para zonas sin cobertura.",
  keywords:
    "software gestión flotas Colombia, HSEQ Colombia, seguridad industrial digital, gestión seguridad industrial, software SST Colombia, trazabilidad HSEQ, seguridad vial digital, ISO 9001 transporte, permisos trabajo transporte, inspección preoperacional digital",
  provider: {
    "@type": "Organization",
    name: "IMELECTRIC",
    url: "https://imelectric.es",
    areaServed: ["Colombia", "Latinoamérica"],
    knowsAbout: [
      "Gestión de flotas",
      "HSEQ Colombia",
      "Seguridad vial digital",
      "ISO 9001",
      "SST transporte",
      "Inspección preoperacional",
      "Seguridad industrial digital",
    ],
  },
  featureList: [
    "Inspecciones preoperacionales digitales con validación de competencias",
    "Evaluación de riesgo con matriz de 8 criterios y fatiga del conductor",
    "Trazabilidad HSEQ auditable, diseñada para detectar alteraciones",
    "Operación offline-first para zonas sin cobertura en Colombia",
    "Encuestas de satisfacción por código QR vinculadas al viaje",
    "Evidencia documental ante incidentes y auditorías regulatorias",
    "Verificación automática de certificados y avales de conductores",
    "Cumplimiento ISO 9001 para transporte y logística",
  ],
};
```

### `components/SafetyOn.tsx:14-57` — `SoftwareApplication` Veriwork

```ts
const safetyOnJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Veriwork",
  alternateName: [
    "Veriwork software HSE",
    "software gestión HSE Colombia",
    "software HSE Colombia",
    "software SST Colombia",
    "permisos de trabajo digitales verificables",
    "gestión seguridad industrial digital",
  ],
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "HSE, SST, Seguridad Industrial, Permisos de Trabajo",
  operatingSystem: "Web, Android, iOS",
  description:
    "Veriwork es la plataforma de gestión HSE y SST para Colombia y Latinoamérica. La gestión HSE que tu operación puede verificar, no solo archivar. Digitaliza permisos de trabajo con firma criptográfica verificable, cumplimiento normativo en tiempo real y evidencia diseñada para que no pueda modificarse sin dejar rastro.",
  keywords:
    "Veriwork software HSE, software gestión HSE Colombia, seguridad industrial digital, permisos de trabajo digitales, software HSE Colombia, gestión seguridad industrial, trabajo en alturas digital, software SST Colombia, trazabilidad HSE forense, firma Ed25519 permisos trabajo, PAdES sello de tiempo HSE, firma electrónica seguridad industrial Colombia",
  provider: {
    "@type": "Organization",
    name: "IMELECTRIC",
    url: "https://imelectric.es",
    areaServed: ["Colombia", "Latinoamérica"],
    knowsAbout: [
      "Gestión HSE",
      "SST Colombia",
      "Permisos de trabajo en alturas",
      "Seguridad industrial digital",
      "Trazabilidad forense",
      "Ley 1581 Habeas Data",
    ],
  },
  featureList: [
    "Permisos de trabajo digitales con hash SHA-256 + firma Ed25519",
    "Gestión de trabajo en alturas con verificación de competencias",
    "Trazabilidad HSE minuto a minuto con GPS y timestamp",
    "Verificación automática de certificados y avales vigentes",
    "Análisis de riesgo asistido por IA con alertas normativas",
    "Cumplimiento Resolución 0312 y Decreto 1072",
    "Evidencia diseñada para que no pueda modificarse sin dejar rastro",
    "Cero pérdida documental: S3 Object Lock Technology",
  ],
};
```

### `app/falion/page.tsx:44-68` — `SoftwareApplication` Falion

```ts
const heroJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Falion",
  url: "https://imelectric.es/falion",
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "Confiabilidad Industrial, RCA, FMECA, Weibull",
  operatingSystem: "Web",
  description:
    "Sistema de análisis de confiabilidad industrial con IA. Asiste RCA, FMECA, Weibull, RAM, CBM, LCC y más, usando los datos reales de los activos del cliente.",
  provider: {
    "@type": "Organization",
    name: "IMELECTRIC",
    url: "https://imelectric.es",
  },
  featureList: [
    "RCA con árbol de causas basado en historial real de activos",
    "Análisis Weibull con guardrails de confianza estadística",
    "FMECA con índice de criticidad",
    "Entregable en Word con trazabilidad normativa (GTC-45, RETIE, ISO 14224, API)",
    "Grounding en datos propios — no en conocimiento genérico",
    "Flujo de aprobación: Falion propone, el ingeniero decide",
    "8 módulos de análisis: RCA, Weibull, FMECA, RAM, CBM, LCC, PST-IA, Chat RAG",
  ],
};
```

### `app/fixai-cmms/page.tsx:46-91` — `FAQPage`

```ts
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué es Fix AI y en qué se diferencia de un CMMS tradicional?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fix AI es una aplicación web progresiva (PWA) de gestión de mantenimiento industrial con inteligencia artificial diseñada para contratistas. A diferencia de un CMMS tradicional, no requiere integraciones API ni licencias adicionales del ERP del operador: importa el programa semanal, acompaña la ejecución en campo y exporta los reportes listos para cargar en el ERP (compatible con SAP PM IW38/IW41 y otros formatos). También puede operar como CMMS completo cuando la organización lo necesita.",
      },
    },
    {
      "@type": "Question",
      name: "¿Fix AI funciona sin conexión a internet en campo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Fix AI fue diseñado con arquitectura offline-first para operar en zonas con cobertura de red intermitente o inexistente, comunes en operaciones Oil & Gas upstream en Colombia. Los técnicos pueden registrar órdenes de trabajo, adjuntar fotos y firmar electrónicamente sin señal. Los datos se sincronizan automáticamente al recuperar conexión, sin pérdida de información.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo funciona la exportación al ERP del operador sin integración API?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fix AI genera un archivo de exportación compatible con el ERP del operador (incluye el formato de carga masiva compatible con SAP PM IW38/IW41 y formatos configurables para otros ERP). El planeador importa ese archivo directamente en el ERP sin necesidad de re-digitar ningún dato. Esto elimina la figura del re-digitador y el riesgo de errores de transcripción.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué es el módulo Falion de Fix AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Falion es el módulo de inteligencia artificial de Fix AI. Analiza el historial acumulado de reportes de campo para identificar equipos críticos, hallazgos recurrentes y patrones de falla bajo demanda del supervisor o planeador. Es un insumo directo para tomar mejores decisiones operativas y para negociar futuros contratos con datos propios — algo que los contratistas raramente tienen disponible de forma estructurada.",
      },
    },
    {
      "@type": "Question",
      name: "¿Fix AI aplica solo para Oil & Gas o sirve en otros sectores?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fix AI aplica en cualquier industria que requiera gestión de mantenimiento en campo: Oil & Gas, manufactura, minería, energía eléctrica y más. Su arquitectura está diseñada para personalizarse según los procesos, checklists, roles y flujos de aprobación de cada cliente. El punto de partida habitual es el sector Oil & Gas porque ahí la brecha entre ejecución y registro administrativo tiene el mayor costo operativo.",
      },
    },
  ],
};
```

### `app/veriwork/page.tsx:48-101` — `FAQPage`

```ts
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué es un permiso de trabajo digital y cómo mejora la seguridad industrial?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un permiso de trabajo digital es la versión electrónica del Permiso de Trabajo en Frío/Caliente que reemplaza el papel por un flujo digital con firma electrónica, geolocalización y timestamp. Veriwork genera permisos con firma criptográfica que garantizan la integridad del documento ante auditorías: cualquier alteración es detectable. Esto elimina el riesgo de pérdida documental y proporciona trazabilidad forense ante inspecciones del Ministerio de Trabajo en Colombia.",
      },
    },
    {
      "@type": "Question",
      name: "¿Veriwork cumple con la Resolución 0312 de 2019 y el Decreto 1072 de 2015?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Veriwork está diseñado para cumplir con los estándares mínimos del SG-SST establecidos en la Resolución 0312 de 2019 y el Decreto 1072 de 2015 (Decreto Único Reglamentario del Sector Trabajo). El sistema digitaliza la evidencia documental requerida: matrices de riesgo, registros de capacitación, verificación de competencias SST y permisos de trabajo, con trazabilidad temporal diseñada para que la evidencia no pueda modificarse sin dejar rastro.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo gestiona Veriwork el trabajo en alturas según la normativa colombiana?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Veriwork integra los requisitos de la Resolución 4272 de 2021 para trabajo en alturas: verificación digital del Certificado de Coordinador de Trabajo en Alturas, validación de vigencia de capacitaciones, generación del permiso de trabajo en alturas con checklist de equipos de protección contra caídas y registro fotográfico del punto de anclaje. Todo queda archivado con timestamp y firma verificable.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo garantiza Veriwork la integridad de los documentos HSE?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Veriwork aplica hash SHA-256 del documento + firma Ed25519 (clave de empresa) + sello de tiempo conforme a RFC 3161 (perfil PAdES). La identificación del firmante individual proviene del registro de usuario y sus credenciales; la clave de empresa sella la transacción. Cada permiso incluye un QR de verificación pública. Para actas de alta severidad (accidentes graves, fatalidades) el protocolo incluye refuerzo notarial. La segregación de roles garantiza que quien reporta no es quien autoriza, cumpliendo el requisito de firma electrónica con valor legal del Decreto 2364 de 2012.",
      },
    },
    {
      "@type": "Question",
      name: "¿En qué sectores industriales de Colombia aplica Veriwork?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Veriwork aplica en todos los sectores regulados por el SG-SST colombiano: oil & gas (upstream, midstream, downstream), minería, construcción, manufactura, energía eléctrica y transporte. Es especialmente relevante en sectores donde el trabajo en alturas, espacios confinados y permisos de trabajo caliente son frecuentes y donde una demanda laboral por accidente puede tener consecuencias millonarias si no se cuenta con evidencia documental íntegra.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuál es la diferencia entre Veriwork y una firma electrónica genérica?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Una firma electrónica genérica acredita identidad. Veriwork va más allá: además de identificar al firmante, registra contexto operativo (GPS, timestamp, foto del sitio), verifica que las competencias del firmante estén vigentes según normativa colombiana y genera un log forense que reconstruye minuto a minuto quién aprobó qué, cuándo y bajo qué condiciones. Esto es lo que distingue 'gestión HSE verificable' de simplemente 'gestión HSE archivada'.",
      },
    },
  ],
};
```

### `app/nexvia/page.tsx:48-93` — `FAQPage`

```ts
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué es HSEQ en transporte y por qué es obligatorio en Colombia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "HSEQ son las siglas de Health, Safety, Environment and Quality (Salud, Seguridad, Medio Ambiente y Calidad). En Colombia, las empresas de transporte que operan como contratistas para empresas del sector oil & gas, minería o construcción deben cumplir requisitos HSEQ que incluyen: Plan Estratégico de Seguridad Vial (PESV), verificación de competencias SST de conductores, inspecciones preoperacionales documentadas y registros de incidentes. El incumplimiento puede resultar en la pérdida de contratos y sanciones del Ministerio de Transporte.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué incluye una inspección preoperacional digital con Nexvia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La inspección preoperacional digital de Nexvia incluye: checklist configurable del estado del vehículo (frenos, luces, llantas, cinturones, extintores), verificación de documentos del conductor (licencia, exámenes médicos, capacitaciones SST vigentes), evaluación de fatiga y riesgo con matriz de 8 criterios, registro fotográfico del vehículo, firma electrónica del conductor y timestamp con geolocalización. Todo queda trazado con integridad para auditorías HSEQ.",
      },
    },
    {
      "@type": "Question",
      name: "¿Nexvia sirve para obtener o mantener la certificación ISO 9001 en transporte?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Nexvia digitaliza los procesos de gestión de calidad requeridos por ISO 9001:2015 en empresas de transporte: registros de no conformidades, medición de satisfacción del cliente mediante encuestas QR post-servicio, trazabilidad de procesos operativos y evidencia documentada de mejora continua. Estos registros facilitan las auditorías de certificación y mantenimiento de ISO 9001 al proporcionar evidencia digital íntegra y consultable.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto cuesta Nexvia en comparación con soluciones enterprise de gestión de flotas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nexvia está diseñado para PyMEs de transporte en Colombia con un modelo de precios accesible que se adapta al tamaño de la flota y los módulos requeridos. A diferencia de las soluciones enterprise multinacionales, Nexvia no requiere grandes inversiones en implementación ni licencias inflexibles. Contactar a IMELECTRIC para una auditoría de viabilidad gratuita y cotización según el número de vehículos y conductores.",
      },
    },
    {
      "@type": "Question",
      name: "¿Nexvia funciona sin conexión a internet en rutas remotas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Nexvia fue desarrollado con arquitectura offline-first para operar en rutas con conectividad limitada o nula, comunes en Colombia en rutas hacia zonas de operación minera o petrolera. Los conductores pueden completar inspecciones preoperacionales, registrar incidentes y firmar documentos sin internet. Los datos se sincronizan automáticamente al recuperar cobertura.",
      },
    },
  ],
};
```

### `app/shield-ai/page.tsx:43-88` — `FAQPage`

```ts
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué es el SG-SST y qué empresas colombianas están obligadas a implementarlo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST) es obligatorio para toda empresa colombiana con al menos un trabajador, según el Decreto 1072 de 2015 y la Resolución 0312 de 2019. La Res. 0312 establece estándares mínimos diferenciados: 7 para empresas de 1 a 10 trabajadores con riesgo I, II o III; 21 para empresas de 11 a 50 trabajadores con riesgo I, II o III; y 60 para empresas de más de 50 trabajadores (cualquier riesgo) o de 50 o menos con riesgo IV o V.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo automatiza Shield AI la evidencia documental del SG-SST?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Shield AI analiza el estado actual del SG-SST de la empresa y genera automáticamente los borradores de los documentos requeridos: matrices de identificación de peligros, plan de emergencias, programas de capacitación, actas de comité COPASST y otros. El responsable del SG-SST revisa cada documento, completa los datos específicos de la empresa y firma junto al representante legal. El sistema nunca genera documentos firmados de forma autónoma.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tiempo debe conservarse la documentación del SG-SST en Colombia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El Decreto 1072 de 2015 (Art. 2.2.4.6.13) exige conservar por un mínimo de 20 años, contados desde el cese de la relación laboral, documentos clave del SG-SST (perfiles epidemiológicos, conceptos de exámenes médicos, mediciones de ambiente de trabajo, capacitaciones y suministro de EPP). Para el resto de registros, el empleador debe definir su propia tabla de retención documental. Shield AI está diseñado para soportar esa retención mínima de 20 años con trazabilidad que permite detectar si la evidencia fue alterada.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuál es la diferencia entre Shield AI y Veriwork?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Shield AI está diseñado para el cumplimiento del SG-SST de la empresa como organización, cubriendo todos los requisitos de la Res. 0312 para cualquier empresa colombiana. Veriwork está diseñado para la gestión HSE en campo, específicamente para operaciones de alto riesgo como trabajo en alturas, permisos de trabajo caliente y gestión de contratistas en Oil & Gas, construcción y manufactura. Muchas empresas usan ambas: Shield AI para cumplimiento corporativo y Veriwork para ejecución operativa.",
      },
    },
    {
      "@type": "Question",
      name: "¿Shield AI requiere contratar un consultor de SG-SST externo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Shield AI está diseñado para que el responsable interno del SG-SST de la empresa pueda gestionar el cumplimiento sin depender permanentemente de un consultor externo. El sistema provee el diagnóstico, la hoja de ruta, los borradores documentales y las alertas. La empresa puede usar un consultor para el arranque inicial si lo desea, pero la operación diaria del sistema no lo requiere.",
      },
    },
  ],
};
```

### `app/academia/page.tsx:93-100` — `BreadcrumbList`

```ts
const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://imelectric.es/" },
    { "@type": "ListItem", position: 2, name: "Academia Técnica", item: "https://imelectric.es/academia" },
  ],
};
```

### Schemas de los cinco artículos

Cada bloque se copia completo, incluyendo su `FAQPage`, `Article` y `BreadcrumbList`.

#### `app/academia/cmms-vs-gmao/page.tsx:35-98`

```ts
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuál es la diferencia entre CMMS y GMAO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CMMS (Computerized Maintenance Management System) y GMAO (Gestión de Mantenimiento Asistido por Ordenador) son el mismo tipo de software con nombres distintos. CMMS es el término anglosajón dominante en Oil & Gas global; GMAO es la traducción adoptada en España y Latinoamérica. Ambos designan sistemas para planificar, ejecutar y registrar actividades de mantenimiento industrial.",
      },
    },
    {
      "@type": "Question",
      name: "¿Un contratista de mantenimiento necesita un ERP como SAP PM?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Un contratista de mantenimiento trabaja sobre los activos del operador y necesita exportar órdenes de trabajo (OT) en los formatos que el ERP del operador acepta. No necesita ser el ERP — necesita alimentarlo sin doble digitación. SAP PM está diseñado para el operador que gestiona sus propios activos a escala industrial, no para el contratista.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué es ISO 14224 y por qué importa para un CMMS en Oil & Gas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ISO 14224 es la norma internacional que define la taxonomía de equipos, tipos de falla y modos de mantenimiento para la industria del petróleo y gas. Un CMMS sin soporte ISO 14224 obliga al contratista a construir su propia taxonomía, que normalmente no es compatible con lo que el operador exige en sus reportes.",
      },
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: '¿Qué es un CMMS y en qué se diferencia de un GMAO?',
  datePublished: "2026-07-01",
  dateModified: "2026-07-17",
  author: {
    "@type": "Organization",
    name: "Equipo de Ingeniería IMELECTRIC",
    url: "https://imelectric.es",
  },
  publisher: {
    "@type": "Organization",
    name: "IMELECTRIC",
    logo: {
      "@type": "ImageObject",
      url: "https://imelectric.es/imelectric-logo.png",
    },
  },
  mainEntityOfPage: 'https://imelectric.es/academia/cmms-vs-gmao',
  // ARTICLE_META_INJECTED
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://imelectric.es/" },
    { "@type": "ListItem", position: 2, name: "Academia Técnica", item: "https://imelectric.es/academia" },
    { "@type": "ListItem", position: 3, name: 'CMMS vs GMAO', item: 'https://imelectric.es/academia/cmms-vs-gmao' },
  ],
};
```

#### `app/academia/certificacion-trabajo-en-alturas-colombia/page.tsx:35-98`

```ts
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Desde qué altura aplica la Resolución 4272 en Colombia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La Resolución 4272 de 2021 aplica a toda actividad laboral realizada a más de 2 metros sobre el nivel inferior donde exista riesgo de caída libre que pueda generar lesiones o la muerte.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tiempo tiene de vigencia el certificado de coordinador de trabajo en alturas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El certificado de coordinador de trabajo en alturas tiene una vigencia de 3 años, contados desde la fecha de expedición por parte de una institución de formación autorizada (SENA u organismo de certificación acreditado ante ONAC). Verificar con el texto oficial vigente de la Res. 4272 antes de cada decisión operativa.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué debe contener un permiso de trabajo en alturas según la Res. 4272?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El permiso debe incluir: identificación del trabajador autorizado y del coordinador, descripción de la tarea y el punto de trabajo, evaluación de peligros del punto de anclaje, verificación del EPP anticaída, verificación del sistema de rescate disponible, condiciones meteorológicas (para exterior), y firma del coordinador y del trabajador.",
      },
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: 'Certificación de trabajo en alturas en Colombia: vigencia y requisitos',
  datePublished: "2026-07-01",
  dateModified: "2026-07-17",
  author: {
    "@type": "Organization",
    name: "Equipo de Ingeniería IMELECTRIC",
    url: "https://imelectric.es",
  },
  publisher: {
    "@type": "Organization",
    name: "IMELECTRIC",
    logo: {
      "@type": "ImageObject",
      url: "https://imelectric.es/imelectric-logo.png",
    },
  },
  mainEntityOfPage: 'https://imelectric.es/academia/certificacion-trabajo-en-alturas-colombia',
  // ARTICLE_META_INJECTED
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://imelectric.es/" },
    { "@type": "ListItem", position: 2, name: "Academia Técnica", item: "https://imelectric.es/academia" },
    { "@type": "ListItem", position: 3, name: 'Certificación trabajo en alturas', item: 'https://imelectric.es/academia/certificacion-trabajo-en-alturas-colombia' },
  ],
};
```

#### `app/academia/resolucion-0312-estandares-minimos/page.tsx:35-105`

```ts
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuántos estándares mínimos SG-SST aplican a mi empresa según la Resolución 0312?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende del tamaño y la clase de riesgo (Arts. 3, 8, 9, 15 y 16 de la Res. 0312): 7 estándares para empresas de 1 a 10 trabajadores con riesgo I, II o III; 21 estándares para empresas de 11 a 50 trabajadores con riesgo I, II o III; y 60 estándares para empresas de más de 50 trabajadores (cualquier riesgo) o de 50 o menos con riesgo IV o V.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué multas puede imponer el Ministerio de Trabajo por incumplimiento del SG-SST?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El Decreto 472 de 2015 establece las sanciones por incumplimiento de las normas de seguridad y salud en el trabajo. Las multas van de 1 SMMLV hasta 500 SMMLV según la gravedad del incumplimiento y el tamaño de la empresa. En casos graves con accidente mortal puede haber suspensión de actividades y responsabilidad penal del representante legal.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué es el COPASST y cada cuánto debe reunirse?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El Comité Paritario de Seguridad y Salud en el Trabajo (COPASST) es de obligatorio establecimiento en empresas con 10 o más trabajadores. Debe reunirse mensualmente como mínimo y documentar las actas de cada reunión. La ausencia de actas vigentes es uno de los hallazgos más frecuentes en visitas del Ministerio de Trabajo.",
      },
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: 'Los estándares mínimos de la Resolución 0312 explicados por tamaño de empresa',
  datePublished: "2026-07-01",
  dateModified: "2026-07-17",
  author: {
    "@type": "Organization",
    name: "Equipo de Ingeniería IMELECTRIC",
    url: "https://imelectric.es",
  },
  publisher: {
    "@type": "Organization",
    name: "IMELECTRIC",
    logo: {
      "@type": "ImageObject",
      url: "https://imelectric.es/imelectric-logo.png",
    },
  },
  mainEntityOfPage: 'https://imelectric.es/academia/resolucion-0312-estandares-minimos',
  // ARTICLE_META_INJECTED
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://imelectric.es/" },
    { "@type": "ListItem", position: 2, name: "Academia Técnica", item: "https://imelectric.es/academia" },
    { "@type": "ListItem", position: 3, name: 'Resolución 0312', item: 'https://imelectric.es/academia/resolucion-0312-estandares-minimos' },
  ],
};
```

#### `app/academia/firma-electronica-vs-firma-digital-colombia/page.tsx:35-98`

```ts
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Es válida la firma electrónica para los permisos de trabajo en Colombia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. La firma electrónica es válida para permisos de trabajo industriales en Colombia bajo la Ley 527 de 1999 y el Decreto 2364 de 2012, siempre que permita identificar al firmante y detectar alteraciones posteriores al documento. El Decreto 1072 y la Resolución 0312 no exigen firma digital certificada para documentos del SG-SST.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué es la firma digital certificada y cuándo se exige en Colombia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La firma digital certificada usa criptografía PKI con un certificado emitido por una entidad de certificación acreditada ante la ONAC (Certicámara y otras). Equivale a la firma manuscrita en todos los efectos legales. Se exige en actos jurídicos de mayor formalidad como contratos notarizados, ciertos trámites ante entidades públicas y actos societarios. Para permisos de trabajo HSE, la firma electrónica avanzada es suficiente.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué es Ed25519 y qué valor legal tiene en Colombia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ed25519 es un algoritmo de firma criptográfica de clave pública. Genera una firma que, sin la clave privada, es computacionalmente inviable de forjar. Combinada con un hash SHA-256 del documento y un sello de tiempo externo conforme a RFC 3161 (perfil PAdES para PDF), equivale funcionalmente a una firma electrónica avanzada con valor probatorio reforzado ante un tribunal colombiano, sin necesidad de certificado de entidad de certificación.",
      },
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: 'Firma electrónica vs firma digital certificada en Colombia',
  datePublished: "2026-07-01",
  dateModified: "2026-07-17",
  author: {
    "@type": "Organization",
    name: "Equipo de Ingeniería IMELECTRIC",
    url: "https://imelectric.es",
  },
  publisher: {
    "@type": "Organization",
    name: "IMELECTRIC",
    logo: {
      "@type": "ImageObject",
      url: "https://imelectric.es/imelectric-logo.png",
    },
  },
  mainEntityOfPage: 'https://imelectric.es/academia/firma-electronica-vs-firma-digital-colombia',
  // ARTICLE_META_INJECTED
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://imelectric.es/" },
    { "@type": "ListItem", position: 2, name: "Academia Técnica", item: "https://imelectric.es/academia" },
    { "@type": "ListItem", position: 3, name: 'Firma electrónica vs digital', item: 'https://imelectric.es/academia/firma-electronica-vs-firma-digital-colombia' },
  ],
};
```

#### `app/academia/rca-rcm-fmea-diferencias/page.tsx:35-121`

```ts
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuál es la diferencia entre RCA y FMEA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "RCA (Análisis de Causa Raíz) es reactivo: se aplica después de que ocurrió una falla o accidente para encontrar la causa raíz y evitar recurrencia. FMEA (Análisis de Modos y Efectos de Falla) es preventivo: se aplica antes de que ocurran las fallas, identificando qué puede fallar y cuáles serían las consecuencias para diseñar medidas preventivas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué es RCM y cuándo se debe aplicar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "RCM (Reliability-Centered Maintenance o Mantenimiento Centrado en Confiabilidad) es una metodología estratégica para definir el plan de mantenimiento óptimo de un activo, basada en la norma SAE JA1011. Se aplica al diseñar o rediseñar el plan de mantenimiento de un activo, al arrancar una nueva operación, o cuando se quiere justificar inversiones en mantenimiento predictivo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué diferencia hay entre FMEA y FMECA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "FMECA (Failure Mode, Effects and Criticality Analysis) añade al FMEA una evaluación de criticidad: combina la probabilidad de ocurrencia de cada modo de falla con la severidad de su efecto para generar un índice de prioridad de riesgo (RPN). Los modos de falla con mayor RPN son los que deben atenderse primero.",
      },
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: 'RCA, RCM y FMEA: diferencias y cuándo usar cada uno',
  datePublished: "2026-07-01",
  dateModified: "2026-07-17",
  author: {
    "@type": "Organization",
    name: "Equipo de Ingeniería IMELECTRIC",
    url: "https://imelectric.es",
  },
  publisher: {
    "@type": "Organization",
    name: "IMELECTRIC",
    logo: {
      "@type": "ImageObject",
      url: "https://imelectric.es/imelectric-logo.png",
    },
  },
  mainEntityOfPage: 'https://imelectric.es/academia/rca-rcm-fmea-diferencias',
  // ARTICLE_META_INJECTED
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://imelectric.es/" },
    { "@type": "ListItem", position: 2, name: "Academia Técnica", item: "https://imelectric.es/academia" },
    { "@type": "ListItem", position: 3, name: 'RCA, RCM y FMEA', item: 'https://imelectric.es/academia/rca-rcm-fmea-diferencias' },
  ],
};
```

### Duplicación observable

- `Organization` y `WebSite` se renderizan globalmente en todas las páginas.
- La organización se repite como objeto anidado `provider` en los cuatro `SoftwareApplication` y como `author`/`publisher` en los cinco `Article`; no se unifica con `@id`.
- Fix AI, Nexvia y Veriwork se renderizan como `SoftwareApplication` tanto en `/` como en su ruta dedicada, porque ambas montan el mismo componente.
- `sameAs` aparece una sola vez y contiene `https://www.linkedin.com/company/imelectric/`.
- Tipos encontrados: `Organization`, `ContactPoint`, `WebSite`, `SoftwareApplication`, `FAQPage`, `Question`, `Answer`, `Article`, `ImageObject`, `BreadcrumbList` y `ListItem`. No existe `Service`.

---

## 4. Enlaces externos y redes sociales

| Archivo/línea | Destino |
|---|---|
| `components/Footer.tsx:7,148,178` | `https://www.linkedin.com/company/imelectric/?viewAsMember=true` |
| `components/Navbar.tsx:147,229` | `https://www.linkedin.com/company/imelectric/?viewAsMember=true` |
| `components/Footer.tsx:136` | `mailto:contacto@imelectric.es` |
| `components/Footer.tsx:141` | `tel:+573026002877` |
| `components/Footer.tsx:162` | `https://wa.me/573026002877` |
| `components/WhatsAppFloat.tsx:3-9` | `https://wa.me/573026002877?text=Hola%20IMELECTRIC%2C%20necesito%20soporte%20o%20informaci%C3%B3n` |
| `components/ContactModal.tsx:257` | `https://wa.me/573026002877?text=Hola%20IMELECTRIC,%20necesito%20soporte%20técnico%20urgente` |
| `components/ContactModal.tsx:267` | `mailto:contacto@imelectric.es` |
| `components/LeadModal.tsx:218` | `mailto:contacto@imelectric.es` (componente no usado) |
| `app/cookies/page.tsx:139` | `https://policies.google.com/privacy` |
| `app/cookies/page.tsx:148` | `https://privacy.microsoft.com/en-us/privacystatement` |
| `app/terminos/page.tsx:48` | `mailto:contacto@imelectric.es` |
| `app/privacidad/page.tsx:47,123` | `mailto:contacto@imelectric.es` |
| `app/privacidad/page.tsx:51` | `tel:+573026002877` |

Recursos externos no expresados como `href`: `AnalyticsLoader.tsx` carga `https://www.clarity.ms/tag/{clarityProjectId}` y `@next/third-parties` carga GA4.

- No existe ningún `href="#"` literal.
- `href="#como-pensamos-la-ia"` y los fragmentos `/#fixai`, `/#veriwork`, `/#nexvia`, `/#servicios`, `/#nosotros`, `/#productos` apuntan a destinos internos existentes.
- El parámetro `?viewAsMember=true` de LinkedIn es un remanente de vista administrativa; el JSON-LD usa la URL pública limpia.

---

## 5. Formularios y datos capturados

### `ContactModal` — `components/ContactModal.tsx`

Campos:

- `_hp`: honeypot oculto.
- `fullName`: requerido.
- `company`: requerido.
- `email`: requerido, tipo email.
- `phone`: opcional.
- `priority`: obligatorio; valores `papeleo`, `suministros`, `electronica`, `otro`, convertidos mediante `PRIORITY_LABELS`.
- `message`: opcional.
- `consent`: checkbox requerido, inicialmente desmarcado.
- `sourcePage`: no es input; se obtiene de `usePathname()`.

Payload enviado a `POST /api/contact` mediante `lib/contactSubmit.ts`:

```ts
{
  formType: "contact",
  fullName,
  company,
  email,
  phone: phone.trim() || undefined,
  message: message.trim() || undefined,
  priority: priorityLabel,
  sourcePage: pathname || "/",
  consent: authorized,
  _hp: hpValue,
}
```

El backend exige consentimiento para `contact`. Si Resend no está configurado o falla, abre `mailto:`; ese fallback solo incluye nombre, empresa, correo y prioridad, no teléfono, mensaje, origen ni prueba de consentimiento.

### `NormsLibrary` — `components/NormsLibrary.tsx`

Campos: email requerido y checkbox de autorización inicialmente desmarcado. No tiene honeypot.

```ts
{ formType: "norm_updates", email: notifyEmail, consent: true }
```

Destino: `POST /api/contact`. El backend exige email válido y consentimiento. El componente no inspecciona el resultado de `sendWebForm`: en `finally` marca el estado como terminado incluso si hubo error o respuesta 503.

### `LeadModal` — `components/LeadModal.tsx`

Componente actualmente no usado. Campos: `_hp`, `fullName`, `company`, `email`; no tiene checkbox de consentimiento.

```ts
{
  formType: "lead_norm",
  fullName,
  company,
  email,
  normTitle,
  _hp: hpValue,
}
```

Destino: `POST /api/contact`. Tiene fallback `mailto:`. El servidor no exige consentimiento a `lead_norm` y la prueba enviada queda como “no registrado”.

### Backend común

`app/api/contact/route.ts` permite `contact`, `lead_norm` y `norm_updates`; limita a 5 solicitudes por IP en 10 minutos, aplica honeypot global `_hp`, recorta cada valor a 600 caracteres y envía por Resend.

`Fmeca`, `Ishikawa`, `ReliabilityCalculator`, `FalionRoiCalc`, `SSTAcademy` y `BearingAcademy` contienen controles interactivos, pero no `<form>`, no envían payload ni llaman endpoints.

---

## 6. Cifras y claims absolutos restantes

### Texto visible o semántico encontrado por los patrones solicitados

| Archivo/línea | Aparición | Clasificación |
|---|---|---|
| `components/About.tsx:37` | `Garantizamos respuesta logística inmediata...` | Claim comercial absoluto visible |
| `components/SafetyOn.tsx:95` | `software ... que garantiza que cada permiso de trabajo...` | Claim de producto visible |
| `components/SafetyOn.tsx:157` | `...para garantizar personal competente.` | Claim de resultado visible |
| `components/SSTAcademy.tsx:34` | `...para garantizar que, en caso...` | Afirmación técnica visible |
| `components/FixAI.tsx:281` | `Código único de trazabilidad por reporte.` | Claim funcional visible |
| `components/AiPhilosophy.tsx:89` | `...lo único que no se puede automatizar` | Recurso retórico visible |
| `app/veriwork/page.tsx:57` | `firma criptográfica que garantizan la integridad del documento` | FAQ/JSON-LD |
| `app/veriwork/page.tsx:65` | `Decreto Único Reglamentario del Sector Trabajo` | Nombre normativo oficial |
| `app/veriwork/page.tsx:78` | `¿Cómo garantiza Veriwork la integridad...?` | Pregunta FAQ |
| `app/veriwork/page.tsx:81` | `La segregación de roles garantiza...` | Claim funcional FAQ/JSON-LD |
| `app/academia/resolucion-0312-estandares-minimos/page.tsx:158` | `Decreto Único Reglamentario del Sector Trabajo` | Nombre oficial |
| `app/academia/rca-rcm-fmea-diferencias/page.tsx:264` | `estrategia de mantenimiento que garantiza esa función` | Pregunta metodológica visible |
| `app/terminos/page.tsx:84` | `IMELECTRIC no garantiza que los contenidos...` | Limitación legal |
| `components/NormsLibrary.tsx:48,205` | `Decreto Único...` | Nombre oficial |

No se encontraron `infalsificable`, `nadie puede`, `-40%`, `100%` como claim visible ni `0%` como claim visible. `app/academia/rca-rcm-fmea-diferencias/page.tsx` contiene un comentario no visible sobre la eliminación del “80%” sin fuente.

### Porcentajes técnicos, no claims

- `app/globals.css:102-139`: porcentajes de colores y keyframes.
- `components/ui/tabs.tsx:66`, `components/ui/dialog.tsx:64`: `calc(100%-...)`.
- `components/Hero.tsx:73`: dimensiones `min(100%, ...)`.
- `components/ProductEcosystemVisual.tsx:34-176`: numerosos porcentajes de layout SVG/CSS.
- `components/ContactModal.tsx:257`: `%20` de URL codificada.
- `components/BearingAcademy.tsx:130,169`: `width="100%"`; líneas 172-179 usan el operador módulo `%`.

---

## 7. Nombres de producto y legado Safety On

“Safety On” no aparece como texto de marca visible. Permanece en:

- Identificadores y nombres internos: `components/SafetyOn.tsx`, `SafetyOn`, `safetyOnJsonLd`.
- CTA interno: `components/SafetyOnCta.tsx`.
- Imports en `app/page.tsx` y `app/veriwork/page.tsx`.
- Redirects legacy en `next.config.ts`: `/safety-on` y `/safety-on/:path*` redirigen permanentemente a `/veriwork`.
- Referencias históricas en `docs/AUDITORIA_INTEGRAL.md`.

La marca visible en navegación, home, producto, FAQ, CTA, footer y metadata es `Veriwork`. En `/veriwork`, el CTA interno “Ver página completa” enlaza a la misma ruta y es redundante.

El repositorio es el sitio de marketing. No contiene implementaciones verificables de Ed25519, RFC 3161, PAdES, S3/Object Lock o verificación QR. Esos nombres existen como copy/schema, no como integraciones técnicas en este repositorio.

---

## 8. Placeholders y notas internas

No hay coincidencias de `TODO`, `PENDIENTE`, `FIXME`, `[PENDIENTE REVISIÓN LEGAL]`, “Nota interna” o “no publicar” bajo `app/` o `components/`.

Sí existen placeholders normales de inputs, visibles cuando se monta cada control:

- `ContactModal.tsx`: nombre, empresa, email, teléfono, prioridad y mensaje.
- `LeadModal.tsx`: nombre, empresa y correo; no visible actualmente porque el componente no se usa.
- `BearingAcademy.tsx`: referencias, dimensiones y sufijos.
- `Fmeca.tsx`: modo de falla y efecto.
- `Ishikawa.tsx`: “Añadir causa...”.
- `ReliabilityCalculator.tsx`: ejemplo de MTTR.
- `NormsLibrary.tsx`: correo.

Ninguno es una nota interna o placeholder legal.

---

## 9. Imágenes y assets en `public/`

### Imágenes

| Archivo | Tamaño | Formato/dimensiones reales | Referencias | Estado |
|---|---:|---|---|---|
| `public/og-default.png` | 707.608 B | PNG RGB, 1200×630 | Layout, home y Academia | Usado; PNG grande, candidato principal a compresión |
| `public/badges/iso-9001-ll-c.png` | 150.282 B | PNG RGBA, 1024×406 | Footer, Fix AI, Nexvia | Usado; podría reducir resolución/peso |
| `public/imelectric-logo.png` | 89.758 B | **JPEG**, 1024×553, con extensión `.png` | Navbar y JSON-LD | Usado; extensión/formato no coinciden |
| `public/fixai-screen-2.png` | 86.848 B | **JPEG**, 588×1024, con extensión `.png` | Fix AI | Usado |
| `public/fixai-cmms-app.png` | 84.050 B | **JPEG**, 587×1024, con extensión `.png` | Ninguna | No usado; candidato a limpieza |
| `public/fixai-screen-1.png` | 61.059 B | **JPEG**, 546×1024, con extensión `.png` | Hero y Fix AI | Usado |
| `public/fixai-logo.png` | 18.950 B | **JPEG**, 1024×331, con extensión `.png` | Fix AI | Usado |

### SVG y texto

| Archivo | Tamaño | Referencias |
|---|---:|---|
| `public/next.svg` | 1.375 B | Ninguna; remanente starter |
| `public/globe.svg` | 1.035 B | Ninguna; remanente starter |
| `public/file.svg` | 391 B | Ninguna; remanente starter |
| `public/window.svg` | 385 B | Ninguna; remanente starter |
| `public/vercel.svg` | 128 B | Ninguna; remanente starter |
| `public/llms.txt` | 7.009 B | Servido intencionalmente como `/llms.txt`; no requiere import |

### PDFs normativos

Los PDFs existen localmente en `public/norms/` aunque están ignorados por búsquedas que respetan `.gitignore`:

| Archivo | Tamaño | Referencia |
|---|---:|---|
| `decreto-1072-2015.pdf` | 1.565.627 B | `NormsLibrary.tsx` |
| `ley-1581-2012.pdf` | 3.434.853 B | `NormsLibrary.tsx` |
| `resolucion-0312-2019.pdf` | 2.879.925 B | `NormsLibrary.tsx` |
| `resolucion-40117-2024.pdf` | 1.306.547 B | `NormsLibrary.tsx` |
| `resolucion-4272-2021.pdf` | 18.946.992 B | `NormsLibrary.tsx` |

El archivo más pesado es `resolucion-4272-2021.pdf` (~18,1 MiB). Los candidatos no usados son `fixai-cmms-app.png` y los cinco SVG del starter.

---

## 10. Variables de entorno y servicios externos

| Variable | Lectura | Uso |
|---|---|---|
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | `app/layout.tsx:21` | Habilita GA4 después del consentimiento |
| `NEXT_PUBLIC_CLARITY_PROJECT_ID` | `app/layout.tsx:22` | Habilita Clarity después del consentimiento |
| `CONTACT_TO_EMAIL` | `app/api/contact/route.ts:80` | Destinatario de formularios; fallback `contacto@imelectric.es` |
| `RESEND_FROM_EMAIL` | `app/api/contact/route.ts:81` | Remitente; fallback `IMELECTRIC Web <onboarding@resend.dev>` |
| `RESEND_API_KEY` | `app/api/contact/route.ts:82` | Autenticación Resend; si falta, API responde 503 |
| `NODE_ENV` | `proxy.ts:15` | Distingue CSP de desarrollo |

Servicios realmente integrados:

- **Resend:** SDK y `resend.emails.send` en `app/api/contact/route.ts`.
- **Google Analytics 4:** `@next/third-parties/google`, cargado condicionalmente.
- **Microsoft Clarity:** script remoto, cargado condicionalmente.
- **WhatsApp, LinkedIn, teléfono y email:** enlaces, no APIs.
- **Google Fonts:** `next/font/google`.

No existen SDK/llamadas reales a AWS/S3, bases de datos, CRM, pagos, Firebase, Supabase, Ed25519, TSA RFC 3161 ni PAdES.

---

## 11. Estado de dependencias

### `npm audit`

Ejecutado el 17 de julio de 2026:

```text
0 vulnerabilidades:
info 0 · low 0 · moderate 0 · high 0 · critical 0

Dependencias auditadas:
prod 108 · dev 622 · optional 82 · total 765
```

### `npm outdated`

| Paquete | Current | Wanted | Latest |
|---|---:|---:|---:|
| `@next/third-parties` | 16.2.1 | 16.2.10 | 16.2.10 |
| `@radix-ui/react-tabs` | 1.1.13 | 1.1.17 | 1.1.17 |
| `@tailwindcss/postcss` | 4.2.2 | 4.3.3 | 4.3.3 |
| `@types/node` | 20.19.37 | 20.19.43 | 26.1.1 |
| `@types/react` | 19.2.14 | 19.2.17 | 19.2.17 |
| `eslint` | 9.39.4 | 9.39.5 | 10.7.0 |
| `eslint-config-next` | 16.2.1 | 16.2.1 | 16.2.10 |
| `framer-motion` | 12.38.0 | 12.42.2 | 12.42.2 |
| `lucide-react` | 1.0.1 | 1.25.0 | 1.25.0 |
| `radix-ui` | 1.4.3 | 1.6.2 | 1.6.2 |
| `react` | 19.2.4 | 19.2.4 | 19.2.7 |
| `react-dom` | 19.2.4 | 19.2.4 | 19.2.7 |
| `shadcn` | 4.1.0 | 4.13.1 | 4.13.1 |
| `tailwind-merge` | 3.5.0 | 3.6.0 | 3.6.0 |
| `tailwindcss` | 4.2.2 | 4.3.3 | 4.3.3 |
| `typescript` | 5.9.3 | 5.9.3 | 7.0.2 |

Este resultado registra únicamente el estado; no se actualizaron dependencias.
