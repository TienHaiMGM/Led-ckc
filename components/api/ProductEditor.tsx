import React, { useState, useCallback } from "react";
import {
  FaEdit,
  FaTrash,
  FaPlus,
  FaSave,
  FaTimes,
  FaSearch,
  FaSort,
} from "react-icons/fa";
import { EditorProps, Draft } from "../../types/product-management";
import Preview from "../../app/admin/product-content/preview";
import { FormField } from "../common/FormField";
import { useProductEditor } from "./hooks/useProductEditor";
import RichTextEditor from "../editor/TextEditor";

interface CategoryOption {
  value: string;
  label: string;
}

const categoryOptions: CategoryOption[] = [
  { value: "banghieu", label: "Bảng hiệu" },
  { value: "chunoi", label: "Chữ nổi" },
  { value: "hopden", label: "Hộp đèn" },
  { value: "bienbat", label: "Biển bạt" },
  { value: "bangled", label: "Bảng LED" },
  { value: "standee", label: "Standee" },
  { value: "bangsonha", label: "Bảng số nhà" },
  { value: "bangtencongty", label: "Bảng tên công ty" },
];

interface DraftsModalProps {
  drafts: Draft[];
  onClose: () => void;
  onLoadDraft: (id: string) => Promise<boolean>;
  onDeleteDraft: (id: string) => Promise<boolean>;
}

const DraftsModal: React.FC<DraftsModalProps> = ({
  drafts,
  onClose,
  onLoadDraft,
  onDeleteDraft,
}) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50 p-4">
    <div className="w-full max-w-2xl rounded-lg bg-white shadow-xl">
      <div className="border-b p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Danh sách bản nháp</h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded p-1 hover:bg-gray-100"
          >
            <FaTimes className="h-5 w-5 text-gray-500" />
          </button>
        </div>
      </div>

      <div className="max-h-[60vh] overflow-y-auto p-4">
        {drafts.length === 0 ? (
          <p className="text-center text-gray-500">Không có bản nháp nào</p>
        ) : (
          <div className="space-y-4">
            {drafts.map((draft) => (
              <div
                key={draft.id}
                className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-2 flex items-start justify-between">
                  <div>
                    <h3 className="font-medium text-gray-900">
                      {draft.title || "Bản nháp không có tiêu đề"}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Chỉnh sửa lần cuối:{" "}
                      {new Date(draft.lastModified).toLocaleString()}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      type="button"
                      onClick={async () => {
                        if (draft.id) {
                          const success = await onLoadDraft(draft.id);
                          if (success) {
                            onClose();
                          }
                        }
                      }}
                      className="flex items-center rounded-lg bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-600 hover:bg-blue-100"
                    >
                      <FaEdit className="mr-1.5 h-4 w-4" /> Tải
                    </button>
                    <button
                      type="button"
                      onClick={async () => {
                        if (
                          draft.id &&
                          window.confirm(
                            "Bạn có chắc chắn muốn xóa bản nháp này?",
                          )
                        ) {
                          await onDeleteDraft(draft.id);
                        }
                      }}
                      className="flex items-center rounded-lg bg-red-50 px-3 py-1.5 text-sm font-medium text-red-600 hover:bg-red-100"
                    >
                      <FaTrash className="mr-1.5 h-4 w-4" /> Xóa
                    </button>
                  </div>
                </div>
                {draft.description && (
                  <p className="mt-2 line-clamp-2 text-sm text-gray-600">
                    {draft.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  </div>
);

const ProductEditor: React.FC<EditorProps> = ({ EditorContent, onPreview }) => {
  const {
    drafts,
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
    saveDraft,
    loadDrafts,
    loadDraft,
    deleteDraft,
  } = useProductEditor(EditorContent);

  const [activeTab, setActiveTab] = useState("content");
  const [showPreview, setShowPreview] = useState(false);
  const [showDrafts, setShowDrafts] = useState(false);
  const [dataPreview, setDataPreview] = useState(EditorContent);

  // States for search, sorting and filtering
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("date"); // 'date' or 'category'
  const [sortDirection, setSortDirection] = useState("desc"); // 'asc' or 'desc'
  const [selectedCategory, setSelectedCategory] = useState(""); // "" means all categories

  const handlePreview = useCallback(() => {
    setShowPreview(true);
    if (onPreview) {
      setDataPreview(formData);
    }
  }, [formData, onPreview]);

  const handleSaveDraft = async () => {
    const success = await saveDraft();
    if (success) {
      alert("Đã lưu bản nháp thành công!");
    }
  };

  const handleShowDrafts = () => {
    loadDrafts();
    setShowDrafts(true);
  };

  // Filter, sort and categorize products
  const filteredAndSortedProducts = products
    .filter((product) => {
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch =
        product.title.toLowerCase().includes(searchLower) ||
        product.description?.toLowerCase().includes(searchLower) ||
        product.content?.toLowerCase().includes(searchLower);

      // Apply category filter if a category is selected
      const matchesCategory = selectedCategory
        ? product.category === selectedCategory
        : true;

      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        const dateA = new Date(a.createdAt || 0).getTime();
        const dateB = new Date(b.createdAt || 0).getTime();
        return sortDirection === "asc" ? dateA - dateB : dateB - dateA;
      } else if (sortBy === "category") {
        const categoryA = a.category || "";
        const categoryB = b.category || "";
        return sortDirection === "asc"
          ? categoryA.localeCompare(categoryB)
          : categoryB.localeCompare(categoryA);
      }
      return 0;
    });

  const toggleSortDirection = () => {
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  };

  const renderContentTab = () => (
    <div className="space-y-6">
      <FormField
        label="Tên sản phẩm"
        textLength={formData.title.length}
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
        type="textarea"
        label="Mô tả"
        textLength={formData.description.length}
        value={formData.description}
        onChange={(value) => setFormData({ ...formData, description: value })}
        required
        className="resize-x"
      />

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Nội dung
        </label>
        <div className="editor-wrapper">
          <RichTextEditor
            initialValue={formData.content}
            onChange={(value) => setFormData({ ...formData, content: value })}
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
          textLength={formData.seoTitle?.length || 0}
          value={formData.seoTitle || ""}
          onChange={(value) => setFormData({ ...formData, seoTitle: value })}
          description="Tiêu đề hiển thị trên kết quả tìm kiếm. Để trống để sử dụng tiêu đề chính."
        />

        <FormField
          label="SEO Description"
          textLength={(formData.seoDescription ?? "").length}
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
          value={formData.slug || generateSlug(formData.title)}
          onChange={(value) => setFormData({ ...formData, slug: value })}
          description="Đường dẫn URL của bài viết. Để trống để tự động tạo từ tiêu đề."
        />
      </div>
    </div>
  );

  return (
    <div className="container mx-auto p-4">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Quản Lý Sản Phẩm</h1>
        <button
          type="button"
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
        <div className="mb-8 rounded-lg bg-white p-6 shadow-lg">
          <h2 className="mb-4 text-xl font-semibold">
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
            <div className="p-6">
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
                  className="flex items-center rounded-lg bg-gray-100 px-4 py-2 text-gray-700 hover:bg-gray-200"
                >
                  <FaEdit className="mr-2" /> Xem trước
                </button>
                <div className="flex space-x-2">
                  <button
                    type="button"
                    onClick={handleSaveDraft}
                    className="flex items-center rounded-lg bg-gray-100 px-4 py-2 text-gray-700 hover:bg-gray-200"
                  >
                    <FaSave className="mr-2" /> Lưu nháp
                  </button>
                  <button
                    type="button"
                    onClick={handleShowDrafts}
                    className="flex items-center rounded-lg bg-gray-100 px-4 py-2 text-gray-700 hover:bg-gray-200"
                  >
                    <FaEdit className="mr-2" /> Xem bản nháp
                  </button>
                </div>
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

      {showDrafts && (
        <DraftsModal
          drafts={drafts}
          onClose={() => setShowDrafts(false)}
          onLoadDraft={loadDraft}
          onDeleteDraft={deleteDraft}
        />
      )}

      {/* Search, Filter and Sort Controls */}
      <div className="mb-4 space-y-4">
        <div className="flex items-center justify-between">
          <div className="relative max-w-md flex-1">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <FaSearch className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm kiếm sản phẩm..."
              className="block w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center space-x-4">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="date">Sắp xếp theo ngày</option>
              <option value="category">Sắp xếp theo danh mục</option>
            </select>
            <button
              type="button"
              onClick={toggleSortDirection}
              className="flex items-center rounded-lg border border-gray-300 px-3 py-2 hover:bg-gray-50"
            >
              <FaSort
                className={`h-5 w-5 ${sortDirection === "asc" ? "rotate-180 transform" : ""}`}
              />
            </button>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setSelectedCategory("")}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              selectedCategory === ""
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Tất cả
          </button>
          {categoryOptions.map((category) => (
            <button
              type="button"
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                selectedCategory === category.value
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

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
                Ngày đăng
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Thao tác
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {filteredAndSortedProducts.map((product) => (
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
                <td className="whitespace-nowrap px-6 py-4 text-gray-500">
                  {new Date(product.createdAt || "").toLocaleDateString(
                    "vi-VN",
                  )}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <div className="flex space-x-2">
                    <button
                      type="button"
                      onClick={() => startEdit(product)}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      <FaEdit className="h-5 w-5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(product.id!)}
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
    </div>
  );
};

export default ProductEditor;
