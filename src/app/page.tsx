import Image from "next/image";

import { Hero } from "@/components/Hero";
import { createPageMetadata, getOrganizationJsonLd } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Home",
  path: "/",
});

const VERTICALS = [
  {
    title: "Engineering Sprints",
    description:
      "Build functional prototypes that solve mission-focused problems. Teams work under real constraints to design, fabricate, and test systems from concept to deployment.",
  },
  {
    title: "Academia & Industry",
    description:
      "Engage with universities, research institutions, and industry partners. Bridge the gap between academic innovation and operational reality.",
  },
  {
    title: "Writing & Presenting",
    description:
      "Develop and deliver polished technical publications and talks. Translate complex ideas into compelling narratives that influence decision-makers.",
  },
  {
    title: "Fielding & Competition",
    description:
      "Validate systems through events like Black Relay, Moonshot Rodeo, and national technical challenges. Prove capability under pressure.",
  },
];

export default function Home() {
  const jsonLd = getOrganizationJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Hero
        title="BUILD. BREAK. HACK. REPEAT."
        subtitle="Empowering military servicemembers to transform technical curiosity into real-world capability."
      />

      {/* From Field to Function */}
      <section className="bg-gray-50 px-4 py-16 sm:py-20 dark:bg-dark-gray">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
            From Field to Function
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Arrowhead Research is a nonprofit that gives servicemembers hands-on
            engineering experience, mentorship, and access to technical
            challenges. We believe the most innovative solutions come from those
            closest to the problem. Our programs turn operators into engineers
            and ideas into deployable systems.
          </p>
        </div>
      </section>

      {/* Core Verticals */}
      <section className="px-4 py-16 sm:py-20 dark:bg-dark-gray">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
            What We Do
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {VERTICALS.map((v) => (
              <div
                key={v.title}
                className="rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm dark:border-gray-700 dark:bg-dark-gray-light"
              >
                <div className="flex justify-center">
                  <Image
                    src="/images/placeholder.jpg"
                    alt={v.title}
                    width={80}
                    height={80}
                    className="rounded-lg"
                  />
                </div>
                <h3 className="mt-4 text-lg font-bold text-gray-900 dark:text-white">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
