import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function OrderConfirmationPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="w-full max-w-2xl text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900">
          <svg
            className="h-10 w-10 text-emerald-600 dark:text-emerald-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="mt-6 text-3xl font-semibold text-neutral-900 dark:text-neutral-100">
          Order Confirmed!
        </h1>
        <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
          Thank you for your purchase. Your order has been received and is being processed.
        </p>

        <div className="mt-8 rounded-3xl border border-[color:var(--border)] bg-white p-8 text-left dark:bg-neutral-900">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-500">
            What happens next?
          </h2>
          <ul className="mt-4 space-y-4">
            <li className="flex gap-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[color:var(--accent)] text-sm font-semibold text-white">
                1
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">
                  Order Confirmation
                </h3>
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                  You&apos;ll receive an email confirmation with your order details and tracking information.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[color:var(--accent)] text-sm font-semibold text-white">
                2
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">
                  Quality Check & Packaging
                </h3>
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                  Each scarf is carefully inspected, packaged in our signature muslin sleeve, and prepared for shipment.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[color:var(--accent)] text-sm font-semibold text-white">
                3
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">
                  Shipped Within 48 Hours
                </h3>
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                  Your order will ship within 2 business days via carbon-neutral carrier. Delivery typically takes 2-7 days.
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link href="/">
            <Button size="lg">Continue Shopping</Button>
          </Link>
          <Link href="mailto:hello@aurorascarves.com">
            <Button variant="secondary" size="lg">
              Contact Support
            </Button>
          </Link>
        </div>

        <p className="mt-8 text-sm text-neutral-600 dark:text-neutral-400">
          Need help? Email us at{" "}
          <a
            href="mailto:hello@aurorascarves.com"
            className="font-medium text-[color:var(--accent)] hover:underline"
          >
            hello@aurorascarves.com
          </a>
        </p>
      </div>
    </div>
  );
}

