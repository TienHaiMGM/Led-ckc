import { Product } from "../types/product";

// Format date for display
export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat("vi-VN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
};

// Validate product data
export const validateProduct = (product: Partial<Product>): boolean => {
  return !!(
    product.title &&
    product.image &&
    product.category &&
    product.description
  );
};

// Generate product slug
export const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[đĐ]/g, "d")
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, "-");
};

// Sort products by date
export const sortProductsByDate = (
  products: Product[],
  ascending: boolean = false,
): Product[] => {
  return [...products].sort((a, b) => {
    const comparison =
      new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    return ascending ? comparison : -comparison;
  });
};

// Group products by year
export const groupProductsByYear = (
  products: Product[],
): Record<string, Product[]> => {
  return products.reduce((acc: Record<string, Product[]>, product) => {
    const year = new Date(product.createdAt).getFullYear().toString();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(product);
    return acc;
  }, {});
};

// Get categories with counts
export const getCategoriesWithCounts = (
  products: Product[],
): Record<string, number> => {
  return products.reduce((acc: Record<string, number>, product) => {
    acc[product.category] = (acc[product.category] || 0) + 1;
    return acc;
  }, {});
};

// Filter products by date range
export const filterProductsByDateRange = (
  products: Product[],
  startDate: Date,
  endDate: Date,
): Product[] => {
  return products.filter((product) => {
    const productDate = new Date(product.createdAt);
    return productDate >= startDate && productDate <= endDate;
  });
};

// Get related products (same category, excluding current product)
export const getRelatedProducts = (
  currentProduct: Product,
  allProducts: Product[],
  limit: number = 3,
): Product[] => {
  return allProducts
    .filter(
      (product) =>
        product.category === currentProduct.category &&
        product.id !== currentProduct.id,
    )
    .slice(0, limit);
};
