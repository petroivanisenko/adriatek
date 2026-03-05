import React from "react";

const logos = [
  { name: "TechNova", id: 1 },
  { name: "Quantum", id: 2 },
  { name: "ApexDigital", id: 3 },
  { name: "Lumina", id: 4 },
  { name: "Veridian", id: 5 },
  { name: "Stellar", id: 6 },
];

export default function LogoCloud() {
  return (
    <section className="py-12 md:py-20 bg-background/50 border-y border-primary/5">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground/60 mb-10">
          Trusted by over 500+ Industry Leaders
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale transition-all duration-500 hover:grayscale-0 hover:opacity-100">
          {logos.map((logo) => (
            <div
              key={logo.id}
              className="group flex items-center justify-center p-4 transition-transform duration-300 hover:scale-110"
            >
              <span className="text-2xl md:text-3xl font-black tracking-tighter text-foreground group-hover:text-primary transition-colors">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
