export interface News {
  id?: string;
  title: string;
  description: string;
  content: string;
  images: string;
  slug: string;
  category: string;
  tags?: string[];
  author?: string;
  createdAt?: any;
  updatedAt?: any;
  status?: "draft" | "published";
  hotness: string;
  seoTitle?: string;
  seoDescription?: string;
  featuredImage?: string;
  thumbnail?: string;
}
