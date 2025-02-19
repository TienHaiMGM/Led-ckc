import React, { useState } from "react";
import { CldImage } from "next-cloudinary";

const UploadImage = () => {
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  // Xem trước ảnh trước khi upload
  const handlePreview = (files: FileList | null) => {
    if (!files) return;
    const previews = Array.from(files).map((file) => URL.createObjectURL(file));
    setPreviewImages(previews);
  };

  // Upload nhiều ảnh và lưu vào thư mục trên Cloudinary
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    setLoading(true);
    const uploadedUrls: string[] = [];

    for (const file of Array.from(files)) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("folder", "sieu-thi-bang-hieu"); // Lưu ảnh vào thư mục chỉ định

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        uploadedUrls.push(data.public_id);
      } else {
        console.error("Upload lỗi:", data.error);
      }
    }

    setUploadedImages(uploadedUrls);
    setLoading(false);
  };

  return (
    <div className="mx-auto w-full max-w-4xl rounded-2xl bg-white p-6 shadow-lg">
      <h2 className="mb-4 text-center text-2xl font-semibold">
        📤 Tải lên nhiều ảnh bảng hiệu (Lưu trong thư mục)
      </h2>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={(e) => {
          handlePreview(e.target.files);
          handleImageUpload(e);
        }}
        className="block w-full text-sm text-gray-500 file:mr-4 file:border-0 file:bg-blue-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-blue-700 hover:file:bg-blue-100"
      />

      {/* Xem trước ảnh */}
      {previewImages.length > 0 && (
        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
          {previewImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Xem trước ${index + 1}`}
              className="h-48 w-full rounded-lg object-cover shadow"
            />
          ))}
        </div>
      )}

      {/* Hiển thị ảnh sau khi upload với hiệu ứng từ Cloudinary */}
      {uploadedImages.length > 0 && (
        <div className="mt-8">
          <h3 className="mb-4 text-lg font-semibold text-green-600">
            ✅ Ảnh đã tải lên trong thư mục:
          </h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {uploadedImages.map((publicId, index) => (
              <CldImage
                key={index}
                width="600"
                height="400"
                src={publicId}
                alt={`Ảnh bảng hiệu ${index + 1}`}
                crop="fill"
                gravity="auto"
                priority
                effects={[
                  { effect: "sepia" },
                  { effect: "blur", level: 50 },
                  { effect: "brightness", level: 30 },
                ]}
              />
            ))}
          </div>
        </div>
      )}

      {loading && (
        <p className="mt-4 text-center text-blue-500">⏳ Đang tải ảnh lên...</p>
      )}
    </div>
  );
};

export default UploadImage;
