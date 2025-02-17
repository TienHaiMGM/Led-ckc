"use client";

import UploadImage from "@/utils/upLoadImage";

export default function TestPage() {
  return (
    <div>
      <UploadImage
        onUploadSuccess={(url) => setFormData({ ...formData, images: url })}
      />
    </div>
  );
}
