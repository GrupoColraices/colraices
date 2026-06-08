# PRD: Refactorización de Sistema de Breadcrumbs - Colraices

## Título
Refactorización de Breadcrumb para Soporte de Jerarquías Lógicas (Route Groups)

## Contexto / Problema
El componente actual `Breadcrumb.tsx` construye las rutas de navegación basándose dinámicamente en los segmentos visibles de la URL mediante `usePathname()`.

Debido a que el proyecto utiliza **Route Groups** de Next.js (ej. `(finanzas)`, `(inmobiliaria)`, `(legal)`), existen niveles jerárquicos esenciales para el negocio que no están presentes en la URL.

**Ejemplo:** La página `/buena-data` se encuentra en `app/(finanzas)/buena-data/page.tsx`. El breadcrumb actual muestra `Inicio > Buena Data`, pero el requerimiento de negocio exige que muestre `Inicio > Finanzas > Buena Data`.

## Objetivo General
Migrar el sistema de breadcrumbs de una generación basada puramente en segmentos de URL a una solución basada en un **Mapa de Navegación Centralizado**, permitiendo inyectar niveles lógicos y etiquetas personalizadas independientemente de la estructura de la URL.

## Objetivos Específicos
- Implementar un mapa de configuración que defina la ruta completa de breadcrumbs para cada path del sitio.
- Inyectar niveles intermedios provenientes de Route Groups (Finanzas, Inmobiliaria, Legal, etc.).
- Asegurar que páginas fuera de grupos (ej. `/nosotros`) muestren su breadcrumb correspondiente.
- Mantener un mecanismo de fallback para rutas nuevas o no mapeadas explícitamente.

## Alcance
- **Componente:** `app/components/layout/Breadcrumb.tsx`.
- **Configuración:** Creación de un objeto/mapa de navegación que relacione `pathname` con un array de objetos `{ label, href }` o con nodos jerárquicos equivalentes.
- **Rutas Críticas:** `/buena-data`, `/nosotros`, y todas las landing de servicios bajo grupos de ruta.

## Fuera de Alcance
- Modificaciones estéticas o de diseño visual del componente.
- Refactorización de la estructura de carpetas o nombres de archivos del proyecto.
- Integración con CMS o APIs externas para la obtención de etiquetas dinámicas, salvo el caso puntual del título del detalle de blog si ya está disponible en la página.
- Considerar como defecto los datos hardcoded existentes, dado que el API aún está en construcción.

## User Stories / Necesidades del Usuario
- **Como usuario**, quiero ver la categoría principal a la que pertenece el servicio que estoy consultando para entender mejor la oferta de Colraices.
- **Como usuario**, quiero poder hacer clic en cualquier nivel intermedio del breadcrumb para volver a las secciones generales del sitio.
- **Como usuario**, quiero que la navegación contextual sea consistente entre verticales para no perderme dentro del sitio.

## Requerimientos Funcionales
- **RF1 - Mapa de Navegación:** El componente debe consultar un mapa donde la clave sea el `pathname` actual o una resolución equivalente basada en la ruta actual.
- **RF2 - Inyección de Niveles:** El sistema debe permitir definir N niveles de breadcrumb para una sola ruta (ej. 1 nivel en URL -> 2 niveles en breadcrumb).
- **RF3 - Jerarquía de Negocio:** Las rutas internas de cada vertical deben mostrar su categoría padre lógica, aunque dicha categoría no esté representada en la URL.
- **RF4 - Formateo de Fallback:** Si una ruta no está definida en el mapa, el componente debe intentar formatear el slug para garantizar que siempre haya feedback visual.
- **RF5 - Soporte `/nosotros`:** El componente debe ser visible y funcional en la ruta `/nosotros`.
- **RF6 - Compatibilidad con Blog:** El sistema debe permitir resolver correctamente breadcrumbs para `/blog` y `/blog/[slug]`.

## Requerimientos No Funcionales
- **Rendimiento:** La resolución del breadcrumb debe ser eficiente y no generar demoras perceptibles en el renderizado del cliente.
- **Mantenibilidad:** La estructura del mapa debe ser clara y fácil de extender para futuras páginas.
- **Tipado:** El mapa de navegación y la lógica asociada deben estar estrictamente tipados con TypeScript.
- **Robustez:** El breadcrumb no debe romperse si se agrega una nueva ruta y todavía no fue declarada en el mapa.

## Criterios de Éxito
- La ruta `/buena-data` muestra exitosamente: `Inicio > Finanzas > Buena Data`.
- La ruta `/nosotros` muestra exitosamente: `Inicio > Nosotros`.
- Las rutas internas de Inmuebles y Legal muestran su jerarquía lógica completa.
- Todos los links del breadcrumb, incluyendo los niveles intermedios inyectados, dirigen a las rutas correctas.
- El componente no muestra errores si el `pathname` no existe en el mapa de navegación.

## Riesgos / Dependencias
- **Dependencia de `usePathname`:** El componente seguirá dependiendo del hook de Next.js si se mantiene como Client Component.
- **Mantenimiento Manual:** Al ser un mapa central, cada página nueva requerirá una entrada manual si se desea una jerarquía específica.
- **Rutas Dinámicas:** El detalle de blog puede requerir una estrategia especial para mostrar un título amigable en lugar del slug.

## Consideraciones Abiertas
- Definir si las etiquetas del mapa deben alinearse con los títulos SEO o con la taxonomía comercial del sitio.
- Definir si el archivo del mapa central debe vivir en `app/lib/` o en otra carpeta de utilidades compartidas.
- Definir la estrategia exacta para rutas dinámicas como `/blog/[slug]`.
