"use client"
import { db } from './firebaseConfig';
import { 
  collection, 
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc, 
  query, 
  where, 
  orderBy, 
  limit,
  DocumentData,
  QuerySnapshot,
  Timestamp,
  serverTimestamp
} from 'firebase/firestore';

// Define interfaces for type safety
interface FirestoreDocument {
  id: string;
  [key: string]: any;
}

interface Product {
  title: string;
  description?: string;
  image: string;
  price: number;
  category: string;
  createdAt?: any;
  updatedAt?: any;
}

interface QueryOptions {
  collectionName: string;
  whereConditions?: {
    field: string;
    operator: "==" | ">" | "<" | ">=" | "<=";
    value: any;
  }[];
  orderByField?: string;
  orderDirection?: 'asc' | 'desc';
  limitCount?: number;
}

class DatabaseService {
  // Fetch all documents from a collection
  static async getCollection(collectionName: string): Promise<FirestoreDocument[]> {
    try {
      const collectionRef = collection(db, collectionName);
      const snapshot = await getDocs(collectionRef);
      return this.processQuerySnapshot(snapshot);
    } catch (error) {
      console.error('Error fetching collection:', error);
      throw new Error(`Failed to fetch collection ${collectionName}`);
    }
  }

  // Fetch a single document by ID
  static async getDocument(collectionName: string, documentId: string): Promise<FirestoreDocument | null> {
    try {
      const docRef = doc(db, collectionName, documentId);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        return {
          id: docSnap.id,
          ...docSnap.data()
        };
      }
      return null;
    } catch (error) {
      console.error('Error fetching document:', error);
      throw new Error(`Failed to fetch document ${documentId} from ${collectionName}`);
    }
  }

  // Add a new document
  static async addDocument(collectionName: string, data: Product): Promise<string> {
    try {
      // Validate required fields
      if (!this.validateProduct(data)) {
        throw new Error('Missing required fields');
      }

      // Add timestamps
      const documentData = {
        ...data,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      };

      const collectionRef = collection(db, collectionName);
      const docRef = await addDoc(collectionRef, documentData);
      
      console.log('Document added successfully with ID:', docRef.id);
      return docRef.id;
    } catch (error) {
      console.error('Error adding document:', error);
      throw new Error(`Failed to add document to ${collectionName}: ${error}`);
    }
  }

  // Update an existing document
  static async updateDocument(collectionName: string, documentId: string, data: Partial<Product>): Promise<void> {
    try {
      const docRef = doc(db, collectionName, documentId);
      
      // Add updated timestamp
      const updateData = {
        ...data,
        updatedAt: serverTimestamp()
      };

      await updateDoc(docRef, updateData);
      console.log('Document updated successfully:', documentId);
    } catch (error) {
      console.error('Error updating document:', error);
      throw new Error(`Failed to update document ${documentId}`);
    }
  }

  // Delete a document
  static async deleteDocument(collectionName: string, documentId: string): Promise<void> {
    try {
      const docRef = doc(db, collectionName, documentId);
      await deleteDoc(docRef);
      console.log('Document deleted successfully:', documentId);
    } catch (error) {
      console.error('Error deleting document:', error);
      throw new Error(`Failed to delete document ${documentId}`);
    }
  }

  // Advanced query with multiple conditions
  static async queryCollection(options: QueryOptions): Promise<FirestoreDocument[]> {
    try {
      const collectionRef = collection(db, options.collectionName);
      let queryRef = query(collectionRef);
      
      if (options.whereConditions) {
        options.whereConditions.forEach((condition) => {
          queryRef = query(queryRef, where(condition.field, condition.operator, condition.value));
        });
      }

      if (options.orderByField) {
        queryRef = query(queryRef, orderBy(options.orderByField, options.orderDirection || 'desc'));
      }

      if (options.limitCount) {
        queryRef = query(queryRef, limit(options.limitCount));
      }

      const snapshot = await getDocs(queryRef);
      return this.processQuerySnapshot(snapshot);
    } catch (error) {
      console.error('Error querying collection:', error);
      throw new Error(`Failed to query collection ${options.collectionName}`);
    }
  }

  // Helper method to process query snapshots
  private static processQuerySnapshot(snapshot: QuerySnapshot<DocumentData>): FirestoreDocument[] {
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  }

  // Validate product data
  private static validateProduct(data: Product): boolean {
    return !!(
      data.title &&
      typeof data.title === 'string' &&
      data.image &&
      typeof data.image === 'string' &&
      data.price &&
      typeof data.price === 'number' &&
      data.category &&
      typeof data.category === 'string'
    );
  }
}

export default DatabaseService;
