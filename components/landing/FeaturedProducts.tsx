import { getPopularProducts } from "@/actions/product";
import { Sparkles } from "lucide-react";
import ProductsCarousel from "../ProductsCarousel";

export default async function FeaturedProducts() {
  const products = await getPopularProducts();

  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" />
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center size-16 rounded-full bg-primary/10 mb-6">
            <Sparkles className="size-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Products
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular tech gadgets and electronics, carefully
            selected for quality and innovation
          </p>
        </div>
        {products && products?.length > 0 ? (
          <ProductsCarousel products={products} />
        ) : (
          <div className="text-center py-12">
            <div className="text-muted-foreground text-lg">
              No products found at the moment.
            </div>
            <p className="text-sm text-muted-foreground/70 mt-2">
              Please check back later for our latest tech products
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
