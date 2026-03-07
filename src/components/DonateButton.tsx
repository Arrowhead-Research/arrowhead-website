const DONATE_URL = "https://donorbox.org/arrowhead-research-inc";

interface DonateButtonProps {
  variant?: "header" | "footer" | "inline";
}

export function DonateButton({ variant = "header" }: DonateButtonProps) {
  if (variant === "footer") {
    return (
      <a
        href={DONATE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="text-jade-green underline underline-offset-2 transition-colors hover:text-green-400 dark:hover:text-green-300"
      >
        Donate
      </a>
    );
  }

  if (variant === "inline") {
    return (
      <a
        href={DONATE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center rounded-md border-2 border-jade-green bg-transparent px-6 py-3 text-sm font-semibold text-jade-green transition-all hover:bg-jade-green hover:text-white"
      >
        Support Our Mission
      </a>
    );
  }

  return (
    <a
      href={DONATE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-md bg-jade-green px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-jade-green-dark"
    >
      Donate
    </a>
  );
}
