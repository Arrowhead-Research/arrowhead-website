import Link from "next/link";

import { Hero } from "@/components/Hero";
import { PeopleSection } from "@/components/PeopleSection";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "People",
  description:
    "Meet the team behind Arrowhead Research and the people driving our mission forward.",
  path: "/people",
});

const LEADERSHIP_MEMBERS = [
  {
    name: "Dane Sebring",
    role: "Executive Director",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/images/placeholder.jpg",
  },
  {
    name: "Amy Marden",
    role: "Vice President of the Board",
    bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "/images/placeholder.jpg",
  },
  {
    name: "Travis Williams",
    role: "Director of Strategic Partnerships",
    bio: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    image: "/images/placeholder.jpg",
  },
  {
    name: "Josh Noll",
    role: "Director of Programming",
    bio: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    image: "/images/placeholder.jpg",
  },
];

const BOARD_MEMBERS = [
  {
    name: "Margaret Ellison",
    role: "Board Chair",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor.",
    image: "/images/placeholder.jpg",
  },
  {
    name: "Robert Kaminsky",
    role: "Board Treasurer",
    bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
    image: "/images/placeholder.jpg",
  },
  {
    name: "Sandra Okafor",
    role: "Board Secretary",
    bio: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate.",
    image: "/images/placeholder.jpg",
  },
];

export default function PeoplePage() {
  return (
    <>
      <Hero
        title="Our People"
        subtitle="Meet the team behind Arrowhead Research."
        compact
        videoSrc="/videos/banner_video_1.mp4"
      />

      <PeopleSection
        title="Leadership"
        description="Our team brings together diverse expertise to empower servicemembers through education and hands-on technical programming."
        members={LEADERSHIP_MEMBERS}
      />

      <PeopleSection
        title="Board Members"
        description="Our board provides strategic guidance and oversight to ensure Arrowhead Research fulfills its mission with integrity and impact."
        members={BOARD_MEMBERS}
        alternate
      />

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
