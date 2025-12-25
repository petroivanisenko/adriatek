import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function BrandStory() {
  return (
    <section className="py-24 md:py-32 bg-muted/30 relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute -top-64 -left-64 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-20 md:gap-32">
          <div className="flex-1 relative order-2 lg:order-1">
            <div className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] group">
              <Image
                src="/hero-unbranded-2.webp"
                alt="Our Engineering Excellence"
                width={800}
                height={1000}
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-10 left-10 right-10 p-10 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-4xl transform transition-all duration-700 group-hover:-translate-y-2">
                <p className="text-white text-xl font-medium italic leading-relaxed">
                  "Excellence is not an act, but a habit. We live by this principle every day."
                </p>
                <div className="flex items-center gap-4 mt-8">
                  <div className="h-px w-8 bg-primary" />
                  <p className="text-white/70 text-sm font-bold uppercase tracking-[0.3em]">
                    Adriatek Engineering
                  </p>
                </div>
              </div>
            </div>
            
            {/* Stat badge */}
            <div className="absolute -top-10 -right-10 size-40 bg-primary rounded-full hidden md:flex flex-col items-center justify-center text-white border-8 border-background shadow-2xl z-20 animate-bounce-slow">
              <span className="text-4xl font-black">10+</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-center px-4 leading-tight">Years of Innovation</span>
            </div>
          </div>

          <div className="flex-1 space-y-12 order-1 lg:order-2">
            <div className="inline-flex items-center space-x-4 text-primary font-bold uppercase tracking-[0.3em] text-xs">
              <span className="w-12 h-px bg-primary" />
              <span>Our Legacy</span>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.95]">
                Engineering the <br /> 
                <span className="text-primary decoration-primary/30 underline-offset-12 underline">Future</span> of Tech
              </h2>
              
              <p className="text-muted-foreground text-xl md:text-2xl leading-relaxed font-medium">
                Founded on the pillars of innovation and reliability, Adriatek has been at 
                the forefront of high-end electronics for over a decade.
              </p>
            </div>

            <p className="text-muted-foreground/80 text-lg leading-relaxed max-w-xl">
              We don't just sell products; we curate technological solutions that empower your vision. 
              Our commitment to quality ensures that every component exceeds industry standards.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-12 pt-4">
              {[
                "Global Sourcing",
                "Quality Assurance",
                "24/7 Tech Support",
                "Sustainable Tech",
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-4 group">
                  <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-500">
                    <CheckCircle2 className="size-5 text-primary group-hover:text-white transition-colors duration-500" />
                  </div>
                  <span className="font-bold text-lg tracking-tight">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}
