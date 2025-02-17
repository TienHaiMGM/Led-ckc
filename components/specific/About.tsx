import Image from "next/image";
import {
  FaMedal,
  FaUsers,
  FaHandshake,
  FaClock,
  FaTools,
  FaChartLine,
} from "react-icons/fa";
import Breadcrumb from "../common/Breadcrumb";

const About = () => {
  return (
    <main className="bg-gradient-to-b from-gray-50 to-white text-gray-800">
      {/* Hero Section with Parallax Effect */}
      <section className="relative min-h-[60vh] overflow-hidden lg:min-h-[80vh]">
        <div className="absolute inset-0">
          <Image
            src="/images/sieuthibanghieu.jpg"
            alt="Siêu Thị Bảng Hiệu Background"
            className="object-cover object-center brightness-50"
            fill
            priority
            sizes="100vw"
            quality={90}
          />
        </div>
        <div className="relative flex min-h-[60vh] items-center lg:min-h-[80vh]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="mb-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:mb-6 md:text-5xl lg:text-6xl">
                Kiến Tạo{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Thương Hiệu
                </span>
                <br />
                Định Hình{" "}
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Tương Lai
                </span>
              </h1>
              <p className="mb-6 text-base leading-relaxed text-gray-200 sm:text-lg md:mb-8 lg:text-xl">
                Hơn một thập kỷ kinh nghiệm, chúng tôi tự hào là đơn vị tiên
                phong trong việc sáng tạo những giải pháp quảng cáo độc đáo và
                ấn tượng.
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <div className="rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur-sm sm:px-6 sm:text-base">
                  <span className="text-white">10+ Năm Kinh Nghiệm</span>
                </div>
                <div className="rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur-sm sm:px-6 sm:text-base">
                  <span className="text-white">5000+ Dự Án</span>
                </div>
                <div className="rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur-sm sm:px-6 sm:text-base">
                  <span className="text-white">100% Khách Hàng Hài Lòng</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Breadcrumb />

      {/* Innovation Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <div className="relative order-2 md:order-1">
              <div className="aspect-square overflow-hidden rounded-3xl">
                <Image
                  src="/images/banghieu.jpg"
                  alt="Sáng tạo trong thiết kế bảng hiệu"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                  width={600}
                  height={600}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={90}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-3xl bg-blue-600 opacity-20 sm:h-48 sm:w-48"></div>
              <div className="absolute -left-6 -top-6 h-32 w-32 rounded-3xl bg-purple-600 opacity-20 sm:h-48 sm:w-48"></div>
            </div>
            <div className="order-1 flex flex-col justify-center md:order-2">
              <h2 className="mb-4 text-3xl font-bold sm:mb-6 sm:text-4xl">
                Sáng Tạo{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Không Giới Hạn
                </span>
              </h2>
              <p className="mb-6 text-base leading-relaxed text-gray-600 sm:mb-8 sm:text-lg">
                Chúng tôi không chỉ tạo ra bảng hiệu, mà còn kiến tạo những tác
                phẩm nghệ thuật đô thị. Mỗi sản phẩm là sự kết hợp hoàn hảo giữa
                thẩm mỹ và công năng, giữa truyền thống và hiện đại.
              </p>
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <div className="group rounded-xl bg-white p-4 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl sm:p-6">
                  <FaChartLine className="mb-3 text-2xl text-blue-600 sm:mb-4 sm:text-3xl" />
                  <h3 className="mb-2 text-lg font-semibold sm:text-xl">
                    Thiết Kế Sáng Tạo
                  </h3>
                  <p className="text-sm text-gray-600">
                    Ý tưởng độc đáo, thiết kế đột phá
                  </p>
                </div>
                <div className="group rounded-xl bg-white p-4 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl sm:p-6">
                  <FaTools className="mb-3 text-2xl text-purple-600 sm:mb-4 sm:text-3xl" />
                  <h3 className="mb-2 text-lg font-semibold sm:text-xl">
                    Công Nghệ Hiện Đại
                  </h3>
                  <p className="text-sm text-gray-600">
                    Ứng dụng công nghệ tiên tiến nhất
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with 3D Cards */}
      <section className="relative overflow-hidden bg-gray-900 py-12 text-white sm:py-16 md:py-20">
        <div className="absolute inset-0">
          <Image
            src="/images/banghieu.jpg"
            alt="Background pattern"
            fill
            className="object-cover opacity-10"
            sizes="100vw"
            quality={75}
          />
        </div>
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-3xl font-bold sm:mb-12 sm:text-4xl md:mb-16">
            Dịch Vụ Của Chúng Tôi
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
            {[
              {
                icon: (
                  <FaTools className="text-3xl text-blue-400 sm:text-4xl" />
                ),
                title: "Thiết Kế Bảng Hiệu",
                desc: "Sáng tạo không giới hạn, phong cách độc đáo",
                features: [
                  "3D Rendering",
                  "Thiết kế theo yêu cầu",
                  "Tư vấn chuyên sâu",
                ],
              },
              {
                icon: (
                  <FaUsers className="text-3xl text-purple-400 sm:text-4xl" />
                ),
                title: "Thi Công Chuyên Nghiệp",
                desc: "Đội ngũ kỹ thuật giàu kinh nghiệm",
                features: [
                  "Thi công nhanh chóng",
                  "An toàn tuyệt đối",
                  "Bảo hành dài hạn",
                ],
              },
              {
                icon: (
                  <FaClock className="text-3xl text-pink-400 sm:text-4xl" />
                ),
                title: "Bảo Trì & Nâng Cấp",
                desc: "Dịch vụ hậu mãi chu đáo",
                features: [
                  "Bảo trì định kỳ",
                  "Sửa chữa 24/7",
                  "Tư vấn nâng cấp",
                ],
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group relative rounded-2xl bg-white/10 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:bg-white/20 sm:p-8"
              >
                <div className="mb-4 sm:mb-6">{service.icon}</div>
                <h3 className="mb-3 text-xl font-semibold sm:mb-4 sm:text-2xl">
                  {service.title}
                </h3>
                <p className="mb-4 text-sm text-gray-300 sm:mb-6 sm:text-base">
                  {service.desc}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm sm:text-base"
                    >
                      <span className="mr-2 text-blue-400">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section with Interactive Elements */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-3xl font-bold sm:mb-12 sm:text-4xl md:mb-16">
            Giá Trị{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Cốt Lõi
            </span>
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
            {[
              {
                icon: (
                  <FaMedal className="text-4xl text-yellow-500 sm:text-5xl" />
                ),
                title: "Chất Lượng",
                desc: "Cam kết chất lượng vượt trội trong từng sản phẩm",
              },
              {
                icon: (
                  <FaHandshake className="text-4xl text-blue-500 sm:text-5xl" />
                ),
                title: "Uy Tín",
                desc: "Xây dựng niềm tin với khách hàng là ưu tiên hàng đầu",
              },
              {
                icon: (
                  <FaChartLine className="text-4xl text-green-500 sm:text-5xl" />
                ),
                title: "Phát Triển",
                desc: "Không ngừng đổi mới và nâng cao chất lượng dịch vụ",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-white p-6 text-center shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-xl sm:p-8"
              >
                <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-gray-100 transition-transform duration-500 group-hover:scale-150"></div>
                <div className="relative">
                  <div className="mb-4 flex justify-center sm:mb-6">
                    {value.icon}
                  </div>
                  <h3 className="mb-3 text-xl font-semibold sm:mb-4 sm:text-2xl">
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-600 sm:text-base">
                    {value.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Dynamic Background */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 py-12 text-white sm:py-16 md:py-20">
        <div className="absolute inset-0">
          <Image
            src="/images/banghieu.jpg"
            alt="Background pattern"
            fill
            className="object-cover opacity-10"
            sizes="100vw"
            quality={75}
          />
        </div>
        <div className="container relative mx-auto px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-2xl font-bold sm:mb-6 sm:text-3xl md:mb-8 md:text-4xl">
            Sẵn Sàng Cho Dự Án Tiếp Theo?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-base opacity-90 sm:mb-10 sm:text-lg md:mb-12">
            Hãy để chúng tôi giúp bạn tạo nên những tác phẩm quảng cáo ấn tượng
            và độc đáo
          </p>
          <a
            href="/pages/lien-he"
            className="group relative inline-flex items-center overflow-hidden rounded-full bg-white px-6 py-2 font-semibold text-blue-600 transition-all hover:bg-gray-100 sm:px-8 sm:py-3"
          >
            <span className="relative">Liên Hệ Ngay</span>
            <span className="absolute -right-8 flex h-full w-8 translate-x-2 items-center justify-start text-white opacity-0 transition-all group-hover:translate-x-4 group-hover:opacity-100">
              →
            </span>
          </a>
        </div>
      </section>
    </main>
  );
};

export default About;
