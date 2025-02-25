import { AuthProvider } from "@/components/admin/auth/AuthContext";
export default function AdminRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthProvider>{children}</AuthProvider>;
}
