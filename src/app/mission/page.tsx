import Link from "next/link";

import { Hero } from "@/components/Hero";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Mission",
  description:
    "Arrowhead Research bridges the gap between military operators and technical innovation through hands-on engineering, mentorship, and real-world challenges.",
  path: "/mission",
});

const APPROACH_ITEMS = [
  {
    title: "Engineering Sprints",
    description:
      "Rapid prototyping events where teams design, build, and demo working systems under real constraints. No slideshows — working hardware.",
  },
  {
    title: "Academic & Industry Partnerships",
    description:
      "Direct engagement with universities, defense labs, and industry leaders. We create pathways, not brochures.",
  },
  {
    title: "Writing & Presenting",
    description:
      "Conference papers, technical briefs, lightning talks. We train servicemembers to communicate with the clarity their ideas deserve.",
  },
  {
    title: "Fielding & Competition",
    description:
      "Black Relay, Moonshot Rodeo, national challenges. Systems get tested under pressure — the only validation that counts.",
  },
];

export default function MissionPage() {
  return (
    <>
      <Hero
        title="Our Mission"
        subtitle="Bridge the gap between those who operate and those who innovate."
        compact
      />

      {/* The Problem */}
      <section className="px-4 py-16 sm:py-24 dark:bg-dark-gray">
        <div className="mx-auto max-w-3xl">
          <hr className="accent-rule mb-6" />
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            The Problem
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            <p>
              The people closest to the problem rarely get the opportunity to
              solve it. Military servicemembers encounter technical challenges
              daily, yet the systems designed to support them are built by
              people far removed from the operational environment.
            </p>
            <p>
              Traditional pathways into engineering and technology are slow,
              expensive, and disconnected from the realities of defense. The
              result is a gap — between those who know what needs to be built
              and those who know how to build it.
            </p>
            <p>
              Emerging technologies advance faster than bureaucracies can
              acquire. The nation needs people who can prototype, test, and
              field solutions at the speed of relevance.{" "}
              <strong className="text-gray-900 dark:text-white">
                Those people are already serving.
              </strong>{" "}
              They just need the tools, training, and community to unlock their
              potential.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-gray-50 px-4 py-16 sm:py-24 dark:bg-dark-gray-light/30">
        <div className="mx-auto max-w-3xl">
          <hr className="accent-rule mb-6" />
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Our Approach
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Arrowhead Research provides hands-on engineering experience,
            mentorship, and access to real technical challenges. We don&apos;t
            wait for permission — we build, test, and iterate. Our programs
            cover every phase of the innovation cycle:
          </p>

          <div className="mt-10 space-y-6">
            {APPROACH_ITEMS.map((item, i) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-dark-gray-light"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-jade-green text-sm font-bold text-white">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Outcome */}
      <section className="px-4 py-16 sm:py-24 dark:bg-dark-gray">
        <div className="mx-auto max-w-3xl">
          <hr className="accent-rule mb-6" />
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            The Outcome
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            <p>
              We partner with universities, defense organizations, and industry
              leaders to create pathways that didn&apos;t exist before. Our
              members don&apos;t just learn about technology — they build it,
              break it, and make it work in the real world.
            </p>
            <p>
              The outcome is a generation of technically capable warfighters who
              can operate at the intersection of technology and tactics — people
              who don&apos;t just use the tools, but build them.
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/programming"
              className="inline-flex items-center justify-center rounded-md bg-jade-green px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-jade-green-dark"
            >
              See Our Programs
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md border-2 border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-jade-green hover:text-jade-green dark:border-gray-600 dark:text-gray-300 dark:hover:border-jade-green dark:hover:text-jade-green"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
