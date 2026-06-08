# PRD: Integración de últimos posts reales en la sección de blog del home

## Título
Mostrar los 3 últimos artículos reales del blog en la sección “Todo lo que nadie te explica cuando vives afuera” del home

## Contexto / Problema
La sección de blog del home, implementada en `app/components/home/BlogSection.tsx`, actualmente muestra 3 cards mockeadas con contenido estático. Esto genera una desconexión entre el blog real y la portada, además de obligar a mantener contenido falso en una sección que debería reflejar publicaciones recientes y vigentes.

Existe un endpoint real del blog (`/api/v1/posts`) que permite traer los artículos recientes utilizando `per_page=3`. El negocio necesita que esta sección del home muestre los 3 últimos posts reales, manteniendo el diseño actual de la sección lo más posible.

## Objetivo General
Reemplazar el contenido mockeado de la sección de blog del home por los 3 últimos artículos reales del blog, obtenidos desde la API existente, preservando la identidad visual de la sección y sin romper la experiencia del home.

## Objetivos Específicos
- Mostrar los 3 artículos más recientes del blog en el home.
- Mantener el diseño actual de las cards y las animaciones existentes.
- Usar información real del post: título, categoría, fecha, tiempo de lectura, imagen y enlace.
- Evitar dependencias innecesarias del lado cliente si la data puede resolverse server-side.
- Garantizar comportamiento seguro si la API falla o no devuelve resultados.

## Alcance
- Integración de los 3 últimos posts en la sección `BlogSection` del home.
- Ajustes en la capa de consumo de blog para soportar `per_page=3`.
- Paso de datos reales desde `app/page.tsx` a `BlogSection`.
- Uso de imagen real del post si existe, con fallback visual cuando no exista.

## Fuera de Alcance
- Rediseño completo de la sección de blog del home.
- Cambios en el backend o en el contrato del endpoint del blog.
- Nuevos filtros, paginación o búsqueda en la sección del home.
- Cambios en la página `/blog`, salvo reutilización de utilidades existentes.

## User Stories
- Como visitante del home, quiero ver contenido reciente del blog para entender que el sitio está actualizado y encontrar temas relevantes.
- Como visitante, quiero poder entrar al artículo real desde la card del home.
- Como equipo de contenido, quiero que la portada refleje automáticamente las publicaciones más recientes sin editar código manualmente.

## Requerimientos Funcionales
- **RF1:** La sección debe mostrar exactamente los 3 últimos artículos del blog.
- **RF2:** Cada card debe usar datos reales del post: título, categoría, fecha, tiempo de lectura, imagen y enlace.
- **RF3:** El CTA “Ver todos los artículos” debe seguir llevando a `/blog`.
- **RF4:** Si un artículo no tiene imagen, la card debe mostrar un fallback visual coherente con el diseño existente.
- **RF5:** Si la API falla o no devuelve artículos, el home no debe romperse.
- **RF6:** La implementación debe preservar las animaciones actuales de la sección.

## Requerimientos No Funcionales
- **RNF1:** La data debe resolverse preferiblemente server-side para mejorar SEO y evitar loading innecesario en cliente.
- **RNF2:** La integración debe reutilizar la capa de API ya existente del blog en vez de duplicar lógica.
- **RNF3:** La solución debe ser mantenible y permitir reutilizar `perPage` para otros escenarios futuros.
- **RNF4:** La sección debe seguir siendo responsive.

## Criterios de Éxito
- El home muestra 3 artículos reales y recientes.
- Cada card enlaza al artículo correspondiente.
- Se mantiene el diseño visual general de la sección.
- Si la API falla, el home sigue cargando sin errores fatales.
- La integración no introduce fetch redundante en cliente.

## Riesgos / Dependencias
- Dependencia del endpoint `/api/v1/posts` y su disponibilidad.
- Dependencia de que la capa actual del blog soporte correctamente `per_page=3`.
- Posible necesidad de ajustar el layout si las imágenes o títulos reales difieren mucho de los mocks.

## Consideraciones Abiertas
- Definir si en caso de error la sección debe mostrar estado vacío, mensaje o simplemente ocultar cards.
- Confirmar si la imagen real del post reemplaza totalmente al área visual mockeada o si se conserva un fallback decorativo.
