import Link from "next/link";

import { BlogCard } from "@/components/BlogCard";
import { Hero } from "@/components/Hero";
import { getAllPosts } from "@/lib/mdx";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Blog",
  description:
    "News, updates, and insights from Arrowhead Research — engineering, competitions, and the future of defense innovation.",
  path: "/blog",
});

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <>
      <Hero
        title="From the Field"
        subtitle="Event recaps, technical write-ups, and lessons learned from the people doing the work."
        compact
      />

      <section className="px-4 py-16 sm:py-24 dark:bg-dark-gray">
        <div className="mx-auto max-w-7xl">
          {posts.length === 0 ? (
            <div className="text-center">
              <p className="text-gray-600 dark:text-gray-400">
                No posts yet. Check back soon.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-block text-sm font-semibold text-jade-green underline underline-offset-4 hover:text-jade-green-dark"
              >
                Get notified when we publish
              </Link>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
