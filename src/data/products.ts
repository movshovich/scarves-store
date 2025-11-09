import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "1",
    slug: "equinox-bloom",
    name: "Equinox Bloom",
    description: "Blooming botanicals etched in copper leaf, finished with hand-rolled edges.",
    longDescription:
      "Equinox Bloom captures the ephemeral beauty of spring's first light through delicate botanical illustrations layered with metallic copper accents. Each scarf is hand-finished with rolled edges and undergoes a specialized printing process that preserves the luminosity of the original watercolor artwork. The amber and juniper palette evokes early morning gardens, making this piece equally stunning as a neck scarf, hair wrap, or framed textile art.",
    price: 180,
    palette: "Amber + Juniper",
    fabric: "Mulberry silk",
    background: "linear-gradient(135deg, #f9ddc8 0%, #f8f3ee 42%, #d7e4fa 100%)",
    badge: "Edition of 90",
    images: [
      "/products/equinox-bloom-1.jpg",
      "/products/equinox-bloom-2.jpg",
      "/products/equinox-bloom-3.jpg",
      "/products/equinox-bloom-4.jpg",
    ],
    variants: [
      { id: "1-small", size: "70cm × 70cm", inStock: true, sku: "AUR-EB-70" },
      { id: "1-large", size: "90cm × 90cm", inStock: true, sku: "AUR-EB-90" },
    ],
    details: {
      dimensions: "70cm × 70cm or 90cm × 90cm",
      weight: "35g (small), 58g (large)",
      care: "Dry clean or hand wash cold with silk detergent",
      origin: "Woven and printed in Como, Italy",
    },
    features: [
      "100% mulberry silk twill (16 momme)",
      "Hand-rolled edges with invisible stitching",
      "Archival pigment inks rated for 100+ years",
      "Limited edition of 90 pieces worldwide",
      "Numbered certificate of authenticity",
      "Packaged in heirloom muslin sleeve",
    ],
    inStock: true,
    limitedEdition: {
      total: 90,
      remaining: 23,
    },
  },
  {
    id: "2",
    slug: "nocturne-tides",
    name: "Nocturne Tides",
    description: "A deep-sea gradient with pearl microdots inspired by night photography.",
    longDescription:
      "Nocturne Tides draws inspiration from long-exposure ocean photography, where moonlit waves blur into abstract ribbons of cobalt and obsidian. The design features a sophisticated gradient punctuated by hand-applied pearl microdots that catch light like bioluminescent plankton. Printed on our signature silk satin, this scarf offers a liquid drape and subtle sheen that enhances both formal and casual styling.",
    price: 210,
    palette: "Cobalt + Obsidian",
    fabric: "Silk satin",
    background: "linear-gradient(135deg, #0f1d3a 0%, #234b74 48%, #9fbff2 100%)",
    badge: "Bestseller",
    images: [
      "/products/nocturne-tides-1.jpg",
      "/products/nocturne-tides-2.jpg",
      "/products/nocturne-tides-3.jpg",
      "/products/nocturne-tides-4.jpg",
    ],
    variants: [
      { id: "2-small", size: "70cm × 70cm", inStock: true, sku: "AUR-NT-70" },
      { id: "2-large", size: "90cm × 90cm", inStock: false, sku: "AUR-NT-90" },
    ],
    details: {
      dimensions: "70cm × 70cm or 90cm × 90cm",
      weight: "42g (small), 68g (large)",
      care: "Dry clean recommended; hand wash cold if needed",
      origin: "Woven and printed in Como, Italy",
    },
    features: [
      "100% silk satin with pearl finish (19 momme)",
      "Hand-applied pearl microdot detailing",
      "UV-resistant inks for lasting color depth",
      "Best-selling design since 2024",
      "Signed by the artist",
      "Gift-ready presentation box included",
    ],
    inStock: true,
  },
  {
    id: "3",
    slug: "lumen-veil",
    name: "Lumen Veil",
    description: "Layered translucent brushwork capturing the warmth of first light.",
    longDescription:
      "Lumen Veil translates the soft, diffused quality of dawn into wearable art through layered translucent brushstrokes in quartz and alabaster tones. The original painting was created using a unique wet-on-wet watercolor technique, then digitally refined to preserve every subtle color shift. Printed on ethereal silk chiffon, this scarf offers an airy, cloud-like drape perfect for layering or elegant evening wear.",
    price: 195,
    palette: "Quartz + Alabaster",
    fabric: "Silk chiffon",
    background: "linear-gradient(140deg, #fef6ec 0%, #fbe4d0 33%, #dbccee 100%)",
    badge: "New Arrival",
    images: [
      "/products/lumen-veil-1.jpg",
      "/products/lumen-veil-2.jpg",
      "/products/lumen-veil-3.jpg",
      "/products/lumen-veil-4.jpg",
    ],
    variants: [
      { id: "3-small", size: "70cm × 70cm", inStock: true, sku: "AUR-LV-70" },
      { id: "3-large", size: "90cm × 90cm", inStock: true, sku: "AUR-LV-90" },
    ],
    details: {
      dimensions: "70cm × 70cm or 90cm × 90cm",
      weight: "28g (small), 45g (large)",
      care: "Hand wash cold with pH-neutral detergent",
      origin: "Woven and printed in Como, Italy",
    },
    features: [
      "100% silk chiffon (12 momme)",
      "Feather-light and semi-sheer",
      "Wet-on-wet watercolor technique",
      "Released in limited quantities",
      "Eco-friendly water-based inks",
      "Includes styling guide",
    ],
    inStock: true,
  },
  {
    id: "4",
    slug: "cinder-atlas",
    name: "Cinder Atlas",
    description: "Smoke-washed cartography with gold foil constellations and archival inks.",
    longDescription:
      "Cinder Atlas reimagines ancient star maps through a contemporary lens, layering smoke-washed cartographic elements with 22-karat gold foil constellations. The design juxtaposes charcoal and gilt tones to evoke both exploration and luxury. Printed on heavyweight silk twill with metallic foil application, this statement piece is ideal for collectors seeking bold, architectural accessories with a narrative edge.",
    price: 230,
    compareAtPrice: 280,
    palette: "Char + Gilt",
    fabric: "Silk twill",
    background: "linear-gradient(130deg, #1d1612 0%, #3d2c26 45%, #c8a782 100%)",
    badge: "Studio Run",
    images: [
      "/products/cinder-atlas-1.jpg",
      "/products/cinder-atlas-2.jpg",
      "/products/cinder-atlas-3.jpg",
      "/products/cinder-atlas-4.jpg",
    ],
    variants: [
      { id: "4-small", size: "70cm × 70cm", inStock: true, sku: "AUR-CA-70" },
      { id: "4-large", size: "90cm × 90cm", inStock: true, sku: "AUR-CA-90" },
    ],
    details: {
      dimensions: "70cm × 70cm or 90cm × 90cm",
      weight: "48g (small), 75g (large)",
      care: "Dry clean only to preserve foil details",
      origin: "Woven and printed in Como, Italy",
    },
    features: [
      "100% silk twill (22 momme)",
      "22-karat gold foil constellation details",
      "Double-sided print for versatility",
      "Exclusive studio collaboration",
      "Accompanied by artist statement",
      "Premium gift box with wax seal",
    ],
    inStock: true,
    limitedEdition: {
      total: 50,
      remaining: 12,
    },
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

