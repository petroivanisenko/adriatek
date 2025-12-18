"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
const COOKIE_NAME = "admin_session";

export async function loginAdmin(prevState: any, formData: FormData) {
  const password = formData.get("password") as string;

  if (!ADMIN_PASSWORD) {
    return { error: "Admin password is not configured on the server." };
  }

  if (password !== ADMIN_PASSWORD) {
    return { error: "Invalid password." };
  }

  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, "authenticated", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24, // 24 hours
  });

  redirect("/admin/products");
}

export async function logoutAdmin() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
  redirect("/");
}

export async function checkAdminAuth() {
  const cookieStore = await cookies();
  const session = cookieStore.get(COOKIE_NAME);
  return session?.value === "authenticated";
}
