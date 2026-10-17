# Incubadora de ideas

Aquí se guardan ideas de software antes de ser proyectos. Una idea cuesta una página, no diez documentos. Solo las que maduran pasan al paquete completo de la skill `proyectos-software-calidad`.

## Cómo se usa

1. Cuando surja una idea, se crea `ideas/IDEA-NNN-nombre-corto.md` copiando `_plantilla-idea.md`.
2. Se añade una fila a `INDICE.md`.
3. Cada vez que la idea avance, se actualiza su estado y su bitácora. No se borran ideas: se marcan `descartada` con el motivo.
4. Cuando una idea cumple los criterios de promoción, se abre como proyecto (modo A de la skill) en `proyectos/<nombre>/docs/`.

## Estados

| Estado | Significado |
| --- | --- |
| `semilla` | Recién anotada, sin validar |
| `explorando` | Se están respondiendo las preguntas abiertas |
| `validada` | Problema y usuario confirmados con evidencia |
| `promovida` | Ya tiene paquete documental completo |
| `pausada` | Interesante, pero no ahora |
| `descartada` | No sigue, con motivo registrado |

## Criterios de promoción (compuerta G-1)

Una idea pasa a proyecto cuando cumple los cinco:

1. El problema está descrito y hay al menos una persona real que lo tiene.
2. Hay una hipótesis de valor que se puede medir.
3. Hay una primera versión que se puede construir en semanas, no meses.
4. Los riesgos principales (datos, legal, técnico) están identificados.
5. Quien decide confirma que quiere invertir tiempo en ella.

Lo que no tenga evidencia se marca `[SUPUESTO]`. No se inventan datos.
