import Breadcrumb from "@/app/components/layout/Breadcrumb";
import SiteLayout from "@/app/components/layout/SiteLayout";
import BlogHero from "@/app/components/blog/BlogHero";
import StartHereSection from "@/app/components/blog/StartHereSection";
import ExploreSection from "@/app/components/blog/ExploreSection";
import StartHelpSection from "@/app/components/blog/StartHelpSection";
import MultimediaSection from "@/app/components/blog/MultimediaSection";
import {
  getBlogCategories,
  getBlogPosts,
  getFeaturedBlogPosts,
} from "@/app/lib/blogApi";

type BlogPageProps = {
  searchParams?: Promise<{
    page?: string | string[];
    category_slug?: string | string[];
  }>;
};

function getPageParam(page?: string | string[]): number {
  const rawPage = Array.isArray(page) ? page[0] : page;
  const parsedPage = Number(rawPage);

  if (!Number.isFinite(parsedPage) || parsedPage < 1) {
    return 1;
  }

  return Math.floor(parsedPage);
}

function getStringParam(value?: string | string[]): string | null {
  const rawValue = Array.isArray(value) ? value[0] : value;
  const normalizedValue = rawValue?.trim();

  return normalizedValue || null;
}

export default async function Blog({ searchParams }: BlogPageProps) {
  const resolvedSearchParams = await searchParams;
  const currentPage = getPageParam(resolvedSearchParams?.page);
  const categorySlug = getStringParam(resolvedSearchParams?.category_slug);

  const [
    { posts, error, pagination },
    { posts: featuredPosts },
    { categories, error: categoriesError },
  ] = await Promise.all([
    getBlogPosts({
      page: currentPage,
      categorySlug,
    }),
    getFeaturedBlogPosts(),
    getBlogCategories(),
  ]);

  return (
    <SiteLayout>
      <Breadcrumb />
      <BlogHero />
      <StartHereSection />
      <ExploreSection
        posts={posts}
        postsError={error}
        pagination={pagination}
        featuredPosts={featuredPosts}
        categories={categories}
        categoriesError={categoriesError}
        activeCategorySlug={categorySlug}
      />
      <StartHelpSection />
      <MultimediaSection />
    </SiteLayout>
  );
}
