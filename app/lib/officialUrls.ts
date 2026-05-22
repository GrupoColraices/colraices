const TOUR_VIVIENDA_FALLBACK_URL =
  "https://www.colraices.com/tour-de-la-vivienda";

export const officialUrls = {
  tourVivienda:
    process.env.NEXT_PUBLIC_TOUR_VIVIENDA_URL || TOUR_VIVIENDA_FALLBACK_URL,
} as const;
