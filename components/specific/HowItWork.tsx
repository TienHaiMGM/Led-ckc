import React from "react";

const HowItWorks = () => {
  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-0">
        <div className="flex justify-center">
          <h2 className="mb-8 rounded-xl bg-red-700 p-2 text-center text-3xl font-bold text-white will-change-contents">
            &quot;Siêu Thị bảng hiệu – Nâng tầm thương hiệu của bạn!&quot;
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <div className="mb-4 flex items-center justify-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-500 text-2xl font-bold text-white">
                1
              </span>
            </div>
            <h3 className="mb-2 text-center text-xl font-semibold">
              {" "}
              SÁNG TẠO
            </h3>
            <p className="text-center text-gray-600">
              Thiết kế mang tính sáng tạo
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <div className="mb-4 flex items-center justify-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-2xl font-bold text-white">
                2
              </span>
            </div>
            <h3 className="mb-2 text-center text-xl font-semibold">
              KHÁC BIỆT
            </h3>
            <p className="text-center text-gray-600">Sản phẩm khác biệt</p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <div className="mb-4 flex items-center justify-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 text-2xl font-bold text-white">
                3
              </span>
            </div>
            <h3 className="mb-2 text-center text-xl font-semibold">
              {" "}
              CHUYÊN NGHIỆP
            </h3>
            <p className="text-center text-gray-600">Thi công chuyên nghiệp</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
