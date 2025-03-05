import { useState, useEffect, useCallback } from "react";
import { db } from "@/lib/firebase";
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDocs,
  getDoc,
  query,
  orderBy,
  DocumentData,
  QueryDocumentSnapshot,
} from "firebase/firestore";
import {
  ProductContent,
  Draft,
  EmptyProductContent,
} from "@/types/product-management";

// Map Firestore document to local TypeScript type
const mapFirestoreDoc = <T extends { id?: string }>(
  doc: QueryDocumentSnapshot<DocumentData>,
): T => ({ id: doc.id, ...doc.data() }) as T;

export const useProductEditorKnowLedge = (
  initialContent: ProductContent = EmptyProductContent,
) => {
  const [products, setProducts] = useState<ProductContent[]>([]);
  const [editingProduct, setEditingProduct] = useState<ProductContent | null>(
    null,
  );
  const [isAdding, setIsAdding] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState(initialContent);
  const [drafts, setDrafts] = useState<Draft[]>([]);

  const generateSlug = useCallback((text: string) => {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[đĐ]/g, "d")
      .replace(/[^a-z0-9\s]/g, "")
      .replace(/\s+/g, "-");
  }, []);

  // Fetch knowledge articles from Firestore
  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      const q = query(
        collection(db, "knowledge"),
        orderBy("createdAt", "desc"),
      );
      const querySnapshot = await getDocs(q);
      setProducts(
        querySnapshot.docs.map((doc) => mapFirestoreDoc<ProductContent>(doc)),
      );
    } catch (err) {
      setError("Lỗi khi tải dữ liệu");
      console.error("Error fetching products:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch data when component mounts
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const newProduct: Omit<ProductContent, "id"> = {
        ...formData,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        status: "published",
        tags: formData.tags || [],
        slug: formData.slug || generateSlug(formData.title),
      };
      const docRef = await addDoc(collection(db, "knowledge"), newProduct);
      setProducts((prev) => [{ id: docRef.id, ...newProduct }, ...prev]);
      setFormData(initialContent);
      setIsAdding(false);
    } catch (err) {
      setError("Lỗi khi thêm bài viết");
      console.error("Error adding product:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProduct?.id) return;
    try {
      setLoading(true);
      const productRef = doc(db, "knowledge", editingProduct.id);
      const updateData: Partial<ProductContent> = {
        ...formData,
        updatedAt: new Date().toISOString(),
        tags: formData.tags || [],
        slug: formData.slug || generateSlug(formData.title),
      };
      await updateDoc(productRef, updateData);
      setProducts((prev) =>
        prev.map((p) =>
          p.id === editingProduct.id ? { ...p, ...updateData } : p,
        ),
      );
      setEditingProduct(null);
      setFormData(initialContent);
    } catch (err) {
      setError("Lỗi khi cập nhật bài viết");
      console.error("Error updating product:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Bạn có chắc chắn muốn xóa bài viết này?")) return;
    try {
      setLoading(true);
      await deleteDoc(doc(db, "knowledge", id));
      setProducts((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      setError("Lỗi khi xóa bài viết");
      console.error("Error deleting product:", err);
    } finally {
      setLoading(false);
    }
  };

  const startEdit = (product: ProductContent) => {
    setEditingProduct(product);
    setFormData({ ...product, tags: product.tags || [] });
  };

  const cancelEdit = () => {
    setEditingProduct(null);
    setFormData(initialContent);
  };

  // Save as draft
  const saveDraft = async () => {
    try {
      setLoading(true);
      const draftData: Omit<Draft, "id"> = {
        ...formData,
        lastModified: new Date().toISOString(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        status: "draft",
        tags: formData.tags || [],
        originalProductId: editingProduct?.id || null,
      };
      const docRef = await addDoc(collection(db, "drafts"), draftData);
      setDrafts((prev) => [{ id: docRef.id, ...draftData }, ...prev]);
      return true;
    } catch (err) {
      setError("Lỗi khi lưu bản nháp");
      console.error("Error saving draft:", err);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const loadDrafts = async () => {
    try {
      setLoading(true);
      const q = query(
        collection(db, "drafts"),
        orderBy("lastModified", "desc"),
      );
      const querySnapshot = await getDocs(q);
      setDrafts(querySnapshot.docs.map((doc) => mapFirestoreDoc<Draft>(doc)));
    } catch (err) {
      setError("Lỗi khi tải bản nháp");
      console.error("Error loading drafts:", err);
    } finally {
      setLoading(false);
    }
  };

  const loadDraft = async (draftId: string) => {
    try {
      setLoading(true);
      const draftRef = doc(db, "drafts", draftId);
      const draftSnap = await getDoc(draftRef);
      if (draftSnap.exists()) {
        const draftData: Draft = {
          id: draftId,
          ...(draftSnap.data() as Omit<Draft, "id">),
        };
        setFormData({ ...draftData, tags: draftData.tags || [] });
        return true;
      }
      return false;
    } catch (err) {
      setError("Lỗi khi tải bản nháp");
      console.error("Error loading draft:", err);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const deleteDraft = async (draftId: string) => {
    try {
      setLoading(true);
      await deleteDoc(doc(db, "drafts", draftId));
      await loadDrafts();
      return true;
    } catch (err) {
      setError("Lỗi khi xóa bản nháp");
      console.error("Error deleting draft:", err);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
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
  };
};
