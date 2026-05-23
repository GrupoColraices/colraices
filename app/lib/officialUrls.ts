export const SITE_URL = "https://www.colraices.com";

const TOUR_VIVIENDA_FALLBACK_URL =
  "https://colraices.com/casas-apartamentos-colombia-desde-el-exterior";

export const TOUR_VIVIENDA_URL =
  process.env.NEXT_PUBLIC_TOUR_VIVIENDA_URL || TOUR_VIVIENDA_FALLBACK_URL;

export const officialPaths = {
  home: "/",
  nosotros: "/nosotros",
  blog: "/blog",
  tourVivienda: "/tour-de-la-vivienda",
  finanzasHub: "/finanzas-y-credito",
  brujulaFinanciera: "/brujula-financiera",
  brujulaCrediticia: "/brujula-crediticia",
  buenaData: "/buena-data",
  monetizacion: "/monetizacion",
  credito: "/credito-para-colombianos-en-el-exterior",
  inmuebleHub: "/inversion-inmobiliaria",
  llaveInmobiliaria: "/llave-inmobiliaria",
  brujulaInmobiliaria: "/brujula-inmobiliaria",
  legalHub: "/legal-y-migratorio",
  asesoriaMigratoria: "/asesoria-migratoria",
  representacionLegal: "/representacion-legal-en-colombia",
  serviciosFiscales: "/servicios-fiscales",
  pensiones: "/pensiones",
  emprendimiento: "/emprender-en-colombia",
} as const;

type OfficialPathKey = keyof typeof officialPaths;

function toAbsoluteUrl(path: string): string {
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}

const officialPathUrls = Object.fromEntries(
  Object.entries(officialPaths).map(([key, path]) => [key, toAbsoluteUrl(path)]),
) as Record<OfficialPathKey, string>;

export const officialUrls = {
  ...officialPathUrls,
  tourVivienda: TOUR_VIVIENDA_URL,
} as Record<OfficialPathKey, string>;
