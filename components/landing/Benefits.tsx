import { deliveryBenefits } from "@/constants";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ShieldCheck } from "lucide-react";

export default function Benefits() {
  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center justify-center size-14 rounded-xl bg-primary/10 mb-6 border border-primary/20">
            <ShieldCheck className="size-7 text-primary" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Technical Excellence & Reliability</h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Adriatek Limited provides a seamless experience for acquiring 
            premium electronics with maximum security and professional support.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {deliveryBenefits.map((benefit) => (
            <Card
              key={benefit.title}
              className="group bg-background/50 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 border-primary/10 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 rounded-2xl p-2"
            >
              <CardHeader className="pt-8 px-6 pb-4">
                <div className="size-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 border border-primary/10 transition-all duration-500 group-hover:bg-primary group-hover:border-primary">
                  <benefit.icon className="size-8 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                </div>
                <CardTitle className="text-2xl font-bold tracking-tight mb-3">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-10">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
