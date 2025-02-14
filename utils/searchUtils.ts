// Function to remove Vietnamese diacritics
export function removeDiacritics(str: string): string {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

// Function to get search history from localStorage
export function getSearchHistory(): string[] {
  if (typeof window === "undefined") return [];
  const history = localStorage.getItem("searchHistory");
  return history ? JSON.parse(history) : [];
}

// Function to save search query to history
export function saveToSearchHistory(query: string): void {
  if (typeof window === "undefined") return;
  const history = getSearchHistory();
  const newHistory = [query, ...history.filter((item) => item !== query)].slice(
    0,
    5,
  );
  localStorage.setItem("searchHistory", JSON.stringify(newHistory));
}

// Function to clear search history
export function clearSearchHistory(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem("searchHistory");
}

// Function to search products with diacritic-insensitive matching
export function searchProducts(products: any[], query: string) {
  const normalizedQuery = removeDiacritics(query);

  return products.filter((product) => {
    const normalizedTitle = removeDiacritics(product.title);
    const normalizedDescription = removeDiacritics(product.description);

    return (
      normalizedTitle.includes(normalizedQuery) ||
      normalizedDescription.includes(normalizedQuery)
    );
  });
}
