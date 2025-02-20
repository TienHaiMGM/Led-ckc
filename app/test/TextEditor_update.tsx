// components/RichTextEditor.tsx
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import TextStyle from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";
import Heading from "@tiptap/extension-heading";
import { FC, useState } from "react";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import ListItem from "@tiptap/extension-list-item";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import Highlight from "@tiptap/extension-highlight";
import Document from "@tiptap/extension-document";
import Focus from "@tiptap/extension-focus";
import Text from "@tiptap/extension-text";
import { FontSize } from "@/lib/FontSize";
import { ResizableImage } from "@/lib/ResizableImage_update";
import "./textEditor.css";

const RichTextEditor: FC = () => {
  const [isImageDropdownOpen, setImageDropdownOpen] = useState(false);
  const [showHtml, setShowHtml] = useState(false);
  const [htmlContent, setHtmlContent] = useState("");
  const [url, setUrl] = useState("");
  const [alt, setAlt] = useState("");
  const [width, setWidth] = useState("300px");
  const [height, setHeight] = useState("auto");
  const [caption, setCaption] = useState("");
  const [alignment, setAlignment] = useState<"left" | "center" | "right">(
    "center",
  );

  const editor = useEditor({
    extensions: [
      FontSize,
      ResizableImage,
      StarterKit,
      Document,
      Text,
      Underline,
      TextStyle,
      Subscript,
      Superscript,
      BulletList,
      OrderedList,
      ListItem,
      Color.configure({ types: ["textStyle"] }),
      Highlight.configure({ multicolor: true }),
      Link.configure({
        linkOnPaste: false,
        autolink: false,
        openOnClick: true,
        HTMLAttributes: { class: "text-blue-500 underline cursor-pointer" },
      }),
      Heading.configure({ levels: [1, 2, 3, 4, 5, 6] }),
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Focus.configure({ className: "has-focus", mode: "all" }),
    ],
    autofocus: true,
    content: "<p>Welcome to the complete rich text editor!</p>",
    onUpdate: ({ editor }) => setHtmlContent(editor.getHTML()),
    onSelectionUpdate: ({ editor }) => {
      const { node } = editor.state.selection as any;
      if (node?.type?.name === "resizableImage") {
        setWidth(node.attrs.width || "300px");
        setHeight(node.attrs.height || "auto");
        setAlignment(node.attrs.alignment || "center");
        setCaption(node.attrs.caption || "");
      }
    },
  });

  if (!editor) return null;

  const handleSetImage = () => {
    if (!url.trim()) {
      alert("Vui lòng nhập URL hình ảnh.");
      return;
    }
    editor
      ?.chain()
      .focus()
      .setImage({ src: url, alt, width, height, alignment, caption })
      .run();

    setUrl("");
    setAlt("");
    setCaption("");
    setWidth("300px");
    setHeight("auto");
    setAlignment("center");
    setImageDropdownOpen(false);
  };

  const handleCaptionChange = () => {
    editor?.chain().focus().updateImageAttrs({ caption }).run();
  };

  return (
    <div className="h-full w-full rounded-lg">
      <div className="sticky top-0 flex flex-wrap gap-1 border-b border-slate-200 bg-slate-50 p-2">
        <button
          onClick={() => setImageDropdownOpen(!isImageDropdownOpen)}
          className="rounded bg-green-500 p-2 text-white"
        >
          📷 Thêm hình ảnh
        </button>

        {isImageDropdownOpen && (
          <div className="w-80 rounded-lg border bg-white p-3 shadow">
            <input
              type="text"
              placeholder="🔗 URL hình ảnh"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="mb-2 w-full rounded border p-1"
            />
            <input
              type="text"
              placeholder="📝 Alt text"
              value={alt}
              onChange={(e) => setAlt(e.target.value)}
              className="mb-2 w-full rounded border p-1"
            />
            <input
              type="text"
              placeholder="🖋️ Caption"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              className="mb-2 w-full rounded border p-1"
            />
            <input
              type="text"
              placeholder="📏 Width (px/%)"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
              className="mb-2 w-full rounded border p-1"
            />
            <input
              type="text"
              placeholder="📐 Height (px/auto)"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="mb-2 w-full rounded border p-1"
            />
            <button
              onClick={handleSetImage}
              className="w-full rounded bg-blue-600 p-2 text-white"
            >
              ➕ Thêm hình ảnh
            </button>
          </div>
        )}
      </div>

      {showHtml ? (
        <textarea
          value={htmlContent}
          onChange={(e) => setHtmlContent(e.target.value)}
          className="h-52 w-full resize-y rounded-lg p-4"
        />
      ) : (
        <EditorContent editor={editor} className="prose max-w-none" />
      )}

      {/* Khu vực chỉnh sửa caption */}
      <div className="mt-3 rounded-lg bg-gray-50 p-2">
        <input
          type="text"
          placeholder="✏️ Cập nhật Caption cho ảnh"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          className="w-full rounded border p-2"
        />
        <button
          onClick={handleCaptionChange}
          className="mt-2 w-full rounded bg-blue-600 p-2 text-white"
        >
          💾 Lưu Caption
        </button>
      </div>
    </div>
  );
};

export default RichTextEditor;
