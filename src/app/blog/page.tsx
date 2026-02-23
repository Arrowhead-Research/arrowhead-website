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

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Hero
        title="Blog"
        subtitle="News, updates, and insights from the field."
      />

      <section className="px-4 py-16 sm:py-20 dark:bg-dark-gray">
        <div className="mx-auto max-w-7xl">
          {posts.length === 0 ? (
            <p className="text-center text-gray-600 dark:text-gray-400">
              No posts yet. Check back soon.
            </p>
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
