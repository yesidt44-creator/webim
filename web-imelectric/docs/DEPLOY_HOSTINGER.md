# Despliegue en Hostinger (dominio propio)

## PDFs y rutas (recomendado)

- Los documentos están en **`public/norms/`** y se sirven con rutas **relativas al dominio**: `/norms/archivo.pdf`.
- **No hace falta** hardcodear `https://tudominio.com`: en producción el mismo código funciona en cualquier dominio o subdominio.
- Si en el futuro la web se publicara en un **subdirectorio** (p. ej. `tudominio.com/app/`), habría que configurar `basePath` en Next.js y revisar enlaces; con la web en la **raíz del dominio**, la configuración actual es la adecuada.

## Opciones de hosting Hostinger

### A) Hosting con Node.js (recomendado si está disponible en tu plan)

1. Subir el proyecto (o el resultado del build) y en el panel elegir **Node.js**.
2. En el servidor:
   - `npm ci` o `npm install`
   - `npm run build`
   - Arranque: `npm start` (puerto que indique Hostinger, suele mapearse con proxy).
3. Asegúrate de que la carpeta **`public/`** (incluida **`public/norms/`**) se despliega con el proyecto; Next sirve esos archivos estáticos automáticamente.

### B) Solo hosting estático (sin Node)

1. En `next.config.ts` habilitar salida estática:
   ```ts
   const nextConfig = { output: "export" };
   ```
2. Ejecutar `npm run build` y subir el contenido de la carpeta **`out/`** al directorio público del hosting (`public_html` o equivalente).
3. Los PDFs en **`out/norms/`** deben subirse completos (son archivos grandes; comprueba límites de tamaño del plan).

> **Nota:** Si más adelante usas API Routes, Server Actions con servidor o ISR, el modo `output: "export"` puede no ser viable; en ese caso usa la opción **A**.

## Rendimiento

- Los PDFs son pesados: conviene **compresión gzip/brotli** en el servidor (Hostinger suele ofrecerla en el panel).
- Para no inflar el repositorio Git, puedes guardar los PDF solo en el servidor o usar **Git LFS**; la app seguirá enlazando a `/norms/...`.

## Dominio personalizado

- En Hostinger, apunta el dominio al hosting y usa **HTTPS** (certificado Let’s Encrypt suele ser automático).
- No se requieren cambios en el código por usar dominio propio.
