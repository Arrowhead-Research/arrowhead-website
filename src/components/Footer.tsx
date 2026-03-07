import Link from "next/link";

import { DonateButton } from "@/components/DonateButton";

const FOOTER_NAV = [
  { href: "/mission", label: "Mission" },
  { href: "/programming", label: "Programs" },
  { href: "/people", label: "People" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-slate-dark">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand column */}
          <div>
            <p className="text-lg font-bold text-gray-900 dark:text-white">
              Arrowhead Research
            </p>
            <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              Empowering military servicemembers to transform technical
              curiosity into real-world capability.
            </p>
            <div className="mt-4">
              <DonateButton />
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Navigate
            </p>
            <ul className="mt-3 space-y-2">
              {FOOTER_NAV.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 transition-colors hover:text-jade-green dark:text-gray-400 dark:hover:text-jade-green"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Get in Touch
            </p>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href="mailto:info@arrowheadresearch.org"
                  className="text-sm text-gray-600 transition-colors hover:text-jade-green dark:text-gray-400 dark:hover:text-jade-green"
                >
                  info@arrowheadresearch.org
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-600 transition-colors hover:text-jade-green dark:text-gray-400 dark:hover:text-jade-green"
                >
                  Contact Form
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-gray-200 pt-6 dark:border-gray-800">
          <p className="text-center text-xs text-gray-500 dark:text-gray-500">
            &copy; {year} Arrowhead Research, Inc. All rights reserved.
            501(c)(3) nonprofit organization.
          </p>
        </div>
      </div>
    </footer>
  );
}
