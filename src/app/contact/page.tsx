import { ContactForm } from "@/components/ContactForm";
import { Hero } from "@/components/Hero";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Get in touch with Arrowhead Research. Reach out about programs, partnerships, or general inquiries.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Get in Touch"
        subtitle="Questions about our programs? Want to partner, mentor, or compete? We're listening."
        compact
        videoSrc="/videos/banner_video_3.mp4"
      />

      <section className="px-4 py-16 sm:py-24 dark:bg-dark-gray">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-12 md:grid-cols-[1fr_1.5fr]">
            {/* Info sidebar */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Ways to Connect
              </h2>
              <div className="mt-6 space-y-6">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    Email
                  </p>
                  <a
                    href="mailto:info@arrowheadresearch.org"
                    className="mt-1 block text-jade-green underline underline-offset-2 transition-colors hover:text-jade-green-dark dark:hover:text-jade-green-light"
                  >
                    info@arrowheadresearch.org
                  </a>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    For Servicemembers
                  </p>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Interested in competing, building, or writing? Tell us about
                    your background and what you want to work on.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    For Partners & Sponsors
                  </p>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    We work with universities, defense organizations, and
                    industry partners. Let&apos;s talk about what we can build
                    together.
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 sm:p-8 dark:border-gray-700 dark:bg-dark-gray-light">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                Send a Message
              </h2>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                All fields required. We&apos;ll respond within 48 hours.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
