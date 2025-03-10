// components/TableOfContent.tsx
import React, { useEffect, useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentProps {
  content: string; // Nội dung HTML dưới dạng string
}

const TableOfContent: React.FC<TableOfContentProps> = ({ content }) => {
  const [tocItems, setTocItems] = useState<TocItem[]>([]);
  const [isToc, setIsToc] = useState<Boolean>(false);

  useEffect(() => {
    // Sử dụng DOMParser để chuyển đổi chuỗi HTML thành document
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, "text/html");
    // Lấy tất cả các thẻ heading từ h1 đến h6
    const headings = Array.from(doc.querySelectorAll("h1, h2, h3, h4, h5, h6"));

    const items: TocItem[] = headings.map((heading) => {
      let id = heading.getAttribute("id") || "";
      // Nếu không có id, tự động tạo id dựa trên nội dung heading
      if (!id) {
        id =
          heading.textContent?.trim().replace(/\s+/g, "-").toLowerCase() || "";
        heading.setAttribute("id", id);
      }
      const level = parseInt(heading.tagName.substring(1), 10);
      return {
        id,
        text: heading.textContent || "",
        level,
      };
    });

    setTocItems(items);
  }, [content]);

  // Hàm để trả về lớp margin-left theo cấp độ heading
  const marginClass = (level: number) => {
    switch (level) {
      case 1:
        return "ml-0";
      case 2:
        return "ml-4 list-none";
      case 3:
        return "ml-8";
      case 4:
        return "ml-12";
      case 5:
        return "ml-16";
      case 6:
        return "ml-20";
      default:
        return "ml-0";
    }
  };

  return (
    <section className="">
      <nav className="prose prose-custome order-2 rounded-lg bg-gray-100 p-2 leading-normal shadow-lg">
        <div
          className="-mt-10 flex hover:cursor-pointer active:text-red-600"
          onClick={() => setIsToc(!isToc)}
        >
          <h2 className="mb-2 text-2xl font-semibold">📚 Mục Lục</h2>
          {isToc ? (
            <FaArrowUp className="relative left-2 top-[3.4rem] text-xl"></FaArrowUp>
          ) : (
            <FaArrowDown className="relative left-2 top-[3.4rem] text-xl"></FaArrowDown>
          )}
        </div>
        {isToc && (
          <ul className="list-inside text-gray-700">
            {tocItems.map((item) => (
              <li key={item.id} className={`${marginClass(item.level)} `}>
                <a
                  href={`#${item.id}`}
                  className="no-underline hover:underline"
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </section>
  );
};

export default TableOfContent;
