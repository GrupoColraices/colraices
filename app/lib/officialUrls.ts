export const SITE_URL = "https://www.colraices.com";

export const DAVIVIENDA_CUPO_CREDITO_URL =
  "https://colraices.com/cupocreditoalinstante/";

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

export const MONETIZACION_WHATSAPP_MESSAGE =
  "Hola, Colraices. Estoy fuera de Colombia, vengo desde la página de monetización y quiero orientación";

const MONETIZACION_WHATSAPP_ENCODED_MESSAGE = encodeURIComponent(
  MONETIZACION_WHATSAPP_MESSAGE,
).replace(/%20/g, "+");

export const MONETIZACION_WHATSAPP_URL = `https://api.whatsapp.com/send/?phone=${OFFICIAL_WHATSAPP_NUMBER}&text=${MONETIZACION_WHATSAPP_ENCODED_MESSAGE}&type=phone_number&app_absent=0`;

export const CREDITO_WHATSAPP_MESSAGE =
  "Hola, Colraices. Estoy fuera de Colombia, vengo desde la página de crédito y quiero orientación para acceder a financiación e invertir en Colombia";

const CREDITO_WHATSAPP_ENCODED_MESSAGE = encodeURIComponent(
  CREDITO_WHATSAPP_MESSAGE,
).replace(/%20/g, "+");

export const CREDITO_WHATSAPP_URL = `https://api.whatsapp.com/send/?phone=${OFFICIAL_WHATSAPP_NUMBER}&text=${CREDITO_WHATSAPP_ENCODED_MESSAGE}&type=phone_number&app_absent=0`;

export const BRUJULA_FINANCIERA_WHATSAPP_MESSAGE =
  "Hola, Colraices. Estoy fuera de Colombia, vengo desde la página de brújula financiera y quiero orientación";

const BRUJULA_FINANCIERA_WHATSAPP_ENCODED_MESSAGE = encodeURIComponent(
  BRUJULA_FINANCIERA_WHATSAPP_MESSAGE,
).replace(/%20/g, "+");

export const BRUJULA_FINANCIERA_WHATSAPP_URL = `https://api.whatsapp.com/send/?phone=${OFFICIAL_WHATSAPP_NUMBER}&text=${BRUJULA_FINANCIERA_WHATSAPP_ENCODED_MESSAGE}&type=phone_number&app_absent=0`;

export const BRUJULA_CREDITICIA_WHATSAPP_MESSAGE =
  "Hola, Colraices. Estoy fuera de Colombia, vengo desde la página de brújula crediticia y quiero orientación";

const BRUJULA_CREDITICIA_WHATSAPP_ENCODED_MESSAGE = encodeURIComponent(
  BRUJULA_CREDITICIA_WHATSAPP_MESSAGE,
).replace(/%20/g, "+");

export const BRUJULA_CREDITICIA_WHATSAPP_URL = `https://api.whatsapp.com/send/?phone=${OFFICIAL_WHATSAPP_NUMBER}&text=${BRUJULA_CREDITICIA_WHATSAPP_ENCODED_MESSAGE}&type=phone_number&app_absent=0`;

export const ECOSISTEMA_WHATSAPP_MESSAGE =
  "Hola, Colraices. Vengo desde la página “Conoce el Ecosistema” y me gustaría recibir más información para colombianos en el exterior.";

const ECOSISTEMA_WHATSAPP_ENCODED_MESSAGE = encodeURIComponent(
  ECOSISTEMA_WHATSAPP_MESSAGE,
).replace(/%20/g, "+");

export const ECOSISTEMA_WHATSAPP_URL = `https://api.whatsapp.com/send/?phone=${OFFICIAL_WHATSAPP_NUMBER}&text=${ECOSISTEMA_WHATSAPP_ENCODED_MESSAGE}&type=phone_number&app_absent=0`;

export const BLOG_ORIENTATION_WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=15136479405&text=Hola+Colraices.+Soy+colombiano+en+el+exterior+y+vengo+del+blog.+Me+gustar%C3%ADa+recibir+orientaci%C3%B3n+para+entender+c%C3%B3mo+podr%C3%ADa+avanzar+en+mi+proceso+de+inversi%C3%B3n+y+financiamiento+en+Colombia.&type=phone_number&app_absent=0";

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
