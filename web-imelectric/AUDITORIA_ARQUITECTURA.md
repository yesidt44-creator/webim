# Auditoría de arquitectura e implementación

**Proyecto:** web-imelectric  
**Fecha de medición:** 17 de julio de 2026  
**Alcance:** sitio web y backend incluidos en este repositorio. No se auditó la arquitectura interna de Fix AI, Falion, Veriwork, Nexvia o Shield AI porque no está presente aquí.

## 1. Resumen ejecutivo

El sitio tiene una base técnica sana —Next.js actualizado, build limpio, CSP con nonce, consentimiento previo a analítica y cero vulnerabilidades productivas detectadas— y en esta medición cargó bastante más rápido que Tractian, Fracttal y Verifty. Sin embargo, todavía no alcanza la madurez operativa de un SaaS B2B serio: el único endpoint tiene validación débil y rate limiting evadible/no distribuido, no hay healthcheck ni observabilidad estructurada, y toda la web depende de renderizado dinámico. En frontend, el home falla el objetivo de LCP móvil, el modal de contacto tiene una infracción crítica de accesibilidad y el ecosistema pierde legibilidad a 375 px. Los PDFs se sirven correctamente, pero sin una política de caché competitiva.

## 2. Método y límites

- Inspección estática de rutas, componentes, dependencias, configuración, variables de entorno y documentación de despliegue.
- `npm run lint`, `npm run build` y `npm audit --omit=dev`.
- Lighthouse móvil sobre producción (`https://imelectric.es` y `/fixai-cmms`) y una ejecución equivalente por competidor, desde el mismo equipo y en la misma ventana temporal.
- axe-core 4.10.3 con reglas WCAG 2 A/AA y 2.1 AA, abriendo cada componente interactivo en un viewport de 375 × 812.
- Descarga real y revisión de headers del PDF de 18.946.992 bytes; comparación con un PDF público de Fracttal de tamaño similar.

Los resultados de Lighthouse son de laboratorio y de una sola ejecución: sirven para detectar riesgos y comparar esta muestra, no sustituyen datos de campo CrUX/RUM ni percentiles de varias regiones. Lighthouse no mide INP real sin interacciones de usuarios; se usa TBT únicamente como señal de riesgo y la estimación de INP debe confirmarse en producción con RUM.

### Escala de severidad

- **Crítico:** puede invalidar una función principal, el cumplimiento AA o una protección de seguridad.
- **Mayor:** afecta confiabilidad, escalabilidad, rendimiento o percepción profesional de forma clara.
- **Menor:** deuda localizada, optimización o falta documental sin fallo inmediato.

---

## A. Backend e infraestructura

### A1. Superficie de API

**[Menor] Solo existe `POST /api/contact`.**  
La búsqueda de `app/api/**` devuelve únicamente `app/api/contact/route.ts`; no hay endpoints de producto, autenticación, estado o documentación de API. Esto es coherente con un sitio de marketing, pero el repositorio no aporta evidencia técnica de que detrás de las cinco ofertas exista un producto SaaS operativo. No implica que no exista: solo que no puede comprobarse aquí.

**[Mayor] La validación del endpoint no es robusta ni tipada.**  
`app/api/contact/route.ts:8-12` convierte cualquier valor a texto con `String(...)` y aplica el mismo límite de 600 caracteres a todos los campos. Esto evita valores ilimitados después del parseo, pero:

- no valida que el body sea un objeto plano;
- no limita el tamaño del request antes de `request.json()` (`app/api/contact/route.ts:45-49`);
- acepta objetos/arreglos en campos y los convierte a `"[object Object]"` o texto equivalente;
- usa una regex de email mínima y permite hasta 600 caracteres (`app/api/contact/route.ts:91-94`, `115-118`);
- `priority` acepta cualquier texto no vacío, no uno de los valores permitidos por negocio (`app/api/contact/route.ts:129-132`);
- teléfono, nombre, empresa, mensaje, URL de origen y título de norma no tienen tipos, formatos ni límites específicos;
- no hay un esquema único compartido entre frontend y backend.

La salida HTML sí se escapa correctamente en `app/api/contact/route.ts:14-20`, por lo que no se observó inyección HTML en el correo.

**[Crítico] `lead_norm` permite capturar datos personales sin consentimiento.**  
El backend solo exige `consent` para `contact` y `norm_updates`; la rama `lead_norm` continúa aunque sea falso (`app/api/contact/route.ts:113-170`). El componente hoy no usado `components/LeadModal.tsx:34-52` tampoco envía consentimiento. Esto contradice la regla obligatoria del proyecto para formularios de datos personales. Aunque el flujo visible actual descarga PDFs directamente, el endpoint sigue aceptando ese payload.

### A2. Errores y logging

**[Menor, positivo] Los 500/502 no exponen stack trace al cliente.**  
Los clientes reciben mensajes genéricos en `app/api/contact/route.ts:197-204`. El `503` sí revela el nombre de la variable ausente (`RESEND_API_KEY`) en `app/api/contact/route.ts:174-182`; no expone el secreto, pero divulga un detalle interno innecesario.

**[Mayor] No hay logging estructurado ni observabilidad.**  
Solo se usan `console.warn` y `console.error` (`app/api/contact/route.ts:30`, `58`, `197`, `203`). Los mensajes no tienen JSON, request/correlation ID, latencia, resultado del proveedor, entorno ni integración visible con alertas/Sentry/OpenTelemetry. Los errores de Resend se escriben como objetos arbitrarios, lo que dificulta búsquedas y puede registrar más detalle del proveedor del necesario.

**[Mayor] La llamada a Resend no tiene timeout ni cancelación.**  
`resend.emails.send(...)` en `app/api/contact/route.ts:186-195` puede mantener la petición abierta si el proveedor se degrada. No se observan `AbortSignal`, timeout, reintentos controlados ni cola asíncrona.

### A3. Rate limiting

**[Mayor] El límite se pierde con restart y se divide en cluster.**  
`lib/rateLimit.ts:13` usa un `Map` en memoria. Se reinicia con cada restart/deploy/crash de PM2. Con N procesos, cada proceso acepta 5 solicitudes por ventana, por lo que el límite efectivo puede acercarse a `5 × N` y variar según el balanceo. Tampoco se comparte entre servidores. Esta limitación ya está comentada parcialmente en `lib/rateLimit.ts:1-4`, pero debe quedar explícita en la arquitectura de producción.

**[Crítico] El límite puede evadirse manipulando `X-Forwarded-For`.**  
`lib/rateLimit.ts:55-59` toma el primer valor de `x-forwarded-for`. La configuración Nginx documentada usa `$proxy_add_x_forwarded_for` (`docs/DEPLOY_HOSTINGER.md:133-137`), que conserva valores enviados por el cliente y agrega la IP real al final. Un atacante puede variar el primer valor y obtener buckets nuevos. Debe confiarse solo en un proxy conocido que reemplace el header o extraer la IP desde una posición/proxy confiable.

**[Menor] El rate limit se consume antes de validar JSON y honeypot.**  
`app/api/contact/route.ts:27-60` permite que tráfico inválido agote las cinco solicitudes de una IP compartida. En una red empresarial/NAT, un usuario o bot puede bloquear temporalmente a otros visitantes.

### A4. Variables y secretos

**[Menor, positivo] `.env.example` está actualizado para las variables usadas por la app.**  
Incluye `NEXT_PUBLIC_GA_MEASUREMENT_ID`, `NEXT_PUBLIC_CLARITY_PROJECT_ID`, `RESEND_API_KEY`, `RESEND_FROM_EMAIL` y `CONTACT_TO_EMAIL` (`.env.example:1-15`). Son las mismas variables propias encontradas en `app/layout.tsx:21-22` y `app/api/contact/route.ts:80-82`. `NODE_ENV` es provista por el runtime.

**[Menor, positivo] No se encontraron secretos hardcodeados.**  
La búsqueda de patrones comunes de OpenAI, Google, AWS, GitHub, Slack y claves privadas no produjo coincidencias en el repositorio. Los correos y fallbacks visibles no son secretos. Esto no sustituye un secret scanner en CI ni una revisión del historial Git.

### A5. Proceso, disponibilidad y caché

**[Menor, positivo con reserva] PM2 está documentado con recuperación automática.**  
`docs/DEPLOY_HOSTINGER.md:101-118` usa `pm2 start`, `pm2 save` y `pm2 startup`. PM2 reinicia por defecto un proceso que termina por crash; `--watch` no es necesario para recuperación y no se recomienda como mecanismo de despliegue en producción. No hay `ecosystem.config.*`, por lo que límites de memoria, backoff, número de instancias, rotación de logs y variables dependen de configuración manual no versionada. El repositorio no permite confirmar el estado real del daemon en el VPS.

**[Mayor] No existe healthcheck ni supervisión externa versionada.**  
No hay `/api/health`, Docker healthcheck, workflow de uptime ni configuración de monitor. Comprobar `/` mezcla salud del proceso con renderizado completo; tampoco valida Resend. PM2 puede reiniciar un crash, pero no detecta necesariamente un proceso vivo y bloqueado ni la caída funcional del proveedor.

**[Mayor] Todas las páginas de contenido se renderizan dinámicamente.**  
El build marca `ƒ` todas las páginas salvo `robots.txt` y `sitemap.xml`. La lectura de `headers()` en el layout (`app/layout.tsx:101`) para propagar el nonce hace dinámica toda la aplicación. Esto elimina la principal ventaja de caché estática/CDN para un sitio mayoritariamente editorial, aumenta dependencia del proceso Node y ayuda a explicar TTFB. La CSP con nonce es una buena práctica, pero el diseño actual paga ese costo en todas las rutas.

**[Menor, positivo] Build y dependencias productivas sanas.**  
`next build` compiló y generó 27 páginas sin errores. `npm audit --omit=dev` reportó **0 vulnerabilidades**.

---

## B. Frontend y rendimiento

### B1. Core Web Vitals y bundle

#### Producción, Lighthouse móvil

| Ruta | Performance | FCP | LCP | CLS | TBT / señal INP | JS transferido | Peso total |
|---|---:|---:|---:|---:|---:|---:|---:|
| `/` | 83 | 1,40 s | **3,80 s** | 0 | 21 ms / riesgo bajo | 259 KiB | 576 KiB |
| `/fixai-cmms` | 95 | 1,57 s | **2,02 s** | 0 | 7 ms / riesgo bajo | 203 KiB | 556 KiB |

**[Mayor] El home no cumple el objetivo LCP “bueno” de 2,5 s.**  
El elemento LCP es el `<h1>` de `components/Hero.tsx:19-22`; Lighthouse midió 3,80 s. El producto sí quedó en rango bueno. CLS es excelente en ambas rutas.

**INP estimado:** por TBT de 21 ms y 7 ms, ambas rutas tienen una señal de laboratorio favorable y es razonable esperar categoría “buena” (<200 ms) en dispositivos comparables. No es un INP medido; debe instrumentarse RUM y reportarse p75 antes de afirmarlo como dato real.

**[Mayor] Hay JavaScript innecesario para una página mayoritariamente estática.**  
Lighthouse estima 73 KiB de JS no usado en home y 51 KiB en producto. El home transfiere 259 KiB de scripts y ejecuta unos 2,4 s de trabajo de main thread bajo la simulación. `components/Hero.tsx:1-4` convierte todo el hero en cliente solo para dos animaciones de entrada con Framer Motion; Navbar, modal, banner, analítica y varias secciones cliente amplían el árbol hidratado.

**[Menor] TTFB y render delay todavía tienen margen.**  
El documento raíz tardó 357 ms en la medición directa de Lighthouse, y el desglose simulado atribuyó una parte relevante del LCP al TTFB y al render delay del texto. El renderizado dinámico global y la animación inicial son candidatos claros, sin concluir causalidad exclusiva.

### B2. Imágenes

**[Menor, positivo] No hay `<img>` crudos y todas las imágenes visibles usan `next/image` con dimensiones.**  
Se encontraron usos en `Navbar`, `Footer`, `FixAI` y `Nexvia`, todos con `width`/`height`. Las imágenes sin `priority` conservan lazy loading por defecto.

**[Mayor] Hay cargas prioritarias y desoptimización que no corresponden a todas las páginas.**

- El logo de Fix AI usa `priority` y `unoptimized` (`components/FixAI.tsx:119-126`). En el home aparece muy por debajo del fold, por lo que no debería competir con recursos críticos.
- Los screenshots below the fold usan lazy loading, pero `unoptimized` (`components/FixAI.tsx:244-263`), renunciando a formatos/tamaños adaptativos.
- El logo del Navbar también usa `unoptimized` (`components/Navbar.tsx:45-52`) y envía el archivo original aunque se renderiza mucho más pequeño.

No es un problema de CLS porque las dimensiones están declaradas, sino de bytes y priorización.

### B3. Accesibilidad de componentes interactivos

Auditoría axe-core scoped al componente abierto:

**[Crítico] Modal de contacto: el selector no tiene nombre accesible.**  
axe reportó `button-name` crítico sobre el trigger `.w-fit`, correspondiente a `SelectTrigger` (`components/ContactModal.tsx:175-180`; clase base en `components/ui/select.tsx:43-48`). El `<label>` visual no está asociado mediante `htmlFor`/`id` ni `aria-labelledby`. Un lector de pantalla encuentra un botón sin propósito discernible.

**[Mayor] Modal de contacto: seis fallos de contraste AA.**  
Incluyen los textos “opcional”, placeholder del selector, texto legal inferior, botón verde de WhatsApp y correo (`components/ContactModal.tsx:158-160`, `175-180`, `238-241`, `256-269`). Las relaciones observadas van aproximadamente de 2,65:1 a 4,23:1 donde se requiere 4,5:1.

**[Mayor] Menú móvil: dos encabezados de sección fallan contraste.**  
“Soluciones Digitales con IA” y “Servicios” usan texto de 10 px `text-slate-400` sobre blanco (`components/Navbar.tsx:181`, `199`), con 2,63:1.

**[Menor, positivo] Banner de consentimiento: sin violaciones automáticas AA en el scope auditado.**  
`components/ConsentBanner.tsx:41-73` expone rol, nombre y controles discernibles. Al ser no modal, no requiere secuestro de foco.

Además de axe, los labels de texto del formulario no tienen asociación explícita con sus inputs (`components/ContactModal.tsx:114-179`). Algunos controles obtienen nombre por otros mecanismos, pero la asociación debería ser inequívoca y consistente.

### B4. ESLint

**[Menor, positivo] Estado actual: 0 errores y 0 warnings.**  
`npm run lint` terminó con código 0 y sin salida de diagnósticos. No se aplicó auto-fix ni se modificó código.

### B5. Responsive a 375 px

**[Menor, positivo] No hay overflow horizontal.**  
La medición DOM dio `scrollWidth - clientWidth = 0`; el hero y el visual permanecen dentro de 375 px. El visual ocupa 343 × 236 px.

**[Mayor] El ecosistema cabe, pero deja de ser legible como pieza de producto.**  
Los textos de las cuatro tarjetas se renderizan a **7,68 px** y el bloque inferior a 9,92 px (`components/ProductEcosystemVisual.tsx:30-51`, `170-184`). Las tarjetas no se solapan fuera del contenedor, pero “caber” no equivale a verse bien: el usuario debe ampliar para leerlas.

**[Mayor] El hero móvil es excesivamente alto y retrasa la evidencia visual.**  
El hero medido ocupa aproximadamente 1.198 px de alto; el ecosistema empieza cerca de `y=1000`. En el primer viewport predominan titular, párrafo y CTAs, y la demostración visual queda fuera de vista. La combinación de `text-5xl`, copy largo y múltiples CTAs en `components/Hero.tsx:10-55` produce esta altura.

### B6. Estructura de componentes

No se refactorizó, conforme al alcance.

**[Mayor] `FixAI.tsx` concentra presentación, schema y siete bloques funcionales.**  
Tiene 412 líneas y mezcla JSON-LD, componentes auxiliares, hero, métricas, screenshots, features, audiencias, seguridad y CTA (`components/FixAI.tsx:16-411`). Splits sugeridos: `FixAISchema`, `FixAIHero`, `FixAIStats`, `FixAIScreens`, `FixAIFeatures`, `FixAISecurity` y `FixAICTASection`. Esto permitiría cargar solo el resumen en home y la versión extensa en la página de producto.

**[Mayor] `BearingAcademy.tsx` (616 líneas) y `Navbar.tsx` (276 líneas) requieren separación.**  
Navbar mezcla mega-menú desktop, navegación móvil, bloqueo de scroll, branding, LinkedIn y modal de contacto (`components/Navbar.tsx:20-276`). Separar `DesktopMegaMenu`, `MobileNav` y `NavbarActions` reduciría hidratación y riesgo de regresiones.

**[Mayor] `ContactModal.tsx` mezcla demasiadas responsabilidades.**  
En 276 líneas gestiona estado de nueve campos, validación, transporte, fallback `mailto:`, alertas, presentación del modal y canal de emergencia (`components/ContactModal.tsx:20-275`). Conviene separar un hook/controlador de formulario, schema compartido, campos y panel de emergencia.

**[Menor] Hay código muerto verificable.**  
`components/LeadModal.tsx` tiene 236 líneas y no es importado por ningún archivo. Además conserva el flujo `lead_norm` sin consentimiento. Es candidato a eliminación o recuperación deliberada después de corregir el contrato.

---

## C. Comparación con Tractian, Fracttal y Verifty

### C1. Velocidad pública

Misma ejecución Lighthouse móvil y misma ventana temporal:

| Sitio | Performance | LCP | CLS | TBT | JS | Peso total | Requests |
|---|---:|---:|---:|---:|---:|---:|---:|
| **IMELECTRIC home** | **83** | **3,80 s** | **0** | **21 ms** | **259 KiB** | **576 KiB** | **23** |
| Tractian | 29 | 7,06 s | 0,002 | 7.049 ms | 2.154 KiB | 3.072 KiB | 233 |
| Fracttal | 25 | 16,93 s | 0,094 | 17.758 ms | 2.226 KiB | 3.373 KiB | 201 |
| Verifty | 51 | 18,46 s | 0 | 453 ms | 704 KiB | 2.839 KiB | 75 |

**[Menor, positivo] En esta muestra IMELECTRIC cargó claramente más rápido y con mucho menos JS.**  
No es correcto afirmar todavía que “siempre carga más rápido”: faltan varias corridas, regiones y datos p75 reales. Sí puede afirmarse que el peso técnico actual es competitivo y que los competidores pagan un costo alto por trackers, CMS, video, chat y otros scripts.

**[Mayor] La ventaja de velocidad no compensa por sí sola la menor evidencia de producto.**  
Tractian y Fracttal cargan más funciones de conversión y prueba del producto. IMELECTRIC es más ligera, pero gran parte de la experiencia sigue siendo contenido estático; únicamente Fix AI muestra capturas de interfaz.

### C2. Capacidades visibles razonables

**[Mayor] Demo interactiva o video de producto.**  
Fracttal ofrece video y demos auto-guiadas por funcionalidad; Tractian conduce a demos y recursos interactivos. IMELECTRIC no contiene `<video>`, iframe ni tour interactivo. Además, la CSP actual bloquea ambos (`media-src 'none'` y `frame-src 'none'` en `proxy.ts:27-29`), por lo que agregar video requiere una decisión deliberada de seguridad/hosting.

**[Mayor] Calculadora de ROI accesible desde el recorrido principal.**  
Tractian y Fracttal tienen calculadoras dedicadas y visibles en su ecosistema de recursos. IMELECTRIC sí posee `components/FalionRoiCalc.tsx` y la muestra dentro de Falion (`components/Falion.tsx:253`), pero no está expuesta desde el home como herramienta transversal ni genera un informe/lead comparable. La oportunidad es elevar lo existente, no construir desde cero.

**[Menor] Chat en vivo.**  
IMELECTRIC tiene un acceso global a WhatsApp (`app/layout.tsx:125`), que cubre contacto humano directo, pero no es chat embebido con contexto, disponibilidad, routing o analítica. Fracttal ofrece chat/agente y soporte; Verifty integra WhatsApp profundamente en su propuesta de producto. Un chat adicional solo sería razonable si existe capacidad real de respuesta; de lo contrario, WhatsApp bien instrumentado es preferible.

**[Mayor] Prueba navegable del producto.**  
Fracttal publica simuladores y ambos competidores de mantenimiento muestran más interacción real. Una demo sandbox, tour grabado corto o secuencia de pantallas clicables de Fix AI/Veriwork/Nexvia elevaría más la percepción de “producto existente” que añadir animación decorativa.

### C3. PDFs pesados

**[Mayor] El tamaño no es excepcional frente al competidor, pero la caché sí es inferior.**

- IMELECTRIC, `resolucion-4272-2021.pdf`: 18.946.992 B, 12,08 s, TTFB 0,55 s, ~1,57 MB/s.
- Fracttal, ebook público comparable: 17.300.761 B, 9,30 s, TTFB 0,48 s, ~1,86 MB/s.

Ambos aceptan byte ranges, por lo que el navegador puede reanudar o solicitar partes. IMELECTRIC responde `Cache-Control: public, max-age=0`; el PDF de Fracttal llegó con `CF-Cache-Status: HIT`, Cloudflare/CloudFront y `max-age=1209600`, `s-maxage=2592000`. En esta muestra el archivo de IMELECTRIC tardó alrededor de 30 % más y no obtiene caché persistente del navegador/edge.

Los PDFs ya suelen estar internamente comprimidos; activar gzip/brotli no resolverá por sí solo el problema. Las mejoras razonables son: optimizar el PDF fuente, servirlo desde object storage/CDN con caché immutable/versionada, mostrar tamaño antes de descargar y ofrecer una versión web o PDF reducido. `components/NormsLibrary.tsx:10-30` enlaza directamente al archivo completo sin advertir el peso.

---

## 3. Top 5 acciones con mayor impacto en percepción profesional

1. **Endurecer la capa de contacto como servicio de producción:** schema tipado por formulario, límite de body, consentimiento obligatorio, IP confiable, rate limit distribuido, timeout de Resend y respuestas sin detalles internos.
2. **Agregar operación observable:** `/api/health`, logging JSON con request ID, captura de errores y alertas, métricas de latencia/errores, rotación de logs y configuración PM2 versionada.
3. **Mostrar producto real sin inflar el home:** demo auto-guiada o video corto y capturas navegables de las cinco plataformas; elevar la calculadora ROI existente con entrada clara desde home.
4. **Corregir la experiencia móvil y AA:** nombre accesible del selector, asociación de labels, contrastes y una variante móvil del ecosistema con tarjetas apiladas/texto mínimo de 12–14 px; reducir la altura inicial del hero.
5. **Recuperar caché y distribución estática:** evitar que el nonce vuelva dinámico todo el árbol cuando no sea necesario, reducir JS cliente/Framer Motion above the fold y mover PDFs pesados a CDN con caché versionada.

## 4. Veredicto

**Frontend de marketing:** competitivo en peso y estabilidad visual, pero con deuda visible en LCP del home, accesibilidad y mobile.  
**Backend del sitio:** funcional para captar contactos, no todavía operado con controles de un SaaS B2B maduro.  
**Infraestructura demostrable desde el repositorio:** suficiente para un VPS de una instancia, insuficiente para escalar o diagnosticar fallos con confianza.  
**Percepción frente a competidores:** la velocidad favorece a IMELECTRIC; la evidencia interactiva de producto y la madurez operativa favorecen a Tractian/Fracttal.

No se modificó código durante esta auditoría.
