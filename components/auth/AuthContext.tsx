"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../../lib/firebase";
import { User, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Clear any existing auth state when the component mounts
    signOut(auth).catch((error) => {
      console.error("Error clearing auth state:", error);
    });

    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);

      // If user is logged out and trying to access admin pages, redirect to login
      if (
        !user &&
        window.location.pathname.startsWith("/admin") &&
        window.location.pathname !== "/admin"
      ) {
        router.push("/admin");
      }
    });

    return () => {
      unsubscribe();
      // Clear auth state when component unmounts
      signOut(auth).catch((error) => {
        console.error("Error clearing auth state:", error);
      });
    };
  }, [router]);

  const login = async (email: string, password: string) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      console.log("Login successful:", result.user.email);
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      router.push("/admin");
      console.log("Logout successful");
    } catch (error) {
      console.error("Logout error:", error);
      throw error;
    }
  };

  const value = {
    user,
    loading,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
