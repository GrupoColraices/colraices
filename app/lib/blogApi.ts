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

type ApiCategory = {
  id?: number | string | null;
  name?: string | null;
  slug?: string | null;
};

type ApiReadingTime = {
  minutos?: number | string | null;
  label?: string | null;
};

type ApiPost = {
  id?: number | string | null;
  titulo?: string | null;
  slug?: string | null;
  imagen?: string | null;
  extracto?: string | null;
  descripcion?: string | null;
  contenido?: string | null;
  categoria?: string | ApiCategory | null;
  autor?: string | null;
  creacion?: string | null;
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

const BLOG_BASE_URL = "https://blog.colraices.com";

const LATEST_POSTS_ENDPOINT = `${BLOG_BASE_URL}/api/v1/posts`;
const ALL_POSTS_ENDPOINT = `${BLOG_BASE_URL}/api/v1/all`;
const LAST_POST_ENDPOINT = `${BLOG_BASE_URL}/api/v1/last`;

const BLOG_ERROR_MESSAGE = "No se pudieron cargar las publicaciones del blog.";
const SINGLE_BLOG_ERROR_MESSAGE = "No se pudo cargar la publicación del blog.";

function normalizeText(value?: string | number | null): string {
  return String(value ?? "").trim();
}

function mapApiCategory(category?: ApiPost["categoria"]): {
  name: string | null;
  slug: string | null;
} {
  if (!category) {
    return {
      name: null,
      slug: null,
    };
  }

  if (typeof category === "string") {
    return {
      name: normalizeText(category) || null,
      slug: null,
    };
  }

  return {
    name: normalizeText(category.name) || null,
    slug: normalizeText(category.slug) || null,
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
  const title = normalizeText(post.titulo) || "Publicación sin título";
  const slug = normalizeText(post.slug) || id;
  const imageUrl = normalizeText(post.imagen) || null;
  const category = mapApiCategory(post.categoria);

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
    createdAt: normalizeText(post.creacion) || null,
    readTime: mapApiReadingTime(post.tiempo_lectura),
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

export function getLatestBlogPosts(): Promise<BlogPostsResult> {
  return fetchBlogPosts(LATEST_POSTS_ENDPOINT);
}

export function getAllBlogPosts(page = 1): Promise<BlogPostsResult> {
  const safePage = Number.isFinite(page) && page > 0 ? page : 1;

  return fetchBlogPosts(`${ALL_POSTS_ENDPOINT}?page=${safePage}`);
}

export function getLastBlogPost(): Promise<BlogPostResult> {
  return fetchSingleBlogPost(LAST_POST_ENDPOINT);
}

export function getBlogPostBySlug(slug: string): Promise<BlogPostResult> {
  return fetchSingleBlogPost(
    `${BLOG_BASE_URL}/api/v1/posts/${encodeURIComponent(slug)}`,
  );
}
