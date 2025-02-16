"use client";

import React, { useState } from "react";
import CustomEditor from "../../components/editor/CustomeEditor";

export default function TestPage() {
  const [content, setContent] = useState("");

  const handleEditorChange = (newContent: string) => {
    setContent(newContent);
  };

  return (
    <div className="container mx-auto max-w-4xl p-4">
      <h1 className="mb-6 text-2xl font-bold">Custom Editor Test</h1>

      <div className="mb-8">
        <h2 className="mb-2 text-lg font-semibold">Editor</h2>
        <div className="rounded-lg bg-white shadow-sm">
          <CustomEditor
            initialValue=""
            onChange={handleEditorChange}
            placeholder="Start writing your content here..."
          />
        </div>
      </div>

      <div className="mt-8">
        <h2 className="mb-2 text-lg font-semibold">Preview</h2>
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <div
            className="prose max-w-none rounded-lg bg-gray-50 p-4"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>

      <div className="mt-8 rounded-lg bg-blue-50 p-4">
        <h2 className="mb-2 text-lg font-semibold">Editor Features:</h2>
        <ul className="list-inside list-disc space-y-2 text-sm">
          <li className="font-medium">
            View Modes:
            <ul className="ml-6 mt-1 list-[circle] space-y-1 font-normal">
              <li>Visual Editor - WYSIWYG editing</li>
              <li>HTML Source - Direct HTML code editing</li>
            </ul>
          </li>
          <li className="font-medium">
            Style Menu:
            <ul className="ml-6 mt-1 list-[circle] space-y-1 font-normal">
              <li>Paragraph</li>
              <li>Headings (H1, H2, H3)</li>
              <li>Code Block</li>
            </ul>
          </li>
          <li className="font-medium">
            Format Menu:
            <ul className="ml-6 mt-1 list-[circle] space-y-1 font-normal">
              <li>Bold, Italic, Underline, Strike</li>
              <li>Subscript, Superscript</li>
            </ul>
          </li>
          <li className="font-medium">
            Align Menu:
            <ul className="ml-6 mt-1 list-[circle] space-y-1 font-normal">
              <li>Left, Center, Right, Justify</li>
              <li>Increase/Decrease Indent</li>
            </ul>
          </li>
          <li className="font-medium">
            List Menu:
            <ul className="ml-6 mt-1 list-[circle] space-y-1 font-normal">
              <li>Bullet List</li>
              <li>Numbered List</li>
            </ul>
          </li>
          <li className="font-medium">
            Insert Menu:
            <ul className="ml-6 mt-1 list-[circle] space-y-1 font-normal">
              <li>Images (Upload)</li>
              <li>Links</li>
              <li>Horizontal Line</li>
            </ul>
          </li>
          <li className="font-medium">
            Color Menu:
            <ul className="ml-6 mt-1 list-[circle] space-y-1 font-normal">
              <li>Text Color</li>
              <li>Background Color</li>
            </ul>
          </li>
          <li className="font-medium">
            Quick Access:
            <ul className="ml-6 mt-1 list-[circle] space-y-1 font-normal">
              <li>Undo/Redo</li>
              <li>Clear Formatting</li>
              <li>HTML/Visual Toggle</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
