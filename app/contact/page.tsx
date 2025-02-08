import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Menu from '../../components/Menu';

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <Menu />
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="max-w-6xl w-full flex flex-col bg-white shadow-lg rounded-lg p-6">
          <div className="w-full flex">
            <div className="w-1/2 p-4">
              <h1 className="text-2xl font-bold mb-4 uppercase">Vị Trí Cửa Hàng</h1>
              <div className="h-72 bg-gray-200 mb-4 rounded-lg overflow-hidden">
                <iframe
                  className='w-full h-full'
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7838.786135175627!2d106.63277367589112!3d10.781176959104327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f112bd74627%3A0xb85cda85682f9202!2zU2nDqnUgVGjhu4sgQuG6o25nIEhp4buHdQ!5e0!3m2!1sen!2sus!4v1738910558517!5m2!1sen!2sus"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
            <div className="w-1/2 p-4">
              <h2 className="text-2xl font-bold mb-6 uppercase">Thông tin liên hệ</h2>
              <div className="bg-red-100 shadow-md rounded-lg p-4">
                <div className="flex items-center mb-4">
                  <svg className="w-6 h-6 text-cyan-300 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M10 0a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 100-16 8 8 0 000 16zm-1-13h2v6h-2V5zm0 8h2v2h-2v-2z"/></svg>
                  <p className="mb-2"><strong>Email:</strong> contact@example.com</p>
                </div>
                <div className="flex items-center mb-4">
                  <svg className="w-6 h-6 text-cyan-300 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M10 0a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 100-16 8 8 0 000 16zm-1-13h2v6h-2V5zm0 8h2v2h-2v-2z"/></svg>
                  <p className="mb-2"><strong>Phone:</strong> (123) 456-7890</p>
                </div>
                <div className="flex items-center mb-4">
                  <svg className="w-6 h-6 text-cyan-300 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M10 0a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 100-16 8 8 0 000 16zm-1-13h2v6h-2V5zm0 8h2v2h-2v-2z"/></svg>
                  <p className="mb-2"><strong>Giờ làm việc:</strong> 8:00 - 17:00 (Thứ 2 - Thứ 7)</p>
                </div>
                <div className="flex items-center mb-4">
                  <svg className="w-6 h-6 text-cyan-300 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M10 0a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 100-16 8 8 0 000 16zm-1-13h2v6h-2V5zm0 8h2v2h-2v-2z"/></svg>
                  <p className="mb-2"><strong>Địa chỉ:</strong> 129</p>
                </div>
                <div className="flex items-center mb-4">
                  <svg className="w-6 h-6 text-cyan-300 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M10 0a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 100-16 8 8 0 000 16zm-1-13h2v6h-2V5zm0 8h2v2h-2v-2z"/></svg>
                  <p className="mb-2"><strong>Facebook:</strong> <a href="#" className="text-blue-500 hover:underline">Facebook Page</a></p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full p-4">
            <h2 className="mt-4 uppercase text-xl font-bold text-center">Gửi yêu cầu cho chúng tôi</h2>
            <form className="mb-4">
              <div className="mb-4">
                <label className="block mb-2" htmlFor="name"></label>
                <input className="border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" id="name" name="name" placeholder='Họ và Tên' required />
              </div>
              <div className="mb-4">
                <label className="block mb-2" htmlFor="phone"></label>
                <input className="border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" type="tel" id="phone" name="phone" placeholder='Số điện thoại' required />
              </div>
              <div className="mb-4">
                <label className="block mb-2" htmlFor="email"></label>
                <input className="border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" type="email" id="email" name="email" placeholder='Email' required />
              </div>
              <div className="mb-4">
                <label className="block mb-2" htmlFor="message"></label>
                <textarea className="border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" id="message" name="message" rows={4} placeholder='Nội dung yêu cầu ' required></textarea>
              </div>
              <button className="bg-blue-500 text-white rounded py-2 px-4 hover:bg-blue-600 transition duration-200" type="submit">Gửi yêu cầu</button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
