import Link from "next/link";
import { FaAward, FaClock, FaShieldAlt, FaTools } from "react-icons/fa";

{
  /* Benefits Section */
}
<section className="py-16" aria-label="Lợi ích khi chọn dịch vụ">
  <div className="container mx-auto px-4">
    <h2 className="mb-12 text-center text-3xl font-bold">
      Lợi Ích Khi Chọn Chúng Tôi
    </h2>
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {product.benefits.map((benefit, index) => (
        <div
          key={index}
          className="group rounded-xl bg-white p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="mb-4 text-3xl text-blue-600" aria-hidden="true">
            {benefit.icon === "FaTools" && <FaTools />}
            {benefit.icon === "FaClock" && <FaClock />}
            {benefit.icon === "FaShieldAlt" && <FaShieldAlt />}
            {benefit.icon === "FaAward" && <FaAward />}
          </div>
          <h3 className="mb-3 text-xl font-semibold">{benefit.title}</h3>
          <p className="text-gray-600">{benefit.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>;

{
  /* CTA Section */
}
<section
  className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 text-white"
  aria-label="Liên hệ"
>
  <div className="container mx-auto px-4 text-center">
    <h2 className="mb-8 text-3xl font-bold">Bạn Quan Tâm Đến Sản Phẩm?</h2>
    <p className="mb-8 text-lg">
      Liên hệ ngay với chúng tôi để được tư vấn chi tiết và báo giá tốt nhất
    </p>
    <div className="flex flex-wrap justify-center gap-4">
      <Link
        href="/pages/contact"
        className="rounded-full bg-white px-8 py-3 font-semibold text-blue-600 transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Chuyển đến trang liên hệ"
      >
        Liên Hệ Ngay
      </Link>
      <a
        href="tel:+84123456789"
        className="rounded-full border-2 border-white px-8 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Gọi điện thoại cho chúng tôi"
      >
        Gọi Điện Thoại
      </a>
    </div>
  </div>
</section>;
