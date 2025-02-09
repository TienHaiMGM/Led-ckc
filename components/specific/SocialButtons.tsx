import React from 'react';

const SocialButtons = () => {
  return (
    <div className="fixed right-4 top-2/3 transform -translate-y-1/2 space-y-4">
        <div className='flex flex-col gap-5'>
             {/* Facebook Messenger */}
      <a
        href="https://m.me/yourpage"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition duration-300"
      >
        <i className="fab fa-facebook-messenger text-2xl"></i>
      </a>
      
      {/* PHONE */}
      <a
        href="tell:0987902715"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition duration-300"
      >
        <i className="fab fa-whatsapp text-2xl"></i>
      </a>

      {/* Zalo */}
      <a
        href="https://zalo.me/0987902715"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition duration-300"
      >
        <i className="fas fa-comments text-2xl"></i>
      </a>
        </div>
    </div>
  );
};

export default SocialButtons;