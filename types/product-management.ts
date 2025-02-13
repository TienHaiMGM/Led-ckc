export interface BaseDocument {
  id?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ProductContent extends BaseDocument {
  title: string;
  content: string;
  images: string;
  category: string;
  slug: string;
  description: string;
  tags: string[];
  status: "draft" | "published";
  seoTitle?: string;
  seoDescription?: string;
  featuredImage?: string;
  thumbnail?: string;
}

export interface Draft extends ProductContent {
  lastModified: string;
  originalProductId?: string | null;
}

export const EmptyProductContent: ProductContent = {
  title: "",
  content: "",
  images: "",
  category: "",
  slug: "",
  description: "",
  tags: [],
  status: "draft",
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  seoTitle: "",
  seoDescription: "",
  featuredImage: "",
  thumbnail: "",
};

export interface EditorProps {
  EditorContent: ProductContent;
  initialContent?: ProductContent;
  onSave?: (content: ProductContent) => void;
  onPreview?: (content: ProductContent) => void;
  onDraft?: (content: ProductContent) => void;
}

export const CATEGORY_OPTIONS = [
  { value: "banghieu", label: "Bảng hiệu" },
  { value: "chunoi", label: "Chữ nổi" },
  { value: "hopden", label: "Hộp đèn" },
  { value: "bienbat", label: "Biển bạt" },
  { value: "bienled", label: "Biển LED" },
] as const;

export const EDITOR_STATUS = {
  draft: "Bản nháp",
  published: "Đã xuất bản",
} as const;

export const EDITOR_TABS = [
  { id: "content", label: "Nội dung" },
  { id: "seo", label: "SEO" },
] as const;
