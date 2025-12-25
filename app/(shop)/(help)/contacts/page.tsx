import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ContactForm } from "@/components/shop/help/ContactForm";
import {
  AtSignIcon,
  ClockIcon,
  MapPinIcon,
  PhoneIcon,
  Globe,
  ShieldCheck,
  Zap
} from "lucide-react";
import { SetBreadcrumbs } from "@/components/SetBreadcrumbs";
import { Metadata } from "next";

export default function ContactsPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto pb-20 px-4 sm:px-6 md:px-8">
        <SetBreadcrumbs items={[{ label: "Contacts", href: "/contacts" }]} />

        <div className="max-w-7xl mx-auto pt-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="inline-flex items-center justify-center space-x-2 text-primary font-bold uppercase tracking-widest text-xs mb-4">
                <span className="w-12 h-px bg-primary" />
                <span>Global Operations</span>
              </div>
              <h1 className="text-4xl md:text-7xl font-black tracking-tighter leading-tight">
                Connect with <br />
                <span className="text-primary">Adriatek Limited</span>
              </h1>
            </div>
            <p className="text-muted-foreground max-w-md text-lg font-medium leading-relaxed">
              Our technical support and logistics teams are available across primary European time zones to ensure baseline operational excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
            {/* Contact Details Grid */}
            <div className="lg:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="p-8 rounded-[2rem] bg-muted/30 border border-primary/5 hover:border-primary/20 transition-all duration-500 group">
                <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <MapPinIcon className="size-7 text-primary" />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-widest opacity-40 mb-4">Metropolitan HQ</h3>
                <div className="space-y-1 text-lg font-bold">
                  <p>RM 8, S-V, 6/F</p>
                  <p>VALIANT IND CTR</p>
                  <p>FO TAN, HONG KONG</p>
                </div>
              </div>

              <div className="p-8 rounded-[2rem] bg-muted/30 border border-primary/5 hover:border-primary/20 transition-all duration-500 group text-center flex flex-col items-center">
                <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <PhoneIcon className="size-7 text-primary" />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-widest opacity-40 mb-4">Direct Communication</h3>
                <a href="tel:+447350818336" className="text-2xl font-black hover:text-primary transition-colors">
                  +44 7350 818336
                </a>
                <p className="text-xs font-bold mt-2 opacity-60">Priority Corporate Line</p>
              </div>

              <div className="p-8 rounded-[2rem] bg-muted/30 border border-primary/5 hover:border-primary/20 transition-all duration-500 group text-center flex flex-col items-center">
                <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <AtSignIcon className="size-7 text-primary" />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-widest opacity-40 mb-4">Inquiry Channel</h3>
                <a href="mailto:info@adriatek-limited.com" className="text-xl font-black hover:text-primary transition-colors break-all">
                  info@adriatek-limited.com
                </a>
                <p className="text-xs font-bold mt-2 opacity-60">24h Response Target</p>
              </div>

              <div className="p-8 rounded-[2rem] bg-muted/30 border border-primary/5 hover:border-primary/20 transition-all duration-500 group">
                <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <ClockIcon className="size-7 text-primary" />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-widest opacity-40 mb-4">Operational Window</h3>
                <div className="space-y-2 font-bold">
                  <div className="flex justify-between items-center text-sm">
                    <span className="opacity-60">Mon - Fri</span>
                    <span>09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="opacity-60">Sat</span>
                    <span>10:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="opacity-60">Sun</span>
                    <span className="text-primary italic">Standby Mode</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Split Section: Form + Brand Identity */}
            <div className="lg:col-span-7 bg-muted/20 border border-primary/5 rounded-[3rem] p-8 md:p-16">
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">Operational Inquiry</h2>
                <p className="text-muted-foreground font-medium">Please transmit your requirements using the secure channel below.</p>
              </div>
              <ContactForm />
            </div>

            <div className="lg:col-span-5 space-y-8">
               <div className="p-10 rounded-[3rem] bg-primary text-primary-foreground shadow-2xl shadow-primary/20 relative overflow-hidden group">
                  <Globe className="absolute -right-16 -bottom-16 size-64 opacity-10 group-hover:rotate-12 transition-transform duration-1000" />
                  <h3 className="text-2xl font-black mb-6 relative z-10 uppercase tracking-tighter">Corporate Data</h3>
                  <div className="space-y-6 relative z-10">
                     <div className="flex items-start gap-4">
                        <ShieldCheck className="size-6 shrink-0 mt-1 opacity-60" />
                        <div>
                           <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60 mb-1">Company Index</p>
                           <p className="text-xl font-black">79144752</p>
                        </div>
                     </div>
                     <div className="flex items-start gap-4">
                        <Zap className="size-6 shrink-0 mt-1 opacity-60" />
                        <div>
                           <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60 mb-1">Jurisdiction</p>
                           <p className="text-xl font-black italic">Hong Kong SAR</p>
                        </div>
                     </div>
                  </div>
                  <div className="mt-12 pt-8 border-t border-primary-foreground/20 italic font-medium opacity-80">
                     "Delivering high-tech excellence through verified logistics hubs and authorized distribution channels."
                  </div>
               </div>

               <Card className="rounded-[3rem] border-primary/5 bg-background/50 backdrop-blur-md overflow-hidden relative group">
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <CardHeader className="p-10 pb-4">
                    <CardTitle className="text-xl font-black tracking-tight">Technical Support</CardTitle>
                    <CardDescription className="text-sm font-bold opacity-60 uppercase tracking-widest">Post-Allocation Care</CardDescription>
                  </CardHeader>
                  <CardContent className="p-10 pt-0">
                    <p className="text-muted-foreground font-medium leading-relaxed mb-6">
                      For warranty claims, technical setup assistance, or documentation requests, please reference your original order index (ORD-XXXXXXXX).
                    </p>
                    <div className="flex items-center gap-2 text-primary font-black uppercase tracking-widest text-xs">
                       <span className="w-8 h-px bg-primary" />
                       <span>Priority Status Enabled</span>
                    </div>
                  </CardContent>
               </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Contacts - Adriatek Limited",
  description: "Contact the technical and logistics teams at Adriatek Limited for premium tech deployment across Europe.",
};
