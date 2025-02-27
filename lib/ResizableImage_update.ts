// extensions/ResizableImage.ts
import { Node, mergeAttributes } from "@tiptap/core";
import { NodeSelection } from "prosemirror-state";

export interface ResizableImageOptions {
  allowBase64: boolean;
  HTMLAttributes: Record<string, any>;
}

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    resizableImage: {
      setImage: (options: {
        src?: string;
        alt?: string;
        width?: string;
        height?: string;
        alignment?: "left" | "center" | "right";
        caption?: string;
      }) => ReturnType;
      updateImageAttrs: (attrs: {
        width?: string;
        height?: string;
        alignment?: "left" | "center" | "right";
        caption?: string;
      }) => ReturnType;
    };
  }
}

export const ResizableImage = Node.create<ResizableImageOptions>({
  name: "resizableImage",

  inline: false,
  group: "block",
  draggable: true,
  selectable: true,

  addOptions() {
    return {
      allowBase64: false,
      HTMLAttributes: {},
    };
  },

  addAttributes() {
    return {
      src: { default: null },
      alt: { default: null },
      width: { default: "800px" },
      height: { default: "auto" },
      caption: { default: "" },
      alignment: {
        default: "center",
        parseHTML: (element: HTMLElement) =>
          element.getAttribute("data-align") || "center",
        renderHTML: (attributes: Record<string, any>) => ({
          "data-align": attributes.alignment,
          style: `display: block; margin-left: ${
            attributes.alignment === "center"
              ? "auto"
              : attributes.alignment === "right"
                ? "auto"
                : "0"
          }; margin-right: ${
            attributes.alignment === "center"
              ? "auto"
              : attributes.alignment === "left"
                ? "auto"
                : "0"
          }; width: ${attributes.width}; height: ${attributes.height}`,
        }),
      },
    };
  },

  parseHTML() {
    return [{ tag: "img[src]" }];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "figure",
      { style: "text-align: center;" },
      [
        "img",
        mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
          class: "ProseMirror-selectednode",
        }),
      ],
      ["figcaption", {}, HTMLAttributes.caption || ""],
    ];
  },

  addCommands() {
    return {
      setImage:
        (options) =>
        ({ chain }) =>
          chain().insertContent({ type: this.name, attrs: options }).run(),

      updateImageAttrs:
        (attrs) =>
        ({ tr, state, dispatch }) => {
          const { selection } = state;
          if (
            selection instanceof NodeSelection &&
            selection.node.type.name === this.name
          ) {
            const pos = selection.from;
            const node = selection.node.type.create({
              ...selection.node.attrs,
              ...attrs,
            });
            const transaction = tr.replaceWith(
              pos,
              pos + selection.node.nodeSize,
              node,
            );
            if (dispatch) {
              dispatch(transaction);
            }
            return true;
          }
          return false;
        },
    };
  },
});
