"use client";
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "./AuthContext";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!loading && !user && pathname !== "/admin") {
      // Only redirect if we're not already on the login page
      router.push("/admin");
    }
  }, [user, loading, router, pathname]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
      </div>
    );
  }

  // If we're on the admin page and not logged in, let the page component handle showing the login form
  if (!user && pathname === "/admin") {
    return <>{children}</>;
  }

  // For other admin routes, require authentication
  if (!user) {
    return null;
  }

  return <>{children}</>;
}
