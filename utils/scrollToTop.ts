// 🆙 Xử lý scroll lên đầu trang
export const scrollToTop = (top: number = 0) => {
  window.scrollTo({
    top: top,
    behavior: "smooth",
  });
};
