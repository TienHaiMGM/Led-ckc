import React from "react";
import Image from "next/image";

const popularPosts = [
  { title: "Mẫu bảng hiệu đẹp 2025", link: "#" },
  { title: "Bảng hiệu LED tiết kiệm điện", link: "#" },
];
const latestPosts = [
  { title: "Xu hướng quảng cáo 2025", link: "#" },
  { title: "Chất liệu làm bảng hiệu bền đẹp", link: "#" },
];

interface TabarLeftNewProps {
  tags: string[];
  hotness?: string;
}

const TabarLeftNew = ({ tags, hotness }: TabarLeftNewProps) => {
  return (
    <aside className="sticky top-20 flex max-h-screen w-full flex-col overflow-y-auto rounded-lg border-r border-gray-200 bg-white p-4 shadow-md">
      {/* 🔥 Bài Viết Nổi Bật */}
      <div className="mb-4">
        <h2 className="mb-2 text-lg font-semibold text-red-700">
          Bài Viết Nổi Bật
        </h2>
        <ul className="space-y-2">
          {popularPosts.map((post, index) => (
            <li key={index} className="cursor-pointer hover:text-blue-600">
              <a href={post.link}>{post.title}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* 🆕 Bài Viết Mới Nhất */}
      <div className="mb-4">
        <h2 className="mb-2 text-lg font-semibold text-red-700">
          Bài Viết Mới Nhất
        </h2>
        <ul className="space-y-2">
          {latestPosts.map((post, index) => (
            <li key={index} className="cursor-pointer hover:text-blue-600">
              <a href={post.link}>{post.title}</a>
            </li>
          ))}
        </ul>
      </div>
      {/* 📊 Banner Quảng Cáo */}
      <div className="mb-4">
        <Image
          src="https://res.cloudinary.com/dsyidnrat/image/upload/v1740883803/Brown_and_White_Modern_Digital_Marketing_Agency_Twitter_Post_b37rnr.png"
          alt="Quảng Cáo"
          width={500}
          height={1000}
          className="h-96"
        />
      </div>
      {/* 🔗 Tags Phổ Biến */}
      <div className="mb-4">
        <h2 className="mb-2 text-lg font-semibold text-red-700">
          Tags Phổ Biến
        </h2>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="cursor-pointer rounded border border-blue-500 px-2 py-1 text-sm text-blue-600"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default TabarLeftNew;
