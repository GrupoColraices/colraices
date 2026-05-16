"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  useTransition,
} from "react";
import type {
  BlogCategory,
  BlogPagination,
  BlogPost,
} from "@/app/lib/blogApi";

type Article = {
  id: string;
  emoji: string;
  color: string;
  category: string;
  title: string;
  desc: string;
  readTime: string;
  date: string;
  href: string;
  imageUrl: string | null;
};

type ExploreSectionProps = {
  posts?: BlogPost[];
  latestPost?: BlogPost | null;
  featuredPosts?: BlogPost[];
  postsError?: string | null;
  pagination?: BlogPagination | null;
  categories?: BlogCategory[];
  categoriesError?: string | null;
  activeCategorySlug?: string | null;
};

const articles: Article[] = [
  {
    id: "static-remesas-vivienda",
    emoji: "🏠",
    color: "from-[#0F2A1D] to-[#1E5C3A]",
    category: "Inversión inmobiliaria",
    title: "De las remesas a la vivienda: el poder del ahorro en el exterior",
    desc: "Cómo convertir tus remesas en una estrategia de ahorro sólida para comprar vivienda en Colombia.",
    readTime: "9 min",
    date: "Mar 2025",
    href: "#",
    imageUrl: null,
  },
  {
    id: "static-rentabilidad-inmobiliaria",
    emoji: "📈",
    color: "from-[#162039] to-[#2A3F77]",
    category: "Inversión inmobiliaria",
    title: "Rentabilidad inmobiliaria: inversión en Colombia desde el exterior",
    desc: "Análisis real de rentabilidad y zonas clave para invertir en finca raíz desde el exterior.",
    readTime: "11 min",
    date: "Feb 2025",
    href: "#",
    imageUrl: null,
  },
  {
    id: "static-impuestos-colombia",
    emoji: "📋",
    color: "from-[#33143D] to-[#6D2A78]",
    category: "Legal y fiscal",
    title: "Impuestos en Colombia para colombianos en el exterior",
    desc: "Qué obligaciones fiscales tienes en Colombia cuando vives fuera del país y cómo manejarlas.",
    readTime: "8 min",
    date: "Abr 2025",
    href: "#",
    imageUrl: null,
  },
  {
    id: "static-viaje-colombia",
    emoji: "🧳",
    color: "from-[#1C3E78] to-[#2F63B4]",
    category: "Herramientas Colraices",
    title: "Aprovecha tu viaje a Colombia para fortalecer tu patrimonio",
    desc: "Una guía práctica de qué hacer cuando estás en Colombia para avanzar con tus metas financieras.",
    readTime: "6 min",
    date: "Ene 2025",
    href: "#",
    imageUrl: null,
  },
  {
    id: "static-brujula-financiera",
    emoji: "🧭",
    color: "from-[#162039] to-[#2A3F77]",
    category: "Herramientas Colraices",
    title: "Brújula Financiera: organiza y proyecta tu futuro desde el exterior",
    desc: "Conoce la herramienta gratuita de Colraices para entender tu situación financiera y proyectar tus metas.",
    readTime: "5 min",
    date: "Mar 2025",
    href: "#",
    imageUrl: null,
  },
  {
    id: "static-tour-vivienda",
    emoji: "🔑",
    color: "from-[#2A1500] to-[#C85C00]",
    category: "Herramientas Colraices",
    title: "Tour de la Vivienda: conecta con oportunidades en Colombia",
    desc: "Cómo el Tour de la Vivienda te permite conocer proyectos y tomar decisiones con información real.",
    readTime: "7 min",
    date: "Feb 2025",
    href: "#",
    imageUrl: null,
  },
];

const topArticles = [
  "¿Quieres saber si eres viable para crédito desde el exterior?",
  "Guía para comprar vivienda en Colombia desde el exterior",
  "Impuestos en Colombia para colombianos en el exterior",
  "Cómo consultar tu historial crediticio desde el exterior",
  "Brújula Financiera: organiza y proyecta tu futuro desde el exterior",
];

const topArticleColors = [
  "bg-[#1A2E5C]",
  "bg-[#0F4A2E]",
  "bg-[#4B205D]",
  "bg-[#2A4F91]",
  "bg-[#2D2B5F]",
];

const fallbackApiArticle: Article = {
  id: "fallback-api-article",
  emoji: "📰",
  color: "from-[#162039] to-[#2A3F77]",
  category: "Blog Colraices",
  title: "",
  desc: "Lee esta publicación del blog de Colraices y conoce información útil para colombianos en el exterior.",
  readTime: "Blog",
  date: "Reciente",
  href: "#",
  imageUrl: null,
};

function formatBlogDate(date?: string | null): string {
  const value = date?.trim();

  if (!value) {
    return "Reciente";
  }

  const shortDateMatch = value.match(/^(\d{1,2})-(\d{1,2})-(\d{2}|\d{4})$/);
  const normalizedDate = shortDateMatch
    ? new Date(
        Date.UTC(
          Number(
            shortDateMatch[3].length === 2
              ? `20${shortDateMatch[3]}`
              : shortDateMatch[3],
          ),
          Number(shortDateMatch[2]) - 1,
          Number(shortDateMatch[1]),
        ),
      )
    : new Date(value.replace(/\.(\d{3})\d*Z$/, ".$1Z"));

  if (Number.isNaN(normalizedDate.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("es-CO", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(normalizedDate);
}

function mapPostToArticle(
  post: BlogPost,
  index: number,
  fallbackCategory?: string | null,
): Article {
  const template = articles[index % articles.length] ?? fallbackApiArticle;
  const category = post.category || fallbackCategory || "Blog Colraices";

  return {
    ...template,
    id: post.id,
    title: post.title,
    href: post.href,
    imageUrl: post.imageUrl,
    desc:
      post.excerpt ||
      "Lee esta publicación del blog de Colraices y conoce información útil para colombianos en el exterior.",
    category,
    date: formatBlogDate(post.createdAt),
    readTime: post.readTime || "Artículo",
  };
}

function getPaginationPage(url?: string | null): number | null {
  if (!url) {
    return null;
  }

  try {
    const parsedUrl = new URL(url);
    const page = Number(parsedUrl.searchParams.get("page"));

    return Number.isFinite(page) && page > 0 ? page : null;
  } catch {
    return null;
  }
}

function SearchIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      className="h-3 w-3"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function BlogPaginationControls({
  pagination,
  isPending,
  onPageChange,
}: {
  pagination?: BlogPagination | null;
  isPending: boolean;
  onPageChange: (page: number) => void;
}) {
  if (!pagination || !pagination.lastPage || pagination.lastPage <= 1) {
    return null;
  }

  const currentPage = pagination.currentPage ?? 1;
  const prevPage = getPaginationPage(pagination.prevUrl);
  const nextPage = getPaginationPage(pagination.nextUrl);

  return (
    <nav
      className="mt-10 flex flex-col items-center justify-between gap-4 rounded-[12px] border border-[#EDEDED] bg-white px-5 py-4 sm:flex-row"
      aria-label="Paginación de publicaciones"
    >
      <p className="text-[13px] text-[#4B5563]">
        Página{" "}
        <span className="font-bold text-[#1A2340]">{currentPage}</span> de{" "}
        <span className="font-bold text-[#1A2340]">{pagination.lastPage}</span>
      </p>

      <div className="flex items-center gap-3">
        {prevPage ? (
          <button
            type="button"
            disabled={isPending}
            onClick={() => onPageChange(prevPage)}
            className="inline-flex h-[38px] items-center justify-center rounded-[8px] border border-[#EDEDED] bg-white px-4 text-[13px] font-bold text-[#2A3F77] transition hover:border-[#2A3F77] hover:bg-[#F8FAFC] disabled:cursor-wait disabled:opacity-60"
          >
            ← Anterior
          </button>
        ) : (
          <span className="inline-flex h-[38px] cursor-not-allowed items-center justify-center rounded-[8px] border border-[#EDEDED] bg-[#F8FAFC] px-4 text-[13px] font-bold text-[#B0B8C1]">
            ← Anterior
          </span>
        )}

        {nextPage ? (
          <button
            type="button"
            disabled={isPending}
            onClick={() => onPageChange(nextPage)}
            className="inline-flex h-[38px] items-center justify-center rounded-[8px] border border-[#2A3F77] bg-[#2A3F77] px-4 text-[13px] font-bold text-white transition hover:bg-[#1A2E5C] disabled:cursor-wait disabled:opacity-60"
          >
            {isPending ? "Cargando..." : "Siguiente →"}
          </button>
        ) : (
          <span className="inline-flex h-[38px] cursor-not-allowed items-center justify-center rounded-[8px] border border-[#EDEDED] bg-[#F8FAFC] px-4 text-[13px] font-bold text-[#B0B8C1]">
            Siguiente →
          </span>
        )}
      </div>
    </nav>
  );
}

export default function ExploreSection({
  posts,
  latestPost = null,
  featuredPosts,
  postsError = null,
  pagination = null,
  categories,
  categoriesError = null,
  activeCategorySlug = null,
}: ExploreSectionProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const shouldScrollToListRef = useRef(false);
  const [isPending, startTransition] = useTransition();
  const [query, setQuery] = useState("");

  const activeSlug = activeCategorySlug?.trim() || null;
  const visibleCategories = categories ?? [];
  const activeCategoryName =
    visibleCategories.find((category) => category.slug === activeSlug)?.name ||
    null;

  const apiArticles = useMemo(
    () => posts?.map((post, index) => mapPostToArticle(post, index, activeCategoryName)) ?? [],
    [posts, activeCategoryName],
  );

  const latestArticle = useMemo(
    () => (latestPost ? mapPostToArticle(latestPost, 0) : null),
    [latestPost],
  );

  const featuredApiArticles = useMemo(
    () => featuredPosts?.map((post, index) => mapPostToArticle(post, index)) ?? [],
    [featuredPosts],
  );

  const hasApiPosts = Array.isArray(posts);
  const sourceArticles = hasApiPosts ? apiArticles : articles;

  const filteredArticles = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return sourceArticles.filter((article) => {
      const matchesSearch =
        !normalizedQuery ||
        article.title.toLowerCase().includes(normalizedQuery) ||
        article.desc.toLowerCase().includes(normalizedQuery) ||
        article.category.toLowerCase().includes(normalizedQuery);

      return matchesSearch;
    });
  }, [query, sourceArticles]);

  const featuredSourceArticles =
    featuredApiArticles.length > 0 ? featuredApiArticles : sourceArticles;
  const visibleFeaturedSourceArticles = latestArticle
    ? featuredSourceArticles.filter((article) => article.id !== latestArticle.id)
    : featuredSourceArticles;

  const featuredArticles =
    hasApiPosts || featuredApiArticles.length > 0
      ? visibleFeaturedSourceArticles.slice(0, 5).map((article, index) => ({
          id: article.id,
          title: article.title,
          href: article.href,
          color: topArticleColors[index] ?? "bg-[#1A2E5C]",
        }))
      : topArticles.map((title, index) => ({
          id: title,
          title,
          href: "#",
          color: topArticleColors[index] ?? "bg-[#1A2E5C]",
        }));

  const hasSourceArticles = sourceArticles.length > 0;
  const isSearchEmpty = hasSourceArticles && filteredArticles.length === 0;
  const isApiEmpty = !postsError && hasApiPosts && sourceArticles.length === 0;

  useEffect(() => {
    if (!shouldScrollToListRef.current) {
      return;
    }

    shouldScrollToListRef.current = false;

    window.requestAnimationFrame(() => {
      document.getElementById("explorar")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }, [pagination?.currentPage, activeSlug]);

  function pushBlogParams(params: URLSearchParams) {
    const queryString = params.toString();

    shouldScrollToListRef.current = true;

    startTransition(() => {
      router.push(queryString ? `${pathname}?${queryString}` : pathname, {
        scroll: false,
      });
    });
  }

  function handleCategoryChange(categorySlug?: string | null) {
    const params = new URLSearchParams(searchParams.toString());

    params.delete("page");

    if (categorySlug) {
      params.set("category_slug", categorySlug);
    } else {
      params.delete("category_slug");
    }

    pushBlogParams(params);
  }

  function handlePageChange(page: number) {
    const params = new URLSearchParams(searchParams.toString());

    params.set("page", String(page));

    pushBlogParams(params);
  }

  return (
    <section
      id="explorar"
      className="scroll-mt-[96px] bg-white py-[72px] lg:py-[88px]"
    >
      <div className="mx-auto w-full max-w-[1088px] px-4 sm:px-6 lg:px-0">
        <div className="mx-auto text-center">
          <h2 className="text-[34px] font-extrabold leading-[40.8px] tracking-[-0.5px] text-[#192440]">
            Busca por tema
          </h2>

          <p className="mt-[10px] text-[15px] leading-[22.5px] text-[#4B5563]">
            Contenido organizado según lo que necesitas resolver.
          </p>
        </div>

        <div className="relative mx-auto mt-[22px] h-[41px] w-full max-w-[408px]">
          <input
            type="text"
            placeholder="Busca un tema específico..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="h-full w-full rounded-[10px] border border-[#EDEDED] bg-white px-[16px] pr-[44px] text-[13.5px] text-[#1A2340] shadow-none outline-none transition placeholder:text-[#9CA3AF] focus:border-[#2A3F77] focus:ring-4 focus:ring-[#2A3F77]/10"
          />

          <div className="pointer-events-none absolute right-[15px] top-1/2 -translate-y-1/2 text-[#94A3B8]">
            <SearchIcon />
          </div>
        </div>

        <div className="relative left-1/2 mt-[28px] flex w-[calc(100vw-32px)] max-w-[1180px] -translate-x-1/2 flex-nowrap justify-start gap-[10px] overflow-x-auto px-0 pb-2 sm:w-[calc(100vw-48px)] xl:justify-center [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <button
            type="button"
            onClick={() => handleCategoryChange(null)}
            disabled={isPending}
            className={[
              "h-[38px] shrink-0 whitespace-nowrap rounded-full border px-[20px] text-[13px] font-semibold leading-none transition disabled:cursor-wait disabled:opacity-70",
              !activeSlug
                ? "border-[#2A3F77] bg-[#2A3F77] text-white shadow-[0_8px_20px_rgba(42,63,119,0.18)]"
                : "border-[#EDEDED] bg-white text-[#4B5563] hover:border-[#2A3F77] hover:text-[#2A3F77]",
            ].join(" ")}
          >
            Todos
          </button>

          {visibleCategories.map((category) => {
            const isActive = activeSlug === category.slug;

            return (
              <button
                key={category.id || category.slug}
                type="button"
                onClick={() => handleCategoryChange(category.slug)}
                disabled={isPending}
                className={[
                  "h-[38px] shrink-0 whitespace-nowrap rounded-full border px-[20px] text-[13px] font-semibold leading-none transition disabled:cursor-wait disabled:opacity-70",
                  isActive
                    ? "border-[#2A3F77] bg-[#2A3F77] text-white shadow-[0_8px_20px_rgba(42,63,119,0.18)]"
                    : "border-[#EDEDED] bg-white text-[#4B5563] hover:border-[#2A3F77] hover:text-[#2A3F77]",
                ].join(" ")}
              >
                {category.name}
              </button>
            );
          })}
        </div>

        {categoriesError ? (
          <div
            className="mt-6 rounded-[12px] border border-[#F4C7C7] bg-[#FFF5F5] px-5 py-4 text-center text-[13px] text-[#8A1F1F]"
            role="alert"
          >
            {categoriesError}
          </div>
        ) : null}

        {postsError ? (
          <div
            className="mt-6 rounded-[12px] border border-[#F4C7C7] bg-[#FFF5F5] px-5 py-4 text-center text-[13px] text-[#8A1F1F]"
            role="alert"
          >
            {postsError}
          </div>
        ) : null}

        <div className="mt-[34px] grid gap-[44px] lg:grid-cols-[1fr_300px] lg:items-start">
          <div>
            {filteredArticles.length > 0 ? (
              <>
                <div className="grid gap-x-[24px] gap-y-[24px] sm:grid-cols-2">
                  {filteredArticles.map((article) => (
                    <article key={article.id}>
                      <Link
                        href={article.href}
                        className="group block overflow-hidden rounded-[12px] border border-[#EDEDED] bg-white shadow-[0_8px_24px_rgba(15,45,92,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(15,45,92,0.14)]"
                      >
                        <div
                          className={`relative flex h-[140px] items-center justify-center overflow-hidden bg-gradient-to-br ${article.color}`}
                        >
                          {article.imageUrl ? (
                            <Image
                              src={article.imageUrl}
                              alt={article.title}
                              fill
                              sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                              className="object-cover transition duration-300 group-hover:scale-105"
                            />
                          ) : (
                            <span className="absolute bottom-[10px] right-[14px] text-[40px] opacity-20 transition duration-300 group-hover:scale-110 group-hover:opacity-30">
                              {article.emoji}
                            </span>
                          )}
                        </div>

                        <div className="px-[18px] pb-[18px] pt-[16px]">
                          <div className="mb-[9px] text-[10px] font-bold uppercase leading-[15px] tracking-[0.8px] text-[#2A3F77]">
                            {article.category}
                          </div>

                          <h3 className="line-clamp-2 text-[15px] font-bold leading-[19.6px] text-[#1A2340] transition group-hover:text-[#2A3F77]">
                            {article.title}
                          </h3>

                          <p className="mt-[9px] line-clamp-2 text-[12.5px] leading-[20px] text-[#4B5563]">
                            {article.desc}
                          </p>

                          <div className="mt-[14px] flex items-center gap-[12px] text-[11.5px] leading-none text-[#B0B8C1]">
                            <div className="flex items-center gap-[4px]">
                              <ClockIcon />
                              <span>{article.readTime}</span>
                            </div>

                            <span>{article.date}</span>
                          </div>
                        </div>
                      </Link>
                    </article>
                  ))}
                </div>

                <BlogPaginationControls
                  pagination={pagination}
                  isPending={isPending}
                  onPageChange={handlePageChange}
                />
              </>
            ) : (
              <div className="rounded-[12px] border border-dashed border-[#EDEDED] bg-white p-10 text-center">
                <h3 className="text-[16px] font-bold text-[#1A2340]">
                  {isApiEmpty
                    ? "Aún no hay publicaciones disponibles"
                    : "No encontramos artículos"}
                </h3>

                <p className="mt-2 text-[13px] text-[#4B5563]">
                  {isSearchEmpty
                    ? "Intenta buscar con otra palabra."
                    : "Cuando haya publicaciones disponibles, las verás en esta sección."}
                </p>
              </div>
            )}
          </div>

          <aside className="pt-[2px] lg:sticky lg:top-[96px] lg:self-start">
            <div className="flex items-center gap-[10px]">
              <h3 className="shrink-0 text-[14px] font-extrabold leading-[21px] tracking-[-0.2px] text-[#192440]">
                Artículos destacados
              </h3>

              <span className="h-px flex-1 bg-[#EDEDED]" />
            </div>

            {latestArticle ? (
              <Link
                href={latestArticle.href}
                className="group mt-[16px] block overflow-hidden rounded-[12px] border border-[#EDEDED] bg-white shadow-[0_8px_24px_rgba(15,45,92,0.08)] transition hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(15,45,92,0.12)]"
              >
                <div
                  className={`relative h-[116px] overflow-hidden bg-gradient-to-br ${latestArticle.color}`}
                >
                  {latestArticle.imageUrl ? (
                    <Image
                      src={latestArticle.imageUrl}
                      alt={latestArticle.title}
                      fill
                      sizes="300px"
                      className="object-cover transition duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <span className="absolute bottom-[10px] right-[14px] text-[38px] opacity-25 transition duration-300 group-hover:scale-110">
                      {latestArticle.emoji}
                    </span>
                  )}
                </div>

                <div className="px-[16px] py-[15px]">
                  <p className="text-[10px] font-bold uppercase leading-[15px] tracking-[0.8px] text-[#2A3F77]">
                    Último artículo
                  </p>

                  <h4 className="mt-[7px] line-clamp-2 text-[13.5px] font-bold leading-[18.5px] text-[#1A2340] transition group-hover:text-[#2A3F77]">
                    {latestArticle.title}
                  </h4>

                  <div className="mt-[12px] flex items-center gap-[8px] text-[11px] leading-none text-[#B0B8C1]">
                    <span>{latestArticle.readTime}</span>
                    <span>{latestArticle.date}</span>
                  </div>
                </div>
              </Link>
            ) : null}

            <div className="mt-[16px]">
              {featuredArticles.map((article, index) =>
                article.href === "#" ? (
                  <div
                    key={article.id}
                    className="group grid grid-cols-[28px_52px_1fr] items-center gap-[12px] border-b border-[#EDEDED] py-[12px]"
                  >
                    <span className="text-[22px] font-extrabold leading-[22px] text-[#EDEDED]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      className={[
                        "h-[44px] w-[52px] rounded-[8px] shadow-[var(--shadow-sm)]",
                        article.color,
                      ].join(" ")}
                    />

                    <span className="text-[12.5px] font-semibold leading-[17.5px] text-[#1A2340]">
                      {article.title}
                    </span>
                  </div>
                ) : (
                  <Link
                    key={article.id}
                    href={article.href}
                    className="group grid grid-cols-[28px_52px_1fr] items-center gap-[12px] border-b border-[#EDEDED] py-[12px] transition hover:bg-[#FAFAFA]"
                  >
                    <span className="text-[22px] font-extrabold leading-[22px] text-[#EDEDED]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      className={[
                        "h-[44px] w-[52px] rounded-[8px] shadow-[var(--shadow-sm)] transition duration-300 group-hover:scale-105",
                        article.color,
                      ].join(" ")}
                    />

                    <span className="text-[12.5px] font-semibold leading-[17.5px] text-[#1A2340] transition group-hover:text-[#2A3F77]">
                      {article.title}
                    </span>
                  </Link>
                ),
              )}
            </div>

            <a
              href="https://blog.colraices.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-[28px] inline-flex h-[40px] w-full items-center justify-center rounded-[8px] border border-[#2A3F77] bg-white px-5 text-[13px] font-bold leading-none text-[#2A3F77] transition hover:bg-[#2A3F77] hover:text-white"
            >
              Ver todos los artículos →
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}