export interface ProductVariant {
  id: string;
  size: string;
  inStock: boolean;
  sku: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  compareAtPrice?: number;
  palette: string;
  fabric: string;
  background: string;
  badge?: string;
  images: string[];
  variants: ProductVariant[];
  details: {
    dimensions: string;
    weight: string;
    care: string;
    origin: string;
  };
  features: string[];
  inStock: boolean;
  limitedEdition?: {
    total: number;
    remaining: number;
  };
}

export interface CartItem {
  product: Product;
  variant: ProductVariant;
  quantity: number;
}
