import React, { useState, useCallback } from "react";
import { FaEdit, FaTrash, FaPlus, FaSave, FaTimes } from "react-icons/fa";
import dynamic from "next/dynamic";
import { EditorProps } from "../../types/editor";
import Preview from "app/admin/product-content/preview";
import { FormField } from "../common/FormField";
import { useProductManagement } from "./hooks/useProductManagement";
import { modules, formats } from "./editorConfig";
import "react-quill/dist/quill.snow.css";
import "../../app/admin/product-content/editor.css";

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Đang tải trình soạn thảo...</p>,
});

const CATEGORY_OPTIONS = [
  { value: "banghieu", label: "Bảng hiệu" },
  { value: "chunoi", label: "Chữ nổi" },
  { value: "hopden", label: "Hộp đèn" },
  { value: "bienbat", label: "Biển bạt" },
  { value: "bienled", label: "Biển LED" },
];

const DataManagement: React.FC<EditorProps> = ({
  EditorContent,
  onPreview,
}) => {
  const {
    products,
    editingProduct,
    isAdding,
    loading,
    error,
    formData,
    setFormData,
    setIsAdding,
    handleAdd,
    handleUpdate,
    handleDelete,
    startEdit,
    cancelEdit,
    generateSlug,
  } = useProductManagement(EditorContent);

  const [activeTab, setActiveTab] = useState("content");
  const [showPreview, setShowPreview] = useState(false);
  const [dataPreview, setDataPreview] = useState(EditorContent);

  const handlePreview = useCallback(() => {
    setShowPreview(true);
    if (onPreview) {
      setDataPreview(formData);
    }
  }, [formData, onPreview]);

  const renderContentTab = () => (
    <div className="space-y-6">
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
        options={CATEGORY_OPTIONS}
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
            onChange={(value) => setFormData({ ...formData, content: value })}
            modules={modules}
            formats={formats}
            className="editor-content"
          />
        </div>
      </div>
    </div>
  );

  const renderSeoTab = () => (
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

  const renderProductTable = () => (
    <div className="overflow-x-auto rounded-lg bg-white shadow-lg">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              Sản phẩm
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              Danh mục
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              Thao tác
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {products.map((product) => (
            <tr key={product.id}>
              <td className="whitespace-nowrap px-6 py-4">
                <div className="flex items-center">
                  <img
                    src={product.images}
                    alt={product.title}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <div className="font-medium text-gray-900">
                      {product.title}
                    </div>
                  </div>
                </div>
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-gray-500">
                {product.category}
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                <div className="flex space-x-2">
                  <button
                    onClick={() => startEdit(product)}
                    className="text-blue-600 hover:text-blue-900"
                  >
                    <FaEdit className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    <FaTrash className="h-5 w-5" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="container mx-auto w-[60vw] p-4">
      <div className="mb-1 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Quản Lý Sản Phẩm</h1>
        <button
          onClick={() => setIsAdding(true)}
          className="flex items-center rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          disabled={loading}
        >
          <FaPlus className="mr-2" /> Thêm Sản Phẩm
        </button>
      </div>

      {error && (
        <div className="mb-4 rounded-lg bg-red-100 p-4 text-red-700">
          {error}
        </div>
      )}

      {(isAdding || editingProduct) && (
        <div className="mb-1 rounded-lg bg-white p-2 text-left shadow-lg">
          <h2 className="mb-1 text-xl font-semibold">
            {editingProduct ? "Sửa Sản Phẩm" : "Thêm Sản Phẩm Mới"}
          </h2>
          <form onSubmit={editingProduct ? handleUpdate : handleAdd}>
            <div className="border-b border-gray-200">
              <nav className="flex px-6">
                {["content", "seo"].map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`border-b-2 px-4 py-3 text-sm font-medium ${
                      activeTab === tab
                        ? "border-blue-500 text-blue-600"
                        : "border-transparent text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    {tab === "content" ? "Nội dung" : "SEO"}
                  </button>
                ))}
              </nav>
            </div>

            <div className="p-2">
              {activeTab === "content" ? renderContentTab() : renderSeoTab()}
            </div>

            {showPreview && (
              <Preview
                content={dataPreview}
                onClose={() => setShowPreview(false)}
              />
            )}

            <div className="flex items-center justify-between border-t border-gray-200 p-6">
              <div className="flex items-center space-x-4">
                <button
                  type="button"
                  onClick={handlePreview}
                  className="rounded-lg bg-gray-100 px-4 py-2 text-gray-700 hover:bg-gray-200"
                >
                  Xem trước
                </button>
                <button
                  type="button"
                  className="rounded-lg bg-gray-100 px-4 py-2 text-gray-700 hover:bg-gray-200"
                >
                  Lưu nháp
                </button>
              </div>

              <div className="flex items-center space-x-4">
                <button
                  type="button"
                  onClick={() => {
                    cancelEdit();
                    setIsAdding(false);
                  }}
                  className="flex items-center rounded-lg border px-4 py-2 hover:bg-gray-100"
                  disabled={loading}
                >
                  <FaTimes className="mr-2" /> Hủy
                </button>
                <button
                  type="submit"
                  className="flex items-center rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                  disabled={loading}
                >
                  <FaSave className="mr-2" />{" "}
                  {loading ? "Đang xử lý..." : "Lưu"}
                </button>
              </div>
            </div>
          </form>
        </div>
      )}

      {renderProductTable()}
    </div>
  );
};

export default DataManagement;
