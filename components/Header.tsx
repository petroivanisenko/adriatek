import React from "react";
import Link from "next/link";
import {
  LaptopIcon,
  PackageIcon,
  InfoIcon,
  Shield,
  MailIcon,
  Cpu
} from "lucide-react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import MobileMenu from "./MobileMenu";
import HeaderCartButton from "./HeaderCartButton";
import Search from "./Search";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 pt-4 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto px-4 py-3 bg-background/60 backdrop-blur-xl border border-primary/10 rounded-2xl shadow-2xl shadow-primary/5">
        <div className="flex items-center justify-between gap-4">
          <div className="flex shrink-0">
            <Link
              href="/"
              className="flex items-center gap-2 group"
            >
              <div className="size-10 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20 transition-transform group-hover:scale-110 active:scale-95 duration-300">
                <Cpu className="size-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col -gap-1">
                <h1 className="text-foreground text-xl font-black tracking-tighter uppercase hidden sm:block leading-none">
                  Adriatek <span className="text-primary italic">Limited</span>
                </h1>
                <span className="text-[10px] text-muted-foreground font-medium tracking-[0.2em] uppercase hidden sm:block opacity-60">
                  Premium Tech Solutions
                </span>
                <h1 className="text-foreground text-lg font-black tracking-tighter uppercase sm:hidden leading-none">
                  Adriatek
                </h1>
              </div>
            </Link>
          </div>

          <div className="flex-1 max-w-xl hidden md:block">
            <Search />
          </div>

          <div className="flex items-center gap-4 xl:gap-8">
            <nav className="hidden xl:block">
              <ul className="flex items-center gap-6 font-bold text-[11px] uppercase tracking-widest text-muted-foreground">
                {process.env.NODE_ENV !== "production" && (
                  <li>
                    <Link
                      href="/admin/products"
                      className="flex gap-2 items-center hover:text-primary transition-all duration-300 py-2 relative group-nav"
                    >
                      <Shield className="size-4" />
                      <span>Admin</span>
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-nav-hover:w-full" />
                    </Link>
                  </li>
                )}
                <li>
                  <Link
                    href="/catalogue"
                    className="flex gap-2 items-center hover:text-primary transition-all duration-300 py-2 relative group-nav"
                  >
                    <LaptopIcon className="size-4" />
                    <span>Catalogue</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-nav-hover:w-full" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/delivery"
                    className="flex gap-2 items-center hover:text-primary transition-all duration-300 py-2 relative group-nav"
                  >
                    <PackageIcon className="size-4" />
                    <span>Delivery</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-nav-hover:w-full" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="flex gap-2 items-center hover:text-primary transition-all duration-300 py-2 relative group-nav"
                  >
                    <InfoIcon className="size-4" />
                    <span>About</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-nav-hover:w-full" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contacts"
                    className="flex gap-2 items-center hover:text-primary transition-all duration-300 py-2 relative group-nav"
                  >
                    <MailIcon className="size-4" />
                    <span>Contacts</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-nav-hover:w-full" />
                  </Link>
                </li>
              </ul>
            </nav>
            
            <div className="flex items-center gap-2 sm:gap-4 ml-2">
              <div className="h-8 w-px bg-primary/10 mx-2 hidden xl:block" />
              <ThemeSwitcher />
              <HeaderCartButton />
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
