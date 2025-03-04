import { Metadata } from "next";
import Image from "next/image";
import Breadcrumb from "@/components/common/Breadcrumb";
import TabarLeft from "@/components/common/TabarLeft";
import ActionCallButtonLamBangHieu from "@/components/common/ActionCallButton";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Bảng Hiệu Alu - Giải Pháp Quảng Cáo Chuyên Nghiệp",
    description:
      "Khám phá giải pháp bảng hiệu chuyên nghiệp với chất liệu Alu cao cấp, bền đẹp và tiết kiệm chi phí cho doanh nghiệp của bạn.",
    keywords: ["bảng hiệu alu", "quảng cáo", "thiết kế bảng hiệu"],
    openGraph: {
      title: "Bảng Hiệu Alu - Giải Pháp Quảng Cáo Chuyên Nghiệp",
      description:
        "Chuyên thiết kế và thi công các loại bảng hiệu Alu quảng cáo chất lượng cao.",
      url: "https://sieuthibanghieu.vn/lam-bang-hieu/bang-hieu-alu",
      siteName: "Siêu Thị Bảng Hiệu",
      images: [
        {
          url: "https://sieuthibanghieu.vn/images/sieuthibanghieu.jpg",
          width: 1200,
          height: 630,
          alt: "Bảng Hiệu Alu - Siêu Thị Bảng Hiệu",
        },
      ],
      locale: "vi_VN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Bảng Hiệu Alu - Giải Pháp Quảng Cáo Chuyên Nghiệp",
      description:
        "Khám phá giải pháp bảng hiệu chuyên nghiệp với chất liệu Alu.",
      images: ["https://sieuthibanghieu.vn/images/sieuthibanghieu.jpg"],
    },
    alternates: {
      canonical: "https://sieuthibanghieu.vn/lam-bang-hieu/bang-hieu-alu",
    },
  };
}
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://sieuthibanghieu.vn/lam-bang-hieu/bang-hieu-alu",
      url: "https://sieuthibanghieu.vn/lam-bang-hieu/bang-hieu-alu",
      name: "Bảng Hiệu Alu",
      description:
        "Khám phá giải pháp bảng hiệu chuyên nghiệp với chất liệu Alu cao cấp.",
      isPartOf: {
        "@type": "WebSite",
        "@id": "https://sieuthibanghieu.vn/#website",
        url: "https://sieuthibanghieu.vn",
        name: "Siêu Thị Bảng Hiệu",
        description:
          "Chuyên thiết kế và thi công bảng hiệu quảng cáo chuyên nghiệp",
        publisher: {
          "@id": "https://sieuthibanghieu.vn/#organization",
        },
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://sieuthibanghieu.vn/lam-bang-hieu/bang-hieu-alu#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "WebPage",
            "@id": "https://sieuthibanghieu.vn/",
            url: "https://sieuthibanghieu.vn/",
            name: "Trang chủ",
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "WebPage",
            "@id": "https://sieuthibanghieu.vn/lam-bang-hieu/bang-hieu-alu",
            url: "https://sieuthibanghieu.vn/lam-bang-hieu/bang-hieu-alu",
            name: "Bảng Hiệu Alu",
          },
        },
      ],
    },
  ],
};
const BangHieuMica = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Breadcrumb />
      <main className="container mx-auto flex-grow px-0 py-0 lg:py-6 xl:py-6">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* {TabarLeft} */}
          <div className="hidden sm:hidden md:hidden lg:block xl:ml-28 xl:block">
            <TabarLeft />
          </div>
          <article className="prose prose-custome lg:w-3/4">
            <div className="rounded-lg bg-gradient-to-r from-blue-50 to-white p-6">
              <h1 className="text-3xl font-bold text-blue-800 lg:text-4xl">
                Bảng Hiệu Mica - Giải Pháp Lý Tưởng Cho Thương Hiệu Của Bạn
              </h1>
              <p className="text-lg text-gray-600">
                Bạn đang tìm kiếm một giải pháp biển hiệu thu hút khách hàng
                ngay từ cái nhìn đầu tiên? Đừng lo, bạn đã đến đúng nơi rồi đấy!
                Hãy cùng tôi tìm hiểu vì sao bảng hiệu mica lại phổ biến đến
                vậy, và làm thế nào để bạn có thể chọn được mẫu biển hiệu hoàn
                hảo cho cửa hàng hoặc doanh nghiệp của mình nhé!
              </p>
            </div>
            <section className="grid gap-4">
              <nav className="order-2 rounded-lg bg-gray-100 p-2 shadow-lg">
                <h2 className="mb-4 text-xl font-semibold text-gray-700">
                  📚 Mục Lục
                </h2>
                <ul className="custom-marker list-inside list-decimal leading-snug text-gray-700">
                  <li>
                    <a
                      href="#bang-hieu-mica-la-gi"
                      className="no-underline hover:underline"
                    >
                      Bảng Hiệu Mica Là Gì?
                    </a>
                  </li>
                  <li>
                    <a href="#loi-ich" className="no-underline hover:underline">
                      Lợi Ích Khi Sử Dụng Bảng Hiệu Mica
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
                      Các Loại Bảng Hiệu Mica Phổ Biến Hiện Nay
                    </a>
                    <ul className="ml-5 list-inside list-disc space-y-1 text-blue-500">
                      <li>
                        <a
                          href="#chu-noi"
                          className="no-underline hover:underline"
                        >
                          Bảng Hiệu Mica Chữ Nổi
                        </a>
                      </li>
                      <li>
                        <a
                          href="#mat-dan-decal"
                          className="no-underline hover:underline"
                        >
                          Hộp Đèn Mica
                        </a>
                      </li>
                      <li>
                        <a
                          href="#hop-den"
                          className="no-underline hover:underline"
                        >
                          Biển Công Ty Mica
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      href="#bang-gia"
                      className="no-underline hover:underline"
                    >
                      Bảng Giá Tham Khảo Cho Bảng Hiệu Mica
                    </a>
                    <ul className="ml-5 list-inside list-disc space-y-1 text-blue-500">
                      <li>
                        <a
                          href="#yeu-to"
                          className="no-underline hover:underline"
                        >
                          Những Yếu Tố Ảnh Hưởng Đến Giá
                        </a>
                      </li>
                      <li>
                        <a
                          href="#muc-gia"
                          className="no-underline hover:underline"
                        >
                          Mức Giá Tham Khảo
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      href="#lam-nhu-the-nao"
                      className="no-underline hover:underline"
                    >
                      Làm bảng hiệu mica như thế nào?
                    </a>
                    <ul className="ml-5 list-inside list-disc space-y-1 text-blue-500">
                      <li>
                        <a
                          href="#y-tuong"
                          className="no-underline hover:underline"
                        >
                          Tìm ý tưởng và thiết kế
                        </a>
                      </li>
                      <li>
                        <a
                          href="#tu-van"
                          className="no-underline hover:underline"
                        >
                          Tư vấn chuyên nghiệp
                        </a>
                      </li>
                      <li>
                        <a
                          href="#san-xuat"
                          className="no-underline hover:underline"
                        >
                          Sản xuất
                        </a>
                      </li>
                      <li>
                        <a
                          href="#lap-dat"
                          className="no-underline hover:underline"
                        >
                          Lắp đặt và bàn giao
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      href="#cham-soc"
                      className="no-underline hover:underline"
                    >
                      Chăm sóc bảng hiệu mica sao cho đúng?
                    </a>
                    <ul className="ml-5 list-inside list-disc space-y-1 text-blue-500">
                      <li>
                        <a
                          href="#ve-sinh"
                          className="no-underline hover:underline"
                        >
                          Vệ sinh thường xuyên
                        </a>
                      </li>
                      <li>
                        <a
                          href="#kiem-tra"
                          className="no-underline hover:underline"
                        >
                          Kiểm tra hệ thống đèn
                        </a>
                      </li>
                      <li>
                        <a
                          href="#xy-ly-vet-xuoc"
                          className="no-underline hover:underline"
                        >
                          Xử lý vết xước
                        </a>
                      </li>
                    </ul>
                    <li>
                      <a
                        href="#ket-luan"
                        className="no-underline hover:underline"
                      >
                        Kết luật: Đầu tư vào biển hiệu là đầu tư cho thương hiệu
                      </a>
                    </li>
                  </li>
                </ul>
              </nav>
              <div className="flex justify-center">
                <figure>
                  <Image
                    src="https://res.cloudinary.com/dsyidnrat/image/upload/v1740493033/bang-hieu-mica-cafe-sicbeo_aa3n0k.jpg"
                    alt="Bảng hiệu mica cafe"
                    width={800}
                    height={600}
                    className="rounded-lg shadow-lg"
                  />
                  <figcaption className="text-center italic">
                    Bảng hiệu mica cafe
                  </figcaption>
                </figure>
              </div>
            </section>

            <section className="grid gap-3 lg:grid-cols-2">
              <div>
                <Image
                  src="https://res.cloudinary.com/dsyidnrat/image/upload/v1740493035/logo-mica_oppcwy.jpg"
                  alt="Logo-mica"
                  width={800}
                  height={800}
                  className="h-96 rounded-lg object-fill shadow-lg"
                />
              </div>
              <div className="space-y-1 leading-normal">
                <h2
                  id="bang-hieu-mica-la-gi"
                  className="text-2xl font-bold text-gray-800"
                >
                  Bảng hiệu mica là gì vậy?
                </h2>
                <p>
                  Nói đơn giản, bảng hiệu mica được làm từ nhựa acrylic (thường
                  được gọi là Mica hoặc Plexiglass) - một loại vật liệu trong
                  suốt, bền chắc và dễ gia công. Điều tuyệt vời là bạn có thể
                  cắt, khắc, uốn cong, in ấn lên mica theo đủ kiểu dáng và thiết
                  kế bạn muốn.
                </p>
                <p className="mt-2">Một bảng hiệu mica thường có:</p>
                <ul className="mt-4 list-inside list-disc space-y-2">
                  <li>Phần nền bằng tấm mica (dày từ 2mm đến 10mm)</li>
                  <li>Phần chữ hoặc logo</li>
                  <li>Hệ thống đèn (nếu bạn muốn nổi bật vào ban đêm)</li>
                  <li>Khung viền (tùy theo thiết kế)</li>
                </ul>
              </div>
            </section>
            <section className="w-full leading-normal">
              <h2 id="loi-ich" className="text-2xl font-semibold text-gray-700">
                Lợi Ích Khi Sử Dụng Bảng Hiệu Mica Trong Kinh Doanh
              </h2>
              <div className="space-y-6">
                <div>
                  <h3
                    id="tham-my-cao"
                    className="text-xl font-semibold text-gray-600"
                  >
                    Tính Thẩm Mỹ Cao, Sang Trọng
                  </h3>
                  <p>
                    Mica có khả năng tạo ra các thiết kế với màu sắc rực rỡ,
                    bóng bẩy và sang trọng. Đặc biệt khi kết hợp với đèn LED,
                    bảng hiệu chữ nổi mica tạo hiệu ứng ánh sáng tuyệt đẹp khiến
                    khách hàng không thể rời mắt!
                  </p>
                  <p>
                    Tôi đã từng làm việc với một tiệm bánh nhỏ ở quận 3, chỉ sau
                    khi thay biển hiệu mica phát sáng, lượng khách vào buổi tối
                    tăng lên gần 40% con số không hề nhỏ phải không?
                  </p>
                </div>
                <div>
                  <h3
                    id="do-ben-vuot-troi"
                    className="text-xl font-semibold text-gray-600"
                  >
                    Độ Bền Vượt Trội, Chống Chịu Thời Tiết
                  </h3>
                  <p>
                    Bạn sẽ không còn phải lo lắng về việc bảng hiệu bị phai màu
                    hay xuống cấp. Biển mica có khả năng chống thấm nước, chịu
                    nhiệt tốt và ít bị ảnh hưởng bởi điều kiện thời tiết. Điều
                    này giúp bảng hiệu luôn giữ được vẻ ngoài mới mẻ sau thời
                    gian dài sử dụng.
                  </p>
                  <p>
                    Một tấm biển mica chất lượng tốt có thể duy trì vẻ đẹp ban
                    đầu từ 5-7 năm mà bạn chẳng cần phải lo lắng nhiều về bảo
                    trì.
                  </p>
                </div>
                <div>
                  <h3
                    id="chi-phi-hop-ly"
                    className="text-xl font-semibold text-gray-600"
                  >
                    Giá cả hợp lý
                  </h3>
                  <p>
                    So với các vật liệu như đồng, inox hay nhôm, bảng hiệu mica
                    có giá thành "dễ thở" hơn nhiều. Đặc biệt với các cửa hàng
                    nhỏ hoặc doanh nghiệp mới thành lập, biển công ty mica là
                    giải pháp tiết kiệm mà vẫn đảm bảo vẻ chuyên nghiệp.
                  </p>
                </div>
                <div>
                  <h3
                    id="de-thi-cong"
                    className="text-xl font-semibold text-gray-600"
                  >
                    Dễ Dàng Tùy Chỉnh Theo Yêu Cầu
                  </h3>
                  <p>
                    Một trong những ưu điểm lớn nhất của bảng hiệu mica chính là
                    khả năng tùy chỉnh cao. Từ màu sắc, kích thước cho đến kiểu
                    dáng và hiệu ứng ánh sáng, tất cả đều có thể được điều chỉnh
                    để phù hợp với phong cách riêng của doanh nghiệp.
                  </p>
                </div>
                <div className="flex justify-center">
                  <figure>
                    <Image
                      src="https://res.cloudinary.com/dsyidnrat/image/upload/v1740493033/chu-noi-mica_nzmpbd.jpg"
                      alt="Chữ nổi mica"
                      width={800}
                      height={600}
                      className="rounded-lg shadow-lg"
                    />
                    <figcaption className="text-center italic">
                      Chữ nổi mica
                    </figcaption>
                  </figure>
                </div>
              </div>
            </section>
            <section className="leading-normal">
              <h2
                id="cac-loai"
                className="text-2xl font-semibold text-gray-700"
              >
                Các loại bảng hiệu mica phổ biến
              </h2>
              <div className="space-y-6">
                <div>
                  <h3
                    id="mica-chu-noi"
                    className="text-xl font-semibold text-gray-600"
                  >
                    Bảng Hiệu Mica Chữ Nổi
                  </h3>
                  <p>
                    Loại bảng hiệu này sử dụng chữ nổi mica để tạo chiều sâu và
                    hiệu ứng 3D cho nội dung quảng cáo. Thông thường, phần chữ
                    nổi sẽ được kết hợp với đèn LED để tỏa sáng vào ban đêm,
                    giúp thương hiệu của bạn trở nên nổi bật hơn bao giờ hết.
                  </p>
                  <ul>
                    <li className="mb-2">
                      Làm nổi bật tên thương hiệu và thông điệp.
                    </li>
                    <li>Thu hút khách hàng ngay từ cái nhìn đầu tiên.</li>
                    <li>
                      Giá bảng hiệu chữ nổi mica lại rất phải chăng, phù hợp cho
                      cả cửa hàng nhỏ lẫn doanh nghiệp lớn.
                    </li>
                  </ul>
                </div>
                <div className="flex justify-center">
                  <figure>
                    <Image
                      src="https://res.cloudinary.com/dsyidnrat/image/upload/v1740493033/bang-hieu-mica-fruit_w5yzgm.jpg"
                      alt="Bảng hiệu mica Fruits"
                      width={800}
                      height={600}
                      className="rounded-lg shadow-lg"
                    />
                    <figcaption className="text-center italic">
                      Bảng hiệu mica Fruits
                    </figcaption>
                  </figure>
                </div>
                <div>
                  <h3
                    id="hop-den-mica"
                    className="text-xl font-semibold text-gray-600"
                  >
                    Hộp Đèn Mica
                  </h3>
                  <p>
                    Nếu bạn muốn bảng hiệu của mình rực rỡ vào ban đêm, hộp đèn
                    mica là lựa chọn không thể bỏ qua. Với thiết kế có hệ thống
                    đèn LED bên trong, hộp đèn mica giúp toàn bộ nội dung bảng
                    hiệu phát sáng một cách ấn tượng.
                  </p>
                  <ul>
                    <li className="mb-2">
                      Hiệu ứng ánh sáng đồng đều, dễ dàng thu hút khách hàng từ
                      xa.
                    </li>
                    <li>Tiết kiệm điện nhờ sử dụng đèn LED chất lượng cao.</li>
                    <li>Bền bỉ, dễ bảo trì và có tuổi thọ lâu dài.</li>
                  </ul>
                </div>
                <div className="flex justify-center">
                  <figure>
                    <Image
                      src="https://res.cloudinary.com/dsyidnrat/image/upload/v1740493034/hop-mica-nuoc-mia_dy5veu.jpg"
                      alt="Bảng hiệu mica nước mía"
                      width={800}
                      height={600}
                      className="rounded-lg shadow-lg"
                    />
                    <figcaption className="text-center italic">
                      Bảng hiệu mica nước mía
                    </figcaption>
                  </figure>
                </div>
                <div>
                  <h3
                    id="bien-con-ty"
                    className="text-xl font-semibold text-gray-600"
                  >
                    Biển Công Ty Mica
                  </h3>
                  <p>
                    Biển công ty mica là lựa chọn lý tưởng cho văn phòng, sảnh
                    lễ tân hoặc phòng họp. Với thiết kế gọn gàng, tinh tế, loại
                    biển này giúp không gian làm việc trở nên chuyên nghiệp và
                    sang trọng hơn.
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <figure>
                  <Image
                    src="https://res.cloudinary.com/dsyidnrat/image/upload/v1740493034/hop-den-mica-quan-nuoc_exqgcl.jpg"
                    alt="Bảng hiệu alu cho tiệm nước"
                    width={800}
                    height={600}
                    className="rounded-lg shadow-lg"
                  />
                  <figcaption className="text-center italic">
                    Bảng hiệu alu cho tiệm nước
                  </figcaption>
                </figure>
              </div>
            </section>
            <section className="leading-normal">
              <h2
                id="bang-gia"
                className="text-2xl font-semibold text-gray-700"
              >
                Bảng Giá Tham Khảo Cho Bảng Hiệu Mica
              </h2>
              <h3 id="yeu-to" className="mb-4">
                Những Yếu Tố Ảnh Hưởng Đến Giá
              </h3>
              <p>
                Giá bảng hiệu chữ nổi mica không cố định, mà sẽ dao động tùy
                thuộc vào:
              </p>
              <ul className="list-inside list-disc space-y-2">
                <li>
                  <strong>Kích thước bảng hiệu:</strong> Bảng hiệu lớn hơn sẽ
                  tốn nhiều vật liệu và công sức hơn.
                </li>
                <li>
                  <strong>Chất liệu mica:</strong> Mica Đài Loan có giá cao hơn
                  nhưng chất lượng tốt hơn mica Trung Quốc.
                </li>
                <li>
                  <strong>Đèn LED:</strong> Loại đèn, màu sắc và số lượng đèn
                  cũng ảnh hưởng đến chi phí.
                </li>
                <li>
                  <strong>Thiết kế phức tạp:</strong> Các thiết kế cần hiệu ứng
                  đặc biệt hoặc nhiều lớp chữ nổi sẽ có giá cao hơn.
                </li>
              </ul>

              <h3
                id="muc-gia"
                className="mb-4 text-xl font-semibold text-gray-600"
              >
                Mức Giá Tham Khảo
              </h3>
              <ul className="list-inside list-disc space-y-2">
                <li>
                  <strong>Bảng hiệu mica chữ nổi không đèn: </strong> Khoảng
                  800.000 – 1.200.000 VNĐ/m².
                </li>
                <li>
                  <strong>Bảng hiệu mica chữ nổi có đèn LED:</strong> Từ
                  1.500.000 – 2.500.000 VNĐ/m².
                </li>
                <li>
                  <strong>Hộp đèn mica:</strong> Giao động từ 2.000.000 –
                  3.500.000 VNĐ/m², tùy thuộc vào kích thước và thiết kế.
                </li>
              </ul>
              <div className="flex justify-center">
                <figure>
                  <Image
                    src="https://res.cloudinary.com/dsyidnrat/image/upload/v1740493034/log-cong-ty-mica_kmq1yr.jpg"
                    alt="Logo công ty mica"
                    width={800}
                    height={600}
                    className="rounded-lg shadow-lg"
                  />
                  <figcaption className="text-center italic">
                    Logo công ty mica
                  </figcaption>
                </figure>
              </div>
            </section>
            <section className="leading-normal">
              <h2
                id="lam-nhu-the-nao"
                className="text-2xl font-semibold text-gray-700"
              >
                Làm bảng hiệu mica như thế nào?
              </h2>
              <h3 id="y-tuong">Tìm ý tưởng và thiết kế</h3>
              <p>
                Đừng vội nhấc điện thoại gọi cho đơn vị làm biển hiệu ngay! Hãy:
              </p>
              <ul>
                <li>Quan sát xung quanh, tìm mẫu biển bạn thích</li>
                <li>Xem các mẫu trên mạng</li>
                <li>Phác thảo ý tưởng</li>
                <li>Cân nhắc không gian lắp đặt</li>
              </ul>
              <h3 id="tu-van">Tư vấn chuyên nghiệp</h3>
              <p>Một đơn vị tốt sẽ:</p>
              <ul>
                <li>Khảo sát không gian thực tế</li>
                <li>Gợi ý kích thước và màu sắc phù hợp</li>
                <li>Thiết kế mẫu 3D để bạn hình dung</li>
                <li>Tư vấn về hệ thống đèn (nếu cần)</li>
              </ul>
              <h3 id="san-xuat">Sản xuất</h3>
              <p>Quy trình sản xuất bao gồm:</p>
              <ul>
                <li>Cắt mica theo thiết kế</li>
                <li>Tạo hình chữ, logo</li>
                <li>In ấn, sơn màu</li>
                <li>Lắp ráp các thành phần</li>
                <li>Lắp đặt hệ thống đèn (nếu có)</li>
              </ul>
              <h3 id="lap-dat">Lắp đặt và bàn giao</h3>
              <p>Đơn vị chuyên nghiệp sẽ:</p>
              <ul>
                <li>Chuẩn bị vị trí lắp đặt</li>
                <li>Lắp đặt cẩn thận, chắc chắn</li>
                <li>Kiểm tra hoạt động (đặc biệt là đèn)</li>
                <li>Hướng dẫn bạn cách bảo quản</li>
              </ul>
              <div className="flex justify-center">
                <figure>
                  <Image
                    src="https://res.cloudinary.com/dsyidnrat/image/upload/v1740493035/hop-mica-tra-sua_lbtzh4.jpg"
                    alt="Hộp đèn mica trà sữa"
                    width={800}
                    height={600}
                    className="rounded-lg shadow-lg"
                  />
                  <figcaption className="text-center italic">
                    Hộp đèn mica trà sữa
                  </figcaption>
                </figure>
              </div>
            </section>
            <section className="leading-normal">
              <h2
                id="cham-soc"
                className="text-2xl font-semibold text-gray-700"
              >
                Chăm sóc bảng hiệu mica sao cho đúng?
              </h2>
              <p>
                Bạn đã đầu tư tiền bạc và công sức vào tấm biển đẹp, đừng để nó
                nhanh xuống cấp nhé! Một số bí quyết tôi thường chia sẻ với
                khách hàng:
              </p>
              <h3 id="ve-sinh">Vệ sinh thường xuyên</h3>
              <ul>
                <li>Dùng khăn mềm và nước ấm với chút xà phòng nhẹ</li>
                <li>Tuyệt đối tránh cồn, acetone hoặc các dung môi mạnh</li>
                <li>Không dùng vật cứng cạo bề mặt kẻo xước</li>
              </ul>
              <h3 id="kiem-tra">Kiểm tra hệ thống đèn</h3>
              <ul>
                <li>3-6 tháng kiểm tra dây điện và nguồn</li>
                <li>Thay bóng đèn ngay khi chúng bắt đầu mờ</li>
                <li>Lau bụi ở khu vực đèn để tránh quá nóng</li>
              </ul>
              <h3 id="xu-ly-vet-xuoc">Xử lý vết xước</h3>

              <ul>
                <li>Vết xước nhỏ: dùng kem đánh bóng chuyên dụng</li>
                <li>Vết xước lớn: gọi người chuyên nghiệp hỗ trợ</li>
              </ul>

              <div className="flex justify-center">
                <figure>
                  <Image
                    src="https://res.cloudinary.com/dsyidnrat/image/upload/v1740493034/hop-den-mica-xe-may_pnwb0o.jpg"
                    alt="Hộp đèn mica tiệm xe máy"
                    width={800}
                    height={600}
                    className="rounded-lg shadow-lg"
                  />
                  <figcaption className="text-center italic">
                    Hộp đèn mica tiệm xe máy
                  </figcaption>
                </figure>
              </div>
            </section>
            <section className="leading-normal">
              <h2
                id="ket-luan"
                className="text-2xl font-semibold text-gray-700"
              >
                Đầu tư vào biển hiệu là đầu tư cho thương hiệu
              </h2>
              <p className="mb-4 text-lg">
                <p>
                  Bảng hiệu mica và hộp đèn mica đang ngày càng được ưa chuộng
                  nhờ tính thẩm mỹ, độ bền cao và chi phí hợp lý. Từ biển công
                  ty mica sang trọng, chữ nổi mica nổi bật cho đến hộp đèn mica
                  phát sáng ấn tượng, tất cả đều mang đến giải pháp quảng cáo
                  hiệu quả cho mọi doanh nghiệp.
                </p>
                <p>
                  Hãy cân nhắc kỹ lưỡng về thiết kế, chất liệu và giá bảng hiệu
                  chữ nổi mica để lựa chọn giải pháp phù hợp nhất. Một bảng hiệu
                  đẹp và chất lượng không chỉ giúp thương hiệu của bạn nổi bật
                  mà còn tạo dựng hình ảnh uy tín và chuyên nghiệp trong mắt
                  khách hàng.
                </p>
              </p>
              <div className="flex justify-center">
                <figure>
                  <Image
                    src="https://res.cloudinary.com/dsyidnrat/image/upload/v1740493034/bang-hieu-chu-noi-mica_tpb6r7.jpg"
                    alt="Bảng hiệu chữ nổi mica"
                    width={800}
                    height={600}
                    className="rounded-lg shadow-lg"
                  />
                  <figcaption className="text-center italic">
                    Bảng hiệu chữ nổi mica
                  </figcaption>
                </figure>
              </div>
              {/* ACTIONCALL */}
              <ActionCallButtonLamBangHieu />
            </section>
          </article>
        </div>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </div>
  );
};

export default BangHieuMica;
