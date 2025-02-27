// components/RichTextEditor.tsx
"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import TextStyle from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";
import Heading from "@tiptap/extension-heading";
import { FC, useEffect, useRef, useState } from "react";
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
import { HeadingID } from "./headingExtention";
// Bảng màu
const colorPalette = [
  "#FF0000",
  "#00FF00",
  "#0000FF",
  "#FFFF00",
  "#FF00FF",
  "#00FFFF",
  "#000000",
  "#FFFFFF",
  "#808080",
  "#FFA500",
  "#800080",
  "#008000",
];
// Font-size
const fontSizes = ["16px", "18px", "20px", "24px", "30px", "36px"];

interface RichTextEditorProps {
  initialValue?: string;
  onChange?: (content: string) => void;
}
const RichTextEditor: FC<RichTextEditorProps> = ({
  onChange,
  initialValue = "",
}) => {
  const [isFormattingDropdownOpen, setFormattingDropdownOpen] = useState(false);
  const [isImageDropdownOpen, setImageDropdownOpen] = useState(false);
  const [isStructureDropdownOpen, setStructureDropdownOpen] = useState(false);
  const [isColorDropdownOpen, setColorDropdownOpen] = useState(false);
  const [isFontSizeDropdownOpen, setFontSizeDropdownOpen] = useState(false);
  const [isAlignmentDropdownOpen, setAlignmentDropdownOpen] = useState(false);
  const [isItemDropdownOpen, setItemDropdownOpen] = useState(false);
  const [showHtml, setShowHtml] = useState(false);
  const [htmlContent, setHtmlContent] = useState(initialValue);
  const [url, setUrl] = useState("");
  const [alt, setAlt] = useState("");
  const [width, setWidth] = useState("300px");
  const [height, setHeight] = useState("auto");
  const [caption, setCaption] = useState("");
  const [alignment, setAlignment] = useState<"left" | "center" | "right">(
    "center",
  );
  const editorRef = useRef<HTMLDivElement>(null);
  const [content, setContent] = useState("");
  const [headings, setHeadings] = useState<
    { id: string; text: string; level: number }[]
  >([]);

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
      HeadingID, // Thêm extension mới
      Heading.configure({ levels: [1, 2, 3, 4, 5, 6] }),
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Focus.configure({ className: "has-focus", mode: "all" }),
    ],
    autofocus: true,
    content: htmlContent,
    editorProps: {
      attributes: {
        class: "h-96 w-full resize-y rounded-lg p-4 overflow-scroll",
      },
    },
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      // Lấy danh sách các heading đã có trong editor
      const json = editor.getJSON();
      const newHeadings: { id: string; text: string; level: number }[] = [];
      let headingsChanged = false;

      const extractHeadings = (node: any) => {
        // Bỏ qua node TOC để không trích xuất TOC từ nội dung
        if (node.type === "tableOfContent") return;
        if (node.type === "heading") {
          // Đảm bảo mỗi heading đã có ID, nếu chưa có thì tạo mới
          if (!node.attrs.id) {
            node.attrs.id = uuidv4();
            headingsChanged = true;
          }

          const text = Array.isArray(node.content)
            ? node.content.map((n: any) => n.text).join("")
            : "";

          newHeadings.push({
            id: node.attrs.id,
            text,
            level: node.attrs.level,
          });
        }
        if (Array.isArray(node.content)) node.content.forEach(extractHeadings);
      };

      if (Array.isArray(json.content)) json.content.forEach(extractHeadings);

      // Nếu có heading nào chưa có ID và đã được gán ID mới
      if (headingsChanged) {
        // Cập nhật lại toàn bộ nội dung editor để áp dụng ID mới
        editor.commands.setContent(json);
      }

      setHeadings(newHeadings);
      onChange?.(editor.getHTML());
      const html = editor.getHTML();
      setHtmlContent(html); // Giữ state nội bộ
      if (onChange) {
        onChange(html); // Gửi dữ liệu ra ngoài component cha
      }
    },
    onSelectionUpdate: ({ editor }) => {
      const { node } = editor.state.selection as any;
      if (node?.type?.name === "resizableImage") {
        setWidth(node.attrs.width || "300px");
        setHeight(node.attrs.height || "auto");
        setAlignment(node.attrs.alignment || "center");
        setAlt(node.attrs.alt || "");
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

  const handleUpdateImageAttrs = () => {
    editor?.chain().focus().updateImageAttrs({ width, height, caption }).run();
  };

  const handleAlignmentChange = (newAlignment: "left" | "center" | "right") => {
    setAlignment(newAlignment);
    editor?.chain().focus().updateImageAttrs({ alignment: newAlignment }).run();
  };

  const applyHeadingToSelection = (level: number) => {
    const { from, to } = editor.state.selection;
    if (from === to) {
      alert("Please select text to apply the heading.");
      return;
    }
    editor.chain().focus().toggleHeading({ level: 1 }).run();
  };

  const changeTextColor = (color: string) => {
    editor.chain().focus().setColor(color).run();
  };

  const changeHighlightColor = (color: string) => {
    editor.chain().focus().toggleHighlight({ color: color }).run();
  };

  const toggleHtmlView = () => {
    if (showHtml && htmlContent !== editor.getHTML()) {
      editor.commands.setContent(htmlContent, false);
    }
    setShowHtml(!showHtml);
  };
  const addLink = () => {
    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("Enter the URL", previousUrl);
    if (url === null) return;
    if (url === "") {
      editor.chain().focus().unsetLink().run();
      return;
    }
    editor.chain().focus().setLink({ href: url }).run();
  };
  const handleFontSizeChange = (size: string) => {
    if (editor) editor.chain().focus().setFontSize(size).run();
  };

  const handleInput = () => {
    if (editorRef.current) {
      const newContent = editorRef.current.innerHTML;

      if (onChange) {
        onChange(newContent);
      }
    }
  };

  const handleSourceInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newContent = e.target.value;
    setContent(newContent);
    if (onChange) {
      onChange(newContent);
    }
  };

  return (
    <div className="rounded-sm border shadow-sm">
      <div className="p-2flex sticky top-0 z-10 flex flex-wrap gap-1 rounded-t-lg border-b border-slate-200 bg-slate-50 p-2">
        <div className="relative flex gap-1">
          {/* Text Formatting */}
          <div className="relative">
            <div
              onMouseEnter={() =>
                setFormattingDropdownOpen(!isFormattingDropdownOpen)
              }
              className="h-8 cursor-pointer items-center justify-center whitespace-nowrap rounded border border-slate-200 bg-white p-1 text-sm text-gray-700 transition-all duration-150 ease-in-out"
              onMouseLeave={() => setFormattingDropdownOpen(false)}
            >
              Formatting ▼
              {isFormattingDropdownOpen && (
                <div className="absolute z-10 grid space-y-2 rounded-lg border bg-white p-2 shadow-lg">
                  <button
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    className={`inline-flex h-8 cursor-pointer items-center justify-center whitespace-nowrap rounded border border-slate-200 bg-white px-3 text-sm text-gray-700 transition-all duration-150 ease-in-out ${editor.isActive("bold") ? "bg-gray-300" : ""}`}
                  >
                    <b>Bold</b>
                  </button>
                  <button
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    className={`inline-flex h-8 cursor-pointer items-center justify-center whitespace-nowrap rounded border border-slate-200 bg-white px-3 text-sm text-gray-700 transition-all duration-150 ease-in-out ${editor.isActive("italic") ? "bg-gray-300" : ""}`}
                  >
                    <i>Italic</i>
                  </button>
                  <button
                    onClick={() =>
                      editor.chain().focus().toggleUnderline().run()
                    }
                    className={`inline-flex h-8 cursor-pointer items-center justify-center whitespace-nowrap rounded border border-slate-200 bg-white px-3 text-sm text-gray-700 transition-all duration-150 ease-in-out ${editor.isActive("underline") ? "bg-gray-300" : ""}`}
                  >
                    <u>Underline</u>
                  </button>
                  <button
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    className={`inline-flex h-8 cursor-pointer items-center justify-center whitespace-nowrap rounded border border-slate-200 bg-white px-3 text-sm text-gray-700 transition-all duration-150 ease-in-out ${editor.isActive("strike") ? "bg-gray-300" : ""}`}
                  >
                    <s>Strike</s>
                  </button>
                  <button
                    onClick={() =>
                      editor.chain().focus().toggleSubscript().run()
                    }
                    className={`inline-flex h-8 cursor-pointer items-center justify-center whitespace-nowrap rounded border border-slate-200 bg-white px-3 text-sm text-gray-700 transition-all duration-150 ease-in-out ${editor.isActive("subscript") ? "bg-gray-300" : ""}`}
                  >
                    <sub>Subscript</sub>
                  </button>
                  <button
                    onClick={() =>
                      editor.chain().focus().toggleSuperscript().run()
                    }
                    className={`inline-flex h-8 cursor-pointer items-center justify-center whitespace-nowrap rounded border border-slate-200 bg-white px-3 text-sm text-gray-700 transition-all duration-150 ease-in-out ${editor.isActive("superscript") ? "bg-gray-300" : ""}`}
                  >
                    <sup>Superscript</sup>
                  </button>
                </div>
              )}
            </div>
          </div>
          {/* Font-size */}
          <div className="relative">
            <div
              onMouseEnter={() =>
                setFontSizeDropdownOpen(!isFontSizeDropdownOpen)
              }
              className="h-8 cursor-pointer items-center justify-center whitespace-nowrap rounded border border-slate-200 bg-white p-1 text-sm text-gray-700 transition-all duration-150 ease-in-out"
              onMouseLeave={() => setFontSizeDropdownOpen(false)}
            >
              Font Size ▼
              {isFontSizeDropdownOpen && (
                <div className="absolute z-10 grid rounded-lg border bg-white p-3 shadow-lg">
                  {fontSizes.map((size) => (
                    <button
                      key={size}
                      className="cursor-pointer rounded border p-2"
                      onClick={() => handleFontSizeChange(size)}
                      title={`Font-size: ${size}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          {/* Structure */}
          <div className="relative">
            <div
              onMouseEnter={() =>
                setStructureDropdownOpen(!isStructureDropdownOpen)
              }
              className="h-8 cursor-pointer items-center justify-center whitespace-nowrap rounded border border-slate-200 bg-white p-1 text-sm text-gray-700 transition-all duration-150 ease-in-out"
              onMouseLeave={() => setStructureDropdownOpen(false)}
            >
              Structure ▼
              {isStructureDropdownOpen && (
                <div className="absolute z-10 grid space-y-2 rounded-lg border bg-white p-2 shadow-lg">
                  <button
                    onClick={() => editor.chain().focus().setParagraph().run()}
                    className={`inline-flex h-8 cursor-pointer items-center justify-center whitespace-nowrap rounded border border-slate-200 bg-white px-3 text-sm text-gray-700 transition-all duration-150 ease-in-out ${editor.isActive("paragraph") ? "bg-gray-300" : ""}`}
                  >
                    Paragraph
                  </button>
                  {[1, 2, 3, 4, 5, 6].map((level) => (
                    <button
                      key={level}
                      onClick={() => applyHeadingToSelection(level)}
                      className={`inline-flex h-8 cursor-pointer items-center justify-center whitespace-nowrap rounded border border-slate-200 bg-white px-3 text-sm text-gray-700 transition-all duration-150 ease-in-out ${editor.isActive("heading", { level }) ? "bg-gray-300" : ""}`}
                    >
                      H{level}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Colors */}
          <div className="relative">
            <div
              onMouseEnter={() => setColorDropdownOpen(!isColorDropdownOpen)}
              className="h-8 cursor-pointer items-center justify-center whitespace-nowrap rounded border border-slate-200 bg-white p-1 text-sm text-gray-700 transition-all duration-150 ease-in-out"
              onMouseLeave={() => setColorDropdownOpen(false)}
            >
              Colors ▼
              {isColorDropdownOpen && (
                <div className="absolute z-10 grid grid-cols-6 gap-5 rounded-lg border bg-white p-4 shadow-lg">
                  {colorPalette.map((color) => (
                    <div
                      key={color}
                      className="h-8 w-8 cursor-pointer rounded border"
                      style={{ backgroundColor: color }}
                      onClick={() => changeTextColor(color)}
                      title={`Text color: ${color}`}
                    />
                  ))}
                  <p className="col-span-6 mt-2 text-sm font-semibold">
                    Highlight:
                  </p>
                  {colorPalette.map((color) => (
                    <div
                      key={`bg-${color}`}
                      className="h-8 w-8 cursor-pointer rounded border"
                      style={{ backgroundColor: color }}
                      onClick={() => changeHighlightColor(color)}
                      title={`Highlight: ${color}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Align Text */}
          <div className="relative">
            <div
              onMouseEnter={() =>
                setAlignmentDropdownOpen(!isAlignmentDropdownOpen)
              }
              className="h-8 cursor-pointer items-center justify-center whitespace-nowrap rounded border border-slate-200 bg-white p-1 text-sm text-gray-700 transition-all duration-150 ease-in-out"
              onMouseLeave={() => setAlignmentDropdownOpen(false)}
            >
              Align Text ▼
              {isAlignmentDropdownOpen && (
                <div className="absolute z-10 grid space-y-2 rounded-lg border bg-white p-2 shadow-lg">
                  <button
                    onClick={() =>
                      editor.chain().focus().setTextAlign("left").run()
                    }
                    className={`inline-flex h-8 cursor-pointer items-center justify-center whitespace-nowrap rounded border border-slate-200 bg-white px-3 text-sm text-gray-700 transition-all duration-150 ease-in-out ${editor.isActive("left") ? "bg-gray-300" : ""}`}
                  >
                    Left
                  </button>
                  <button
                    onClick={() =>
                      editor.chain().focus().setTextAlign("center").run()
                    }
                    className={`inline-flex h-8 cursor-pointer items-center justify-center whitespace-nowrap rounded border border-slate-200 bg-white px-3 text-sm text-gray-700 transition-all duration-150 ease-in-out ${editor.isActive("center") ? "bg-gray-300" : ""}`}
                  >
                    Center
                  </button>
                  <button
                    onClick={() =>
                      editor.chain().focus().setTextAlign("right").run()
                    }
                    className={`inline-flex h-8 cursor-pointer items-center justify-center whitespace-nowrap rounded border border-slate-200 bg-white px-3 text-sm text-gray-700 transition-all duration-150 ease-in-out ${editor.isActive("right") ? "bg-gray-300" : ""}`}
                  >
                    Right
                  </button>
                  <button
                    onClick={() =>
                      editor.chain().focus().setTextAlign("justify").run()
                    }
                    className={`inline-flex h-8 cursor-pointer items-center justify-center whitespace-nowrap rounded border border-slate-200 bg-white px-3 text-sm text-gray-700 transition-all duration-150 ease-in-out ${editor.isActive("justify") ? "bg-gray-300" : ""}`}
                  >
                    Justify
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* List */}
          <div className="relative">
            <div
              onMouseEnter={() => setItemDropdownOpen(!isItemDropdownOpen)}
              className="h-8 cursor-pointer items-center justify-center whitespace-nowrap rounded border border-slate-200 bg-white p-1 text-sm text-gray-700 transition-all duration-150 ease-in-out"
              onMouseLeave={() => setItemDropdownOpen(false)}
            >
              List▼
              {isItemDropdownOpen && (
                <div className="absolute z-10 grid space-y-2 rounded-lg border bg-white p-2 shadow-lg">
                  <button
                    onClick={() =>
                      editor.chain().focus().toggleBulletList().run()
                    }
                    className={`inline-flex h-8 cursor-pointer items-center justify-center whitespace-nowrap rounded border border-slate-200 bg-white px-3 text-sm text-gray-700 transition-all duration-150 ease-in-out${editor.isActive("bulletList") ? "is-active" : ""}`}
                  >
                    Bullet list
                  </button>
                  <button
                    onClick={() =>
                      editor.chain().focus().toggleOrderedList().run()
                    }
                    className={`inline-flex h-8 cursor-pointer items-center justify-center whitespace-nowrap rounded border border-slate-200 bg-white px-3 text-sm text-gray-700 transition-all duration-150 ease-in-out${editor.isActive("orderedList") ? "is-active" : ""}`}
                  >
                    Ordered list
                  </button>
                  <button
                    onClick={() =>
                      editor.chain().focus().splitListItem("listItem").run()
                    }
                    className={`inline-flex h-8 cursor-pointer items-center justify-center whitespace-nowrap rounded border border-slate-200 bg-white px-3 text-sm text-gray-700 transition-all duration-150 ease-in-out${editor.isActive("listItem") ? "is-active" : ""}`}
                  >
                    List item
                  </button>
                </div>
              )}
            </div>
          </div>
          {/* Link */}
          <div className="relative">
            <button
              onClick={addLink}
              className="inline-flex h-8 cursor-pointer items-center justify-center whitespace-nowrap rounded border border-slate-200 bg-white px-3 text-sm text-gray-700 transition-all duration-150 ease-in-out"
            >
              Link
            </button>
          </div>

          {/* Switch to HTML */}
          <div className="relative">
            <button
              onClick={toggleHtmlView}
              className="inline-flex h-8 cursor-pointer items-center justify-center whitespace-nowrap rounded border border-slate-200 bg-white px-3 text-sm text-gray-700 transition-all duration-150 ease-in-out"
            >
              {showHtml ? "Switch to Editor" : "Switch to HTML"}
            </button>
          </div>
          {/* Upload Image */}
          <button
            onClick={() => setImageDropdownOpen(!isImageDropdownOpen)}
            className="inline-flex h-8 cursor-pointer items-center justify-center whitespace-nowrap rounded border border-slate-200 bg-white px-3 text-sm text-gray-700 transition-all duration-150 ease-in-out"
          >
            📷 Thêm hình ảnh
          </button>

          {isImageDropdownOpen && (
            <div className="absolute left-3/4 top-3/4 w-80 rounded-lg border bg-white p-3 shadow">
              <input
                type="text"
                placeholder="🔗 URL hình ảnh"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="mb-2 w-full rounded border p-1"
              />
              <input
                type="text"
                placeholder="Caption"
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
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

              <div className="mb-3 flex justify-between">
                {["left", "center", "right"].map((pos) => (
                  <button
                    key={pos}
                    onClick={() =>
                      handleAlignmentChange(pos as "left" | "center" | "right")
                    }
                    className={`rounded p-2 ${
                      alignment === pos
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    {pos === "left"
                      ? "⬅️ Trái"
                      : pos === "center"
                        ? "🏳️ Giữa"
                        : "➡️ Phải"}
                  </button>
                ))}
              </div>
              <button
                onClick={handleSetImage}
                className="inline-flex h-8 cursor-pointer items-center justify-center whitespace-nowrap rounded border border-slate-200 bg-white px-3 text-sm text-gray-700 transition-all duration-150 ease-in-out"
              >
                Thêm hình ảnh
              </button>
              <button
                onClick={handleUpdateImageAttrs}
                className="inline-flex h-8 cursor-pointer items-center justify-center whitespace-nowrap rounded border border-slate-200 bg-white px-3 text-sm text-gray-700 transition-all duration-150 ease-in-out"
              >
                Cập nhật hình ảnh
              </button>
            </div>
          )}
        </div>
      </div>
      {showHtml ? (
        <textarea
          value={htmlContent}
          onChange={handleSourceInput}
          onBlur={() => editor.commands.setContent(htmlContent, false)}
          className="h-96 w-full resize-y overflow-scroll rounded-lg p-4"
        />
      ) : (
        <EditorContent
          editor={editor}
          ref={editorRef}
          onInput={handleInput}
          className=""
          suppressContentEditableWarning={true}
        />
      )}
    </div>
  );
};

export default RichTextEditor;
function uuidv4(): any {
  throw new Error("Function not implemented.");
}
