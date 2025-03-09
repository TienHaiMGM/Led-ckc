import Image from "next/image";
import Breadcrumb from "@/components/common/Breadcrumb";
import TabarLeft from "@/components/common/TabarLeft";
import ActionCallButtonLamBangHieu from "@/components/common/ActionCallButton";

const BangHieuGo = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Breadcrumb />
      <main className="container mx-auto flex-grow px-0 py-0 lg:py-6 xl:py-6">
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="animate-fadeSlide hidden sm:hidden md:hidden lg:block xl:ml-28 xl:block">
            <TabarLeft />
          </div>
          <article className="prose prose-custome p-2 lg:w-3/4">
            <div className="prose prose-custome animate-fadeIn lg:w-3/4">
              <h1 className="text-3xl font-bold text-blue-800 lg:text-4xl">
                Làm Bảng Hiệu Gỗ Giá Rẻ
              </h1>
              <p className="text-lg text-gray-600">
                Bảng hiệu gỗ từ lâu đã trở thành lựa chọn được ưa chuộng nhờ
                tính thẩm mỹ cao, độ bền và sự linh hoạt trong thiết kế. Với xu
                hướng đề cao sự tự nhiên, mộc mạc và gần gũi, bảng hiệu gỗ không
                chỉ được sử dụng trong các quán cà phê, nhà hàng, mà còn phổ
                biến ở các cửa hàng thời trang và doanh nghiệp sáng tạo.
              </p>
            </div>
            <section className="grid gap-4">
              <div className="animate-fadeScale flex justify-center">
                <figure>
                  <Image
                    src="https://res.cloudinary.com/dsyidnrat/image/upload/v1740547037/bang-hieu-go-moc-tra_aebchr.jpg"
                    alt="Bảng hiệu gỗ Spa"
                    width={800}
                    height={600}
                    className="rounded-lg shadow-lg"
                  />
                  <figcaption className="text-center italic">
                    Bảng hiệu gỗ Spa
                  </figcaption>
                </figure>
              </div>
              <nav className="order-2 rounded-lg bg-gray-100 p-2 shadow-lg">
                <h2 className="mb-4 text-xl font-semibold text-gray-700">
                  📚 Mục Lục
                </h2>
                <ul className="custom-marker list-inside list-decimal leading-snug text-gray-700">
                  <li>
                    <a
                      href="#bang-hieu-go-la-gi"
                      className="no-underline hover:underline"
                    >
                      Bảng Hiệu Gỗ Là Gì?
                    </a>
                  </li>
                  <li>
                    <a href="#loi-ich" className="no-underline hover:underline">
                      Vì Sao Bảng Hiệu Gỗ Ngày Càng Phổ Biến?
                    </a>
                    <ul className="ml-5 list-inside list-disc space-y-1 text-blue-500">
                      <li>
                        <a
                          href="#tinh-tham-my"
                          className="no-underline hover:underline"
                        >
                          Tính Thẩm Mỹ và Tạo Ấn Tượng
                        </a>
                      </li>
                      <li>
                        <a
                          href="#do-ben"
                          className="no-underline hover:underline"
                        >
                          Độ Bền và Khả Năng Chịu Lực
                        </a>
                      </li>
                      <li>
                        <a
                          href="#chi-phi-hop-ly"
                          className="no-underline hover:underline"
                        >
                          Chi Phí Hợp Lý
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      href="#cac-loai-go"
                      className="no-underline hover:underline"
                    >
                      Các Loại Bảng Hiệu Gỗ Phổ Biến
                    </a>
                    <ul className="ml-5 list-inside list-disc space-y-1 text-blue-500">
                      <li>
                        <a
                          href="#go-ngoai-troi"
                          className="no-underline hover:underline"
                        >
                          Bảng Hiệu Gỗ Ngoài Trời
                        </a>
                      </li>
                      <li>
                        <a
                          href="#go-vintage"
                          className="no-underline hover:underline"
                        >
                          Bảng Hiệu Gỗ Vintage
                        </a>
                      </li>
                      <li>
                        <a
                          href="#go-treo"
                          className="no-underline hover:underline"
                        >
                          Bảng Hiệu Gỗ Treo
                        </a>
                      </li>
                      <li>
                        <a
                          href="#go-doanh-nghiep"
                          className="no-underline hover:underline"
                        >
                          Biển Hiệu Gỗ Cho Doanh Nghiệp
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      href="#quy-trinh"
                      className="no-underline hover:underline"
                    >
                      Quy Trình Làm Bảng Hiệu Gỗ Giá Rẻ
                    </a>
                    <ul className="ml-5 list-inside list-disc space-y-1 text-blue-500">
                      <li>
                        <a
                          href="#lua-chon-go"
                          className="no-underline hover:underline"
                        >
                          Lựa Chọn Loại Gỗ Phù Hợp
                        </a>
                      </li>
                      <li>
                        <a
                          href="#thiet-ke"
                          className="no-underline hover:underline"
                        >
                          Thiết Kế Bảng Hiệu
                        </a>
                      </li>
                      <li>
                        <a
                          href="#gia-cong"
                          className="no-underline hover:underline"
                        >
                          Gia Công và Xử Lý Bề Mặt
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#bao-gia" className="no-underline hover:underline">
                      Giá Làm Bảng Hiệu Gỗ: Các Yếu Tố Ảnh Hưởng Và Bảng Giá
                      Tham Khảo
                    </a>
                    <ul className="ml-5 list-inside list-disc space-y-1 text-blue-500">
                      <li>
                        <a
                          href="#bang-gia-tham-khao"
                          className="no-underline hover:underline"
                        >
                          Bảng Giá Tham Khảo Cho Các Loại Bảng Hiệu Gỗ
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      href="#meo-keo-dai"
                      className="no-underline hover:underline"
                    >
                      Mẹo Kéo Dài Tuổi Thọ Cho Biển Hiệu Gỗ
                    </a>
                  </li>
                  <li>
                    <a
                      href="#ket-luan"
                      className="no-underline hover:underline"
                    >
                      Kết luận: Tại Sao Bảng Hiệu Inox Là Sự Lựa Chọn Hoàn
                      Hảo?{" "}
                    </a>
                  </li>
                </ul>
              </nav>
            </section>
            <section className="mb-0 grid gap-3 leading-normal lg:grid-cols-2 xl:lg:grid-cols-2">
              <figure>
                <Image
                  src="https://res.cloudinary.com/dsyidnrat/image/upload/v1740547041/bang-hieu-go-tra_akr2pu.jpg"
                  alt="Bảng hiệu Gỗ Trà"
                  width={600}
                  height={600}
                  className="rounded-lg object-cover shadow-lg"
                />
                <figcaption className="text-center italic">
                  Bảng hiệu Gỗ Trà
                </figcaption>
              </figure>
              <div className="space-y-1 leading-normal">
                <h2
                  id="bang-hieu-go-la-gi"
                  className="scroll-mt-16 text-2xl font-bold text-gray-800"
                >
                  Bảng Hiệu Gỗ Là Gì?
                </h2>
                <p className="text-gray-600">
                  Bảng hiệu gỗ là loại bảng hiệu được làm từ chất liệu gỗ tự
                  nhiên hoặc gỗ công nghiệp, được sử dụng để hiển thị thông tin
                  về tên doanh nghiệp, cửa hàng, thương hiệu hoặc thông điệp
                  quảng cáo. Với vẻ ngoài mộc mạc, tinh tế nhưng không kém phần
                  sang trọng, bảng hiệu gỗ mang đến phong cách gần gũi, thân
                  thiện và thu hút ánh nhìn.
                </p>
              </div>
            </section>
            <section className="mt-0 leading-normal">
              <h2
                id="loi-ich"
                className="scroll-mt-16 text-2xl font-semibold text-gray-700"
              >
                Vì Sao Bảng Hiệu Gỗ Ngày Càng Phổ Biến?
              </h2>
              <div className="space-y-6">
                <div>
                  <h3
                    id="tinh-tham-my"
                    className="scroll-mt-16 text-xl font-semibold text-gray-600"
                  >
                    Tính Thẩm Mỹ và Tạo Ấn Tượng
                  </h3>
                  <p>
                    Bảng hiệu gỗ mang lại cảm giác ấm cúng, thân thiện nhưng vẫn
                    thể hiện sự chuyên nghiệp. Mỗi tấm gỗ đều có vân gỗ riêng
                    biệt, tạo nên nét độc đáo cho từng bảng hiệu.
                  </p>
                </div>
                <div>
                  <h3
                    id="do-ben"
                    className="scroll-mt-16 text-xl font-semibold text-gray-600"
                  >
                    Độ Bền và Khả Năng Chịu Lực
                  </h3>
                  <p>
                    Với quy trình xử lý đúng cách, bảng hiệu gỗ ngoài trời có
                    thể chống chịu tốt với thời tiết khắc nghiệt, đảm bảo tuổi
                    thọ lâu dài.
                  </p>
                </div>
                <div>
                  <h3
                    id="chi-phi-hop-ly"
                    className="scroll-mt-16 text-xl font-semibold text-gray-600"
                  >
                    Chi Phí Hợp Lý
                  </h3>
                  <p>
                    So với các loại bảng hiệu khác, bảng hiệu gỗ giá rẻ nhưng
                    vẫn đảm bảo chất lượng và tính thẩm mỹ cao. Điều này đặc
                    biệt phù hợp với các doanh nghiệp nhỏ, quán cà phê hoặc cửa
                    hàng boutique.
                  </p>
                </div>
                <div className="flex justify-center">
                  <figure>
                    <Image
                      src="https://res.cloudinary.com/dsyidnrat/image/upload/v1740547038/bang-hieu-go-nuoc-ep_ezit1r.jpg"
                      alt="Bảng hiệu gỗ nước ép"
                      width={800}
                      height={600}
                      className="rounded-lg shadow-lg"
                    />
                    <figcaption className="text-center italic">
                      Bảng hiệu gỗ nước ép
                    </figcaption>
                  </figure>
                </div>
              </div>
            </section>
            <section className="leading-normal">
              <h2
                id="cac-loai-go"
                className="scroll-mt-16 text-2xl font-semibold text-gray-700"
              >
                Các Loại Bảng Hiệu Gỗ Phổ Biến
              </h2>
              <div className="space-y-6">
                <div>
                  <h3
                    id="go-ngoai-troi"
                    className="scroll-mt-16 text-xl font-semibold text-gray-600"
                  >
                    Bảng Hiệu Gỗ Ngoài Trời
                  </h3>

                  <p>
                    <strong>Đặc điểm nổi bật: </strong>
                  </p>
                  <ul>
                    <li>Khả năng chống chịu tốt với thời tiết.</li>
                    <li>Sử dụng gỗ tự nhiên hoặc gỗ công nghiệp cao cấp.</li>
                    <li>
                      Phù hợp cho quán cà phê sân vườn, nhà hàng ngoài trời.
                    </li>
                  </ul>
                  <div className="flex justify-center">
                    <figure>
                      <Image
                        src="https://res.cloudinary.com/dsyidnrat/image/upload/v1740547039/bang-hieu-go-sua-chua_jfl3o7.jpg"
                        alt="Bảng hiệu gỗ sữa chua"
                        width={800}
                        height={600}
                        className="rounded-lg shadow-lg"
                      />
                      <figcaption className="text-center italic">
                        Bảng hiệu gỗ sữa chua
                      </figcaption>
                    </figure>
                  </div>
                </div>
                <div>
                  <h3
                    id="go-vintage"
                    className="scroll-mt-16 text-xl font-semibold text-gray-600"
                  >
                    Bảng Hiệu Gỗ Vintage
                  </h3>
                  <p>
                    <strong>Đặc điểm nổi bật: </strong>
                  </p>
                  <ul>
                    <li>Thiết kế mang phong cách cổ điển, hoài niệm.</li>
                    <li>Thường sử dụng gỗ tự nhiên với màu sắc trầm.</li>
                    <li>
                      Lý tưởng cho các cửa hàng thời trang vintage hoặc quán cà
                      phê mang phong cách retro.
                    </li>
                  </ul>
                  <div className="flex justify-center">
                    <figure>
                      <Image
                        src="https://res.cloudinary.com/dsyidnrat/image/upload/v1740547036/bang-hieu-go-garden-coffee_wh7vhg.jpg"
                        alt="Bảng hiệu gỗ garen coffee"
                        width={800}
                        height={600}
                        className="rounded-lg shadow-lg"
                      />
                      <figcaption className="text-center italic">
                        Bảng hiệu gỗ garen coffee
                      </figcaption>
                    </figure>
                  </div>
                </div>
                <div>
                  <h3
                    id="go-treo"
                    className="scroll-mt-16 text-xl font-semibold text-gray-600"
                  >
                    Bảng Hiệu Gỗ Treo
                  </h3>
                  <p>
                    <strong>Đặc điểm nổi bật: </strong>
                  </p>
                  <ul>
                    <li>Thiết kế nhỏ gọn, dễ lắp đặt.</li>
                    <li>
                      Thường được treo ở trước cửa các cửa hàng nhỏ, quán cà
                      phê.
                    </li>
                    <li>Tạo cảm giác thân thiện, gần gũi cho khách hàng.</li>
                  </ul>
                  <div className="flex justify-center">
                    <figure>
                      <Image
                        src="https://res.cloudinary.com/dsyidnrat/image/upload/v1740547040/bang-hieu-go-thuong-hieu_o8f0jh.jpg"
                        alt="Bảng hiệu gỗ thương hiệu"
                        width={800}
                        height={600}
                        className="rounded-lg shadow-lg"
                      />
                      <figcaption className="text-center italic">
                        Bảng hiệu gỗ thương hiệu
                      </figcaption>
                    </figure>
                  </div>
                </div>
                <div>
                  <h3
                    id="go-doanh-nghiep"
                    className="scroll-mt-16 text-xl font-semibold text-gray-600"
                  >
                    Biển Hiệu Gỗ Cho Doanh Nghiệp
                  </h3>
                  <p>
                    <strong>Đặc điểm nổi bật: </strong>
                  </p>
                  <ul>
                    <li>Thiết kế đơn giản nhưng tinh tế..</li>
                    <li>
                      Sử dụng trong văn phòng, phòng họp hoặc tại sảnh công ty.
                    </li>
                    <li>
                      Thể hiện sự chuyên nghiệp, đẳng cấp cho thương hiệu.
                    </li>
                  </ul>
                  <div className="flex justify-center">
                    <figure>
                      <Image
                        src="https://res.cloudinary.com/dsyidnrat/image/upload/v1740547035/bang-hieu-go-farm_qsjfpi.jpg"
                        alt="Bảng hiệu gỗ farm"
                        width={800}
                        height={600}
                        className="rounded-lg shadow-lg"
                      />
                      <figcaption className="text-center italic">
                        Bảng hiệu gỗ farm
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </section>
            <section className="leading-normal">
              <div>
                <h2
                  id="quy-trinh"
                  className="scroll-mt-16 text-2xl font-semibold text-gray-700"
                >
                  Quy Trình Làm Bảng Hiệu Gỗ Giá Rẻ
                </h2>
                <h3 id="lua-chon-go" className="scroll-mt-16">
                  Lựa Chọn Loại Gỗ Phù Hợp
                </h3>
                <p>
                  Việc lựa chọn loại gỗ phù hợp là yếu tố quan trọng quyết định
                  độ bền và tính thẩm mỹ của bảng hiệu gỗ. Một số loại gỗ phổ
                  biến:
                </p>
                <ul>
                  <li>
                    <strong>Gỗ thông: </strong> Giá rẻ, dễ gia công.
                  </li>
                  <li>
                    <strong>Gỗ xoan đào: </strong> Màu sắc đẹp, vân gỗ tinh tế.
                  </li>
                  <li>
                    <strong>Gỗ sồi: </strong>Cứng cáp, chịu lực tốt, phù hợp cho
                    bảng hiệu gỗ ngoài trời.
                  </li>
                </ul>
                <h3 id="thiet-ke" className="scroll-mt-16">
                  Thiết Kế Bảng Hiệu
                </h3>
                <p>Những lưu ý khi thiết kế: </p>
                <ul>
                  <li>Kích thước phù hợp với không gian lắp đặt.</li>
                  <li>Phối màu hài hòa với phong cách thương hiệu.</li>
                  <li>
                    Chọn kiểu chữ dễ đọc, phù hợp với nội dung truyền tải.
                  </li>
                </ul>
                <h3 id="gia-cong" className="scroll-mt-16">
                  Gia Công và Xử Lý Bề Mặt
                </h3>

                <ul>
                  <li>
                    Gia công khắc chữ: Sử dụng máy khắc laser để đảm bảo độ
                    chính xác cao.
                  </li>
                  <li>
                    Sơn phủ bảo vệ: Giúp bảng hiệu gỗ chống thấm nước và hạn chế
                    tác động từ môi trường.
                  </li>
                  <li>
                    Kiểm tra chất lượng: Đảm bảo bảng hiệu hoàn thiện đạt tiêu
                    chuẩn trước khi giao cho khách hàng.
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <figure>
                  <Image
                    src="https://res.cloudinary.com/dsyidnrat/image/upload/v1740547035/bang-hieu-go-coffee_ecd25t.jpg"
                    alt="Bảng hiệu gỗ coffee"
                    width={800}
                    height={600}
                    className="rounded-lg shadow-lg"
                  />
                  <figcaption className="text-center italic">
                    Bảng hiệu gỗ coffee
                  </figcaption>
                </figure>
              </div>
            </section>
            <section className="leading-normal">
              <h2
                id="bao-gia"
                className="scroll-mt-16 text-2xl font-semibold text-gray-700"
              >
                Giá Làm Bảng Hiệu Gỗ: Các Yếu Tố Ảnh Hưởng Và Bảng Giá Tham Khảo
              </h2>
              <p>
                Giá làm bảng hiệu gỗ phụ thuộc vào nhiều yếu tố như loại gỗ,
                kích thước, thiết kế, phương pháp gia công và các tính năng bổ
                sung như sơn phủ, chống thấm hay đèn LED. Dưới đây là phân tích
                chi tiết giúp bạn hình dung chi phí và lựa chọn phù hợp với ngân
                sách của mình.
              </p>
              <h3 id="bang-gia-tham-khao" className="scroll-mt-16">
                Bảng Giá Tham Khảo Cho Các Loại Bảng Hiệu Gỗ
              </h3>
              <table className="w-full table-auto border border-gray-300 text-gray-700">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      Loại Bảng Hiệu Gỗ{" "}
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      Giá Tham Khảo (VNĐ){" "}
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      Ghi Chú
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Bảng hiệu gỗ vintage (90x60 cm){" "}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      2.000.000 - 4.000.000{" "}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Khắc laser + sơn chống thấm
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Bảng hiệu gỗ ngoài trời (120x60 cm){" "}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      5.000.000 - 8.000.000{" "}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Xử lý chống nắng, nước, mối mọt
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Biển hiệu gỗ cao cấp (150x80 cm){" "}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      8.000.000 - 15.000.000{" "}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Gỗ sồi, khắc 3D, tích hợp LED
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Bảng hiệu gỗ treo nhỏ (30x20 cm){" "}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      500.000 - 1.000.000{" "}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Phù hợp cho quán cà phê nhỏ
                    </td>
                  </tr>
                </tbody>
              </table>
              <p>
                📢 Lưu ý: Giá trên chỉ mang tính tham khảo, chi phí thực tế phụ
                thuộc vào yêu cầu cụ thể của dự án.
              </p>
              <div className="flex justify-center">
                <figure>
                  <Image
                    src="https://res.cloudinary.com/dsyidnrat/image/upload/v1740547035/bang-hieu-go-com_zux98j.jpg"
                    alt="Bảng hiệu gỗ quán cơm"
                    width={800}
                    height={600}
                    className="rounded-lg shadow-lg"
                  />
                  <figcaption className="text-center italic">
                    Bảng hiệu gỗ quán cơm
                  </figcaption>
                </figure>
              </div>
            </section>
            <section className="leading-normal">
              <h2
                id="meo-keo-dai"
                className="scroll-mt-16 text-2xl font-semibold text-gray-700"
              >
                Mẹo Kéo Dài Tuổi Thọ Cho Biển Hiệu Gỗ
              </h2>
              <p>
                Để biển hiệu gỗ có thể sử dụng lâu dài, cần chú ý những điểm
                sau:
              </p>
              <ul>
                <li>Chọn loại gỗ phù hợp với môi trường sử dụng</li>
                <li>Xử lý gỗ kỹ lưỡng trước khi làm biển hiệu</li>
                <li>Sử dụng phụ kiện kim loại không gỉ (inox, đồng)</li>
                <li>Tạo khe thoát nước cho biển hiệu kích thước lớn</li>
                <li>Tránh đặt ở vị trí có nước đọng lâu</li>
              </ul>
              <div className="flex justify-center">
                <figure>
                  <Image
                    src="https://res.cloudinary.com/dsyidnrat/image/upload/v1740547034/bang-hieu-go-caphe_yla9c1.jpg"
                    alt="Bảng hiệu gỗ cafe phố cổ"
                    width={800}
                    height={600}
                    className="rounded-lg shadow-lg"
                  />
                  <figcaption className="text-center italic">
                    Bảng hiệu gỗ cafe phố cổ
                  </figcaption>
                </figure>
              </div>
            </section>
            <section className="leading-normal">
              <h2
                id="ket-luan"
                className="scroll-mt-16 text-2xl font-semibold text-gray-700"
              >
                Tại sao bảng hiệu gỗ là giải pháp lý tưởng?
              </h2>
              <p className="mb-4 text-lg">
                Bảng hiệu gỗ không chỉ là công cụ quảng bá thương hiệu mà còn là
                tác phẩm nghệ thuật mang đến vẻ đẹp tự nhiên, ấm áp cho không
                gian kinh doanh. Bằng việc lựa chọn đúng loại gỗ, áp dụng quy
                trình sản xuất chuyên nghiệp và các chiến lược tiết kiệm chi phí
                hợp lý, bạn hoàn toàn có thể sở hữu được một bảng hiệu gỗ giá rẻ
                nhưng vẫn đảm bảo chất lượng và tính thẩm mỹ cao.
              </p>
              <div className="flex justify-center">
                <figure>
                  <Image
                    src="https://res.cloudinary.com/dsyidnrat/image/upload/v1740547032/bang-hieu-go-an-vat_xkgdmn.jpg"
                    alt="Bảng hiệu gỗ tiệm ăn vặt"
                    width={800}
                    height={600}
                    className="rounded-lg shadow-lg"
                  />
                  <figcaption className="text-center italic">
                    Bảng hiệu gỗ tiệm ăn vặt
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

export default BangHieuGo;
