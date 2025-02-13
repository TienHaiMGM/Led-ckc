export interface Product {
  id: string;
  title: string;
  content: string;
  images: string;
  category: string;
  slug: string;
  description: string;
  tags: string[];
  status: "draft" | "published";
  createdAt: string;
  updatedAt: string;
  seoTitle?: string;
  seoDescription?: string;
  featuredImage?: string;
  thumbnail?: string;
}

export type ProductCategory =
  | "bang-hieu"
  | "bang-alu"
  | "bang-led"
  | "hop-den"
  | "chu-noi"
  | "logo";

export interface ProductsByCategory {
  [key: string]: Product[];
}
