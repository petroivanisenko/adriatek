import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { SetBreadcrumbs } from "@/components/SetBreadcrumbs";
import { Metadata } from "next";

const breadcrumbItems = [{ label: "Delivery & Payment", href: "/delivery" }];
import { deliveryOptions, deliveryZones, importantInfo } from "@/constants";
import { 
  AlertCircle, 
  CheckCircle2, 
  Package, 
  Truck, 
  ShieldCheck, 
  CreditCard,
  Ban,
  Timer,
  Info,
  Map,
  FileText
} from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";

export default function DeliveryPaymentPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto pb-20 px-4 sm:px-6 md:px-8">
        <SetBreadcrumbs items={breadcrumbItems} />
        
        <div className="max-w-7xl mx-auto pt-8">
          <div className="mb-16">
            <div className="flex items-center gap-3 text-primary font-bold uppercase tracking-[0.2em] text-[10px] mb-4">
              <span className="w-8 h-px bg-primary" />
              <span>Logistics & Fiscal Protocol</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9]">
              Distribution <br />
              <span className="text-primary italic">& Settlement</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Main Content Area */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Payment Section */}
              <section id="payment">
                <div className="flex items-center gap-4 mb-8">
                  <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <CreditCard className="size-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-black tracking-tight uppercase">Payment Framework</h2>
                </div>

                <Alert className="mb-8 border-primary bg-primary/5 rounded-[2rem] p-8 border-2">
                  <ShieldCheck className="size-8 text-primary mb-4" />
                  <AlertTitle className="text-2xl font-black mb-2 uppercase tracking-tight">SEPA Exclusive Protocol</AlertTitle>
                  <AlertDescription className="text-lg font-medium leading-relaxed opacity-80">
                    Adriatek Limited operates exclusively via SEPA (Single Euro Payments Area) bank transfers. This ensures technical traceability and regulatory compliance for premium high-value transactions.
                  </AlertDescription>
                </Alert>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                   <div className="p-8 rounded-[2.5rem] bg-muted/30 border border-primary/5">
                      <h3 className="text-xl font-black mb-6 uppercase tracking-tight flex items-center gap-2">
                         <Info className="size-5 text-primary" />
                         Why SEPA?
                      </h3>
                      <ul className="space-y-4">
                        {[
                          "Zero Transaction Fees for client",
                          "Maximum Anti-Fraud Protection",
                          "Full Regulatory Clarity (EU/UK)",
                          "Direct Corporate Settlement"
                        ].map((item, idx) => (
                          <li key={idx} className="flex gap-3 text-sm font-bold opacity-70">
                             <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                             <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                   </div>

                   <div className="p-8 rounded-[2.5rem] bg-destructive/5 border border-destructive/20">
                      <h3 className="text-xl font-black mb-6 uppercase tracking-tight text-destructive flex items-center gap-2">
                         <Ban className="size-5" />
                         Restricted
                      </h3>
                      <ul className="space-y-4 text-xs font-black uppercase tracking-widest opacity-60">
                         <li className="flex items-center gap-3"><span>❌</span> No Cards / Wallets</li>
                         <li className="flex items-center gap-3"><span>❌</span> No Cryptocurrency</li>
                         <li className="flex items-center gap-3"><span>❌</span> No Cash Payments</li>
                         <li className="flex items-center gap-3"><span>❌</span> No COD Operations</li>
                      </ul>
                   </div>
                </div>

                <div className="p-8 md:p-12 rounded-[3rem] bg-background border border-primary/10 shadow-2xl shadow-primary/5">
                  <h3 className="text-2xl font-black mb-8 uppercase tracking-tighter">Transaction Lifecycle</h3>
                  <div className="space-y-8">
                    {[
                      { step: "01", title: "Order Initialized", desc: "Select components and initiate checkout process." },
                      { step: "02", title: "Invoice Dispatched", desc: "Receive a formal electronic invoice with technical bank details." },
                      { step: "03", title: "SEPA Execution", desc: "Release funds via an authorized European banking portal (5-day window)." },
                      { step: "04", title: "Settlement Verified", desc: "Automated verification within 24-48 corporate hours." },
                      { step: "05", title: "Logistic Launch", desc: "Direct supplier notification and unit allocation." }
                    ].map((phase, idx) => (
                      <div key={idx} className="flex gap-6 items-start group">
                        <span className="text-sm font-black text-primary bg-primary/10 size-10 flex items-center justify-center rounded-xl shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">{phase.step}</span>
                        <div>
                          <h4 className="font-bold text-lg mb-1">{phase.title}</h4>
                          <p className="text-muted-foreground font-medium text-sm">{phase.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <Separator className="bg-primary/5" />

              {/* Delivery Section */}
              <section id="delivery">
                <div className="flex items-center gap-4 mb-8 pt-8">
                  <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Truck className="size-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-black tracking-tight uppercase">Logistics Matrix</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                   <div className="p-10 rounded-[3rem] bg-muted/40 border border-primary/5 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-8">
                           <Timer className="size-8 text-primary" />
                           <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase">Standard Index</span>
                        </div>
                        <h3 className="text-4xl font-black mb-2 uppercase tracking-tighter">30 Days</h3>
                        <p className="text-muted-foreground font-bold uppercase tracking-widest text-xs mb-8">Target Delivery Window</p>
                      </div>
                      <div className="space-y-4 border-t border-primary/10 pt-8">
                         <div className="flex justify-between text-sm font-medium">
                            <span className="opacity-60">Verification</span>
                            <span>1-2 Days</span>
                         </div>
                         <div className="flex justify-between text-sm font-medium">
                            <span className="opacity-60">Supplier Hub</span>
                            <span>3-5 Days</span>
                         </div>
                         <div className="flex justify-between text-sm font-medium">
                            <span className="opacity-60">Transit Matrix</span>
                            <span>5-25 Days</span>
                         </div>
                      </div>
                   </div>

                   <div className="p-10 rounded-[3rem] bg-muted/40 border border-primary/5">
                      <div className="flex items-center gap-3 mb-8">
                         <Map className="size-6 text-primary" />
                         <h3 className="text-xl font-black uppercase tracking-tight">Active Coverage</h3>
                      </div>
                      <div className="space-y-6">
                         <div className="space-y-2">
                            <h4 className="text-[10px] font-black text-primary uppercase tracking-widest">Primary Hubs</h4>
                            <p className="text-sm font-bold leading-relaxed">EU-27, EFTA (CH, NO, IS, LI), United Kingdom (GB/NI).</p>
                         </div>
                         <div className="space-y-2 text-muted-foreground">
                            <h4 className="text-[10px] font-black uppercase tracking-widest opacity-60">Metropolitan Territories</h4>
                            <p className="text-sm font-bold leading-relaxed">Albania, Monaco, Montenegro, San Marino, Serbia, Turkey, Vatican.</p>
                         </div>
                         <Separator className="bg-primary/10" />
                         <div className="flex items-center gap-2 text-[9px] font-black text-destructive uppercase tracking-widest border border-destructive/20 bg-destructive/5 p-3 rounded-xl italic">
                            <Ban className="size-3" />
                            <span>Strict Embargo: RU, BY, UA & Sanctioned Regions</span>
                         </div>
                      </div>
                   </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {deliveryZones.map((zone) => (
                    <div key={zone.id} className="p-8 rounded-[2.5rem] bg-background border border-primary/5 shadow-xl shadow-primary/5 group hover:border-primary/20 transition-all">
                      <div className="size-12 rounded-xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                         <zone.icon className="size-6" />
                      </div>
                      <h4 className="text-xl font-black mb-2 uppercase tracking-tighter">{zone.name}</h4>
                      <div className="space-y-1 mb-4">
                        <p className="text-primary font-black text-sm">{zone.price}</p>
                        <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-[0.1em]">{zone.time}</p>
                      </div>
                      <p className="text-xs font-medium opacity-60 leading-relaxed">{zone.description}</p>
                    </div>
                  ))}
                </div>
              </section>
              {/* Documentation Section */}
              <section id="docs">
                <div className="p-10 md:p-16 rounded-[4rem] bg-primary text-primary-foreground relative overflow-hidden group">
                  <FileText className="absolute -right-12 -bottom-12 size-64 opacity-10 group-hover:rotate-6 transition-transform duration-700" />
                  <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6 uppercase">Technical Records</h2>
                    <p className="text-lg opacity-80 font-medium mb-10 max-w-2xl leading-relaxed">
                      Every transaction with Adriatek Limited is fully documented. Our logistics team provides a technical tracking index once the unit clears the primary hub.
                    </p>
                    <ul className="space-y-4 mb-12">
                      {importantInfo.map((info, index) => (
                        <li key={index} className="flex gap-4 items-start text-sm font-bold">
                           <CheckCircle2 className="size-5 shrink-0 opacity-60 mt-0.5" />
                           <span>{info}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-background text-foreground font-black uppercase text-xs tracking-widest">
                       <ShieldCheck className="size-4 text-primary" />
                       Authorized Distribution Matrix 2025
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Sidebar Sticky Panel */}
            <div className="lg:col-span-4 sticky top-24 space-y-8">
               <Card className="rounded-[2.5rem] border-primary/10 shadow-2xl shadow-primary/5 bg-background overflow-hidden relative group">
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <CardHeader className="p-8 pb-4 border-b border-primary/5">
                    <CardTitle className="text-xl font-black uppercase tracking-tight">Need Assistance?</CardTitle>
                    <CardDescription className="font-bold opacity-60">Logistics Priority Desk</CardDescription>
                  </CardHeader>
                  <CardContent className="p-8 space-y-8">
                     <div className="flex gap-4 group/item cursor-pointer">
                        <div className="size-10 rounded-xl bg-primary/5 flex items-center justify-center group-hover/item:bg-primary group-hover/item:text-primary-foreground transition-all">
                           <CreditCard className="size-4" />
                        </div>
                        <div>
                           <p className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-1">Inquiry Thread</p>
                           <p className="font-bold">info@adriatek-limited.com</p>
                        </div>
                     </div>
                     <div className="flex gap-4 group/item cursor-pointer">
                        <div className="size-10 rounded-xl bg-primary/5 flex items-center justify-center group-hover/item:bg-primary group-hover/item:text-primary-foreground transition-all">
                           <Timer className="size-4" />
                        </div>
                        <div>
                           <p className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-1">Availability Window</p>
                           <p className="font-bold text-sm">Mon-Fri 09:00 - 18:00 CET</p>
                        </div>
                     </div>
                     <Separator className="bg-primary/5" />
                     <div className="pt-4">
                        <p className="text-[10px] leading-relaxed text-muted-foreground font-medium uppercase tracking-tight italic opacity-60">
                           "Adherence to European banking standards ensures your high-tech allocation is processed with the highest degree of security and documentation."
                        </p>
                     </div>
                  </CardContent>
               </Card>

               <div className="p-8 rounded-[2.5rem] border border-primary/20 bg-primary/5 text-center">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-4">Official Disclaimer</p>
                  <p className="text-xs font-bold leading-relaxed opacity-60 mb-6">
                    Prices and delivery times are subject to dynamic logistics index adjustments. Final terms will be reflected in your corporate invoice.
                  </p>
                  <Link href="/terms" className="text-[10px] font-black uppercase tracking-widest underline decoration-primary/30 hover:text-primary transition-colors">
                    Review Terms of Service
                  </Link>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Delivery & Payment - Adriatek Limited",
  description: "Official logistics matrix and SEPA settlement protocols for Adriatek Limited. Verified European delivery within 30 days.",
};
