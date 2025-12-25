import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageCircle, PhoneCall } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 size-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 size-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto text-center px-4 relative z-10">
        <div className="inline-flex items-center justify-center size-20 rounded-2xl bg-primary/10 mb-8 backdrop-blur-md border border-primary/20">
          <MessageCircle className="size-10 text-primary" />
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
          Ready to upgrade your enterprise?
        </h2>
        <p className="text-lg md:text-2xl mb-10 max-w-2xl mx-auto text-muted-foreground">
          Our specialists are ready to help you find the perfect high-end 
          solution for your home or professional office.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contacts">
            <Button
              size="lg"
              className="h-14 px-10 text-lg font-medium shadow-xl shadow-primary/20 transition-all duration-300 hover:scale-105"
            >
              Contact Us <PhoneCall className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/delivery">
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-10 text-lg font-medium border-primary/20 hover:bg-primary/5 transition-all duration-300 hover:scale-105"
            >
              Delivery & Payment
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
