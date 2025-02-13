import React, { useState, useCallback } from "react";
import { FaPlus, FaSave, FaTimes, FaEdit } from "react-icons/fa";
import { EditorProps } from "../../types/product-management";
import Preview from "../../app/admin/product-content/preview";
import { useProductEditor } from "../api/hooks/useProductEditor";
import { DraftsModal } from "./DraftsModal";
import { EditorTabs } from "./EditorTabs";
import { ProductTable } from "./ProductTable";

const ProductEditor: React.FC<EditorProps> = ({
  EditorContent,
  onPreview,
  onSave,
  onDraft,
}) => {
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

  const [activeTab, setActiveTab] = useState<"content" | "seo">("content");
  const [showPreview, setShowPreview] = useState(false);
  const [showDrafts, setShowDrafts] = useState(false);
  const [dataPreview, setDataPreview] = useState(EditorContent);

  const handlePreview = useCallback(() => {
    setShowPreview(true);
    if (onPreview) {
      setDataPreview(formData);
      onPreview(formData);
    }
  }, [formData, onPreview]);

  const handleSaveDraft = async () => {
    const success = await saveDraft();
    if (success && onDraft) {
      onDraft(formData);
    }
  };

  const handleShowDrafts = () => {
    loadDrafts();
    setShowDrafts(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    if (editingProduct) {
      await handleUpdate(e);
    } else {
      await handleAdd(e);
    }
    if (onSave) {
      onSave(formData);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-8 flex items-center justify-between">
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
        <div
          className="mb-4 rounded-lg bg-red-100 p-4 text-red-700"
          role="alert"
        >
          {error}
        </div>
      )}

      {(isAdding || editingProduct) && (
        <div className="mb-8 rounded-lg bg-white p-6 shadow-lg">
          <h2 className="mb-4 text-xl font-semibold">
            {editingProduct ? "Sửa Sản Phẩm" : "Thêm Sản Phẩm Mới"}
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="border-b border-gray-200">
              <nav className="flex px-6" role="tablist">
                {["content", "seo"].map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    role="tab"
                    aria-selected={activeTab === tab}
                    onClick={() => setActiveTab(tab as "content" | "seo")}
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

            <div className="p-6" role="tabpanel">
              <EditorTabs
                activeTab={activeTab}
                formData={formData}
                setFormData={setFormData}
                generateSlug={generateSlug}
              />
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

      <ProductTable
        products={products}
        onEdit={startEdit}
        onDelete={handleDelete}
        loading={loading}
      />
    </div>
  );
};

export default ProductEditor;
