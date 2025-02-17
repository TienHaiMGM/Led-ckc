import { SetStateAction, useState } from "react";
import { storage } from "../lib/firebase"; // Đảm bảo đường dẫn chính xác

interface UploadImageProps {
  onUploadSuccess?: (url: string) => void;
}

const UploadImage = ({ onUploadSuccess }: UploadImageProps) => {
  const [image, setImage] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setImage(file);
    }
  };

  const handleUpload = () => {
    if (!image) return;

    setUploading(true);

    // Tạo một tham chiếu đến nơi lưu trữ
    const uploadTask = storage.ref(`images/${image.name}`).put(image);

    uploadTask.on(
      "state_changed",
      (snapshot: any) => {
        // Thực hiện khi đang tải ảnh lên (optional)
      },
      (error: any) => {
        console.error("Upload Error: ", error);
        setUploading(false);
      },
      () => {
        // Sau khi upload thành công
        uploadTask.snapshot.ref.getDownloadURL().then((url: string) => {
          console.log("url", url);
          setUploading(false);
          setImageUrl(url); // Lưu URL của ảnh đã tải lên
          if (onUploadSuccess) {
            onUploadSuccess(url); // Trả URL về cha để có thể sử dụng
          }
        });
      },
    );
  };
  console.log("imageUrl", imageUrl);
  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? "Uploading..." : "Upload Image"}
      </button>
      {imageUrl && <h1>ngon1</h1>}
    </div>
  );
};

export default UploadImage;
