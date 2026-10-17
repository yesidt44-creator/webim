# IDEA-001 · Gestión de inmuebles rentados

| Campo | Valor |
| --- | --- |
| Estado | explorando |
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

## Validación de mercado (2026-10-17)

**Método y límites.** Búsqueda web sobre Colombia y Latinoamérica. Los sitios de los competidores no se pudieron abrir desde este entorno, por lo que sus funciones salen de lo que dicen los resultados de búsqueda. Precios, comisiones y funciones están sin verificar. Muchas fuentes son blogs comerciales o gremios inmobiliarios.

**Veredicto: la idea no es nueva, pero hay un hueco que vale la pena probar.** Existen las tres piezas por separado. Lo que no encontré es una que una bien reporte de novedades, despacho de mantenimiento y aviso al arrendatario para propietarios que arriendan directo. Esa ausencia puede significar oportunidad o falta de demanda, y hoy no se puede distinguir.

### Lo que ya existe

| Tipo | Quién (según resultados de búsqueda) | Qué hace |
| --- | --- | --- |
| Administración de arriendos | [MisPropiedades](https://www.mispropiedades.co/), [Arrendo](https://www.arrendo.app/), [Rentio](https://rentio.co/) | Contratos, cobros y pagos en línea, facturación, portal para arrendatario y propietario. Rentio apunta a inmobiliarias |
| Seguro de arrendamiento | [SURA Digital](https://www.sura.co/seguros/personas/hogar/arrendamiento/digital), [Central de Arrendamientos](https://centraldearrendamientos.com/) (respaldada por Zurich), [Mapfre](https://www.mapfre.com.co/seguros-cumplimiento/arrendamiento-light/), [Solidaria](https://aseguradorasolidaria.com.co/seguros-en-linea/seguro-arrendamiento), [Mundial](https://www.segurosmundial.com.co/blog/seguro-de-arrendamiento) | Pagan canon, administración y servicios públicos impagos. SURA incluye asistencia de emergencia en el hogar |
| Proptech que integra todo | [QuintoAndar](https://www.onlinemarketplaces.com/articles/meet-7-proptechs-transforming-the-latin-american-real-estate-market/) (Brasil), Houm (Chile), Aptuno (Colombia) | QuintoAndar hace selección de inquilino, contrato, garantía de pago y administración. Valorada en US$4.000 millones en 2021 |

### Lo que cambia para tu idea
- **El seguro ya se vende directo.** SURA permite que el propietario lo contrate en línea. Tu app no sería el único camino y competiría con la aseguradora por el cliente. Habría que negociar un rol de canal con comisión.
- **Los seguros exigen un arrendatario "asegurable".** Un intermediario describe estudio de crédito, centrales de riesgo e ingresos de al menos tres veces el canon. Mapfre excluye a quien no sea colombiano con cédula y empleo.
- **El costo del seguro no está claro.** Una fuente dice cerca del 50% de un canon mensual y otra entre $25.000 y $50.000 al mes por un canon de $1.000.000. Hay que pedir cotización real.
- **El mantenimiento es el hueco.** SURA ofrece asistencia en emergencias, pero ninguna plataforma de administración que encontré muestra gestión de novedades con visita agendada. Sin confirmar.

### Tamaño y perfil del mercado
- Alrededor del 40% de los hogares colombianos vive en arriendo, y más en Bogotá. Las cifras varían según la fuente ([Infobae](https://www.infobae.com/colombia/2026/05/18/a-las-personas-que-viven-en-arriendo-les-podrian-estar-cobrando-dinero-de-mas-por-la-vivienda-dicen-por-que-la-practica-es-ilegal/)).
- Según Fedelonjas con datos del DANE 2024, [56 de cada 100 contratos son verbales](https://www.portafolio.co/mis-finanzas/vivienda/56-de-cada-100-contratos-de-arriendo-en-colombia-son-verbales-y-el-96-esta-en-los-estratos-1-2-y-492133), y casi todos están en estratos 1 a 3. Es un dato de gremio, tomarlo con cautela.
- [Portafolio](https://www.portafolio.co/mis-finanzas/vivienda/el-50-de-los-colombianos-arrienda-sin-intermediarios-datos-riesgos-y-tendencias-634079) reporta que cerca de la mitad arrienda sin intermediarios, asumiendo solos selección del inquilino y cumplimiento legal.

### Lectura crítica
- **A favor:** hay un gran grupo de propietarios que arriendan directo, sin software ni respaldo, y que hoy usan WhatsApp y consignaciones. Ahí la app aporta orden y trazabilidad.
- **En contra, el seguro:** quienes más necesitan formalizarse (estratos 1 a 3, contrato verbal) son los menos asegurables y los que menos pagan. Los asegurables ya los atienden inmobiliarias y aseguradoras.
- **En contra, el hábito:** el competidor real puede ser WhatsApp. Cambiar ese hábito es difícil y los pagos en línea exigen confianza.
- **Riesgo de copia:** el reporte de novedades es una función que MisPropiedades o Rentio podrían añadir con poco esfuerzo.

### Cómo validar barato antes de construir
1. Entrevistar entre 10 y 15 propietarios que arriendan directo y 5 arrendatarios. Preguntar cómo gestionan hoy daños, pagos y visitas, y cuánto les ha costado un problema.
2. Revisar las demos de MisPropiedades, Arrendo y Rentio y confirmar si tienen novedades y mantenimiento.
3. Pedir cotización y condiciones de comisión a dos o tres aseguradoras o corredores. Preguntar si aceptan un canal digital.
4. Probar una versión manual con 3 a 5 inmuebles: formulario más WhatsApp más una hoja de cálculo, antes de escribir código.
5. Decidir con una métrica: cuántos propietarios aceptarían pagar y cuánto.

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
| 8 | ¿Qué plataformas de seguros de arrendamiento o hogar existen hoy y qué ofrecen (cobertura, precio, comisión, si tienen API)? | Investigación | respondida en parte: ver Validación de mercado. Faltan precios y comisiones reales |
| 9 | ¿Alianza con un aliado (A) o servicio propio (B)? | Dueño de la idea | abierta |
| 10 | ¿Quién paga el seguro: propietario, arrendatario o se reparte? | Dueño de la idea | abierta |
| 11 | ¿Se reutiliza el stack de webim o es un proyecto aparte? | Dueño de la idea | abierta |

## Bitácora
| Fecha | Qué pasó |
| --- | --- |
| 2026-10-17 | Idea anotada a partir de la descripción del dueño |
| 2026-10-17 | Se añade la línea de monetización con seguros y servicios anexos |
| 2026-10-17 | Investigación de mercado: existen administradoras, seguros y proptech; el hueco probable es novedades y mantenimiento para propietarios directos. Estado pasa a explorando |

## Decisión
Pendiente.
