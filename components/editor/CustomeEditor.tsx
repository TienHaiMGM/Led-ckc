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

interface ImageCustomizationModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageElement: HTMLImageElement | null;
  onApply: (props: ImageCustomizationProps) => void;
}

interface ImageCustomizationProps {
  width: string;
  height: string;
  position:
    | "top-left"
    | "top-center"
    | "top-right"
    | "middle-left"
    | "middle-center"
    | "middle-right"
    | "bottom-left"
    | "bottom-center"
    | "bottom-right";
  caption: string;
}

const ImageCustomizationModal: React.FC<ImageCustomizationModalProps> = ({
  isOpen,
  onClose,
  imageElement,
  onApply,
}) => {
  const [width, setWidth] = useState(imageElement?.style.width || "100%");
  const [height, setHeight] = useState(imageElement?.style.height || "auto");
  const [position, setPosition] = useState<ImageCustomizationProps["position"]>(
    imageElement?.classList.contains("top-left")
      ? "top-left"
      : imageElement?.classList.contains("top-center")
        ? "top-center"
        : imageElement?.classList.contains("top-right")
          ? "top-right"
          : imageElement?.classList.contains("middle-left")
            ? "middle-left"
            : imageElement?.classList.contains("middle-right")
              ? "middle-right"
              : imageElement?.classList.contains("bottom-left")
                ? "bottom-left"
                : imageElement?.classList.contains("bottom-center")
                  ? "bottom-center"
                  : imageElement?.classList.contains("bottom-right")
                    ? "bottom-right"
                    : "middle-center",
  );
  const [caption, setCaption] = useState(
    imageElement?.nextElementSibling?.textContent || "",
  );

  useEffect(() => {
    if (imageElement) {
      setWidth(imageElement.style.width || "100%");
      setHeight(imageElement.style.height || "auto");
      setPosition(
        imageElement.classList.contains("top-left")
          ? "top-left"
          : imageElement.classList.contains("top-center")
            ? "top-center"
            : imageElement.classList.contains("top-right")
              ? "top-right"
              : imageElement.classList.contains("middle-left")
                ? "middle-left"
                : imageElement.classList.contains("middle-right")
                  ? "middle-right"
                  : imageElement.classList.contains("bottom-left")
                    ? "bottom-left"
                    : imageElement.classList.contains("bottom-center")
                      ? "bottom-center"
                      : imageElement.classList.contains("bottom-right")
                        ? "bottom-right"
                        : "middle-center",
      );
      const captionElement = imageElement.nextElementSibling;
      if (captionElement?.classList.contains("image-caption")) {
        setCaption(captionElement.textContent || "");
      }
    }
  }, [imageElement]);

  if (!isOpen) return null;

  return (
    <div className="image-modal-overlay">
      <div className="image-modal">
        <h3>Image Properties</h3>
        <div className="modal-content">
          <div className="modal-field">
            <label>Width:</label>
            <input
              type="text"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
              placeholder="e.g., 100%, 300px"
            />
          </div>
          <div className="modal-field">
            <label>Height:</label>
            <input
              type="text"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="e.g., auto, 200px"
            />
          </div>
          <div className="modal-field">
            <label>Position:</label>
            <div className="position-grid">
              <button
                type="button"
                className={`position-btn ${position === "top-left" ? "active" : ""}`}
                onClick={() => setPosition("top-left")}
                title="Top Left"
              >
                ↖
              </button>
              <button
                className={`position-btn ${position === "top-center" ? "active" : ""}`}
                type="button"
                onClick={() => setPosition("top-center")}
                title="Top Center"
              >
                ↑
              </button>
              <button
                className={`position-btn ${position === "top-right" ? "active" : ""}`}
                type="button"
                onClick={() => setPosition("top-right")}
                title="Top Right"
              >
                ↗
              </button>
              <button
                className={`position-btn ${position === "middle-left" ? "active" : ""}`}
                type="button"
                onClick={() => setPosition("middle-left")}
                title="Middle Left"
              >
                ←
              </button>
              <button
                className={`position-btn ${position === "middle-center" ? "active" : ""}`}
                type="button"
                onClick={() => setPosition("middle-center")}
                title="Middle Center"
              >
                ●
              </button>
              <button
                className={`position-btn ${position === "middle-right" ? "active" : ""}`}
                type="button"
                onClick={() => setPosition("middle-right")}
                title="Middle Right"
              >
                →
              </button>
              <button
                className={`position-btn ${position === "bottom-left" ? "active" : ""}`}
                type="button"
                onClick={() => setPosition("bottom-left")}
                title="Bottom Left"
              >
                ↙
              </button>
              <button
                className={`position-btn ${position === "bottom-center" ? "active" : ""}`}
                type="button"
                onClick={() => setPosition("bottom-center")}
                title="Bottom Center"
              >
                ↓
              </button>
              <button
                className={`position-btn ${position === "bottom-right" ? "active" : ""}`}
                type="button"
                onClick={() => setPosition("bottom-right")}
                title="Bottom Right"
              >
                ↘
              </button>
            </div>
          </div>
          <div className="modal-field">
            <label>Caption:</label>
            <input
              type="text"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="Enter image caption"
            />
          </div>
        </div>
        <div className="modal-actions">
          <button
            type="button"
            onClick={() => onApply({ width, height, position, caption })}
          >
            Apply
          </button>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

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
        className="toolbar-button"
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

  const handleImageCustomization = (props: ImageCustomizationProps) => {
    if (selectedImage) {
      selectedImage.style.width = props.width;
      selectedImage.style.height = props.height;

      // Remove all position classes first
      selectedImage.classList.remove(
        "top-left",
        "top-center",
        "top-right",
        "middle-left",
        "middle-center",
        "middle-right",
        "bottom-left",
        "bottom-center",
        "bottom-right",
      );

      // Add new position class
      selectedImage.classList.add(props.position);

      const wrapper = selectedImage.parentElement;
      if (wrapper?.classList.contains("image-wrapper")) {
        wrapper.className = `image-wrapper position-${props.position}`;
      }

      const captionElement = selectedImage.nextElementSibling as HTMLDivElement;
      if (captionElement?.classList.contains("image-caption")) {
        captionElement.textContent = props.caption;
      } else {
        const newCaptionDiv = document.createElement("div") as HTMLDivElement;
        newCaptionDiv.className = "image-caption";
        newCaptionDiv.setAttribute("contenteditable", "true");
        newCaptionDiv.textContent = props.caption;
        selectedImage.parentElement?.appendChild(newCaptionDiv);
      }
    }
    setIsImageModalOpen(false);
    handleInput();
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

  return (
    <div className="custom-editor">
      <div className="editor-toolbar">
        {/* View Mode Toggle */}
        <div className="toolbar-group">
          <button
            type="button"
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
                type="button"
                onClick={() => execCommand("undo")}
                className="toolbar-button"
                title="Undo"
              >
                ↶
              </button>
              <button
                type="button"
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
                <button
                  type="button"
                  onClick={() => execCommand("formatBlock", "p")}
                >
                  Paragraph
                </button>
                <button
                  type="button"
                  onClick={() => execCommand("formatBlock", "h1")}
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
            <div className="toolbar-group">
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
            <div className="toolbar-group">
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
            <div className="toolbar-group">
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
            <div className="toolbar-group">
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
                type="button"
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

      <ImageCustomizationModal
        isOpen={isImageModalOpen}
        onClose={() => setIsImageModalOpen(false)}
        imageElement={selectedImage}
        onApply={handleImageCustomization}
      />
    </div>
  );
};

export default CustomEditor;
