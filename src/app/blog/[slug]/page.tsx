import Link from "next/link";
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
        {/* Back link */}
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-1 text-sm text-gray-500 transition-colors hover:text-jade-green dark:text-gray-400 dark:hover:text-jade-green"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-4 w-4"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
          All posts
        </Link>

        {/* Post header */}
        <header className="mb-10">
          {meta.tags && meta.tags.length > 0 && (
            <div className="mb-4 flex flex-wrap gap-2">
              {meta.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-jade-green/10 px-2.5 py-0.5 text-xs font-medium text-jade-green"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
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
          <hr className="accent-rule mt-6" />
        </header>

        {/* MDX content */}
        <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-gray-900 prose-p:text-gray-600 prose-li:text-gray-600 prose-strong:text-gray-900 prose-a:text-jade-green prose-a:underline prose-a:underline-offset-2 hover:prose-a:text-jade-green-dark dark:prose-headings:text-white dark:prose-p:text-gray-300 dark:prose-li:text-gray-300 dark:prose-strong:text-white dark:prose-a:text-jade-green dark:hover:prose-a:text-jade-green-light">
          <Content />
        </div>

        {/* Post footer */}
        <div className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-700">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <Link
              href="/blog"
              className="text-sm font-semibold text-jade-green underline underline-offset-4 transition-colors hover:text-jade-green-dark dark:hover:text-jade-green-light"
            >
              Read more posts
            </Link>
            <Link
              href="/contact"
              className="text-sm text-gray-500 transition-colors hover:text-jade-green dark:text-gray-400 dark:hover:text-jade-green"
            >
              Questions? Get in touch
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
