# IDEA-001 · Gestión de inmuebles rentados

| Campo | Valor |
| --- | --- |
| Estado | semilla |
| Fecha | 2026-10-17 |
| Responsable | [COMPLETAR] |
| Última actualización | 2026-10-17 |

## La idea en una frase
Aplicación para que arrendatario y propietario reporten novedades de un inmueble rentado, paguen el canon y lleven el control del cumplimiento del contrato.

## Problema
Reportar un daño, pagar el arriendo y saber si el contrato se cumple suele pasar por llamadas, chats sueltos y consignaciones sin trazabilidad. `[SUPUESTO]` No hay un registro único de novedades, pagos y visitas que ambas partes puedan consultar. Falta confirmar cómo lo resuelven hoy las personas reales.

## Usuario
- **Arrendatario** (el "usuario" de la idea original): reporta novedades, paga el canon, recibe avisos de visitas.
- **Propietario**: recibe novedades, decide enviar mantenimiento, ve pagos y cumplimiento.
- **Personal de mantenimiento**: recibe la orden de visita. `[SUPUESTO]` Podría ser solo un contacto externo en la primera versión, sin usar la app.
- `[PREGUNTA]` ¿Existe una inmobiliaria o administrador en medio? Cambiaría los roles.

## Propuesta de valor
- Una sola línea de tiempo por inmueble con novedades, visitas y pagos.
- El arrendatario sabe que su novedad fue recibida y cuándo lo visitarán.
- El propietario ve de un vistazo si el canon está al día y qué novedades siguen abiertas.
- Con el seguro integrado: el propietario tiene respaldo de su ingreso y el arrendatario tiene respaldo del servicio.
- Métrica candidata `[SUPUESTO]`: porcentaje de novedades con respuesta en menos de 48 horas, y porcentaje de cánones pagados a tiempo.

## Flujo principal imaginado
1. El arrendatario reporta una novedad con descripción y fotos.
2. El propietario la revisa y decide: asignar mantenimiento, pedir más datos o rechazar con motivo.
3. Si asigna mantenimiento, la app avisa al arrendatario fecha y persona que visitará.
4. Tras la visita se cierra la novedad con evidencia y el arrendatario confirma.
5. Cada mes el arrendatario paga el canon y la app registra el pago y el estado del contrato.

## Monetización: seguros y servicios anexos
Planteamiento del dueño (2026-10-17): integrar o complementar con plataformas que ofrecen aseguramiento de inmuebles y servicios anexos. El propietario tendría su pago respaldado y el arrendatario un respaldo del servicio. La app se monetiza con esa integración.

**Dos formas de hacerlo** `[SUPUESTO]`

| Opción | Qué es | Ventaja | Riesgo |
| --- | --- | --- | --- |
| A. Complemento por alianza | La app se integra con una aseguradora o plataforma existente y recomienda o contrata el producto dentro del flujo | Rápido, sin asumir riesgo asegurador | Dependencia del aliado, la comisión depende del acuerdo |
| B. Servicio propio | La app ofrece su propio amparo o garantía | Margen mayor | Actividad regulada y riesgo financiero propio; poco viable en una primera versión |

La opción A parece la ruta natural para empezar. La B no se recomienda sin respaldo legal y financiero.

**Productos candidatos** `[SUPUESTO]`, por validar con aliados reales
- Amparo del pago del canon para el propietario.
- Cobertura de daños al inmueble y asistencia de mantenimiento (hogar) para el arrendatario o el propietario.
- Servicios anexos: mantenimiento programado, asistencia de emergencia, estudio del arrendatario.

**Cómo ganaría dinero la app** `[SUPUESTO]`
- Comisión por póliza o servicio colocado.
- Tarifa por inmueble o por contrato gestionado.
- Margen o comisión en servicios de mantenimiento asignados desde la app.

**Efecto en el producto**
- Los datos de cumplimiento (pagos al día, novedades atendidas) podrían servir al aliado para evaluar el riesgo. Eso es un uso nuevo de datos personales y exige autorización expresa del titular.
- Las novedades y visitas documentadas servirían como evidencia ante un siniestro.
- Sube la criticidad: hay dinero de terceros y relación contractual con una aseguradora.

## Primera versión posible
Un solo inmueble por contrato, dos roles (arrendatario y propietario), reporte de novedades con fotos, asignación de visita con aviso al arrendatario, y registro de pagos de canon. El pago en línea puede esperar: la primera versión podría solo registrar el pago y adjuntar comprobante. `[SUPUESTO]`

## Datos y riesgos
- **Datos**: personales de arrendatarios y propietarios (nombre, contacto, dirección), contrato, pagos y fotos del interior de una vivienda. Nivel ASVS sugerido: L2.
- **Legal a validar con especialista**: Ley 1581 de 2012 (datos personales), régimen de arrendamiento de vivienda urbana (Ley 820 de 2003) y obligaciones del propietario sobre reparaciones. No es asesoría jurídica.
- **Pagos**: procesar dinero implica pasarela de pagos y posibles obligaciones fiscales o financieras. Mejor dejarlo fuera de la primera versión.
- **Visitas**: acceso a la vivienda de otra persona; conviene exigir aviso previo y confirmación. Riesgo de seguridad física y de privacidad.
- **Seguros (regulado)**: ofrecer o intermediar seguros en Colombia está bajo supervisión de la Superintendencia Financiera. Hay que validar con un especialista si basta una alianza con una aseguradora o corredor autorizado, o si la app necesita licencia propia. No es asesoría jurídica.
- **Conflicto de interés**: si la app gana comisión por la póliza, debe presentarla con transparencia y no condicionar el servicio a contratarla.
- **Negocio**: ya existen apps y servicios inmobiliarios; falta contrastar diferenciación. `[SUPUESTO]`

## Preguntas abiertas
| # | Pregunta | Quién responde | Estado |
| --- | --- | --- | --- |
| 1 | ¿Para quién se construye: propietarios individuales, inmobiliarias o ambos? | Dueño de la idea | abierta |
| 2 | ¿Vivienda, local comercial o ambos? Cambia la norma aplicable | Dueño de la idea | abierta |
| 3 | ¿Cuántos inmuebles y contratos hay para probar la idea? | Dueño de la idea | abierta |
| 4 | ¿El pago se hace dentro de la app o solo se registra? | Dueño de la idea | abierta |
| 5 | ¿Quién es el personal de mantenimiento: propio, contratistas o externos sin app? | Dueño de la idea | abierta |
| 6 | ¿Qué significa "cumplimiento del contrato": pagos al día, vigencia, prórrogas, estado del inmueble? | Dueño de la idea | abierta |
| 7 | ¿Hay conversaciones con arrendatarios o propietarios reales que confirmen el dolor? | Dueño de la idea | abierta |
| 8 | ¿Qué plataformas de seguros de arrendamiento o hogar existen hoy y qué ofrecen (cobertura, precio, comisión, si tienen API)? | Investigación a hacer | abierta |
| 9 | ¿Alianza con un aliado (A) o servicio propio (B)? | Dueño de la idea | abierta |
| 10 | ¿Quién paga el seguro: propietario, arrendatario o se reparte? | Dueño de la idea | abierta |
| 11 | ¿Se reutiliza el stack de webim o es un proyecto aparte? | Dueño de la idea | abierta |

## Bitácora
| Fecha | Qué pasó |
| --- | --- |
| 2026-10-17 | Idea anotada a partir de la descripción del dueño |
| 2026-10-17 | Se añade la línea de monetización con seguros y servicios anexos |

## Decisión
Pendiente.
