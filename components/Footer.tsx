import { Clock, Mail, Pin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-muted pt-8 sm:pt-12 md:pt-16 pb-6 sm:pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Company Info */}
          <div className="flex flex-col gap-2 items-center text-center col-span-2 xs:col-span-2 sm:col-span-2 md:col-span-1 mb-4 md:mb-0">
            <div className="flex gap-2 items-center">
              <h3 className="text-lg md:text-xl font-semibold text-muted-foreground">
                ZoltanTech LTD
              </h3>
            </div>
            <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4">
              Electronics for home and office
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center text-center mb-2 md:mb-0">
            <h3 className="font-semibold mb-2 md:mb-4 text-sm md:text-base">
              Information
            </h3>
            <ul className="space-y-1 md:space-y-2 text-xs md:text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/delivery"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Delivery & Payment
                </Link>
              </li>
              <li>
                <Link
                  href="/contacts"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contacts
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="flex flex-col items-center text-center mb-2 md:mb-0">
            <h3 className="font-semibold mb-2 md:mb-4 text-sm md:text-base">
              Legal
            </h3>
            <ul className="space-y-1 md:space-y-2 text-xs md:text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info - Centered on mobile */}
          <div className="mb-2 w-full flex flex-col items-center justify-center md:mb-0 text-center md:text-left col-span-2 sm:col-span-2 md:col-span-1">
            <h3 className="font-semibold mb-2 md:mb-4 text-sm md:text-base">
              Contact Us
            </h3>
            <ul className="space-y-3 md:space-y-2 text-xs md:text-sm">
              <li className="text-muted-foreground">
                <span className="flex gap-1 items-center">
                  <Pin size={16} /> 3rd Floor, 86-90, Paul Street
                  <br />
                  London, England, EC2A 4NE
                  <br />
                  UNITED KINGDOM
                </span>
              </li>
              <li className="text-muted-foreground">
                <a
                  href="mailto:info@zoltantech-ltd.com"
                  className="flex gap-1 items-center"
                >
                  <Mail size={16} /> info@zoltantech-ltd.com
                </a>
              </li>
              <li className="text-muted-foreground">
                <span className="flex gap-1 items-center">
                  <Clock size={16} /> Mon-Fri
                  <time>9:00-18:00</time>; Sat <time>10:00-17:00</time>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t pt-4 md:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 md:gap-4">
            <p className="text-muted-foreground text-center sm:text-left text-xs sm:text-sm">
              © {new Date().getFullYear()} ZoltanTech LTD. Company number:
              16887893. All rights reserved.
            </p>
            {/* Privacy and Terms links - always in a row */}
            <div className="flex flex-row gap-4 text-center sm:text-left text-xs sm:text-sm">
              <Link
                href="/privacy"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/cookies"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Cookie Policy
              </Link>
              <Link
                href="/terms"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
