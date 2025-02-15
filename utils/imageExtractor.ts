export const extractImagesFromHtml = (htmlContent: string): string[] => {
  const imgRegex = /<img[^>]+src="([^">]+)"/g;
  const imageSet = new Set<string>();
  let match;

  while ((match = imgRegex.exec(htmlContent)) !== null) {
    if (match[1]) {
      // Filter out base64 images and ensure the URL is valid
      if (!match[1].startsWith("data:") && match[1].startsWith("http")) {
        imageSet.add(match[1]);
      }
    }
  }

  return Array.from(imageSet); // Convert Set to Array
};
