/**
 * WORDPRESS REST API CLIENT
 * Conecta con santakomusic.com para obtener contenido dinámico
 */

const WP_API_URL = "https://santakomusic.com/wp-json/wp/v2";

/**
 * TIPOS
 */
export interface WPPost {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  featured_media: number;
  featured_image_src?: string;
  categories?: number[];
  tags?: number[];
}

export interface WPPage {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  date: string;
}

export interface WPMedia {
  id: number;
  source_url: string;
  alt_text: string;
  media_details?: {
    sizes?: {
      medium?: { source_url: string };
      large?: { source_url: string };
      full?: { source_url: string };
    };
  };
}

/**
 * FETCH GENÉRICO
 */
async function fetchWP<T>(endpoint: string, params?: Record<string, string>): Promise<T> {
  const url = new URL(`${WP_API_URL}${endpoint}`);
  
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
  }

  const response = await fetch(url.toString());
  
  if (!response.ok) {
    throw new Error(`WordPress API error: ${response.status}`);
  }

  return response.json();
}

/**
 * POSTS (Noticias)
 */
export async function getPosts(options?: {
  perPage?: number;
  page?: number;
  categories?: number[];
}): Promise<WPPost[]> {
  const params: Record<string, string> = {
    per_page: String(options?.perPage ?? 10),
    page: String(options?.page ?? 1),
    _embed: "true",
  };

  if (options?.categories?.length) {
    params.categories = options.categories.join(",");
  }

  return fetchWP<WPPost[]>("/posts", params);
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  const posts = await fetchWP<WPPost[]>("/posts", { slug });
  return posts[0] ?? null;
}

/**
 * PÁGINAS
 */
export async function getPages(): Promise<WPPage[]> {
  return fetchWP<WPPage[]>("/pages", { per_page: "100" });
}

export async function getPageBySlug(slug: string): Promise<WPPage | null> {
  const pages = await fetchWP<WPPage[]>("/pages", { slug });
  return pages[0] ?? null;
}

/**
 * MEDIA
 */
export async function getMedia(id: number): Promise<WPMedia | null> {
  try {
    return await fetchWP<WPMedia>(`/media/${id}`);
  } catch {
    return null;
  }
}

/**
 * PÁGINAS LEGALES (helper)
 */
export async function getLegalPages() {
  const slugs = ["aviso-legal", "politica-privacidad", "politica-de-cookies"];
  const pages = await Promise.all(slugs.map(getPageBySlug));
  
  return {
    avisoLegal: pages[0],
    privacidad: pages[1],
    cookies: pages[2],
  };
}

/**
 * UTILIDAD: Limpiar HTML de WordPress
 */
export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").trim();
}

export function decodeHtmlEntities(text: string): string {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&nbsp;/g, " ");
}
