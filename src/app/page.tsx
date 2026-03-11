import Link from "next/link";

import { DonateButton } from "@/components/DonateButton";
import { Hero } from "@/components/Hero";
import { createPageMetadata, getOrganizationJsonLd } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Home",
  description:
    "Arrowhead Research empowers military servicemembers to build, break, and deploy real-world technology. Hands-on engineering for those closest to the fight.",
  path: "/",
});

const VERTICALS = [
  {
    title: "Engineering Sprints",
    description:
      "72 hours. Real constraints. Working prototypes. Teams design, fabricate, and demo systems that solve actual defense problems.",
    icon: WrenchIcon,
  },
  {
    title: "Academia & Industry",
    description:
      "Partnerships with universities, labs, and defense companies that turn operators into collaborators — not just consumers — of innovation.",
    icon: AcademyIcon,
  },
  {
    title: "Writing & Presenting",
    description:
      "Conference papers. Technical briefs. Lightning talks. We train servicemembers to translate complexity into clarity that moves decisions.",
    icon: PenIcon,
  },
  {
    title: "Fielding & Competition",
    description:
      "Black Relay. Moonshot Rodeo. National challenges. Prove your systems work under pressure, not just on a whiteboard.",
    icon: TrophyIcon,
  },
];

const STATS = [
  { value: "4", label: "Core Programs" },
  { value: "100%", label: "Hands-On" },
  { value: "Veteran Owned", label: "Veteran Supported" },
  { value: "501(c)(3)", label: "Nonprofit" },
];

export default function Home() {
  const jsonLd = getOrganizationJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <Hero
        title="BUILD. BREAK. HACK. REPEAT."
        subtitle="We give military servicemembers the tools, training, and community to engineer solutions at the speed of relevance."
        primaryCta={{ label: "Get Involved", href: "/contact" }}
        secondaryCta={{ label: "See Our Programs", href: "/programming" }}
        videoSrc="/videos/banner_video_1.mp4"
      />

      {/* Stats Bar */}
      <section className="border-y border-gray-200 bg-white dark:border-gray-800 dark:bg-dark-gray-light">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 px-4 py-8 sm:grid-cols-4 sm:gap-8 sm:py-10">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-bold text-jade-green sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* The Problem We Solve */}
      <section className="px-4 py-16 sm:py-24 dark:bg-dark-gray">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <hr className="accent-rule mx-auto mb-6" />
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              The Operators Know the Problem.
              <br />
              <span className="text-gradient">We Help Them Build the Fix.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              The best solutions come from those closest to the fight. But
              military servicemembers rarely get the engineering experience,
              mentorship, or resources to turn their insights into deployable
              technology. Arrowhead Research closes that gap — turning operators
              into engineers and ideas into working systems.
            </p>
            <div className="mt-8">
              <Link
                href="/mission"
                className="text-sm font-semibold text-jade-green underline underline-offset-4 transition-colors hover:text-jade-green-dark dark:hover:text-jade-green-light"
              >
                Read our full mission
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Verticals */}
      <section className="bg-gray-50 px-4 py-16 sm:py-24 dark:bg-dark-gray-light/30">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <hr className="accent-rule mx-auto mb-6" />
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              What We Do
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
              Four verticals. One goal: build technically capable warfighters
              who can operate at the intersection of technology and tactics.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VERTICALS.map((v) => (
              <div
                key={v.title}
                className="hover-lift group rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-dark-gray-light"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-jade-green/10 text-jade-green transition-colors group-hover:bg-jade-green group-hover:text-white">
                  <v.icon className="h-6 w-6" />
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
          <div className="mt-10 text-center">
            <Link
              href="/programming"
              className="inline-flex items-center rounded-md bg-jade-green px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-jade-green-dark"
            >
              Explore All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section className="px-4 py-16 sm:py-24 dark:bg-dark-gray">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <hr className="accent-rule mx-auto mb-6" />
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Built By Those Who Serve
            </h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-dark-gray-light">
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                &ldquo;Moonshot Rodeo changed how I think about problem-solving.
                Building a working prototype in 72 hours with my team proved we
                could do more than anyone expected — including ourselves.&rdquo;
              </p>
              <div className="mt-4 border-t border-gray-100 pt-4 dark:border-gray-700">
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  Active Duty Participant
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Moonshot Rodeo 2026
                </p>
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-dark-gray-light">
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                &ldquo;The writing program didn&apos;t just teach me to write
                papers — it taught me to think clearly. That skill translates to
                everything from briefing commanders to designing systems.&rdquo;
              </p>
              <div className="mt-4 border-t border-gray-100 pt-4 dark:border-gray-700">
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  Guard/Reserve Member
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Writing & Presenting Program
                </p>
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-dark-gray-light">
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                &ldquo;Black Relay pushed us beyond the whiteboard. When your
                solution has to actually work in the field, you learn what
                engineering really means — fast.&rdquo;
              </p>
              <div className="mt-4 border-t border-gray-100 pt-4 dark:border-gray-700">
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  Veteran Engineer
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Black Relay Competitor
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-dark-gray px-4 py-16 text-center sm:py-24 dark:bg-slate-dark">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Build Something That Matters?
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Whether you&apos;re active duty, guard, reserve, or a veteran — if
            you have technical curiosity and a bias for action, there&apos;s a
            place for you here.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-md bg-jade-green px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-jade-green-dark"
            >
              Get Involved
            </Link>
            <DonateButton variant="inline" />
          </div>
        </div>
      </section>
    </>
  );
}

/* ── Inline SVG Icons ────────────────────────────────────────────── */

function WrenchIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.049.58.025 1.193-.14 1.743"
      />
    </svg>
  );
}

function AcademyIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
      />
    </svg>
  );
}

function PenIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
      />
    </svg>
  );
}

function TrophyIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0 1 16.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.023 6.023 0 0 1-2.27.308 6.023 6.023 0 0 1-2.27-.308"
      />
    </svg>
  );
}
