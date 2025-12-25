"use client";

import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowLeft, 
  Cpu, 
  Monitor, 
  Speaker, 
  Layers, 
  Zap, 
  Shield, 
  Activity,
} from "lucide-react";
import { motion } from "framer-motion";
import { SetBreadcrumbs } from "@/components/SetBreadcrumbs";

const guideData = {
  "monitors": {
    title: "Display Standards 2024",
    subtitle: "The Quantum Leap: From IPS to QD-OLED Architecture",
    category: "Optics & Vision",
    icon: Monitor,
    heroImage: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=2000",
    readTime: "8 min read",
    author: "Technical Review Board",
    stats: [
      { label: "Color Space", value: "99% DCI-P3" },
      { label: "Peak Luminance", value: "1000 nits" },
      { label: "Response Time", value: "0.03ms GTG" },
      { label: "Contrast Ratio", value: "∞:1" }
    ],
    sections: [
      {
        title: "The Death of Backlighting",
        content: "Modern professional displays are moving away from traditional LED backlighting. QD-OLED (Quantum Dot Organic Light Emitting Diode) technology represents a fundamental shift. Unlike IPS panels that require a backlight filtered through liquid crystals, QD-OLED is self-emissive. Every pixel is its own light source, allowing for 'true black' by simply turning the pixel off."
      },
      {
        title: "Quantum Dot Color Purity",
        content: "By using Quantum Dots to convert blue light into red and green, the spectrum of light produced is significantly narrower and more precise. This leads to a wider color gamut and higher color volume, which is critical for HDR workflows and technical grading where accuracy is non-negotiable."
      },
      {
        title: "Professional Workload Impact",
        content: "For architects and high-end developers, the 240Hz refresh rates combined with sub-millisecond response times mean a complete elimination of motion blur. This reduces eye strain during long technical sessions and provides a fluid interface that matches the speed of professional workstations."
      }
    ],
    sidebar: {
      title: "Technical Checklist",
      items: [
        "Verified VESA DisplayHDR 1000",
        "Hardware Calibration Support",
        "TÜV Rheinland Eye Comfort Certified",
        "12-bit Internal Processing"
      ]
    }
  },
  "pc-builds": {
    title: "Instruction Set Efficiency",
    subtitle: "ARM vs x86: The New Computing Frontier",
    category: "Architecture",
    icon: Cpu,
    heroImage: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&q=80&w=2000",
    readTime: "12 min read",
    author: "Systems Architecture Group",
    stats: [
      { label: "Logic Density", value: "5nm / 3nm" },
      { label: "IPC Increase", value: "+15% YoY" },
      { label: "TDP Efficiency", value: "95W - 170W" },
      { label: "Memory Type", value: "DDR5-8400" }
    ],
    sections: [
      {
        title: "The IPC Paradigm Shift",
        content: "Instructions Per Clock (IPC) have long been the gold standard for performance. However, with the rise of AI-assisted compile tasks, the focus is shifting to 'Effective Throughput.' We are seeing a move towards hybrid architectures that combine high-performance 'P-cores' with high-efficiency 'E-cores' to manage background OS tasks while reserving maximum clock speed for the foreground professional suite."
      },
      {
        title: "AVX-512 and Modern Workloads",
        content: "The integration of AVX-512 instruction sets has revolutionized scientific computing and high-end video encoding. By processing 512-bit vectors in a single cycle, modern CPUs can handle massive datasets used in financial modeling and architectural rendering with significantly reduced latency."
      },
      {
        title: "The Thermal Challenge",
        content: "As power densities increase, the delta between idle and peak temperatures has become a bottleneck. Professional systems now require phase-change materials or custom industrial-grade liquid loops to maintain sustained boost clocks without thermal throttling during 48-hour render sessions."
      }
    ],
    sidebar: {
      title: "Integration Metrics",
      items: [
        "PCIe 5.0 Bus Validation",
        "ECC Memory Support",
        "Infinity Fabric Interconnects",
        "Hardware-level Virtualization"
      ]
    }
  },
  "audio": {
    title: "Signal-to-Noise Purity",
    subtitle: "The Pursuit of Acoustic Transparency",
    category: "Acoustics",
    icon: Speaker,
    heroImage: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80&w=2000",
    readTime: "10 min read",
    author: "Electro-Acoustic Labs",
    stats: [
      { label: "THD+N", value: "< 0.0001%" },
      { label: "Dynamic Range", value: "135 dB" },
      { label: "Sample Rate", value: "768 kHz" },
      { label: "Jitter", value: "< 10 ps" }
    ],
    sections: [
      {
        title: "The Balanced Audio Path",
        content: "In high-fidelity audio, noise is the enemy. A balanced signal path uses two identical signals with inverted phases to cancel out Electromagnetic Interference (EMI) and Radio Frequency Interference (RFI). This technical approach ensures that the audio reaching the amplifier is a perfect mirror of the original recording, free from the 'floor noise' common in consumer hardware."
      },
      {
        title: "FPGA-Based Digital Signal Processing",
        content: "Unlike fixed-function DAC chips, Field Programmable Gate Arrays (FPGAs) allow for custom-coded filtering algorithms. This allows engineers to eliminate 'pre-ringing' artifacts and tailor the impulse response of the system to match the exact physical characteristics of the transducers."
      },
      {
        title: "Clock Precision and Jitter Reduction",
        content: "Digital audio depends on time. Jitter, or timing errors in the D/A conversion, manifests as a loss of spatial detail and high-frequency 'harshness.' By using Femtosecond clocks and dedicated isolation transformers, we ensure that every sample is converted at the exact pico-second intended by the master recording."
      }
    ],
    sidebar: {
      title: "Audiophile Standards",
      items: [
        "Native DSD512 Support",
        "Fully Discrete Class-A Stages",
        "Linear Power Supply Integration",
        "Non-Reactive Loading"
      ]
    }
  }
};

export default function GuidePage() {
  const params = useParams();
  const slug = params.slug as keyof typeof guideData;
  const guide = guideData[slug];

  if (!guide) {
    notFound();
  }

  const Icon = guide.icon;

  return (
    <div className="bg-background min-h-screen">
      <SetBreadcrumbs 
        items={[
          { label: "Catalogue", href: "/catalogue" },
          { label: guide.title, href: `/guides/${slug}` }
        ]}
      />
      
      {/* Hero Section */}
      <header className="relative w-full h-[70vh] flex items-end pb-24 overflow-hidden bg-slate-900 dark:bg-slate-950">
        <Image 
          src={guide.heroImage}
          alt={guide.title}
          fill
          className="object-cover opacity-60 scale-105"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 backdrop-blur-md text-primary text-xs font-black uppercase tracking-widest mb-6 border border-primary/20">
              <Icon className="size-4" />
              <span>{guide.category}</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-4 leading-none">
              {guide.title}
            </h1>
            <p className="text-2xl md:text-3xl font-light text-white/60 max-w-3xl leading-snug">
              {guide.subtitle}
            </p>
          </motion.div>
        </div>
      </header>

      {/* Main Content Integration */}
      <main className="container mx-auto px-4 -mt-16 relative z-30 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Metadata & Stats */}
          <aside className="lg:col-span-3 space-y-12 order-2 lg:order-1">
             <div className="bg-card p-8 rounded-3xl border border-border shadow-xl shadow-secondary/10">
                <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-6 border-b border-border pb-4">Operational Metrics</p>
                <div className="space-y-8">
                   {guide.stats.map((stat, i) => (
                     <div key={i}>
                        <p className="text-xs font-bold text-muted-foreground mb-1">{stat.label}</p>
                        <p className="text-2xl font-black text-foreground font-mono tracking-tighter">{stat.value}</p>
                     </div>
                   ))}
                </div>
             </div>

             <div className="bg-primary p-8 rounded-3xl text-primary-foreground shadow-2xl shadow-primary/30">
                <Shield className="size-8 mb-6 opacity-50" />
                <h3 className="text-xl font-black mb-4 uppercase tracking-tight">Technical Authentication</h3>
                <ul className="space-y-3">
                   {guide.sidebar.items.map((item, i) => (
                     <li key={i} className="flex items-center gap-2 text-sm font-bold border-b border-primary-foreground/10 pb-2">
                        <Zap className="size-3 text-primary-foreground/40" />
                        {item}
                     </li>
                   ))}
                </ul>
             </div>
          </aside>

          {/* Right Column: Narrative Content */}
          <div className="lg:col-span-9 bg-card p-8 md:p-16 rounded-5xl border border-border shadow-2xl shadow-secondary/10 order-1 lg:order-2">
            
            <div className="flex flex-wrap items-center gap-6 mb-16 pb-8 border-b border-border">
               <div className="flex items-center gap-3">
                  <div className="size-10 rounded-full bg-muted flex items-center justify-center font-black text-muted-foreground text-xs">TRB</div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Author</p>
                    <p className="text-xs font-bold text-foreground">{guide.author}</p>
                  </div>
               </div>
               <div className="flex items-center gap-3">
                  <Activity className="size-5 text-primary" />
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Analysis Status</p>
                    <p className="text-xs font-bold text-foreground">Verified 2024</p>
                  </div>
               </div>
               <div className="flex items-center gap-3">
                  <Zap className="size-5 text-primary" />
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Reading Commitment</p>
                    <p className="text-xs font-bold text-foreground">{guide.readTime}</p>
                  </div>
               </div>
            </div>

            <article className="prose prose-slate dark:prose-invert prose-xl max-w-none prose-headings:font-black prose-headings:tracking-tighter prose-headings:uppercase prose-p:leading-relaxed prose-p:text-muted-foreground prose-strong:text-foreground">
               {guide.sections.map((section, i) => (
                 <section key={i} className="mb-20 last:mb-0">
                    <h2 className="text-3xl md:text-4xl mb-8 flex items-center gap-4">
                       <span className="text-primary/20 font-mono text-xl">0{i+1}</span>
                       {section.title}
                    </h2>
                    <p>{section.content}</p>
                    {i !== guide.sections.length - 1 && (
                      <div className="my-16 h-px bg-linear-to-r from-transparent via-border to-transparent" />
                    )}
                 </section>
               ))}
            </article>

            {/* Editorial Footer */}
            <div className="mt-32 p-12 bg-secondary rounded-4xl text-center relative overflow-hidden">
               <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
               <div className="relative z-10">
                  <h3 className="text-secondary-foreground text-3xl font-black mb-4 tracking-tighter uppercase">Apply these standards</h3>
                  <p className="text-muted-foreground mb-10 max-w-xl mx-auto font-medium">
                    Integrated technical precision is just a component away. 
                    Browse our curated selection of professional equipment.
                  </p>
                  <Link 
                    href="/catalogue"
                    className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-black uppercase tracking-widest px-10 py-5 rounded-full hover:bg-primary/90 transition-all transform hover:-translate-y-1 shadow-2xl shadow-primary/20"
                  >
                    View Qualified Hardware <ArrowLeft className="size-5 rotate-180" />
                  </Link>
               </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
