import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function BrandStory() {
  return (
    <section className="py-24 md:py-32 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
          <div className="flex-1 relative">
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            
            <div className="relative rounded-3xl overflow-hidden border border-primary/10 shadow-2xl">
              <Image
                src="/hero-banner2.webp"
                alt="Our Engineering Lab"
                width={800}
                height={600}
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-background/20 backdrop-blur-xl border border-white/10 rounded-2xl">
                <p className="text-white text-lg font-medium italic">
                  "Excellence is not an act, but a habit. We live by this principle every day."
                </p>
                <p className="text-white/70 text-sm mt-2 font-bold uppercase tracking-widest">
                  — Technical Director, Adriatek
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center space-x-2 text-primary font-bold uppercase tracking-widest text-sm">
              <span className="w-8 h-px bg-primary" />
              <span>Our Legacy</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
              Engineering the Future of <span className="text-primary text-stroke-1">Technology</span>
            </h2>
            
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              Founded on the pillars of innovation and reliability, Adriatek has been at 
              the forefront of high-end electronics for over a decade. We don't just sell products; 
              we curate technological solutions that empower your vision.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              {[
                "Global Sourcing Excellence",
                "Rigorous Quality Assurance",
                "24/7 Technical Support",
                "Sustainable Tech Practices",
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle2 className="size-6 text-primary shrink-0" />
                  <span className="font-bold text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
