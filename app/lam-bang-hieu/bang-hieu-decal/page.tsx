import Image from "next/image";
import Breadcrumb from "@/components/common/Breadcrumb";
import TabarLeft from "@/components/common/TabarLeft";
import ActionCallButtonLamBangHieu from "@/components/common/ActionCallButton";

const BangHieuDecal = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Breadcrumb />
      <main className="container mx-auto flex-grow px-0 py-0 lg:py-6 xl:py-6">
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="hidden sm:hidden md:hidden lg:block xl:block">
            <div className="animate-fadeSlide hidden sm:hidden md:hidden lg:block xl:ml-28 xl:block">
              <TabarLeft />
            </div>
          </div>
          <article className="prose prose-custome p-2 lg:w-3/4">
            <div className="prose prose-custome animate-fadeIn lg:w-3/4">
              <div className="rounded-lg bg-gradient-to-r from-blue-50 to-white p-6">
                <h1 className="text-3xl font-bold text-blue-800 lg:text-4xl">
                  Bảng hiệu dán decal giá rẻ
                </h1>
                <p className="text-lg text-gray-600">
                  Bảng hiệu decal đang trở thành xu hướng quảng cáo phổ biến nhờ
                  chi phí thấp, dễ thi công và mang lại hiệu quả thẩm mỹ cao.
                  Với khả năng tùy chỉnh đa dạng, bảng hiệu decal phù hợp cho
                  nhiều loại hình kinh doanh từ cửa hàng nhỏ lẻ đến các doanh
                  nghiệp lớn. Vậy bảng hiệu decal có những ưu điểm gì nổi bật?
                  Lựa chọn loại decal nào để đảm bảo bền đẹp và thu hút khách
                  hàng? Hãy cùng tìm hiểu chi tiết trong bài viết sau đây.
                </p>
              </div>
            </div>
            <section className="grid gap-4">
              <div className="animate-fadeScale flex justify-center">
                <figure>
                  <Image
                    src="https://res.cloudinary.com/dsyidnrat/image/upload/v1740553404/bang-hieu-decal-tiem-massage_pddapb.jpg"
                    alt="Bảng hiệu Decal tiệm massage"
                    width={600}
                    height={600}
                    className="rounded-lg object-cover shadow-lg"
                  />
                  <figcaption className="text-center italic">
                    Bảng hiệu Decal tiệm massage
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
                      href="#bang-hieu-decal-la-gi"
                      className="no-underline hover:underline"
                    >
                      Bảng Hiệu Decal Là Gì?
                    </a>
                  </li>
                  <li>
                    <a href="#loi-ich" className="no-underline hover:underline">
                      Tại Sao Doanh Nghiệp Nên Chọn Bảng Hiệu Decal?
                    </a>
                    <ul className="ml-5 list-inside list-disc space-y-1 text-blue-500">
                      <li>
                        <a
                          href="#chi-phi-thap"
                          className="no-underline hover:underline"
                        >
                          Chi Phí Thấp – Hiệu Quả Cao
                        </a>
                      </li>
                      <li>
                        <a
                          href="#de-thi-cong"
                          className="no-underline hover:underline"
                        >
                          Dễ Thi Công Và Thay Thế
                        </a>
                      </li>
                      <li>
                        <a
                          href="#da-dang"
                          className="no-underline hover:underline"
                        >
                          Đa Dạng Về Thiết Kế
                        </a>
                      </li>
                      <li>
                        <a
                          href="#kha-nang"
                          className="no-underline hover:underline"
                        >
                          Khả Năng Chống Chịu Thời Tiết
                        </a>
                      </li>
                      <li>
                        <a
                          href="#thoi-gian"
                          className="no-underline hover:underline"
                        >
                          Thời Gian Thi Công Nhanh
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      href="#kha-nang"
                      className="no-underline hover:underline"
                    >
                      Các Loại Bảng Hiệu Decal Phổ Biến
                    </a>
                    <ul className="ml-5 list-inside list-disc space-y-1 text-blue-500">
                      <li>
                        <a
                          href="#alu-dan-decal"
                          className="no-underline hover:underline"
                        >
                          Bảng Alu Dán Decal
                        </a>
                      </li>
                      <li>
                        <a
                          href="#ton-dan-decal"
                          className="no-underline hover:underline"
                        >
                          Bảng Hiệu Tôn Dán Decal
                        </a>
                      </li>
                      <li>
                        <a
                          href="#mica-dan-decal"
                          className="no-underline hover:underline"
                        >
                          Bảng Hiệu Mica Dán Decal
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      href="#chon-decal"
                      className="no-underline hover:underline"
                    >
                      Cách Chọn Bảng Hiệu Decal Phù Hợp Với Doanh Nghiệp
                    </a>
                    <ul className="ml-5 list-inside list-disc space-y-1 text-blue-500">
                      <li>
                        <a
                          href="#xac-dinh-muc-dich"
                          className="no-underline hover:underline"
                        >
                          Xác Định Mục Đích Sử Dụng
                        </a>
                      </li>
                      <li>
                        <a
                          href="#ngan-sach"
                          className="no-underline hover:underline"
                        >
                          Cân Nhắc Ngân Sách
                        </a>
                      </li>
                      <li>
                        <a
                          href="#khong-gian"
                          className="no-underline hover:underline"
                        >
                          Phân Tích Không Gian Lắp Đặt
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#bao-gia" className="no-underline hover:underline">
                      Chi Phí Sản Xuất Bảng Hiệu Dán Decal
                    </a>
                    <ul className="ml-5 list-inside list-disc space-y-1 text-blue-500">
                      <li>
                        <a
                          href="#kich-thuoc"
                          className="no-underline hover:underline"
                        >
                          Kích Thước Bảng Hiệu
                        </a>
                      </li>
                      <li>
                        <a
                          href="#chat-lieu-nen"
                          className="no-underline hover:underline"
                        >
                          Chất Liệu Nền
                        </a>
                      </li>
                      <li>
                        <a
                          href="#chat-luong-decal"
                          className="no-underline hover:underline"
                        >
                          Chất Lượng Decal
                        </a>
                      </li>
                      <li>
                        <a
                          href="#thiet-ke"
                          className="no-underline hover:underline"
                        >
                          Thiết kế
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      href="#meo-keo-dai"
                      className="no-underline hover:underline"
                    >
                      Các Bước Bảo Quản Bảng Hiệu Decal Để Kéo Dài Tuổi Thọ
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
                          href="#tranh-va-dap"
                          className="no-underline hover:underline"
                        >
                          Tránh Va Đập Mạnh
                        </a>
                      </li>
                      <li>
                        <a
                          href="#lop-bao-ve"
                          className="no-underline hover:underline"
                        >
                          Phủ Lớp Bảo Vệ
                        </a>
                      </li>
                      <li>
                        <a
                          href="#kiem-tra"
                          className="no-underline hover:underline"
                        >
                          Kiểm Tra Và Sửa Chữa Kịp Thời
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      href="#ket-luan"
                      className="no-underline hover:underline"
                    >
                      Kết luận: Bảng hiệu decal là giải pháp quảng cáo hiệu quả
                    </a>
                  </li>
                </ul>
              </nav>
            </section>
            <section className="mb-0 grid gap-3 leading-normal lg:grid-cols-2 xl:lg:grid-cols-2">
              <figure>
                <Image
                  src="https://res.cloudinary.com/dsyidnrat/image/upload/v1740553399/bang-hieu-decal-quang-cao_duo4h6.jpg"
                  alt="Bảng hiệu Decal sự kiện"
                  width={600}
                  height={600}
                  className="rounded-lg object-cover shadow-lg"
                />
                <figcaption className="text-center italic">
                  Bảng hiệu Decal sự kiện
                </figcaption>
              </figure>
              <div className="space-y-1 leading-normal">
                <h2
                  id="bang-hieu-decal-la-gi"
                  className="scroll-mt-16 text-2xl font-bold text-gray-800"
                >
                  Bảng Hiệu Decal Là Gì?
                </h2>
                <p className="text-gray-600">
                  Bảng hiệu decal là loại bảng quảng cáo sử dụng chất liệu decal
                  (loại nhựa mỏng có lớp keo dán sẵn) để in hình ảnh, thông tin
                  doanh nghiệp và dán lên bề mặt bảng hiệu như alu, mica,
                  tôn,... Loại bảng hiệu này nổi bật nhờ khả năng thi công
                  nhanh, giá thành rẻ và thiết kế linh hoạt theo yêu cầu.
                </p>
                <p>Cấu Tạo Của Bảng Hiệu Decal</p>
                <ul>
                  <li>
                    <strong>Lớp bề mặt: </strong> Decal in hình ảnh, logo, thông
                    tin doanh nghiệp.
                  </li>
                  <li>
                    <strong>Lớp keo dán: </strong> Giúp decal bám chắc vào bề
                    mặt bảng hiệu.
                  </li>
                  <li>
                    <strong>Bề mặt bảng: </strong> Thường sử dụng alu, mica,
                    tôn,... tùy theo nhu cầu và ngân sách.
                  </li>
                </ul>
              </div>
            </section>
            <section className="mt-0 leading-normal">
              <h2
                id="loi-ich"
                className="scroll-mt-16 text-2xl font-semibold text-gray-700"
              >
                Tại Sao Doanh Nghiệp Nên Chọn Bảng Hiệu Decal?
              </h2>
              <div className="space-y-6">
                <div>
                  <h3
                    id="chi-phi-thap"
                    className="scroll-mt-16 text-xl font-semibold text-gray-600"
                  >
                    Chi Phí Thấp – Hiệu Quả Cao
                  </h3>
                  <p>
                    So với các loại bảng hiệu như hộp đèn, chữ nổi mica, bảng
                    hiệu decal có chi phí thấp hơn đáng kể. Đây là lựa chọn lý
                    tưởng cho các cửa hàng nhỏ hoặc doanh nghiệp khởi nghiệp
                    muốn tối ưu ngân sách.
                  </p>
                </div>
                <div>
                  <h3
                    id="de-thi-cong"
                    className="scroll-mt-16 text-xl font-semibold text-gray-600"
                  >
                    Dễ Thi Công Và Thay Thế
                  </h3>
                  <p>
                    Bảng hiệu dán decal có quy trình thi công đơn giản, chỉ cần
                    in và dán trực tiếp lên bề mặt bảng. Ngoài ra, việc thay mới
                    nội dung cũng rất dễ dàng, phù hợp với các chiến dịch quảng
                    cáo ngắn hạn.
                  </p>
                </div>
                <div>
                  <h3
                    id="da-dang"
                    className="scroll-mt-16 text-xl font-semibold text-gray-600"
                  >
                    Đa Dạng Về Thiết Kế
                  </h3>
                  <p>
                    Công nghệ in ấn hiện đại cho phép tạo ra các bảng hiệu decal
                    với hình ảnh sắc nét, màu sắc phong phú, không giới hạn về
                    mẫu mã thiết kế. Bạn có thể dễ dàng tái hiện logo, slogan
                    hay bất kỳ hình ảnh phức tạp nào lên bảng hiệu một cách
                    chính xác.
                  </p>
                </div>
                <div>
                  <h3
                    id="kha-nang"
                    className="scroll-mt-16 text-xl font-semibold text-gray-600"
                  >
                    Khả Năng Chống Chịu Thời Tiết
                  </h3>
                  <p>
                    Với công nghệ sản xuất hiện đại, các loại decal chuyên dụng
                    cho bảng hiệu có khả năng chống nước, chống tia UV, không
                    bạc màu khi tiếp xúc với ánh nắng mặt trời trong thời gian
                    dài.
                  </p>
                </div>
                <div>
                  <h3
                    id="thoi-gian"
                    className="scroll-mt-16 text-xl font-semibold text-gray-600"
                  >
                    Thời Gian Thi Công Nhanh
                  </h3>
                  <p>
                    Quy trình sản xuất bảng hiệu dán decal đơn giản và nhanh
                    chóng hơn so với nhiều loại bảng hiệu khác. Điều này giúp
                    doanh nghiệp tiết kiệm thời gian, nhanh chóng đưa thương
                    hiệu ra thị trường.
                  </p>
                </div>
                <div className="flex justify-center">
                  <figure>
                    <Image
                      src="https://res.cloudinary.com/dsyidnrat/image/upload/v1740553405/bang-hieu-decal-tiem-spa_difkk7.jpg"
                      alt="Bảng hiệu Decal tiệm spa"
                      width={800}
                      height={600}
                      className="rounded-lg shadow-lg"
                    />
                    <figcaption className="text-center italic">
                      Bảng hiệu Decal tiệm spa
                    </figcaption>
                  </figure>
                </div>
              </div>
            </section>
            <section className="leading-normal">
              <h2
                id="cac-loai-decal"
                className="scroll-mt-16 text-2xl font-semibold text-gray-700"
              >
                Các Loại Bảng Hiệu Decal Phổ Biến
              </h2>
              <div className="space-y-6">
                <div>
                  <h3
                    id="alu-dan-decal"
                    className="scroll-mt-16 text-xl font-semibold text-gray-600"
                  >
                    Bảng Alu Dán Decal
                  </h3>

                  <p>
                    Bảng alu dán decal kết hợp giữa tấm nhôm alu và lớp decal in
                    ấn sắc nét. Alu nổi bật với đặc tính chống gỉ, bền màu, chịu
                    được thời tiết khắc nghiệt.
                  </p>
                  <p>
                    <strong>Ưu điểm:</strong>
                  </p>
                  <ul>
                    <li>Độ bền cao, thích hợp cho không gian ngoài trời.</li>
                    <li>Bề mặt nhẵn bóng giúp decal bám chắc và đẹp mắt.</li>
                    <li>Chi phí hợp lý, thi công nhanh.</li>
                  </ul>
                  <div className="flex justify-center">
                    <figure>
                      <Image
                        src="https://res.cloudinary.com/dsyidnrat/image/upload/v1740553402/bang-hieu-decal-thot-toc_pqbi9n.jpg"
                        alt="Bảng hiệu Decal tiệm hớt tóc"
                        width={800}
                        height={600}
                        className="rounded-lg shadow-lg"
                      />
                      <figcaption className="text-center italic">
                        Bảng hiệu Decal tiệm hớt tóc
                      </figcaption>
                    </figure>
                  </div>
                </div>
                <div>
                  <h3
                    id="  "
                    className="scroll-mt-16 text-xl font-semibold text-gray-600"
                  >
                    Bảng Hiệu Tôn Dán Decal
                  </h3>
                  <p>
                    Tôn là chất liệu có khả năng chịu lực tốt, chống va đập cao.
                    Bảng hiệu tôn dán decal phù hợp cho các khu vực có nhiều gió
                    hoặc nơi cần độ bền vững chắc.
                  </p>
                  <p>
                    <strong>Đặc điểm nổi bật: </strong>
                  </p>
                  <ul>
                    <li>Bền bỉ theo thời gian, ít bị cong vênh.</li>
                    <li>Chống chịu thời tiết tốt.</li>
                    <li>
                      Giá thành thấp, phù hợp cho nhiều mô hình kinh doanh.
                    </li>
                  </ul>
                  <div className="flex justify-center">
                    <figure>
                      <Image
                        src="https://res.cloudinary.com/dsyidnrat/image/upload/v1740553401/bang-hieu-decal-spa_d3lx19.jpg"
                        alt="Bảng hiệu Decal spa"
                        width={800}
                        height={600}
                        className="rounded-lg shadow-lg"
                      />
                      <figcaption className="text-center italic">
                        Bảng hiệu Decal spa
                      </figcaption>
                    </figure>
                  </div>
                </div>
                <div>
                  <h3
                    id="mica-dan-decal"
                    className="scroll-mt-16 text-xl font-semibold text-gray-600"
                  >
                    Bảng Hiệu Mica Dán Decal
                  </h3>
                  <p>
                    Mica mang đến vẻ đẹp hiện đại, sáng bóng. Bảng hiệu mica dán
                    decal thường được sử dụng trong các trung tâm thương mại,
                    showroom hoặc cửa hàng cao cấp.
                  </p>
                  <p>
                    <strong>Đặc điểm nổi bật: </strong>
                  </p>
                  <ul>
                    <li>Màu sắc tươi sáng, bắt mắt.</li>
                    <li>Dễ tạo hình, cắt uốn theo thiết kế.</li>
                    <li>Thích hợp cho không gian trong nhà.</li>
                  </ul>
                  <div className="flex justify-center">
                    <figure>
                      <Image
                        src="https://res.cloudinary.com/dsyidnrat/image/upload/v1740553400/bang-hieu-decal-quan-hu-tieu_x1csue.jpg"
                        alt="Bảng hiệu Decal tiệm hủ tiếu"
                        width={800}
                        height={600}
                        className="rounded-lg shadow-lg"
                      />
                      <figcaption className="text-center italic">
                        Bảng hiệu Decal tiệm hủ tiếu
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </section>
            <section className="leading-normal">
              <div>
                <h2
                  id="chon-decal"
                  className="scroll-mt-16 text-2xl font-semibold text-gray-700"
                >
                  Cách Chọn Bảng Hiệu Decal Phù Hợp Với Doanh Nghiệp
                </h2>
                <h3 id="xac-dich-muc-dich"> Xác Định Mục Đích Sử Dụng</h3>
                <p>
                  Trước khi lựa chọn loại bảng hiệu, bạn cần xác định rõ mục
                  đích sử dụng:
                </p>
                <ul>
                  <li>Bảng hiệu chính của cửa hàng</li>
                  <li>Bảng hiệu quảng cáo sản phẩm, dịch vụ</li>
                  <li>Bảng thông tin, chỉ dẫn</li>
                  <li>Bảng hiệu tạm thời cho sự kiện, khuyến mãi</li>
                </ul>
                <h3 id="ngan-sach" className="scroll-mt-16">
                  Cân Nhắc Ngân Sách
                </h3>
                <p>
                  Với mỗi loại vật liệu và kích thước khác nhau, chi phí sản
                  xuất bảng hiệu decal có thể dao động đáng kể. Hãy cân nhắc
                  ngân sách marketing của doanh nghiệp để lựa chọn giải pháp phù
                  hợp.
                </p>

                <h3 id="khong-gian" className="scroll-mt-16">
                  Phân Tích Không Gian Lắp Đặt
                </h3>
                <p>
                  Môi trường lắp đặt quyết định loại vật liệu nền và decal phù
                  hợp:
                </p>
                <ul>
                  <li>
                    Ngoài trời: Nên chọn bảng alu dán decal với lớp decal chống
                    UV
                  </li>
                  <li>
                    Trong nhà: Có thể lựa chọn bảng hiệu mica dán decal để tăng
                    tính thẩm mỹ
                  </li>
                  <li>
                    Môi trường ẩm ướt: Cần chọn vật liệu chống nước, chống ẩm
                    mốc
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <figure>
                  <Image
                    src="https://res.cloudinary.com/dsyidnrat/image/upload/v1740553397/bang-hieu-decal-quan-an_nmmhnh.jpg"
                    alt="Bảng hiệu Decal quán cơm"
                    width={800}
                    height={600}
                    className="rounded-lg shadow-lg"
                  />
                  <figcaption className="text-center italic">
                    Bảng hiệu Decal quán cơm
                  </figcaption>
                </figure>
              </div>
            </section>
            <section className="leading-normal">
              <h2
                id="bao-gia"
                className="scroll-mt-16 text-2xl font-semibold text-gray-700"
              >
                Chi Phí Sản Xuất Bảng Hiệu Dán Decal
              </h2>
              <p>
                Giá thành của một bảng hiệu decal phụ thuộc vào nhiều yếu tố
                như:
              </p>
              <h3 id="kich-thuoc" className="scroll-mt-16">
                Kích Thước Bảng Hiệu
              </h3>
              <ul>
                <li>Bảng nhỏ (dưới 1m²): 300.000đ - 500.000đ</li>
                <li>Bảng trung bình (1-3m²): 500.000đ - 1.500.000đ</li>
                <li>Bảng lớn (trên 3m²): Từ 1.500.000đ trở lên</li>
              </ul>
              <h3 id="chat-lieu" className="scroll-mt-16">
                Chất Liệu Nền
              </h3>
              <ul>
                <li>Tôn: Giá thấp nhất</li>
                <li>Alu: Giá trung bình</li>
                <li>Mica: Giá cao nhất</li>
              </ul>
              <h3 id="chat-luong" className="scroll-mt-16">
                Chất Lượng Decal
              </h3>
              <ul>
                <li>Decal thường: Giá rẻ, tuổi thọ 1-2 năm</li>
                <li>Decal cao cấp: Giá cao hơn, tuổi thọ 3-5 năm</li>
                <li>Decal đặc biệt (phản quang, chống UV cao): Giá cao nhất</li>
              </ul>
              <h3 id="thiet-ke" className="scroll-mt-16">
                Thiết kế
              </h3>
              <ul>
                <li>Sử dụng mẫu có sẵn: Miễn phí hoặc chi phí thấp</li>
                <li>Thiết kế riêng đơn giản: 300.000đ - 500.000đ</li>
                <li>Thiết kế phức tạp, độc quyền: Từ 1.000.000đ trở lên</li>
              </ul>
              <p>
                📢 Lưu ý: Giá trên chỉ mang tính tham khảo, chi phí thực tế phụ
                thuộc vào yêu cầu cụ thể của dự án.
              </p>
              <div className="flex justify-center">
                <figure>
                  <Image
                    src="https://res.cloudinary.com/dsyidnrat/image/upload/v1740553396/bang-hieu-decal-cua-hang-thu-y_pdpdr7.jpg"
                    alt="Bảng hiệu Decal hiệu thuốc"
                    width={800}
                    height={600}
                    className="rounded-lg shadow-lg"
                  />
                  <figcaption className="text-center italic">
                    Bảng hiệu Decal hiệu thuốc
                  </figcaption>
                </figure>
              </div>
            </section>
            <section className="leading-normal">
              <h2
                id="meo-keo-dai"
                className="scroll-mt-16 text-2xl font-semibold text-gray-700"
              >
                Các Bước Bảo Quản Bảng Hiệu Decal Để Kéo Dài Tuổi Thọ
              </h2>
              <h3 id="ve-sinh" className="scroll-mt-16">
                Vệ Sinh Định Kỳ
              </h3>
              <p>
                Bụi bẩn, côn trùng và các yếu tố môi trường có thể làm giảm vẻ
                đẹp của bảng hiệu decal. Vệ sinh định kỳ với nước sạch và chất
                tẩy nhẹ sẽ giúp bảng hiệu luôn sáng đẹp.
              </p>
              <h3 id="tranh-va-dap" className="scroll-mt-16">
                Tránh Va Đập Mạnh
              </h3>
              <p>
                Mặc dù khá bền, nhưng bảng hiệu decal vẫn có thể bị hư hại do va
                đập. Hãy lắp đặt ở vị trí an toàn, tránh các tác động vật lý
                mạnh.
              </p>
              <h3 id="lop-bao-ve" className="scroll-mt-16">
                Phủ Lớp Bảo Vệ
              </h3>
              <p>
                Với bảng hiệu ngoài trời, việc phủ thêm một lớp bảo vệ UV lên bề
                mặt decal có thể giúp kéo dài tuổi thọ đáng kể.
              </p>
              <h3 id="kiem-tra" className="scroll-mt-16">
                {" "}
                Kiểm Tra Và Sửa Chữa Kịp Thời
              </h3>
              <p>
                Phát hiện và xử lý sớm các vấn đề như bong tróc, nứt vỡ sẽ ngăn
                chặn hư hỏng lan rộng, tiết kiệm chi phí thay thế.
              </p>
              <div className="flex justify-center">
                <figure>
                  <Image
                    src="https://res.cloudinary.com/dsyidnrat/image/upload/v1740553396/bang-hieu-decal-menu_o1jjlv.jpg"
                    alt="Bảng hiệu Decal Menu"
                    width={800}
                    height={600}
                    className="rounded-lg shadow-lg"
                  />
                  <figcaption className="text-center italic">
                    Bảng hiệu Decal Menu
                  </figcaption>
                </figure>
              </div>
            </section>
            <section className="leading-normal">
              <h2
                id="ket-luan"
                className="scroll-mt-16 text-2xl font-semibold text-gray-700"
              >
                Bảng hiệu decal là giải pháp quảng cáo hiệu quả
              </h2>
              <p className="mb-4 text-lg">
                Bảng hiệu decal là giải pháp quảng cáo hoàn hảo cho các doanh
                nghiệp mong muốn sở hữu bảng hiệu đẹp mắt, chi phí thấp và dễ
                thi công. Tùy thuộc vào nhu cầu sử dụng và ngân sách, bạn có thể
                lựa chọn các loại bảng như bảng alu dán decal, bảng hiệu tôn dán
                decal hay bảng hiệu mica dán decal để mang lại hiệu quả tốt
                nhất.
              </p>
              <div className="flex justify-center">
                <figure>
                  <Image
                    src="https://res.cloudinary.com/dsyidnrat/image/upload/v1740554228/bang-hieu-decal-quan-ca-phe_pyqshh_c_crop_ar_1_1_m152nt.jpg"
                    alt="Bảng hiệu Decal quán cà phê"
                    width={800}
                    height={600}
                    className="rounded-lg shadow-lg"
                  />
                  <figcaption className="text-center italic">
                    Bảng hiệu Decal quán cà phê
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

export default BangHieuDecal;
