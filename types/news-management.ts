export interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  image: string;
  category: string;
  tags: string[];
  author: string;
  publishDate: string;
  lastModified: string;
  status: 'draft' | 'published';
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string[];
  views: number;
  featured: boolean;
}

export const NEWS_CATEGORIES = [
  {
    id: 'tin-tuc',
    name: 'Tin Tức',
    description: 'Tin tức mới nhất về ngành quảng cáo',
  },
  {
    id: 'khuyen-mai',
    name: 'Khuyến Mãi',
    description: 'Các chương trình khuyến mãi đặc biệt',
  },
  {
    id: 'huong-dan',
    name: 'Hướng Dẫn',
    description: 'Hướng dẫn và tips về bảng hiệu',
  },
  {
    id: 'du-an',
    name: 'Dự Án',
    description: 'Các dự án tiêu biểu đã thực hiện',
  },
  {
    id: 'cong-nghe',
    name: 'Công Nghệ',
    description: 'Công nghệ mới trong ngành quảng cáo',
  },
] as const;

export type NewsCategory = typeof NEWS_CATEGORIES[number]['id'];

export interface NewsFilter {
  category?: NewsCategory;
  tag?: string;
  author?: string;
  status?: 'draft' | 'published';
  featured?: boolean;
  startDate?: string;
  endDate?: string;
  searchTerm?: string;
}

export interface NewsSortOptions {
  field: 'publishDate' | 'lastModified' | 'views' | 'title';
  direction: 'asc' | 'desc';
}

export interface NewsPaginationOptions {
  page: number;
  limit: number;
}

export interface NewsSearchResult {
  articles: NewsArticle[];
  total: number;
  page: number;
  totalPages: number;
  hasMore: boolean;
}

export interface NewsStats {
  totalArticles: number;
  publishedArticles: number;
  draftArticles: number;
  totalViews: number;
  categoryCounts: Record<NewsCategory, number>;
  topAuthors: Array<{
    author: string;
    count: number;
    views: number;
  }>;
  viewsByDate: Array<{
    date: string;
    views: number;
  }>;
}

export interface NewsEditorState {
  article: NewsArticle;
  isDirty: boolean;
  isSaving: boolean;
  errors: Record<string, string>;
  preview: boolean;
}

export interface NewsTableState {
  articles: NewsArticle[];
  selectedArticles: string[];
  sortOptions: NewsSortOptions;
  filter: NewsFilter;
  pagination: NewsPaginationOptions;
  isLoading: boolean;
  error: string | null;
}

export interface NewsAction {
  type: 'CREATE' | 'UPDATE' | 'DELETE' | 'PUBLISH' | 'UNPUBLISH';
  payload: any;
  metadata?: {
    timestamp: string;
    user: string;
    reason?: string;
  };
}

export interface NewsAuditLog {
  id: string;
  articleId: string;
  action: NewsAction;
  timestamp: string;
  user: string;
  changes: {
    before: Partial<NewsArticle>;
    after: Partial<NewsArticle>;
  };
}

export interface NewsValidationError {
  field: keyof NewsArticle;
  message: string;
  code: string;
}

export interface NewsEditorConfig {
  maxTitleLength: number;
  maxDescriptionLength: number;
  allowedImageTypes: string[];
  maxImageSize: number;
  autoSaveInterval: number;
  validationRules: {
    [K in keyof NewsArticle]?: {
      required?: boolean;
      minLength?: number;
      maxLength?: number;
      pattern?: RegExp;
      custom?: (value: any) => NewsValidationError | null;
    };
  };
}
