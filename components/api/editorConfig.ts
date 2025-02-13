import { UnprivilegedEditor } from "react-quill";

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
      ["clean"],
    ],
    handlers: {
      image: function () {
        const input = document.createElement("input");
        input.setAttribute("type", "file");
        input.setAttribute("accept", "image/*");
        input.click();

        input.onchange = async () => {
          const file = input.files?.[0];
          if (file) {
            const url = URL.createObjectURL(file);
            const range = this.quill.getSelection(true);
            this.quill.insertEmbed(range.index, "image", url);
          }
        };
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
};
