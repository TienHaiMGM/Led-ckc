"use client";

import { useEffect, useState } from 'react';
import { app } from '@/lib/firebase';
import { AuthProvider } from '@/components/auth/AuthContext';

interface FirebaseProviderProps {
  children: React.ReactNode;
}

export default function FirebaseProvider({ children }: FirebaseProviderProps) {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const initializeFirebase = async () => {
      try {
        // Check if Firebase is initialized
        if (app) {
          setIsInitialized(true);
        }
      } catch (error) {
        console.error('Failed to initialize Firebase:', error);
      }
    };

    initializeFirebase();
  }, []);

  if (!isInitialized) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-blue-600 border-r-transparent"></div>
          <p className="mt-2 text-gray-600">Đang khởi tạo...</p>
        </div>
      </div>
    );
  }

  return <AuthProvider>{children}</AuthProvider>;
}

// HOC for wrapping components that require Firebase
export function withFirebase<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  return function WithFirebaseWrapper(props: P) {
    return (
      <FirebaseProvider>
        <WrappedComponent {...props} />
      </FirebaseProvider>
    );
  };
}

// Hook to ensure Firebase is available
export function useFirebase() {
  const [isAvailable, setIsAvailable] = useState(false);

  useEffect(() => {
    const checkFirebase = async () => {
      try {
        if (app) {
          setIsAvailable(true);
        }
      } catch (error) {
        console.error('Firebase not available:', error);
      }
    };

    checkFirebase();
  }, []);

  return { isAvailable, app };
}
