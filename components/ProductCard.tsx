import Rating from "@/components/shared/Rating";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Product } from "@/generated/prisma";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import AddToCartButton from "./AddToCartButton";
import Image from "next/image";
import { resolvePublicImageUrl } from "@/lib/images";

export default function ProductCard({ product }: { product: Product }) {
  const imageSrc = resolvePublicImageUrl(product.image) ?? "";

  return (
    <Card
      key={product.id}
      className="group relative p-0 flex flex-col h-full bg-background border-primary/10 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 rounded-2xl overflow-hidden"
    >
      <Link href={`/product/${product.id}`} className="flex flex-col grow">
        <div className="relative w-full aspect-square bg-white overflow-hidden group-hover:bg-white transition-colors duration-500">
          <Image
            src={imageSrc}
            alt={product.name}
            fill
            className="object-contain p-8 transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            priority={false}
            unoptimized={imageSrc.includes("localhost")}
          />
          {product.discount > 0 && (
            <div className="absolute top-4 left-4">
              <Badge
                variant={"default"}
                className="bg-primary text-primary-foreground font-bold px-3 py-1 rounded-lg"
              >
                -{product.discount}%
              </Badge>
            </div>
          )}
          {!product.inStock && (
            <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px] flex items-center justify-center p-4">
              <Badge
                variant="destructive"
                className="px-4 py-2 text-sm font-bold rounded-xl"
              >
                Out of Stock
              </Badge>
            </div>
          )}
        </div>

        <CardHeader className="px-6 py-6 grow">
          <div className="flex items-center justify-between mb-3 text-xs uppercase tracking-wider font-semibold text-muted-foreground/60">
            <div className="flex items-center">
              <Rating rating={product.rating || 0} size={14} />
              <span className="ml-2">
                {product.rating ? `${product.rating.toFixed(1)}` : "0.0"}
              </span>
            </div>
            {product.inStock && <span className="text-primary">Available</span>}
          </div>

          <CardTitle
            className="text-xl font-bold tracking-tight mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2"
            title={product.name}
          >
            {product.name}
          </CardTitle>

          <CardDescription className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">
            {product.description}
          </CardDescription>
        </CardHeader>
      </Link>

      <CardFooter className="px-6 pb-8 pt-0 mt-auto">
        <div className="w-full flex flex-col gap-4">
          <div className="flex items-end justify-between">
            <div className="flex flex-col">
              {product.discount > 0 && (
                <span className="text-sm text-muted-foreground line-through decoration-primary/30">
                  {Math.round(
                    product.price + (product.discount * product.price) / 100,
                  )}{" "}
                  €
                </span>
              )}
              <span className="text-2xl font-black text-foreground">
                {product.price.toLocaleString()} €
              </span>
            </div>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="pointer-events-auto">
                    <AddToCartButton product={product} quantity={1} />
                  </div>
                </TooltipTrigger>
                {!product.inStock && (
                  <TooltipContent>
                    <p>Notify when available</p>
                  </TooltipContent>
                )}
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
