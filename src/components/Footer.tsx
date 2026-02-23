import { DonateButton } from "@/components/DonateButton";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white dark:border-gray-700 dark:bg-dark-gray">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-8 text-center text-sm text-gray-600 sm:flex-row sm:justify-between sm:text-left dark:text-gray-400">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
          <a
            href="mailto:info@arrowheadresearch.org"
            className="transition-colors hover:text-jade-green dark:hover:text-jade-green"
          >
            info@arrowheadresearch.org
          </a>
          <span className="hidden sm:inline" aria-hidden="true">
            &middot;
          </span>
          <DonateButton variant="footer" />
        </div>
        <p>&copy; {year} Arrowhead Research. All rights reserved.</p>
      </div>
    </footer>
  );
}
