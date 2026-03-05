"use client";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CpuIcon, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-68px)] flex items-center">
      <Carousel
        className="absolute inset-0 w-full h-full"
        opts={{
          loop: true,
          align: "start",
        }}
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: true,
          }),
        ]}
      >
        <CarouselContent className="h-full">
          {[
            "/hero-unbranded-1.webp",
            "/hero-unbranded-2.webp",
            "/hero-unbranded-3.webp",
          ].map((image, index) => (
            <CarouselItem key={index} className="h-[calc(100vh-68px)]">
              <div className="relative w-full h-full">
                <div className="absolute inset-0">
                  <Image
                    src={image}
                    alt={`Tech Products ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-5000 group-hover:scale-105"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-linear-to-r from-background via-background/80 to-transparent" />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-8 right-8 flex gap-4 pointer-events-auto">
          <CarouselPrevious className="static translate-y-0 bg-background/50 backdrop-blur-md border-primary/20 hover:bg-primary/20 transition-all duration-300" />
          <CarouselNext className="static translate-y-0 bg-background/50 backdrop-blur-md border-primary/20 hover:bg-primary/20 transition-all duration-300" />
        </div>
      </Carousel>

      {/* Hero text content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 pointer-events-none">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-left w-full"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="inline-flex items-center justify-center size-14 rounded-2xl bg-primary/10 mb-6 backdrop-blur-md border border-primary/20"
            >
              <CpuIcon className="size-7 text-primary" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight text-foreground tracking-tight"
            >
              Excellence in <br />
              <span className="text-primary relative inline-block">
                Premium Tech
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 1.2 }}
                  className="absolute -bottom-2 left-0 h-1.5 bg-primary/30 rounded-full"
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-10 max-w-2xl text-muted-foreground leading-relaxed"
            >
              Adriatek Limited - Your premier European distributor for high-end
              computers, professional workstations, and state-of-the-art
              electronics.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-start items-center pointer-events-auto"
            >
              <Link href="/catalogue">
                <Button
                  size="lg"
                  className="w-52 h-14 text-lg font-medium shadow-lg shadow-primary/25 hover:scale-105 transition-transform"
                >
                  Explore Catalog
                  <Sparkles className="ml-2 size-5" />
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-52 h-14 text-lg font-medium border-primary/20 bg-background/50 backdrop-blur-md hover:bg-primary/5 hover:scale-105 transition-transform"
                >
                  Learn More
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
