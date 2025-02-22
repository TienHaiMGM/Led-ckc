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
import { v4 as uuidv4 } from "uuid";
import "./textEditor.css";

interface RichTextEditorProps {
  initialValue?: string;
  onChange?: (content: string) => void;
}

const RichTextEditor: FC<RichTextEditorProps> = ({
  onChange,
  initialValue = "",
}) => {
  const [headings, setHeadings] = useState<
    { id: string; text: string; level: number }[]
  >([]);
  const [activeId, setActiveId] = useState<string>("");
  const editorRef = useRef<HTMLDivElement>(null);

  const editor = useEditor({
    extensions: [
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
      Heading.extend({
        addAttributes() {
          return {
            id: {
              default: () => uuidv4(),
              parseHTML: (element) => element.getAttribute("id"),
              renderHTML: (attributes) => ({ id: attributes.id }),
            },
          };
        },
      }).configure({ levels: [1, 2, 3, 4, 5, 6] }),
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Focus.configure({ className: "has-focus", mode: "all" }),
    ],
    autofocus: true,
    content: initialValue,
    editorProps: {
      attributes: {
        class: "h-96 w-full resize-y rounded-lg p-4 overflow-scroll",
      },
    },
    onUpdate: ({ editor }) => {
      const json = editor.getJSON();
      const newHeadings: { id: string; text: string; level: number }[] = [];

      const extractHeadings = (node: any) => {
        if (node.type === "heading") {
          const text = Array.isArray(node.content)
            ? node.content.map((n: any) => n.text).join("")
            : "";
          const id = node.attrs.id || uuidv4();
          newHeadings.push({ id, text, level: node.attrs.level });
          node.attrs.id = id;
        }
        if (Array.isArray(node.content)) node.content.forEach(extractHeadings);
      };

      if (Array.isArray(json.content)) json.content.forEach(extractHeadings);
      setHeadings(newHeadings);
      onChange?.(editor.getHTML());
    },
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0.1 },
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  if (!editor) return null;

  return (
    <div className="flex gap-4 rounded-sm border shadow-sm">
      {/* TOC Section */}
      <div className="sticky top-0 max-h-screen w-1/4 overflow-y-auto rounded bg-gray-100 p-4">
        <h2 className="mb-2 text-lg font-bold">📚 Mục lục</h2>
        <ul className="space-y-2">
          {headings.map((h, i) => (
            <li
              key={i}
              onClick={() => scrollToHeading(h.id)}
              className={`cursor-pointer pl-${h.level * 2} hover:text-blue-500 ${
                activeId === h.id ? "font-semibold text-blue-600" : ""
              }`}
            >
              <a href={`#${h.id}`}>{h.text}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Editor Section */}
      <div className="w-3/4">
        <EditorContent editor={editor} ref={editorRef} />
      </div>
    </div>
  );
};

export default RichTextEditor;
