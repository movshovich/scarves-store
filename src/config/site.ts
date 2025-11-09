export const siteConfig = {
  name: "Aurora Scarves",
  description:
    "Artfully printed scarves with gallery-grade motifs, ethically made and delivered worldwide.",
  url: "https://aurora-scarves.vercel.app",
  ogImage: "/og-image.jpg",
  social: {
    instagram: "https://instagram.com/aurora.scarves",
    pinterest: "https://pinterest.com/aurora.scarves",
    email: "hello@aurorascarves.com",
  },
  navigation: [
    { name: "Collection", href: "#collection" },
    { name: "Story", href: "#story" },
    { name: "Studio", href: "#studio" },
    { name: "FAQ", href: "#faq" },
  ],
};

export type SiteConfig = typeof siteConfig;

