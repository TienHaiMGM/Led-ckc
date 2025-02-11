import React from "react";

const SocialButtons = () => {
  return (
    <div className="space fixed right-4 top-2/3 z-50 -translate-y-1/2 transform">
      <div className="flex flex-col gap-3">
        {/* Facebook Messenger */}
        <a
          href="https://m.me/yourpage"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-blue-600 p-3 text-white transition duration-300 hover:bg-blue-700"
        >
          <i className="fab fa-facebook-messenger text-2xl"></i>
        </a>

        {/* PHONE */}
        <a
          href="tell:0987902715"
          rel="noopener noreferrer"
          className="rounded-full bg-green-500 p-3 text-white transition duration-300 hover:bg-green-600"
        >
          <i className="fab fa-whatsapp text-2xl"></i>
        </a>

        {/* Zalo */}
        <a
          href="https://zalo.me/0987902715"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-blue-500 p-3 text-white transition duration-300 hover:bg-blue-600"
        >
          <i className="fas fa-comments text-2xl"></i>
        </a>
      </div>
    </div>
  );
};

export default SocialButtons;
