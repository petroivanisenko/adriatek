import React from "react";
import { checkAdminAuth } from "@/actions/admin-auth";
import { AdminLoginForm } from "@/components/admin/admin-login-form";
import { AdminLogoutButton } from "@/components/admin/admin-logout-button";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAuthenticated = await checkAdminAuth();

  if (!isAuthenticated) {
    return <AdminLoginForm />;
  }

  return (
    <>
      <div className="border-b bg-muted/40">
        <div className="container mx-auto py-2 px-4 flex justify-end">
          <AdminLogoutButton />
        </div>
      </div>
      {children}
    </>
  );
}
