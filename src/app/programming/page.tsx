import Link from "next/link";

import { Hero } from "@/components/Hero";
import { ProgramCard } from "@/components/ProgramCard";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Programs",
  description:
    "Explore Arrowhead Research programs: Moonshot Rodeo, Black Relay, Technical Competitions, and Writing & Presenting.",
  path: "/programming",
});

const PROGRAMS = [
  {
    title: "Moonshot Rodeo",
    description:
      "A high-intensity engineering sprint where teams of servicemembers design, build, and demonstrate functional prototypes in a compressed timeline. Participants tackle real-world defense challenges, working from concept through fabrication to live demonstration. Moonshot Rodeo pushes teams beyond their comfort zone and into the realm of rapid, mission-driven innovation.",
    image: "/images/moonshot-rodeo.webp",
  },
  {
    title: "Black Relay",
    description:
      "A multi-phase technical challenge that tests teams across a spectrum of engineering disciplines. Black Relay combines hardware fabrication, software development, systems integration, and field testing into a single competitive event. Teams must collaborate under pressure, adapt to unexpected constraints, and deliver working solutions that prove capability beyond the whiteboard.",
    image: "/images/black-relay.webp",
  },
  {
    title: "Technical Competitions",
    description:
      "Arrowhead Research fields teams at national and international technical competitions, from robotics challenges to cyber defense exercises. These events provide servicemembers with exposure to cutting-edge problems, peer networks, and the competitive pressure that accelerates learning. Competitions validate skills and build the confidence to tackle increasingly complex challenges.",
    image: "/images/technical-competitions.webp",
  },
  {
    title: "Writing & Presenting",
    description:
      "Technical talent means nothing if you can't communicate it. Our Writing & Presenting program helps servicemembers develop the skills to author technical papers, deliver conference presentations, and brief senior leaders. Participants learn to translate complex engineering concepts into clear, compelling narratives that drive decisions and influence outcomes.",
    image: "/images/writing.webp",
  },
];

export default function ProgrammingPage() {
  return (
    <>
      <Hero
        title="Our Programs"
        subtitle="Hands-on experiences that turn operators into engineers. No lectures. No theory. Real problems, real tools, real results."
        compact
      />

      {/* Programs Grid */}
      <section className="px-4 py-16 sm:py-24 dark:bg-dark-gray">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2">
            {PROGRAMS.map((program) => (
              <ProgramCard
                key={program.title}
                title={program.title}
                description={program.description}
                image={program.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="border-t border-gray-200 bg-gray-50 px-4 py-16 text-center sm:py-20 dark:border-gray-800 dark:bg-dark-gray-light/30">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl dark:text-white">
            Want to Participate?
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Whether you want to compete, mentor, or sponsor — we want to hear
            from you. Our programs are open to active duty, guard, reserve, and
            veteran servicemembers.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-md bg-jade-green px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-jade-green-dark"
            >
              Get Involved
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center rounded-md border-2 border-gray-300 px-8 py-3.5 text-sm font-semibold text-gray-700 transition-colors hover:border-jade-green hover:text-jade-green dark:border-gray-600 dark:text-gray-300 dark:hover:border-jade-green dark:hover:text-jade-green"
            >
              Read Event Recaps
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
