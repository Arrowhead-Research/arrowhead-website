import fs from "fs";
import path from "path";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  author: string;
  summary: string;
  tags?: string[];
  image?: string;
}

/**
 * Get all blog post slugs for static generation.
 */
export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }

  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

/**
 * Get metadata for all blog posts, sorted by date (newest first).
 * Uses dynamic import to read the exported `meta` object from each MDX file.
 */
export async function getAllPosts(): Promise<BlogPostMeta[]> {
  const slugs = getAllPostSlugs();

  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const { meta } = (await import(`../../content/blog/${slug}.mdx`)) as {
        meta: Omit<BlogPostMeta, "slug">;
      };

      return {
        slug,
        ...meta,
      };
    }),
  );

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

/**
 * Import a blog post MDX module by slug.
 * Returns the default component and metadata, or null if not found.
 */
export async function getPostBySlug(slug: string): Promise<{
  meta: BlogPostMeta;
  Content: React.ComponentType;
} | null> {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const mod = (await import(`../../content/blog/${slug}.mdx`)) as {
    default: React.ComponentType;
    meta: Omit<BlogPostMeta, "slug">;
  };

  return {
    meta: { slug, ...mod.meta },
    Content: mod.default,
  };
}
