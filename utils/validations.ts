import { z } from 'zod';
import { ERROR_MESSAGES } from './constants';

// Common validation patterns
const patterns = {
  phone: /(84|0[3|5|7|8|9])+([0-9]{8})\b/,
  slug: /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
  url: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
};

// Base schemas for reuse
const baseMetadataSchema = z.object({
  title: z.string().min(1, ERROR_MESSAGES.REQUIRED_FIELD),
  description: z.string().min(1, ERROR_MESSAGES.REQUIRED_FIELD),
  keywords: z.array(z.string()).optional(),
});

const baseTimestampSchema = z.object({
  createdAt: z.string().datetime().optional(),
  updatedAt: z.string().datetime().optional(),
});

// News Article Schema
export const newsArticleSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(1, ERROR_MESSAGES.REQUIRED_FIELD),
  slug: z.string().regex(patterns.slug, 'Invalid slug format'),
  description: z.string().min(1, ERROR_MESSAGES.REQUIRED_FIELD),
  content: z.string().min(1, ERROR_MESSAGES.REQUIRED_FIELD),
  image: z.string().url('Invalid image URL'),
  category: z.string().min(1, ERROR_MESSAGES.REQUIRED_FIELD),
  tags: z.array(z.string()),
  author: z.string().min(1, ERROR_MESSAGES.REQUIRED_FIELD),
  publishDate: z.string().datetime(),
  lastModified: z.string().datetime(),
  status: z.enum(['draft', 'published']),
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional(),
  seoKeywords: z.array(z.string()).optional(),
  views: z.number().int().nonnegative(),
  featured: z.boolean(),
});

// Contact Form Schema
export const contactFormSchema = z.object({
  name: z.string().min(1, ERROR_MESSAGES.REQUIRED_FIELD),
  email: z.string().email(ERROR_MESSAGES.INVALID_EMAIL),
  phone: z.string().regex(patterns.phone, ERROR_MESSAGES.INVALID_PHONE),
  message: z.string().min(10, 'Tin nhắn phải có ít nhất 10 ký tự'),
});

// Login Form Schema
export const loginFormSchema = z.object({
  email: z.string().email(ERROR_MESSAGES.INVALID_EMAIL),
  password: z.string().min(6, ERROR_MESSAGES.INVALID_PASSWORD),
  remember: z.boolean().optional(),
});

// Image Upload Schema
export const imageUploadSchema = z.object({
  file: z.instanceof(File),
  type: z.enum(['news', 'product', 'banner']),
  maxSize: z.number().optional(),
  dimensions: z.object({
    width: z.number().optional(),
    height: z.number().optional(),
  }).optional(),
});

// Search Query Schema
export const searchQuerySchema = z.object({
  query: z.string().min(1, 'Please enter a search term'),
  category: z.string().optional(),
  page: z.number().int().positive().optional(),
  limit: z.number().int().positive().optional(),
  sort: z.enum(['date', 'relevance', 'views']).optional(),
  order: z.enum(['asc', 'desc']).optional(),
});

// Comment Schema
export const commentSchema = z.object({
  articleId: z.string(),
  author: z.string().min(1, ERROR_MESSAGES.REQUIRED_FIELD),
  content: z.string().min(1, ERROR_MESSAGES.REQUIRED_FIELD),
  email: z.string().email(ERROR_MESSAGES.INVALID_EMAIL),
  website: z.string().url().optional(),
  parentId: z.string().optional(),
}).merge(baseTimestampSchema);

// Settings Schema
export const settingsSchema = z.object({
  siteName: z.string(),
  siteDescription: z.string(),
  logo: z.string().url(),
  favicon: z.string().url(),
  contactEmail: z.string().email(),
  contactPhone: z.string().regex(patterns.phone),
  address: z.string(),
  socialLinks: z.object({
    facebook: z.string().url().optional(),
    twitter: z.string().url().optional(),
    instagram: z.string().url().optional(),
    youtube: z.string().url().optional(),
  }),
  analytics: z.object({
    googleAnalyticsId: z.string().optional(),
    facebookPixelId: z.string().optional(),
  }),
});

// Helper function to validate data against a schema
export function validateData<T extends z.ZodType>(
  schema: T,
  data: unknown
): { success: true; data: z.infer<T> } | { success: false; error: z.ZodError } {
  try {
    const validData = schema.parse(data);
    return { success: true, data: validData };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error };
    }
    throw error;
  }
}

// Helper function to get form error messages
export function getFormErrors(error: z.ZodError): Record<string, string> {
  const errors: Record<string, string> = {};
  error.errors.forEach((err) => {
    if (err.path) {
      errors[err.path.join('.')] = err.message;
    }
  });
  return errors;
}

// Export types
export type NewsArticle = z.infer<typeof newsArticleSchema>;
export type ContactForm = z.infer<typeof contactFormSchema>;
export type LoginForm = z.infer<typeof loginFormSchema>;
export type ImageUpload = z.infer<typeof imageUploadSchema>;
export type SearchQuery = z.infer<typeof searchQuerySchema>;
export type Comment = z.infer<typeof commentSchema>;
export type Settings = z.infer<typeof settingsSchema>;
