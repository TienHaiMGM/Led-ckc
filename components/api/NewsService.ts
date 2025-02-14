import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  increment,
  Timestamp,
  DocumentData,
  QueryDocumentSnapshot
} from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { NewsArticle } from '../../types/news-management';
import { COLLECTIONS } from '../../utils/constants';

function convertToNewsArticle(doc: QueryDocumentSnapshot<DocumentData>): NewsArticle {
  const data = doc.data();
  return {
    id: doc.id,
    title: data.title,
    slug: data.slug,
    description: data.description,
    content: data.content,
    image: data.image,
    category: data.category,
    tags: data.tags,
    author: data.author,
    publishDate: data.publishDate.toDate().toISOString(),
    lastModified: data.lastModified.toDate().toISOString(),
    status: data.status,
    seoTitle: data.seoTitle,
    seoDescription: data.seoDescription,
    seoKeywords: data.seoKeywords,
    views: data.views,
    featured: data.featured,
  };
}

const newsCollection = collection(db, COLLECTIONS.news);

export default {
  // Get all articles
  async getAllArticles(): Promise<NewsArticle[]> {
    const querySnapshot = await getDocs(newsCollection);
    return querySnapshot.docs.map(convertToNewsArticle);
  },

  // Get published articles
  async getPublishedArticles(): Promise<NewsArticle[]> {
    const q = query(
      newsCollection,
      where('status', '==', 'published'),
      orderBy('publishDate', 'desc')
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(convertToNewsArticle);
  },

  // Get featured articles
  async getFeaturedArticles(limitTo: number = 5): Promise<NewsArticle[]> {
    const q = query(
      newsCollection,
      where('status', '==', 'published'),
      where('featured', '==', true),
      orderBy('publishDate', 'desc'),
      limit(limitTo)
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(convertToNewsArticle);
  },

  // Get articles by category
  async getArticlesByCategory(category: string): Promise<NewsArticle[]> {
    const q = query(
      newsCollection,
      where('status', '==', 'published'),
      where('category', '==', category),
      orderBy('publishDate', 'desc')
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(convertToNewsArticle);
  },

  // Get article by slug
  async getArticleBySlug(slug: string): Promise<NewsArticle | null> {
    const q = query(newsCollection, where('slug', '==', slug));
    const querySnapshot = await getDocs(q);
    
    if (querySnapshot.empty) {
      return null;
    }

    return convertToNewsArticle(querySnapshot.docs[0]);
  },

  // Save article (create or update)
  async saveArticle(article: NewsArticle): Promise<NewsArticle> {
    const now = Timestamp.now();
    const articleData = {
      ...article,
      lastModified: now,
      publishDate: article.status === 'published' ? now : null,
    };

    let docRef;
    if (article.id) {
      // Update existing article
      docRef = doc(newsCollection, article.id);
      await updateDoc(docRef, articleData);
    } else {
      // Create new article
      docRef = await addDoc(newsCollection, articleData);
      articleData.id = docRef.id;
    }

    return {
      ...articleData,
      publishDate: articleData.publishDate?.toDate().toISOString() || '',
      lastModified: articleData.lastModified.toDate().toISOString(),
    };
  },

  // Delete article
  async deleteArticle(id: string): Promise<void> {
    await deleteDoc(doc(newsCollection, id));
  },

  // Increment views
  async incrementViews(id: string): Promise<void> {
    const docRef = doc(newsCollection, id);
    await updateDoc(docRef, {
      views: increment(1)
    });
  },

  // Search articles
  async searchArticles(searchQuery: string): Promise<NewsArticle[]> {
    const q = searchQuery.toLowerCase();
    const querySnapshot = await getDocs(newsCollection);
    
    return querySnapshot.docs
      .map(convertToNewsArticle)
      .filter(article => 
        article.status === 'published' &&
        (article.title.toLowerCase().includes(q) ||
         article.description.toLowerCase().includes(q) ||
         article.content.toLowerCase().includes(q) ||
         article.tags.some(tag => tag.toLowerCase().includes(q)))
      );
  },

  // Get related articles
  async getRelatedArticles(article: NewsArticle, limitTo: number = 3): Promise<NewsArticle[]> {
    const q = query(
      newsCollection,
      where('status', '==', 'published'),
      where('category', '==', article.category),
      where('id', '!=', article.id),
      orderBy('publishDate', 'desc'),
      limit(limitTo)
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(convertToNewsArticle);
  },

  // Get articles by tag
  async getArticlesByTag(tag: string): Promise<NewsArticle[]> {
    const q = query(
      newsCollection,
      where('status', '==', 'published'),
      where('tags', 'array-contains', tag),
      orderBy('publishDate', 'desc')
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(convertToNewsArticle);
  }
};
