// Hàm chuyển đổi chuỗi có dấu thành không dấu
export const removeVietnameseTones = (str: string) => {
  return str
    .normalize("NFD") // Tách dấu khỏi ký tự
    .replace(/[\u0300-\u036f]/g, "") // Xóa dấu
    .replace(/đ/g, "d") // Chuyển đ -> d
    .replace(/Đ/g, "D") // Chuyển Đ -> D
    .toLowerCase(); // Chuyển về chữ thường
};
