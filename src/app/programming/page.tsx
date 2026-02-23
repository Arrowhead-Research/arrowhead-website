import { Hero } from "@/components/Hero";
import { ProgramCard } from "@/components/ProgramCard";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Programming",
  description:
    "Explore Arrowhead Research programs: Moonshot Rodeo, Black Relay, Technical Competitions, Writing & Presenting.",
  path: "/programming",
});

const PROGRAMS = [
  {
    title: "Moonshot Rodeo",
    description:
      "A high-intensity engineering sprint where teams of servicemembers design, build, and demonstrate functional prototypes in a compressed timeline. Participants tackle real-world defense challenges, working from concept through fabrication to live demonstration. Moonshot Rodeo pushes teams beyond their comfort zone and into the realm of rapid, mission-driven innovation.",
    image: "/images/placeholder.jpg",
  },
  {
    title: "Black Relay",
    description:
      "A multi-phase technical challenge that tests teams across a spectrum of engineering disciplines. Black Relay combines hardware fabrication, software development, systems integration, and field testing into a single competitive event. Teams must collaborate under pressure, adapt to unexpected constraints, and deliver working solutions that prove capability beyond the whiteboard.",
    image: "/images/placeholder.jpg",
  },
  {
    title: "Technical Competitions",
    description:
      "Arrowhead Research fields teams at national and international technical competitions, from robotics challenges to cyber defense exercises. These events provide servicemembers with exposure to cutting-edge problems, peer networks, and the competitive pressure that accelerates learning. Competitions validate skills and build the confidence to tackle increasingly complex challenges.",
    image: "/images/placeholder.jpg",
  },
  {
    title: "Writing & Presenting",
    description:
      "Technical talent means nothing if you can't communicate it. Our Writing & Presenting program helps servicemembers develop the skills to author technical papers, deliver conference presentations, and brief senior leaders. Participants learn to translate complex engineering concepts into clear, compelling narratives that drive decisions and influence outcomes.",
    image: "/images/placeholder.jpg",
  },
];

export default function ProgrammingPage() {
  return (
    <>
      <Hero
        title="Our Programs"
        subtitle="Hands-on experiences that turn operators into engineers."
      />

      <section className="px-4 py-16 sm:py-20 dark:bg-dark-gray">
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
    </>
  );
}
