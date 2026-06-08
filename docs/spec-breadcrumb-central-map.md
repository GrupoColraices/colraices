# Especificaciones Técnicas y Funcionales: Nuevo Breadcrumb Jerárquico

## Resumen Técnico
Se reemplazará la lógica de resolución del breadcrumb basada puramente en segmentos de la URL (`usePathname`) por un sistema de **Mapa de Rutas Centralizado**. Este mapa modelará la jerarquía lógica de la aplicación, permitiendo que páginas situadas en rutas planas (ej. `/buena-data`) muestren ancestros que no están presentes en la URL (ej. `Finanzas`), resolviendo así la limitación natural de los route groups de Next.js.

## Estado Actual
El componente `Breadcrumb.tsx` descompone el `pathname` actual mediante `.split("/")`. Esto genera los siguientes problemas:

- **Invisibilidad de grupos:** Los directorios entre paréntesis como `(finanzas)` o `(legal)` no aparecen en la URL, por lo que el breadcrumb actual los ignora.
- **Rutas planas sin contexto:** Una ruta como `/pensiones` se muestra como `Inicio > Pensiones`, cuando lógicamente debería ser `Inicio > Legal y Migración > Pensiones`.
- **Página sin breadcrumb:** `/nosotros` no renderiza actualmente `Breadcrumb`.

## Diseño Propuesto
1. **Configuración estática centralizada:** Un mapa que defina la etiqueta (`label`) y el padre (`parent`) de cada ruta.
2. **Resolución jerárquica:** Una función que reconstruya el camino desde la página actual hasta la raíz (`/`).
3. **Soporte de labels dinámicos:** Permitir override del último label para casos como el detalle del blog.
4. **Adopción transversal:** La misma estrategia deberá aplicar a Finanzas, Inmuebles, Legal, General y Blog.

## Modelo de Datos / Configuración del Mapa Central
Se recomienda crear un archivo dedicado, por ejemplo `app/lib/breadcrumbs.ts`, con una estructura similar a la siguiente:

```ts
export interface BreadcrumbNode {
  label: string;
  parent?: string;
}

export const BREADCRUMB_MAP: Record<string, BreadcrumbNode> = {
  "/": { label: "Inicio" },

  "/finanzas-y-credito": { label: "Finanzas", parent: "/" },
  "/brujula-financiera": {
    label: "Brújula Financiera",
    parent: "/finanzas-y-credito",
  },
  "/brujula-crediticia": {
    label: "Brújula Crediticia",
    parent: "/finanzas-y-credito",
  },
  "/buena-data": { label: "Buena Data", parent: "/finanzas-y-credito" },
  "/monetizacion": { label: "Monetización", parent: "/finanzas-y-credito" },
  "/credito-para-colombianos-en-el-exterior": {
    label: "Crédito",
    parent: "/finanzas-y-credito",
  },

  "/inversion-inmobiliaria": { label: "Inmuebles", parent: "/" },
  "/llave-inmobiliaria": {
    label: "Llave Inmobiliaria",
    parent: "/inversion-inmobiliaria",
  },
  "/brujula-inmobiliaria": {
    label: "Brújula Inmobiliaria",
    parent: "/inversion-inmobiliaria",
  },

  "/legal-y-migratorio": { label: "Legal y Migración", parent: "/" },
  "/asesoria-migratoria": {
    label: "Asesoría Migratoria",
    parent: "/legal-y-migratorio",
  },
  "/representacion-legal-en-colombia": {
    label: "Representación Legal",
    parent: "/legal-y-migratorio",
  },
  "/servicios-fiscales": {
    label: "Servicios Fiscales",
    parent: "/legal-y-migratorio",
  },
  "/pensiones": { label: "Pensiones", parent: "/legal-y-migratorio" },
  "/emprender-en-colombia": {
    label: "Asesoría de Emprendimiento",
    parent: "/legal-y-migratorio",
  },

  "/blog": { label: "Blog", parent: "/" },
  "/nosotros": { label: "Nosotros", parent: "/" },
  "/tour-de-la-vivienda": { label: "Tour de la Vivienda", parent: "/" },
};
```

## Reglas de Resolución del Breadcrumb
1. La entrada principal será el `pathname` actual.
2. El sistema buscará el nodo correspondiente en `BREADCRUMB_MAP`.
3. Si el nodo tiene `parent`, deberá reconstruirse la cadena hasta llegar a `/`.
4. El render final deberá generar una secuencia ordenada de migas con `{ label, href, isLast }`.
5. Los niveles intermedios deberán ser clickeables; el último nivel no.

## Reglas para Rutas Dinámicas
Para el detalle del blog (`/blog/[slug]`):

- El componente `Breadcrumb` debería aceptar un prop opcional como `customLabel` o equivalente.
- Si la ruta actual coincide con el patrón `/blog/*`, el padre lógico será siempre `/blog`.
- El último label debería resolverse con el título del post cuando esté disponible; en su defecto, puede usarse un fallback amigable.

## Reglas de Fallback
Si una ruta no está declarada en el mapa:

1. El sistema no debe romperse.
2. Debe intentar formatear el último segmento de la URL como label visible.
3. El breadcrumb mínimo resultante debería degradar a una forma básica y segura, priorizando `Inicio > [Ruta actual]`.

## Lista de Rutas Actuales y Jerarquía Esperada

### General
- `/nosotros` → `Inicio > Nosotros`
- `/blog` → `Inicio > Blog`
- `/blog/[slug]` → `Inicio > Blog > [Título del post]`

### Finanzas
- `/finanzas-y-credito` → `Inicio > Finanzas`
- `/brujula-financiera` → `Inicio > Finanzas > Brújula Financiera`
- `/brujula-crediticia` → `Inicio > Finanzas > Brújula Crediticia`
- `/buena-data` → `Inicio > Finanzas > Buena Data`
- `/monetizacion` → `Inicio > Finanzas > Monetización`
- `/credito-para-colombianos-en-el-exterior` → `Inicio > Finanzas > Crédito`

### Inmobiliaria
- `/inversion-inmobiliaria` → `Inicio > Inmuebles`
- `/llave-inmobiliaria` → `Inicio > Inmuebles > Llave Inmobiliaria`
- `/brujula-inmobiliaria` → `Inicio > Inmuebles > Brújula Inmobiliaria`

### Legal y Migración
- `/legal-y-migratorio` → `Inicio > Legal y Migración`
- `/asesoria-migratoria` → `Inicio > Legal y Migración > Asesoría Migratoria`
- `/representacion-legal-en-colombia` → `Inicio > Legal y Migración > Representación Legal`
- `/servicios-fiscales` → `Inicio > Legal y Migración > Servicios Fiscales`
- `/pensiones` → `Inicio > Legal y Migración > Pensiones`
- `/emprender-en-colombia` → `Inicio > Legal y Migración > Asesoría de Emprendimiento`

## Cambios Esperados por Archivo / Componente
- **Nuevo archivo:** `app/lib/breadcrumbs.ts`
  - Contendrá tipos, mapa central y helpers si hacen falta.
- **Archivo existente:** `app/components/layout/Breadcrumb.tsx`
  - Dejará de resolver la jerarquía únicamente con `split("/")`.
  - Pasará a consultar el mapa central.
  - Deberá aceptar soporte para labels dinámicos en rutas especiales.
- **Archivo existente:** `app/(general)/nosotros/page.tsx`
  - Deberá incluir `Breadcrumb` para volver visible la miga en esa página.
- **Archivo existente:** `app/(general)/blog/[slug]/page.tsx`
  - Deberá pasar el label/título adecuado al breadcrumb si se implementa el override dinámico.

## Criterios de Aceptación
1. El breadcrumb debe reflejar la jerarquía lógica definida en el mapa, independientemente de la estructura visible de la URL.
2. `/nosotros` debe mostrar breadcrumb visible.
3. Las rutas internas de Finanzas, Inmuebles y Legal deben incluir su categoría padre lógica.
4. El detalle de blog debe mostrar `Inicio > Blog > [Título del post]` o un fallback definido.
5. Si falta una ruta en el mapa, el sistema no debe romper la navegación ni renderizar errores.

## Casos de Prueba Manuales
1. Navegar a `/finanzas-y-credito` y verificar `Inicio > Finanzas`.
2. Navegar a `/buena-data` y verificar `Inicio > Finanzas > Buena Data`.
3. Navegar a `/llave-inmobiliaria` y verificar `Inicio > Inmuebles > Llave Inmobiliaria`.
4. Navegar a `/pensiones` y verificar `Inicio > Legal y Migración > Pensiones`.
5. Navegar a `/nosotros` y verificar `Inicio > Nosotros`.
6. Navegar a `/blog` y verificar `Inicio > Blog`.
7. Navegar a `/blog/[slug]` y verificar que el último nivel use el título del post o el fallback definido.
8. Verificar en mobile que truncado y wrapping sigan funcionando correctamente.

## Riesgos / Edge Cases
- **Mantenimiento del mapa:** Cada nueva página navegable deberá registrarse si necesita jerarquía específica.
- **Desalineación de labels:** El nombre visible en breadcrumb puede diferir del título SEO o del nombre de la landing; esto debe ser una decisión consciente.
- **Rutas dinámicas:** El detalle de blog requiere una estrategia clara para evitar mostrar slugs crudos al usuario.
- **Inconsistencias por omisión:** Si una ruta se agrega y no se declara, el fallback debe cubrir el caso sin degradar la UX de forma grave.
