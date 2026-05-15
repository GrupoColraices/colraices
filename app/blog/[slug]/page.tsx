import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/app/components/layout/Breadcrumb";
import SiteLayout from "@/app/components/layout/SiteLayout";
import { getBlogPostBySlug } from "@/app/lib/blogApi";

type BlogDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const { post, error } = await getBlogPostBySlug(slug);

  return (
    <SiteLayout>
      <Breadcrumb />

      <main className="bg-white">
        <section className="bg-[#F8FAFC] px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[920px]">
            <Link
              href="/blog"
              className="inline-flex text-[13px] font-bold text-[#2A3F77] transition hover:text-[#1A2E5C]"
            >
              ← Volver al blog
            </Link>

            {error || !post ? (
              <div className="mt-8 rounded-[14px] border border-[#F4C7C7] bg-[#FFF5F5] px-6 py-8 text-center">
                <h1 className="text-[24px] font-extrabold text-[#1A2340]">
                  No encontramos esta publicación
                </h1>

                <p className="mt-3 text-[14px] leading-[22px] text-[#8A1F1F]">
                  {error || "La publicación no está disponible en este momento."}
                </p>
              </div>
            ) : (
              <article className="mt-8 overflow-hidden rounded-[18px] border border-[#EDEDED] bg-white shadow-[0_12px_36px_rgba(15,45,92,0.08)]">
                {post.imageUrl ? (
                  <div className="relative h-[260px] w-full overflow-hidden bg-[#F1F4F8] sm:h-[360px]">
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      fill
                      priority
                      sizes="(min-width: 1024px) 920px, 100vw"
                      className="object-cover"
                    />
                  </div>
                ) : null}

                <div className="px-6 py-8 sm:px-10 sm:py-10">
                  <div className="flex flex-wrap items-center gap-3 text-[12px] font-bold uppercase tracking-[0.8px] text-[#2A3F77]">
                    <span>{post.category || "Blog Colraices"}</span>

                    {post.createdAt ? (
                      <>
                        <span className="text-[#B0B8C1]">•</span>
                        <span>{post.createdAt}</span>
                      </>
                    ) : null}

                    {post.author ? (
                      <>
                        <span className="text-[#B0B8C1]">•</span>
                        <span>{post.author}</span>
                      </>
                    ) : null}
                  </div>

                  <h1 className="mt-4 text-[32px] font-extrabold leading-[38px] tracking-[-0.6px] text-[#192440] sm:text-[42px] sm:leading-[50px]">
                    {post.title}
                  </h1>

                  {post.excerpt ? (
                    <p className="mt-5 text-[16px] leading-[26px] text-[#4B5563]">
                      {post.excerpt}
                    </p>
                  ) : null}

                  {post.content ? (
                    <div
                      className="mt-8 text-[15px] leading-[26px] text-[#374151] [&_a]:text-[#2A3F77] [&_a]:underline [&_li]:mb-2 [&_ol]:my-4 [&_p]:mb-4 [&_strong]:font-bold [&_strong]:text-[#192440] [&_ul]:my-4"
                      dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                  ) : (
                    <p className="mt-8 rounded-[12px] border border-dashed border-[#EDEDED] bg-[#FAFAFA] px-5 py-4 text-[14px] text-[#4B5563]">
                      Esta publicación no tiene contenido disponible.
                    </p>
                  )}
                </div>
              </article>
            )}
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}