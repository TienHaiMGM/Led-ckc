import Editor from "./Tiptap";
import RichTextEditor from "./TextEditor";

export default function Home() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        ✍️ Trình Soạn Thảo Có Mục Lục Tự Động
      </h1>
      <RichTextEditor />
    </div>
  );
}
