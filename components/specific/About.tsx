import Image from "next/image";

const About = () => {
  return (
    <main className="bg-gray-100 text-gray-800">
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="mb-6 text-center text-4xl font-bold">
            Giới Thiệu Siêu Thị Bảng Hiệu
          </h1>
          <p className="mb-12 text-center text-lg">
            Siêu Thị Bảng Hiệu là đơn vị hàng đầu trong lĩnh vực thiết kế và thi
            công bảng hiệu quảng cáo tại Việt Nam.
          </p>
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <Image
                src="/images/sieuthibanghieu.jpg"
                alt="Siêu Thị Bảng Hiệu - Đơn vị thiết kế và thi công bảng hiệu hàng đầu"
                className="w-full rounded-lg shadow-lg"
                width={600}
                height={400}
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="mb-4 text-2xl font-semibold">Chúng tôi là ai?</h2>
              <p className="mb-4">
                Siêu Thị Bảng Hiệu là một trong những đơn vị tiên phong trong
                lĩnh vực thiết kế và thi công bảng hiệu quảng cáo. Với hơn 10
                năm kinh nghiệm, chúng tôi tự hào mang đến những sản phẩm chất
                lượng cao với giá cả cạnh tranh.
              </p>
              <p>
                Đội ngũ nhân viên giàu kinh nghiệm và tận tâm của chúng tôi luôn
                sẵn sàng tư vấn và hỗ trợ quý khách để tạo ra những sản phẩm
                bảng hiệu độc đáo và ấn tượng nhất.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h2 className="mb-4 text-2xl font-semibold">
                Sứ mệnh của chúng tôi
              </h2>
              <p className="mb-4">
                Sứ mệnh của Siêu Thị Bảng Hiệu là mang đến những giải pháp quảng
                cáo hiệu quả, góp phần vào sự thành công của doanh nghiệp khách
                hàng thông qua các sản phẩm bảng hiệu chất lượng.
              </p>
              <p>Chúng tôi cam kết:</p>
              <ul className="ml-6 mt-2 list-disc">
                <li>Sản phẩm chất lượng cao</li>
                <li>Giá cả cạnh tranh</li>
                <li>Dịch vụ chuyên nghiệp</li>
                <li>Bảo hành lâu dài</li>
                <li>Hỗ trợ 24/7</li>
              </ul>
            </div>
            <div>
              <Image
                src="/images/banghieu.jpg"
                alt="Quy trình làm việc chuyên nghiệp tại Siêu Thị Bảng Hiệu"
                className="w-full rounded-lg shadow-lg"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-center text-2xl font-semibold">
            Dịch vụ của chúng tôi
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-gray-50 p-6 text-center shadow-sm">
              <h3 className="mb-4 text-xl font-semibold">Thiết kế</h3>
              <p>
                Thiết kế bảng hiệu theo yêu cầu với đội ngũ designer chuyên
                nghiệp
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6 text-center shadow-sm">
              <h3 className="mb-4 text-xl font-semibold">Thi công</h3>
              <p>Thi công bảng hiệu chuyên nghiệp, đảm bảo thẩm mỹ và độ bền</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6 text-center shadow-sm">
              <h3 className="mb-4 text-xl font-semibold">Bảo trì</h3>
              <p>Dịch vụ bảo trì, sửa chữa bảng hiệu 24/7</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
