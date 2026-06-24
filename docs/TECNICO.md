# Documentación técnica

## Stack y dependencias principales

- Framework: Next.js `16.2.9` con App Router.
- UI: React `19.2.4` y React DOM `19.2.4`.
- Lenguaje: TypeScript `^5` con `strict: true`.
- Estilos: Tailwind CSS `^4`, PostCSS y CSS global en `app/globals.css`.
- Linting: ESLint `^9` y `eslint-config-next`.
- Dependencias usadas activamente en componentes actuales: `framer-motion`, `react-icons`, `react-slick`, `slick-carousel` y `react-world-flags`.
- Dependencias instaladas en `package.json` sin uso detectado actualmente en `app/`: `gsap` y `lucide-react`.
- Gestor de paquetes: npm, inferido por `package-lock.json`.

## Estructura relevante

- `app/`: código principal de la aplicación y rutas App Router.
- `app/(finanzas)/`, `app/(inmobiliaria)/`, `app/(legal)/`, `app/(general)/`: route groups usados para organizar páginas sin agregar esos segmentos a la URL.
- `app/components/`: componentes de layout, home, blog, formularios y secciones por servicio.
- `app/lib/`: helpers, rutas oficiales, breadcrumbs e integraciones externas.
- `public/`: assets estáticos servidos desde la raíz pública.
- `docs/`: documentación general, PRD y especificaciones puntuales.
- `next.config.ts`: configuración de imágenes remotas y redirects.
- `tsconfig.json`: configuración TypeScript y alias `@/*` hacia la raíz del repo.
- `.env.example`: plantilla de variables de entorno.

## Archivos y configuración relevante

- `package.json`: declara scripts `dev`, `build`, `start` y `lint`, dependencias y devDependencies.
- `package-lock.json`: lockfile de npm.
- `next.config.ts`: configura dominios remotos para `next/image` y redirects permanentes.
- `tsconfig.json`: habilita TypeScript estricto, plugin de Next y alias `@/*`.
- `eslint.config.mjs`: usa `eslint-config-next/core-web-vitals` y `eslint-config-next/typescript`, con ignores globales para `.next/`, `out/`, `build/` y archivos generados.
- `postcss.config.mjs`: configura el plugin `@tailwindcss/postcss`.
- `package.json` incluye un override de `next.postcss` a `8.5.10`.
- `.gitignore`: excluye `.env*` y permite versionar `.env.example`.

## Fuentes y tipografías

- `app/layout.tsx` configura Montserrat con `next/font/google` y aplica la clase de fuente al `<body>`.
- `app/globals.css` también importa Montserrat desde Google Fonts.
- `app/components/buena-data/BdHero.tsx` incluye un `@import` local de Google Fonts dentro del componente.
- Si se refactoriza tipografía o performance de fuentes, revisar estas tres ubicaciones para evitar cargas duplicadas.

## Convenciones App Router usadas

- `app/layout.tsx` define el root layout, metadata global, fuente Montserrat, botón flotante y Google Analytics.
- `app/page.tsx` expone la ruta `/`.
- Los archivos `page.tsx` exponen rutas públicas.
- Los archivos `layout.tsx` por segmento definen metadata/canonical por página.
- Los route groups entre paréntesis, como `(finanzas)`, organizan el código sin formar parte de la URL.
- `app/(general)/blog/[slug]/page.tsx` define la ruta dinámica de detalle de blog.
- `app/sitemap.ts` genera sitemap con rutas estáticas y posts del blog.
- `app/robots.ts` genera robots con referencia al sitemap.

## Componentes y módulos clave

- `app/components/layout/SiteLayout.tsx`: layout visual con navbar, main y footer.
- `app/components/layout/Navbar.tsx`: navegación principal y apertura del modal de contacto.
- `app/components/layout/Footer.tsx`: footer con contacto, redes y enlaces principales.
- `app/components/layout/FloatingContactButton.tsx`: botón flotante para llamada/WhatsApp.
- `app/components/layout/Breadcrumb.tsx`: render de breadcrumbs.
- `app/lib/breadcrumbs.ts`: mapa central de breadcrumbs y fallback por pathname.
- `app/components/forms/GeneralContactModal.tsx`: formulario de contacto que envía a HubSpot.
- `app/components/forms/FormSuccessModal.tsx`: confirmación de envío de formulario.
- `app/lib/officialUrls.ts`: rutas internas oficiales, URLs externas y enlaces de WhatsApp.
- `app/lib/blogApi.ts`: cliente de API del blog.
- `app/lib/youtubeApi.ts`: cliente server-side de YouTube Data API.
- `app/lib/TestimoniosApi.ts`: cliente de testimonios.

## Integraciones técnicas detectadas

- Blog API: `https://blog.colraices.com/api/v1/posts`, `/all`, `/categories`, `/last`, `/featured-posts` y detalle por slug.
- Testimonios: `https://blog.colraices.com/api/v1/testimonials`.
- YouTube Data API: `https://www.googleapis.com/youtube/v3`, usado server-side con `YOUTUBE_API_KEY` y `YOUTUBE_CHANNEL_ID`.
- HubSpot Forms: envío desde cliente a `https://api.hsforms.com/submissions/v3/integration/submit/{portalId}/{formId}`.
- WhatsApp: enlaces a `https://api.whatsapp.com/send/` con mensajes predefinidos.
- Davivienda: URL externa de crédito definida en `app/lib/officialUrls.ts`.
- Google Analytics: ID `G-PLK1HSPN55` hardcodeado en `app/layout.tsx`.
- Next Image: dominios remotos permitidos en `next.config.ts`: `blog.colraices.com`, `localhost:8000` e `i.ytimg.com`.

## Variables de entorno

| Variable | Donde se usa | Requerida para |
| --- | --- | --- |
| `NEXT_PUBLIC_TOUR_VIVIENDA_URL` | `next.config.ts`, `app/lib/officialUrls.ts` | URL configurable del Tour de la Vivienda. Tiene fallback. |
| `YOUTUBE_API_KEY` | `app/lib/youtubeApi.ts` | Cargar videos reales en el blog. |
| `YOUTUBE_CHANNEL_ID` | `app/lib/youtubeApi.ts` | Identificar el canal de YouTube para videos recientes. |
| `NEXT_PUBLIC_HUBSPOT_PORTAL_ID` | `app/components/forms/GeneralContactModal.tsx` | Enviar formularios a HubSpot. |
| `NEXT_PUBLIC_HUBSPOT_FORM_ID` | `app/components/forms/GeneralContactModal.tsx` | Enviar formularios a HubSpot. |

Notas:

- Las variables `NEXT_PUBLIC_*` quedan disponibles en el bundle del cliente y se fijan al momento del build.
- `YOUTUBE_API_KEY` no lleva prefijo público y se usa en código server-only.
- No se detectaron otras variables `process.env` en el repo.

## Consideraciones de mantenimiento

- Al agregar una ruta pública nueva, revisar si debe añadirse a `app/lib/officialUrls.ts`, `app/lib/breadcrumbs.ts`, `app/sitemap.ts`, navbar/footer y metadata de segmento.
- Si se usan nuevas imágenes remotas con `next/image`, agregar el dominio a `images.remotePatterns` en `next.config.ts`.
- `next build` en Next.js 16 no reemplaza la ejecución explícita de lint; usar `npm run lint` como validación separada.
- El contenido del blog/testimonios depende de APIs externas; manejar fallos sin romper la experiencia.
- El repo no declara scripts de test automatizado.
- El proveedor final de despliegue no está documentado en configuración del repo.

## Documentos técnicos puntuales existentes

- `docs/spec-breadcrumb-central-map.md`
- `docs/spec-blog-multimedia-youtube.md`
