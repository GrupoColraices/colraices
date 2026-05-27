import Breadcrumb from "@/app/components/layout/Breadcrumb";
import SiteLayout from "@/app/components/layout/SiteLayout";
import BlogHero from "@/app/components/blog/BlogHero";
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
    search?: string | string[];
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
  const search = getStringParam(resolvedSearchParams?.search);

  const [
    { posts, error, pagination },
    { posts: featuredPosts },
    { categories, error: categoriesError },
  ] = await Promise.all([
    getBlogPosts({
      page: currentPage,
      categorySlug,
      search,
    }),
    getFeaturedBlogPosts(),
    getBlogCategories(),
  ]);

  return (
    <SiteLayout>
      <Breadcrumb />
      <BlogHero />

      <ExploreSection
        posts={posts}
        postsError={error}
        pagination={pagination}
        featuredPosts={featuredPosts}
        categories={categories}
        categoriesError={categoriesError}
        activeCategorySlug={categorySlug}
        activeSearch={search}
      />
      <StartHelpSection />
      <MultimediaSection />
    </SiteLayout>
  );
}
