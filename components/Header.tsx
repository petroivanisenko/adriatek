import React from "react";
import Link from "next/link";
import {
  LaptopIcon,
  PackageIcon,
  InfoIcon,
  PhoneIcon,
  Shield,
  MailIcon,
} from "lucide-react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import MobileMenu from "./MobileMenu";
import HeaderCartButton from "./HeaderCartButton";
import Search from "./Search";
const Header = () => {
  return (
    <header className="bg-background border-b sticky top-0 z-50">
      <div className="container mx-auto py-4 max-sm:pl-2">
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <Link
              href="/"
              className="flex items-center gap-2 max-md:mx-auto mx-0"
            >
              <h1 className="text-center text-foreground text-2xl font-semibold tracking-tight max-sm:text-lg max-md:text-xl">
                ZoltanTech
              </h1>
            </Link>
          </div>
          <div className="mx-8 max-md:hidden w-full">
            <Search />
          </div>

          <div className="flex items-center gap-4 max-sm:gap-2">
            <nav className="max-lg:hidden">
              <ul className="flex items-center justify-center gap-6 max-xl:gap-4 font-onest text-md font-semibold text-sm max-xl:text-xs">
                {process.env.NODE_ENV !== "production" && (
                  <li title="Admin">
                    <Link
                      href="/admin/products"
                      className="flex gap-1 items-center text-muted-foreground hover:text-foreground duration-150"
                    >
                      <Shield size={20} />
                      <h3 className="font-bold">Admin</h3>
                    </Link>
                  </li>
                )}
                <li title="Catalogue">
                  <Link
                    href="/catalogue"
                    className="flex gap-1 items-center text-muted-foreground hover:text-foreground duration-150"
                  >
                    <LaptopIcon size={20} />
                    <h3 className="font-bold">Catalogue</h3>
                  </Link>
                </li>
                <li title="Delivery & Payment">
                  <Link
                    href="/delivery"
                    className="flex gap-1 items-center text-muted-foreground hover:text-foreground duration-150"
                  >
                    <PackageIcon size={20} />
                    <h3 className="font-bold">Delivery</h3>
                  </Link>
                </li>
                <li title="About Us">
                  <Link
                    href="/about"
                    className="flex gap-1 items-center text-muted-foreground hover:text-foreground duration-150"
                  >
                    <InfoIcon size={20} />
                    <h3 className="font-bold">About</h3>
                  </Link>
                </li>
                <li title="Contact Us">
                  <Link
                    href="/contacts"
                    className="flex gap-1 items-center text-muted-foreground hover:text-foreground duration-150"
                  >
                    <MailIcon size={20} />
                    <h3 className="font-bold">Contacts</h3>
                  </Link>
                </li>
              </ul>
            </nav>
            <ThemeSwitcher />
            <HeaderCartButton />
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
