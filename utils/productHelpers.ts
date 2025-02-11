import { Product, ProductsByCategory } from "../types/product";
import { products } from "../data/products";

// Utility function to group products by category
export const getProductsByCategory = (): ProductsByCategory => {
  return products.reduce((acc: ProductsByCategory, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});
};

// Utility function to get products by specific category
export const getProductsBySpecificCategory = (category: string): Product[] => {
  return products.filter((product) => product.category === category);
};

// Utility function to get a single product by ID
export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id);
};

// Utility function to get latest products
export const getLatestProducts = (limit: number = 6): Product[] => {
  return [...products]
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
    .slice(0, limit);
};

// Utility function to search products
export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(
    (product) =>
      product.title.toLowerCase().includes(lowercaseQuery) ||
      product.description.toLowerCase().includes(lowercaseQuery),
  );
};
