import { Extension } from "@tiptap/core";
import { v4 as uuidv4 } from "uuid";

export const HeadingID = Extension.create({
  name: "headingID",

  addGlobalAttributes() {
    return [
      {
        types: ["heading"],
        attributes: {
          id: {
            default: null,
            parseHTML: (element) => element.getAttribute("id"),
            renderHTML: (attributes) => {
              if (!attributes.id) {
                attributes.id = uuidv4();
              }
              return { id: attributes.id };
            },
          },
        },
      },
    ];
  },

  onTransaction({ transaction }) {
    // Kiểm tra mỗi node mới được tạo hoặc cập nhật
    transaction.steps.forEach((step) => {
      if (step.map) {
        // Duyệt qua các node đã thay đổi
        this.editor.state.doc.descendants((node, pos) => {
          if (node.type.name === "heading" && !node.attrs.id) {
            // Gán ID cho heading nếu chưa có
            this.editor.view.dispatch(
              this.editor.state.tr.setNodeMarkup(pos, undefined, {
                ...node.attrs,
                id: uuidv4(),
              }),
            );
          }
        });
      }
    });
  },
});
