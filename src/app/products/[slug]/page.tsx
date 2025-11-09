"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { getProductBySlug } from "@/data/products";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Select } from "@/components/ui/Select";
import { useCartStore } from "@/store/cartStore";

export default function ProductPage() {
  const params = useParams();
  const router = useRouter();
  const product = getProductBySlug(params.slug as string);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addItem, openCart } = useCartStore();

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
            Product not found
          </h1>
          <Link
            href="/"
            className="mt-4 inline-block text-sm text-[color:var(--accent)] hover:underline"
          >
            Return to home
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (selectedVariant) {
      addItem(product, selectedVariant, quantity);
      openCart();
    }
  };

  const inStockVariants = product.variants.filter((v) => v.inStock);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-[color:var(--border)] bg-white/85 backdrop-blur-xl dark:bg-black/60">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium text-neutral-700 transition hover:text-[color:var(--accent)] dark:text-neutral-200"
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Collection
          </Link>
          <button
            onClick={() => useCartStore.getState().toggleCart()}
            className="relative rounded-full border border-[color:var(--border)] bg-white px-4 py-2 text-sm font-medium text-neutral-700 transition hover:bg-neutral-50 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-800"
          >
            <span className="flex items-center gap-2">
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
              Cart
              {useCartStore.getState().getItemCount() > 0 && (
                <span className="rounded-full bg-[color:var(--accent)] px-2 py-0.5 text-xs text-white">
                  {useCartStore.getState().getItemCount()}
                </span>
              )}
            </span>
          </button>
        </div>
      </header>

      {/* Product Details */}
      <main className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div
              className="relative aspect-square overflow-hidden rounded-3xl border border-[color:var(--border)] bg-white shadow-[var(--shadow)] dark:bg-neutral-900"
              style={{ background: product.background }}
            >
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <div className="text-center">
                  <p className="text-sm font-medium text-neutral-600 dark:text-neutral-300">
                    Image {selectedImageIndex + 1}
                  </p>
                  <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-400">
                    Product photography coming soon
                  </p>
                </div>
              </div>
              {product.badge && (
                <div className="absolute left-6 top-6">
                  <Badge>{product.badge}</Badge>
                </div>
              )}
            </div>
            {/* Thumbnail Grid */}
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`aspect-square overflow-hidden rounded-2xl border-2 transition ${
                    selectedImageIndex === index
                      ? "border-[color:var(--accent)]"
                      : "border-transparent hover:border-neutral-300 dark:hover:border-neutral-700"
                  }`}
                  style={{
                    background: product.background,
                    opacity: selectedImageIndex === index ? 1 : 0.6,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-semibold text-neutral-900 dark:text-neutral-100">
                {product.name}
              </h1>
              <p className="mt-3 text-lg text-neutral-600 dark:text-neutral-300">
                {product.description}
              </p>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-semibold text-neutral-900 dark:text-neutral-100">
                ${product.price}
              </span>
              {product.compareAtPrice && (
                <span className="text-xl text-neutral-400 line-through">
                  ${product.compareAtPrice}
                </span>
              )}
            </div>

            {/* Limited Edition */}
            {product.limitedEdition && (
              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-950">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-amber-900 dark:text-amber-100">
                    Limited Edition
                  </span>
                  <span className="text-sm text-amber-700 dark:text-amber-300">
                    {product.limitedEdition.remaining} of {product.limitedEdition.total} remaining
                  </span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-amber-200 dark:bg-amber-900">
                  <div
                    className="h-full bg-amber-500"
                    style={{
                      width: `${
                        (product.limitedEdition.remaining / product.limitedEdition.total) * 100
                      }%`,
                    }}
                  />
                </div>
              </div>
            )}

            {/* Variant Selection */}
            <div className="space-y-4">
              <Select
                label="Size"
                value={selectedVariant?.id}
                onChange={(e) =>
                  setSelectedVariant(product.variants.find((v) => v.id === e.target.value))
                }
              >
                {product.variants.map((variant) => (
                  <option key={variant.id} value={variant.id} disabled={!variant.inStock}>
                    {variant.size} {!variant.inStock && "(Out of Stock)"}
                  </option>
                ))}
              </Select>

              {/* Quantity */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  Quantity
                </label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 text-neutral-700 transition hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800"
                  >
                    −
                  </button>
                  <span className="min-w-[3rem] text-center text-lg font-medium">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 text-neutral-700 transition hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Add to Cart */}
            <Button
              size="lg"
              fullWidth
              disabled={!selectedVariant?.inStock || inStockVariants.length === 0}
              onClick={handleAddToCart}
            >
              {selectedVariant?.inStock ? "Add to Cart" : "Out of Stock"}
            </Button>

            {/* Product Details */}
            <div className="space-y-6 border-t border-[color:var(--border)] pt-8">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-500">
                  About This Piece
                </h3>
                <p className="mt-3 text-sm leading-7 text-neutral-600 dark:text-neutral-300">
                  {product.longDescription}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                    Palette
                  </h4>
                  <p className="mt-1 text-sm text-neutral-900 dark:text-neutral-100">
                    {product.palette}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                    Fabric
                  </h4>
                  <p className="mt-1 text-sm text-neutral-900 dark:text-neutral-100">
                    {product.fabric}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                    Dimensions
                  </h4>
                  <p className="mt-1 text-sm text-neutral-900 dark:text-neutral-100">
                    {product.details.dimensions}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                    Origin
                  </h4>
                  <p className="mt-1 text-sm text-neutral-900 dark:text-neutral-100">
                    {product.details.origin}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-500">
                  Features
                </h3>
                <ul className="mt-3 space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <svg
                        className="mt-0.5 h-4 w-4 flex-shrink-0 text-[color:var(--accent)]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-neutral-600 dark:text-neutral-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-500">
                  Care Instructions
                </h3>
                <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300">
                  {product.details.care}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

