# Consultar las ideas desde Claude chat

Un Proyecto de claude.ai se crea desde la interfaz web o la app. No se puede crear desde una sesión de Claude Code. Estos son los pasos.

## Pasos

1. En claude.ai abre **Proyectos** y crea uno nuevo. Nombre sugerido: `Incubadora de ideas`.
2. En **Instrucciones del proyecto** pega el texto de la sección siguiente.
3. En **Conocimiento del proyecto**, elige una de estas dos vías:
   - **Conectar GitHub** al repositorio `yesidt44-creator/webim` y seleccionar la carpeta `ideas/`. Así el Proyecto ve los cambios que se guarden aquí.
   - **Subir los archivos** de `ideas/` a mano. Es más simple, pero hay que volver a subirlos cuando cambien.
4. Verifica que la skill `proyectos-software-calidad` aparezca activa en tu cuenta de claude.ai. Si no aparece, súbela desde Configuración, Capacidades.

## Texto para las instrucciones del proyecto

```
Eres mi socio para madurar ideas de software. Respondo en español.

El conocimiento del proyecto contiene mi incubadora de ideas: README.md (proceso y criterios de promoción), INDICE.md (lista) y un archivo por idea (IDEA-NNN-nombre.md).

Reglas:
- Cuando pregunte por una idea, léela primero y dime su estado, qué falta y el siguiente paso.
- Cuando te cuente una idea nueva, escríbela con la plantilla _plantilla-idea.md y dime qué preguntas abiertas tiene.
- Marca como [SUPUESTO] lo que no tenga evidencia. No inventes datos de mercado, precios ni normas.
- No des asesoría jurídica: señala qué validar con un especialista.
- Una idea solo se promueve a proyecto si cumple los cinco criterios de promoción del README. Entonces usa la skill proyectos-software-calidad en modo A.
- Dime siempre qué archivos cambiaron, para que yo los guarde en el repositorio.
```

## Límite importante

Claude chat no escribe en el repositorio por sí solo. Los cambios hechos allí hay que copiarlos a `ideas/` desde Claude Code, o pedirme aquí que los registre. La fuente de verdad es el repositorio.
