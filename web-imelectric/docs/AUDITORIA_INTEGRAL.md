# Auditoría integral de IMELECTRIC

**Fecha:** 16 de julio de 2026  
**Proyecto:** `web-imelectric`  
**Dominio:** <https://imelectric.es>  
**Alcance:** arquitectura, infraestructura, contenido, SEO, AEO/GEO, accesibilidad, rendimiento, seguridad, privacidad, formularios y calidad técnica.

## 1. Resumen ejecutivo

IMELECTRIC es un sitio corporativo y educativo construido con Next.js que presenta cinco plataformas SaaS industriales, servicios de ingeniería crítica y una Academia con herramientas y artículos técnicos.

La propuesta central es:

> La IA acelera. La persona decide.

El posicionamiento combina:

- Software industrial con inteligencia artificial.
- Operación offline-first.
- Mantenimiento y confiabilidad.
- Gestión HSE, SST y SG-SST.
- Gestión HSEQ de flotas.
- Cumplimiento normativo colombiano.
- Trazabilidad y firma electrónica.
- Servicios industriales de respuesta crítica.

La arquitectura técnica es moderna y la producción está operativa. Las 21 páginas revisadas respondieron HTTP 200. También funcionan las redirecciones del dominio `www` y de la antigua ruta `/safety-on`.

Los principales problemas no están en el framework, sino en la publicación y gobernanza del contenido:

1. Las páginas de privacidad y términos contienen marcadores y notas internas.
2. `/preview-ecosistema` puede indexarse con una canonical heredada incorrecta.
3. Existen contradicciones normativas y criptográficas.
4. Algunos datos estructurados declaran productos gratuitos cuando requieren cotización.
5. Falta contenido estructurado para artículos, breadcrumbs e imágenes sociales.
6. El repositorio no contiene todos los assets disponibles en producción.
7. ESLint reporta 45 errores y 3 advertencias.
8. Hay problemas de accesibilidad en navegación y modales.

## 2. Dónde está construido

Ruta local del proyecto:

```text
/Users/yesidtarteagac/Downloads/Web Imelectric/web-imelectric
```

### Stack

- Next.js 16.2.10 con App Router.
- React y React DOM 19.2.4.
- TypeScript 5 en modo estricto.
- Tailwind CSS 4.
- Radix UI y componentes shadcn.
- Framer Motion para animaciones.
- Lucide React para iconografía.
- Resend para correo transaccional.
- Google Analytics 4 y Microsoft Clarity, condicionados al consentimiento.

### Modelo de aplicación

- Monolito Next.js.
- React Server Components por defecto.
- Componentes cliente para formularios, navegación, animaciones y herramientas.
- Un único endpoint backend: `POST /api/contact`.
- Sin base de datos.
- Sin autenticación.
- Sin ORM.
- Sin CMS.
- Sin Server Actions.
- Sin tareas programadas.
- Sin almacenamiento persistente en el backend.

El contenido comercial y editorial está escrito directamente en archivos TSX. Esto simplifica el despliegue, pero obliga a editar código para actualizar artículos, productos, normativa o textos legales.

## 3. Dónde funciona

La web funciona públicamente en:

```text
https://imelectric.es
```

### Evidencia observada en producción

- Las 21 páginas públicas devolvieron HTTP 200.
- `https://www.imelectric.es` redirige al dominio sin `www`.
- `/safety-on` redirige a `/veriwork`.
- `robots.txt`, `sitemap.xml` y `llms.txt` están disponibles.
- El servidor público declara `server: LiteSpeed`.
- Se anuncian HTTP/2 y HTTP/3.
- Next.js sirve contenido renderizado dinámicamente.
- Las respuestas HTML usan `private, no-cache, no-store`.
- Los headers de seguridad están activos.

La guía `docs/DEPLOY_HOSTINGER.md` describe un despliegue con:

- Hostinger VPS.
- Node.js.
- PM2.
- Nginx como reverse proxy.
- Certbot/Let's Encrypt.
- Next.js escuchando internamente en el puerto 3000.

La respuesta pública muestra LiteSpeed. Por tanto, la documentación representa el despliegue previsto o una capa interna, pero no demuestra por sí sola la infraestructura actualmente expuesta. Conviene actualizar el documento con la arquitectura real.

## 4. Flujo de funcionamiento

### Renderizado

```text
Navegador
  → HTTPS / servidor frontal
  → proxy.ts de Next.js
  → generación de nonce y CSP
  → RootLayout
  → página Server Component
  → componentes cliente interactivos
```

### Formularios

```text
Formulario
  → POST /api/contact
  → validación
  → honeypot
  → rate limiting
  → Resend
  → correo interno
```

### Analítica

```text
Primera visita
  → banner de cookies
  → aceptar o rechazar
  → localStorage
  → AnalyticsLoader
  → GA4 y Clarity solo si existe consentimiento
```

## 5. Estructura del proyecto

### `app/`

Contiene:

- 21 archivos `page.tsx`.
- Layout raíz.
- CSS global.
- Metadata routes para robots y sitemap.
- API de contacto.

No existen:

- Layouts anidados.
- Rutas dinámicas.
- `loading.tsx`.
- `error.tsx`.
- `global-error.tsx`.
- `not-found.tsx`.
- Route groups.

### `components/`

Contiene 34 componentes:

- Secciones de marketing.
- Presentaciones de productos.
- Herramientas de Academia.
- Formularios.
- Navegación.
- Footer.
- Consentimiento y analítica.
- Componentes UI basados en Radix.

### `lib/`

- `analytics.ts`: eventos de analítica.
- `consent.ts`: lectura y escritura del consentimiento.
- `contactSubmit.ts`: envío común de formularios.
- `rateLimit.ts`: límite de solicitudes en memoria.
- `utils.ts`: utilidades de clases CSS.

### `public/`

El árbol local contiene imágenes, badge ISO, SVG y `llms.txt`.

Producción también sirve:

- `/imelectric-logo.png`.
- PDFs bajo `/norms/`.

Estos recursos no aparecen en el árbol local auditado. Esto impide reproducir completamente el despliegue desde el repositorio.

### `docs/`

- `DEPLOY_HOSTINGER.md`: guía operativa de despliegue.
- `AUDITORIA_INTEGRAL.md`: este documento.

### Configuración

- `next.config.ts`: redirects, trailing slash y headers.
- `proxy.ts`: CSP y nonce.
- `tsconfig.json`: TypeScript estricto.
- `eslint.config.mjs`: reglas de Next.js y React.
- `postcss.config.mjs`: Tailwind/PostCSS.
- `package.json`: scripts y dependencias.

## 6. Inventario completo de rutas

| Ruta | Tipo | Contenido principal | Sitemap | Producción |
|---|---|---|---:|---:|
| `/` | Corporativa | Propuesta de valor, IA, productos, sectores, servicios y Academia | Sí | 200 |
| `/fixai-cmms` | Producto | CMMS offline, OTs, ERP, ISO 14224 y Falion | Sí | 200 |
| `/veriwork` | Producto | Permisos HSE, competencias, firma y normativa | Sí | 200 |
| `/nexvia` | Producto | Gestión HSEQ de flotas, scoring y operación offline | Sí | 200 |
| `/shield-ai` | Producto | SG-SST, brechas, documentos, alertas y firma dual | Sí | 200 |
| `/falion` | Producto | RCA, Weibull, FMECA, RAM, CBM, LCC y RAG | Sí | 200 |
| `/academia` | Hub | Herramientas técnicas y biblioteca normativa | Sí | 200 |
| `/academia/calculadora-mtbf` | Herramienta | Confiabilidad exponencial R(t) | Sí | 200 |
| `/academia/fmeca` | Herramienta | Matriz S×O×D y NPR | Sí | 200 |
| `/academia/ishikawa` | Herramienta | Diagrama editable de 6M | Sí | 200 |
| `/academia/trabajo-en-alturas` | Herramienta | Distancia libre de caída y riesgos | Sí | 200 |
| `/academia/rodamientos` | Herramienta | Referencias, equivalencias, fallas y medición | Sí | 200 |
| `/academia/cmms-vs-gmao` | Artículo | CMMS/GMAO, contratista, operador y ERP | Sí | 200 |
| `/academia/certificacion-trabajo-en-alturas-colombia` | Artículo | Resolución 4272, roles, permisos e inspección | Sí | 200 |
| `/academia/resolucion-0312-estandares-minimos` | Artículo | Estándares mínimos SG-SST | Sí | 200 |
| `/academia/firma-electronica-vs-firma-digital-colombia` | Artículo | Ley 527, Decreto 2364, PKI, Ed25519 y PAdES | Sí | 200 |
| `/academia/rca-rcm-fmea-diferencias` | Artículo | RCA, RCM y FMEA | Sí | 200 |
| `/privacidad` | Legal | Política de tratamiento de datos | No | 200 |
| `/terminos` | Legal | Términos y condiciones | No | 200 |
| `/cookies` | Legal | Cookies, GA4, Clarity y consentimiento | No | 200 |
| `/preview-ecosistema` | Interna | Visualización aislada del portafolio | No | 200 |

Rutas adicionales:

- `POST /api/contact`.
- `/robots.txt`.
- `/sitemap.xml`.
- `/llms.txt`.

## 7. Contenido y propuesta comercial

### Posicionamiento

IMELECTRIC se presenta como una empresa colombiana de software industrial con IA para Colombia y Latinoamérica.

La filosofía editorial evita plantear la IA como sustituto del experto. La promesa es eliminar:

- Digitación repetitiva.
- Reportes manuales.
- Búsqueda normativa.
- Cálculos repetitivos.
- Preparación documental.

La persona conserva:

- Revisión.
- Juicio profesional.
- Aprobación.
- Autorización.
- Firma.

### Audiencias

- Técnicos de mantenimiento.
- Supervisores y planeadores.
- Ingenieros de confiabilidad.
- Contratistas de Oil & Gas.
- Manufactura, minería y energía.
- Coordinadores HSE y SST.
- Responsables de SG-SST.
- Representantes legales.
- Empresas de transporte.
- Conductores, talleres y despachadores.
- Técnicos que seleccionan o inspeccionan rodamientos.

## 8. Productos

### Fix AI

CMMS/PWA orientado a mantenimiento industrial:

- Reporte de campo offline.
- Órdenes de trabajo.
- Fotografías, repuestos y firma.
- Revisión del supervisor.
- Exportación compatible con ERP.
- Referencias a SAP PM e IW38/IW41.
- Backlog y cumplimiento.
- Integración con Falion.

CTA: demo técnica o análisis de viabilidad.

### Falion

Sistema de confiabilidad asistido por IA:

- RCA.
- Weibull.
- FMECA.
- RAM.
- CBM.
- LCC.
- PST-IA.
- Chat RAG.
- Grounding con datos del activo.
- Advertencias de baja confianza.
- Informe Word auditable.
- Flujo de aprobación humana.

Estado declarado: fase de pruebas con un operador real.

CTA: solicitar acceso a pruebas.

### Veriwork

Plataforma HSE:

- Permisos de trabajo.
- Trabajo en alturas.
- Verificación de competencias.
- Alertas normativas.
- Firma electrónica.
- Sello de tiempo.
- QR de verificación.
- Segregación de roles.
- Trazabilidad.

CTA: auditoría de viabilidad HSE.

### Nexvia

Gestión HSEQ de flotas:

- Línea HSEQ.
- Talleres.
- Gestión de personal.
- Vehículos eléctricos.
- Operación offline.
- Inspección preoperacional.
- Evaluación de fatiga.
- Scoring mediante sensores del teléfono.
- Pasaporte digital del vehículo.
- Encuestas QR.

CTA: demo y cotización.

### Shield AI

Plataforma SG-SST:

- Diagnóstico contra Resolución 0312.
- Mapa de brechas.
- Generación de borradores documentales.
- Alertas de vencimiento.
- Firma dual.
- Tablero de cumplimiento.

CTA: diagnóstico gratuito.

### Servicios industriales

- Localización y suministro urgente de repuestos.
- Logística de emergencia.
- Reparación de PLC, variadores y tarjetas.
- Recuperación de activos.
- Ingeniería inversa.

## 9. Academia

### Herramientas

#### Calculadora MTBF

La página comunica MTBF, MTTR, disponibilidad y confiabilidad. Sin embargo, la herramienta implementada únicamente calcula:

```text
R(t) = e^(-t/MTBF)
```

Recibe un MTBF ya conocido y un tiempo de misión. No calcula MTBF, MTTR ni disponibilidad desde datos de fallas.

#### FMECA

- Modo de falla.
- Consecuencia.
- Severidad.
- Ocurrencia.
- Detección.
- NPR = S × O × D.
- Clasificación por umbrales.

#### Ishikawa

Diagrama editable basado en:

- Máquina.
- Método.
- Mano de obra.
- Material.
- Medición.
- Medio ambiente.

#### Trabajo en alturas

- Longitud de eslinga.
- Elongación del absorbedor.
- Estatura al anillo.
- Factor de seguridad.
- Riesgo de péndulo.
- Factor de caída.
- Rescate.

#### Rodamientos

- Búsqueda por referencia o dimensiones.
- Equivalencias entre fabricantes.
- Nomenclatura ISO.
- Sufijos.
- Medición.
- Simulador de calibrador.
- Checklist.
- Modos de falla ISO 15243.
- Comparación de fabricantes.

### Artículos SEO

Los cinco artículos atacan búsquedas informativas con intención comercial:

1. CMMS vs GMAO.
2. Certificación de trabajo en alturas.
3. Resolución 0312.
4. Firma electrónica vs firma digital.
5. RCA, RCM y FMEA.

Todos conectan contenido informativo con Fix AI, Falion, Veriwork o Shield AI.

### Biblioteca normativa

Incluye referencias a:

- Resolución 4272 de 2021.
- Decreto 1072 de 2015.
- Resolución 0312 de 2019.
- Ley 1581 de 2012.
- RETIE.
- ISO 3941:2026.

Los PDFs probados existen en producción, aunque no están versionados en el repositorio. Uno de ellos pesa aproximadamente 18,9 MB y tardó más de 20 segundos en descargarse durante la comprobación.

## 10. Navegación, CTAs y conversión

### Navbar

Incluye:

- Cinco plataformas.
- Servicios industriales.
- Sectores.
- Academia.
- LinkedIn.
- Contacto.

### Footer

Incluye:

- Plataformas.
- Knowledge Hub.
- Empresa.
- Contacto.
- WhatsApp.
- Ubicación.
- Páginas legales.
- Badge ISO 9001.

### CTAs

- Solicitar demo.
- Demo técnica.
- Análisis técnico.
- Auditoría HSE.
- Diagnóstico SG-SST.
- Acceso a pruebas.
- Consultar componente.
- Agendar diagnóstico.
- Descargar norma.
- Suscribirse a actualizaciones.

### Debilidades de conversión

- Todos los productos usan un formulario general.
- El formulario no conserva la página o producto de origen.
- No captura mensaje libre.
- No captura teléfono.
- No captura tamaño de flota.
- No captura cantidad de técnicos o trabajadores.
- No diferencia correctamente Falion, flotas, HSE y SG-SST.
- Algunos formularios no muestran autorización visible de datos.
- `LeadModal` existe, pero no está conectado a la biblioteca actual.

## 11. Estrategia SEO actual

### Clústeres

#### Mantenimiento y confiabilidad

- CMMS.
- GMAO.
- Mantenimiento industrial.
- SAP PM.
- ISO 14224.
- MTBF y MTTR.
- RCA.
- RCM.
- FMEA/FMECA.
- Weibull.

Productos asociados: Fix AI y Falion.

#### HSE, SST y SG-SST

- Permisos de trabajo.
- Trabajo en alturas.
- Resolución 4272.
- Resolución 0312.
- Decreto 1072.
- Firma electrónica.
- Cumplimiento SG-SST.

Productos asociados: Veriwork y Shield AI.

#### Flotas y transporte

- Gestión HSEQ.
- Inspección preoperacional.
- Fatiga.
- PESV.
- Mantenimiento vehicular.
- Transporte colombiano.

Producto asociado: Nexvia.

### Embudo orgánico

- **TOFU:** herramientas y artículos.
- **MOFU:** comparativas, FAQs, normativa y casos de uso.
- **BOFU:** páginas de producto, demos, auditorías y diagnósticos.

El planteamiento es correcto. La Academia atrae consultas educativas y deriva tráfico hacia productos.

### Fortalezas SEO

- Dominio canónico definido.
- Metadata específica en las rutas principales.
- H1 único en la mayoría de páginas.
- Breadcrumbs visuales.
- Enlaces cruzados entre Academia y productos.
- FAQPage con contenido visible equivalente.
- Sitemap.
- Robots.
- Redirects permanentes.
- `llms.txt`.
- Acceso explícito para crawlers de IA.

### Problemas SEO

#### Indexabilidad

- `/preview-ecosistema` no tiene `noindex`.
- Hereda la canonical `/` del layout.
- Privacidad y términos son indexables aunque están incompletos.
- Legales indexables no aparecen en el sitemap.

#### Open Graph

No existen imágenes Open Graph o Twitter declaradas. Las páginas pueden compartirse sin miniatura adecuada en LinkedIn, WhatsApp y redes.

#### Datos estructurados

- Falion se declara globalmente en el layout.
- `/falion` vuelve a declarar el mismo producto.
- Otros productos aparecen acompañados por schema de Falion sin relación directa.
- Los artículos no usan `Article` o `BlogPosting`.
- No existe `BreadcrumbList`.
- `Organization.sameAs` está vacío.
- Falta schema `WebSite`.

#### Precios

Fix AI, Veriwork y Nexvia declaran ofertas con:

```json
{
  "price": "0",
  "availability": "InStock"
}
```

El contenido comercial solicita cotización. Estos datos pueden hacer que Google interprete incorrectamente los productos como gratuitos.

#### Titles

Varios titles superan una longitud razonable para resultados de búsqueda y pueden truncarse.

#### Canibalización

`/academia` renderiza herramientas completas que también tienen URLs dedicadas. El hub y las páginas hijas pueden competir por las mismas palabras clave.

#### Indexación observada

Las búsquedas públicas realizadas devolvieron principalmente la home. No se observaron resultados independientes para los artículos nuevos consultados.

Esto no sustituye Search Console. Debe verificarse:

- URLs descubiertas.
- URLs rastreadas.
- URLs indexadas.
- Canonical elegida por Google.
- Consultas e impresiones.
- Cobertura de sitemap.

## 12. AEO y GEO

### Fortalezas

- `llms.txt` describe empresa, productos, audiencias y URLs.
- Robots permite GPTBot, ClaudeBot, PerplexityBot y otros.
- FAQs ofrecen respuestas directas y citables.
- El contenido utiliza normativa y lenguaje técnico especializado.
- La filosofía de IA está claramente definida.

### Debilidades

- Falta autoría.
- Faltan fechas de publicación y actualización.
- Faltan fuentes enlazadas.
- Faltan schemas `Article` y `BreadcrumbList`.
- `sameAs` no consolida perfiles sociales.
- Existen claims absolutos sin evidencia.
- Hay contradicciones que pueden reducir confianza de motores y asistentes.

## 13. Seguridad

### Controles positivos

- CSP con nonce criptográfico por request.
- `strict-dynamic`.
- HSTS.
- `X-Content-Type-Options: nosniff`.
- `X-Frame-Options: DENY`.
- Referrer Policy.
- Permissions Policy.
- Escape HTML en correos.
- Allowlist de tipos de formulario.
- Honeypot.
- Rate limiting.
- IP enmascarada en logs.
- Analítica condicionada al consentimiento.

### Limitaciones

#### Rate limit

El límite se guarda en un `Map` en memoria:

- Se pierde al reiniciar.
- No se comparte entre instancias.
- No es adecuado para despliegues distribuidos.
- Depende de que `X-Forwarded-For` sea saneado por el proxy.

#### Payload

Cada campo se recorta a 600 caracteres, pero el cuerpo JSON completo se procesa antes de aplicar ese límite. No existe límite explícito de `Content-Length`.

#### CAPTCHA

No hay CAPTCHA ni mecanismo de reputación. El honeypot puede detener bots simples, no abuso automatizado dirigido.

#### CSP

`style-src 'unsafe-inline'` reduce la protección frente a inyección de estilos. Actualmente puede ser necesario por la UI y las animaciones, pero debe considerarse una concesión.

## 14. Privacidad y cookies

### Correcto

- GA4 y Clarity no cargan antes del consentimiento.
- El usuario puede aceptar o rechazar.
- El consentimiento se guarda en localStorage.
- La política explica las herramientas utilizadas.

### Problemas

- No existe un centro de preferencias visible.
- Retirar el consentimiento requiere manipular almacenamiento manualmente.
- Algunos formularios no muestran autorización expresa.
- La analítica de leads puede enviar el dominio corporativo del correo.
- La política afirma que no se envían ciertos datos, por lo que se debe revisar coherencia entre código y texto.

## 15. Accesibilidad

### Alta prioridad

#### Menú de escritorio

El mega-menú se abre principalmente mediante `hover`:

- No tiene estado de apertura por teclado.
- No declara `aria-expanded`.
- No declara `aria-haspopup`.
- Puede fallar en dispositivos táctiles con viewport de escritorio.

#### LeadModal

El modal manual:

- No implementa focus trap.
- No mueve el foco inicial.
- No restaura el foco.
- No cierra con Escape.
- No bloquea el scroll del documento.

### Formularios

- Se usa `window.alert()` como feedback.
- Faltan mensajes inline con `aria-live`.
- Algunas validaciones dependen de JavaScript sin estado de error visible por campo.

## 16. Rendimiento

### Problemas observados por código

- La lectura del nonce en el layout fuerza renderizado dinámico.
- Las páginas comerciales no aprovechan caché HTML pública.
- Se cargan Inter, Geist Sans y Geist Mono.
- Geist Sans no parece utilizarse.
- Existen PNG grandes servidos con `unoptimized`.
- Algunas imágenes no declaran `sizes`.
- Framer Motion añade JavaScript al hero.
- Enlaces internos usan `<a>` en lugar de `next/link`.
- Los PDFs normativos son pesados.

### Recomendaciones

- Medir Lighthouse y Core Web Vitals en producción.
- Eliminar la fuente no utilizada.
- Convertir imágenes a WebP/AVIF.
- Activar optimización de Next Image.
- Añadir `sizes`.
- Comprimir o dividir PDFs.
- Evaluar CSP basada en hash o una estrategia que permita prerender.
- Sustituir animaciones simples por CSS cuando sea posible.
- Usar `Link` para navegación interna.

## 17. Calidad técnica

### TypeScript

Resultado:

```text
0 errores
```

### ESLint

Resultado:

```text
48 hallazgos
45 errores
3 warnings
```

Categorías:

- Entidades sin escapar en JSX.
- Enlaces internos con `<a>`.
- Estado actualizado sincrónicamente dentro de effects.
- Variable que debería ser `const`.
- Imports o constantes no utilizados.
- Comentario JSX colocado como nodo de texto.

El proyecto puede compilar por tipos, pero no cumple actualmente su validación ESLint.

## 18. Inconsistencias de contenido

### Naming

- `Fix AI`.
- `FixAI`.
- `FixAI CMMS`.
- El componente `SafetyOn` representa ahora a Veriwork.
- Se alternan “Knowledge Hub”, “Academia Técnica” y “Ecosistema de Academia”.
- HSE, HSEQ, SST y SG-SST se usan ocasionalmente como equivalentes.

### Número de productos

La home habla de cuatro plataformas, pero el ecosistema contiene cinco:

1. Fix AI.
2. Falion.
3. Veriwork.
4. Nexvia.
5. Shield AI.

### Criptografía

Requiere corrección:

- SHA-256 es una función hash, no una firma.
- Ed25519 es un esquema de firma, no un “hash Ed25519”.
- RFC 3161 define sellado de tiempo.
- PAdES es un conjunto de perfiles para firmas PDF.
- Una clave por empresa no identifica automáticamente a la persona firmante.

### Resolución 0312

La segmentación no siempre considera correctamente:

- Número de trabajadores.
- Clase de riesgo.
- Tratamiento específico para riesgos IV y V.

### Retención documental

Se mezclan:

- 20 años.
- 21 años.
- Régimen 7/21/60.
- Hasta 60 años.

Cada cifra debe vincularse a una categoría documental y fuente jurídica concreta.

### Claims que requieren evidencia

- “Único software”.
- “Infalsificable”.
- “Blindaje legal”.
- “Valor legal”.
- “Nadie puede alterar”.
- “De la falla al informe en 60 segundos”.
- “Diagnóstico en menos de 30 minutos”.
- “Operativo en días”.
- Porcentajes de incumplimiento.
- Causas de accidentalidad sin fuente.

Se recomienda:

- Añadir fuente verificable.
- Publicar metodología.
- Aportar certificación o arquitectura.
- O cambiar a formulaciones como “diseñado para apoyar”.

### ISO 9001

Se muestra un badge, pero falta:

- Número de certificado.
- Entidad certificadora.
- Alcance.
- Fecha de vigencia.
- Enlace de validación.

## 19. Priorización

### P0 — Antes de seguir indexando

1. Finalizar privacidad y términos.
2. Eliminar notas internas y placeholders.
3. Aplicar `noindex` temporal a legales incompletos.
4. Aplicar `noindex, nofollow` a `/preview-ecosistema`.
5. Definir una canonical propia o retirar la ruta de producción.

### P1 — Confianza, SEO y cumplimiento

1. Consolidar JSON-LD de Falion.
2. Retirar ofertas con precio cero.
3. Corregir terminología criptográfica.
4. Revisar Resolución 0312 y retención documental.
5. Moderar o sustentar claims.
6. Añadir imágenes Open Graph.
7. Completar `Organization.sameAs`.
8. Sincronizar PDFs y logo con el repositorio.
9. Verificar el certificado ISO publicado.

### P2 — Contenido, conversión y accesibilidad

1. Convertir `/academia` en hub de resúmenes y enlaces.
2. Añadir `Article`, autor, fechas y fuentes.
3. Añadir `BreadcrumbList`.
4. Mostrar los artículos en el hub.
5. Capturar producto y origen en formularios.
6. Añadir autorización de tratamiento.
7. Corregir menú por teclado.
8. Migrar LeadModal a Radix Dialog.
9. Sustituir alerts por feedback accesible.
10. Resolver todos los errores ESLint.

### P3 — Rendimiento y mantenibilidad

1. Eliminar fuentes no utilizadas.
2. Optimizar imágenes.
3. Reducir JavaScript de animaciones.
4. Usar `next/link`.
5. Comprimir PDFs.
6. Añadir páginas de error, carga y 404.
7. Actualizar README y documentación de despliegue.
8. Eliminar componentes y dependencias huérfanas.

## 20. Plan recomendado

### Fase 1: saneamiento

- Legales.
- Preview.
- Claims.
- Normativa.
- Schemas engañosos.
- Assets faltantes.

### Fase 2: SEO técnico

- Open Graph.
- Article.
- BreadcrumbList.
- Autoría y fechas.
- Titles.
- Sitemap con fechas reales.
- Enlazado de Academia.

### Fase 3: conversión

- Formularios por producto.
- Tracking de origen.
- Mensaje libre.
- Consentimiento.
- Estados de éxito y error.
- Integración con CRM o almacenamiento seguro si es necesario.

### Fase 4: calidad

- ESLint.
- Accesibilidad.
- Imágenes.
- Fuentes.
- Navegación.
- Error boundaries.
- Rate limit persistente.
- Límite de payload.

### Fase 5: medición

- Google Search Console.
- Bing Webmaster Tools.
- GA4 con eventos de conversión.
- Clarity.
- Core Web Vitals.
- Posiciones por clúster.
- Leads por producto y página de origen.

## 21. Veredicto final

IMELECTRIC tiene una propuesta diferenciada, una arquitectura moderna y una estrategia SEO basada en clústeres con buen potencial. El sitio ya funciona públicamente y presenta una oferta amplia.

Sin embargo, todavía no debe considerarse editorialmente terminado. Los mayores riesgos son:

- Contenido legal incompleto.
- Contradicciones normativas.
- Claims técnicos y jurídicos absolutos.
- Datos estructurados inconsistentes.
- Assets de producción no reproducibles.
- Accesibilidad y lint pendientes.

La prioridad debe ser consolidar confianza y exactitud antes de ampliar contenido o invertir en adquisición. Después de ese saneamiento, la Academia puede convertirse en el principal motor de crecimiento orgánico para los cinco productos.

## 22. Evidencias principales

- `app/layout.tsx`
- `app/page.tsx`
- `app/sitemap.ts`
- `app/robots.ts`
- `app/api/contact/route.ts`
- `app/privacidad/page.tsx`
- `app/terminos/page.tsx`
- `app/cookies/page.tsx`
- `app/preview-ecosistema/page.tsx`
- `components/Navbar.tsx`
- `components/Footer.tsx`
- `components/ContactModal.tsx`
- `components/LeadModal.tsx`
- `components/AnalyticsLoader.tsx`
- `components/ConsentBanner.tsx`
- `components/FixAI.tsx`
- `components/Falion.tsx`
- `components/SafetyOn.tsx`
- `components/Nexvia.tsx`
- `components/ShieldAI.tsx`
- `components/NormsLibrary.tsx`
- `components/ReliabilityCalculator.tsx`
- `components/Fmeca.tsx`
- `components/Ishikawa.tsx`
- `components/SSTAcademy.tsx`
- `components/BearingAcademy.tsx`
- `lib/consent.ts`
- `lib/rateLimit.ts`
- `proxy.ts`
- `next.config.ts`
- `public/llms.txt`
- `docs/DEPLOY_HOSTINGER.md`

---

Esta auditoría combina inspección estática del repositorio, validación de TypeScript y ESLint, comprobación HTTP de producción y revisión pública de indexación. No sustituye una revisión jurídica, una auditoría de seguridad ofensiva, datos de Google Search Console ni mediciones de usuarios reales.
