"use client";

import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Cpu,
  Monitor,
  Speaker,
  Zap,
  Shield,
  Activity,
} from "lucide-react";
import { motion } from "framer-motion";
import { SetBreadcrumbs } from "@/components/SetBreadcrumbs";

const guideData = {
  monitors: {
    title: "Display Standards 2024",
    subtitle: "The Quantum Leap: From IPS to QD-OLED Architecture",
    category: "Optics & Vision",
    icon: Monitor,
    heroImage:
      "https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&q=80&w=2000",
    readTime: "8 min read",
    stats: [
      { label: "Color Space", value: "99% DCI-P3" },
      { label: "Peak Luminance", value: "1000 nits" },
      { label: "Response Time", value: "0.03ms GTG" },
      { label: "Contrast Ratio", value: "∞:1" },
    ],
    sections: [
      {
        title: "The Death of Backlighting",
        content:
          "Modern professional displays are moving away from traditional LED backlighting. QD-OLED (Quantum Dot Organic Light Emitting Diode) technology represents a fundamental shift. Unlike IPS panels that require a backlight filtered through liquid crystals, QD-OLED is self-emissive. Every pixel is its own light source, allowing for 'true black' by simply turning the pixel off. This self-emissive nature not only improves contrast but also enables perfect blacks, which is crucial for professional color grading. Furthermore, the absence of backlighting reduces power consumption and heat generation, leading to more efficient displays. In addition, QD-OLED panels can achieve higher peak brightness levels without the risk of blooming or halo effects commonly seen in LED-backlit displays. The technology also supports wider viewing angles, ensuring consistent color accuracy from any perspective. Overall, this shift marks a significant advancement in display technology, providing professionals with tools that enhance productivity and visual fidelity in demanding workflows.",
      },
      {
        title: "Quantum Dot Color Purity",
        content:
          "By using Quantum Dots to convert blue light into red and green, the spectrum of light produced is significantly narrower and more precise. This leads to a wider color gamut and higher color volume, which is critical for HDR workflows and technical grading where accuracy is non-negotiable. Quantum dots allow for more vibrant and accurate colors, surpassing traditional RGB filters. The precision in color reproduction helps in industries like film production and graphic design, where subtle differences can make a big impact. Moreover, the stability of quantum dots ensures long-term color consistency, reducing the need for frequent recalibrations. This technology also contributes to energy efficiency by minimizing wasted light. As a result, professionals can rely on displays that deliver unparalleled color accuracy and performance, elevating the quality of their work to new heights.",
      },
      {
        title: "Professional Workload Impact",
        content:
          "For architects and high-end developers, the 240Hz refresh rates combined with sub-millisecond response times mean a complete elimination of motion blur. This reduces eye strain during long technical sessions and provides a fluid interface that matches the speed of professional workstations. The high refresh rates enable smoother scrolling and faster rendering previews, boosting overall efficiency. Additionally, the low response times prevent ghosting in fast-moving visuals, which is essential for tasks involving animations or simulations. Eye comfort is further enhanced through features like flicker-free technology and blue light filters. Professionals can work longer hours without fatigue, leading to increased productivity. Furthermore, the integration of advanced calibration tools ensures that the display maintains accuracy across various lighting conditions. In summary, these advancements transform the user experience, making high-performance computing more accessible and effective for demanding professional applications.",
      },
    ],
    sidebar: {
      title: "Technical Checklist",
      items: [
        "Verified VESA DisplayHDR 1000",
        "Hardware Calibration Support",
        "TÜV Rheinland Eye Comfort Certified",
        "12-bit Internal Processing",
      ],
    },
  },
  "pc-builds": {
    title: "Instruction Set Efficiency",
    subtitle: "ARM vs x86: The New Computing Frontier",
    category: "Architecture",
    icon: Cpu,
    heroImage:
      "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&q=80&w=2000",
    readTime: "12 min read",
    stats: [
      { label: "Logic Density", value: "5nm / 3nm" },
      { label: "IPC Increase", value: "+15% YoY" },
      { label: "TDP Efficiency", value: "95W - 170W" },
      { label: "Memory Type", value: "DDR5-8400" },
    ],
    sections: [
      {
        title: "The IPC Paradigm Shift",
        content:
          "Instructions Per Clock (IPC) have long been the gold standard for performance. However, with the rise of AI-assisted compile tasks, the focus is shifting to 'Effective Throughput.' We are seeing a move towards hybrid architectures that combine high-performance 'P-cores' with high-efficiency 'E-cores' to manage background OS tasks while reserving maximum clock speed for the foreground professional suite. This hybrid approach optimizes power usage and performance, allowing systems to handle multitasking seamlessly. The P-cores deliver high-speed processing for intensive applications, while E-cores manage lighter tasks efficiently. As AI workloads grow, this architecture ensures that computational resources are allocated dynamically. Furthermore, advancements in cache management and branch prediction enhance overall efficiency. Professionals benefit from faster compilation times and smoother operation, making complex projects more manageable. In essence, this shift represents a balanced evolution in CPU design, catering to the diverse needs of modern computing environments.",
      },
      {
        title: "AVX-512 and Modern Workloads",
        content:
          "The integration of AVX-512 instruction sets has revolutionized scientific computing and high-end video encoding. By processing 512-bit vectors in a single cycle, modern CPUs can handle massive datasets used in financial modeling and architectural rendering with significantly reduced latency. This capability accelerates simulations and data analysis, enabling quicker insights. The instruction set supports parallel processing, which is vital for machine learning and AI applications. Additionally, AVX-512 improves energy efficiency by reducing the number of cycles needed for computations. Developers can now run more complex algorithms without compromising speed. The technology also enhances multimedia processing, benefiting content creators. Overall, AVX-512 empowers professionals to tackle larger and more intricate tasks, driving innovation across various fields.",
      },
      {
        title: "The Thermal Challenge",
        content:
          "As power densities increase, the delta between idle and peak temperatures has become a bottleneck. Professional systems now require phase-change materials or custom industrial-grade liquid loops to maintain sustained boost clocks without thermal throttling during 48-hour render sessions. Effective cooling solutions prevent performance degradation and extend hardware lifespan. Innovations in thermal management include advanced heat sinks and vapor chambers. These systems ensure stable operation under heavy loads, crucial for rendering and simulation tasks. Moreover, software optimizations help in dynamic thermal control, balancing performance and temperature. Professionals can rely on systems that maintain peak efficiency over extended periods. This focus on thermal management not only improves reliability but also supports eco-friendly computing practices by optimizing energy use.",
      },
    ],
    sidebar: {
      title: "Integration Metrics",
      items: [
        "PCIe 5.0 Bus Validation",
        "ECC Memory Support",
        "Infinity Fabric Interconnects",
        "Hardware-level Virtualization",
      ],
    },
  },
  audio: {
    title: "Signal-to-Noise Purity",
    subtitle: "The Pursuit of Acoustic Transparency",
    category: "Acoustics",
    icon: Speaker,
    heroImage:
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80&w=2000",
    readTime: "10 min read",
    stats: [
      { label: "THD+N", value: "< 0.0001%" },
      { label: "Dynamic Range", value: "135 dB" },
      { label: "Sample Rate", value: "768 kHz" },
      { label: "Jitter", value: "< 10 ps" },
    ],
    sections: [
      {
        title: "The Balanced Audio Path",
        content:
          "In high-fidelity audio, noise is the enemy. A balanced signal path uses two identical signals with inverted phases to cancel out Electromagnetic Interference (EMI) and Radio Frequency Interference (RFI). This technical approach ensures that the audio reaching the amplifier is a perfect mirror of the original recording, free from the 'floor noise' common in consumer hardware. Balanced connections provide better signal integrity over longer distances. They also offer improved rejection of common-mode noise, enhancing audio clarity. Professionals in music production and broadcasting benefit from this purity. Furthermore, balanced systems support higher signal levels without distortion. This technology is essential for studio environments where precision is paramount. Overall, it delivers an unparalleled listening experience, preserving the nuances of sound.",
      },
      {
        title: "FPGA-Based Digital Signal Processing",
        content:
          "Unlike fixed-function DAC chips, Field Programmable Gate Arrays (FPGAs) allow for custom-coded filtering algorithms. This allows engineers to eliminate 'pre-ringing' artifacts and tailor the impulse response of the system to match the exact physical characteristics of the transducers. FPGAs enable real-time adjustments and optimizations. They support advanced upsampling and filtering techniques for superior audio quality. This flexibility is crucial for audiophile-grade equipment. Additionally, FPGAs can handle complex signal processing tasks efficiently. Engineers can implement proprietary algorithms for unique sound signatures. The result is a more accurate and immersive audio reproduction. Professionals gain tools that adapt to specific needs, pushing the boundaries of digital audio technology.",
      },
      {
        title: "Clock Precision and Jitter Reduction",
        content:
          "Digital audio depends on time. Jitter, or timing errors in the D/A conversion, manifests as a loss of spatial detail and high-frequency 'harshness.' By using Femtosecond clocks and dedicated isolation transformers, we ensure that every sample is converted at the exact pico-second intended by the master recording. Precise clocks maintain synchronization across devices. Isolation transformers prevent electrical noise from affecting the signal. This precision enhances stereo imaging and depth. Audiophiles experience more lifelike sound reproduction. Furthermore, low-jitter designs support high-resolution formats seamlessly. The technology reduces artifacts that can degrade audio quality. In summary, clock precision is fundamental to achieving acoustic transparency, delivering sound that is true to the original intent.",
      },
    ],
    sidebar: {
      title: "Audiophile Standards",
      items: [
        "Native DSD512 Support",
        "Fully Discrete Class-A Stages",
        "Linear Power Supply Integration",
        "Non-Reactive Loading",
      ],
    },
  },
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
          { label: guide.title, href: `/guides/${slug}` },
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
              <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-6 border-b border-border pb-4">
                Operational Metrics
              </p>
              <div className="space-y-8">
                {guide.stats.map((stat, i) => (
                  <div key={i}>
                    <p className="text-xs font-bold text-muted-foreground mb-1">
                      {stat.label}
                    </p>
                    <p className="text-2xl font-black text-foreground font-mono tracking-tighter">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary p-8 rounded-3xl text-primary-foreground shadow-2xl shadow-primary/30">
              <Shield className="size-8 mb-6 opacity-50" />
              <h3 className="text-xl font-black mb-4 uppercase tracking-tight">
                Technical Authentication
              </h3>
              <ul className="space-y-3">
                {guide.sidebar.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-sm font-bold border-b border-primary-foreground/10 pb-2"
                  >
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
                <Activity className="size-5 text-primary" />
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                    Analysis Status
                  </p>
                  <p className="text-xs font-bold text-foreground">
                    Verified 2024
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Zap className="size-5 text-primary" />
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                    Reading Commitment
                  </p>
                  <p className="text-xs font-bold text-foreground">
                    {guide.readTime}
                  </p>
                </div>
              </div>
            </div>

            <article className="prose prose-slate dark:prose-invert prose-xl max-w-none prose-headings:font-black prose-headings:tracking-tighter prose-headings:uppercase prose-p:leading-relaxed prose-p:text-muted-foreground prose-strong:text-foreground">
              {guide.sections.map((section, i) => (
                <section key={i} className="mb-20 last:mb-0">
                  <h2 className="text-3xl md:text-4xl mb-8 flex items-center gap-4">
                    <span className="text-primary/20 font-mono text-xl">
                      0{i + 1}
                    </span>
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
                <h3 className="text-secondary-foreground text-3xl font-black mb-4 tracking-tighter uppercase">
                  Apply these standards
                </h3>
                <p className="text-muted-foreground mb-10 max-w-xl mx-auto font-medium">
                  Integrated technical precision is just a component away.
                  Browse our curated selection of professional equipment.
                </p>
                <Link
                  href="/catalogue"
                  className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-black uppercase tracking-widest px-10 py-5 rounded-full hover:bg-primary/90 transition-all transform hover:-translate-y-1 shadow-2xl shadow-primary/20"
                >
                  View Qualified Hardware{" "}
                  <ArrowLeft className="size-5 rotate-180" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
