# Documentación funcional

## Objetivo del proyecto

Colraices Web es el sitio público de Colraices. Su objetivo, según el contenido y metadata del código, es orientar a colombianos en el exterior sobre servicios para invertir, financiar, comprar vivienda y resolver procesos financieros, inmobiliarios, legales, migratorios y fiscales en Colombia.

El sitio funciona como vitrina comercial, centro de contenido y punto de contacto. No se encontró en el repo un área privada, autenticación de usuarios ni panel administrativo.

## Módulos principales

- Home: presenta el mensaje principal, unidades de servicio, crédito, tour, testimonios, blog, aliados y llamados a la acción.
- Finanzas y crédito: agrupa rutas de servicios financieros.
- Inmuebles: agrupa rutas de inversión inmobiliaria, búsqueda de inmueble y brújula inmobiliaria.
- Legal y migratorio: agrupa rutas de asesoría migratoria, emprendimiento, pensiones, representación legal y servicios fiscales.
- Nosotros: presenta historia, propósito, equipo y ecosistema Colraices.
- Blog: lista publicaciones, categorías, búsqueda, detalle de posts y contenido multimedia.
- Tour de la Vivienda: la ruta local `/tour-de-la-vivienda` redirige a la URL configurada en `NEXT_PUBLIC_TOUR_VIVIENDA_URL` o al fallback definido en código; no renderiza una landing local propia.
- Contacto: formularios de asesoría y botón flotante con opciones de llamada o WhatsApp.
- Política de privacidad: página pública de tratamiento de datos.

## Rutas visibles

Rutas principales detectadas en `app/` y `app/lib/officialUrls.ts`:

- `/`
- `/nosotros`
- `/blog`
- `/blog/[slug]`
- `/tour-de-la-vivienda`
- `/finanzas-y-credito`
- `/brujula-financiera`
- `/brujula-crediticia`
- `/buena-data`
- `/monetizacion`
- `/credito-para-colombianos-en-el-exterior`
- `/inversion-inmobiliaria`
- `/llave-inmobiliaria`
- `/brujula-inmobiliaria`
- `/legal-y-migratorio`
- `/asesoria-migratoria`
- `/representacion-legal-en-colombia`
- `/servicios-fiscales`
- `/pensiones`
- `/emprender-en-colombia`
- `/politica-de-privacidad`

`next.config.ts` también define redirects permanentes desde rutas antiguas hacia estas rutas actuales, por ejemplo `/finanzas` hacia `/finanzas-y-credito`, `/inmuebles` hacia `/inversion-inmobiliaria` y `/quienes-somos` hacia `/nosotros`.

Nota: aunque `/tour-de-la-vivienda` existe como ruta de App Router, su `page.tsx` ejecuta `redirect(TOUR_VIVIENDA_URL)`. También existen redirects permanentes desde `/tour` y `/tour-vivienda` hacia esa misma URL configurable.

## Flujo general del usuario

1. El usuario entra al home o a una landing de servicio.
2. Navega desde el menú principal hacia Finanzas, Inmuebles, Legal y Migración, Tour de la Vivienda o Blog.
3. En las landing de servicio encuentra contenido descriptivo, secciones de proceso, preguntas frecuentes y CTAs.
4. Los CTAs pueden abrir formularios de contacto, WhatsApp o enlaces externos configurados en `app/lib/officialUrls.ts`.
5. En el blog puede consultar publicaciones desde la API externa, filtrar por parámetros de búsqueda/categoría y abrir detalles por slug.
6. En la sección multimedia del blog se intentan cargar videos recientes de YouTube cuando las variables de entorno están configuradas.

## Integraciones visibles para el usuario

- Formularios de contacto enviados a HubSpot Forms desde `GeneralContactModal`.
- WhatsApp para contacto directo desde el botón flotante, footer y CTAs.
- Blog y testimonios consumidos desde `https://blog.colraices.com`.
- Videos de YouTube embebidos en la sección multimedia del blog.
- Enlaces externos a Davivienda para opciones de crédito, según constantes del repo.

## Canales visibles de contacto

El sitio expone estos canales desde el layout, footer o CTAs:

- Formularios de asesoría mediante modales (`GeneralContactModal`).
- WhatsApp con enlaces predefinidos desde botón flotante, footer y CTAs.
- Teléfonos visibles en footer: `(+1) 929 322 8886` y `(+57) 601 917 6737`.
- Correo visible en footer: `info@colraices.co`.
- Redes sociales visibles en footer: Facebook, Instagram, YouTube y LinkedIn.

## Alcance y restricciones detectadas

- El sitio no implementa login, cuenta de usuario ni administración editorial local.
- El blog, categorías, posts y testimonios dependen de servicios externos.
- Si faltan variables de YouTube, la sección multimedia del blog devuelve una lista vacía con mensaje de error controlado.
- Si faltan variables de HubSpot, los formularios no pueden enviarse correctamente.
- Parte del contenido del sitio está hardcodeado en componentes React.
- El proveedor de despliegue definitivo no está declarado en el repo.

## Documentos funcionales puntuales existentes

- `docs/prd-breadcrumb-refactor.md`
- `docs/spec-breadcrumb-central-map.md`
- `docs/prd-blog-multimedia-youtube.md`
- `docs/spec-blog-multimedia-youtube.md`
