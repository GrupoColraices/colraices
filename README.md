# Colraices Web

Sitio web de Colraices para presentar servicios orientados a colombianos en el exterior. El proyecto expone secciones comerciales de finanzas, inmuebles, servicios legales/migratorios, blog, tour de vivienda, formularios de contacto y enlaces a canales externos como WhatsApp.

La documentación general del proyecto vive en:

- [docs/FUNCIONAL.md](docs/FUNCIONAL.md): objetivo, módulos, rutas y flujo del usuario.
- [docs/TECNICO.md](docs/TECNICO.md): stack, estructura, integraciones y mantenimiento.
- [docs/DEPLOY.md](docs/DEPLOY.md): puesta en marcha local, build y despliegue.

Además, `docs/` contiene PRD y especificaciones puntuales de funcionalidades como breadcrumbs y multimedia de YouTube.

## Stack principal

- Next.js `16.2.9` con App Router.
- React `19.2.4` y React DOM `19.2.4`.
- TypeScript `^5`.
- Tailwind CSS `^4` con PostCSS.
- ESLint `^9` con `eslint-config-next`.
- Dependencias usadas activamente en la implementación actual: `framer-motion`, `react-icons`, `react-slick`, `slick-carousel` y `react-world-flags`.
- Dependencias presentes en `package.json` sin uso detectado actualmente en `app/`: `gsap` y `lucide-react`.

## Requisitos previos

- Node.js `20.9` o superior, según la documentación local de Next.js incluida en `node_modules/next/dist/docs/`.
- npm. El repositorio incluye `package-lock.json`.
- Credenciales externas solo si se van a probar las integraciones que las usan: YouTube Data API y HubSpot Forms.

## Instalación

```bash
npm install
```

## Variables de entorno

Crear un archivo `.env.local` a partir de `.env.example` y completar los valores que correspondan al ambiente:

```bash
copy .env.example .env.local
```

En sistemas Unix/macOS:

```bash
cp .env.example .env.local
```

Variables usadas por el proyecto:

| Variable | Uso |
| --- | --- |
| `NEXT_PUBLIC_TOUR_VIVIENDA_URL` | URL usada para el Tour de la Vivienda y redirects relacionados. Tiene fallback en el código. |
| `YOUTUBE_API_KEY` | API key server-side para cargar videos recientes de YouTube en el blog. |
| `YOUTUBE_CHANNEL_ID` | Canal de YouTube usado por la sección multimedia del blog. |
| `NEXT_PUBLIC_HUBSPOT_PORTAL_ID` | Portal ID usado por los formularios de contacto HubSpot. |
| `NEXT_PUBLIC_HUBSPOT_FORM_ID` | Form ID usado por los formularios de contacto HubSpot. |

No subir `.env.local` ni secretos reales al repositorio.

## Scripts disponibles

| Script | Comando | Descripción |
| --- | --- | --- |
| `dev` | `next dev` | Levanta el servidor de desarrollo. |
| `build` | `next build` | Genera el build de producción. |
| `start` | `next start` | Sirve el build de producción. |
| `lint` | `eslint` | Ejecuta ESLint. |

## Correr en local

```bash
npm install
copy .env.example .env.local
npm run dev
```

Abrir `http://localhost:3000`.

Para validar antes de entregar cambios:

```bash
npm run lint
npm run build
```

## Producción

El flujo base de producción para un servidor Node compatible con Next.js es:

```bash
npm install
npm run build
npm run start
```

No hay un `vercel.json` ni configuración específica de proveedor en el repo. Si se usa Vercel u otra plataforma compatible con Next.js, configurar las variables de entorno en el panel del proveedor y usar los scripts declarados en `package.json`. Ver [docs/DEPLOY.md](docs/DEPLOY.md) para el paso a paso y verificaciones.
