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
import { FC, useRef, useState, useCallback, useEffect } from "react";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import ListItem from "@tiptap/extension-list-item";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import Highlight from "@tiptap/extension-highlight";
import Document from "@tiptap/extension-document";
import Focus from "@tiptap/extension-focus";
import Text from "@tiptap/extension-text";
import Table from "@tiptap/extension-table";
import TableRow from "@tiptap/extension-table-row";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import { FontSize } from "@/lib/FontSize";
import { ResizableImage } from "@/lib/ResizableImage_update";
import Placeholder from "@tiptap/extension-placeholder";
import "./textEditor.css";
import { HeadingID } from "./headingExtention";
import React from "react";

// Color palette
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

// Font sizes
const fontSizes = ["16px", "18px", "20px", "24px", "30px", "36px"];

interface RichTextEditorProps {
  initialValue?: string;
  onChange?: (content: string) => void;
}

// Helper function to generate UUID outside component
function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

// Type for dropdown state
type DropdownState = {
  formatting: boolean;
  fontSize: boolean;
  structure: boolean;
  color: boolean;
  alignment: boolean;
  item: boolean;
  image: boolean;
  table: boolean;
  link: boolean;
};

const RichTextEditor: FC<RichTextEditorProps> = React.memo(
  ({ onChange, initialValue = "" }) => {
    // Consolidated dropdown state
    const [dropdowns, setDropdowns] = useState<DropdownState>({
      formatting: false,
      fontSize: false,
      structure: false,
      color: false,
      alignment: false,
      item: false,
      image: false,
      table: false,
      link: false,
    });

    // Other state variables
    const [url, setUrl] = useState("");
    const [showHtml, setShowHtml] = useState(false);
    const [htmlContent, setHtmlContent] = useState(initialValue);
    const [imageAttrs, setImageAttrs] = useState({
      url: "",
      alt: "",
      width: "800px",
      height: "auto",
      caption: "",
      alignment: "center" as "left" | "center" | "right",
    });

    const editorRef = useRef<HTMLDivElement>(null);
    const [headings, setHeadings] = useState<
      { id: string; text: string; level: number }[]
    >([]);

    // Consolidated dropdown toggle handler
    const toggleDropdown = useCallback(
      (name: keyof DropdownState, value?: boolean) => {
        setDropdowns((prev) => ({
          ...prev,
          [name]: value !== undefined ? value : !prev[name],
        }));
      },
      [],
    );

    // Memoized image attribute updater
    const updateImageAttr = useCallback(
      (key: keyof typeof imageAttrs, value: string) => {
        setImageAttrs((prev) => ({ ...prev, [key]: value }));
      },
      [],
    );

    // Editor hooks and initialization
    const editor = useEditor({
      extensions: [
        FontSize,
        ResizableImage,
        StarterKit,
        Table.configure({
          // Tùy chỉnh: ví dụ, cho phép chỉnh kích thước bảng
          resizable: false,
        }),
        TableRow,
        TableCell,
        TableHeader,
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
        HeadingID,
        Heading.configure({ levels: [1, 2, 3, 4, 5, 6] }),
        TextAlign.configure({ types: ["heading", "paragraph"] }),
        Focus.configure({ className: "has-focus", mode: "all" }),
      ],
      autofocus: false,
      content: htmlContent,
      immediatelyRender: false, // Giải quyết lỗi SSR
      editorProps: {
        attributes: {
          class: "h-96 w-full resize-y rounded-lg p-4 overflow-scroll",
        },
      },
      onUpdate: ({ editor }) => {
        // Get and parse editor content
        const json = editor.getJSON();
        const newHeadings: { id: string; text: string; level: number }[] = [];
        let headingsChanged = false;

        const extractHeadings = (node: any) => {
          if (node.type === "heading") {
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
          if (Array.isArray(node.content))
            node.content.forEach(extractHeadings);
        };

        if (Array.isArray(json.content)) json.content.forEach(extractHeadings);

        setHeadings(newHeadings);
        const html = editor.getHTML();

        // Batch state updates
        if (html !== htmlContent) {
          setHtmlContent(html);
          if (onChange) {
            onChange(html);
          }
        }
      },
      onSelectionUpdate: ({ editor }) => {
        const { node } = editor.state.selection as any;
        if (node?.type?.name === "resizableImage") {
          setImageAttrs({
            url: "",
            alt: node.attrs.alt || "",
            width: node.attrs.width || "800px",
            height: node.attrs.height || "auto",
            caption: node.attrs.caption || "",
            alignment: node.attrs.alignment || "center",
          });
        }
      },
    });
    // Memoized handlers
    const handleSetImage = useCallback(() => {
      if (!editor || !imageAttrs.url.trim()) {
        alert("Please enter an image URL.");
        return;
      }

      editor
        .chain()
        .focus()
        .setImage({
          src: imageAttrs.url,
          alt: imageAttrs.alt,
          width: imageAttrs.width,
          height: imageAttrs.height,
          alignment: imageAttrs.alignment,
          caption: imageAttrs.caption,
        })
        .run();

      // Reset image attributes
      setImageAttrs({
        url: "",
        alt: "",
        width: "800px",
        height: "auto",
        caption: "",
        alignment: "center",
      });

      toggleDropdown("image", false);
    }, [editor, imageAttrs, toggleDropdown]);

    const handleUpdateImageAttrs = useCallback(() => {
      if (!editor) return;

      editor
        .chain()
        .focus()
        .updateImageAttrs({
          width: imageAttrs.width,
          height: imageAttrs.height,
          caption: imageAttrs.caption,
        })
        .run();
    }, [editor, imageAttrs]);

    const handleAlignmentChange = useCallback(
      (newAlignment: "left" | "center" | "right") => {
        setImageAttrs((prev) => ({ ...prev, alignment: newAlignment }));

        if (editor) {
          editor
            .chain()
            .focus()
            .updateImageAttrs({ alignment: newAlignment })
            .run();
        }
      },
      [editor],
    );

    const applyHeadingToSelection = useCallback(
      (level: "1" | "2" | "3" | "4" | "5" | "6") => {
        if (!editor) return;

        const { from, to } = editor.state.selection;
        if (from === to) {
          alert("Please select text to apply the heading.");
          return;
        }

        editor.chain().focus().toggleHeading({ level }).run();
      },
      [editor],
    );

    const changeTextColor = useCallback(
      (color: string) => {
        if (!editor) return;
        editor.chain().focus().setColor(color).run();
      },
      [editor],
    );

    const changeHighlightColor = useCallback(
      (color: string) => {
        if (!editor) return;
        editor.chain().focus().toggleHighlight({ color }).run();
      },
      [editor],
    );

    const toggleHtmlView = useCallback(() => {
      if (showHtml && htmlContent !== editor?.getHTML()) {
        editor?.commands.setContent(htmlContent, false);
      }
      setShowHtml((prev) => !prev);
    }, [showHtml, htmlContent, editor]);

    const handleFontSizeChange = useCallback(
      (size: string) => {
        if (editor) editor.chain().focus().setFontSize(size).run();
      },
      [editor],
    );

    const handleSourceInput = useCallback(
      (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        e.preventDefault();
        const newContent = e.target.value;
        setHtmlContent(newContent);

        if (onChange) {
          onChange(newContent);
        }
      },
      [onChange],
    );

    const isValidUrl = (url: string): boolean => {
      const regex =
        /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;
      return regex.test(url);
    };
    const setLink = () => {
      if (!editor) return;

      if (url.trim() === "") {
        editor.chain().focus().unsetLink().run(); // Xóa liên kết nếu không nhập URL
      } else if (!isValidUrl(url)) {
        // Nếu URL không hợp lệ, hiển thị lỗi
        alert("URL không hợp lệ. Vui lòng nhập đúng định dạng.");
      } else {
        editor
          .chain()
          .focus()
          .extendMarkRange("link")
          .toggleLink({ href: url })
          .run();
      }
      setUrl("");
    };
    // Return null if editor not initialized
    if (!editor) return null;

    return (
      <div id="text-editor" className={`rounded-sm border shadow-sm`}>
        <div className="top-0 z-10 flex gap-1 rounded-t-lg border-b border-slate-200 bg-slate-50 p-2">
          <div className="relative flex flex-wrap gap-1">
            {/* Text Formatting */}
            <div className="relative">
              <div
                onMouseEnter={() => toggleDropdown("formatting", true)}
                onMouseLeave={() => toggleDropdown("formatting", false)}
                className="h-8 cursor-pointer items-center justify-center whitespace-nowrap rounded border border-slate-200 bg-white p-1 text-sm text-gray-700 transition-all duration-150 ease-in-out"
              >
                Formatting ▼
                {dropdowns.formatting && (
                  <div className="absolute z-10 grid space-y-2 rounded-lg border bg-white p-2 shadow-lg">
                    <button
                      type="button"
                      onClick={() => editor.chain().focus().toggleBold().run()}
                      className={`inline-flex h-8 cursor-pointer items-center justify-center whitespace-nowrap rounded border border-slate-200 bg-white px-3 text-sm text-gray-700 transition-all duration-150 ease-in-out ${editor.isActive("bold") ? "bg-gray-300" : ""}`}
                    >
                      <b>Bold</b>
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        editor.chain().focus().toggleItalic().run()
                      }
                      className={`inline-flex h-8 cursor-pointer items-center justify-center whitespace-nowrap rounded border border-slate-200 bg-white px-3 text-sm text-gray-700 transition-all duration-150 ease-in-out ${editor.isActive("italic") ? "bg-gray-300" : ""}`}
                    >
                      <i>Italic</i>
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        editor.chain().focus().toggleUnderline().run()
                      }
                      className={`inline-flex h-8 cursor-pointer items-center justify-center whitespace-nowrap rounded border border-slate-200 bg-white px-3 text-sm text-gray-700 transition-all duration-150 ease-in-out ${editor.isActive("underline") ? "bg-gray-300" : ""}`}
                    >
                      <u>Underline</u>
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        editor.chain().focus().toggleStrike().run()
                      }
                      className={`inline-flex h-8 cursor-pointer items-center justify-center whitespace-nowrap rounded border border-slate-200 bg-white px-3 text-sm text-gray-700 transition-all duration-150 ease-in-out ${editor.isActive("strike") ? "bg-gray-300" : ""}`}
                    >
                      <s>Strike</s>
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        editor.chain().focus().toggleSubscript().run()
                      }
                      className={`inline-flex h-8 cursor-pointer items-center justify-center whitespace-nowrap rounded border border-slate-200 bg-white px-3 text-sm text-gray-700 transition-all duration-150 ease-in-out ${editor.isActive("subscript") ? "bg-gray-300" : ""}`}
                    >
                      <sub>Subscript</sub>
                    </button>
                    <button
                      type="button"
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
                onMouseEnter={() => toggleDropdown("fontSize", true)}
                onMouseLeave={() => toggleDropdown("fontSize", false)}
                className="h-8 cursor-pointer items-center justify-center whitespace-nowrap rounded border border-slate-200 bg-white p-1 text-sm text-gray-700 transition-all duration-150 ease-in-out"
              >
                Font Size ▼
                {dropdowns.fontSize && (
                  <div className="absolute z-10 grid rounded-lg border bg-white p-3 shadow-lg">
                    {fontSizes.map((size) => (
                      <button
                        type="button"
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
                onMouseEnter={() => toggleDropdown("structure", true)}
                onMouseLeave={() => toggleDropdown("structure", false)}
                className="h-8 cursor-pointer items-center justify-center whitespace-nowrap rounded border border-slate-200 bg-white p-1 text-sm text-gray-700 transition-all duration-150 ease-in-out"
              >
                Structure ▼
                {dropdowns.structure && (
                  <div className="absolute z-10 grid space-y-2 rounded-lg border bg-white p-2 shadow-lg">
                    <button
                      type="button"
                      onClick={() =>
                        editor.chain().focus().setParagraph().run()
                      }
                      className={`inline-flex h-8 cursor-pointer items-center justify-center whitespace-nowrap rounded border border-slate-200 bg-white px-3 text-sm text-gray-700 transition-all duration-150 ease-in-out ${editor.isActive("paragraph") ? "bg-gray-300" : ""}`}
                    >
                      Paragraph
                    </button>
                    {[1, 2, 3, 4, 5, 6].map((level) => (
                      <button
                        type="button"
                        key={level}
                        onClick={(e) =>
                          applyHeadingToSelection(
                            level.toString() as
                              | "1"
                              | "2"
                              | "3"
                              | "4"
                              | "5"
                              | "6",
                          )
                        }
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
                onMouseEnter={() => toggleDropdown("color", true)}
                onMouseLeave={() => toggleDropdown("color", false)}
                className="h-8 cursor-pointer items-center justify-center whitespace-nowrap rounded border border-slate-200 bg-white p-1 text-sm text-gray-700 transition-all duration-150 ease-in-out"
              >
                Colors ▼
                {dropdowns.color && (
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
                onMouseEnter={() => toggleDropdown("alignment", true)}
                onMouseLeave={() => toggleDropdown("alignment", false)}
                className="h-8 cursor-pointer items-center justify-center whitespace-nowrap rounded border border-slate-200 bg-white p-1 text-sm text-gray-700 transition-all duration-150 ease-in-out"
              >
                Align Text ▼
                {dropdowns.alignment && (
                  <div className="absolute z-10 grid space-y-2 rounded-lg border bg-white p-2 shadow-lg">
                    <button
                      type="button"
                      onClick={() =>
                        editor.chain().focus().setTextAlign("left").run()
                      }
                      className={`inline-flex h-8 cursor-pointer items-center justify-center whitespace-nowrap rounded border border-slate-200 bg-white px-3 text-sm text-gray-700 transition-all duration-150 ease-in-out ${editor.isActive("left") ? "bg-gray-300" : ""}`}
                    >
                      Left
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        editor.chain().focus().setTextAlign("center").run()
                      }
                      className={`inline-flex h-8 cursor-pointer items-center justify-center whitespace-nowrap rounded border border-slate-200 bg-white px-3 text-sm text-gray-700 transition-all duration-150 ease-in-out ${editor.isActive("center") ? "bg-gray-300" : ""}`}
                    >
                      Center
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        editor.chain().focus().setTextAlign("right").run()
                      }
                      className={`inline-flex h-8 cursor-pointer items-center justify-center whitespace-nowrap rounded border border-slate-200 bg-white px-3 text-sm text-gray-700 transition-all duration-150 ease-in-out ${editor.isActive("right") ? "bg-gray-300" : ""}`}
                    >
                      Right
                    </button>
                    <button
                      type="button"
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
                onMouseEnter={() => toggleDropdown("item", true)}
                onMouseLeave={() => toggleDropdown("item", false)}
                className="h-8 cursor-pointer items-center justify-center whitespace-nowrap rounded border border-slate-200 bg-white p-1 text-sm text-gray-700 transition-all duration-150 ease-in-out"
              >
                List▼
                {dropdowns.item && (
                  <div className="absolute z-10 grid space-y-2 rounded-lg border bg-white p-2 shadow-lg">
                    <button
                      type="button"
                      onClick={() =>
                        editor.chain().focus().toggleBulletList().run()
                      }
                      className={`inline-flex h-8 cursor-pointer items-center justify-center whitespace-nowrap rounded border border-slate-200 bg-white px-3 text-sm text-gray-700 transition-all duration-150 ease-in-out${editor.isActive("bulletList") ? "is-active" : ""}`}
                    >
                      Bullet list
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        editor.chain().focus().toggleOrderedList().run()
                      }
                      className={`inline-flex h-8 cursor-pointer items-center justify-center whitespace-nowrap rounded border border-slate-200 bg-white px-3 text-sm text-gray-700 transition-all duration-150 ease-in-out${editor.isActive("orderedList") ? "is-active" : ""}`}
                    >
                      Ordered list
                    </button>
                    <button
                      type="button"
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

            {/* Table */}
            <div className="relative">
              <div
                onMouseEnter={() => toggleDropdown("table", true)}
                onMouseLeave={() => toggleDropdown("table", false)}
                className="h-8 cursor-pointer items-center justify-center whitespace-nowrap rounded border border-slate-200 bg-white p-1 text-sm text-gray-700 transition-all duration-150 ease-in-out"
              >
                Table▼
                {dropdowns.table && (
                  <div className="absolute z-10 grid space-y-2 rounded-lg border bg-white p-2 shadow-lg">
                    <button
                      type="button"
                      onClick={() =>
                        editor
                          .chain()
                          .focus()
                          .insertTable({
                            rows: 3,
                            cols: 3,
                            withHeaderRow: true,
                          })
                          .run()
                      }
                      className={`inline-flex h-8 cursor-pointer items-center justify-center whitespace-nowrap rounded border border-slate-200 bg-white px-3 text-sm text-gray-700 transition-all duration-150 ease-in-out${editor.isActive("bulletList") ? "is-active" : ""}`}
                    >
                      Add Table
                    </button>
                    <button
                      type="button"
                      onClick={() => editor.chain().focus().addRowAfter().run()}
                      className={`inline-flex h-8 cursor-pointer items-center justify-center whitespace-nowrap rounded border border-slate-200 bg-white px-3 text-sm text-gray-700 transition-all duration-150 ease-in-out${editor.isActive("orderedList") ? "is-active" : ""}`}
                    >
                      Insert Row
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        editor.chain().focus().addColumnAfter().run()
                      }
                      className={`inline-flex h-8 cursor-pointer items-center justify-center whitespace-nowrap rounded border border-slate-200 bg-white px-3 text-sm text-gray-700 transition-all duration-150 ease-in-out${editor.isActive("listItem") ? "is-active" : ""}`}
                    >
                      Insert Col
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        editor.chain().focus().deleteColumn().run()
                      }
                      className={`inline-flex h-8 cursor-pointer items-center justify-center whitespace-nowrap rounded border border-slate-200 bg-white px-3 text-sm text-gray-700 transition-all duration-150 ease-in-out${editor.isActive("listItem") ? "is-active" : ""}`}
                    >
                      Delete Col
                    </button>
                    <button
                      type="button"
                      onClick={() => editor.chain().focus().deleteRow().run()}
                      className={`inline-flex h-8 cursor-pointer items-center justify-center whitespace-nowrap rounded border border-slate-200 bg-white px-3 text-sm text-gray-700 transition-all duration-150 ease-in-out${editor.isActive("listItem") ? "is-active" : ""}`}
                    >
                      Delete Row
                    </button>
                    <button
                      type="button"
                      onClick={() => editor.chain().focus().deleteTable().run()}
                      className={`inline-flex h-8 cursor-pointer items-center justify-center whitespace-nowrap rounded border border-slate-200 bg-white px-3 text-sm text-gray-700 transition-all duration-150 ease-in-out${editor.isActive("listItem") ? "is-active" : ""}`}
                    >
                      Delete Table
                    </button>
                  </div>
                )}
              </div>
            </div>
            {/* Link */}
            <div className="relative">
              <button
                type="button"
                onClick={() => toggleDropdown("link")}
                className="inline-flex h-8 cursor-pointer items-center justify-center whitespace-nowrap rounded border border-slate-200 bg-white px-3 text-sm text-gray-700 transition-all duration-150 ease-in-out"
              >
                Link
              </button>
              {dropdowns.link && (
                <div className="absolute z-50 w-80 rounded-lg border bg-white p-3 shadow">
                  <input
                    type="text"
                    placeholder="Nhập URL tại đây..."
                    className="flex-grow rounded-md border p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={setLink}
                    className="rounded-md bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600"
                  >
                    Thêm/Xóa Link
                  </button>
                </div>
              )}
            </div>

            {/* Switch to HTML */}
            <div className="relative">
              <button
                type="button"
                onClick={toggleHtmlView}
                className="inline-flex h-8 cursor-pointer items-center justify-center whitespace-nowrap rounded border border-slate-200 bg-white px-3 text-sm text-gray-700 transition-all duration-150 ease-in-out"
              >
                {showHtml ? "Switch to Editor" : "Switch to HTML"}
              </button>
            </div>

            {/* Upload Image */}
            <button
              type="button"
              onClick={() => toggleDropdown("image")}
              className="inline-flex h-8 cursor-pointer items-center justify-center whitespace-nowrap rounded border border-slate-200 bg-white px-3 text-sm text-gray-700 transition-all duration-150 ease-in-out"
            >
              📷 Thêm hình ảnh
            </button>

            {dropdowns.image && (
              <div className="absolute left-3/4 top-3/4 z-50 w-80 rounded-lg border bg-white p-3 shadow">
                <input
                  type="text"
                  placeholder="🔗 URL hình ảnh"
                  value={imageAttrs.url}
                  onChange={(e) => updateImageAttr("url", e.target.value)}
                  className="mb-2 w-full rounded border p-1"
                />
                <input
                  type="text"
                  placeholder="Caption"
                  value={imageAttrs.caption}
                  onChange={(e) => updateImageAttr("caption", e.target.value)}
                  className="mb-2 w-full rounded border p-1"
                />
                <input
                  type="text"
                  placeholder="📝 Alt text"
                  value={imageAttrs.alt}
                  onChange={(e) => updateImageAttr("alt", e.target.value)}
                  className="mb-2 w-full rounded border p-1"
                />
                <input
                  type="text"
                  placeholder="📏 Width (px/%)"
                  value={imageAttrs.width}
                  onChange={(e) => updateImageAttr("width", e.target.value)}
                  className="mb-2 w-full rounded border p-1"
                />
                <input
                  type="text"
                  placeholder="📐 Height (px/auto)"
                  value={imageAttrs.height}
                  onChange={(e) => updateImageAttr("height", e.target.value)}
                  className="mb-2 w-full rounded border p-1"
                />

                <div className="mb-3 flex justify-between">
                  {["left", "center", "right"].map((pos) => (
                    <button
                      type="button"
                      key={pos}
                      onClick={() =>
                        handleAlignmentChange(
                          pos as "left" | "center" | "right",
                        )
                      }
                      className={`rounded p-2 ${
                        imageAttrs.alignment === pos
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
                  type="button"
                  onClick={handleSetImage}
                  className="mr-2 inline-flex h-8 cursor-pointer items-center justify-center whitespace-nowrap rounded border border-slate-200 bg-white px-3 text-sm text-gray-700 transition-all duration-150 ease-in-out"
                >
                  Thêm hình ảnh
                </button>
                <button
                  type="button"
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
            onChange={(e) => handleSourceInput(e)}
            onBlur={() =>
              htmlContent && editor.commands.setContent(htmlContent, false)
            }
            className="h-96 w-full resize-y overflow-scroll rounded-lg p-4"
          />
        ) : (
          <EditorContent
            editor={editor}
            ref={editorRef}
            className="ProseMirror prose prose-custome italic" // Add a class for consistent styling
          />
        )}
      </div>
    );
  },
);

export default RichTextEditor;
