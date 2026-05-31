# PRD: Integración de videos reales de YouTube en “Contenido Multimedia”

## Título
Integración de videos reales de YouTube embebidos en la sección “Contenido Multimedia” del blog

## Contexto / Problema
La sección `Contenido Multimedia` de la página de blog actualmente renderiza 4 cards mockeadas en `app/components/blog/MultimediaSection.tsx`. Aunque el diseño visual ya está construido, el contenido no es real y los videos no se reproducen desde la web actual.

El objetivo de negocio es mantener el diseño existente de las cards, reemplazar los mocks por los 4 videos más recientes del canal oficial de YouTube de Colraices y permitir que el usuario reproduzca el video sin salir del sitio.

## Objetivo General
Conectar la sección `Contenido Multimedia` del blog con el canal oficial de YouTube de Colraices para mostrar contenido real y reproducible dentro de la web, preservando la experiencia visual existente.

## Objetivos Específicos
- Mostrar los 4 videos más recientes del canal oficial de YouTube.
- Mantener el diseño actual de las cards mockeadas en la sección.
- Permitir la reproducción del video dentro del sitio sin redirigir al usuario a YouTube.
- Evitar exponer la API key de YouTube en el cliente.
- Implementar manejo de errores para que la página de blog no se rompa si la API falla.

## Alcance
- Integración de datos reales de YouTube para la sección `Contenido Multimedia`.
- Reemplazo de mocks por datos reales: título, thumbnail, duración y metadata relevante.
- Reproducción embebida del video dentro de la experiencia web.
- Ajustes en la página del blog y en la sección multimedia para consumir datos reales.
- Configuración de variables de entorno necesarias para la integración.

## Fuera de Alcance
- Rediseño visual completo de la sección.
- Creación de un reproductor personalizado fuera del embed de YouTube.
- Analítica avanzada de reproducción.
- Gestión editorial manual de qué videos aparecen, más allá de los 4 más recientes.
- Integración con playlists temáticas o múltiples canales.

## User Stories
- Como visitante del blog, quiero ver videos reales y actuales de Colraices para complementar la información escrita.
- Como visitante del sitio, quiero reproducir un video sin salir de la web para mantener el contexto de navegación.
- Como equipo de contenido, quiero que la sección se actualice automáticamente con los últimos videos del canal sin tener que editar código cada vez.

## Requerimientos Funcionales
- **RF1:** La sección debe mostrar los 4 videos más recientes del canal de YouTube configurado.
- **RF2:** Cada card debe conservar el diseño visual actual, sustituyendo contenido mockeado por datos reales.
- **RF3:** Cada card debe permitir iniciar la reproducción del video dentro del sitio.
- **RF4:** El usuario no debe ser redirigido a YouTube para reproducir el video.
- **RF5:** La integración debe ejecutarse del lado servidor o mediante una estrategia que no exponga secretos en frontend.
- **RF6:** Si la integración falla, la página de blog debe seguir funcionando y la sección debe degradar de forma controlada.
- **RF7:** La duración mostrada en la card debe reflejar la duración real del video.

## Requerimientos No Funcionales
- **RNF1:** La API key de YouTube no debe exponerse al cliente.
- **RNF2:** La carga de la sección debe usar caching/revalidation razonable para evitar consumo innecesario de cuota.
- **RNF3:** La solución debe ser mantenible y consistente con la arquitectura actual del proyecto en Next.js.
- **RNF4:** La experiencia responsive de la sección debe mantenerse.
- **RNF5:** La reproducción embebida no debe degradar innecesariamente el rendimiento inicial de la página.

## Criterios de Éxito
- La sección muestra 4 videos reales del canal oficial.
- Las cards mantienen el diseño actual o uno visualmente equivalente.
- El usuario puede reproducir el video sin salir del sitio.
- La integración no expone la API key en código cliente.
- Si YouTube falla o no devuelve resultados, la página del blog sigue siendo usable.

## Riesgos / Dependencias
- Dependencia de disponibilidad y cuota de YouTube Data API.
- Dependencia de variables de entorno correctamente configuradas.
- Necesidad de definir la mejor UX de reproducción embebida (inline o modal) sin romper el diseño actual.
- Posibles diferencias entre la metadata disponible en la API y el contenido visual de las cards mockeadas.

## Consideraciones Abiertas
- Definir si la reproducción embebida se hará inline dentro de cada card o en un modal manteniendo las cards como disparadores.
- Definir qué campos visuales actuales se preservan exactamente si YouTube no provee equivalentes directos (por ejemplo, categoría editorial).
- Definir el mensaje o comportamiento de fallback si no se pueden cargar videos.
