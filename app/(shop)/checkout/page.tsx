"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertCircle,
  CheckCircle2,
  Mail,
  MapPin,
  ShoppingCart,
  User,
  ShieldCheck,
  CreditCard,
  ArrowLeft
} from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";
import { resolvePublicImageUrl } from "@/lib/images";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SetBreadcrumbs } from "@/components/SetBreadcrumbs";
import { useCartStore } from "@/store/useCartStore";
import { placeOrder } from "@/actions/place-order";
import { EUROPEAN_COUNTRIES } from "@/constants/countries";
import { motion } from "framer-motion";

export default function CheckoutPage() {
  const { cart, clearItems } = useCartStore();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    address: "",
    postalCode: "",
    additionalInfo: "",
  });

  const totalAmount = cart.items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    let value = e.target.value;

    if (e.target.name === "phone") {
      // Basic phone masking/formatting logic
      // Remove all non-digit characters except for the leading +
      const digits = value.replace(/\D/g, "");
      
      // If the field is empty, just set it
      if (digits.length === 0) {
        setFormData({ ...formData, phone: value.startsWith("+") ? "+" : "" });
        return;
      }

      // Format as +XX XXX XXX XXXX
      let formatted = "+";
      if (digits.length > 0) {
        formatted += digits.substring(0, 2);
      }
      if (digits.length > 2) {
        formatted += " " + digits.substring(2, 5);
      }
      if (digits.length > 5) {
        formatted += " " + digits.substring(5, 8);
      }
      if (digits.length > 8) {
        formatted += " " + digits.substring(8, 12);
      }
      
      value = formatted;
    }

    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  const handleCountryChange = (value: string) => {
    setFormData({
      ...formData,
      country: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.country) {
      toast.error("Please select a country");
      return;
    }
    
    setIsSubmitting(true);

    try {
      const result = await placeOrder({
        ...formData,
        items: cart.items,
        totalAmount,
      });

      if (!result.success) {
        throw new Error(result.error || "Failed to place order");
      }

      toast.success("Order Placed Successfully!", {
        description: "An invoice with SEPA details has been sent to your email.",
      });

      clearItems();
      router.push("/");
    } catch (error) {
      console.error(error);
      toast.error("Process failed", {
        description: "There was an error processing your order. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (cart.items.length === 0) {
    return (
      <div className="container mx-auto py-20 px-4">
        <Card className="max-w-2xl mx-auto text-center py-16 border-primary/10 bg-background/50 backdrop-blur-md rounded-[2rem]">
          <CardHeader>
            <div className="mx-auto size-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <ShoppingCart className="size-10 text-primary" />
            </div>
            <CardTitle className="text-3xl font-black tracking-tight">Your Cart is Empty</CardTitle>
            <CardDescription className="text-lg">
              Add our premium tech products to your cart before proceeding to checkout.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <Link href="/catalogue">
              <Button size="lg" className="h-14 px-8 text-lg font-bold rounded-xl shadow-xl shadow-primary/20">
                Browse Catalogue
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto pb-20 px-4 sm:px-6 md:px-8">
        <SetBreadcrumbs items={[{ label: "Checkout", href: "/checkout" }]} />

        <div className="max-w-7xl mx-auto pt-8">
          <div className="flex items-center gap-4 mb-12">
            <Link href="/catalogue">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/5">
                <ArrowLeft className="size-6" />
              </Button>
            </Link>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter">Secure Checkout</h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Order Form */}
            <div className="lg:col-span-8 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Alert className="border-primary/20 bg-primary/5 rounded-2xl p-6">
                  <CreditCard className="size-6 text-primary" />
                  <div className="ml-4">
                    <AlertTitle className="text-lg font-bold mb-1">SEPA Bank Transfer Only</AlertTitle>
                    <AlertDescription className="text-muted-foreground">
                      We accept exclusively SEPA transfers to ensure high transaction security.
                    </AlertDescription>
                  </div>
                </Alert>

                <Alert className="border-primary/20 bg-primary/5 rounded-2xl p-6">
                  <ShieldCheck className="size-6 text-primary" />
                  <div className="ml-4">
                    <AlertTitle className="text-lg font-bold mb-1">Corporate Verification</AlertTitle>
                    <AlertDescription className="text-muted-foreground">
                      All orders undergo manual verification before processing.
                    </AlertDescription>
                  </div>
                </Alert>
              </div>

              <Card className="border-primary/10 shadow-2xl shadow-primary/5 rounded-[2.5rem] overflow-hidden bg-background/50 backdrop-blur-sm">
                <CardHeader className="p-8 md:p-12 pb-4">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <User className="size-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold">Client Information</CardTitle>
                      <CardDescription>Enter your contact and delivery details</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <Separator className="bg-primary/5" />
                <CardContent className="p-8 md:p-12">
                  <form id="checkout-form" onSubmit={handleSubmit} className="space-y-10">
                    {/* Contact Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <Label htmlFor="fullName" className="text-sm font-bold uppercase tracking-widest opacity-60">Full Name</Label>
                        <Input
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          required
                          placeholder="Individual or Company Name"
                          className="h-14 rounded-xl border-primary/10 focus:border-primary transition-all text-lg"
                        />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="phone" className="text-sm font-bold uppercase tracking-widest opacity-60">Contact Phone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          maxLength={16}
                          placeholder="+XX XXX XXX XXXX"
                          className="h-14 rounded-xl border-primary/10 focus:border-primary transition-all text-lg"
                        />
                      </div>
                      <div className="md:col-span-2 space-y-3">
                        <Label htmlFor="email" className="text-sm font-bold uppercase tracking-widest opacity-60">Corporate Email Address</Label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            placeholder="invoice@company.com"
                            className="h-14 pl-12 rounded-xl border-primary/10 focus:border-primary transition-all text-lg"
                          />
                        </div>
                        <p className="text-xs text-muted-foreground ml-1">
                          Invoices and technical documentation will be dispatched to this address.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-8">
                      <div className="flex items-center gap-4 pt-4">
                        <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <MapPin className="size-5 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold">Logistics Hub</h3>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <Label htmlFor="country" className="text-sm font-bold uppercase tracking-widest opacity-60">Destination Country</Label>
                          <Select onValueChange={handleCountryChange} required>
                            <SelectTrigger className="h-14 rounded-xl border-primary/10 focus:border-primary transition-all text-lg bg-background">
                              <SelectValue placeholder="Select high-priority region" />
                            </SelectTrigger>
                            <SelectContent className="max-h-80 rounded-xl">
                              {EUROPEAN_COUNTRIES.map((country) => (
                                <SelectItem key={country} value={country} className="text-lg py-3">
                                  {country}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <p className="text-[10px] text-muted-foreground uppercase tracking-widest leading-normal">
                             Available exclusively for verified European territories
                          </p>
                        </div>
                        <div className="space-y-3">
                          <Label htmlFor="city" className="text-sm font-bold uppercase tracking-widest opacity-60">City / Jurisdiction</Label>
                          <Input
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            required
                            placeholder="Metropolitan Area"
                            className="h-14 rounded-xl border-primary/10 focus:border-primary transition-all text-lg"
                          />
                        </div>
                        <div className="md:col-span-2 space-y-3">
                          <Label htmlFor="address" className="text-sm font-bold uppercase tracking-widest opacity-60">Street Operations Address</Label>
                          <Input
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            required
                            placeholder="Full address details for courier delivery"
                            className="h-14 rounded-xl border-primary/10 focus:border-primary transition-all text-lg"
                          />
                        </div>
                        <div className="space-y-3">
                          <Label htmlFor="postalCode" className="text-sm font-bold uppercase tracking-widest opacity-60">Postal Index</Label>
                          <Input
                            id="postalCode"
                            name="postalCode"
                            value={formData.postalCode}
                            onChange={handleInputChange}
                            required
                            placeholder="HQ/Office Code"
                            className="h-14 rounded-xl border-primary/10 focus:border-primary transition-all text-lg"
                          />
                        </div>
                         <div className="space-y-3">
                          <Label htmlFor="additionalInfo" className="text-sm font-bold uppercase tracking-widest opacity-60 underline decoration-primary/20">Operational Notes</Label>
                          <Input
                            id="additionalInfo"
                            name="additionalInfo"
                            value={formData.additionalInfo}
                            onChange={handleInputChange}
                            placeholder="Company VAT, specific gate instructions, etc."
                            className="h-14 rounded-xl border-primary/10 focus:border-primary transition-all text-lg"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="bg-muted/30 rounded-3xl p-8 border border-primary/5">
                      <h4 className="font-bold mb-4 flex items-center gap-2">
                        <CheckCircle2 className="size-5 text-primary" />
                        Next Operational Steps
                      </h4>
                      <ol className="space-y-4 text-sm text-muted-foreground font-medium">
                        <li className="flex gap-4">
                          <span className="flex items-center justify-center size-6 rounded-full bg-primary text-primary-foreground text-[10px] shrink-0 mt-0.5">01</span>
                          <span>An electronic invoice containing Adriatek Limited corporate bank details will be dispatched to your email.</span>
                        </li>
                         <li className="flex gap-4">
                          <span className="flex items-center justify-center size-6 rounded-full bg-primary text-primary-foreground text-[10px] shrink-0 mt-0.5">02</span>
                          <span>Execute an authorized SEPA transfer within 5 business days to confirm the allocation.</span>
                        </li>
                         <li className="flex gap-4">
                          <span className="flex items-center justify-center size-6 rounded-full bg-primary text-primary-foreground text-[10px] shrink-0 mt-0.5">03</span>
                          <span>Following transaction validation, logistics will be initiated with our tier-1 suppliers (30-day window).</span>
                        </li>
                      </ol>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        form="checkout-form"
                        type="submit"
                        className="h-16 px-12 text-xl font-black rounded-2xl shadow-2xl shadow-primary/30 transition-all hover:scale-[1.02] flex-1"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "INITIATING..." : "CONFIRM ORDER"}
                        {!isSubmitting && <ShoppingCart className="ml-3" />}
                      </Button>
                    </div>

                    <p className="text-[10px] text-muted-foreground text-center uppercase tracking-widest font-bold opacity-40">
                      By proceeding, you authorize Adriatek Limited to process this request in accordance with our 
                      <Link href="/terms" className="text-primary hover:underline mx-1">Terms of Service</Link> 
                      and 
                      <Link href="/privacy" className="text-primary hover:underline mx-1">Privacy Protocol</Link>
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 space-y-6">
                <Card className="border-primary/10 shadow-xl shadow-primary/5 rounded-[2rem] overflow-hidden bg-background/50 backdrop-blur-sm">
                  <CardHeader className="p-8 pb-4">
                    <CardTitle className="text-xl font-bold">Allocation Summary</CardTitle>
                    <CardDescription>{cart.items.length} premium items</CardDescription>
                  </CardHeader>
                  <Separator className="bg-primary/5" />
                  <CardContent className="p-8">
                    <div className="space-y-6 max-h-[40vh] overflow-y-auto pr-4 custom-scrollbar mb-8">
                      {cart.items.map((item) => (
                        <div
                          key={item.productId}
                          className="flex gap-4 group"
                        >
                          <div className="relative size-16 shrink-0 rounded-xl overflow-hidden bg-white border border-primary/5">
                            <Image
                              src={resolvePublicImageUrl(item.product.image) ?? ""}
                              alt={item.product.name}
                              fill
                              className="object-contain p-2 transition-transform duration-500 group-hover:scale-110"
                              unoptimized={(
                                resolvePublicImageUrl(item.product.image) ?? ""
                              ).includes("localhost")}
                            />
                          </div>
                          <div className="flex-1 min-w-0 flex flex-col justify-center">
                            <p className="font-bold text-sm line-clamp-2 leading-tight mb-1 group-hover:text-primary transition-colors">
                              {item.product.name}
                            </p>
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest opacity-60">Qty: {item.quantity}</span>
                              <span className="text-sm font-black">€{(item.product.price * item.quantity).toLocaleString()}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-4 pt-4">
                      <div className="flex justify-between items-center text-sm font-bold uppercase tracking-widest opacity-60">
                        <span>Net Allocation</span>
                        <span>€{totalAmount.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm font-bold uppercase tracking-widest opacity-60">
                        <span>Logistics Fee</span>
                        <span className="text-[10px]">TBD IN INVOICE</span>
                      </div>
                      
                      <Separator className="bg-primary/10" />

                      <div className="flex justify-between items-end pt-2">
                        <span className="text-xl font-black uppercase tracking-tighter">Total Amount</span>
                        <span className="text-3xl font-black text-primary">€{totalAmount.toLocaleString()}</span>
                      </div>
                      
                      <div className="mt-8 p-4 rounded-xl bg-primary/5 border border-primary/10 flex gap-3">
                        <AlertCircle className="size-5 text-primary shrink-0" />
                        <p className="text-[10px] leading-relaxed text-muted-foreground font-medium">
                          Final logistics costs will be calculated based on destination hub and product specifications. 
                          The exact total will be reflected in your formal documentation.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="p-8 rounded-[2rem] bg-muted/20 border border-primary/5 text-center">
                   <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60 mb-2">Technical Assistance</p>
                   <p className="text-sm font-bold">support@adriatek-limited.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
