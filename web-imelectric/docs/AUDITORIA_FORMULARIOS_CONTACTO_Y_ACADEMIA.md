# Auditoría de formularios de contacto, demos, pruebas y Academia

**Fecha de revisión:** 19 de julio de 2026  
**Repositorio auditado:** `/Users/yesidtarteagac/Downloads/Web Imelectric/web-imelectric`  
**Rama y commit revisados:** `main` — `cf40623 feat(brand): alinear metadatos y renovar favicon`  
**Producción revisada:** [https://imelectric.es](https://imelectric.es)

## 1. Resumen ejecutivo

El sitio concentra casi todas las solicitudes comerciales en un único modal, `ContactModal`. La navegación superior, los botones de demo, los diagnósticos y las solicitudes de acceso reutilizan el mismo formulario. Cuando el servicio Resend y sus variables de entorno están correctamente configurados, el usuario pulsa **Enviar** una vez y el servidor manda la información directamente por correo; no debe confirmar nada más.

Sin embargo, hay hallazgos que afectan la conversión o la confiabilidad:

1. **No se puede demostrar desde el repositorio cuál es el destinatario efectivo configurado en producción.** El código usa `CONTACT_TO_EMAIL` y, si la variable no existe, envía a `contacto@imelectric.es`. El fallback manual, el footer y el modal sí apuntan explícitamente a `contacto@imelectric.es`.
2. **El formulario principal es demasiado genérico para todos los CTAs.** Una solicitud de Nexvia, Shield AI, Veriwork, Falion o consultoría termina mostrando opciones que no representan bien esos productos. Además, el formulario registra la página, pero no el botón concreto que originó el lead.
3. **La suscripción de Academia presenta un falso positivo.** Muestra “Anotado — te avisamos” incluso si el API respondió con error, rate limit o correo no configurado.
4. **La suscripción normativa no crea por sí misma una lista de suscriptores.** Solo envía un aviso interno por correo. No hay base de datos, CRM, plataforma de email marketing ni doble opt-in implementados en este repositorio.
5. **Existe un `LeadModal` sin uso.** Ninguna página lo importa. Si se conectara en su estado actual, el API rechazaría el envío porque no transmite consentimiento, después abriría el cliente de correo y aun así mostraría el flujo como terminado.
6. **No existe una página `/contacto`.** [https://imelectric.es/contacto](https://imelectric.es/contacto) respondió `404`. El canal principal depende de JavaScript y de un modal.
7. **El fallback por `mailto:` requiere una acción adicional.** El usuario debe terminar el envío en su aplicación de correo. Además, el fallback pierde el teléfono y el mensaje opcionales que ya se habían escrito.
8. **“Agendar” no agenda realmente.** Los CTAs con ese verbo no ofrecen calendario, fecha ni franja horaria; abren el mismo formulario asíncrono cuyo botón dice “Solicitar análisis técnico”.
9. **Cuatro PDFs publicados no existen en el checkout actual.** Producción sirve los cinco enlaces, pero el repositorio solo contiene `decreto-1072-2015.pdf`; un despliegue limpio podría perder los otros cuatro.

### Dictamen de experiencia

- **Formulario principal:** fricción moderada. Es legible, móvil y tiene campos grandes, pero exige nombre, empresa, correo, prioridad y consentimiento antes de enviar. La prioridad no coincide con varios CTAs y no se precarga según el producto.
- **WhatsApp:** fricción baja. Está disponible globalmente mediante un botón flotante y abre una conversación prellenada.
- **Correo y teléfono del footer:** fricción baja, pero dependen de la aplicación del dispositivo.
- **Suscripción de Academia:** fricción visible baja —correo, consentimiento y envío—, pero confiabilidad funcional insuficiente porque confirma éxito sin comprobarlo.
- **Herramientas de Academia:** fricción baja y sin transferencia de datos personales; los cálculos ocurren localmente en el navegador.

## 2. Cómo funciona el formulario comercial principal

### Flujo normal

1. Un CTA renderiza `ContactModal`.
2. El usuario completa los campos y acepta la política.
3. `ContactModal` llama a `sendWebForm`.
4. `sendWebForm` hace `POST /api/contact` con JSON.
5. El endpoint aplica rate limiting, honeypot, validación, fecha UTC de consentimiento y escape HTML.
6. El endpoint usa Resend para enviar un correo interno.
7. Si Resend devuelve éxito, el usuario ve una alerta de confirmación, el modal se cierra y los campos se limpian.

### Ruta técnica completa

```text
CTA o Navbar
  → /Users/yesidtarteagac/Downloads/Web Imelectric/web-imelectric/components/ContactModal.tsx
  → /Users/yesidtarteagac/Downloads/Web Imelectric/web-imelectric/lib/contactSubmit.ts
  → POST https://imelectric.es/api/contact
  → /Users/yesidtarteagac/Downloads/Web Imelectric/web-imelectric/app/api/contact/route.ts
  → Resend
  → CONTACT_TO_EMAIL o contacto@imelectric.es
```

### Qué sucede si el correo del servidor falla

| Situación | Comportamiento |
|---|---|
| Resend configurado y envío aceptado | Envío directo; el usuario no hace nada adicional. |
| Falta `RESEND_API_KEY` | El navegador abre un `mailto:` a `contacto@imelectric.es`; el usuario debe pulsar **Enviar** en su correo. |
| Error de red, error 5xx, validación o rate limit | También intenta abrir `mailto:`; el usuario debe completar el envío manual. |
| No hay cliente de correo configurado | El fallback puede no abrirse. Quedan como alternativas el correo visible y WhatsApp. |
| Honeypot detectado | El API responde éxito silencioso sin enviar correo. Es el comportamiento intencional para bots. |

El código no incorpora timeout ni cancelación para `fetch`. Si el endpoint queda pendiente, el botón puede permanecer en “Enviando…” sin límite definido.

## 3. Destinatario, remitente y respuesta

### Destinatario interno

En `/Users/yesidtarteagac/Downloads/Web Imelectric/web-imelectric/app/api/contact/route.ts`, línea 84:

```text
CONTACT_TO_EMAIL || "contacto@imelectric.es"
```

- **Destino por defecto:** `contacto@imelectric.es`.
- **Destino efectivo en producción:** puede ser otro si el VPS define `CONTACT_TO_EMAIL`.
- `.env.example` documenta la variable, pero no contiene un valor.
- La configuración privada del proceso desplegado no es visible desde el repositorio ni desde el sitio público. Por ello, no es correcto afirmar que producción entrega necesariamente en el correo por defecto sin revisar el entorno del VPS o hacer una prueba controlada.

### Remitente

```text
RESEND_FROM_EMAIL || "IMELECTRIC Web <onboarding@resend.dev>"
```

Usar el fallback de Resend en producción puede limitar la entrega si el dominio/remitente no está verificado. Debe confirmarse que `RESEND_FROM_EMAIL` está definido con un dominio autorizado.

### Reply-To

El API configura el correo ingresado por el usuario como `replyTo`. El equipo puede responder al interesado usando **Responder** desde el mensaje recibido.

### Copia o confirmación para el usuario

No existe correo automático de confirmación al usuario. El único feedback es una alerta del navegador. Tampoco se genera número de solicitud, página de confirmación, evento persistente ni cita de calendario.

### Inconsistencia adicional

El schema `Organization` declara `hola@imelectric.es` en:

`/Users/yesidtarteagac/Downloads/Web Imelectric/web-imelectric/app/layout.tsx`, líneas 70–74.

Los formularios, fallbacks, footer y páginas legales usan `contacto@imelectric.es`. Aunque el correo del schema no es el destinatario del formulario, conviene unificar el canal público.

## 4. Campos del formulario principal

Implementación:

`/Users/yesidtarteagac/Downloads/Web Imelectric/web-imelectric/components/ContactModal.tsx`

| Campo | Obligatorio en cliente | Obligatorio en servidor | Observaciones |
|---|---:|---:|---|
| Nombre completo | Sí | Sí | Texto libre. |
| Empresa | Sí | Sí | Puede bloquear a independientes o usuarios que aún no representan una empresa. |
| Correo corporativo | Sí | Sí | El servidor valida formato básico; no exige realmente un dominio corporativo. |
| Teléfono | No | No | Se incluye en el correo directo, pero se pierde en el fallback `mailto:`. |
| Prioridad técnica | Sí | Sí | Solo ofrece cuatro opciones; varias soluciones no están representadas. |
| Mensaje | No | No | Se incluye en el correo directo, pero se pierde en el fallback `mailto:`. |
| Autorización de datos | Sí | Sí | Desmarcada por defecto. El servidor exige `consent === true`. |
| `_hp` | Invisible | No para humanos | Honeypot anti-bot. Si un bot lo llena, el API simula éxito sin enviar. |
| Página de origen | Automático | No | Usa `usePathname`; no identifica el CTA exacto. |

### Opciones actuales de “Prioridad técnica”

- Digitalizar reportes de campo.
- Suministro crítico de repuestos.
- Mantenimiento electrónico.
- Otro.

No hay opciones explícitas para:

- Veriwork / operación HSE.
- Nexvia / gestión de flota.
- Shield AI / SG-SST.
- Falion / confiabilidad.
- Consultoría en mantenimiento.
- Solicitud general de demo o prueba.

## 5. Inventario de CTAs comerciales y su destino

Los siguientes CTAs terminan en el mismo `ContactModal`. Todos lo abren directamente salvo “Agendar diagnóstico inicial” de la portada, que primero navega a la página de consultoría.

| URL pública | CTA | Archivo absoluto |
|---|---|---|
| `https://imelectric.es/` y páginas con Navbar | Contactar | `/Users/yesidtarteagac/Downloads/Web Imelectric/web-imelectric/components/Navbar.tsx`, líneas 176–183 |
| `https://imelectric.es/` | Solicitar demo | `/Users/yesidtarteagac/Downloads/Web Imelectric/web-imelectric/components/Hero.tsx`, líneas 37–44 |
| `https://imelectric.es/` | Consultar Componente | `/Users/yesidtarteagac/Downloads/Web Imelectric/web-imelectric/components/IndustrialServices.tsx`, líneas 47–54 |
| `https://imelectric.es/` | Agendar Diagnóstico | `/Users/yesidtarteagac/Downloads/Web Imelectric/web-imelectric/components/IndustrialServices.tsx`, líneas 74–81 |
| `https://imelectric.es/` | Agendar diagnóstico inicial | `/Users/yesidtarteagac/Downloads/Web Imelectric/web-imelectric/components/IndustrialServices.tsx`, líneas 103–108; primero navega a `/consultoria-mantenimiento` |
| `https://imelectric.es/fixai-cmms` | Solicitar Demo Técnica | `/Users/yesidtarteagac/Downloads/Web Imelectric/web-imelectric/components/FixAICta.tsx`, líneas 8–15 |
| `https://imelectric.es/veriwork` | Agendar Auditoría de Viabilidad HSE | `/Users/yesidtarteagac/Downloads/Web Imelectric/web-imelectric/components/SafetyOnCta.tsx`, líneas 8–15 |
| `https://imelectric.es/nexvia` | Solicitar Demo Técnica | `/Users/yesidtarteagac/Downloads/Web Imelectric/web-imelectric/components/NexviaCta.tsx`, líneas 8–15 |
| `https://imelectric.es/shield-ai` | Solicitar diagnóstico gratuito | `/Users/yesidtarteagac/Downloads/Web Imelectric/web-imelectric/components/ShieldAI.tsx`, líneas 310–317 |
| `https://imelectric.es/falion` | Solicitar acceso a la fase de pruebas | `/Users/yesidtarteagac/Downloads/Web Imelectric/web-imelectric/app/falion/page.tsx`, líneas 113–121 |
| `https://imelectric.es/falion` | Solicitar acceso a la fase de pruebas | `/Users/yesidtarteagac/Downloads/Web Imelectric/web-imelectric/components/Falion.tsx`, líneas 226–233 |
| `https://imelectric.es/falion` | Hablar con el equipo de IMELECTRIC | `/Users/yesidtarteagac/Downloads/Web Imelectric/web-imelectric/app/falion/page.tsx`, líneas 144–151 |
| `https://imelectric.es/consultoria-mantenimiento` | Agendar diagnóstico inicial | `/Users/yesidtarteagac/Downloads/Web Imelectric/web-imelectric/app/consultoria-mantenimiento/page.tsx`, líneas 130–137 y 276–283 |

### Problema de atribución

`sourcePage` registra únicamente el pathname. En `/`, “Solicitar demo”, “Consultar Componente”, “Agendar Diagnóstico” y “Contactar” producen el mismo origen `/`. El correo tampoco incluye nombre de producto, identificador del CTA, campaña ni parámetros UTM.

### Promesa del CTA y destino real

- “Agendar Diagnóstico”, “Agendar diagnóstico inicial” y “Agendar Auditoría de Viabilidad HSE” no integran una agenda. Después del clic, el usuario debe enviar la solicitud y esperar contacto posterior.
- “Solicitar Demo Técnica”, “Solicitar diagnóstico gratuito” y “Solicitar acceso a la fase de pruebas” tampoco conservan esos conceptos en el payload.
- Los enlaces secundarios “Ver página completa” de Fix AI, Veriwork, Nexvia y Shield AI apuntan a la misma ruta donde ya están renderizados. Son autoenlaces sin avance en el embudo:
  - `/fixai-cmms → /fixai-cmms`
  - `/veriwork → /veriwork`
  - `/nexvia → /nexvia`
  - `/shield-ai → /shield-ai`

### Rutas que heredan el formulario desde Navbar

Navbar aparece en la portada, páginas de producto, consultoría y todas las rutas públicas de Academia revisadas. Por tanto, el botón **Contactar** abre el modal desde esas páginas.

La ruta `/falion` no monta Navbar ni Footer, pero incluye tres CTAs propios y conserva el WhatsApp flotante global. Las rutas legales `/privacidad`, `/terminos` y `/cookies` tampoco montan Navbar ni Footer. Todas conservan el WhatsApp flotante global; además, `/privacidad` y `/terminos` muestran `contacto@imelectric.es` dentro de su contenido.

## 6. Canales alternativos

### WhatsApp global

Archivo:

`/Users/yesidtarteagac/Downloads/Web Imelectric/web-imelectric/components/WhatsAppFloat.tsx`

Destino:

```text
https://wa.me/573026002877?text=Hola%20IMELECTRIC%2C%20necesito%20soporte%20o%20informaci%C3%B3n
```

Se renderiza desde:

`/Users/yesidtarteagac/Downloads/Web Imelectric/web-imelectric/app/layout.tsx`, línea 126.

Esto lo hace visible en todas las páginas, incluidas Academia, Falion y las páginas legales.

### Modal: emergencia en planta

- WhatsApp: `+57 302 600 2877`.
- Mensaje prellenado de soporte técnico urgente.
- Correo visible: `contacto@imelectric.es`.

Implementación:

`/Users/yesidtarteagac/Downloads/Web Imelectric/web-imelectric/components/ContactModal.tsx`, líneas 286–310.

### Footer

- Correo: `contacto@imelectric.es`.
- Teléfono: `+57 302 600 2877`.
- WhatsApp: `https://wa.me/573026002877`.

Implementación:

`/Users/yesidtarteagac/Downloads/Web Imelectric/web-imelectric/components/Footer.tsx`, líneas 173–212.

## 7. Auditoría de Academia

### 7.1 Formulario activo: avisos de actualización normativa

URL:

[https://imelectric.es/academia/trabajo-en-alturas#normas](https://imelectric.es/academia/trabajo-en-alturas#normas)

Archivos:

- `/Users/yesidtarteagac/Downloads/Web Imelectric/web-imelectric/app/academia/trabajo-en-alturas/page.tsx`, líneas 63–69.
- `/Users/yesidtarteagac/Downloads/Web Imelectric/web-imelectric/components/NormsLibrary.tsx`, líneas 91–104 y 210–268.

#### Campos

| Campo | Obligatorio | Tratamiento |
|---|---:|---|
| Correo | Sí | Se envía al API como `email`. |
| Autorización | Sí para habilitar el botón | Se envía como `consent: true`. |
| Honeypot | No existe en este formulario | El API acepta `_hp`, pero esta interfaz no lo renderiza ni lo transmite. |

#### Flujo real

```text
NormsLibrary
  → sendWebForm({ formType: "norm_updates", email, consent: true })
  → POST /api/contact
  → Resend
  → CONTACT_TO_EMAIL o contacto@imelectric.es
```

El asunto enviado al equipo es:

```text
[Web IMELECTRIC] Nueva suscripción a avisos normativos
```

#### Hallazgo crítico: falso éxito

`handleNotifySubmit` espera la promesa, pero ignora por completo `result.status`. El bloque `finally` siempre cambia el estado a `done`. Por eso muestra:

```text
Anotado — te avisamos cuando haya cambios.
```

Esto sucede incluso ante:

- `503` por Resend no configurado.
- `429` por rate limit.
- `500/502` por fallo de servidor o proveedor.
- Error de red.

El usuario no tiene opción visible para reintentar ni corregir el correo una vez aparece el estado final.

#### No existe una suscripción automatizada

El endpoint envía un correo interno, pero no:

- Guarda el correo en una base de datos.
- Lo agrega a Resend Contacts, Mailchimp, Brevo u otra lista.
- Gestiona bajas.
- Envía confirmación o doble opt-in.
- Programa futuros avisos.

Por tanto, “te avisamos” depende de un proceso manual no documentado en el código.

### 7.2 Descargas normativas

Las descargas actuales son directas y no exigen datos personales. Cinco normas tienen PDF disponible y una aparece como “PDF próximamente”. El acceso directo reduce fricción.

Implementación:

`/Users/yesidtarteagac/Downloads/Web Imelectric/web-imelectric/components/NormsLibrary.tsx`, líneas 8–32 y 132–209.

#### Integridad de assets y peso

Los cinco enlaces respondieron `200` en producción el 19 de julio de 2026:

| PDF público | Tamaño descargado |
|---|---:|
| `resolucion-4272-2021.pdf` | 18.946.992 bytes, aproximadamente 18,1 MiB |
| `decreto-1072-2015.pdf` | 1.565.627 bytes, aproximadamente 1,5 MiB |
| `resolucion-0312-2019.pdf` | 2.879.925 bytes, aproximadamente 2,7 MiB |
| `ley-1581-2012.pdf` | 3.434.853 bytes, aproximadamente 3,3 MiB |
| `resolucion-40117-2024.pdf` | 1.306.547 bytes, aproximadamente 1,2 MiB |

El PDF de Resolución 4272 supera ampliamente la guía del proyecto de aproximadamente 2–3 MB y tardó de forma perceptible en esta comprobación.

En el checkout solo existe:

`/Users/yesidtarteagac/Downloads/Web Imelectric/web-imelectric/public/norms/decreto-1072-2015.pdf`

Los otros cuatro archivos están en producción, pero no versionados en la ruta esperada del repositorio. Esto crea una dependencia del estado histórico del VPS: un despliegue limpio basado únicamente en Git puede romper esas descargas.

### 7.3 `LeadModal`: formulario no conectado y defectuoso

Archivo:

`/Users/yesidtarteagac/Downloads/Web Imelectric/web-imelectric/components/LeadModal.tsx`

No existe ninguna importación o renderizado de este componente fuera de su propio archivo. Es código muerto y candidato a limpieza.

Si se conectara sin corregirlo:

1. Solicitaría nombre, empresa y correo.
2. No mostraría ni enviaría autorización de tratamiento.
3. El API rechazaría `lead_norm` porque exige `consent === true` para todos los tipos de formulario.
4. El cliente abriría un `mailto:` manual.
5. Aun con error, ejecutaría `setSubmitted(true)` y mostraría “¡Listo!”.
6. Sus labels no usan `htmlFor`/`id`, y el diálogo artesanal no implementa claramente focus trap ni cierre con Escape.

### 7.4 Herramientas interactivas de Academia

Estas herramientas usan estado React local. No se encontró `fetch`, server action, almacenamiento local ni envío al API dentro de sus componentes. Los datos introducidos se usan para calcular o visualizar resultados en el navegador.

| URL pública | Componente | Datos principales |
|---|---|---|
| `https://imelectric.es/academia/calculadora-mtbf` | `/Users/yesidtarteagac/Downloads/Web Imelectric/web-imelectric/components/ReliabilityCalculator.tsx` | Fallas, horas operativas, horas de reparación, MTBF y tiempo. |
| `https://imelectric.es/academia/fmeca` | `/Users/yesidtarteagac/Downloads/Web Imelectric/web-imelectric/components/Fmeca.tsx` | Modo, efecto, severidad, ocurrencia y detección. |
| `https://imelectric.es/academia/ishikawa` | `/Users/yesidtarteagac/Downloads/Web Imelectric/web-imelectric/components/Ishikawa.tsx` | Problema y causas por categoría. |
| `https://imelectric.es/academia/trabajo-en-alturas` | `/Users/yesidtarteagac/Downloads/Web Imelectric/web-imelectric/components/SSTAcademy.tsx` | Longitudes y factores usados para DCL. |
| `https://imelectric.es/academia/rodamientos` | `/Users/yesidtarteagac/Downloads/Web Imelectric/web-imelectric/components/BearingAcademy.tsx` | Referencias, dimensiones, inspección, checklist y filtros. |

No requieren consentimiento porque no transmiten datos personales. Al recargar la página, el estado no se conserva.

### 7.5 Rutas completas de Academia con acceso al contacto global

Todas estas páginas montan Navbar y Footer, por lo que ofrecen **Contactar**, correo, teléfono y WhatsApp:

- `https://imelectric.es/academia`
- `https://imelectric.es/academia/calculadora-mtbf`
- `https://imelectric.es/academia/fmeca`
- `https://imelectric.es/academia/ishikawa`
- `https://imelectric.es/academia/trabajo-en-alturas`
- `https://imelectric.es/academia/rodamientos`
- `https://imelectric.es/academia/cmms-vs-gmao`
- `https://imelectric.es/academia/certificacion-trabajo-en-alturas-colombia`
- `https://imelectric.es/academia/resolucion-0312-estandares-minimos`
- `https://imelectric.es/academia/firma-electronica-vs-firma-digital-colombia`
- `https://imelectric.es/academia/rca-rcm-fmea-diferencias`
- `https://imelectric.es/academia/gestion-activos-iso-55001`
- `https://imelectric.es/academia/pesv-sg-sst-integracion`
- `https://imelectric.es/academia/copasst-matriz-legal-plan-trabajo-sgsst`
- `https://imelectric.es/academia/plan-mantenimiento-preventivo`
- `https://imelectric.es/academia/pega-iso-55001`
- `https://imelectric.es/academia/inspeccion-preoperacional-control-flota`

## 8. Seguridad, privacidad y confiabilidad

### Controles existentes

- Rate limit por IP: cinco solicitudes por ventana de diez minutos.
- Honeypot en el formulario principal.
- Consentimiento desmarcado por defecto en el formulario principal y la suscripción activa.
- Validación de nombre, empresa, correo, prioridad y consentimiento en servidor.
- Escape HTML antes de construir el correo.
- `replyTo` solo se toma después de una validación básica de email.
- Registro de fecha/hora UTC y tipo de formulario como prueba de autorización.
- IP enmascarada en logs de rate limit y honeypot.

Archivos:

- `/Users/yesidtarteagac/Downloads/Web Imelectric/web-imelectric/app/api/contact/route.ts`
- `/Users/yesidtarteagac/Downloads/Web Imelectric/web-imelectric/lib/rateLimit.ts`

### Limitaciones

1. El rate limiter vive en memoria: se reinicia con el proceso y no se comparte entre múltiples procesos o instancias.
2. Depende de que Nginx sobrescriba correctamente `X-Real-IP`. Si no ocurre, varios usuarios podrían compartir la clave `unknown`.
3. El rate limit se consume antes de comprobar el honeypot y antes de validar el body.
4. El formulario de avisos normativos no incorpora un campo honeypot en su interfaz.
5. No existe CAPTCHA ni mecanismo de desafío adicional.
6. No hay almacenamiento durable de leads, consentimiento, estado de entrega o ID retornado por Resend.
7. La prueba de autorización existe únicamente dentro del correo enviado. Si el correo falla, no queda registrada por esta implementación.
8. El servidor limita cada valor a 600 caracteres mediante truncado silencioso; el cliente no avisa si un mensaje fue recortado.
9. No hay timeout, retry automático ni cola de entrega.
10. `request.json()` carga y parsea todo el body antes de limitar campos; no existe un límite de tamaño previo.
11. El endpoint no valida `Content-Type`, `Origin` ni que el JSON sea un objeto plano. Un body JSON `null` provoca una excepción al acceder a `body._hp`.
12. `priority`, `normTitle` y `sourcePage` aceptan cualquier texto enviado directamente al API; no se contrastan con listas o rutas conocidas.
13. No hay idempotencia ni deduplicación. Una respuesta perdida después de que Resend acepte el correo puede provocar duplicados al reintentar.
14. No se conserva el ID retornado por Resend ni existen webhooks para entrega, rebote o queja. Un `200` indica aceptación inicial, no entrega final.
15. No se encontraron pruebas automatizadas para validación, consentimiento, honeypot, rate limit, fallos de Resend o fallbacks.
16. La política de privacidad no coincide completamente con el formulario: declara empresa opcional y enumera nombre/correo/empresa, mientras el formulario exige empresa y también puede recoger teléfono, mensaje, prioridad y página de origen.

## 9. Evaluación detallada de fricción

### Aspectos favorables

- Un solo modal evita enviar al usuario a otra página.
- Campos con `autocomplete` para nombre, organización, correo y teléfono.
- Inputs principales con altura táctil adecuada.
- Consentimiento explícito y enlace a privacidad.
- Teléfono y mensaje son opcionales.
- El modal permite omitir el formulario y usar WhatsApp en una emergencia.
- En móvil el contenido puede desplazarse dentro de un alto máximo.
- Las descargas normativas son directas.

### Fricciones y pérdida de conversión

1. **La empresa es obligatoria.** Puede excluir consultores independientes, estudiantes, técnicos o personas en exploración temprana.
2. **La prioridad no corresponde al CTA.** El usuario debe traducir una solicitud específica a “Otro”.
3. **No hay precarga contextual.** Un clic en “Solicitar Demo Técnica” no selecciona producto ni cambia el título del modal.
4. **No existe campo de producto.** El equipo infiere el interés a partir de la ruta, y en la portada ni siquiera puede distinguir el CTA.
5. **Errores mediante `window.alert`.** Interrumpen el flujo y no señalan el campo que necesita corrección.
6. **Fallback ambiguo.** Abrir el correo no equivale a enviar; el usuario todavía debe pulsar **Enviar**.
7. **Pérdida de datos en fallback.** Teléfono y mensaje no se copian al `mailto:`.
8. **Sin plazo ni siguiente paso definido.** “Un ingeniero se pondrá en contacto pronto” no explica el canal ni el proceso posterior.
9. **Sin confirmación persistente.** La alerta desaparece y el modal se cierra; no hay página o comprobante.
10. **Sin timeout.** Una solicitud lenta puede dejar el formulario bloqueado.
11. **La suscripción de Academia oculta todos los errores.**
12. **El botón Contactar de Navbar no garantiza una altura táctil mínima de 44 px**, aunque los inputs y CTAs principales sí son amplios.
13. **El correo de avisos normativos usa placeholder sin label visible o accesible asociado.**
14. **“Agendar” no ofrece agenda.** No hay selector de fecha, horario, videollamada ni integración de calendario.
15. **Cuatro páginas de producto muestran un autoenlace “Ver página completa”.** El clic recarga la ruta actual en vez de avanzar.
16. **Accesibilidad de Academia mejorable.** Hay controles interactivos con labels no asociados, tabs sin semántica completa y cambios de resultado/estado sin `aria-live`.

## 10. Verificación directa en producción

Se realizaron comprobaciones públicas, sin enviar leads falsos ni correos:

- [https://imelectric.es](https://imelectric.es): `200`.
- [https://imelectric.es/academia](https://imelectric.es/academia): `200`.
- [https://imelectric.es/academia/trabajo-en-alturas](https://imelectric.es/academia/trabajo-en-alturas): `200`; el formulario de avisos aparece publicado.
- Las 17 rutas de Academia enumeradas en la sección 7.5 respondieron `200`.
- Los cinco PDFs enlazados por `NormsLibrary` respondieron `200`; sus tamaños están documentados en la sección 7.2.
- [https://imelectric.es/contacto](https://imelectric.es/contacto): `404`.
- `GET https://imelectric.es/api/contact`: `405`, comportamiento esperado porque el endpoint solo implementa POST.
- Los bundles JavaScript servidos por la portada contienen `Solicitar análisis técnico`, `contacto@imelectric.es`, `Digitalizar reportes de campo` y `/api/contact`. Esto confirma que la implementación principal auditada está presente en los assets públicos; no demuestra por sí solo los valores privados del entorno ni la entrega de correos.
- Los bundles servidos por `/academia/trabajo-en-alturas` contienen `norm_updates`, `sendWebForm` y el estado final `Anotado — te avisamos cuando haya cambios.`. La suscripción auditada también está desplegada públicamente.

Muestra única tomada con `curl` el 19 de julio de 2026:

| Ruta | TTFB observado | Tiempo total observado |
|---|---:|---:|
| `/` | 1.044 s | 1.837 s |
| `/academia` | 1.027 s | 1.403 s |
| `/academia/trabajo-en-alturas` | 0.878 s | 1.601 s |

Estos valores solo describen una solicitud HTML desde el entorno de auditoría. No son una medición de Core Web Vitals ni del tiempo real de envío de Resend.

No se ejecutó un POST real porque generaría un contacto artificial y podría enviar correo a un buzón operativo. En consecuencia, siguen pendientes de verificación autorizada:

- Valor efectivo de `CONTACT_TO_EMAIL` en el VPS.
- Valor y verificación de dominio de `RESEND_FROM_EMAIL`.
- Entrega real, spam y latencia del proveedor.
- Comportamiento visual completo del modal en navegadores/dispositivos reales.

## 11. Recomendaciones priorizadas

### Prioridad crítica

1. Corregir `NormsLibrary` para mostrar éxito solo cuando `result.status === "sent"`. Ante error, conservar el correo y ofrecer reintento con un mensaje claro.
2. Verificar en el VPS `CONTACT_TO_EMAIL`, `RESEND_FROM_EMAIL` y `RESEND_API_KEY`; después realizar una prueba controlada con un correo de prueba autorizado.
3. Eliminar `LeadModal` si no se usará, o añadir consentimiento explícito y corregir el manejo de errores antes de conectarlo.
4. Definir un mecanismo real para las suscripciones normativas: lista persistente, baja, trazabilidad y proceso de envío. No depender solo de un aviso interno.

### Prioridad alta

5. Hacer `ContactModal` contextual: recibir `product`, `service`, `ctaLabel` y una prioridad precargada.
6. Agregar opciones para Fix AI, Veriwork, Nexvia, Shield AI, Falion y consultoría.
7. Enviar `sourceCta`, URL completa y parámetros UTM, no solo pathname.
8. Incluir teléfono y mensaje en el fallback, y explicar antes de abrirlo que el usuario debe pulsar **Enviar**.
9. Sustituir alertas por estados inline: enviado, error, rate limit y reintento.
10. Añadir timeout con `AbortController` y recuperación de estado.
11. Guardar de forma durable lead, consentimiento, timestamp, origen y estado/ID de entrega.
12. Crear una ruta compartible `/contacto` como alternativa progresiva al modal.
13. Hacer que los CTAs “Agendar” abran una agenda real o cambiar su copy a “Solicitar diagnóstico/auditoría”.
14. Incorporar límite previo de body, validar `Content-Type`, estructura JSON, `Origin` y valores permitidos.
15. Versionar los cuatro PDFs faltantes y optimizar `resolucion-4272-2021.pdf` antes del próximo despliegue limpio.

### Prioridad media

16. Evaluar si “Empresa” debe ser opcional o permitir “Independiente”.
17. Añadir confirmación útil y, si se aprueba comercialmente, un correo de recepción al interesado.
18. Mejorar labels, semántica de tabs, anuncios `aria-live` y tamaños táctiles.
19. Añadir honeypot real al formulario de avisos normativos.
20. Unificar `hola@imelectric.es` y `contacto@imelectric.es` según el canal oficial.
21. Alinear la política de privacidad con todos los datos realmente recogidos y con la obligatoriedad de empresa.
22. Eliminar los autoenlaces “Ver página completa” dentro de las propias páginas de producto.
23. Añadir pruebas automatizadas para los tres `formType`: éxito, consentimiento ausente, body inválido, rate limit, Resend no configurado y fallo del proveedor.

## 12. Archivos centrales auditados

- `/Users/yesidtarteagac/Downloads/Web Imelectric/web-imelectric/components/ContactModal.tsx`
- `/Users/yesidtarteagac/Downloads/Web Imelectric/web-imelectric/lib/contactSubmit.ts`
- `/Users/yesidtarteagac/Downloads/Web Imelectric/web-imelectric/app/api/contact/route.ts`
- `/Users/yesidtarteagac/Downloads/Web Imelectric/web-imelectric/lib/rateLimit.ts`
- `/Users/yesidtarteagac/Downloads/Web Imelectric/web-imelectric/components/Navbar.tsx`
- `/Users/yesidtarteagac/Downloads/Web Imelectric/web-imelectric/components/Footer.tsx`
- `/Users/yesidtarteagac/Downloads/Web Imelectric/web-imelectric/components/WhatsAppFloat.tsx`
- `/Users/yesidtarteagac/Downloads/Web Imelectric/web-imelectric/components/NormsLibrary.tsx`
- `/Users/yesidtarteagac/Downloads/Web Imelectric/web-imelectric/components/LeadModal.tsx`
- `/Users/yesidtarteagac/Downloads/Web Imelectric/web-imelectric/app/academia/page.tsx`
- `/Users/yesidtarteagac/Downloads/Web Imelectric/web-imelectric/app/academia/trabajo-en-alturas/page.tsx`
- `/Users/yesidtarteagac/Downloads/Web Imelectric/web-imelectric/.env.example`

