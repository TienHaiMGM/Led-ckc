import { useState, useEffect, useCallback } from "react";
import { db } from "../firebaseConfig";
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
import { Product } from "../../../types/product";
import { EditorContent } from "../../../types/editor";

export const useProductManagement = (initialEditorContent: EditorContent) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState(initialEditorContent);

  const generateSlug = useCallback((text: string) => {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[đĐ]/g, "d")
      .replace(/[^a-z0-9\s]/g, "")
      .replace(/\s+/g, "-");
  }, []);

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

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const newProduct = {
        ...formData,
        createdAt: new Date().toISOString(),
      };
      await addDoc(collection(db, "collections"), newProduct);
      setFormData(initialEditorContent);
      setIsAdding(false);
      fetchProducts();
    } catch (err) {
      setError("Lỗi khi thêm sản phẩm");
      console.error("Error adding product:", err);
    } finally {
      setLoading(false);
    }
  };

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
      setFormData(initialEditorContent);
      fetchProducts();
    } catch (err) {
      setError("Lỗi khi cập nhật sản phẩm");
      console.error("Error updating product:", err);
    } finally {
      setLoading(false);
    }
  };

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
      content: product.content,
      images: product.images,
      category: product.category,
      slug: product.slug,
      description: product.description,
      tags: product.tags,
      status: product.status,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
      seoTitle: product.seoTitle,
      seoDescription: product.seoDescription,
      featuredImage: product.featuredImage,
      thumbnail: product.thumbnail,
    });
  };

  const cancelEdit = () => {
    setEditingProduct(null);
    setFormData(initialEditorContent);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    setFormData(initialEditorContent);
  }, [initialEditorContent]);

  return {
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
  };
};
