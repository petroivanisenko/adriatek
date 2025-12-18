import type { Metadata } from "next";
import "../globals.css";
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BreadcrumbProvider } from "@/components/BreadcrumbContext";
import { LayoutBreadcrumbs } from "@/components/LayoutBreadcrumbs";

export const metadata: Metadata = {
  title: "ZoltanTech LTD - Electronics for Home and Office",
  description:
    "Premium electronics and tech equipment for home and office. Computers, laptops, gaming gadgets, TVs, home appliances, smart devices, and more.",
  keywords: [
    "electronics",
    "computers",
    "laptops",
    "gaming",
    "televisions",
    "home appliances",
    "smart gadgets",
    "office equipment",
    "acoustic systems",
    "backup power",
    "e-scooters",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <BreadcrumbProvider>
      <Header />
      <LayoutBreadcrumbs />
      {children}
      <Footer />
    </BreadcrumbProvider>
  );
}
