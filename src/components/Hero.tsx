import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  title: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  compact?: boolean;
}

export function Hero({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  compact = false,
}: HeroProps) {
  return (
    <section
      className={`relative px-4 text-center text-white ${
        compact ? "py-16 sm:py-20" : "py-20 sm:py-28 lg:py-36"
      }`}
    >
      <Image
        src="/images/homepage-banner-image.jpg"
        alt=""
        fill
        priority
        className="object-cover"
      />
      {/* Darker overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-gray/80 via-dark-gray/70 to-dark-gray/80" />

      <div className="relative mx-auto max-w-4xl">
        <h1
          className={`font-bold tracking-tight ${
            compact
              ? "text-3xl sm:text-4xl lg:text-5xl"
              : "text-4xl sm:text-5xl lg:text-6xl"
          }`}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-200 sm:text-xl">
            {subtitle}
          </p>
        )}
        {(primaryCta || secondaryCta) && (
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {primaryCta && (
              <Link
                href={primaryCta.href}
                className="inline-flex items-center rounded-md bg-jade-green px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-jade-green-dark hover:shadow-xl"
              >
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center rounded-md border-2 border-white/30 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/20"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
