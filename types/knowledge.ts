export interface Knowledge {
  id?: string;
  title: string;
  description: string;
  content: string;
  images: string;
  slug: string;
  category?: string;
  tags?: string[];
  author?: string;
  createdAt?: string;
  updatedAt?: string;
  status?: "draft" | "published";
  educationalLevel?: "beginner" | "intermediate" | "advanced";
  readingTime?: number;
  hotness?: string;
}
