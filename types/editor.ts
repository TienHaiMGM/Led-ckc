export interface EditorContent {
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
  thumbnail?: string; // New field for thumbnail
  caption?: string; // Added caption property
}
export const EditorContentInitial = {
  title: "",
  content: "",
  images: "",
  category: "",
  slug: "",
  description: "",
  tags: "",
  status: "",
  createdAt: "",
  updatedAt: "",
  seoTitle: "",
  seoDescription: "",
  featuredImage: "",
  thumbnail: "", // New field for thumbnail
};
export interface EditorProps {
  EditorContent: EditorContent;
  initialContent?: EditorContent;
  onSave?: (content: EditorContent) => void;
  onPreview?: (content: EditorContent) => void;
  onDraft?: (content: EditorContent) => void;
}

export const CATEGORY_OPTIONS = [
  { value: "bang-hieu", label: "Bảng hiệu" },
  { value: "bang-led", label: "Bảng LED" },
  { value: "chu-noi", label: "Chữ nổi" },
  { value: "hop-den", label: "Hộp đèn" },
  { value: "bien-quang-cao", label: "Biển quảng cáo" },
  { value: "bang-alu", label: "Bảng Alu" },
];

export const EDITOR_STATUS = {
  draft: "Bản nháp",
  published: "Đã xuất bản",
};

export interface EditorTab {
  id: string;
  label: string;
  icon?: string;
}

export const EDITOR_TABS: EditorTab[] = [
  { id: "content", label: "Nội dung" },
  { id: "seo", label: "SEO" },
  { id: "media", label: "Hình ảnh & Media" },
  { id: "settings", label: "Cài đặt" },
];
