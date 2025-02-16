import { UnprivilegedEditor } from "react-quill";
import Quill from "quill";

interface CustomHandler {
  quill: Quill;
}

export const modules = {
  toolbar: {
    container: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ size: ["small", false, "large", "huge"] }],
      [{ font: [] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ align: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }],
      ["blockquote", "code-block"],
      ["link", "image", "video"],
      [{ imageSize: ["25%", "50%", "75%", "100%"] }],
      [{ imageFloat: ["left", "center", "right"] }],
      ["clean"],
    ],
    handlers: {
      image: function (this: CustomHandler) {
        const input = document.createElement("input");
        input.setAttribute("type", "file");
        input.setAttribute("accept", "image/*");
        input.click();

        input.onchange = async () => {
          const file = input.files?.[0];
          if (file) {
            try {
              // Read the file as base64
              const reader = new FileReader();
              reader.onload = (e) => {
                const base64String = e.target?.result as string;
                // Insert the actual image data into the editor
                const range = this.quill.getSelection(true);
                this.quill.insertEmbed(range.index, "image", base64String);
              };
              reader.readAsDataURL(file);
            } catch (error) {
              console.error("Error processing image:", error);
              alert("Failed to process image. Please try again.");
            }
          }
        };
      },
      imageSize: function (this: CustomHandler, value: string) {
        const range = this.quill.getSelection();
        if (range) {
          const format = this.quill.getFormat(range);
          if (format.image) {
            const img = this.quill.container.querySelector(
              'img[src="' + format.image + '"]',
            ) as HTMLImageElement;
            if (img) {
              img.style.width = value;
            }
          }
        }
      },
      imageFloat: function (this: CustomHandler, value: string) {
        const range = this.quill.getSelection();
        if (range) {
          const format = this.quill.getFormat(range);
          if (format.image) {
            const img = this.quill.container.querySelector(
              'img[src="' + format.image + '"]',
            ) as HTMLImageElement;
            if (img) {
              img.style.float = value === "center" ? "none" : value;
              img.style.display = value === "center" ? "block" : "inline";
              img.style.margin = value === "center" ? "0 auto" : "0";
            }
          }
        }
      },
    },
  },
  clipboard: {
    matchVisual: false,
  },
};

export const formats = [
  "header",
  "size",
  "font",
  "bold",
  "italic",
  "underline",
  "strike",
  "color",
  "background",
  "align",
  "list",
  "bullet",
  "indent",
  "blockquote",
  "code-block",
  "link",
  "image",
  "video",
  "imageSize",
  "imageFloat",
];

export const toolbarTooltips: Record<string, string> = {
  header: "Kiểu tiêu đề",
  size: "Cỡ chữ",
  font: "Font chữ",
  bold: "In đậm",
  italic: "In nghiêng",
  underline: "Gạch chân",
  strike: "Gạch ngang",
  color: "Màu chữ",
  background: "Màu nền",
  align: "Căn lề",
  list: "Danh sách",
  bullet: "Danh sách không thứ tự",
  indent: "Thụt lề",
  blockquote: "Trích dẫn",
  "code-block": "Mã nguồn",
  link: "Chèn liên kết",
  image: "Chèn ảnh",
  video: "Chèn video",
  clean: "Xóa định dạng",
  imageSize: "Kích thước ảnh",
  imageFloat: "Căn lề ảnh",
};
