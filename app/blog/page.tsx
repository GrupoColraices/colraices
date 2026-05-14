import Breadcrumb from "@/app/components/layout/Breadcrumb";
import SiteLayout from "@/app/components/layout/SiteLayout";
import BlogHero from "@/app/components/blog/BlogHero";
import StartHereSection from "@/app/components/blog/StartHereSection";
import ExploreSection from "@/app/components/blog/ExploreSection";
import StartHelpSection from "@/app/components/blog/StartHelpSection";
import MultimediaSection from "@/app/components/blog/MultimediaSection";
import { getAllBlogPosts } from "@/app/lib/blogApi";

type BlogPageProps = {
  searchParams?: Promise<{
    page?: string | string[];
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

export default async function Blog({ searchParams }: BlogPageProps) {
  const resolvedSearchParams = await searchParams;
  const currentPage = getPageParam(resolvedSearchParams?.page);
  const { posts, error, pagination } = await getAllBlogPosts(currentPage);

  return (
    <SiteLayout>
      <Breadcrumb />
      <BlogHero />
      <StartHereSection />
      <ExploreSection
        posts={posts}
        postsError={error}
        pagination={pagination}
      />
      <StartHelpSection />
      <MultimediaSection />
    </SiteLayout>
  );
}