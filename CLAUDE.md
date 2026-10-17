# webim

Este repositorio contiene dos cosas separadas:

- `web-imelectric/` y el resto del código: el sitio web ya construido. Sus reglas están en `web-imelectric/CLAUDE.md`.
- `ideas/`: incubadora de ideas de software. No es código del sitio.

## Incubadora de ideas

Cuando el usuario hable de una idea, de "la skill de proyectos" o pida consultar sus ideas:

1. Lee `ideas/README.md` (proceso, estados y criterios de promoción) y `ideas/INDICE.md` (lista de ideas).
2. Cada idea vive en `ideas/IDEA-NNN-nombre.md`. Se crea copiando `ideas/_plantilla-idea.md`.
3. Al actualizar una idea: cambia su estado, añade una fila a la bitácora y actualiza `INDICE.md`. No se borran ideas: se marcan `descartada` con el motivo.
4. Lo que no tenga evidencia se marca `[SUPUESTO]`. No se inventan datos de mercado, precios ni normas.

## Skill de proyectos

La skill instalada se llama `proyectos-software-calidad` (en el listado de skills como `anthropic-skills:proyectos-software-calidad`). Se usa solo cuando una idea cumple los criterios de promoción de `ideas/README.md`.

- Proyecto nuevo (modo A): el paquete de 10 documentos va en `proyectos/<nombre>/docs/`.
- No se mezcla con el código del sitio.
- Siempre "alineado con" las normas, nunca "certificado". Sin asesoría jurídica.
