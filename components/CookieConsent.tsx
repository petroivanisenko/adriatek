"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CookieIcon, X } from "lucide-react";
import Link from "next/link";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("zoltantech-cookie-consent");
    if (!cookieConsent) {
      setTimeout(() => {
        setShowBanner(true);
        setTimeout(() => setIsVisible(true), 100);
      }, 1000);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("zoltantech-cookie-consent", "accepted");
    localStorage.setItem(
      "zoltantech-cookie-consent-date",
      new Date().toISOString(),
    );
    closeBanner();
  };

  const rejectCookies = () => {
    localStorage.setItem("zoltantech-cookie-consent", "rejected");
    localStorage.setItem(
      "zoltantech-cookie-consent-date",
      new Date().toISOString(),
    );
    closeBanner();
  };

  const closeBanner = () => {
    setIsVisible(false);
    setTimeout(() => setShowBanner(false), 300);
  };

  if (!showBanner) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-100 p-4 transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      <Card className="max-w-4xl mx-auto border-2 border-primary/20 shadow-2xl bg-background">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center size-10 rounded-full bg-primary/10">
                <CookieIcon className="size-5 text-primary" />
              </div>
              <CardTitle className="text-xl">Cookie Notice</CardTitle>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="shrink-0"
              onClick={closeBanner}
              aria-label="Close cookie banner"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="pb-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            We use cookies to enhance your browsing experience, analyze site
            traffic, and provide personalized content. By clicking &quot;Accept
            All&quot;, you consent to our use of cookies in accordance with our{" "}
            <Link
              href="/cookies"
              className="text-primary hover:underline font-medium"
            >
              Cookie Policy
            </Link>
            . You can manage your preferences or reject non-essential cookies by
            clicking &quot;Reject&quot;. For more information about how we
            handle your data, please see our{" "}
            <Link
              href="/privacy"
              className="text-primary hover:underline font-medium"
            >
              Privacy Policy
            </Link>
            .
          </p>
          <p className="text-xs text-muted-foreground mt-3">
            <strong>ZoltanTech LTD</strong> (Company Number: 16887893) is
            committed to protecting your privacy and complying with GDPR and UK
            Data Protection Act 2018.
          </p>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row gap-3 pt-0">
          <Button
            onClick={acceptCookies}
            className="w-full sm:w-auto"
            size="lg"
          >
            Accept All Cookies
          </Button>
          <Button
            onClick={rejectCookies}
            variant="outline"
            className="w-full sm:w-auto"
            size="lg"
          >
            Reject Non-Essential
          </Button>
          <Link href="/cookies" className="w-full sm:w-auto">
            <Button variant="ghost" className="w-full" size="lg">
              Manage Preferences
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
