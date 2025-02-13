"use client";
import { AuthProvider } from "../../components/auth/AuthContext";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log("Admin layout rendering");

  return (
    <div className="min-h-screen">
      <AuthProvider>{children}</AuthProvider>
    </div>
  );
}
