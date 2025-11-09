# Aurora Scarves Store - Features

## E-commerce Features (Shopify-like)

### Product Management
- **Comprehensive Product Data**: Each product includes multiple variants, inventory tracking, detailed specs, features, care instructions, and more
- **Product Detail Pages**: Dedicated pages for each product with image galleries, variant selection, and quantity controls
- **Limited Edition Tracking**: Real-time display of remaining stock for limited edition items
- **Variant Management**: Support for multiple sizes with individual SKUs and stock status

### Shopping Cart
- **Persistent Cart**: Cart state persists across sessions using Zustand with localStorage
- **Cart Drawer**: Slide-out cart with smooth animations powered by Headless UI
- **Quantity Controls**: Increase/decrease quantities or remove items directly from cart
- **Real-time Calculations**: Auto-calculated subtotal, shipping (free over $200), tax, and total
- **Cart Badge**: Live item count displayed in header

### Checkout Flow
- **Multi-step Form**: Contact info, shipping address, and payment details
- **Form Validation**: Real-time validation using React Hook Form + Zod schemas
- **Responsive Design**: Mobile-friendly checkout experience
- **Order Confirmation**: Dedicated success page with next steps

### UI Components
Custom reusable components built with TypeScript:
- `Button` - Multiple variants (primary, secondary, ghost, outline), sizes, loading states
- `Badge` - Status indicators with color variants
- `Input` - Form inputs with labels, errors, and helper text
- `Select` - Dropdown with styling and validation
- `Card` - Flexible card component with variants

### State Management
- **Zustand Store**: Lightweight, performant global state for cart
- **Type-safe**: Full TypeScript coverage across all data structures
- **Persistence**: Cart survives page reloads

### Design & UX
- **Modern UI**: Sophisticated design with gradients, shadows, and micro-interactions
- **Hover Effects**: Smooth transitions and transforms on interactive elements
- **Dark Mode**: Full dark mode support throughout
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation
- **Responsive**: Mobile-first design that scales beautifully

### Product Features Display
- Limited edition badges with remaining count
- Stock status indicators
- Compare-at pricing (sale prices)
- Product features with checkmark icons
- Care instructions
- Origin and craftsmanship details

## Routes

- `/` - Homepage with hero, collection, story, studio, FAQ
- `/products/[slug]` - Individual product pages
- `/checkout` - Checkout flow
- `/order-confirmation` - Order success page

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **State**: Zustand with persist middleware
- **Forms**: React Hook Form + Zod validation
- **UI**: Headless UI (Dialog/Transitions)
- **Icons**: Heroicons (inline SVG)

## Getting Started

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Future Enhancements

- [ ] Stripe payment integration
- [ ] Real product images
- [ ] User accounts & order history
- [ ] Wishlist functionality
- [ ] Product reviews
- [ ] Related products
- [ ] Search & filters
- [ ] Email notifications
- [ ] Admin dashboard

