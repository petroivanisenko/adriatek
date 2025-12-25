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
            <span className="text-primary text-stroke-1">Excellence</span> <br /> 
            & Reliability
          </h2>
          
          <p className="text-muted-foreground text-xl md:text-3xl leading-relaxed font-light max-w-2xl mx-auto italic opacity-80">
            Pioneering the standard for high-end electronics distribution across Europe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {deliveryBenefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group relative"
            >
              {/* Card wrapper with floating animation */}
              <Card
                className={`
                  relative h-full bg-linear-to-b from-white/5 to-white/0 dark:from-white/10 dark:to-transparent 
                  backdrop-blur-2xl transition-all duration-700 
                  border-white/5 hover:border-primary/50 
                  rounded-[3rem] p-8 shadow-2xl overflow-hidden
                  group-hover:-translate-y-6 group-hover:shadow-[0_40px_80px_-15px_rgba(var(--primary-rgb),0.2)]
                  ${index % 2 === 0 ? 'md:translate-y-8' : ''}
                `}
              >
                {/* Background Number */}
                <div className="absolute top-0 right-0 p-8 text-white/5 group-hover:text-primary/10 text-9xl font-black transition-colors duration-700 pointer-events-none">
                  0{index + 1}
                </div>

                {/* Animated Inner Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(var(--primary-rgb),0.1)_0%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardHeader className="pt-8 px-0 pb-12">
                  <div className="relative">
                    <div className="size-24 rounded-4xl bg-linear-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-10 border border-primary/20 transition-all duration-700 group-hover:rotate-360 group-hover:scale-110 group-hover:from-primary group-hover:to-primary/80 group-hover:shadow-[0_0_40px_rgba(var(--primary-rgb),0.5)]">
                      <benefit.icon className="size-12 text-primary group-hover:text-primary-foreground transition-all duration-500" />
                    </div>
                  </div>
                  
                  <CardTitle className="text-3xl font-black tracking-tight mb-6 leading-tight group-hover:text-primary transition-colors duration-500">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="px-0 pb-12">
                  <p className="text-muted-foreground text-xl leading-relaxed font-light transition-colors duration-500 group-hover:text-foreground">
                    {benefit.description}
                  </p>
                </CardContent>

                {/* Interactive bottom bar */}
                <div className="absolute bottom-0 left-0 w-full h-2 bg-primary/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              </Card>

              {/* Decorative side element */}
              <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-1 h-20 bg-primary/0 group-hover:bg-primary/40 transition-all duration-700 rounded-full hidden lg:block" />
            </div>
          ))}
        </div>
      </div>
    </section>


  );
}
