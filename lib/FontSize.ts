import { Extension, GlobalAttributes, CommandProps } from "@tiptap/core";

export interface FontSizeOptions {
  /**
   * The types where the text align attribute can be applied.
   * @default []
   * @example ['heading', 'paragraph']
   */
  types: string[];

  /**
   * The alignments which are allowed.
   * @default ['13px', "16px", "18px", "20"]
   * @example ['13px', '16px']
   */
  size: string[];

  /**
   * The default alignment.
   * @default null
   * @example 'center'
   */
  defaultSize: string | null;
}

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    fontSize: {
      /**
       * Set the text align attribute
       * @param size The alignment
       * @example editor.commands.setTextAlign('left')
       */
      setFontSize: (size: string) => ReturnType;
      /**
       * Unset the text align attribute
       * @example editor.commands.unsetTextAlign()
       */
      unsetFontSize: () => ReturnType;
    };
  }
}

export const FontSize = Extension.create<FontSizeOptions>({
  name: "fontSize",

  addOptions() {
    return {
      types: ["textStyle"],
      size: ["13px", "16px", "18px", "20"],
      defaultSize: null,
    };
  },

  addGlobalAttributes(): GlobalAttributes[] {
    return [
      {
        types: this.options.types,
        attributes: {
          fontSize: {
            default: null,
            parseHTML: (element: HTMLElement) => element.style.fontSize || null,
            renderHTML: (attributes: Record<string, any>) => {
              if (!attributes.fontSize) return {};
              return { style: `font-size: ${attributes.fontSize}` };
            },
          },
        },
      },
    ];
  },

  addCommands() {
    return {
      setFontSize:
        (fontSize: string) =>
        ({ chain }: CommandProps) => {
          return chain().setMark("textStyle", { fontSize }).run();
        },
      unsetFontSize:
        () =>
        ({ chain }: CommandProps) => {
          return chain().setMark("textStyle", { fontSize: null }).run();
        },
    };
  },
});
