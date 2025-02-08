import React from 'react';
import Footer from '@/components/common/Footer'
import Menu from '@/components/common/Menu'
import Header from '@/components/common/Header'

const Policy = () => {
  return (
    
    <div className="flex flex-col min-h-screen">
      <Header/>
      <Menu/>
      <main className="flex-grow">
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-8">Chính sách bảo mật</h1>
            <p className="text-lg text-gray-700 mb-8">
              Chúng tôi cam kết bảo vệ sự riêng tư của bạn. Chính sách bảo mật này giải thích cách chúng tôi thu thập, sử dụng và bảo vệ thông tin cá nhân của bạn.
            </p>
            <h2 className="text-2xl font-bold mb-4">Thông tin chúng tôi thu thập</h2>
            <p className="text-gray-700 mb-4">
              Chúng tôi có thể thu thập các thông tin cá nhân như tên, địa chỉ email, địa chỉ giao hàng, số điện thoại và thông tin thanh toán khi bạn mua hàng hoặc đăng ký tài khoản trên trang web của chúng tôi.
            </p>
            <h2 className="text-2xl font-bold mb-4">Cách chúng tôi sử dụng thông tin</h2>
            <p className="text-gray-700 mb-4">
              Chúng tôi sử dụng thông tin cá nhân của bạn để xử lý đơn hàng, cung cấp dịch vụ khách hàng, cải thiện trang web của chúng tôi và gửi cho bạn thông tin khuyến mãi và cập nhật.
            </p>
            <h2 className="text-2xl font-bold mb-4">Chia sẻ thông tin</h2>
            <p className="text-gray-700 mb-4">
              Chúng tôi không bán, trao đổi hoặc cho thuê thông tin cá nhân của bạn cho bên thứ ba. Chúng tôi có thể chia sẻ thông tin của bạn với các nhà cung cấp dịch vụ bên thứ ba để hỗ trợ chúng tôi trong các hoạt động kinh doanh của mình, nhưng họ chỉ được phép sử dụng thông tin của bạn để cung cấp dịch vụ cho chúng tôi.
            </p>
            <h2 className="text-2xl font-bold mb-4">Bảo mật thông tin</h2>
            <p className="text-gray-700 mb-4">
              Chúng tôi thực hiện các biện pháp hợp lý để bảo vệ thông tin cá nhân của bạn khỏi mất mát, lạm dụng và truy cập trái phép. Tuy nhiên, không có phương pháp truyền tải dữ liệu nào qua Internet hoặc phương pháp lưu trữ điện tử nào là an toàn tuyệt đối.
            </p>
            <h2 className="text-2xl font-bold mb-4">Thay đổi chính sách bảo mật</h2>
            <p className="text-gray-700 mb-4">
              Chúng tôi có thể cập nhật chính sách bảo mật này theo thời gian để phản ánh các thay đổi trong thực tiễn của chúng tôi. Chúng tôi sẽ thông báo cho bạn về bất kỳ thay đổi nào bằng cách đăng chính sách bảo mật mới trên trang web của chúng tôi.
            </p>
            <h2 className="text-2xl font-bold mb-4">Liên hệ với chúng tôi</h2>
            <p className="text-gray-700 mb-4">
              Nếu bạn có bất kỳ câu hỏi nào về chính sách bảo mật này, vui lòng liên hệ với chúng tôi qua email hoặc số điện thoại được cung cấp trên trang web của chúng tôi.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Policy;