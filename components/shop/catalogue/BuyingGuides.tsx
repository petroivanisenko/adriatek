"use client";

import React from "react";
import { BookOpen, Monitor, Cpu, Speaker, ArrowRight, Layers } from "lucide-react";
import Link from "next/link";

const technicalBriefs = [
  {
    icon: Monitor,
    title: "Display Standards 2024",
    description: "Understanding the shift from IPS to QD-OLED for professional color grading and high-refresh workloads.",
    link: "/guides/monitors",
    category: "Optics",
    specs: ["DCI-P3 99%", "Peak 1000 nits", "12-bit Depth"]
  },
  {
    icon: Cpu,
    title: "Instruction Set Efficiency",
    description: "How modern ARM and x86 architectures differ in sustained throughput for AI and heavy compile tasks.",
    link: "/guides/pc-builds",
    category: "Architecture",
    specs: ["IPC Gains", "AVX-512", "Memory Fabric"]
  },
  {
    icon: Speaker,
    title: "Signal-to-Noise Purity",
    description: "The engineering behind balanced audio paths and jitter-reducing clocks in professional DACs.",
    link: "/guides/audio",
    category: "Acoustics",
    specs: ["THD < 0.0001%", "DSD512", "FPGA DSP"]
  },
];

export function TechnicalBriefCard({ index }: { index: number }) {
  const brief = technicalBriefs[index % technicalBriefs.length];
  
  return (
    <div className="col-span-1 md:col-span-2 lg:col-span-2 group relative bg-card rounded-4xl overflow-hidden border border-border flex flex-col md:flex-row shadow-2xl shadow-secondary/20">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-primary/5 to-transparent pointer-events-none" />
      
      <div className="p-8 md:p-12 flex-1 relative z-10 flex flex-col justify-between">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
            <Layers className="size-3" />
            <span>{brief.category}</span>
          </div>
          <h3 className="text-3xl font-black text-foreground mb-4 tracking-tight leading-tight">
            {brief.title}
          </h3>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8 line-clamp-3">
            {brief.description}
          </p>
        </div>
        
        <Link 
          href={brief.link}
          className="group/btn inline-flex items-center gap-3 text-foreground font-bold text-lg hover:text-primary transition-colors"
        >
          Access Brief <ArrowRight className="size-5 transition-transform group-hover/btn:translate-x-1" />
        </Link>
      </div>

      <div className="w-full md:w-72 bg-muted/50 backdrop-blur-sm border-l border-border p-8 flex flex-col justify-center">
        <div className="space-y-6">
          <p className="text-muted-foreground/60 text-xs font-bold uppercase tracking-widest border-b border-border pb-4">Key Metrics</p>
          {brief.specs.map((spec, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="size-1.5 rounded-full bg-primary" />
              <span className="text-foreground/80 font-medium">{spec}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function BuyingGuides() {
  return (
    <div className="mt-24 md:mt-32 border-t border-border pt-24">
       <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm mb-4">
            <BookOpen className="size-4" />
            <span>Knowledge Base</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground">
            Technical Resources
          </h2>
       </div>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {technicalBriefs.map((_, i) => (
            <TechnicalBriefCard key={i} index={i} />
          ))}
       </div>
    </div>
  );
}
