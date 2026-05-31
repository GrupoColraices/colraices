# Specs: Sección “Contenido Multimedia” con videos reales de YouTube embebidos

## Resumen Técnico
La sección `Contenido Multimedia` del blog dejará de usar un arreglo local mockeado y pasará a consumir los 4 videos más recientes del canal oficial de YouTube de Colraices mediante fetch server-side. Se mantendrá el diseño actual de las cards y se incorporará reproducción embebida dentro del sitio usando el embed oficial de YouTube.

## Estado Actual
- `app/components/blog/MultimediaSection.tsx` renderiza 4 cards mockeadas con datos estáticos.
- La página `app/(general)/blog/page.tsx` ya orquesta datos del blog desde server-side.
- No existe aún una capa dedicada para consumir YouTube API.
- No hay reproducción real ni embed en la sección actual.

## Diseño Propuesto
1. Crear una capa de integración `app/lib/youtubeApi.ts`.
2. Traer los 4 videos más recientes del canal de YouTube desde server-side.
3. Normalizar la respuesta en un tipo interno reutilizable.
4. Pasar los videos a `MultimediaSection` mediante props.
5. Mantener el diseño de cards actual, reemplazando mocks por:
   - thumbnail real
   - título real
   - duración real
6. Habilitar reproducción embebida dentro del sitio.

## Flujo Completo de Datos
1. El usuario entra a `/blog`.
2. `app/(general)/blog/page.tsx` ejecuta su `Promise.all(...)`.
3. Se agrega una llamada a `getLatestYoutubeVideos()` desde `app/lib/youtubeApi.ts`.
4. `youtubeApi.ts`:
   - lee `YOUTUBE_API_KEY`
   - lee `YOUTUBE_CHANNEL_ID`
   - obtiene la playlist de uploads del canal
   - obtiene los 4 videos más recientes
   - obtiene detalles adicionales necesarios, especialmente duración
   - normaliza la respuesta
   - devuelve `{ videos, error }`
5. `page.tsx` pasa `videos` y `videosError` a `MultimediaSection`.
6. `MultimediaSection` renderiza las 4 cards manteniendo el diseño actual.
7. Al interactuar con una card, el usuario reproduce el video dentro del sitio mediante embed de YouTube.

## Modelo de Datos / Tipos Recomendados

```ts
export type YoutubeVideo = {
  id: string;
  title: string;
  description: string | null;
  channelTitle: string | null;
  thumbnailUrl: string | null;
  duration: string | null;
  embedUrl: string;
  publishedAt: string | null;
};

export type YoutubeVideosResult = {
  videos: YoutubeVideo[];
  error: string | null;
};
```

## Estrategia de Integración con YouTube API
Se recomienda un flujo robusto en 3 pasos:

### Paso 1: obtener uploads playlist del canal
Endpoint sugerido:
- `youtube/v3/channels?part=contentDetails&id={channelId}&key={apiKey}`

### Paso 2: obtener los últimos 4 items de esa playlist
Endpoint sugerido:
- `youtube/v3/playlistItems?part=snippet,contentDetails&playlistId={uploadsPlaylistId}&maxResults=4&key={apiKey}`

### Paso 3: obtener detalles de videos
Endpoint sugerido:
- `youtube/v3/videos?part=contentDetails,snippet&id={videoIds}&key={apiKey}`

### Justificación
Este enfoque permite obtener mejor precisión que `search`, además de la duración real del video, que es necesaria para la UI actual.

## Estrategia de Render / Reproducción Embebida
Se debe preservar el diseño actual de las cards mockeadas. Para eso:

- La estructura visual de la card se mantiene.
- El área visual superior pasa a usar thumbnail real del video.
- El badge de duración usa la duración real formateada.
- El título usa el título real del video.
- El botón play sigue siendo el disparador visual principal.

### Reproducción embebida
Dos variantes válidas:

#### Variante recomendada: modal con iframe
- Mantiene intacta la grilla de cards.
- El click en la card o en el botón abre un modal.
- El modal renderiza:

```html
<iframe
  src="https://www.youtube.com/embed/{videoId}?modestbranding=1"
  title="{videoTitle}"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>
```

**Ventajas:**
- mejor performance inicial que cargar 4 iframes simultáneos
- mantiene el diseño actual de cards
- el usuario no sale del sitio

#### Variante alternativa: embed inline por card
- Cada card contiene o expande un iframe dentro de la propia sección.
- Es válida, pero más pesada si se renderizan varios iframes activos.

## Manejo de Errores / Fallbacks
- Si faltan variables de entorno, devolver `videos: []` y error controlado.
- Si YouTube responde error o la cuota falla, devolver `videos: []` y error controlado.
- `MultimediaSection` no debe romper la página si `videos` está vacío.
- Fallback visual recomendado:
  - mantener el título de la sección
  - mostrar mensaje breve como: `No pudimos cargar el contenido multimedia en este momento.`

## Estrategia de Performance
- La API key debe permanecer server-side.
- Usar `fetch(..., { next: { revalidate: 3600 } })` o una ventana similar.
- Si se usa modal, cargar el iframe solo cuando el usuario seleccione un video.
- Evitar renderizar 4 iframes activos desde el inicio para no degradar la carga.

## Cambios Esperados por Archivo

### Nuevo
- `app/lib/youtubeApi.ts`
  - integración con YouTube API
  - tipos
  - normalización
  - manejo de errores

### Modificados
- `app/(general)/blog/page.tsx`
  - agregar `getLatestYoutubeVideos()` al flujo de datos
  - pasar `videos`/`videosError` a `MultimediaSection`

- `app/components/blog/MultimediaSection.tsx`
  - reemplazar mocks por props
  - mantener diseño actual de cards
  - agregar reproducción embebida dentro del sitio
  - incorporar estado de selección/modal si la implementación es client-side

- `.env.example`
  - documentar `YOUTUBE_API_KEY`
  - documentar `YOUTUBE_CHANNEL_ID`

## Criterios de Aceptación
1. La sección muestra 4 videos reales del canal oficial configurado.
2. Las cards conservan el diseño visual actual o uno equivalente, sin rediseño mayor.
3. El usuario puede reproducir el video dentro del sitio.
4. El usuario no es redirigido a YouTube para reproducirlo.
5. La duración mostrada coincide con la duración real del video.
6. La página del blog sigue funcionando si YouTube falla.
7. La API key no se expone en el frontend.

## Casos de Prueba Manuales
1. Entrar a `/blog` y verificar que se muestren 4 cards con videos reales.
2. Validar que las cards mantengan el look actual de la sección mockeada.
3. Hacer clic en una card y verificar que el video se reproduzca dentro del sitio.
4. Confirmar que no se abra una pestaña nueva ni se abandone la web.
5. Verificar que la duración mostrada coincida con la del video.
6. Simular ausencia de variables de entorno y confirmar fallback sin romper página.
7. Verificar responsive de la sección y del embed/modal en mobile.

## Riesgos / Edge Cases
- Límite o cuota de YouTube Data API.
- Videos sin thumbnail esperada en la calidad deseada.
- Descripciones muy largas que puedan afectar el alto visual si se decide mostrarlas.
- Diferencia entre el contenido visual actual (con categoría/emoji/gradiente) y los datos realmente disponibles desde YouTube.
- Si se opta por embed inline permanente, posible impacto de performance por múltiples iframes.

## Recomendación Final de Implementación
La mejor relación entre UX, performance y mantenimiento es:

- fetch server-side
- datos reales normalizados
- cards visuales conservadas
- reproducción mediante modal con iframe embebido cargado bajo demanda

De esta manera, el usuario no sale del sitio y se preserva la identidad visual actual de la sección.
