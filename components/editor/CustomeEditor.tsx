import React, { useState, useRef, useEffect } from "react";
import "../../app/admin/product-content/custom-editor.css";

interface CustomEditorProps {
  initialValue?: string;
  onChange?: (content: string) => void;
  placeholder?: string;
}

interface DropdownProps {
  label: string;
  children: React.ReactNode;
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
      <button className="toolbar-button" onClick={() => setIsOpen(!isOpen)}>
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
      console.log(`editorRef.current`, editorRef.current.innerHTML);
      const newContent = editorRef.current.innerHTML;
      // setContent(newContent);
      console.log(`editorRef.current1`, newContent);
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
        const img = document.createElement("img");
        img.src = event.target?.result as string;
        img.style.maxWidth = "100%";
        img.style.height = "auto";

        const range = selection?.getRangeAt(0);
        if (range) {
          range.insertNode(img);
        } else {
          editorRef.current?.appendChild(img);
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

  return (
    <div className="custom-editor">
      <div className="editor-toolbar">
        {/* View Mode Toggle */}
        <div className="toolbar-group">
          <button
            onClick={toggleSourceMode}
            className={`toolbar-button ${isSourceMode ? "active" : ""}`}
            title="Toggle HTML Source"
          >
            {isSourceMode ? "Visual" : "HTML"}
          </button>
        </div>

        {!isSourceMode && (
          <>
            {/* History Controls */}
            <div className="toolbar-group">
              <button
                onClick={() => execCommand("undo")}
                className="toolbar-button"
                title="Undo"
              >
                ↶
              </button>
              <button
                onClick={() => execCommand("redo")}
                className="toolbar-button"
                title="Redo"
              >
                ↷
              </button>
            </div>

            {/* Text Style Dropdown */}
            <div className="toolbar-group">
              <Dropdown label="Style">
                <button onClick={() => execCommand("formatBlock", "p")}>
                  Paragraph
                </button>
                <button onClick={() => execCommand("formatBlock", "h1")}>
                  Heading 1
                </button>
                <button onClick={() => execCommand("formatBlock", "h2")}>
                  Heading 2
                </button>
                <button onClick={() => execCommand("formatBlock", "h3")}>
                  Heading 3
                </button>
                <button onClick={() => execCommand("formatBlock", "pre")}>
                  Code Block
                </button>
              </Dropdown>
            </div>

            {/* Text Formatting Dropdown */}
            <div className="toolbar-group">
              <Dropdown label="Format">
                <button onClick={() => execCommand("bold")}>Bold</button>
                <button onClick={() => execCommand("italic")}>Italic</button>
                <button onClick={() => execCommand("underline")}>
                  Underline
                </button>
                <button onClick={() => execCommand("strikeThrough")}>
                  Strike
                </button>
                <button onClick={() => execCommand("subscript")}>
                  Subscript
                </button>
                <button onClick={() => execCommand("superscript")}>
                  Superscript
                </button>
              </Dropdown>
            </div>

            {/* Alignment Dropdown */}
            <div className="toolbar-group">
              <Dropdown label="Align">
                <button onClick={() => execCommand("justifyLeft")}>Left</button>
                <button onClick={() => execCommand("justifyCenter")}>
                  Center
                </button>
                <button onClick={() => execCommand("justifyRight")}>
                  Right
                </button>
                <button onClick={() => execCommand("justifyFull")}>
                  Justify
                </button>
                <button onClick={() => execCommand("indent")}>
                  Increase Indent
                </button>
                <button onClick={() => execCommand("outdent")}>
                  Decrease Indent
                </button>
              </Dropdown>
            </div>

            {/* List Dropdown */}
            <div className="toolbar-group">
              <Dropdown label="List">
                <button onClick={() => execCommand("insertUnorderedList")}>
                  Bullet List
                </button>
                <button onClick={() => execCommand("insertOrderedList")}>
                  Numbered List
                </button>
              </Dropdown>
            </div>

            {/* Insert Controls */}
            <div className="toolbar-group">
              <Dropdown label="Insert">
                <button onClick={() => execCommand("insertHorizontalRule")}>
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
                  onClick={() => {
                    const url = prompt("Enter link URL:");
                    if (url) execCommand("createLink", url);
                  }}
                >
                  Link
                </button>
              </Dropdown>
            </div>

            {/* Color Controls */}
            <div className="toolbar-group">
              <Dropdown label="Color">
                <div className="color-picker-group">
                  <label>Text Color</label>
                  <input
                    type="color"
                    onChange={(e) => execCommand("foreColor", e.target.value)}
                    className="toolbar-color"
                  />
                </div>
                <div className="color-picker-group">
                  <label>Background</label>
                  <input
                    type="color"
                    onChange={(e) => execCommand("hiliteColor", e.target.value)}
                    className="toolbar-color"
                  />
                </div>
              </Dropdown>
            </div>

            {/* Clear Formatting */}
            <div className="toolbar-group">
              <button
                onClick={() => execCommand("removeFormat")}
                className="toolbar-button"
                title="Clear Formatting"
              >
                Clear Format
              </button>
            </div>
          </>
        )}
      </div>

      {isSourceMode ? (
        <div className="editor-source-container">
          <textarea
            value={content}
            onChange={handleSourceInput}
            placeholder="Enter HTML code here..."
            spellCheck={false}
            className="editor-source"
          />
        </div>
      ) : (
        <div
          ref={editorRef}
          className="editor-content"
          onInput={handleInput}
          placeholder={placeholder}
          suppressContentEditableWarning={true}
        />
      )}
    </div>
  );
};

export default CustomEditor;
