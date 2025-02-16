import React, { useState } from "react";
import {
  ProductContent,
  CATEGORY_OPTIONS,
} from "../../types/product-management";
import { FormField } from "../common/FormField";
import dynamic from "next/dynamic";
import { modules, formats } from "../api/editorConfig";
import "react-quill/dist/quill.snow.css";
import "../../app/admin/product-content/editor.css";

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Đang tải trình soạn thảo...</p>,
});

interface EditorTabsProps {
  activeTab: "content" | "seo";
  formData: ProductContent;
  setFormData: (data: ProductContent) => void;
  generateSlug: (text: string) => string;
}

interface CategoryOption {
  value: string;
  label: string;
}

const ContentTab: React.FC<{
  formData: ProductContent;
  setFormData: (data: ProductContent) => void;
}> = ({ formData, setFormData }) => {
  const [htmlContent, setHtmlContent] = useState<string>("");

  const handleEditorChange = (content: string) => {
    setFormData({ ...formData, content });
    setHtmlContent(content);
  };

  const copyHtmlToClipboard = () => {
    const textarea = document.createElement("textarea");
    textarea.value = htmlContent;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("HTML đã được sao chép vào clipboard!");
  };

  // Convert readonly array to mutable array of CategoryOption
  const categoryOptions: CategoryOption[] = [...CATEGORY_OPTIONS];

  return (
    <div className="space-y-6">
      <div className="mb-4 flex justify-end">
        <button
          onClick={copyHtmlToClipboard}
          className="rounded bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600"
        >
          Sao chép HTML
        </button>
      </div>

      <FormField
        label="Tên sản phẩm"
        value={formData.title}
        onChange={(value) => setFormData({ ...formData, title: value })}
        required
      />

      <FormField
        label="Danh mục"
        type="select"
        value={formData.category}
        onChange={(value) => setFormData({ ...formData, category: value })}
        options={categoryOptions}
        required
      />

      <FormField
        label="Link hình ảnh"
        type="url"
        value={formData.images}
        onChange={(value) => setFormData({ ...formData, images: value })}
        required
      />

      <FormField
        label="Mô tả"
        value={formData.description}
        onChange={(value) => setFormData({ ...formData, description: value })}
        required
      />

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Nội dung
        </label>
        <div className="editor-wrapper">
          <ReactQuill
            theme="snow"
            value={formData.content}
            onChange={handleEditorChange}
            modules={modules}
            formats={formats}
            className="editor-content"
          />
        </div>
        <div className="mt-4">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            HTML Preview
          </label>
          <div className="max-h-40 overflow-auto rounded border border-gray-200 bg-gray-50 p-4">
            <pre className="whitespace-pre-wrap text-sm text-gray-700">
              {htmlContent}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

const SeoTab: React.FC<{
  formData: ProductContent;
  setFormData: (data: ProductContent) => void;
  generateSlug: (text: string) => string;
}> = ({ formData, setFormData, generateSlug }) => (
  <div className="space-y-8">
    <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
      <h3 className="mb-2 text-sm font-medium text-gray-900">SEO Preview</h3>
      <div className="overflow-hidden rounded-lg bg-white p-4 shadow-sm">
        <div className="text-xl font-medium text-blue-600 hover:underline">
          {formData.seoTitle || formData.title}
        </div>
        <div className="mt-1 flex items-center gap-1 text-sm text-green-700">
          <span>🔒</span>
          <span>
            yourwebsite.com/{formData.slug || generateSlug(formData.title)}
          </span>
        </div>
        <div className="mt-2 line-clamp-2 text-sm text-gray-600">
          {formData.seoDescription || formData.description}
        </div>
      </div>
    </div>

    <div className="space-y-6">
      <FormField
        label="SEO Title"
        value={formData.seoTitle || ""}
        onChange={(value) => setFormData({ ...formData, seoTitle: value })}
        description="Tiêu đề hiển thị trên kết quả tìm kiếm. Để trống để sử dụng tiêu đề chính."
      />

      <FormField
        label="SEO Description"
        type="textarea"
        value={formData.seoDescription || ""}
        onChange={(value) =>
          setFormData({ ...formData, seoDescription: value })
        }
        description="Mô tả hiển thị trên kết quả tìm kiếm. Để trống để sử dụng mô tả chính."
      />

      <FormField
        label="Thumbnail"
        value={formData.thumbnail || ""}
        onChange={(value) => setFormData({ ...formData, thumbnail: value })}
        description="Hình ảnh đại diện cho bài viết khi chia sẻ trên mạng xã hội."
      />

      <FormField
        label="Slug URL"
        value={formData.slug || ""}
        onChange={(value) => setFormData({ ...formData, slug: value })}
        description="Đường dẫn URL của bài viết. Để trống để tự động tạo từ tiêu đề."
      />
    </div>
  </div>
);

export const EditorTabs: React.FC<EditorTabsProps> = ({
  activeTab,
  formData,
  setFormData,
  generateSlug,
}) => {
  return activeTab === "content" ? (
    <ContentTab formData={formData} setFormData={setFormData} />
  ) : (
    <SeoTab
      formData={formData}
      setFormData={setFormData}
      generateSlug={generateSlug}
    />
  );
};
