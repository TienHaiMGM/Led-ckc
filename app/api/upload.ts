import type { NextApiRequest, NextApiResponse } from "next";
import { v2 as cloudinary } from "cloudinary";
import multer from "multer";
import nextConnect from "next-connect";

// Cấu hình Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Cấu hình Multer để lưu file tạm thời
const upload = multer({ storage: multer.memoryStorage() });

const apiRoute = nextConnect({
  onError(error, req, res) {
    res.status(501).json({ error: `Có lỗi: ${error.message}` });
  },
  onNoMatch(req, res) {
    res
      .status(405)
      .json({ error: `Phương thức ${req.method} không được hỗ trợ.` });
  },
});

apiRoute.use(upload.single("ml_default"));

apiRoute.post(async (req: any, res: NextApiResponse) => {
  try {
    const result = await cloudinary.uploader.upload_stream(
      { folder: "sieu-thi-bang-hieu" },
      (error, result) => {
        if (error) return res.status(500).json({ error });
        res.status(200).json(result);
      },
    );

    if (req.file) {
      result.end(req.file.buffer);
    } else {
      res.status(400).json({ error: "Không tìm thấy file để upload." });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
});

export const config = {
  api: {
    bodyParser: false, // Cần tắt bodyParser mặc định cho Multer
  },
};

export default apiRoute;
