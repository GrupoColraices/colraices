import type { MetadataRoute } from "next";
import { getAllBlogPosts, type BlogPost } from "./lib/blogApi";
import { SITE_URL, officialUrls } from "./lib/officialUrls";

const PRIVACY_POLICY_URL = `${SITE_URL}/politica-de-privacidad`;

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
  { url: PRIVACY_POLICY_URL, changeFrequency: "yearly", priority: 0.3 },
];

function getBlogPostLastModified(post: BlogPost, fallbackDate: Date): Date {
  if (!post.createdAt) {
    return fallbackDate;
  }

  const createdAt = new Date(post.createdAt);

  return Number.isNaN(createdAt.getTime()) ? fallbackDate : createdAt;
}

async function getBlogPostRoutes(
  lastModified: Date,
): Promise<MetadataRoute.Sitemap> {
  const firstPage = await getAllBlogPosts(1);
  const lastPage = firstPage.pagination?.lastPage ?? 1;
  const remainingPages =
    Number.isFinite(lastPage) && lastPage > 1
      ? Array.from({ length: lastPage - 1 }, (_, index) => index + 2)
      : [];

  const remainingResults = await Promise.all(
    remainingPages.map((page) => getAllBlogPosts(page)),
  );

  const posts = [firstPage, ...remainingResults].flatMap(
    (result) => result.posts,
  );
  const seenSlugs = new Set<string>();

  return posts.flatMap((post) => {
    const slug = post.slug.trim();

    if (!slug || seenSlugs.has(slug)) {
      return [];
    }

    seenSlugs.add(slug);

    return [
      {
        url: `${officialUrls.blog}/${slug}`,
        lastModified: getBlogPostLastModified(post, lastModified),
        changeFrequency: "weekly",
        priority: 0.6,
      },
    ];
  });
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();
  const blogPostRoutes = await getBlogPostRoutes(lastModified);

  return [
    ...routes.map((route) => ({
      ...route,
      lastModified,
    })),
    ...blogPostRoutes,
  ];
}
