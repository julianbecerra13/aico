"use client";

import { useAuth } from "@/lib/auth-context";
import LoginPage from "./LoginPage";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <LoginPage />;
  }

  return <>{children}</>;
}
