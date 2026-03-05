"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCartStore } from "@/store/useCartStore";
import { Trash2Icon } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import { Product } from "@/generated/prisma";
import ProductQuantity from "./ProductQuantity";
import Image from "next/image";
import { resolvePublicImageUrl } from "@/lib/images";

export default function CartItem({
  productId,
  product,
  quantity,
  onCartCloseAction,
  compact = false,
}: {
  productId: number;
  product: Product;
  quantity: number;
  onCartCloseAction?: () => void;
  compact?: boolean;
}) {
  const { removeItem } = useCartStore();
  const imageSrc = resolvePublicImageUrl(product.image) ?? "";
  
  const originalPrice = Math.round(
    product.price * (1 + product.discount / 100),
  );
  const hasDiscount = product.discount > 0;

  return (
    <div className="flex gap-4 p-4 rounded-3xl bg-muted/30 border border-primary/5 group hover:border-primary/20 transition-all duration-300">
      <Link
        href={`/product/${productId}`}
        onClick={onCartCloseAction}
        className={`relative ${compact ? "size-20" : "size-24"} rounded-2xl overflow-hidden shrink-0 bg-white border border-primary/5 flex items-center justify-center`}
      >
        <Image
          src={imageSrc}
          alt={product.name}
          fill
          className="object-contain p-2 transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 80px, 96px"
          unoptimized={imageSrc.includes("localhost")}
        />
      </Link>
      <div className="grow flex flex-col justify-between py-1">
        <div>
           <div className="flex justify-between items-start gap-2 mb-1">
              <h4 className="font-bold text-sm leading-tight line-clamp-2 uppercase tracking-tight">{product.name}</h4>
              <Button
                variant="ghost"
                size="icon"
                className="size-7 text-muted-foreground hover:bg-destructive/10 hover:text-destructive shrink-0 rounded-lg"
                onClick={() => {
                  toast.error("Unit Released", {
                    description: `${product.name} removed from your allocation.`,
                  });
                  removeItem(productId);
                }}
              >
                <Trash2Icon className="size-4" />
              </Button>
           </div>
          
           <div className="flex items-center gap-2 mb-2">
            {!product.inStock ? (
              <Badge variant="destructive" className="bg-destructive/10 text-destructive border-destructive/20 text-[9px] uppercase tracking-widest font-black py-0 px-2">
                Unavailable
              </Badge>
            ) : (
               <Badge variant="secondary" className="bg-primary/5 text-primary border-primary/10 text-[9px] uppercase tracking-widest font-black py-0 px-2">
                Premium Stock
              </Badge>
            )}
          </div>
        </div>

        <div className="flex justify-between items-center mt-2 pt-2 border-t border-primary/5">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-black text-base text-foreground">{product.price.toLocaleString()} €</span>
              {hasDiscount && (
                <span className="text-[10px] text-muted-foreground line-through opacity-50 font-medium">
                  {originalPrice.toLocaleString()} €
                </span>
              )}
            </div>
            {hasDiscount && (
               <div className="flex items-center gap-1">
                  <span className="text-[10px] font-black text-primary bg-primary/5 px-1 rounded">-{product.discount}%</span>
                  <span className="text-[9px] font-bold uppercase tracking-widest opacity-40">Applied</span>
               </div>
            )}
          </div>
          
          <ProductQuantity
            product={product}
            quantity={quantity}
            mode="cart"
            productId={productId}
          />
        </div>
      </div>
    </div>
  );
}
