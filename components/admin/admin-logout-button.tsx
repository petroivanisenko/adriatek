"use client";

import { logoutAdmin } from "@/actions/admin-auth";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

export function AdminLogoutButton() {
  return (
    <form action={logoutAdmin}>
      <Button variant="outline" size="sm" className="gap-2">
        <LogOut size={16} />
        Logout
      </Button>
    </form>
  );
}
