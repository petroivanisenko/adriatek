import { deliveryBenefits } from "@/constants";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ShieldCheck } from "lucide-react";

export default function Benefits() {
  return (
    <section className="py-24 md:py-40 bg-background relative overflow-hidden">
      {/* Dynamic abstract background */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[160px] animate-pulse" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[160px] animate-pulse delay-700" />
      </div>

      {/* Grid Pattern with Fade */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-24 md:mb-40">
          <div className="inline-flex items-center space-x-3 text-primary font-bold uppercase tracking-[0.4em] text-xs mb-8 px-4 py-2 bg-primary/5 rounded-full border border-primary/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span>Why Adriatek</span>
          </div>

          <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-[0.85] uppercase italic">
            Technical <br />
            <span className="text-primary text-stroke-1">Excellence</span>{" "}
            <br />& Reliability
          </h2>

          <p className="text-muted-foreground text-xl md:text-3xl leading-relaxed font-light max-w-2xl mx-auto italic opacity-80">
            Pioneering the standard for high-end electronics distribution across
            Europe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {deliveryBenefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group relative"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Animated border gradient */}
              <div className="absolute -inset-[2px] bg-linear-to-br from-primary/40 via-primary/20 to-transparent rounded-[3.2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm" />

              {/* Outer glow effect */}
              <div className="absolute -inset-8 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-3xl" />

              {/* Card wrapper with floating animation */}
              <Card
                className={`
                  relative h-full bg-linear-to-br from-background/95 via-background/90 to-background/80
                  backdrop-blur-3xl transition-all duration-700 
                  border-2 border-white/10 hover:border-primary/40
                  rounded-[3rem] p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]
                  overflow-hidden
                  group-hover:-translate-y-8 group-hover:shadow-[0_40px_100px_-20px_rgba(var(--primary-rgb),0.4)]
                  ${index % 2 === 0 ? "md:translate-y-6" : "md:-translate-y-2"}
                `}
              >
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Mesh gradient overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(var(--primary-rgb),0.15)_0%,transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Background Number with animation */}
                <div className="absolute -top-4 -right-4 text-[12rem] font-black text-primary/5 group-hover:text-primary/15 transition-all duration-700 pointer-events-none leading-none group-hover:scale-110 group-hover:rotate-6">
                  0{index + 1}
                </div>

                {/* Animated scan line effect */}
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/10 to-transparent h-full w-full -translate-y-full group-hover:translate-y-full transition-transform duration-2000 ease-in-out opacity-0 group-hover:opacity-100" />

                <CardHeader className="relative pt-6 px-0 pb-10">
                  {/* Icon container with enhanced effects */}
                  <div className="relative mb-10">
                    {/* Icon glow */}
                    <div className="absolute inset-0 bg-primary/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-150" />

                    {/* Icon background */}
                    <div className="relative size-28 rounded-3xl bg-linear-to-br from-primary/20 via-primary/10 to-transparent flex items-center justify-center border-2 border-primary/20 transition-all duration-700 group-hover:border-primary/60 group-hover:scale-110 group-hover:rotate-360 group-hover:shadow-[0_0_60px_rgba(var(--primary-rgb),0.6)] overflow-hidden">
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                      <benefit.icon className="size-14 text-primary group-hover:text-primary transition-all duration-500 relative z-10 drop-shadow-[0_0_10px_rgba(var(--primary-rgb),0.5)]" />
                    </div>
                  </div>

                  <CardTitle className="relative text-3xl font-black tracking-tight mb-6 leading-tight transition-all duration-500 group-hover:text-primary group-hover:translate-x-1">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative px-0 pb-8">
                  <p className="text-muted-foreground text-lg leading-relaxed font-medium transition-all duration-500 group-hover:text-foreground/90">
                    {benefit.description}
                  </p>
                </CardContent>

                {/* Interactive bottom bar with gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-primary via-primary/60 to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left rounded-full" />

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-primary/20 to-transparent rounded-bl-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </Card>

              {/* Decorative side element with pulse */}
              <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-2 h-24 bg-linear-to-b from-transparent via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-full hidden lg:block">
                <div className="absolute inset-0 bg-primary/40 rounded-full animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
