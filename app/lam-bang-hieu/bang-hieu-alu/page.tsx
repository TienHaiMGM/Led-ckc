"use client";

import Image from "next/image";
import Breadcrumb from "@/components/common/Breadcrumb";
import TabarLeft from "@/components/common/TabarLeft";
import ActionCallButtonLamBangHieu from "@/components/common/ActionCallButton";
import { motion } from "framer-motion";

const BangHieuAlu = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Breadcrumb />
      <main className="container mx-auto flex-grow px-0 py-0 lg:py-6 xl:py-6">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* {TabarLeft} */}
          <div className="hidden sm:hidden md:hidden lg:block xl:ml-28 xl:block">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
              className="hidden sm:hidden md:hidden lg:block xl:block"
            >
              <TabarLeft />
            </motion.div>
          </div>

          <article className="animation animation-fadeIn prose prose-custome p-2 lg:w-3/4">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
              className="animation animation-fadeIn prose prose-custome lg:w-3/4"
            >
              <div className="rounded-lg bg-gradient-to-r from-blue-50 to-white p-6">
                <h1 className="text-3xl font-bold text-blue-800 lg:text-4xl">
                  Bảng Hiệu Alu - Giải Pháp Quảng Cáo Hiệu Quả, Bền Đẹp Và Tiết
                  Kiệm Chi Phí
                </h1>
                <p className="text-lg text-gray-600">
                  <strong>Bảng hiệu alu</strong> đang trở thành xu hướng hàng
                  đầu trong ngành quảng cáo và thiết kế thương hiệu. Với ưu điểm
                  về độ bền, tính thẩm mỹ cao và khả năng chống chịu thời tiết,
                  bảng hiệu alu mang lại diện mạo chuyên nghiệp cho mọi doanh
                  nghiệp
                </p>
              </div>
            </motion.div>
            <section className="grid gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.5, delay: 0.3 },
                }}
                className="flex justify-center"
              >
                <figure>
                  <Image
                    src="https://res.cloudinary.com/dsyidnrat/image/upload/v1740456298/bang-hieu-alu-brand-junlie1_kowuml.jpg"
                    alt="Bảng hiệu Alu chữ nổi"
                    width={800}
                    height={600}
                    className="rounded-lg shadow-lg"
                  />
                  <figcaption className="text-center italic">
                    Bảng hiệu Alu chữ nổi
                  </figcaption>
                </figure>
              </motion.div>
              <nav className="order-2 rounded-lg bg-gray-100 p-2 shadow-lg">
                <h2 className="mb-4 text-xl font-semibold text-gray-700">
                  📚 Mục Lục
                </h2>
                <ul className="custom-marker list-inside list-decimal leading-snug text-gray-700">
                  <li>
                    <a
                      href="#bang-hieu-alu-la-gi"
                      className="no-underline hover:underline"
                    >
                      Bảng Hiệu Alu Là Gì?
                    </a>
                  </li>
                  <li>
                    <a href="#loi-ich" className="no-underline hover:underline">
                      Lợi Ích Khi Sử Dụng Bảng Hiệu Alu
                    </a>
                    <ul className="ml-5 list-inside list-disc space-y-1 text-blue-500">
                      <li>
                        <a
                          href="#tham-my-cao"
                          className="no-underline hover:underline"
                        >
                          Tính Thẩm Mỹ Cao, Sang Trọng
                        </a>
                      </li>
                      <li>
                        <a
                          href="#do-ben-vuot-troi"
                          className="no-underline hover:underline"
                        >
                          Độ Bền Vượt Trội, Chống Chịu Thời Tiết
                        </a>
                      </li>
                      <li>
                        <a
                          href="#chi-phi-hop-ly"
                          className="no-underline hover:underline"
                        >
                          Chi Phí Hợp Lý, Tiết Kiệm
                        </a>
                      </li>
                      <li>
                        <a
                          href="#de-thi-cong"
                          className="no-underline hover:underline"
                        >
                          Dễ Dàng Thi Công & Bảo Trì
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      href="#cac-loai"
                      className="no-underline hover:underline"
                    >
                      Các Loại Bảng Hiệu Alu Phổ Biến Hiện Nay
                    </a>
                    <ul className="ml-5 list-inside list-disc space-y-1 text-blue-500">
                      <li>
                        <a
                          href="#chu-noi"
                          className="no-underline hover:underline"
                        >
                          Bảng Hiệu Alu Chữ Nổi
                        </a>
                      </li>
                      <li>
                        <a
                          href="#mat-dan-decal"
                          className="no-underline hover:underline"
                        >
                          Bảng Hiệu Alu Mặt Dán Decal
                        </a>
                      </li>
                      <li>
                        <a
                          href="#hop-den"
                          className="no-underline hover:underline"
                        >
                          Bảng Hiệu Alu Hộp Đèn
                        </a>
                      </li>
                      <li>
                        <a
                          href="#alu-guong"
                          className="no-underline hover:underline"
                        >
                          Bảng Hiệu Alu Gương
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#muc-gia" className="no-underline hover:underline">
                      Mức Giá Làm Bảng Hiệu Alu Hiện Nay
                    </a>
                  </li>
                  <li>
                    <a
                      href="#bao-quan"
                      className="no-underline hover:underline"
                    >
                      Cách Bảo Quản Và Bảo Trì Bảng Hiệu Alu
                    </a>
                    <ul className="ml-5 list-inside list-disc space-y-1 text-blue-500">
                      <li>
                        <a
                          href="#ve-sinh"
                          className="no-underline hover:underline"
                        >
                          Vệ Sinh Định Kỳ
                        </a>
                      </li>
                      <li>
                        <a
                          href="#kiem-tra-dien"
                          className="no-underline hover:underline"
                        >
                          Kiểm Tra Hệ Thống Điện
                        </a>
                      </li>
                      <li>
                        <a
                          href="#xu-ly-van-de"
                          className="no-underline hover:underline"
                        >
                          Xử Lý Các Vấn Đề Nhỏ Kịp Thời
                        </a>
                      </li>
                      <li>
                        <a
                          href="#bao-ve-vat-ly"
                          className="no-underline hover:underline"
                        >
                          Bảo Vệ Khỏi Tác Động Vật Lý
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      href="#ket-luan"
                      className="no-underline hover:underline"
                    >
                      Tại Sao Bảng Hiệu Alu Là Sự Lựa Chọn Hoàn Hảo?
                    </a>
                  </li>
                </ul>
              </nav>
            </section>

            <div className="grid gap-3 lg:grid-cols-2">
              <div>
                <Image
                  src="https://res.cloudinary.com/dsyidnrat/image/upload/v1740456299/bang-hieu-alu-shop-tho-kids_lm2k1x.jpg"
                  alt="Bảng hiệu Alu chuyên nghiệp"
                  width={800}
                  height={800}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-1 leading-normal">
                <h2
                  id="bang-hieu-alu-la-gi"
                  className="scroll-mt-16 text-2xl font-bold text-gray-800"
                >
                  Bảng Hiệu Alu Là Gì?
                </h2>
                <p className="text-gray-600">
                  <strong>Bảng hiệu alu</strong> là loại biển quảng cáo được làm
                  từ tấm nhôm composite (ACP), gồm hai lớp nhôm mỏng bao bọc lớp
                  lõi polyethylene ở giữa.
                </p>
                <ul className="list-inside list-disc space-y-2">
                  <li>
                    <strong>Trọng lượng nhẹ:</strong> Chỉ bằng 1/3 trọng lượng
                    của tấm nhôm nguyên chất cùng kích thước.
                  </li>
                  <li>
                    <strong>Độ cứng cao:</strong> Không bị cong vênh, biến dạng
                    dưới tác động của môi trường.
                  </li>
                  <li>
                    <strong>Tuổi thọ dài:</strong> Có thể sử dụng từ 5-10 năm
                    trong điều kiện thời tiết Việt Nam.
                  </li>
                  <li>
                    <strong>Khả năng chống cháy tốt:</strong> Nhiều dòng alu có
                    khả năng chống cháy, phù hợp với các tiêu chuẩn an toàn.
                  </li>
                  <li>
                    <strong>Đa dạng màu sắc:</strong> Có hàng trăm màu sắc khác
                    nhau, từ màu đơn sắc đến vân gỗ, vân đá.
                  </li>
                </ul>
              </div>
            </div>
            <section className="w-full leading-normal">
              <h2
                id="loi-ich"
                className="scroll-mt-16 text-2xl font-semibold text-gray-700"
              >
                Lợi Ích Khi Sử Dụng Bảng Hiệu Alu
              </h2>
              <div className="space-y-6">
                <div>
                  <h3
                    id="tham-my-cao"
                    className="scroll-mt-16 text-xl font-semibold text-gray-600"
                  >
                    Tính Thẩm Mỹ Cao, Sang Trọng
                  </h3>
                  <ul>
                    <li>
                      Bề mặt bảng hiệu Alu có độ bóng mịn, màu sắc đa dạng, dễ
                      dàng phối hợp theo nhận diện thương hiệu.
                    </li>
                    <li>
                      Mang lại vẻ ngoài hiện đại, chuyên nghiệp, giúp thu hút sự
                      chú ý của khách hàng.
                    </li>
                    <li>
                      Dễ dàng in ấn, dán decal hoặc cắt chữ nổi để tạo điểm nhấn
                      độc đáo.
                    </li>
                  </ul>
                </div>
                <div>
                  <h3
                    id="do-ben-vuot-troi"
                    className="scroll-mt-16 text-xl font-semibold text-gray-600"
                  >
                    Độ Bền Vượt Trội, Chống Chịu Thời Tiết
                  </h3>
                  <ul>
                    <li>
                      Chất liệu Alu không bị gỉ sét, chống oxy hóa, chịu được
                      nắng mưa và tác động từ môi trường.
                    </li>
                    <li>
                      Bảng hiệu Alu giữ được màu sắc và hình dáng lâu dài, giúp
                      tiết kiệm chi phí bảo trì.
                    </li>
                    <li>
                      Độ bền trung bình từ 10-15 năm, phù hợp cho cả lắp đặt
                      trong nhà và ngoài trời.
                    </li>
                  </ul>
                </div>
                <div>
                  <h3
                    id="chi-phi-hop-ly"
                    className="scroll-mt-16 text-xl font-semibold text-gray-600"
                  >
                    Chi Phí Hợp Lý, Tiết Kiệm
                  </h3>
                  <ul>
                    <li>
                      So với các vật liệu cao cấp khác, bảng hiệu Alu có chi phí
                      thấp hơn nhưng vẫn đảm bảo chất lượng và tính thẩm mỹ.
                    </li>
                    <li>
                      Dễ dàng thi công, lắp đặt nhanh chóng, giảm thiểu chi phí
                      nhân công và thời gian thi công.
                    </li>
                  </ul>
                </div>
                <div>
                  <h3
                    id="de-thi-cong"
                    className="scroll-mt-16 text-xl font-semibold text-gray-600"
                  >
                    Dễ Dàng Thi Công & Bảo Trì
                  </h3>
                  <ul>
                    <li>
                      Bảng hiệu Alu có trọng lượng nhẹ, giúp vận chuyển và lắp
                      đặt dễ dàng.
                    </li>
                    <li>
                      Việc vệ sinh, bảo dưỡng đơn giản chỉ với khăn lau và dung
                      dịch tẩy rửa nhẹ.
                    </li>
                    <li>
                      Có thể tháo dỡ và lắp đặt lại mà không làm ảnh hưởng đến
                      chất lượng bảng hiệu.
                    </li>
                  </ul>
                </div>
                <div className="flex justify-center">
                  <figure>
                    <Image
                      src="https://res.cloudinary.com/dsyidnrat/image/upload/v1740456300/bang-hieu-alu-spa-trang-tracy_trquht.jpg"
                      alt="Bảng hiệu Alu chuyên nghiệp"
                      width={800}
                      height={600}
                      className="rounded-lg shadow-lg"
                    />
                    <figcaption className="text-center italic">
                      Bảng hiệu alu đẹp cho spa
                    </figcaption>
                  </figure>
                </div>
              </div>
            </section>
            <section className="leading-normal">
              <h2
                id="cac-loai"
                className="scroll-mt-16 text-2xl font-semibold text-gray-700"
              >
                Các Loại Bảng Hiệu Alu Phổ Biến Hiện Nay
              </h2>
              <div className="space-y-6">
                <div>
                  <h3
                    id="chu-noi"
                    className="scroll-mt-16 text-xl font-semibold text-gray-600"
                  >
                    Bảng Hiệu Alu Chữ Nổi là sự kết hợp giữa tấm alu làm nền và
                    các chữ nổi được gắn lên. Chữ nổi có thể làm từ nhiều vật
                    liệu như mica, inox, đồng, hoặc chính là alu.
                  </h3>
                  <ul>
                    <li className="mb-2">
                      <strong>Ưu điểm:</strong> Nổi bật với hiệu ứng 3D, tạo
                      chiều sâu và thu hút ánh nhìn.
                    </li>
                    <li>
                      <strong>Ứng dụng:</strong> Cửa hàng thời trang, showroom,
                      spa, thẩm mỹ viện.
                    </li>
                  </ul>
                </div>
                <div className="flex justify-center">
                  <figure>
                    <Image
                      src="https://res.cloudinary.com/dsyidnrat/image/upload/v1740456298/bang-hieu-alu-beauty_cto0gk.jpg"
                      alt="Bảng hiệu alu sang trọng cho tiệm nail"
                      width={800}
                      height={600}
                      className="rounded-lg shadow-lg"
                    />
                    <figcaption className="text-center italic">
                      Bảng hiệu alu sang trọng cho tiệm nail
                    </figcaption>
                  </figure>
                </div>
                <div>
                  <h3
                    id="mat-dan-decal"
                    className="scroll-mt-16 text-xl font-semibold text-gray-600"
                  >
                    Bảng hiệu alu mặt dán decal là loại bảng hiệu đơn giản nhất,
                    sử dụng tấm alu làm nền và dán decal in kỹ thuật số lên bề
                    mặt.
                  </h3>
                  <ul>
                    <li className="mb-2">
                      <strong>Ưu điểm:</strong> Chi phí thấp, thi công nhanh
                      chóng.
                    </li>
                    <li>
                      <strong>Ứng dụng:</strong> Doanh nghiệp cần thay đổi nội
                      dung thường xuyên.
                    </li>
                  </ul>
                </div>
                <div className="flex justify-center">
                  <figure>
                    <Image
                      src="https://res.cloudinary.com/dsyidnrat/image/upload/v1740456298/bang-hieu-alu-brand-ngoc-duyen_nd28fn.jpg"
                      alt=" Bảng hiệu alu đẹp cho Boutique"
                      width={800}
                      height={600}
                      className="rounded-lg shadow-lg"
                    />
                    <figcaption className="text-center italic">
                      Bảng hiệu alu đẹp cho Boutique
                    </figcaption>
                  </figure>
                </div>
                <div>
                  <h3
                    id="hop-den"
                    className="scroll-mt-16 text-xl font-semibold text-gray-600"
                  >
                    Bảng hiệu alu hộp đèn. Kết hợp tấm alu với đèn LED bên trong
                    tạo nên bảng hiệu phát sáng vào ban đêm.
                  </h3>
                  <ul>
                    <li className="mb-2">
                      <strong>Ưu điểm:</strong> Hiệu ứng ánh sáng động, nổi bật
                      cả ngày lẫn đêm.
                    </li>
                    <li>
                      <strong>Ứng dụng:</strong> Nhà hàng, quán bar, cửa hàng
                      tiện lợi 24h.
                    </li>
                  </ul>
                </div>
                <div className="flex justify-center">
                  <figure>
                    <Image
                      src="https://res.cloudinary.com/dsyidnrat/image/upload/v1740456301/bang-hieu-alu-cafe-xanh_lwoerf.jpg"
                      alt="Bảng hiệu alu cho tiệm cafe"
                      width={800}
                      height={600}
                      className="rounded-lg shadow-lg"
                    />
                    <figcaption className="text-center italic">
                      Bảng hiệu alu cho tiệm cafe
                    </figcaption>
                  </figure>
                </div>
                <div>
                  <h3
                    id="alu-guong"
                    className="scroll-mt-16 text-xl font-semibold text-gray-600"
                  >
                    Bảng hiệu alu gương là sự kết hợp giữa tấm nhôm alu và lớp
                    phủ gương cao cấp, tạo nên bề mặt sáng bóng và có khả năng
                    phản chiếu như gương thật.
                  </h3>
                  <ul>
                    <li className="mb-2">
                      <strong>Ưu điểm:</strong> Giúp không gian lung linh, nổi
                      bật và thu hút ánh nhìn.
                    </li>
                    <li>
                      <strong>Ứng dụng:</strong> Showroom cao cấp, cửa hàng
                      trang sức, spa, khách sạn.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center">
                <figure>
                  <Image
                    src="https://res.cloudinary.com/dsyidnrat/image/upload/v1740456300/bang-hieu-alu-food-chan-ga-chien-mam_ipdjmo.jpg"
                    alt="Bảng hiệu alu cho tiệm đồ ăn"
                    width={800}
                    height={600}
                    className="rounded-lg shadow-lg"
                  />
                  <figcaption className="text-center italic">
                    Bảng hiệu alu cho tiệm đồ ăn
                  </figcaption>
                </figure>
              </div>
            </section>
            <section className="leading-normal">
              <h2
                id="muc-gia"
                className="scroll-mt-16 text-2xl font-semibold text-gray-700"
              >
                Mức Giá Làm Bảng Hiệu Alu Hiện Nay
              </h2>
              <p className="mb-4">
                Chi phí <strong>làm bảng hiệu alu giá rẻ</strong> phụ thuộc vào
                nhiều yếu tố:
              </p>
              <ul className="list-inside list-disc space-y-2">
                <li>
                  <strong>Kích thước:</strong> Giá tính theo m² và tăng theo
                  kích thước.
                </li>
                <li>
                  <strong>Độ dày:</strong> Alu có nhiều độ dày từ 0.6mm đến 4mm,
                  giá tăng theo độ dày.
                </li>
                <li>
                  <strong>Thương hiệu:</strong> Alu nhập khẩu (Alcorest,
                  Alpolic, Reynobond) đắt hơn alu nội địa.
                </li>
                <li>
                  <strong>Phương pháp thi công:</strong> Bảng hiệu đơn giản rẻ
                  hơn bảng hiệu có chữ nổi, đèn LED.
                </li>
                <li>
                  <strong>Vị trí lắp đặt:</strong> Lắp đặt ở cao hoặc khó tiếp
                  cận sẽ tăng chi phí.
                </li>
              </ul>

              <h3 className="mb-4 text-xl font-semibold text-gray-600">
                Tham khảo bảng giá trung bình năm 2024:
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full table-auto border border-gray-300 text-gray-700">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left">
                        Loại Bảng Hiệu
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-left">
                        Giá (VNĐ/m²)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Bảng hiệu alu mặt dán decal
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        800.000 - 1.200.000
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">
                        Bảng hiệu alu chữ nổi mica
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        1.300.000 - 1.800.000
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Bảng hiệu alu chữ nổi inox
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        1.800.000 - 2.500.000
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">
                        Bảng hiệu alu hộp đèn LED
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        1.500.000 - 2.200.000
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="flex justify-center">
                <figure>
                  <Image
                    src="https://res.cloudinary.com/dsyidnrat/image/upload/v1740456301/bang-hieu-alu-tham-my_l3qovp.jpg"
                    alt="Bảng hiệu alu sang trọng cho tiệm thẩm mỹ"
                    width={800}
                    height={600}
                    className="rounded-lg shadow-lg"
                  />
                  <figcaption className="text-center italic">
                    Bảng hiệu alu sang trọng cho tiệm thẩm mỹ
                  </figcaption>
                </figure>
              </div>
            </section>
            <section className="leading-normal">
              <h2
                id="bao-quan"
                className="scroll-mt-16 text-2xl font-semibold text-gray-700"
              >
                Cách Bảo Quản Và Bảo Trì Bảng Hiệu Alu
              </h2>

              <div className="space-y-2">
                <div>
                  <h3
                    id="ve-sinh"
                    className="mb-2 scroll-mt-16 text-xl font-semibold text-gray-600"
                  >
                    1. Vệ Sinh Định Kỳ
                  </h3>
                  <p>
                    Sử dụng nước sạch và xà phòng trung tính để lau chùi bề mặt.
                    Tránh dùng chất tẩy rửa có tính axit hoặc kiềm mạnh. Vệ sinh
                    ít nhất 3 tháng/lần, tần suất cao hơn ở khu vực nhiều bụi
                    bẩn
                  </p>
                </div>

                <div>
                  <h3
                    id="kiem-tra-dien"
                    className="mb-2 scroll-mt-16 text-xl font-semibold text-gray-600"
                  >
                    2. Kiểm Tra Hệ Thống Điện
                  </h3>
                  <p>
                    Đối với bảng hiệu có đèn LED, cần kiểm tra dây điện, nguồn,
                    bộ điều khiển định kỳ để đảm bảo hoạt động ổn định và an
                    toàn.
                  </p>
                </div>

                <div>
                  <h3
                    id="xu-ly-van-de"
                    className="mb-2 scroll-mt-16 text-xl font-semibold text-gray-600"
                  >
                    3. Xử Lý Các Vấn Đề Nhỏ Kịp Thời
                  </h3>
                  <p>
                    Khi phát hiện các vấn đề như ốc vít lỏng lẻo, mép dán bong
                    tróc hoặc đèn LED hỏng, cần xử lý ngay để tránh hư hỏng lan
                    rộng.
                  </p>
                </div>

                <div>
                  <h3
                    id="bao-ve-vat-ly"
                    className="mb-2 scroll-mt-16 text-xl font-semibold text-gray-600"
                  >
                    4. Bảo Vệ Khỏi Tác Động Vật Lý
                  </h3>
                  <p>
                    Tránh để bảng hiệu tiếp xúc với các vật cứng, sắc nhọn có
                    thể gây trầy xước hoặc móp méo bề mặt.
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <figure>
                  <Image
                    src="https://res.cloudinary.com/dsyidnrat/image/upload/v1740456299/bang-hieu-alu-brand-lens-optic_znq8sq.jpg"
                    alt="Bảng hiệu alu giá rẻ tại Tp.HCM"
                    width={800}
                    height={600}
                    className="rounded-lg shadow-lg"
                  />
                  <figcaption className="text-center italic">
                    Bảng hiệu alu giá rẻ tại Tp.HCM
                  </figcaption>
                </figure>
              </div>
            </section>
            <section className="leading-normal">
              <h2
                id="ket-luan"
                className="scroll-mt-16 text-2xl font-semibold text-gray-700"
              >
                Tại Sao Bảng Hiệu Alu Là Sự Lựa Chọn Hoàn Hảo?
              </h2>
              <p className="mb-4 text-lg">
                <strong className="text-gray-600">Bảng hiệu alu</strong> không
                chỉ mang lại giá trị thẩm mỹ cao mà còn đảm bảo độ bền vượt
                trội, tiết kiệm chi phí và thời gian thi công. Đây là giải pháp
                lý tưởng cho mọi doanh nghiệp từ nhỏ đến lớn, giúp nâng tầm
                thương hiệu và tạo ấn tượng mạnh mẽ với khách hàng.
              </p>
              <div className="flex justify-center">
                <figure>
                  <Image
                    src="https://res.cloudinary.com/dsyidnrat/image/upload/v1740456298/bang-hieu-alu-brand-junlie_yvbp3w.jpg"
                    alt="Bảng hiệu alu giá rẻ, đẹp Tân Phú"
                    width={800}
                    height={600}
                    className="rounded-lg shadow-lg"
                  />
                  <figcaption className="text-center italic">
                    Bảng hiệu alu giá rẻ, đẹp Tân Phú
                  </figcaption>
                </figure>
              </div>
              {/* ACTIONCALL */}
              <ActionCallButtonLamBangHieu />
            </section>
          </article>
        </div>
      </main>
    </div>
  );
};

export default BangHieuAlu;
