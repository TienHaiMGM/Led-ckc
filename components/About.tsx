import React from 'react';

const About = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Chào mừng đến với Siêu thị bảng hiệu</h2>
        <p className="text-lg text-gray-700 mb-8 text-center">
          Chúng tôi tự hào là đơn vị hàng đầu trong lĩnh vực cung cấp các loại bảng hiệu chất lượng cao, đa dạng về mẫu mã và chủng loại.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
            <i className="fas fa-award text-6xl text-blue-500 mb-4"></i>
            <h3 className="text-2xl font-semibold mb-2">Uy tín và chất lượng</h3>
            <p className="text-gray-600">
              Chúng tôi cam kết cung cấp những sản phẩm chất lượng cao nhất, đảm bảo đáp ứng mọi yêu cầu của khách hàng.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
            <i className="fas fa-users text-6xl text-green-500 mb-4"></i>
            <h3 className="text-2xl font-semibold mb-2">Đội ngũ chuyên nghiệp</h3>
            <p className="text-gray-600">
              Đội ngũ nhân viên của chúng tôi luôn sẵn sàng hỗ trợ và tư vấn cho khách hàng với thái độ chuyên nghiệp và nhiệt tình.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
            <i className="fas fa-globe text-6xl text-red-500 mb-4"></i>
            <h3 className="text-2xl font-semibold mb-2">Phạm vi toàn quốc</h3>
            <p className="text-gray-600">
              Chúng tôi cung cấp dịch vụ trên toàn quốc, đảm bảo khách hàng ở bất cứ đâu cũng có thể nhận được sản phẩm của chúng tôi.
            </p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <a href="/contact" className="text-white bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded">
            Liên hệ với chúng tôi
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;