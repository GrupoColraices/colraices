export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  imageUrl: string | null;
  href: string;
  excerpt: string | null;
  content: string | null;
  category: string | null;
  categorySlug: string | null;
  author: string | null;
  createdAt: string | null;
  readTime: string | null;
};

export type BlogCategory = {
  id: string;
  name: string;
  slug: string;
  postsCount: number | null;
};

type ApiCategory = {
  id?: number | string | null;
  name?: string | null;
  nombre?: string | null;
  title?: string | null;
  titulo?: string | null;
  slug?: string | null;
  category_slug?: string | null;
  categoria_slug?: string | null;
  slug_categoria?: string | null;
  posts_count?: number | string | null;
};

type ApiReadingTime = {
  minutos?: number | string | null;
  label?: string | null;
};

type ApiPost = {
  id?: number | string | null;
  titulo?: string | null;
  title?: string | null;
  slug?: string | null;
  imagen?: string | null;
  image?: string | null;
  image_url?: string | null;
  extracto?: string | null;
  descripcion?: string | null;
  contenido?: string | null;
  categoria?: string | ApiCategory | null;
  category?: string | ApiCategory | null;
  category_slug?: string | null;
  categoria_slug?: string | null;
  autor?: string | null;
  creacion?: string | null;
  created_at?: string | null;
  tiempo_lectura?: string | ApiReadingTime | null;
};

type BlogApiListResponse = {
  data?: ApiPost[];
  links?: {
    first?: string | null;
    last?: string | null;
    prev?: string | null;
    next?: string | null;
  };
  meta?: {
    current_page?: number;
    from?: number | null;
    last_page?: number;
    per_page?: number;
    to?: number | null;
    total?: number;
  };
};

type BlogApiSingleResponse = {
  data?: ApiPost | null;
};

type BlogApiCategoriesResponse = {
  data?: ApiCategory[];
};

type ApiTestimonial = {
  id?: number | string | null;
  service?: string | null;
  testimonial?: string | null;
  name?: string | null;
  country?: string | null;
  video_url?: string | null;
  rating?: number | string | null;
  has_image?: boolean | null;
  image_url?: string | null;
  initials?: string | null;
};

type BlogApiTestimonialsResponse = {
  data?: ApiTestimonial[];
};

export type BlogPagination = {
  currentPage: number | null;
  lastPage: number | null;
  perPage: number | null;
  total: number | null;
  nextUrl: string | null;
  prevUrl: string | null;
};

export type BlogPostsResult = {
  posts: BlogPost[];
  error: string | null;
  pagination: BlogPagination | null;
};

export type BlogPostResult = {
  post: BlogPost | null;
  error: string | null;
};

export type BlogCategoriesResult = {
  categories: BlogCategory[];
  error: string | null;
};

export type BlogTestimonial = {
  id: string;
  service: string | null;
  testimonial: string;
  name: string;
  country: string | null;
  videoUrl: string | null;
  rating: number | null;
  imageUrl: string | null;
  initials: string | null;
};

export type BlogTestimonialsResult = {
  testimonials: BlogTestimonial[];
  error: string | null;
};

const BLOG_BASE_URL = "https://blog.colraices.com";

const LATEST_POSTS_ENDPOINT = `${BLOG_BASE_URL}/api/v1/posts`;
const ALL_POSTS_ENDPOINT = `${BLOG_BASE_URL}/api/v1/all`;
const CATEGORIES_ENDPOINT = `${BLOG_BASE_URL}/api/v1/categories`;
const LAST_POST_ENDPOINT = `${BLOG_BASE_URL}/api/v1/last`;
const FEATURED_POSTS_ENDPOINT = `${BLOG_BASE_URL}/api/v1/featured-posts`;
const TESTIMONIALS_ENDPOINT = `${BLOG_BASE_URL}/api/v1/testimonials`;

const BLOG_ERROR_MESSAGE = "No se pudieron cargar las publicaciones del blog.";
const SINGLE_BLOG_ERROR_MESSAGE = "No se pudo cargar la publicación del blog.";
const CATEGORIES_ERROR_MESSAGE = "No se pudieron cargar las categorías del blog.";
const TESTIMONIALS_ERROR_MESSAGE = "No se pudieron cargar los testimonios.";

function normalizeText(value?: string | number | null): string {
  return String(value ?? "").trim();
}

function slugify(value?: string | number | null): string {
  return normalizeText(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, "y")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function normalizeCategoryLabel(value?: string | null): string {
  const text = normalizeText(value);

  if (!text) {
    return "";
  }

  return text
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

function normalizePublicUrl(value?: string | null): string | null {
  const url = normalizeText(value);

  if (!url) {
    return null;
  }

  try {
    const parsedUrl = new URL(url);

    if (parsedUrl.protocol !== "http:" && parsedUrl.protocol !== "https:") {
      return null;
    }

    return url;
  } catch {
    return null;
  }
}

function normalizeRemoteImageUrl(value?: string | null): string | null {
  const url = normalizePublicUrl(value);

  if (!url) {
    return null;
  }

  try {
    const parsedUrl = new URL(url);

    if (
      parsedUrl.hostname === "localhost" ||
      parsedUrl.hostname === "127.0.0.1"
    ) {
      return null;
    }

    if (parsedUrl.hostname === "blog.colraices.com") {
      parsedUrl.protocol = "https:";
      return parsedUrl.toString();
    }

    return parsedUrl.protocol === "https:" ? url : null;
  } catch {
    return null;
  }
}

function mapApiCategory(
  category?: ApiPost["categoria"] | ApiPost["category"],
  fallbackSlug?: string | null,
): {
  name: string | null;
  slug: string | null;
} {
  if (!category) {
    const slug = normalizeText(fallbackSlug);

    return {
      name: slug ? normalizeCategoryLabel(slug) : null,
      slug: slug || null,
    };
  }

  if (typeof category === "string") {
    const name = normalizeText(category);
    const slug = normalizeText(fallbackSlug) || slugify(name);

    return {
      name: name || null,
      slug: slug || null,
    };
  }

  const name =
    normalizeText(category.name) ||
    normalizeText(category.nombre) ||
    normalizeText(category.title) ||
    normalizeText(category.titulo);

  const slug =
    normalizeText(category.slug) ||
    normalizeText(category.category_slug) ||
    normalizeText(category.categoria_slug) ||
    normalizeText(category.slug_categoria) ||
    normalizeText(fallbackSlug) ||
    slugify(name);

  return {
    name: name || (slug ? normalizeCategoryLabel(slug) : null),
    slug: slug || null,
  };
}

function mapApiReadingTime(
  readingTime?: ApiPost["tiempo_lectura"],
): string | null {
  if (!readingTime) {
    return null;
  }

  if (typeof readingTime === "string") {
    return normalizeText(readingTime) || null;
  }

  const label = normalizeText(readingTime.label);
  const minutes = normalizeText(readingTime.minutos);

  if (label) {
    return label;
  }

  return minutes ? `${minutes} min de lectura` : null;
}

function stripHtml(value?: string | null): string | null {
  const text = normalizeText(value);

  if (!text) {
    return null;
  }

  return text
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function mapApiPostToBlogPost(post: ApiPost): BlogPost | null {
  const id = normalizeText(post.id);
  const title =
    normalizeText(post.titulo) ||
    normalizeText(post.title) ||
    "Publicación sin título";
  const slug = normalizeText(post.slug) || id;
  const imageUrl =
    normalizeRemoteImageUrl(post.imagen) ||
    normalizeRemoteImageUrl(post.image_url) ||
    normalizeRemoteImageUrl(post.image);

  const rawCategory = post.categoria ?? post.category;
  const category = mapApiCategory(
    rawCategory,
    post.category_slug || post.categoria_slug,
  );

  if (!id && !slug) {
    return null;
  }

  return {
    id: id || slug,
    title,
    slug,
    imageUrl,
    href: slug ? `/blog/${slug}` : "/blog",
    excerpt: stripHtml(post.extracto) || stripHtml(post.descripcion),
    content: post.contenido?.trim() || null,
    category: category.name,
    categorySlug: category.slug,
    author: normalizeText(post.autor) || null,
    createdAt:
      normalizeText(post.creacion) || normalizeText(post.created_at) || null,
    readTime: mapApiReadingTime(post.tiempo_lectura),
  };
}

function mapApiCategoryToBlogCategory(
  category: ApiCategory,
): BlogCategory | null {
  const name =
    normalizeText(category.name) ||
    normalizeText(category.nombre) ||
    normalizeText(category.title) ||
    normalizeText(category.titulo);

  const slug =
    normalizeText(category.slug) ||
    normalizeText(category.category_slug) ||
    normalizeText(category.categoria_slug) ||
    normalizeText(category.slug_categoria) ||
    slugify(name);

  const postsCount = Number(category.posts_count);

  if (!name || !slug) {
    return null;
  }

  return {
    id: normalizeText(category.id) || slug,
    name,
    slug,
    postsCount: Number.isFinite(postsCount) ? postsCount : null,
  };
}

function mapApiTestimonialToBlogTestimonial(
  testimonial: ApiTestimonial,
): BlogTestimonial | null {
  const id = normalizeText(testimonial.id);
  const quote = normalizeText(testimonial.testimonial);
  const name = normalizeText(testimonial.name);
  const parsedRating = Number(testimonial.rating);

  if (!quote || !name) {
    return null;
  }

  return {
    id: id || `${name}-${quote.slice(0, 24)}`,
    service: normalizeText(testimonial.service) || null,
    testimonial: quote,
    name,
    country: normalizeText(testimonial.country) || null,
    videoUrl: normalizePublicUrl(testimonial.video_url),
    rating: Number.isFinite(parsedRating) ? parsedRating : null,
    imageUrl: testimonial.has_image
      ? normalizeRemoteImageUrl(testimonial.image_url)
      : null,
    initials: normalizeText(testimonial.initials) || null,
  };
}

function mapPagination(response: BlogApiListResponse): BlogPagination | null {
  if (!response.meta && !response.links) {
    return null;
  }

  return {
    currentPage: response.meta?.current_page ?? null,
    lastPage: response.meta?.last_page ?? null,
    perPage: response.meta?.per_page ?? null,
    total: response.meta?.total ?? null,
    nextUrl: response.links?.next ?? null,
    prevUrl: response.links?.prev ?? null,
  };
}

function buildAllPostsUrl(page = 1): string {
  const safePage = Number.isFinite(page) && page > 0 ? Math.floor(page) : 1;
  const url = new URL(ALL_POSTS_ENDPOINT);

  url.searchParams.set("page", String(safePage));

  return url.toString();
}

function buildPostsByCategoryUrl(categorySlug: string): string {
  const url = new URL(LATEST_POSTS_ENDPOINT);

  url.searchParams.set("category_slug", categorySlug);

  return url.toString();
}

async function fetchBlogPosts(endpoint: string): Promise<BlogPostsResult> {
  try {
    const response = await fetch(endpoint, {
      headers: {
        Accept: "application/json",
      },
      next: {
        revalidate: 300,
      },
    });

    if (!response.ok) {
      return {
        posts: [],
        error: BLOG_ERROR_MESSAGE,
        pagination: null,
      };
    }

    const json = (await response.json()) as BlogApiListResponse;

    const posts = Array.isArray(json.data)
      ? json.data
          .map(mapApiPostToBlogPost)
          .filter((post): post is BlogPost => Boolean(post))
      : [];

    return {
      posts,
      error: null,
      pagination: mapPagination(json),
    };
  } catch {
    return {
      posts: [],
      error: BLOG_ERROR_MESSAGE,
      pagination: null,
    };
  }
}

async function fetchBlogCategories(): Promise<BlogCategoriesResult> {
  try {
    const response = await fetch(CATEGORIES_ENDPOINT, {
      headers: {
        Accept: "application/json",
      },
      next: {
        revalidate: 300,
      },
    });

    if (!response.ok) {
      return {
        categories: [],
        error: CATEGORIES_ERROR_MESSAGE,
      };
    }

    const json = (await response.json()) as BlogApiCategoriesResponse;

    const categories = Array.isArray(json.data)
      ? json.data
          .map(mapApiCategoryToBlogCategory)
          .filter((category): category is BlogCategory => Boolean(category))
      : [];

    return {
      categories,
      error: null,
    };
  } catch {
    return {
      categories: [],
      error: CATEGORIES_ERROR_MESSAGE,
    };
  }
}

async function fetchSingleBlogPost(endpoint: string): Promise<BlogPostResult> {
  try {
    const response = await fetch(endpoint, {
      headers: {
        Accept: "application/json",
      },
      next: {
        revalidate: 300,
      },
    });

    if (!response.ok) {
      return {
        post: null,
        error: SINGLE_BLOG_ERROR_MESSAGE,
      };
    }

    const json = (await response.json()) as BlogApiSingleResponse;
    const post = json.data ? mapApiPostToBlogPost(json.data) : null;

    return {
      post,
      error: post ? null : "No se encontró la publicación del blog.",
    };
  } catch {
    return {
      post: null,
      error: SINGLE_BLOG_ERROR_MESSAGE,
    };
  }
}

async function fetchBlogTestimonials(): Promise<BlogTestimonialsResult> {
  try {
    const response = await fetch(TESTIMONIALS_ENDPOINT, {
      headers: {
        Accept: "application/json",
      },
      next: {
        revalidate: 300,
      },
    });

    if (!response.ok) {
      return {
        testimonials: [],
        error: TESTIMONIALS_ERROR_MESSAGE,
      };
    }

    const json = (await response.json()) as BlogApiTestimonialsResponse;

    const testimonials = Array.isArray(json.data)
      ? json.data
          .map(mapApiTestimonialToBlogTestimonial)
          .filter(
            (testimonial): testimonial is BlogTestimonial =>
              Boolean(testimonial),
          )
      : [];

    return {
      testimonials,
      error: null,
    };
  } catch {
    return {
      testimonials: [],
      error: TESTIMONIALS_ERROR_MESSAGE,
    };
  }
}

export function getLatestBlogPosts(): Promise<BlogPostsResult> {
  return fetchBlogPosts(LATEST_POSTS_ENDPOINT);
}

export function getFeaturedBlogPosts(): Promise<BlogPostsResult> {
  return fetchBlogPosts(FEATURED_POSTS_ENDPOINT);
}

export function getBlogPosts({
  page = 1,
  categorySlug = null,
}: {
  page?: number;
  categorySlug?: string | null;
} = {}): Promise<BlogPostsResult> {
  if (categorySlug) {
    return fetchBlogPosts(buildPostsByCategoryUrl(categorySlug));
  }

  return fetchBlogPosts(buildAllPostsUrl(page));
}

export function getAllBlogPosts(page = 1): Promise<BlogPostsResult> {
  return getBlogPosts({ page });
}

export function getBlogCategories(): Promise<BlogCategoriesResult> {
  return fetchBlogCategories();
}

export function getLastBlogPost(): Promise<BlogPostResult> {
  return fetchSingleBlogPost(LAST_POST_ENDPOINT);
}

export function getBlogTestimonials(): Promise<BlogTestimonialsResult> {
  return fetchBlogTestimonials();
}

export function getBlogPostBySlug(slug: string): Promise<BlogPostResult> {
  return fetchSingleBlogPost(
    `${BLOG_BASE_URL}/api/v1/posts/${encodeURIComponent(slug)}`,
  );
}