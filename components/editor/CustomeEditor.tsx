import React, { useState, useRef, useEffect } from "react";

interface CustomEditorProps {
  initialValue?: string;
  onChange?: (content: string) => void;
  placeholder?: string;
}

interface DropdownProps {
  label: string;
  children: React.ReactNode;
}

interface ImageCustomizationModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageElement: HTMLImageElement | null;
}

const Dropdown: React.FC<DropdownProps> = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="toolbar-dropdown" ref={dropdownRef}>
      <button
        type="button"
        className="inline-flex h-8 cursor-pointer items-center justify-center whitespace-nowrap rounded border border-slate-200 bg-white px-3 text-sm text-gray-700 transition-all duration-150 ease-in-out"
        onClick={() => setIsOpen(!isOpen)}
      >
        {label} ▾
      </button>
      {isOpen && <div className="dropdown-menu">{children}</div>}
    </div>
  );
};

const CustomEditor: React.FC<CustomEditorProps> = ({
  initialValue = "",
  onChange,
  placeholder = "Start writing...",
}) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const [selection, setSelection] = useState<Selection | null>(null);
  const [isSourceMode, setIsSourceMode] = useState(false);
  const [content, setContent] = useState(initialValue);
  const [selectedImage, setSelectedImage] = useState<HTMLImageElement | null>(
    null,
  );
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  useEffect(() => {
    if (editorRef.current && !isSourceMode) {
      editorRef.current.innerHTML = content;
      editorRef.current.setAttribute("contenteditable", "true");
    }
  }, [content, isSourceMode]);

  const execCommand = (command: string, value: string | boolean = false) => {
    document.execCommand(command, false, value.toString());
    editorRef.current?.focus();
    handleInput();
  };

  const handleSelectionChange = () => {
    const sel = window.getSelection();
    setSelection(sel);
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

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const wrapper = document.createElement("div");
        wrapper.className = "image-wrapper";

        const img = document.createElement("img");
        img.src = event.target?.result as string;
        img.style.width = "100%";
        img.style.height = "auto";
        img.className = "middle-center"; // Default position
        img.addEventListener("click", () => {
          setSelectedImage(img);
          setIsImageModalOpen(true);
        });

        const captionDiv = document.createElement("div") as HTMLDivElement;
        captionDiv.className = "image-caption";
        captionDiv.setAttribute("contenteditable", "true");
        captionDiv.textContent = "Add caption here...";

        wrapper.appendChild(img);
        wrapper.appendChild(captionDiv);

        const range = selection?.getRangeAt(0);
        if (range) {
          range.insertNode(wrapper);
        } else {
          editorRef.current?.appendChild(wrapper);
        }
        handleInput();
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleSourceMode = () => {
    setIsSourceMode(!isSourceMode);
  };

  useEffect(() => {
    document.addEventListener("selectionchange", handleSelectionChange);
    return () => {
      document.removeEventListener("selectionchange", handleSelectionChange);
    };
  }, []);

  useEffect(() => {
    const handleContentClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // Handle image clicks
      if (target.tagName === "IMG" && !isSourceMode) {
        setSelectedImage(target as HTMLImageElement);
        setIsImageModalOpen(true);
      }

      // Handle link clicks
      if (target.tagName === "A") {
        e.preventDefault();
        const link = target as HTMLAnchorElement;
        const url = link.getAttribute("href");
        if (url) {
          window.open(url, "_blank", "noopener,noreferrer");
        }
      }
    };

    editorRef.current?.addEventListener("click", handleContentClick);
    return () => {
      editorRef.current?.removeEventListener("click", handleContentClick);
    };
  }, [isSourceMode]);

  function applyFormat(arg0: string, arg1: string): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="rounded-sm border shadow-sm">
      <div className="p-2flex sticky top-0 z-10 flex flex-wrap gap-1 rounded-t-lg border-b border-slate-200 bg-slate-50 p-2">
        {/* View Mode Toggle */}
        <div className="relative flex gap-1">
          <button
            type="button"
            onClick={toggleSourceMode}
            className={`inline-flex h-8 cursor-pointer items-center justify-center whitespace-nowrap rounded border border-slate-200 bg-white px-3 text-sm text-gray-700 transition-all duration-150 ease-in-out ${isSourceMode ? "active" : ""}`}
            title="Toggle HTML Source"
          >
            {isSourceMode ? "Visual" : "HTML"}
          </button>
        </div>

        {!isSourceMode && (
          <>
            {/* History Controls */}
            <div className="relative flex gap-1">
              <button
                type="button"
                onClick={() => execCommand("undo")}
                className="inline-flex h-8 cursor-pointer items-center justify-center whitespace-nowrap rounded border border-slate-200 bg-white px-3 text-sm text-gray-700 transition-all duration-150 ease-in-out"
                title="Undo"
              >
                ↶
              </button>
              <button
                type="button"
                onClick={() => execCommand("redo")}
                className="inline-flex h-8 cursor-pointer items-center justify-center whitespace-nowrap rounded border border-slate-200 bg-white px-3 text-sm text-gray-700 transition-all duration-150 ease-in-out"
                title="Redo"
              >
                ↷
              </button>
            </div>

            {/* Text Style Dropdown */}
            <div className="relative flex gap-1">
              <Dropdown label="Style">
                <button
                  type="button"
                  onClick={() => applyFormat("Paragraph", "p")}
                >
                  Paragraph
                </button>
                <button
                  type="button"
                  onClick={() => applyFormat("Heading 1", "h1")}
                >
                  Heading 1
                </button>
                <button
                  type="button"
                  onClick={() => execCommand("formatBlock", "h2")}
                >
                  Heading 2
                </button>
                <button
                  type="button"
                  onClick={() => execCommand("formatBlock", "h3")}
                >
                  Heading 3
                </button>
                <button
                  type="button"
                  onClick={() => execCommand("formatBlock", "pre")}
                >
                  Code Block
                </button>
              </Dropdown>
            </div>

            {/* Text Formatting Dropdown */}
            <div className="relative flex gap-1">
              <Dropdown label="Format">
                <button type="button" onClick={() => execCommand("bold")}>
                  Bold
                </button>
                <button type="button" onClick={() => execCommand("italic")}>
                  Italic
                </button>
                <button type="button" onClick={() => execCommand("underline")}>
                  Underline
                </button>
                <button
                  type="button"
                  onClick={() => execCommand("strikeThrough")}
                >
                  Strike
                </button>
                <button type="button" onClick={() => execCommand("subscript")}>
                  Subscript
                </button>
                <button
                  type="button"
                  onClick={() => execCommand("superscript")}
                >
                  Superscript
                </button>
              </Dropdown>
            </div>

            {/* Alignment Dropdown */}
            <div className="relative flex gap-1">
              <Dropdown label="Align">
                <button
                  type="button"
                  onClick={() => execCommand("justifyLeft")}
                >
                  Left
                </button>
                <button
                  type="button"
                  onClick={() => execCommand("justifyCenter")}
                >
                  Center
                </button>
                <button
                  type="button"
                  onClick={() => execCommand("justifyRight")}
                >
                  Right
                </button>
                <button
                  type="button"
                  onClick={() => execCommand("justifyFull")}
                >
                  Justify
                </button>
                <button type="button" onClick={() => execCommand("indent")}>
                  Increase Indent
                </button>
                <button type="button" onClick={() => execCommand("outdent")}>
                  Decrease Indent
                </button>
              </Dropdown>
            </div>

            {/* List Dropdown */}
            <div className="relative flex gap-1">
              <Dropdown label="List">
                <button
                  type="button"
                  onClick={() => execCommand("insertUnorderedList")}
                >
                  Bullet List
                </button>
                <button
                  type="button"
                  onClick={() => execCommand("insertOrderedList")}
                >
                  Numbered List
                </button>
              </Dropdown>
            </div>

            {/* Insert Controls */}
            <div className="relative flex gap-1">
              <Dropdown label="Insert">
                <button
                  type="button"
                  onClick={() => execCommand("insertHorizontalRule")}
                >
                  Horizontal Line
                </button>
                <label className="dropdown-item">
                  Image
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                </label>
                <button
                  type="button"
                  onClick={async () => {
                    const url = prompt("Enter link URL:");
                    if (url) {
                      try {
                        // Fetch webpage title
                        const response = await fetch(url);
                        const text = await response.text();
                        const parser = new DOMParser();
                        const doc = parser.parseFromString(text, "text/html");
                        const pageTitle =
                          doc.querySelector("title")?.textContent || url;

                        const range = selection?.getRangeAt(0);
                        const selectedText = range ? range.toString() : "";

                        if (selectedText) {
                          // If text is selected, use it as the link text
                          execCommand("createLink", url);
                          const link = editorRef.current?.querySelector(
                            `a[href="${url}"]`,
                          ) as HTMLAnchorElement;
                          if (link) {
                            link.setAttribute("title", url);
                            link.setAttribute("target", "_blank");
                            link.setAttribute("rel", "noopener noreferrer");
                          }
                        } else {
                          // If no text is selected, use the page title as text
                          const link = document.createElement("a");
                          link.href = url;
                          link.textContent = pageTitle;
                          link.setAttribute("title", url);
                          link.setAttribute("target", "_blank");
                          link.setAttribute("rel", "noopener noreferrer");

                          const range = document.getSelection()?.getRangeAt(0);
                          if (range) {
                            range.insertNode(link);
                          } else {
                            editorRef.current?.appendChild(link);
                          }
                        }
                        handleInput();
                      } catch (error) {
                        // Fallback to basic link creation
                        execCommand("createLink", url);
                      }
                    }
                  }}
                >
                  Link
                </button>
              </Dropdown>
            </div>

            {/* Color Controls */}
            <div className="relative flex gap-1">
              <Dropdown label="Color">
                <div className="flex items-center gap-2 p-2 px-3">
                  <label>Text Color</label>
                  <input
                    type="color"
                    onChange={(e) => execCommand("foreColor", e.target.value)}
                    className=""
                  />
                </div>
                <div className="flex items-center gap-2 p-2 px-3">
                  <label>Background</label>
                  <input
                    type="color"
                    onChange={(e) => execCommand("hiliteColor", e.target.value)}
                    className=""
                  />
                </div>
              </Dropdown>
            </div>

            {/* Clear Formatting */}
            <div className="relative flex gap-1">
              <button
                type="button"
                onClick={() => execCommand("removeFormat")}
                className="inline-flex h-8 cursor-pointer items-center justify-center whitespace-nowrap rounded border border-slate-200 bg-white px-3 text-sm text-gray-700 transition-all duration-150 ease-in-out"
                title="Clear Formatting"
              >
                Clear Format
              </button>
            </div>
          </>
        )}
      </div>

      {isSourceMode ? (
        <div className="relative min-h-[300px] rounded-b-lg bg-gray-900">
          <textarea
            value={content}
            onChange={handleSourceInput}
            placeholder="Enter HTML code here..."
            spellCheck={false}
            className="p-3 text-base"
          />
        </div>
      ) : (
        <div
          ref={editorRef}
          className="tab-[2] min-h-[300px] w-full resize-y border-none bg-transparent p-4 font-mono text-sm leading-6 text-black outline-none"
          onInput={handleInput}
          placeholder={placeholder}
          suppressContentEditableWarning={true}
        />
      )}
    </div>
  );
};

export default CustomEditor;
