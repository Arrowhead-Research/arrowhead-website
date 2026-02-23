import { Hero } from "@/components/Hero";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Mission",
  description:
    "Our mission: bridge the gap between military operators and technical innovation through hands-on engineering experience.",
  path: "/mission",
});

export default function MissionPage() {
  return (
    <>
      <Hero
        title="Our Mission"
        subtitle="Bridge the gap between those who operate and those who innovate."
      />

      {/* The Problem */}
      <section className="px-4 py-16 sm:py-20 dark:bg-dark-gray">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
            The Problem
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            <p>
              The people closest to the problem rarely get the opportunity to
              solve it. Military servicemembers encounter technical challenges
              daily, yet the systems designed to support them are built by people
              far removed from the operational environment.
            </p>
            <p>
              Traditional pathways into engineering and technology are slow,
              expensive, and disconnected from the realities of defense. The
              result is a gap — between those who know what needs to be built and
              those who know how to build it.
            </p>
            <p>
              Emerging technologies advance faster than bureaucracies can
              acquire. The nation needs people who can prototype, test, and field
              solutions at the speed of relevance. Those people are already
              serving — they just need the tools, training, and community to
              unlock their potential.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-gray-50 px-4 py-16 sm:py-20 dark:bg-gray-900">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
            Our Approach
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            <p>
              Arrowhead Research provides hands-on engineering experience,
              mentorship, and access to real technical challenges. We don&apos;t
              wait for permission — we build, test, and iterate.
            </p>
            <p>
              Our programs are designed around four core verticals: Engineering
              Sprints, Academia &amp; Industry engagement, Writing &amp;
              Presenting, and Fielding &amp; Competition. Each vertical targets a
              different phase of the innovation cycle, from concept through
              deployment.
            </p>
            <p>
              We partner with universities, defense organizations, and industry
              leaders to create pathways that didn&apos;t exist before. Our
              members don&apos;t just learn about technology — they build it,
              break it, and make it work in the real world.
            </p>
            <p>
              The outcome is a generation of technically capable warfighters who
              can operate at the intersection of technology and tactics.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
