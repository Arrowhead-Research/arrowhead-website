import Image from "next/image";

interface PersonCardProps {
  name: string;
  role: string;
  bio: string;
  image?: string;
}

export function PersonCard({
  name,
  role,
  bio,
  image = "/images/placeholder.jpg",
}: PersonCardProps): React.ReactElement {
  return (
    <article className="hover-lift overflow-hidden rounded-lg border border-gray-200 bg-white p-8 text-center dark:border-gray-700 dark:bg-dark-gray-light">
      <div className="mx-auto h-40 w-40 overflow-hidden rounded-full border-4 border-jade-green/20">
        <Image
          src={image}
          alt={`Headshot of ${name}`}
          width={160}
          height={160}
          className="h-full w-full object-cover"
        />
      </div>
      <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">
        {name}
      </h3>
      <p className="mt-1 text-sm font-semibold text-jade-green">{role}</p>
      <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        {bio}
      </p>
    </article>
  );
}
