//Xóa nhiều khoảng trắng thành 1 khoảng trắng
export const normalizeSpaces = (str: string) => {
  return str.replace(/\s+/g, " ").trim();
};
