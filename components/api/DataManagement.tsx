"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import "../../app/admin/product-content/editor";
import { db } from "./firebaseConfig";
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDocs,
  query,
  orderBy,
} from "firebase/firestore";
import { FaEdit, FaTrash, FaPlus, FaSave, FaTimes } from "react-icons/fa";
import {
  EditorProps,
  EditorContent,
  CATEGORY_OPTIONS,
  EDITOR_TABS,
  EDITOR_STATUS,
} from "../../types/editor";

interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  createdAt: string;
  content: any;
}
import "react-quill/dist/quill.snow.css";
import type { UnprivilegedEditor } from "react-quill";
import dynamic from "next/dynamic";
import Preview from "app/admin/product-content/preview";

//EDITOR
const modules = {
  toolbar: {
    container: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ size: ["small", false, "large", "huge"] }],
      [{ font: [] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ align: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }],
      ["blockquote", "code-block"],
      ["link", "image", "video"],
      ["clean"],
    ],
    handlers: {
      image: function () {
        const input = document.createElement("input");
        input.setAttribute("type", "file");
        input.setAttribute("accept", "image/*");
        input.click();

        input.onchange = async () => {
          const file = input.files?.[0];
          if (file) {
            const url = URL.createObjectURL(file);
            const range = this.quill.getSelection(true);
            this.quill.insertEmbed(range.index, "image", url);
          }
        };
      },
    },
  },
  clipboard: {
    matchVisual: false,
  },
};

const formats = [
  "header",
  "size",
  "font",
  "bold",
  "italic",
  "underline",
  "strike",
  "color",
  "background",
  "align",
  "list",
  "bullet",
  "indent",
  "blockquote",
  "code-block",
  "link",
  "image",
  "video",
];

const toolbarTooltips: Record<string, string> = {
  header: "Kiểu tiêu đề",
  size: "Cỡ chữ",
  font: "Font chữ",
  bold: "In đậm",
  italic: "In nghiêng",
  underline: "Gạch chân",
  strike: "Gạch ngang",
  color: "Màu chữ",
  background: "Màu nền",
  align: "Căn lề",
  list: "Danh sách",
  bullet: "Danh sách không thứ tự",
  indent: "Thụt lề",
  blockquote: "Trích dẫn",
  "code-block": "Mã nguồn",
  link: "Chèn liên kết",
  image: "Chèn ảnh",
  video: "Chèn video",
  clean: "Xóa định dạng",
};
const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Đang tải trình soạn thảo...</p>,
});

const DataManagement = ({
  EditorContent,
  onPreview,
  onSave,
  onDraft,
}: EditorProps) => {
  const [title, setTitle] = useState(EditorContent?.title || "");
  const [content, setContent] = useState(EditorContent?.content || "");
  const [category, setCategory] = useState(EditorContent?.category || "");
  const [description, setDescription] = useState(
    EditorContent?.description || "",
  );
  const [products, setProducts] = useState<Product[]>([]);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState(EditorContent);
  const [tags, setTags] = useState<string[]>(EditorContent?.tags || []);
  const [thumbnail, setThumbnail] = useState(EditorContent?.thumbnail || "");
  const [seoTitle, setSeoTitle] = useState(EditorContent?.seoTitle || "");
  const [seoDescription, setSeoDescription] = useState(
    EditorContent?.seoDescription || "",
  );
  const [status, setStatus] = useState<"draft" | "published">(
    EditorContent?.status || "draft",
  );
  const [images, setImages] = useState<string>(EditorContent?.images);
  const [featuredImage, setFeaturedImage] = useState(
    EditorContent?.featuredImage || "",
  );
  const [slug, setSlug] = useState(EditorContent?.slug || "");

  //editor
  const [activeTab, setActiveTab] = useState("content");
  const [showPreview, setShowPreview] = useState(false);
  // Utility functions
  const generateSlug = useCallback((text: string) => {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[đĐ]/g, "d")
      .replace(/[^a-z0-9\s]/g, "")
      .replace(/\s+/g, "-");
  }, []);

  // Content management
  const getCurrentContent = useCallback((): EditorContent => {
    return {
      title,
      content,
      category,
      slug: slug || generateSlug(title),
      description,
      tags,
      status,
      images,
      seoTitle,
      seoDescription,
      featuredImage,
      thumbnail,
      createdAt: EditorContent?.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
  }, [
    formData.title,
    formData.content,
    formData.category,
    formData.slug,
    formData.description,
    formData.tags,
    formData.status,
    formData.images,
    formData.seoTitle,
    formData.seoDescription,
    formData.featuredImage,
    formData.thumbnail,
    EditorContent,
    generateSlug,
  ]);
  console.log(`getCurrentContent:${onPreview(getCurrentContent())}`);
  console.log(`asdad:${formData.title}`);
  const handlePreview = useCallback(() => {
    setShowPreview(true);
    if (onPreview) {
      onPreview(getCurrentContent());
    }
  }, [getCurrentContent, onPreview]);

  useEffect(() => {
    setFormData(EditorContent);
  }, [EditorContent]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const q = query(
        collection(db, "collections"),
        orderBy("createdAt", "desc"),
      );
      const querySnapshot = await getDocs(q);
      const productsData = querySnapshot.docs.map(
        (doc) =>
          ({
            id: doc.id,
            ...doc.data(),
          }) as Product,
      );
      setProducts(productsData);
    } catch (err) {
      setError("Lỗi khi tải dữ liệu");
      console.error("Error fetching products:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Add new product
  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const newProduct = {
        ...formData,
        createdAt: new Date().toISOString(),
      };
      await addDoc(collection(db, "collections"), newProduct);
      setFormData(EditorContent);
      setIsAdding(false);
      fetchProducts();
    } catch (err) {
      setError("Lỗi khi thêm sản phẩm");
      console.error("Error adding product:", err);
    } finally {
      setLoading(false);
    }
  };

  // Update product
  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProduct) return;

    try {
      setLoading(true);
      const productRef = doc(db, "collections", editingProduct.id);
      await updateDoc(productRef, {
        ...formData,
        updatedAt: new Date().toISOString(),
      });
      setEditingProduct(null);
      setFormData(EditorContent);
      fetchProducts();
    } catch (err) {
      setError("Lỗi khi cập nhật sản phẩm");
      console.error("Error updating product:", err);
    } finally {
      setLoading(false);
    }
  };

  // Delete product
  const handleDelete = async (id: string) => {
    if (!window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) return;

    try {
      setLoading(true);
      await deleteDoc(doc(db, "collections", id));
      fetchProducts();
    } catch (err) {
      setError("Lỗi khi xóa sản phẩm");
      console.error("Error deleting product:", err);
    } finally {
      setLoading(false);
    }
  };

  const startEdit = (product: Product) => {
    setEditingProduct(product);
    setFormData({
      title: product.title,
      description: product.description,
      image: product.image,
      category: product.category,
      content: product.content,
    });
  };

  const cancelEdit = () => {
    setEditingProduct(null);
    setFormData(EditorContent);
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
        <div className="mb-4 rounded-lg bg-red-100 p-4 text-red-700">
          {error}
        </div>
      )}
      {/* Xem truoc  */}
      <div className="border-b border-gray-200 p-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800">
            {/* {status === "draft" ? "Bản nháp: " : ""} */}
            {/* {title || "Sản phẩm mới"} */}
          </h1>
          <div className="flex items-center space-x-4">
            <span className={`rounded-full px-3 py-1 text-sm`}>
              {/* {EDITOR_STATUS[status]} */}
            </span>
            <button
              onClick={handlePreview}
              className="rounded-lg bg-gray-100 px-4 py-2 text-gray-700 hover:bg-gray-200"
            >
              Xem trước
            </button>
            <button
              // onClick={() => handleSave(true)}
              className="rounded-lg bg-gray-100 px-4 py-2 text-gray-700 hover:bg-gray-200"
            >
              Lưu nháp
            </button>
            <button
              type="submit"
              className="flex items-center rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
              disabled={loading}
            >
              <FaSave className="mr-2" />{" "}
              {loading ? "Đang xử lý..." : "Xuất Bản"}
            </button>
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
          </div>
        </div>
      </div>
      {/* Add/Edit Form */}
      {(isAdding || editingProduct) && (
        <div className="mb-8 rounded-lg bg-white p-6 shadow-lg">
          <h2 className="mb-4 text-xl font-semibold">
            {editingProduct ? "Sửa Sản Phẩm" : "Thêm Sản Phẩm Mới"}
          </h2>
          <form onSubmit={editingProduct ? handleUpdate : handleAdd}>
            {/* Tabs editor*/}
            <div className="border-b border-gray-200">
              <nav className="flex px-6">
                {EDITOR_TABS.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`border-b-2 px-4 py-3 text-sm font-medium ${
                      activeTab === tab.id
                        ? "border-blue-500 text-blue-600"
                        : "border-transparent text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>
            <div className="p-6">
              {activeTab === "content" && (
                <div className="space-y-6">
                  <div>
                    <label className="mb-2 block font-medium">
                      Tên sản phẩm
                    </label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) =>
                        setFormData({ ...formData, title: e.target.value })
                      }
                      className="w-full rounded-lg border p-2"
                      required
                    />
                  </div>
                  <div>
                    <label className="mb-2 block font-medium">Danh mục</label>
                    <select
                      value={formData.category}
                      onChange={(e) =>
                        setFormData({ ...formData, category: e.target.value })
                      }
                      className="w-full rounded-lg border p-2"
                      required
                    >
                      <option value="">Chọn danh mục</option>
                      <option value="banghieu">Bảng hiệu</option>
                      <option value="chunoi">Chữ nổi</option>
                      <option value="hopden">Hộp đèn</option>
                      <option value="bienbat">Biển bạt</option>
                      <option value="bienled">Biển LED</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block font-medium">
                      Link hình ảnh
                    </label>
                    <input
                      type="url"
                      value={formData.images}
                      onChange={(e) =>
                        setFormData({ ...formData, images: e.target.value })
                      }
                      className="w-full rounded-lg border p-2"
                      required
                    />
                  </div>
                  <div>
                    <label className="mb-2 block font-medium">Mô tả</label>
                    <input
                      type="text"
                      value={formData.description}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          description: e.target.value,
                        })
                      }
                      className="w-full rounded-lg border p-2"
                      required
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Nội dung
                    </label>
                    <div className="editor-wrapper rounded-lg border">
                      <ReactQuill
                        theme="snow"
                        value={formData.content}
                        onChange={(
                          value: string,
                          _delta: any,
                          _source: any,
                          editor: UnprivilegedEditor,
                        ) =>
                          setFormData({
                            ...formData,
                            content: value,
                          })
                        }
                        modules={modules}
                        formats={formats}
                        className="min-h-[400px]"
                      />
                    </div>
                  </div>
                </div>
              )}
              {activeTab === "seo" && (
                <div className="space-y-8">
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                    <h3 className="mb-2 text-sm font-medium text-gray-900">
                      SEO Preview
                    </h3>
                    <div className="overflow-hidden rounded-lg bg-white p-4 shadow-sm">
                      <div className="text-xl font-medium text-blue-600 hover:underline">
                        {EditorContent.seoTitle || EditorContent.title}
                      </div>
                      <div className="mt-1 flex items-center gap-1 text-sm text-green-700">
                        <span>🔒</span>
                        <span>
                          yourwebsite.com/
                          {EditorContent.slug ||
                            generateSlug(EditorContent.title)}
                        </span>
                      </div>
                      <div className="mt-2 line-clamp-2 text-sm text-gray-600">
                        {EditorContent.seoDescription ||
                          EditorContent.description}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        SEO Title
                      </label>
                      <input
                        type="text"
                        value={EditorContent.seoTitle}
                        onChange={(e) => setSeoTitle(e.target.value)}
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                        placeholder="Nhập tiêu đề SEO"
                      />
                      <p className="mt-1 text-sm text-gray-500">
                        Tiêu đề hiển thị trên kết quả tìm kiếm. Để trống để sử
                        dụng tiêu đề chính.
                      </p>
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        SEO Description
                      </label>
                      <textarea
                        value={EditorContent.seoDescription}
                        onChange={(e) => setSeoDescription(e.target.value)}
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                        rows={4}
                        placeholder="Nhập mô tả SEO"
                      />
                      <p className="mt-1 text-sm text-gray-500">
                        Mô tả hiển thị trên kết quả tìm kiếm. Để trống để sử
                        dụng mô tả chính.
                      </p>
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        Thumbnail
                      </label>
                      <input
                        type="text"
                        value={EditorContent.thumbnail}
                        onChange={(e) => setThumbnail(e.target.value)}
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                        placeholder="Nhập đường dẫn thumbnail"
                      />
                      <p className="mt-1 text-sm text-gray-500">
                        Hình ảnh đại diện cho bài viết khi chia sẻ trên mạng xã
                        hội.
                      </p>
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        Slug URL
                      </label>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500">
                          yourwebsite.com/
                        </span>
                        <input
                          type="text"
                          value={EditorContent.slug}
                          onChange={(e) => setSlug(e.target.value)}
                          className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                          placeholder="url-bai-viet"
                        />
                      </div>
                      <p className="mt-1 text-sm text-gray-500">
                        Đường dẫn URL của bài viết. Để trống để tự động tạo từ
                        tiêu đề.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {showPreview && (
              <Preview
                content={getCurrentContent()}
                onClose={() => setShowPreview(false)}
              />
            )}
          </form>
        </div>
      )}

      {/* Products Table */}
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
                      src={product.image}
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
    </div>
  );
};

export default DataManagement;
