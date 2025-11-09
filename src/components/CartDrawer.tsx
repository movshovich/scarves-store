"use client";

import { Fragment } from "react";
import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";
import { useCartStore } from "@/store/cartStore";
import { Button } from "@/components/ui/Button";

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, getSubtotal, getItemCount } =
    useCartStore();

  const subtotal = getSubtotal();
  const shipping = subtotal > 0 ? (subtotal >= 200 ? 0 : 15) : 0;
  const total = subtotal + shipping;

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeCart}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-300"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-200"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl dark:bg-neutral-900">
                    {/* Header */}
                    <div className="border-b border-[color:var(--border)] px-6 py-6">
                      <div className="flex items-center justify-between">
                        <Dialog.Title className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                          Shopping Cart
                        </Dialog.Title>
                        <button
                          type="button"
                          className="rounded-full p-2 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-500 dark:hover:bg-neutral-800"
                          onClick={closeCart}
                        >
                          <span className="sr-only">Close panel</span>
                          <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                      {items.length > 0 && (
                        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                          {getItemCount()} {getItemCount() === 1 ? "item" : "items"}
                        </p>
                      )}
                    </div>

                    {/* Cart Items */}
                    <div className="flex-1 overflow-y-auto px-6 py-6">
                      {items.length === 0 ? (
                        <div className="flex h-full flex-col items-center justify-center text-center">
                          <svg
                            className="h-24 w-24 text-neutral-300 dark:text-neutral-700"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1}
                              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                            />
                          </svg>
                          <h3 className="mt-4 text-lg font-medium text-neutral-900 dark:text-neutral-100">
                            Your cart is empty
                          </h3>
                          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                            Add some beautiful scarves to get started.
                          </p>
                          <Button
                            variant="secondary"
                            size="md"
                            className="mt-6"
                            onClick={closeCart}
                          >
                            Continue Shopping
                          </Button>
                        </div>
                      ) : (
                        <ul className="space-y-6">
                          {items.map((item) => (
                            <li
                              key={`${item.product.id}-${item.variant.id}`}
                              className="flex gap-4"
                            >
                              <div
                                className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-2xl border border-[color:var(--border)]"
                                style={{ background: item.product.background }}
                              />
                              <div className="flex flex-1 flex-col">
                                <div className="flex justify-between">
                                  <div className="flex-1">
                                    <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                                      <Link
                                        href={`/products/${item.product.slug}`}
                                        onClick={closeCart}
                                        className="hover:text-[color:var(--accent)]"
                                      >
                                        {item.product.name}
                                      </Link>
                                    </h3>
                                    <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">
                                      Size: {item.variant.size}
                                    </p>
                                    <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">
                                      SKU: {item.variant.sku}
                                    </p>
                                  </div>
                                  <p className="ml-4 text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                                    ${item.product.price}
                                  </p>
                                </div>
                                <div className="mt-3 flex items-center justify-between">
                                  <div className="flex items-center gap-2">
                                    <button
                                      onClick={() =>
                                        updateQuantity(
                                          item.product.id,
                                          item.variant.id,
                                          item.quantity - 1
                                        )
                                      }
                                      className="flex h-7 w-7 items-center justify-center rounded-full border border-neutral-300 text-sm text-neutral-700 transition hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800"
                                    >
                                      −
                                    </button>
                                    <span className="min-w-[2rem] text-center text-sm font-medium">
                                      {item.quantity}
                                    </span>
                                    <button
                                      onClick={() =>
                                        updateQuantity(
                                          item.product.id,
                                          item.variant.id,
                                          item.quantity + 1
                                        )
                                      }
                                      className="flex h-7 w-7 items-center justify-center rounded-full border border-neutral-300 text-sm text-neutral-700 transition hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800"
                                    >
                                      +
                                    </button>
                                  </div>
                                  <button
                                    onClick={() =>
                                      removeItem(item.product.id, item.variant.id)
                                    }
                                    className="text-xs text-neutral-500 hover:text-red-600 dark:text-neutral-400 dark:hover:text-red-400"
                                  >
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {/* Footer */}
                    {items.length > 0 && (
                      <div className="border-t border-[color:var(--border)] bg-neutral-50 px-6 py-6 dark:bg-neutral-950">
                        <div className="space-y-3">
                          <div className="flex justify-between text-sm">
                            <span className="text-neutral-600 dark:text-neutral-400">
                              Subtotal
                            </span>
                            <span className="font-medium text-neutral-900 dark:text-neutral-100">
                              ${subtotal.toFixed(2)}
                            </span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-neutral-600 dark:text-neutral-400">
                              Shipping
                            </span>
                            <span className="font-medium text-neutral-900 dark:text-neutral-100">
                              {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                            </span>
                          </div>
                          {subtotal < 200 && subtotal > 0 && (
                            <p className="text-xs text-neutral-500 dark:text-neutral-400">
                              Add ${(200 - subtotal).toFixed(2)} more for free shipping
                            </p>
                          )}
                          <div className="flex justify-between border-t border-[color:var(--border)] pt-3 text-base font-semibold">
                            <span className="text-neutral-900 dark:text-neutral-100">Total</span>
                            <span className="text-neutral-900 dark:text-neutral-100">
                              ${total.toFixed(2)}
                            </span>
                          </div>
                        </div>
                        <div className="mt-6 space-y-3">
                          <Link href="/checkout" onClick={closeCart}>
                            <Button size="lg" fullWidth>
                              Proceed to Checkout
                            </Button>
                          </Link>
                          <Button
                            variant="secondary"
                            size="lg"
                            fullWidth
                            onClick={closeCart}
                          >
                            Continue Shopping
                          </Button>
                        </div>
                        <p className="mt-4 text-center text-xs text-neutral-500 dark:text-neutral-400">
                          Secure checkout • Free returns within 30 days
                        </p>
                      </div>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

