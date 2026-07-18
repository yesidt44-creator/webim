# Backlog maestro

## Video de producto

**Estado:** pendiente de contenido y presupuesto. No implementar todavía.

### Prerrequisitos

1. Producir y aprobar material de video real de los productos. No usar una simulación ni un visual generado por IA como evidencia final.
2. Definir si el archivo se alojará en infraestructura propia o en un proveedor externo.
3. Revisar privacidad, consentimiento, cookies y dominios de conexión antes de elegir un reproductor externo.
4. Ajustar deliberadamente la Content Security Policy:
   - `media-src` si el video se sirve como archivo.
   - `frame-src` si se autoriza un reproductor embebido.
5. Probar rendimiento, accesibilidad, carga diferida y experiencia móvil antes de publicarlo.

La CSP actual mantiene `media-src 'none'` y `frame-src 'none'`; no deben relajarse hasta contar con el contenido y la arquitectura de alojamiento aprobados.
