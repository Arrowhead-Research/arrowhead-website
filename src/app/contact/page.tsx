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
        title="Contact Us"
        subtitle="Have a question, want to get involved, or interested in partnering? We'd love to hear from you."
      />

      <section className="px-4 py-16 sm:py-20 dark:bg-dark-gray">
        <div className="mx-auto max-w-2xl">
          <div className="mb-10 text-center">
            <p className="text-gray-600 dark:text-gray-300">
              Fill out the form below and we&apos;ll get back to you as soon as
              possible. You can also reach us directly at{" "}
              <a
                href="mailto:info@arrowheadresearch.org"
                className="text-jade-green underline underline-offset-2 hover:text-green-700 dark:hover:text-green-300"
              >
                info@arrowheadresearch.org
              </a>
              .
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
