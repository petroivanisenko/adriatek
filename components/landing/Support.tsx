"use client";

import React, { useActionState } from "react";
import { Send, Loader2, MessageSquareIcon, Info } from "lucide-react";
import { sendContactEmail } from "@/actions/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function Support() {
  const [state, action, isPending] = useActionState(sendContactEmail, null);

  React.useEffect(() => {
    if (state?.success) {
      toast.success(state.message);
    } else if (state?.success === false) {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-background rounded-[2.5rem] border border-primary/10 overflow-hidden shadow-2xl shadow-primary/5 flex flex-col lg:flex-row">
          <div className="lg:w-1/3 bg-primary p-10 md:p-12 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
            <div className="relative z-10">
              <div className="size-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-10 border border-white/20">
                <MessageSquareIcon className="size-8 text-white" />
              </div>
              <h3 className="text-3xl font-black mb-6 tracking-tight">
                Technical Inquiry
              </h3>
              <p className="text-white/80 text-lg leading-relaxed mb-10">
                Have a specific technical requirement or need a custom build 
                configured? Our engineering team is ready to assist.
              </p>
            </div>
            
            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="size-10 rounded-full bg-white/10 flex items-center justify-center">
                   <span className="text-sm font-bold">@</span>
                </div>
                <span className="font-medium">info@adriatek-limited.com</span>
              </div>
            </div>
          </div>

          <div className="flex-1 p-10 md:p-16">
            <form action={action} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label htmlFor="name" className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Full Name</label>
                  <Input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="John Doe" 
                    required 
                    className="h-14 rounded-xl border-primary/10 bg-muted/20 focus:bg-background transition-all"
                  />
                </div>
                <div className="space-y-3">
                  <label htmlFor="email" className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Email Address</label>
                  <Input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="john@example.com" 
                    required 
                    className="h-14 rounded-xl border-primary/10 bg-muted/20 focus:bg-background transition-all"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label htmlFor="message" className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Message</label>
                <Textarea 
                  id="message" 
                  name="message" 
                  placeholder="Describe your technical requirements or question..." 
                  required 
                  rows={6}
                  className="rounded-xl border-primary/10 bg-muted/20 focus:bg-background transition-all resize-none p-4"
                />
              </div>

              <Button 
                type="submit" 
                disabled={isPending}
                className="w-full h-16 rounded-2xl text-lg font-bold flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                {isPending ? (
                  <>
                    <Loader2 className="size-5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Send className="size-5" />
                    Send Technical Inquiry
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
