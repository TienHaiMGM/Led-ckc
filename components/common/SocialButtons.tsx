import React from "react";

const SocialButtons = () => {
  return (
    <div
      id="SocialButtons"
      className="space fixed right-4 top-[80vh] z-50 -translate-y-1/2 transform"
    >
      <div className="flex flex-col gap-2">
        {/* Zalo */}
        <a
          href="https://zalo.me/0987902715"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          <img
            width="58"
            height="58"
            src="https://img.icons8.com/bubbles/100/zalo.png"
            alt="zalo"
            className=""
          />
        </a>
        {/* PHONE */}
        <a href="tell:0987902715" rel="noopener noreferrer" className="ml-2">
          <i className="fab fa-whatsapp rounded-full bg-green-500 p-3 text-xl text-white transition duration-300 hover:bg-green-600"></i>
        </a>

        {/* Facebook Messenger */}
        <a
          href="https://m.me/yourpage"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2"
        >
          <i className="fab fa-facebook-messenger rounded-full bg-blue-600 p-3 text-xl text-white transition duration-300 hover:bg-blue-700"></i>
        </a>
      </div>
    </div>
  );
};

export default SocialButtons;
