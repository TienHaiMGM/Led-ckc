"use client";
import UploadImage from "@/components/specific/UploadImage";
import { CldImage } from "next-cloudinary";

// By default, the CldImage component applies auto-format and auto-quality to all delivery URLs for optimized delivery.
export default function TestPage() {
  return (
    <div>
      <UploadImage />
      <CldImage
        src="banghieu_jihl8n.jpg" // Use this sample image or upload your own via the Media Explorer
        width="700" // Transform the image: auto-crop to square aspect_ratio
        height="500"
        crop="fill"
        gravity="auto"
        alt="Bảng hiệu đèn LED đẹp"
        title="Bảng hiệu đèn LED đẹp cho cửa hàng"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}
