# Siêu Thị Bảng Hiệu - News & Content Management System

Hệ thống quản lý tin tức và nội dung cho website Siêu Thị Bảng Hiệu.

## Tính Năng

- 📝 Quản lý Tin Tức

  - Tạo, chỉnh sửa, xóa bài viết
  - Trình soạn thảo văn bản phong phú
  - Quản lý hình ảnh
  - Tối ưu hóa SEO
  - Quy trình nháp và xuất bản

- 🔒 Xác Thực & Phân Quyền

  - Đăng nhập admin an toàn
  - Bảo vệ các trang quản trị
  - Kiểm soát truy cập dựa trên vai trò

- 🎨 Giao Diện Hiện Đại
  - Thiết kế responsive
  - Tùy chỉnh giao diện với Tailwind CSS
  - Hỗ trợ chế độ tối
  - Hiệu ứng loading và animation

## Công Nghệ Sử Dụng

- **Framework:** Next.js 13 (App Router)
- **Ngôn Ngữ:** TypeScript
- **Styling:** Tailwind CSS
- **Database:** Firebase Firestore
- **Authentication:** Firebase Auth
- **Storage:** Firebase Storage
- **State Management:** React Context
- **Form Handling:** React Hook Form
- **Validation:** Zod
- **Linting:** ESLint
- **Formatting:** Prettier

## Cài Đặt

### Yêu Cầu

- Node.js 16.x trở lên
- npm 7.x trở lên
- Firebase project

### Các Bước Cài Đặt

1. Clone repository:
   \`\`\`bash
   git clone https://github.com/yourusername/sieu-thi-bang-hieu.git
   cd sieu-thi-bang-hieu
   \`\`\`

2. Cài đặt dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Thiết lập biến môi trường:
   \`\`\`bash
   cp .env.local.example .env.local
   \`\`\`
   Sau đó điền thông tin cấu hình Firebase và các biến môi trường khác.

4. Khởi chạy development server:
   \`\`\`bash
   npm run dev
   \`\`\`

### Cấu Hình Firebase

1. Tạo project Firebase mới
2. Bật tính năng Authentication (Email/Password)
3. Tạo Firestore database
4. Bật Storage
5. Thêm cấu hình Firebase vào .env.local

## Cấu Trúc Project

\`\`\`
├── app/ # Next.js 13 app directory
│ ├── admin/ # Trang quản trị
│ ├── tin-tuc/ # Trang tin tức
│ └── layout.tsx # Layout gốc
├── components/ # React components
│ ├── auth/ # Components xác thực
│ ├── common/ # Components dùng chung
│ ├── editor/ # Components soạn thảo
│ └── providers/ # Context providers
├── lib/ # Thư viện và cấu hình
├── public/ # Tài nguyên tĩnh
├── styles/ # Styles toàn cục
└── types/ # TypeScript type definitions
\`\`\`

## Scripts Có Sẵn

- \`npm run dev\`: Khởi chạy development server
- \`npm run build\`: Build cho production
- \`npm start\`: Khởi chạy production server
- \`npm run lint\`: Chạy ESLint
- \`npm run type-check\`: Kiểm tra TypeScript
- \`npm run format\`: Format code với Prettier

## Đóng Góp

1. Fork repository
2. Tạo branch tính năng (\`git checkout -b feature/TinhNangMoi\`)
3. Commit thay đổi (\`git commit -m 'Thêm tính năng mới'\`)
4. Push lên branch (\`git push origin feature/TinhNangMoi\`)
5. Tạo Pull Request

## License

Project này được cấp phép theo giấy phép MIT - xem file [LICENSE](LICENSE) để biết thêm chi tiết.

## Liên Hệ

Siêu Thị Bảng Hiệu - [@sieuthibanghieu](https://facebook.com/sieuthibanghieu)

Website: [https://sieuthibanghieu.vn](https://sieuthibanghieu.vn)
