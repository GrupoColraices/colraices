export const SITE_URL = "https://www.colraices.com";

const TOUR_VIVIENDA_FALLBACK_URL =
  "https://colraices.com/casas-apartamentos-colombia-desde-el-exterior";

export const TOUR_VIVIENDA_URL =
  process.env.NEXT_PUBLIC_TOUR_VIVIENDA_URL || TOUR_VIVIENDA_FALLBACK_URL;

export const OFFICIAL_WHATSAPP_NUMBER = "15136479405";

export const OFFICIAL_WHATSAPP_MESSAGE =
  "Hola, Colraices. Estoy fuera de Colombia, vengo desde la página web y quiero orientación para transformar mi remesa en patrimonio a largo plazo";

const OFFICIAL_WHATSAPP_ENCODED_MESSAGE = encodeURIComponent(
  OFFICIAL_WHATSAPP_MESSAGE,
).replace(/%20/g, "+");

export const OFFICIAL_WHATSAPP_URL = `https://api.whatsapp.com/send/?phone=${OFFICIAL_WHATSAPP_NUMBER}&text=${OFFICIAL_WHATSAPP_ENCODED_MESSAGE}&type=phone_number&app_absent=0`;

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
