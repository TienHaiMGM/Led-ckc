import { useState, useEffect, useCallback } from "react";
import { db } from "../firebaseConfig";
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
} from "../../../types/product-management";

const mapFirestoreDoc = <T extends { id?: string }>(
  doc: QueryDocumentSnapshot<DocumentData>,
): T =>
  ({
    id: doc.id,
    ...doc.data(),
  }) as T;

export const useProductEditorNew = (
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

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const q = query(collection(db, "newItems"), orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
      const productsData = querySnapshot.docs.map((doc) =>
        mapFirestoreDoc<ProductContent>(doc),
      );
      setProducts(productsData);
    } catch (err) {
      setError("Lỗi khi tải dữ liệu");
      console.error("Error fetching newItems:", err);
    } finally {
      setLoading(false);
    }
  };

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
      };
      await addDoc(collection(db, "newItems"), newProduct);
      setFormData(initialContent);
      setIsAdding(false);
      fetchProducts();
    } catch (err) {
      setError("Lỗi khi thêm sản phẩm");
      console.error("Error adding newItems:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProduct?.id) return;

    try {
      setLoading(true);
      const productRef = doc(db, "newItems", editingProduct.id);
      const updateData: Partial<ProductContent> = {
        ...formData,
        updatedAt: new Date().toISOString(),
        tags: formData.tags || [],
      };
      await updateDoc(productRef, updateData);
      setEditingProduct(null);
      setFormData(initialContent);
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
      await deleteDoc(doc(db, "newItems", id));
      fetchProducts();
    } catch (err) {
      setError("Lỗi khi xóa sản phẩm");
      console.error("Error deleting product:", err);
    } finally {
      setLoading(false);
    }
  };

  const startEdit = (products: ProductContent) => {
    setEditingProduct(products);
    setFormData({
      ...products,
      tags: products.tags || [],
    });
  };

  const cancelEdit = () => {
    setEditingProduct(null);
    setFormData(initialContent);
  };

  // Draft functionality
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

      await addDoc(collection(db, "drafts"), draftData);
      setError(null);
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
      const draftsData = querySnapshot.docs.map((doc) =>
        mapFirestoreDoc<Draft>(doc),
      );
      setDrafts(draftsData);
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
        setFormData({
          ...draftData,
          tags: draftData.tags || [],
        });
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

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    setFormData(initialContent);
  }, [initialContent]);

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
