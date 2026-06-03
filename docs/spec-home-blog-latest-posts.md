# Specs: Mostrar los 3 últimos posts reales del blog en el home

## Resumen Técnico
La sección `BlogSection` del home dejará de renderizar un arreglo estático mockeado y pasará a recibir los 3 últimos posts reales del blog. La data se obtendrá server-side desde la capa `app/lib/blogApi.ts`, reutilizando el endpoint `/api/v1/posts` con `per_page=3`, y se inyectará a `BlogSection` desde `app/page.tsx`.

## Estado Actual
- `app/components/home/BlogSection.tsx` es un Client Component que usa `framer-motion`.
- Hoy contiene un array `articles` local con 3 cards mockeadas.
- `app/page.tsx` renderiza `<BlogSection />` sin pasarle datos.
- `app/lib/blogApi.ts` ya tiene integración con el blog, pero hoy su paginación base está orientada a `POSTS_PER_PAGE = 6`.

## Diseño Propuesto
1. Extender la capa del blog para soportar `perPage` configurable.
2. Resolver server-side los 3 últimos posts desde `app/page.tsx`.
3. Pasar esos posts a `BlogSection` vía props.
4. Mantener `BlogSection` como Client Component para conservar animaciones.
5. Reemplazar las cards mockeadas por cards reales con imagen y metadata del post.

## Flujo de Datos
1. El usuario entra al home (`/`).
2. `app/page.tsx` ejecuta la carga server-side de los 3 últimos posts.
3. `app/lib/blogApi.ts` construye la URL de `posts` con `per_page=3`.
4. La respuesta se normaliza al modelo `BlogPost` ya existente.
5. `app/page.tsx` pasa los posts a `BlogSection`.
6. `BlogSection` renderiza las 3 cards reales manteniendo animación y estructura visual.

## Modelo de Datos Reutilizado
Se reutiliza `BlogPost` ya existente en `app/lib/blogApi.ts`.

Campos relevantes para esta sección:
- `title`
- `href`
- `imageUrl`
- `category`
- `createdAt`
- `readTime`
- `excerpt` (opcional si luego se requiere descripción)

## Estrategia de Integración con blogApi

### Cambio recomendado
Extender `getBlogPosts()` y/o `buildBlogPostsUrl()` para soportar:

```ts
perPage?: number
```

### Objetivo
Permitir que el home pueda pedir:

```ts
getBlogPosts({ perPage: 3 })
```

sin duplicar funciones específicas ni hardcodear otro fetch paralelo.

## Estrategia de Render en `BlogSection`
`BlogSection` debe recibir props similares a:

```ts
type BlogSectionProps = {
  posts: BlogPost[];
  postsError?: string | null;
};
```

### Mapeo visual sugerido
- `category` ← `post.category`
- `title` ← `post.title`
- `date` ← fecha formateada a una versión amigable
- `readTime` ← `post.readTime`
- `href` ← `post.href`
- `image` ← `post.imageUrl`

## Manejo Visual de Imagen
- Si `post.imageUrl` existe, usarla como imagen principal de la card.
- Si no existe, usar fallback visual coherente con el diseño actual.
- El área superior no debe quedar vacía ni romper la composición de la card.

## Manejo de Errores / Fallback
- Si la API falla, `app/page.tsx` debe seguir renderizando el home.
- `BlogSection` debe soportar `posts = []`.
- Fallback recomendado:
  - mantener encabezado de sección
  - mostrar estado vacío elegante o no renderizar cards si no hay datos
- No se recomienda volver a contenido mock si la API falla, para no mezclar contenido ficticio con real.

## Cambios Esperados por Archivo

### `app/lib/blogApi.ts`
- Extender el builder y/o `getBlogPosts()` para soportar `perPage` configurable.

### `app/page.tsx`
- Importar la función del blog.
- Resolver los 3 últimos posts server-side.
- Pasar props a `BlogSection`.

### `app/components/home/BlogSection.tsx`
- Eliminar el array mock local.
- Recibir props reales.
- Renderizar cards basadas en posts reales.
- Mantener animaciones con `framer-motion`.
- Conservar el CTA a `/blog`.

## Criterios de Aceptación
1. La sección del home muestra 3 posts reales y recientes.
2. Las cards mantienen el diseño general ya aprobado.
3. Cada card enlaza al post real correspondiente.
4. Si existe imagen del post, se muestra.
5. Si no existe imagen, se usa fallback visual sin romper la UI.
6. El home no depende de fetch cliente para esta sección.
7. Si la API falla, el home sigue cargando correctamente.

## Casos de Prueba Manuales
1. Entrar al home y verificar que aparecen 3 artículos reales del blog.
2. Verificar que el orden corresponde a los posts más recientes.
3. Validar que al hacer clic en una card se navega al post real.
4. Validar que la imagen real se muestra cuando existe.
5. Validar que el CTA “Ver todos los artículos” siga llevando a `/blog`.
6. Simular falla de API y confirmar que el home no rompe.
7. Revisar la sección en mobile/tablet/desktop.

## Riesgos / Edge Cases
- Posts sin imagen.
- Títulos más largos que los mocks originales.
- Fecha o tiempo de lectura ausente en algunos registros.
- Respuesta vacía del endpoint pese a estar operativo.

## Recomendación Final
La mejor solución es:
- extender `blogApi` con `perPage`
- resolver 3 posts server-side desde `app/page.tsx`
- dejar `BlogSection` como componente visual animado que consume props reales

Eso preserva la arquitectura actual y evita lógica innecesaria del lado cliente.
