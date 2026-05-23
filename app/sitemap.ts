import type { MetadataRoute } from "next";
import { officialUrls } from "./lib/officialUrls";

const routes: MetadataRoute.Sitemap = [
  { url: officialUrls.home, changeFrequency: "weekly", priority: 1 },
  { url: officialUrls.nosotros, changeFrequency: "monthly", priority: 0.7 },
  { url: officialUrls.blog, changeFrequency: "weekly", priority: 0.7 },
  { url: officialUrls.tourVivienda, changeFrequency: "monthly", priority: 0.8 },
  { url: officialUrls.finanzasHub, changeFrequency: "monthly", priority: 0.9 },
  { url: officialUrls.brujulaFinanciera, changeFrequency: "monthly", priority: 0.8 },
  { url: officialUrls.brujulaCrediticia, changeFrequency: "monthly", priority: 0.8 },
  { url: officialUrls.buenaData, changeFrequency: "monthly", priority: 0.8 },
  { url: officialUrls.monetizacion, changeFrequency: "monthly", priority: 0.8 },
  { url: officialUrls.credito, changeFrequency: "monthly", priority: 0.9 },
  { url: officialUrls.inmuebleHub, changeFrequency: "monthly", priority: 0.9 },
  { url: officialUrls.llaveInmobiliaria, changeFrequency: "monthly", priority: 0.8 },
  { url: officialUrls.brujulaInmobiliaria, changeFrequency: "monthly", priority: 0.8 },
  { url: officialUrls.legalHub, changeFrequency: "monthly", priority: 0.8 },
  { url: officialUrls.asesoriaMigratoria, changeFrequency: "monthly", priority: 0.7 },
  { url: officialUrls.representacionLegal, changeFrequency: "monthly", priority: 0.7 },
  { url: officialUrls.serviciosFiscales, changeFrequency: "monthly", priority: 0.7 },
  { url: officialUrls.pensiones, changeFrequency: "monthly", priority: 0.7 },
  { url: officialUrls.emprendimiento, changeFrequency: "monthly", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    ...route,
    lastModified,
  }));
}
