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

## Variables de entorno en el servidor (producción)

En el panel de Node.js de Hostinger (o en un archivo `.env` que el panel permita), configura al menos:

| Variable | Uso |
|----------|-----|
| `SMTP_HOST` | Servidor SMTP de Hostinger: `smtp.hostinger.com`. |
| `SMTP_PORT` | Puerto SMTP seguro: `465`. |
| `SMTP_USER` | Usuario del buzón: `contacto@imelectric.es`. |
| `SMTP_PASSWORD` | Contraseña real del buzón. Configurar solo en el VPS; nunca subir a Git. |
| `SMTP_FROM` | Remitente de los formularios: `contacto@imelectric.es`. |
| `CONTACT_TO_EMAIL` | Bandeja que recibe los leads: `contacto@imelectric.es`. |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Opcional — Google Analytics. |
| `NEXT_PUBLIC_CLARITY_PROJECT_ID` | Opcional — Microsoft Clarity. |

El endpoint `/api/contact` envía mediante el servidor SMTP del propio hosting con Nodemailer; no depende de un proveedor transaccional externo. Si la configuración SMTP está incompleta, responde `503` y el frontend ofrece `mailto:` como respaldo.

Copia desde `web-imelectric/.env.example` como referencia; **no subas** `.env` con secretos al repositorio.

## ¿Listo para subir?

- **Sí**, si tu plan incluye **aplicación Node.js** (no solo PHP / estático “puro”).
- **Node recomendado:** 20 LTS (mínimo suele ser 18+ para Next reciente).
- **Comandos típicos** en el servidor o en el flujo de despliegue: `npm ci` → `npm run build` → `npm start` (Hostinger suele inyectar `PORT`; `next start` lo respeta).
- **No** actives `output: "export"` en `next.config.ts` si quieres que funcionen los formularios por API: esta web usa **`/api/contact`** y necesita proceso Node en marcha.

---

## VPS Hostinger (Node ya activo) — paso a paso

Trabaja **siempre** dentro de **`web-imelectric/`** (donde está el `package.json` de Next).

### 1. Código en el servidor

```bash
cd ~
git clone https://github.com/TU_USUARIO/TU_REPO.git imelectric
cd imelectric/web-imelectric
```

(Si tu repo solo contiene la app Next sin carpeta padre, `cd` directamente a esa carpeta tras clonar.)

### 2. Variables de entorno

```bash
nano .env
```

Pega y ajusta (ver tabla arriba). Guarda. **No** subas `.env` a Git.

### 3. Instalar dependencias y compilar

```bash
npm ci
npm run build
```

### 4. Probar en el VPS (opcional)

```bash
HOSTNAME=0.0.0.0 PORT=3000 npm start
```

Abre en el navegador `http://IP_DEL_VPS:3000`. Si carga, el build está bien. `Ctrl+C` para parar.

### 5. Dejarlo siempre encendido con PM2

```bash
sudo npm install -g pm2
cd ~/imelectric/web-imelectric   # ajusta la ruta
pm2 start npm --name imelectric -- start
pm2 save
pm2 startup   # sigue las instrucciones que imprime (systemd)
```

Para que Next escuche en todas las interfaces (necesario detrás de Nginx):

```bash
pm2 delete imelectric
HOSTNAME=0.0.0.0 PORT=3000 pm2 start npm --name imelectric -- start
pm2 save
```

O define en `.env` del proyecto: `HOSTNAME=0.0.0.0` y `PORT=3000` (Next los lee en `next start`).

### 6. Nginx como proxy (HTTPS en 443)

Instala Nginx y Certbot según la guía de Hostinger. Bloque de servidor mínimo (sustituye `tudominio.com`):

```nginx
server {
    listen 80;
    server_name tudominio.com www.tudominio.com;
    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Luego: `sudo certbot --nginx -d tudominio.com -d www.tudominio.com` (o el flujo que indique Hostinger).

### 7. Actualizar la web después de un `git push`

```bash
cd ~/imelectric/web-imelectric
git pull
npm ci
npm run build
pm2 restart imelectric
```

### Firewall

Abre **80** y **443** para HTTP/HTTPS. El **3000** no hace falta exponerlo si solo Nginx habla con `127.0.0.1:3000`.

---

## Security headers — Nginx (solo el server block de imelectric.es)

> **⚠️ Este VPS aloja 4 sitios.** Los pasos siguientes deben aplicarse **únicamente** al
> `server {}` block de imelectric.es. No editar `nginx.conf` (sección `http {}`), ni archivos
> `include` compartidos entre los 4 sitios.

### Paso 1 — Diagnóstico: localizar el archivo correcto

```bash
# Listar todos los vhosts/sites disponibles:
ls -la /etc/nginx/sites-available/
ls -la /etc/nginx/sites-enabled/

# Buscar el server block que contiene imelectric.es:
grep -rl "imelectric.es" /etc/nginx/sites-available/
grep -rl "imelectric.es" /etc/nginx/conf.d/

# Confirmar que es un server block independiente (no comparte add_header con otros):
cat /etc/nginx/sites-available/<NOMBRE_ARCHIVO_ENCONTRADO>
```

Confirma que el archivo tiene `server_name imelectric.es www.imelectric.es;` (o similar) y que
**no usa** un `include` de headers compartido con los otros 3 sitios antes de editar.

### Paso 2 — Añadir los headers dentro del server block de imelectric.es

Agrega las siguientes líneas **dentro del bloque `server { }`** correspondiente a imelectric.es,
**antes de** la directiva `location / { ... }`:

```nginx
server {
    # ... tu configuración existente (listen, server_name, SSL, etc.) ...

    # ── Security headers — solo para imelectric.es ─────────────────────────
    # Estos add_header están dentro de este server block, no en http{} global.
    add_header Strict-Transport-Security "max-age=31536000" always;
    add_header X-Content-Type-Options    "nosniff" always;
    add_header X-Frame-Options           "DENY" always;
    add_header Referrer-Policy           "strict-origin-when-cross-origin" always;
    add_header Permissions-Policy        "camera=(), microphone=(), geolocation=(), payment=()" always;
    add_header Content-Security-Policy   "default-src 'none'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.clarity.ms; style-src 'self' 'unsafe-inline'; font-src 'self'; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://region1.google-analytics.com https://*.clarity.ms; media-src 'none'; frame-src 'none'; object-src 'none'; base-uri 'self'; form-action 'self'; upgrade-insecure-requests" always;
    # ───────────────────────────────────────────────────────────────────────

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### Paso 3 — Validar sintaxis ANTES de recargar

```bash
sudo nginx -t
```

Resultado esperado:
```
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
```

**Si hay cualquier error de sintaxis, NO continuar con el paso 4.** Corregir primero.
Un error de sintaxis en nginx -t que se recargaría tumbaría los 4 sitios del VPS.

### Paso 4 — Recargar Nginx (solo tras confirmar nginx -t exitoso)

```bash
sudo systemctl reload nginx
# O equivalente según la versión/setup del VPS:
# sudo nginx -s reload
```

### Nota sobre duplicación de headers

Los headers también están configurados en `next.config.ts` (función `headers()`).
Nginx los agrega como redundancia: si el proceso Next/PM2 cae o responde sin headers,
Nginx los añade igualmente. No hay problema en que aparezcan dos veces si ambas capas
los emiten — el navegador usa el primero que recibe.

Si prefieres evitar la duplicación, puedes omitir los `add_header` de Nginx y confiar
solo en los que emite Next.js — el efecto de seguridad es idéntico mientras el proceso
Node esté activo.
