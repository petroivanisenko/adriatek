import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  ArrowRightIcon, 
  CheckCircle2Icon, 
  MailIcon, 
  Target, 
  Zap, 
  ShieldCheck, 
  Globe, 
  Cpu,
  Layers
} from "lucide-react";
import { advantages, values } from "@/constants";
import { SetBreadcrumbs } from "@/components/SetBreadcrumbs";
import { Metadata } from "next";

const breadcrumbItems = [{ label: "About Us", href: "/about" }];

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto pb-20 px-4 sm:px-6 md:px-8">
        <SetBreadcrumbs items={breadcrumbItems} />

        <div className="max-w-7xl mx-auto pt-8">
          {/* Hero Section */}
          <div className="relative rounded-[3.5rem] overflow-hidden bg-primary p-8 md:p-20 text-primary-foreground mb-20 shadow-2xl shadow-primary/20 group">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center mix-blend-overlay opacity-30 group-hover:scale-110 transition-transform duration-[5s]" />
             <div className="relative z-10 max-w-3xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                   <Cpu className="size-4" />
                   <span>Operational Core</span>
                </div>
                <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
                   Precision in <br />
                   <span className="text-primary-foreground/80 underline decoration-primary-foreground/30 underline-offset-8">Technology</span>
                </h1>
                <p className="text-xl md:text-2xl font-medium leading-relaxed opacity-90 max-w-2xl">
                   Adriatek Limited is a specialized technical distribution agency, bridging the gap between futuristic innovation and European logistical demands.
                </p>
             </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
             <div className="lg:col-span-5">
                <div className="sticky top-24">
                   <h2 className="text-4xl font-black tracking-tight mb-6 uppercase">The mission</h2>
                   <p className="text-lg text-muted-foreground font-medium leading-relaxed mb-8">
                      Based in the technical hub of Hong Kong with a strategic European focus, we curate an exclusive portfolio of high-performance electronics designed for the next generation of professional and domestic environments.
                   </p>
                   <div className="space-y-4">
                      <div className="flex items-center gap-4 p-4 rounded-2xl bg-muted/30 border border-primary/5">
                         <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center">
                            <ShieldCheck className="size-5 text-primary" />
                         </div>
                         <span className="font-bold tracking-tight">Verified Technical Authenticity</span>
                      </div>
                      <div className="flex items-center gap-4 p-4 rounded-2xl bg-muted/30 border border-primary/5">
                         <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center">
                            <Globe className="size-5 text-primary" />
                         </div>
                         <span className="font-bold tracking-tight">Pan-European Logistics Network</span>
                      </div>
                      <div className="flex items-center gap-4 p-4 rounded-2xl bg-muted/30 border border-primary/5">
                         <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center">
                            <Zap className="size-5 text-primary" />
                         </div>
                         <span className="font-bold tracking-tight">Direct-to-Hub Delivery Model</span>
                      </div>
                   </div>
                </div>
             </div>

             <div className="lg:col-span-7 space-y-12">
                <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground font-medium italic">
                   "At the core of our approach is a client-oriented philosophy. We focus on understanding individual requirements and delivering tailored solutions, supported by professional consultation, precise logistics, and consistent after-sales support."
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                   {values.map((value, idx) => (
                      <div key={idx} className="p-8 rounded-[2.5rem] bg-background border border-primary/10 shadow-xl shadow-primary/5 group hover:-translate-y-2 transition-transform">
                         <div className="size-14 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            <value.icon className="size-7" />
                         </div>
                         <h3 className="text-xl font-black mb-3 uppercase tracking-tight">{value.title}</h3>
                         <p className="text-sm leading-relaxed opacity-70">{value.description}</p>
                      </div>
                   ))}
                </div>
             </div>
          </div>

          <div className="mb-24">
             <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">Why Adriatek</h2>
                <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full" />
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex flex-col p-10 rounded-[3rem] bg-muted/20 border border-primary/5 relative group h-full">
                     <div className="absolute top-10 right-10 text-6xl font-black opacity-5 group-hover:opacity-20 transition-opacity">0{index + 1}</div>
                     <div className="size-12 rounded-full border-2 border-primary/20 flex items-center justify-center mb-8">
                        <CheckCircle2Icon className="size-6 text-primary" />
                     </div>
                     <h3 className="text-xl font-black mb-4 uppercase tracking-tighter z-10">{advantage.title}</h3>
                     <p className="text-muted-foreground font-medium z-10">{advantage.description}</p>
                  </div>
                ))}
             </div>
          </div>

          <div className="p-12 md:p-24 rounded-[4rem] bg-muted/40 border border-primary/10 relative overflow-hidden text-center">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
             
             <div className="relative z-10 max-w-3xl mx-auto">
                <Layers className="size-16 text-primary mx-auto mb-8 animate-pulse" />
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 uppercase">Ready to Upgrade?</h2>
                <p className="text-xl text-muted-foreground font-medium mb-12 leading-relaxed">
                   Join the network of tech-enabled households and corporate infrastructures powered by Adriatek Limited.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button asChild size="lg" className="h-16 px-12 text-lg font-black rounded-2xl shadow-2xl shadow-primary/20 transition-all hover:scale-105">
                    <Link href="/catalogue">
                      Initialize Catalogue <ArrowRightIcon className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="h-16 px-12 text-lg font-black rounded-2xl border-primary/10 bg-background/50 hover:bg-background transition-all">
                    <Link href="/contacts">
                      Request Consultation <MailIcon className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "About Us - Adriatek Limited",
  description: "Learn about the mission, values, and technical expertise of Adriatek Limited, your premium electronics distributor in Europe.",
};
