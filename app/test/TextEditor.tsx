// components/AdvancedTiptapEditor.tsx
import React, { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Heading from "@tiptap/extension-heading";
import TextStyle from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Dropcursor from "@tiptap/extension-dropcursor";
import "./textEditor.css";
import Paragraph from "@tiptap/extension-paragraph";

const AdvancedTiptapEditor = () => {
  const [isHtmlView, setIsHtmlView] = useState(false);
  const [htmlContent, setHtmlContent] = useState("");

  const editor = useEditor({
    extensions: [
      StarterKit.configure({ history: { depth: 100 } }),
      Paragraph,
      Heading.configure({ levels: [1, 2, 3, 4, 5, 6] }),
      TextStyle,
      Color,
      Underline,
      Dropcursor,
      Link.configure({
        openOnClick: true,
        autolink: true,
        linkOnPaste: true,
        HTMLAttributes: {
          class: "text-blue-500 hover:underline cursor-pointer",
        },
      }),
      Image.configure({
        allowBase64: true,
        inline: false,
        HTMLAttributes: {
          class: "rounded-lg",
        },
      }).extend({
        addAttributes() {
          return {
            ...this.parent?.(),
            alt: {
              default: null,
              parseHTML: (element) => element.getAttribute("alt"),
              renderHTML: (attributes) => {
                if (!attributes.alt) return {};
                return { alt: attributes.alt };
              },
            },
            alignment: {
              default: "center",
              parseHTML: (element) => element.style.textAlign || "center",
              renderHTML: (attributes) => {
                return { style: `text-align: ${attributes.alignment}` };
              },
            },
          };
        },
      }),
    ],
    content: "<p>Bắt đầu viết nội dung tại đây...</p>",
    editorProps: {
      attributes: {
        class:
          "h-96 w-full resize-none rounded-lg border p-4 focus:ring-2 focus:ring-blue-400 ",
      },
    },
    onUpdate: ({ editor }) => setHtmlContent(editor.getHTML()),
  });

  const handleHeadingChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const level = parseInt(e.target.value);
    if (level >= 1 && level <= 6) {
      editor
        ?.chain()
        .focus()
        .toggleHeading({ level: level as any })
        .run();
    }
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const color = e.target.value;
    editor?.chain().focus().setColor(color).run();
  };

  const isValidUrl = (url: string) => {
    try {
      new URL(url);
      return true;
    } catch (_) {
      return false;
    }
  };

  const isImageUrl = (url: string) => {
    return /\.(jpeg|jpg|gif|png|webp|svg)$/i.test(url);
  };

  const insertImage = () => {
    const url = prompt("Nhập URL hình ảnh:");
    if (!url) return;

    if (!isValidUrl(url)) {
      alert(
        "URL không hợp lệ. Vui lòng nhập URL đầy đủ (bao gồm http:// hoặc https://)",
      );
      return;
    }

    if (!isImageUrl(url)) {
      alert(
        "URL không phải là hình ảnh hợp lệ. Vui lòng sử dụng ảnh có đuôi .jpg, .png, .gif, .webp hoặc .svg",
      );
      return;
    }

    const alt = prompt("Nhập mô tả (alt text) cho hình ảnh:");
    const alignment = prompt(
      "Chọn căn chỉnh hình ảnh (left, center, right):",
      "center",
    );

    if (!["left", "center", "right"].includes(alignment || "")) {
      alert("Căn chỉnh không hợp lệ. Vui lòng chọn left, center hoặc right");
      return;
    }

    // const pos = editor?.state.selection.from;
    // .setNodeSelection(pos || 0)
    editor
      ?.chain()
      .focus()
      .setImage({ src: url, alt: alt || "" })
      .updateAttributes("image", { alignment: alignment || "center" })
      .run();
  };

  const insertLink = () => {
    const url = prompt("Nhập URL liên kết:");
    if (!url) return;

    if (!isValidUrl(url)) {
      alert(
        "URL không hợp lệ. Vui lòng nhập URL đầy đủ (bao gồm http:// hoặc https://)",
      );
      return;
    }

    const text = prompt("Nhập văn bản hiển thị cho liên kết:");
    if (!text) return;

    editor
      ?.chain()
      .focus()
      .insertContent(`<a href="${url}" target="_blank">${text}</a>`)
      .run();
  };

  const alignImage = (alignment: string) => {
    if (!editor) return;

    const state = editor.state;
    const { from, to } = state.selection;
    state.doc.nodesBetween(from, to, (node: any, pos: number) => {
      if (node.type.name === "image") {
        editor
          .chain()
          .focus()
          .command(({ tr }) => {
            tr.setNodeMarkup(pos, undefined, { ...node.attrs, alignment });
            return true;
          })
          .run();
      }
    });
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        const src = reader.result;
        const alt = prompt("Nhập mô tả (alt text) cho hình ảnh:");
        const alignment = prompt(
          "Chọn căn chỉnh hình ảnh (left, center, right):",
          "center",
        );
        if (typeof src === "string") {
          const pos = editor?.state.selection.from;
          editor
            ?.chain()
            .focus()
            .setImage({ src, alt: alt || "" })
            .setNodeSelection(pos || 0)
            .updateAttributes("image", { alignment })
            .run();
        }
      };
      reader.readAsDataURL(file);
    });
  };

  return (
    <div
      className="mx-auto max-w-4xl space-y-4 rounded-2xl bg-white p-6 shadow-lg"
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      <div className="flex flex-wrap gap-4">
        <select
          onChange={handleHeadingChange}
          className="rounded-lg border bg-gray-50 p-2 focus:ring-2 focus:ring-blue-400"
        >
          <option value="1" className="text-[2em]">
            Heading 1
          </option>
          <option value="2" className="text-[1.5em]">
            Heading 2
          </option>
          <option value="3" className="text-[1.17em]">
            Heading 3
          </option>
          <option value="4" className="text-[1em]">
            Heading 4
          </option>
          <option value="5" className="text-[0.83em]">
            Heading 5
          </option>
          <option value="6" className="text-[0.67em]">
            Heading 6
          </option>
        </select>
        <button
          className="rounded-lg border bg-gray-50 p-2 focus:ring-2 focus:ring-blue-400"
          onClick={() => editor?.commands.setParagraph()}
        >
          Paragraph
        </button>
        <input
          type="color"
          onChange={handleColorChange}
          className="h-10 w-12 rounded-lg border"
          title="Chọn màu chữ"
        />

        <select
          onChange={(e) => {
            const option = e.target.value;
            if (option === "bold") {
              editor?.chain().focus().toggleBold().run();
            } else if (option === "italic") {
              editor?.chain().focus().toggleItalic().run();
            } else if (option === "underline") {
              editor?.chain().focus().toggleUnderline().run();
            }
          }}
          className="rounded-lg border bg-gray-50 p-2 focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Định dạng văn bản</option>
          <option value="bold">In đậm</option>
          <option value="italic">In nghiêng</option>
          <option value="underline">Gạch chân</option>
        </select>
        <button
          onClick={insertLink}
          className="rounded-lg bg-indigo-500 px-4 py-2 text-white hover:bg-indigo-600"
        >
          Chèn liên kết
        </button>
        <button
          onClick={insertImage}
          className="rounded-lg bg-pink-500 px-4 py-2 text-white hover:bg-pink-600"
        >
          Thêm hình ảnh
        </button>
        <select
          onChange={(e) => alignImage(e.target.value)}
          className="rounded-lg border bg-gray-50 p-2 focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Căn chỉnh</option>
          <option value="left">Căn trái</option>
          <option value="center">Căn giữa</option>
          <option value="right">Căn phải</option>
        </select>
        <button
          onClick={() => editor?.chain().focus().undo().run()}
          className="rounded-lg bg-gray-500 px-4 py-2 text-white hover:bg-gray-600"
        >
          Undo
        </button>
        <button
          onClick={() => editor?.chain().focus().redo().run()}
          className="rounded-lg bg-gray-800 px-4 py-2 text-white hover:bg-gray-900"
        >
          Redo
        </button>
        <button
          onClick={() => setIsHtmlView(!isHtmlView)}
          className="rounded-lg bg-purple-500 px-4 py-2 text-white hover:bg-purple-600"
        >
          {isHtmlView ? "Chế độ chỉnh sửa" : "Chế độ xem HTML"}
        </button>
      </div>

      {isHtmlView ? (
        <textarea
          value={htmlContent}
          onChange={(e) => {
            setHtmlContent(e.target.value);
            editor?.commands.setContent(e.target.value, false);
          }}
          className="h-80 w-full rounded-lg border p-4 focus:ring-2 focus:ring-blue-400"
        />
      ) : (
        <EditorContent
          editor={editor}
          className="min-h-[300px] rounded-lg border p-4 focus:ring-2 focus:ring-blue-400"
        />
      )}
    </div>
  );
};

export default AdvancedTiptapEditor;
