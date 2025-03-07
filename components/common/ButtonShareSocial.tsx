import {
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaLinkedinIn,
} from "react-icons/fa";
import { SiZalo } from "react-icons/si";

const ShareButtons = () => {
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=Check%20this%20out!`,
    pinterest: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(currentUrl)}`,
  };

  const openPopup = (url: string) => {
    window.open(url, "_blank", "width=600,height=500");
  };

  return (
    <div className="flex flex-wrap gap-4">
      {/* Facebook */}
      <button
        onClick={() => openPopup(shareLinks.facebook)}
        className="flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
      >
        <FaFacebookF /> Facebook
      </button>

      {/* Twitter */}
      <button
        onClick={() => openPopup(shareLinks.twitter)}
        className="flex items-center gap-2 rounded-md bg-sky-500 px-4 py-2 text-white transition hover:bg-sky-600"
      >
        <FaTwitter /> Twitter
      </button>

      {/* Pinterest */}
      <button
        onClick={() => openPopup(shareLinks.pinterest)}
        className="flex items-center gap-2 rounded-md bg-red-500 px-4 py-2 text-white transition hover:bg-red-600"
      >
        <FaPinterest /> Pinterest
      </button>
    </div>
  );
};

export default ShareButtons;
