import { PersonCard } from "@/components/PersonCard";

interface PersonMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
}

interface PeopleSectionProps {
  title: string;
  description: string;
  members: PersonMember[];
  alternate?: boolean;
}

export function PeopleSection({
  title,
  description,
  members,
  alternate = false,
}: PeopleSectionProps): React.ReactElement {
  return (
    <section
      className={`px-4 py-16 sm:py-24 ${alternate ? "bg-gray-50 dark:bg-dark-gray-light/30" : "dark:bg-dark-gray"}`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <hr className="accent-rule mx-auto mb-6" />
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            {description}
          </p>
        </div>
        <div className="mb-3 grid gap-8 md:grid-cols-3">
          {members.map((member) => (
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
  );
}
