"use client";
import {
  MenuIcon,
  LaptopIcon,
  PackageIcon,
  MailIcon,
  InfoIcon,
  Cpu,
  X,
} from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "./ui/sheet";
import Link from "next/link";
import Search from "./Search";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileMenu() {
  const navItems = [
    { href: "/catalogue", label: "Catalogue", icon: LaptopIcon },
    { href: "/delivery", label: "Delivery", icon: PackageIcon },
    { href: "/about", label: "About Us", icon: InfoIcon },
    { href: "/contacts", label: "Contacts", icon: MailIcon },
  ];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="xl:hidden size-10 rounded-xl bg-background/50 backdrop-blur-md border border-primary/10 hover:bg-primary/5 hover:border-primary/20 transition-all duration-300"
        >
          <MenuIcon className="size-5 text-foreground" />
        </Button>
      </SheetTrigger>
      <SheetContent 
        side="right" 
        className="w-full sm:max-w-md border-l border-primary/10 bg-background/80 backdrop-blur-2xl p-0 flex flex-col"
      >
        <div className="p-6 flex flex-col h-full">
          <div className="flex items-center justify-between mb-8">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="size-10 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20 transition-transform group-hover:scale-110 duration-300">
                <Cpu className="size-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col -gap-1 text-left">
                <h1 className="text-foreground text-xl font-black tracking-tighter uppercase leading-none">
                  Adriatek <span className="text-primary italic">Limited</span>
                </h1>
                <span className="text-[10px] text-muted-foreground font-medium tracking-[0.2em] uppercase opacity-60">
                  Premium Tech
                </span>
              </div>
            </Link>
          </div>

          <div className="mb-8">
            <Search />
          </div>

          <nav className="flex-1">
            <ul className="space-y-4">
              <AnimatePresence>
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <SheetClose asChild>
                      <Link
                        href={item.href}
                        className="flex items-center gap-4 p-4 rounded-2xl bg-primary/5 border border-primary/5 hover:bg-primary/10 hover:border-primary/20 transition-all group"
                      >
                        <div className="size-12 rounded-xl bg-background/50 flex items-center justify-center shadow-sm border border-primary/5 group-hover:scale-110 group-hover:bg-primary group-active:scale-95 transition-all duration-300">
                          <item.icon className="size-5 text-primary group-hover:text-primary-foreground transition-colors" />
                        </div>
                        <span className="text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                          {item.label}
                        </span>
                      </Link>
                    </SheetClose>
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>
          </nav>

          <div className="mt-auto pt-8 border-t border-primary/10">
            <p className="text-xs text-muted-foreground text-center font-medium tracking-widest uppercase opacity-40">
              © 2025 Adriatek Limited
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
