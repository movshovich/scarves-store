import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--border)] bg-white dark:bg-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
              {siteConfig.name}
            </h3>
            <p className="text-sm leading-6 text-neutral-600 dark:text-neutral-400">
              {siteConfig.description}
            </p>
          </div>

          {/* Shop */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-500">
              Shop
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/#collection"
                  className="text-sm text-neutral-600 transition hover:text-[color:var(--accent)] dark:text-neutral-400"
                >
                  Collection
                </a>
              </li>
              <li>
                <a
                  href="/#studio"
                  className="text-sm text-neutral-600 transition hover:text-[color:var(--accent)] dark:text-neutral-400"
                >
                  Studio
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@aurorascarves.com?subject=Custom%20Commission"
                  className="text-sm text-neutral-600 transition hover:text-[color:var(--accent)] dark:text-neutral-400"
                >
                  Custom Commissions
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-500">
              Support
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/#faq"
                  className="text-sm text-neutral-600 transition hover:text-[color:var(--accent)] dark:text-neutral-400"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@aurorascarves.com"
                  className="text-sm text-neutral-600 transition hover:text-[color:var(--accent)] dark:text-neutral-400"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-neutral-600 transition hover:text-[color:var(--accent)] dark:text-neutral-400"
                >
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-neutral-600 transition hover:text-[color:var(--accent)] dark:text-neutral-400"
                >
                  Care Guide
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-500">
              Connect
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-neutral-600 transition hover:text-[color:var(--accent)] dark:text-neutral-400"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.pinterest}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-neutral-600 transition hover:text-[color:var(--accent)] dark:text-neutral-400"
                >
                  Pinterest
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.social.email}`}
                  className="text-sm text-neutral-600 transition hover:text-[color:var(--accent)] dark:text-neutral-400"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[color:var(--border)] pt-8 text-sm text-neutral-500 sm:flex-row">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <a
              href="#"
              className="transition hover:text-[color:var(--accent)]"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="transition hover:text-[color:var(--accent)]"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

