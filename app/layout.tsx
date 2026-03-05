import { Onest, Raleway } from "next/font/google";
import "./globals.css";
import React from "react";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import GoTop from "@/components/GoTop";
import CookieConsent from "@/components/CookieConsent";
import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adriatek Limited | Premium Electronics",
  description:
    "Adriatek Limited - Your premier destination for high-end electronics, computers, and gadgets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${onest.variable} ${raleway.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <div className="flex flex-col min-h-screen">
            <main className="flex-1">{children}</main>
            <Toaster />
            <GoTop />
            <CookieConsent />
          </div>
        </ThemeProvider>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!} />
      </body>
    </html>
  );
}
