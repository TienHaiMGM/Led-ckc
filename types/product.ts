export interface Product {
  id: string;
  title: string;
  image: string;
  category: string;
  description: string;
  price: string; // Added price property
  slug: string; // Added slug property
  createdAt: Date;
  updatedAt: Date;
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
