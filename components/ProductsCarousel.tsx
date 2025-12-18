"use client";
import { Product } from "@/generated/prisma";
import ProductCard from "./ProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function ProductsCarousel({
  products,
}: {
  products: Product[];
}) {
  return (
    <Carousel
      className="w-full mx-auto"
      opts={{
        loop: true,
        align: "start",
      }}
      plugins={[
        Autoplay({
          delay: 4000,
          stopOnInteraction: true,
        }),
      ]}
    >
      <CarouselContent>
        {products.map((product: Product) => (
          <CarouselItem
            key={product.id}
            className="basis-full sm:basis-1/2 lg:basis-1/3 pl-4 transition-all duration-300 mx-2 max-sm:mx-0"
          >
            <div className="h-full">
              <ProductCard key={product.id} product={product} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="max-[1650px]:hidden block mt-8">
        <CarouselPrevious className="size-12 -mx-4" />
        <CarouselNext className="size-12 -mx-4" />
      </div>
    </Carousel>
  );
}
