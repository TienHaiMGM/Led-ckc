import { ERROR_MESSAGES } from './constants';

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: ApiError;
  message?: string;
}

export interface ApiError {
  code: string;
  message: string;
  details?: any;
}

export interface PaginatedResponse<T> extends ApiResponse {
  data: {
    items: T[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

// Error Codes
export const ErrorCodes = {
  UNAUTHORIZED: 'UNAUTHORIZED',
  FORBIDDEN: 'FORBIDDEN',
  NOT_FOUND: 'NOT_FOUND',
  VALIDATION_ERROR: 'VALIDATION_ERROR',
  SERVER_ERROR: 'SERVER_ERROR',
  NETWORK_ERROR: 'NETWORK_ERROR',
} as const;

// HTTP Status Codes
export const StatusCodes = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  VALIDATION_ERROR: 422,
  SERVER_ERROR: 500,
} as const;

// Create API Response
export function createApiResponse<T>(
  success: boolean,
  data?: T,
  error?: ApiError,
  message?: string
): ApiResponse<T> {
  return {
    success,
    ...(data && { data }),
    ...(error && { error }),
    ...(message && { message }),
  };
}

// Create Error Response
export function createErrorResponse(
  code: keyof typeof ErrorCodes,
  message: string = ERROR_MESSAGES.SERVER_ERROR,
  details?: any
): ApiResponse {
  return createApiResponse(
    false,
    undefined,
    {
      code: ErrorCodes[code],
      message,
      details,
    }
  );
}

// Create Success Response
export function createSuccessResponse<T>(
  data: T,
  message?: string
): ApiResponse<T> {
  return createApiResponse(true, data, undefined, message);
}

// Create Paginated Response
export function createPaginatedResponse<T>(
  items: T[],
  total: number,
  page: number,
  limit: number
): PaginatedResponse<T> {
  return {
    success: true,
    data: {
      items,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    },
  };
}

// Handle API Error
export function handleApiError(error: any): ApiResponse {
  console.error('API Error:', error);

  if (error.response) {
    // Server responded with error
    const { status, data } = error.response;
    switch (status) {
      case StatusCodes.UNAUTHORIZED:
        return createErrorResponse('UNAUTHORIZED', ERROR_MESSAGES.UNAUTHORIZED);
      case StatusCodes.FORBIDDEN:
        return createErrorResponse('FORBIDDEN', 'Access denied');
      case StatusCodes.NOT_FOUND:
        return createErrorResponse('NOT_FOUND', ERROR_MESSAGES.NOT_FOUND);
      case StatusCodes.VALIDATION_ERROR:
        return createErrorResponse('VALIDATION_ERROR', 'Validation error', data);
      default:
        return createErrorResponse('SERVER_ERROR', ERROR_MESSAGES.SERVER_ERROR);
    }
  }

  if (error.request) {
    // Request made but no response received
    return createErrorResponse('NETWORK_ERROR', ERROR_MESSAGES.NETWORK_ERROR);
  }

  // Something else happened
  return createErrorResponse('SERVER_ERROR', error.message || ERROR_MESSAGES.SERVER_ERROR);
}

// Parse Query Parameters
export function parseQueryParams(params: Record<string, any>): URLSearchParams {
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      if (Array.isArray(value)) {
        value.forEach(v => searchParams.append(key, v.toString()));
      } else if (typeof value === 'object') {
        searchParams.append(key, JSON.stringify(value));
      } else {
        searchParams.append(key, value.toString());
      }
    }
  });

  return searchParams;
}

// Format API URL
export function formatApiUrl(path: string, params?: Record<string, any>): string {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || '';
  const url = new URL(path, baseUrl);

  if (params) {
    url.search = parseQueryParams(params).toString();
  }

  return url.toString();
}

// Fetch with timeout
export async function fetchWithTimeout(
  input: RequestInfo,
  init?: RequestInit & { timeout?: number }
): Promise<Response> {
  const { timeout = 5000, ...options } = init || {};

  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(input, {
      ...options,
      signal: controller.signal,
    });
    clearTimeout(id);
    return response;
  } catch (error) {
    clearTimeout(id);
    throw error;
  }
}

// Retry failed requests
export async function fetchWithRetry(
  input: RequestInfo,
  init?: RequestInit & { retries?: number; delay?: number }
): Promise<Response> {
  const { retries = 3, delay = 1000, ...options } = init || {};

  for (let i = 0; i < retries; i++) {
    try {
      return await fetch(input, options);
    } catch (error) {
      if (i === retries - 1) throw error;
      await new Promise(resolve => setTimeout(resolve, delay * Math.pow(2, i)));
    }
  }

  throw new Error('Failed after retries');
}
