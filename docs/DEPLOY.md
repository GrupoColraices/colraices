# Puesta en marcha y despliegue

## Prerrequisitos

- Ver requisitos generales en `README.md`.
- Node.js `20.9` o superior, según la documentación local de Next.js incluida en `node_modules/next/dist/docs/`.
- npm, porque el repo incluye `package-lock.json`.
- Variables de entorno configuradas según la funcionalidad que se vaya a validar.

## Desarrollo local

1. Instalar dependencias:

```bash
npm install
```

2. Crear variables locales:

```bash
copy .env.example .env.local
```

En sistemas Unix/macOS:

```bash
cp .env.example .env.local
```

3. Completar `.env.local` con los valores disponibles para el ambiente.

4. Levantar el servidor de desarrollo:

```bash
npm run dev
```

5. Abrir:

```txt
http://localhost:3000
```

## Build de producción

Ejecutar:

```bash
npm run build
```

Validación recomendada antes o después del build:

```bash
npm run lint
```

## Arranque en producción

Después de generar el build:

```bash
npm run start
```

Este comando usa `next start` y requiere que el build exista en `.next/`.

## Variables requeridas por funcionalidad

| Variable | Necesaria para |
| --- | --- |
| `NEXT_PUBLIC_TOUR_VIVIENDA_URL` | Definir la URL destino del Tour de la Vivienda. Si falta, el código usa fallback. |
| `YOUTUBE_API_KEY` | Cargar videos de YouTube en el blog. |
| `YOUTUBE_CHANNEL_ID` | Consultar los últimos videos del canal configurado. |
| `NEXT_PUBLIC_HUBSPOT_PORTAL_ID` | Enviar formularios de contacto a HubSpot. |
| `NEXT_PUBLIC_HUBSPOT_FORM_ID` | Enviar formularios de contacto a HubSpot. |

## Consideraciones de despliegue

- El repo no incluye `vercel.json`, Dockerfile ni configuración específica de plataforma.
- Para un servidor Node compatible con Next.js, usar `npm install`, `npm run build` y `npm run start`.
- Si se elige Vercel, partir de la configuración estándar de Next.js y validarla en ese proveedor. El proveedor definitivo queda pendiente de confirmar. Configurar las variables de entorno en el panel del proyecto antes de construir.
- Las variables `NEXT_PUBLIC_*` se inyectan en el bundle durante el build; cambiar sus valores después del build puede requerir reconstruir.
- Las APIs externas de blog, testimonios, YouTube y HubSpot deben estar accesibles desde el ambiente de despliegue.
- `next.config.ts` ya permite imágenes remotas desde `blog.colraices.com`, `localhost:8000` e `i.ytimg.com`.

## Verificaciones post-despliegue

- Abrir `/` y validar que carguen navbar, footer y botón flotante.
- Navegar a las rutas principales: `/finanzas-y-credito`, `/inversion-inmobiliaria`, `/legal-y-migratorio`, `/nosotros` y `/blog`.
- Verificar redirects antiguos, por ejemplo `/finanzas`, `/inmuebles` y `/quienes-somos`.
- Verificar que `/tour-de-la-vivienda`, `/tour` y `/tour-vivienda` redirijan a la URL configurada para el Tour de la Vivienda.
- Validar que `/blog` cargue posts, categorías, búsqueda/paginación y que `/blog/[slug]` abra un detalle existente.
- Validar la sección multimedia del blog si están configuradas `YOUTUBE_API_KEY` y `YOUTUBE_CHANNEL_ID`.
- Enviar una prueba controlada del formulario si están configuradas las variables HubSpot.
- Probar enlaces de WhatsApp, Davivienda y redes/contacto del footer.
- Revisar que imágenes remotas del blog y thumbnails de YouTube carguen correctamente.
- Revisar `/sitemap.xml` y `/robots.txt`.

## Huecos pendientes

- Confirmar proveedor oficial de despliegue.
- Confirmar valores reales de variables por ambiente.
- Definir si se requiere script de test automatizado, ya que actualmente no existe en `package.json`.
