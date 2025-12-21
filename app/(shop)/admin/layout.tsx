import React from "react";
import { checkAdminAuth } from "@/actions/admin-auth";
import { AdminLoginForm } from "@/components/admin/AdminLoginForm";
import { AdminLogoutButton } from "@/components/admin/AdminLogoutButton";

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
      <div className="border-b">
        <div className="container mx-auto py-2 px-4 flex justify-end">
          <AdminLogoutButton />
        </div>
      </div>
      {children}
    </>
  );
}
