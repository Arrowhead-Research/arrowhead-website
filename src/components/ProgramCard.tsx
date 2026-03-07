import Image from "next/image";

interface ProgramCardProps {
  title: string;
  description: string;
  image?: string;
}

export function ProgramCard({
  title,
  description,
  image = "/images/placeholder.jpg",
}: ProgramCardProps) {
  return (
    <article className="hover-lift group overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-dark-gray-light">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Gradient overlay at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          {description}
        </p>
      </div>
    </article>
  );
}
