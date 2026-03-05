import type { Metadata } from "next";
import "../globals.css";
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BreadcrumbProvider } from "@/components/BreadcrumbContext";
import { LayoutBreadcrumbs } from "@/components/LayoutBreadcrumbs";

export const metadata: Metadata = {
  title: "Adriatek Limited - Premium Electronics for Home and Office",
  description:
    "Adriatek Limited - Your premier destination for high-end electronics, computers, and gadgets. Quality products with SEPA bank transfer and European delivery.",
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
