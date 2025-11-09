"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { products } from "@/data/products";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CartDrawer } from "@/components/CartDrawer";
import { Footer } from "@/components/Footer";
import { useCartStore } from "@/store/cartStore";

const highlights = [
  {
    title: "Heritage Craft",
    copy: "Small-batch production with Italian looms and meticulous hand-finishing.",
  },
  {
    title: "Artistry First",
    copy: "Every print begins as an original painting from our resident artists.",
  },
  {
    title: "Global Shipping",
    copy: "Complimentary worldwide delivery with carbon-neutral carriers.",
  },
];

const studioPractices = [
  {
    title: "Color Lab",
    detail: "Over 180 pigment tests to achieve luminous depth without compromising softness.",
  },
  {
    title: "Archival Standards",
    detail: "Sourced from FSC-certified mills with traceable mulberry cultivation.",
  },
  {
    title: "Edition Ledger",
    detail: "Each scarf signed, numbered, and accompanied by certificate of provenance.",
  },
];

const faqs = [
  {
    question: "How do I care for an Aurora scarf?",
    answer:
      "We recommend gentle dry cleaning or cold hand washing with silk-specific detergent. Store loosely rolled in the provided muslin archive sleeve.",
  },
  {
    question: "Where are the scarves produced?",
    answer:
      "All scarves are woven and printed in Como, Italy, in partnership with a third-generation atelier that specializes in luxury silk goods.",
  },
  {
    question: "Can I place a custom commission?",
    answer:
      "We open five custom commission slots per quarter. Email us with your vision and timeline, and our studio concierge will arrange a consultation.",
  },
  {
    question: "What is your shipping timeline?",
    answer:
      "Orders ship within 48 hours. Delivery is typically 2–4 days within Europe and North America, and up to 7 days worldwide.",
  },
];

export default function Home() {
  const { toggleCart, getItemCount } = useCartStore();

  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <CartDrawer />
      
      <header className="sticky top-0 z-40 border-b border-[color:var(--border)] bg-white/85 backdrop-blur-xl dark:bg-black/60">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center rounded-full border border-[color:var(--border)] bg-white/70 px-4 py-1 text-xs uppercase tracking-[0.35em] text-neutral-500 dark:bg-black/30 dark:text-neutral-300">
              Aurora
            </span>
            <span className="hidden text-sm font-medium text-neutral-700 dark:text-neutral-200 sm:inline">
              Wearable art for luminous storytelling.
            </span>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-neutral-600 dark:text-neutral-200 md:flex">
            {siteConfig.navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="transition-colors duration-200 hover:text-[color:var(--accent)]"
              >
                {item.name}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${siteConfig.social.email}`}
              className="hidden text-sm font-medium text-neutral-600 underline-offset-4 transition hover:text-[color:var(--accent)] md:inline"
            >
              Studio Concierge
            </a>
            <button
              onClick={toggleCart}
              className="relative inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-white px-4 py-2 text-sm font-semibold text-neutral-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:bg-neutral-900 dark:text-neutral-200"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              <span className="hidden sm:inline">Cart</span>
              {getItemCount() > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[color:var(--accent)] text-xs font-bold text-white">
                  {getItemCount()}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-32 px-6 pb-24 pt-16 sm:pt-24">
        <section
          id="hero"
          className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end"
          aria-labelledby="hero-heading"
        >
          <div className="space-y-8">
            <p className="text-xs font-medium uppercase tracking-[0.45em] text-neutral-500">
              {siteConfig.name}
            </p>
            <h1
              id="hero-heading"
              className="text-balance text-4xl font-semibold leading-tight text-neutral-900 sm:text-5xl lg:text-6xl dark:text-neutral-100"
            >
              Scarves that translate light, pigment, and story into heirloom keepsakes.
            </h1>
            <p className="max-w-xl text-pretty text-base leading-7 text-neutral-600 sm:text-lg dark:text-neutral-300">
              Each Aurora scarf begins as a canvas painting, then migrates through our color lab
              and Italian printing partners to arrive as a limited-edition piece of wearable art.
              We design for collectors who appreciate craft, rarity, and sensory storytelling.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#collection"
                className="inline-flex items-center rounded-full bg-[color:var(--accent)] px-6 py-3 text-sm font-semibold text-white shadow-[var(--shadow)] transition hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 dark:text-neutral-900"
              >
                Discover the Editions
              </a>
              <a
                href="#studio"
                className="inline-flex items-center rounded-full border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-700 transition hover:-translate-y-0.5 hover:border-neutral-500 dark:border-neutral-700 dark:text-neutral-200"
              >
                Explore the Studio
              </a>
            </div>
            <ul className="grid gap-6 sm:grid-cols-3">
              {highlights.map((highlight) => (
                <li
                  key={highlight.title}
                  className="rounded-3xl border border-[color:var(--border)] bg-white/70 p-5 text-left shadow-sm backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-[var(--shadow)] dark:bg-black/30"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400">
                    {highlight.title}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-neutral-600 dark:text-neutral-300">
                    {highlight.copy}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative flex flex-col gap-6">
            <div className="relative flex aspect-[4/5] w-full overflow-hidden rounded-[38px] border border-[color:var(--border)] bg-white shadow-[var(--shadow)] dark:bg-neutral-900">
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 20% 20%, rgba(238,205,189,0.9), transparent 45%), radial-gradient(circle at 80% 30%, rgba(168,183,232,0.85), transparent 55%), radial-gradient(circle at 50% 80%, rgba(248,244,233,0.95), transparent 60%)",
                }}
              />
              <div className="relative z-10 flex flex-1 flex-col justify-between p-8 sm:p-10">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center rounded-full bg-neutral-900 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-50 dark:bg-neutral-100 dark:text-neutral-900">
                    Capsule 05
                  </span>
                  <span className="text-xs uppercase tracking-[0.4em] text-neutral-600 dark:text-neutral-300">
                    Limited Release
                  </span>
                </div>
                <div className="space-y-5">
                  <p className="text-sm uppercase tracking-[0.4em] text-neutral-600 dark:text-neutral-300">
                    Edition Highlight
                  </p>
                  <p className="text-balance text-2xl font-medium leading-tight text-neutral-900 dark:text-neutral-100">
                    “Afterlight” silk twill scarf, numbered 1–120, inspired by dusk reflections on
                    Lake Como.
                  </p>
                </div>
                <div className="flex items-center gap-4 text-xs uppercase tracking-[0.4em] text-neutral-600 dark:text-neutral-300">
                  <span>Hand Rolled</span>
                  <span>Reversible Story</span>
                  <span>Certificate Included</span>
                </div>
              </div>
            </div>
            <div className="grid gap-4 rounded-[30px] border border-[color:var(--border)] bg-white/80 p-6 shadow-sm backdrop-blur-sm sm:grid-cols-2 dark:bg-black/40">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-neutral-500 dark:text-neutral-300">
                  Provenance
                </p>
                <p className="mt-3 text-sm leading-6 text-neutral-600 dark:text-neutral-300">
                  Signed and numbered with archival inks, accompanied by a cotton muslin archive
                  envelope.
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-neutral-500 dark:text-neutral-300">
                  Materials
                </p>
                <p className="mt-3 text-sm leading-6 text-neutral-600 dark:text-neutral-300">
                  Long-strand mulberry silk, woven on heritage looms in Como, Italy. 70×70 cm.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="collection" className="space-y-12" aria-labelledby="collection-heading">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-4">
              <p className="text-xs font-medium uppercase tracking-[0.45em] text-neutral-500">
                Signature Collection
              </p>
              <h2
                id="collection-heading"
                className="text-balance text-3xl font-semibold text-neutral-900 sm:text-4xl dark:text-neutral-100"
              >
                Limited silk editions for the modern collector.
              </h2>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {["Mulberry Silk", "Archival Inks", "Numbered Editions"].map((feature) => (
                <span
                  key={feature}
                  className="inline-flex items-center rounded-full border border-[color:var(--border)] bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-600 dark:bg-black/30 dark:text-neutral-300"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
          <div className="grid gap-8 xl:grid-cols-2">
            {products.map((product) => (
              <article
                key={product.id}
                className="group relative flex flex-col overflow-hidden rounded-[34px] border border-[color:var(--border)] bg-white/80 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow)] dark:bg-black/40"
              >
                <div className="flex items-center justify-between pb-4">
                  {product.badge && <Badge variant="neutral">{product.badge}</Badge>}
                  <span className="ml-auto rounded-full border border-[color:var(--border)] px-3 py-1 text-xs font-medium text-neutral-500 dark:text-neutral-300">
                    {product.palette}
                  </span>
                </div>
                <Link
                  href={`/products/${product.slug}`}
                  className="relative mb-6 aspect-[5/6] w-full overflow-hidden rounded-[28px] border border-[color:var(--border)] bg-[color:var(--muted)]"
                >
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 transition duration-500 group-hover:scale-[1.02]"
                    style={{
                      background: product.background,
                    }}
                  />
                  {product.limitedEdition && (
                    <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-900 backdrop-blur-sm dark:bg-amber-900 dark:text-amber-100">
                      <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      {product.limitedEdition.remaining} left
                    </div>
                  )}
                  <div className="absolute bottom-5 left-5 inline-flex items-center rounded-full bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-neutral-700 backdrop-blur-sm dark:bg-black/40 dark:text-neutral-200">
                    {product.fabric}
                  </div>
                </Link>
                <div className="flex flex-1 flex-col justify-between">
                  <div className="space-y-3">
                    <Link href={`/products/${product.slug}`}>
                      <h3 className="text-2xl font-semibold text-neutral-900 transition hover:text-[color:var(--accent)] dark:text-neutral-50">
                        {product.name}
                      </h3>
                    </Link>
                    <p className="text-sm leading-6 text-neutral-600 dark:text-neutral-300">
                      {product.description}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center justify-between border-t border-[color:var(--border)] pt-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
                        ${product.price}
                      </span>
                      {product.compareAtPrice && (
                        <span className="text-sm text-neutral-400 line-through">
                          ${product.compareAtPrice}
                        </span>
                      )}
                    </div>
                    <span className={`text-xs font-medium ${product.inStock ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}`}>
                      {product.inStock ? 'In Stock' : 'Sold Out'}
                    </span>
                  </div>
                  <div className="mt-6 flex items-center gap-3">
                    <Link href={`/products/${product.slug}`} className="flex-1">
                      <Button variant="primary" size="md" fullWidth>
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="story"
          className="grid gap-12 lg:grid-cols-[1fr_1.1fr]"
          aria-labelledby="story-heading"
        >
          <div className="space-y-6">
            <p className="text-xs font-medium uppercase tracking-[0.45em] text-neutral-500">
              Our Story
            </p>
            <h2
              id="story-heading"
              className="text-pretty text-3xl font-semibold text-neutral-900 sm:text-4xl dark:text-neutral-100"
            >
              From canvas to cloth: artwork translated with luminous fidelity.
            </h2>
            <p className="text-base leading-7 text-neutral-600 dark:text-neutral-300">
              Aurora was born in a light-filled studio overlooking the Baltic Sea, where painter
              Mara Lehto began layering translucent pigments to mimic the glow of dawn. Each
              pattern now travels through our Italian partner mill, where artisans capture every
              brushstroke in archival inks. The result is a scarf that feels as expressive as the
              original painting.
            </p>
            <div className="grid gap-6">
              {studioPractices.map((practice) => (
                <div
                  key={practice.title}
                  className="rounded-3xl border border-[color:var(--border)] bg-white/70 p-5 backdrop-blur-sm dark:bg-black/40"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-neutral-500 dark:text-neutral-300">
                    {practice.title}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-neutral-600 dark:text-neutral-300">
                    {practice.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[38px] border border-[color:var(--border)] bg-neutral-900 text-neutral-100 shadow-[var(--shadow)]">
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-90"
              style={{
                background:
                  "linear-gradient(135deg, rgba(97,82,76,0.9) 0%, rgba(33,27,24,0.95) 70%, rgba(18,15,14,0.98) 100%)",
              }}
            />
            <div className="relative z-10 flex h-full flex-col justify-between p-10">
              <div className="flex items-center gap-4">
                <span className="inline-flex items-center rounded-full border border-white/20 px-4 py-1 text-xs uppercase tracking-[0.35em]">
                  Studio Chronicle
                </span>
                <span className="text-xs uppercase tracking-[0.35em] text-white/60">
                  Behind the Collection
                </span>
              </div>
              <div className="space-y-5">
                <p className="text-pretty text-2xl font-semibold leading-tight">
                  “We treat each scarf as a page torn from an artist’s journal—intimate, textured,
                  and alive with movement.”
                </p>
                <p className="text-sm uppercase tracking-[0.35em] text-white/70">
                  Mara Lehto · Founder & Painter
                </p>
              </div>
              <div className="grid gap-4 text-sm uppercase tracking-[0.35em] text-white/70 sm:grid-cols-3">
                <span>Hand Drawn Motifs</span>
                <span>Archival Printmaking</span>
                <span>Lifetime Care</span>
              </div>
            </div>
          </div>
        </section>

        <section id="studio" className="space-y-12" aria-labelledby="studio-heading">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-4">
              <p className="text-xs font-medium uppercase tracking-[0.45em] text-neutral-500">
                Studio Practices
              </p>
              <h2
                id="studio-heading"
                className="text-pretty text-3xl font-semibold text-neutral-900 sm:text-4xl dark:text-neutral-100"
              >
                Precision craft in every stage of creation.
              </h2>
            </div>
            <Link
              href={siteConfig.social.instagram}
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] px-5 py-3 text-sm font-semibold text-neutral-700 transition hover:-translate-y-0.5 hover:border-neutral-900 hover:text-neutral-900 dark:text-neutral-200"
            >
              Follow studio journal
              <span className="text-xs uppercase tracking-[0.3em]">↗</span>
            </Link>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "01 · Concept to Canvas",
                detail:
                  "We begin with large-format paintings, experimenting with watery pigments and metallic foils to explore luminescence.",
              },
              {
                title: "02 · Color Calibration",
                detail:
                  "The color lab refines each hue through 12 proof runs, ensuring faithful translation on silk without compromise.",
              },
              {
                title: "03 · Finishing Ritual",
                detail:
                  "After printing, every scarf passes through our hand-rolling atelier, then rests for 24 hours before final inspection.",
              },
            ].map((step) => (
              <div
                key={step.title}
                className="flex h-full flex-col justify-between rounded-[30px] border border-[color:var(--border)] bg-white/80 p-6 shadow-sm backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-[var(--shadow)] dark:bg-black/40"
              >
                <div className="space-y-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-neutral-500 dark:text-neutral-300">
                    {step.title}
                  </p>
                  <p className="text-sm leading-6 text-neutral-600 dark:text-neutral-300">
                    {step.detail}
                  </p>
                </div>
                <span className="mt-6 inline-flex w-max items-center rounded-full bg-neutral-900 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-neutral-50 dark:bg-neutral-100 dark:text-neutral-900">
                  Studio Aurora
                </span>
              </div>
            ))}
          </div>
        </section>

        <section id="faq" className="space-y-10" aria-labelledby="faq-heading">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-4">
              <p className="text-xs font-medium uppercase tracking-[0.45em] text-neutral-500">
                FAQ
              </p>
              <h2
                id="faq-heading"
                className="text-pretty text-3xl font-semibold text-neutral-900 sm:text-4xl dark:text-neutral-100"
              >
                Answers from our studio concierge.
              </h2>
            </div>
            <a
              href={`mailto:${siteConfig.social.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] px-5 py-3 text-sm font-semibold text-neutral-700 transition hover:-translate-y-0.5 hover:border-neutral-900 hover:text-neutral-900 dark:text-neutral-200"
            >
              Contact us directly
              <span className="text-xs uppercase tracking-[0.3em]">↗</span>
          </a>
        </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="flex flex-col gap-3 rounded-[26px] border border-[color:var(--border)] bg-white/80 p-6 shadow-sm backdrop-blur-sm dark:bg-black/40"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-neutral-500 dark:text-neutral-300">
                  {faq.question}
                </p>
                <p className="text-sm leading-6 text-neutral-600 dark:text-neutral-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
