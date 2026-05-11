import { XCircle, ArrowLeft, MessageCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function CancelPage() {
  return (
    <div className="container mx-auto py-20 px-4">
      <Card className="max-w-2xl mx-auto text-center py-12 border-destructive/10 bg-background/50 backdrop-blur-md rounded-[2.5rem] shadow-2xl shadow-destructive/5">
        <CardHeader>
          <div className="mx-auto size-24 rounded-3xl bg-destructive/10 flex items-center justify-center mb-8">
            <XCircle className="size-12 text-destructive" />
          </div>
          <CardTitle className="text-4xl font-black tracking-tight mb-4">
            Payment Cancelled
          </CardTitle>
          <CardDescription className="text-xl">
            The transaction was not completed. No funds have been debited from your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8 pt-6">
          <div className="bg-muted/30 rounded-2xl p-6 border border-primary/5 text-sm text-muted-foreground font-medium">
            <p>If you experienced any issues during the checkout process, please contact our support team for immediate assistance.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/checkout">
              <Button size="lg" className="h-14 px-8 text-lg font-bold rounded-xl shadow-xl">
                Try Again
                <ArrowLeft className="ml-2 size-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="h-14 px-8 text-lg font-bold rounded-xl border-primary/10">
                Contact Support
                <MessageCircle className="ml-2 size-5" />
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
