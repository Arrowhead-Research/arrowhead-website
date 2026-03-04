import { notFound } from "next/navigation";

import { getAllPostSlugs, getPostBySlug } from "@/lib/mdx";
import { createPageMetadata } from "@/lib/metadata";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return createPageMetadata({
      title: "Post Not Found",
      path: `/blog/${slug}`,
    });
  }

  return createPageMetadata({
    title: post.meta.title,
    description: post.meta.summary,
    path: `/blog/${slug}`,
    ogImage: post.meta.image,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { meta, Content } = post;

  return (
    <article className="px-4 py-16 sm:py-20 dark:bg-dark-gray">
      <div className="mx-auto max-w-3xl">
        {/* Post header */}
        <header className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
            {meta.title}
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
            <time dateTime={meta.date}>
              {new Date(meta.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span aria-hidden="true">&middot;</span>
            <span>{meta.author}</span>
          </div>
          {meta.tags && meta.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {meta.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-700 dark:bg-dark-gray-light dark:text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* MDX content */}
        <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-li:text-gray-600 prose-strong:text-gray-900 prose-a:text-jade-green prose-a:no-underline hover:prose-a:underline dark:prose-headings:text-white dark:prose-p:text-white dark:prose-li:text-white dark:prose-strong:text-white dark:prose-a:text-jade-green dark:hover:prose-a:text-jade-green dark:text-white">
          <Content />
        </div>
      </div>
    </article>
  );
}
