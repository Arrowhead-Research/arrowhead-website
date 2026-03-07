import Link from "next/link";

import { Hero } from "@/components/Hero";
import { PersonCard } from "@/components/PersonCard";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "People",
  description:
    "Meet the leadership team behind Arrowhead Research and the people driving our mission forward.",
  path: "/people",
});

const TEAM_MEMBERS = [
  {
    name: "Jane Doe",
    role: "Executive Director",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/images/placeholder.jpg",
  },
  {
    name: "John Smith",
    role: "Vice President",
    bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "/images/placeholder.jpg",
  },
  {
    name: "Emily Johnson",
    role: "Director of Programming",
    bio: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    image: "/images/placeholder.jpg",
  },
];

export default function PeoplePage() {
  return (
    <>
      <Hero
        title="Our People"
        subtitle="Meet the leadership team behind Arrowhead Research."
        compact
      />

      {/* Team grid */}
      <section className="px-4 py-16 sm:py-24 dark:bg-dark-gray">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <hr className="accent-rule mx-auto mb-6" />
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Leadership
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              Our team brings together diverse expertise to empower
              servicemembers through education and hands-on technical
              programming.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {TEAM_MEMBERS.map((member) => (
              <PersonCard
                key={member.name}
                name={member.name}
                role={member.role}
                bio={member.bio}
                image={member.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 px-4 py-16 sm:py-24 dark:bg-dark-gray-light/30">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Interested in volunteering with us?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            We are always looking for passionate individuals to join our team
            and help us make a difference.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-md bg-jade-green px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-jade-green-dark hover:shadow-xl"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
