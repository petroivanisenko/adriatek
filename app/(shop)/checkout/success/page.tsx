import { CheckCircle2, ShoppingBag, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id: string }>;
}) {
  const { session_id } = await searchParams;

  return (
    <div className="container mx-auto py-20 px-4">
      <Card className="max-w-2xl mx-auto text-center py-12 border-primary/10 bg-background/50 backdrop-blur-md rounded-[2.5rem] shadow-2xl shadow-primary/5">
        <CardHeader>
          <div className="mx-auto size-24 rounded-3xl bg-primary/10 flex items-center justify-center mb-8 animate-in zoom-in duration-500">
            <CheckCircle2 className="size-12 text-primary" />
          </div>
          <CardTitle className="text-4xl font-black tracking-tight mb-4">
            Payment Successful!
          </CardTitle>
          <CardDescription className="text-xl">
            Thank you for your purchase. Your order is now being processed by our logistics team.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8 pt-6">
          <div className="bg-muted/30 rounded-2xl p-6 border border-primary/5 text-sm text-muted-foreground font-medium">
            <p>Order Reference: <span className="text-foreground font-bold">{session_id.substring(0, 15)}...</span></p>
            <p className="mt-2">A confirmation email has been sent to your inbox.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/catalogue">
              <Button size="lg" className="h-14 px-8 text-lg font-bold rounded-xl shadow-xl shadow-primary/20">
                Continue Shopping
                <ShoppingBag className="ml-2 size-5" />
              </Button>
            </Link>
            <Link href="/">
              <Button variant="outline" size="lg" className="h-14 px-8 text-lg font-bold rounded-xl border-primary/10">
                Back to Home
                <ArrowRight className="ml-2 size-5" />
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
