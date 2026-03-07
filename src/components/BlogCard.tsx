import Image from "next/image";
import Link from "next/link";

import type { BlogPostMeta } from "@/lib/mdx";

interface BlogCardProps {
  post: BlogPostMeta;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="hover-lift group overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-dark-gray-light">
      {post.image && (
        <Link href={`/blog/${post.slug}`} className="block overflow-hidden">
          <div className="relative aspect-video">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </Link>
      )}
      <div className="p-6">
        {post.tags && post.tags.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-jade-green/10 px-2.5 py-0.5 text-xs font-medium text-jade-green"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
          <Link
            href={`/blog/${post.slug}`}
            className="transition-colors hover:text-jade-green dark:hover:text-jade-green"
          >
            {post.title}
          </Link>
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          {post.summary}
        </p>
        <div className="mt-4 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-2">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </time>
            <span aria-hidden="true">&middot;</span>
            <span>{post.author}</span>
          </div>
          <Link
            href={`/blog/${post.slug}`}
            className="font-medium text-jade-green transition-colors hover:text-jade-green-dark"
          >
            Read
          </Link>
        </div>
      </div>
    </article>
  );
}
