import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { storage } from "../lib/firebase";
import { IMAGE_CONFIG } from "./constants";

interface UploadOptions {
  folder?: string;
  maxSize?: number;
  allowedTypes?: string[];
  generateUniqueName?: boolean;
}

interface ImageDimensions {
  width: number;
  height: number;
}

interface ProcessedImage {
  url: string;
  path: string;
  dimensions: ImageDimensions;
  size: number;
}

// Get file extension
function getFileExtension(filename: string): string {
  return filename.slice(((filename.lastIndexOf(".") - 1) >>> 0) + 2);
}

// Generate unique filename
function generateUniqueFilename(originalName: string): string {
  const extension = getFileExtension(originalName);
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 15);
  return `${timestamp}-${random}.${extension}`;
}

// Validate file
async function validateFile(
  file: File,
  options: UploadOptions = {},
): Promise<void> {
  const {
    maxSize = IMAGE_CONFIG.maxSize,
    allowedTypes = IMAGE_CONFIG.acceptedTypes,
  } = options;

  // Check file size
  if (file.size > maxSize) {
    throw new Error(`File size exceeds ${maxSize / (1024 * 1024)}MB limit`);
  }

  // Check file type
  if (!allowedTypes.includes(file.type)) {
    throw new Error(
      `File type ${file.type} not allowed. Allowed types: ${allowedTypes.join(", ")}`,
    );
  }
}

// Get image dimensions
function getImageDimensions(file: File): Promise<ImageDimensions> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      resolve({
        width: img.width,
        height: img.height,
      });
    };
    img.onerror = () => {
      reject(new Error("Failed to load image"));
    };
    img.src = URL.createObjectURL(file);
  });
}

// Upload file to Firebase Storage
export async function uploadFile(
  file: File,
  options: UploadOptions = {},
): Promise<ProcessedImage> {
  const { folder = "uploads", generateUniqueName = true } = options;

  try {
    // Validate file
    await validateFile(file, options);

    // Get storage reference
    const filename = generateUniqueName
      ? generateUniqueFilename(file.name)
      : file.name;
    const filePath = `${folder}/${filename}`;
    const storageRef = ref(storage, filePath);

    // Upload file
    await uploadBytes(storageRef, file);

    // Get download URL
    const url = await getDownloadURL(storageRef);

    // Get image dimensions if it's an image
    let dimensions: ImageDimensions = { width: 0, height: 0 };
    if (file.type.startsWith("image/")) {
      dimensions = await getImageDimensions(file);
    }

    return {
      url,
      path: filePath,
      dimensions,
      size: file.size,
    };
  } catch (error) {
    console.error("Upload error:", error);
    throw error;
  }
}

// Delete file from Firebase Storage
export async function deleteFile(path: string): Promise<void> {
  try {
    const fileRef = ref(storage, path);
    await deleteObject(fileRef);
  } catch (error) {
    console.error("Delete error:", error);
    throw error;
  }
}

// Upload multiple files
export async function uploadMultipleFiles(
  files: File[],
  options: UploadOptions = {},
): Promise<ProcessedImage[]> {
  const uploadPromises = files.map((file) => uploadFile(file, options));
  return Promise.all(uploadPromises);
}

// Process image before upload (resize, compress, etc.)
export async function processImage(
  file: File,
  maxWidth: number = IMAGE_CONFIG.dimensions.large.width,
  maxHeight: number = IMAGE_CONFIG.dimensions.large.height,
  quality: number = 0.8,
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      // Calculate new dimensions
      let width = img.width;
      let height = img.height;

      if (width > maxWidth) {
        height = (height * maxWidth) / width;
        width = maxWidth;
      }

      if (height > maxHeight) {
        width = (width * maxHeight) / height;
        height = maxHeight;
      }

      // Create canvas
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;

      // Draw and compress image
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        reject(new Error("Failed to get canvas context"));
        return;
      }

      ctx.drawImage(img, 0, 0, width, height);

      // Convert to blob
      canvas.toBlob(
        (blob) => {
          if (blob) {
            resolve(blob);
          } else {
            reject(new Error("Failed to convert canvas to blob"));
          }
        },
        "image/jpeg",
        quality,
      );
    };

    img.onerror = () => {
      reject(new Error("Failed to load image"));
    };

    img.src = URL.createObjectURL(file);
  });
}

// Create thumbnail
export async function createThumbnail(
  file: File,
  width: number = IMAGE_CONFIG.dimensions.thumbnail.width,
  height: number = IMAGE_CONFIG.dimensions.thumbnail.height,
): Promise<Blob> {
  return processImage(file, width, height, 0.7);
}

// Check if file exists in storage
export async function fileExists(path: string): Promise<boolean> {
  try {
    const fileRef = ref(storage, path);
    await getDownloadURL(fileRef);
    return true;
  } catch (error) {
    return false;
  }
}

// Get file metadata
export async function getFileMetadata(file: File): Promise<{
  size: number;
  type: string;
  lastModified: number;
  dimensions?: ImageDimensions;
}> {
  const metadata = {
    size: file.size,
    type: file.type,
    lastModified: file.lastModified,
  };

  if (file.type.startsWith("image/")) {
    const dimensions = await getImageDimensions(file);
    return { ...metadata, dimensions };
  }

  return metadata;
}
