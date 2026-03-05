"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import {
  ArrowRightIcon,
  EraserIcon,
  ShoppingCartIcon,
  ShieldCheck,
  CreditCard
} from "lucide-react";
import Link from "next/link";
import { useCartStore } from "@/store/useCartStore";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import CartItem from "./CartItem";

export function CartSheet() {
  const { cart, isOpen, closeCart, clearItems } = useCartStore();

  return (
    <Sheet open={isOpen} onOpenChange={closeCart}>
      <SheetContent
        className="px-6 flex flex-col h-full w-full sm:max-w-md border-primary/10 bg-background/95 backdrop-blur-xl"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <SheetHeader className="pb-6">
          <div className="flex items-center gap-4">
            <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <ShoppingCartIcon className="size-6 text-primary" />
            </div>
            <div>
              <SheetTitle className="text-2xl font-black tracking-tight">Shopping Cart</SheetTitle>
              <SheetDescription className="text-sm font-bold uppercase tracking-widest opacity-60">
                {isNaN(cart.totalItems)
                  ? "Stock Mismatch Detected"
                  : `${cart.totalItems} premium tech ${cart.totalItems === 1 ? "unit" : "units"} `}
              </SheetDescription>
            </div>
          </div>
        </SheetHeader>
        
        <Separator className="bg-primary/5" />

        {cart.items.length === 0 ? (
          <div className="flex flex-col items-center justify-center grow text-center p-8">
            <div className="size-24 rounded-3xl bg-muted/30 flex items-center justify-center mb-6">
               <ShoppingCartIcon className="size-10 text-muted-foreground opacity-20" />
            </div>
            <h3 className="text-2xl font-black mb-2 tracking-tight">Standard State: Empty</h3>
            <p className="text-muted-foreground mb-10 leading-relaxed font-medium">
              Explore our curated selection of high-end electronics to start your allocation.
            </p>
            <Button onClick={closeCart} asChild className="h-14 px-8 rounded-xl font-bold group shadow-xl shadow-primary/10">
              <Link href="/catalogue">
                Initialize Catalogue <ArrowRightIcon className="ml-2 size-4 transition-transform group-hover:translate-x-1" />{" "}
              </Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="grow overflow-auto py-6 pr-2 custom-scrollbar space-y-2">
              {cart.items
                .sort((a, b) => {
                  if (a.product.inStock && !b.product.inStock) return -1;
                  if (!a.product.inStock && b.product.inStock) return 1;
                  return 0;
                })
                .map((item) => (
                  <CartItem
                    key={item.productId}
                    productId={item.productId}
                    product={item.product}
                    quantity={item.quantity}
                    onCartCloseAction={closeCart}
                  />
                ))}
            </div>

            <div className="pt-6 border-t border-primary/5 space-y-6">
              <div className="space-y-4 bg-muted/30 p-6 rounded-[2rem] border border-primary/5">
                <div className="flex justify-between items-end">
                   <div className="flex flex-col">
                      <span className="text-xs font-bold uppercase tracking-widest opacity-40 mb-1">Total Allocation</span>
                      <span className="text-3xl font-black text-foreground">
                        {isNaN(cart.totalPrice)
                          ? "Value Error"
                          : `${cart.totalPrice.toLocaleString()} €`}
                      </span>
                   </div>
                   <div className="text-right">
                      <span className="text-[10px] font-bold uppercase tracking-widest opacity-40 block mb-1">Status</span>
                      <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">READY TO PROCESS</span>
                   </div>
                </div>

                <div className="flex items-center gap-3 pt-4 text-[10px] font-medium text-muted-foreground uppercase tracking-widest">
                   <div className="flex items-center gap-1">
                      <CreditCard className="size-3 text-primary" />
                      <span>SEPA Bank Only</span>
                   </div>
                   <div className="flex items-center gap-1">
                      <ShieldCheck className="size-3 text-primary" />
                      <span>EU Secure Delivery</span>
                   </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pb-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      size="lg"
                      className="h-14 rounded-xl font-bold border-primary/10 hover:bg-destructive/5 hover:text-destructive hover:border-destructive/20 transition-all"
                    >
                      <EraserIcon className="size-4 mr-2" /> Reset
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="rounded-3xl border-primary/10">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-black">Flush Cart Data?</DialogTitle>
                      <DialogDescription className="text-base font-medium">
                        This action will terminate your current shopping session and remove all allocated units.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="flex flex-col gap-6 pt-4">
                      <div className="flex justify-end gap-3">
                         <Button variant="ghost" className="font-bold rounded-xl h-12">Cancel Operation</Button>
                        <Button
                          variant="destructive"
                          className="font-black rounded-xl h-12 px-8"
                          onClick={() => {
                            clearItems();
                            closeCart();
                          }}
                        >
                          Confirm Reset
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href="/checkout"
                        className="flex-1"
                      >
                        <Button
                          size="lg"
                          className="w-full h-14 rounded-xl font-black tracking-tight shadow-xl shadow-primary/20 transition-all hover:scale-[1.02]"
                          disabled={cart.items.some(
                            (item) => !item.product.inStock,
                          )}
                          onClick={closeCart}
                        >
                          Checkout <ArrowRightIcon className="ml-2 size-4" />
                        </Button>
                      </Link>
                    </TooltipTrigger>
                    {cart.items.some((item) => !item.product.inStock) && (
                      <TooltipContent className="bg-destructive text-destructive-foreground font-bold rounded-lg border-none shadow-xl">
                        <p>Unit Stock Depleted - Resolve to continue</p>
                      </TooltipContent>
                    )}
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
