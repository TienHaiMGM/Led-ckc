import React from "react";

const HowItWorks = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">"Siêu Thị bảng hiệu – Nâng tầm thương hiệu của bạn!" 🚀</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-500 text-white rounded-full h-16 w-16 flex items-center justify-center text-2xl font-bold">
                1
              </span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center"> SÁNG TẠO</h3>
            <p className="text-gray-600 text-center">
            Thiết kế mang tính sáng tạo
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <span className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white rounded-full h-16 w-16 flex items-center justify-center text-2xl font-bold">
                2
              </span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">KHÁC BIỆT</h3>
            <p className="text-gray-600 text-center">
            Sản phẩm khác biệt
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <span className="bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 text-white rounded-full h-16 w-16 flex items-center justify-center text-2xl font-bold">
                3
              </span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center"> CHUYÊN NGHIỆP</h3>
            <p className="text-gray-600 text-center">
            Thi công chuyên nghiệp
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};


export default HowItWorks;