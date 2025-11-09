"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useCartStore } from "@/store/cartStore";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";

const checkoutSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State/Province is required"),
  zipCode: z.string().min(1, "Postal code is required"),
  country: z.string().min(1, "Country is required"),
  phone: z.string().min(1, "Phone number is required"),
  cardNumber: z.string().min(13, "Please enter a valid card number"),
  cardExpiry: z.string().regex(/^\d{2}\/\d{2}$/, "Use MM/YY format"),
  cardCvc: z.string().min(3, "CVC must be 3-4 digits"),
});

type CheckoutFormData = z.infer<typeof checkoutSchema>;

export default function CheckoutPage() {
  const router = useRouter();
  const { items, getSubtotal, clearCart } = useCartStore();
  const [isProcessing, setIsProcessing] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormData>();

  const subtotal = getSubtotal();
  const shipping = subtotal >= 200 ? 0 : 15;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const onSubmit = async (data: CheckoutFormData) => {
    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // In a real app, you'd integrate with Stripe here
    console.log("Processing order:", { ...data, items, total });

    clearCart();
    router.push("/order-confirmation");
  };

  if (items.length === 0) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <svg
            className="mx-auto h-24 w-24 text-neutral-300 dark:text-neutral-700"
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
          <h1 className="mt-4 text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
            Your cart is empty
          </h1>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400">
            Add some items to your cart before checking out.
          </p>
          <Link href="/" className="mt-6 inline-block">
            <Button>Continue Shopping</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-[color:var(--border)] bg-white dark:bg-neutral-900">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5">
          <Link
            href="/"
            className="text-xl font-semibold text-neutral-900 dark:text-neutral-100"
          >
            Aurora Scarves
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-neutral-600 hover:text-[color:var(--accent)] dark:text-neutral-400"
          >
            Continue Shopping
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-12">
        <h1 className="text-3xl font-semibold text-neutral-900 dark:text-neutral-100">
          Checkout
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-12">
          <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
            {/* Form Section */}
            <div className="space-y-8">
              {/* Contact Information */}
              <div className="rounded-3xl border border-[color:var(--border)] bg-white p-8 dark:bg-neutral-900">
                <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                  Contact Information
                </h2>
                <div className="mt-6">
                  <Input
                    label="Email"
                    type="email"
                    placeholder="you@example.com"
                    error={errors.email?.message}
                    {...register("email")}
                  />
                </div>
              </div>

              {/* Shipping Address */}
              <div className="rounded-3xl border border-[color:var(--border)] bg-white p-8 dark:bg-neutral-900">
                <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                  Shipping Address
                </h2>
                <div className="mt-6 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Input
                      label="First Name"
                      placeholder="John"
                      error={errors.firstName?.message}
                      {...register("firstName")}
                    />
                    <Input
                      label="Last Name"
                      placeholder="Doe"
                      error={errors.lastName?.message}
                      {...register("lastName")}
                    />
                  </div>
                  <Input
                    label="Address"
                    placeholder="123 Main Street, Apt 4B"
                    error={errors.address?.message}
                    {...register("address")}
                  />
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Input
                      label="City"
                      placeholder="New York"
                      error={errors.city?.message}
                      {...register("city")}
                    />
                    <Input
                      label="State / Province"
                      placeholder="NY"
                      error={errors.state?.message}
                      {...register("state")}
                    />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Input
                      label="Postal Code"
                      placeholder="10001"
                      error={errors.zipCode?.message}
                      {...register("zipCode")}
                    />
                    <Select
                      label="Country"
                      error={errors.country?.message}
                      {...register("country")}
                    >
                      <option value="">Select a country</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="GB">United Kingdom</option>
                      <option value="AU">Australia</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                      <option value="IT">Italy</option>
                      <option value="ES">Spain</option>
                      <option value="JP">Japan</option>
                    </Select>
                  </div>
                  <Input
                    label="Phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    error={errors.phone?.message}
                    {...register("phone")}
                  />
                </div>
              </div>

              {/* Payment Information */}
              <div className="rounded-3xl border border-[color:var(--border)] bg-white p-8 dark:bg-neutral-900">
                <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                  Payment Details
                </h2>
                <div className="mt-6 space-y-4">
                  <Input
                    label="Card Number"
                    placeholder="4242 4242 4242 4242"
                    error={errors.cardNumber?.message}
                    {...register("cardNumber")}
                  />
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Input
                      label="Expiry Date"
                      placeholder="MM/YY"
                      error={errors.cardExpiry?.message}
                      {...register("cardExpiry")}
                    />
                    <Input
                      label="CVC"
                      placeholder="123"
                      error={errors.cardCvc?.message}
                      {...register("cardCvc")}
                    />
                  </div>
                  <div className="rounded-xl bg-neutral-50 p-4 dark:bg-neutral-950">
                    <div className="flex items-start gap-3">
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-neutral-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400">
                        Your payment information is encrypted and secure. We never store your full
                        card details.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div>
              <div className="sticky top-6 rounded-3xl border border-[color:var(--border)] bg-white p-8 dark:bg-neutral-900">
                <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                  Order Summary
                </h2>
                <div className="mt-6 space-y-4">
                  {items.map((item) => (
                    <div
                      key={`${item.product.id}-${item.variant.id}`}
                      className="flex gap-4"
                    >
                      <div
                        className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-2xl border border-[color:var(--border)]"
                        style={{ background: item.product.background }}
                      />
                      <div className="flex-1">
                        <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                          {item.product.name}
                        </h3>
                        <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">
                          {item.variant.size} × {item.quantity}
                        </p>
                        <p className="mt-1 text-sm font-medium text-neutral-900 dark:text-neutral-100">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 space-y-3 border-t border-[color:var(--border)] pt-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-600 dark:text-neutral-400">Subtotal</span>
                    <span className="font-medium text-neutral-900 dark:text-neutral-100">
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-600 dark:text-neutral-400">Shipping</span>
                    <span className="font-medium text-neutral-900 dark:text-neutral-100">
                      {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-600 dark:text-neutral-400">Tax</span>
                    <span className="font-medium text-neutral-900 dark:text-neutral-100">
                      ${tax.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between border-t border-[color:var(--border)] pt-3 text-base font-semibold">
                    <span className="text-neutral-900 dark:text-neutral-100">Total</span>
                    <span className="text-neutral-900 dark:text-neutral-100">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  fullWidth
                  className="mt-8"
                  loading={isProcessing}
                  disabled={isProcessing}
                >
                  {isProcessing ? "Processing..." : "Complete Order"}
                </Button>

                <p className="mt-4 text-center text-xs text-neutral-500 dark:text-neutral-400">
                  By placing your order, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}

