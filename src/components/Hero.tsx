import Image from "next/image";

interface HeroProps {
  title: string;
  subtitle?: string;
}

export function Hero({ title, subtitle }: HeroProps) {
  return (
    <section className="relative px-4 py-20 text-center text-white sm:py-28 lg:py-36">
      <Image
        src="/images/homepage-banner-image.jpg"
        alt=""
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-dark-gray/70" />
      <div className="relative mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 text-lg text-gray-300 sm:text-xl">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
