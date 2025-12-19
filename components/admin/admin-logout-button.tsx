"use client";

import { logoutAdmin } from "@/actions/admin-auth";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

export function AdminLogoutButton() {
  return (
    <form action={logoutAdmin}>
      <Button variant="destructive" size="sm" className="gap-2" title="Logout">
        <LogOut size={16} />
      </Button>
    </form>
  );
}
