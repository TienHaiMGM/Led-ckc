import { CACHE_DURATION } from './constants';

interface CacheOptions {
  duration?: number;
  prefix?: string;
}

interface CacheItem<T> {
  value: T;
  timestamp: number;
  expiry: number;
}

class Cache {
  private prefix: string;

  constructor(prefix: string = 'app_cache_') {
    this.prefix = prefix;
  }

  private getKey(key: string): string {
    return `${this.prefix}${key}`;
  }

  // Set item in cache
  set<T>(
    key: string,
    value: T,
    options: CacheOptions = {}
  ): void {
    const { duration = CACHE_DURATION.MEDIUM } = options;

    const item: CacheItem<T> = {
      value,
      timestamp: Date.now(),
      expiry: Date.now() + duration * 1000,
    };

    try {
      localStorage.setItem(
        this.getKey(key),
        JSON.stringify(item)
      );
    } catch (error) {
      console.error('Cache set error:', error);
      this.clearExpired(); // Try to free up space
    }
  }

  // Get item from cache
  get<T>(key: string): T | null {
    try {
      const item = localStorage.getItem(this.getKey(key));
      if (!item) return null;

      const parsedItem: CacheItem<T> = JSON.parse(item);

      // Check if item has expired
      if (Date.now() > parsedItem.expiry) {
        this.remove(key);
        return null;
      }

      return parsedItem.value;
    } catch (error) {
      console.error('Cache get error:', error);
      return null;
    }
  }

  // Remove item from cache
  remove(key: string): void {
    try {
      localStorage.removeItem(this.getKey(key));
    } catch (error) {
      console.error('Cache remove error:', error);
    }
  }

  // Clear all cache
  clear(): void {
    try {
      Object.keys(localStorage)
        .filter(key => key.startsWith(this.prefix))
        .forEach(key => localStorage.removeItem(key));
    } catch (error) {
      console.error('Cache clear error:', error);
    }
  }

  // Clear expired items
  clearExpired(): void {
    try {
      Object.keys(localStorage)
        .filter(key => key.startsWith(this.prefix))
        .forEach(key => {
          const item = localStorage.getItem(key);
          if (!item) return;

          const parsedItem: CacheItem<any> = JSON.parse(item);
          if (Date.now() > parsedItem.expiry) {
            localStorage.removeItem(key);
          }
        });
    } catch (error) {
      console.error('Cache clearExpired error:', error);
    }
  }

  // Get cache size
  size(): number {
    try {
      return Object.keys(localStorage)
        .filter(key => key.startsWith(this.prefix))
        .reduce((size, key) => {
          const item = localStorage.getItem(key);
          return size + (item ? item.length : 0);
        }, 0);
    } catch (error) {
      console.error('Cache size error:', error);
      return 0;
    }
  }

  // Get all keys
  keys(): string[] {
    try {
      return Object.keys(localStorage)
        .filter(key => key.startsWith(this.prefix))
        .map(key => key.slice(this.prefix.length));
    } catch (error) {
      console.error('Cache keys error:', error);
      return [];
    }
  }

  // Check if key exists
  has(key: string): boolean {
    return this.get(key) !== null;
  }
}

// Create cache instances for different purposes
export const pageCache = new Cache('page_');
export const apiCache = new Cache('api_');
export const userCache = new Cache('user_');
export const settingsCache = new Cache('settings_');

// Cache decorator for class methods
export function cached(duration: number = CACHE_DURATION.MEDIUM) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;
    const cache = new Cache(`method_${propertyKey}_`);

    descriptor.value = async function (...args: any[]) {
      const key = JSON.stringify(args);
      const cachedResult = cache.get(key);

      if (cachedResult !== null) {
        return cachedResult;
      }

      const result = await originalMethod.apply(this, args);
      cache.set(key, result, { duration });
      return result;
    };

    return descriptor;
  };
}

// Memory cache for temporary storage
export class MemoryCache {
  private static instance: MemoryCache;
  private cache: Map<string, CacheItem<any>>;

  private constructor() {
    this.cache = new Map();
  }

  static getInstance(): MemoryCache {
    if (!MemoryCache.instance) {
      MemoryCache.instance = new MemoryCache();
    }
    return MemoryCache.instance;
  }

  set<T>(key: string, value: T, duration: number = CACHE_DURATION.SHORT): void {
    this.cache.set(key, {
      value,
      timestamp: Date.now(),
      expiry: Date.now() + duration * 1000,
    });
  }

  get<T>(key: string): T | null {
    const item = this.cache.get(key);
    if (!item) return null;

    if (Date.now() > item.expiry) {
      this.cache.delete(key);
      return null;
    }

    return item.value;
  }

  remove(key: string): void {
    this.cache.delete(key);
  }

  clear(): void {
    this.cache.clear();
  }

  size(): number {
    return this.cache.size;
  }
}

export const memoryCache = MemoryCache.getInstance();
