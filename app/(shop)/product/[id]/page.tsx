import Rating from "@/components/shared/Rating";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, getProducts, getSimilarProducts } from "@/actions/product";
import { Badge } from "@/components/ui/badge";
import ProductCard from "@/components/ProductCard";
import CopyLinkButton from "@/components/CopyLinkButton";
import AddProduct from "@/components/shop/product/AddProduct";

import { SetBreadcrumbs } from "@/components/SetBreadcrumbs";
import Image from "next/image";
import { getComments } from "@/actions/comments";
import CommentCard from "@/components/shop/product/CommentCard";
import NewComment from "@/components/shop/product/NewComment";
import ReadMore from "@/components/ReadMore";
import { Metadata } from "next";
import { Product } from "@/generated/prisma";
import { resolvePublicImageUrl } from "@/lib/images";
import { ShieldCheck, Truck, Zap } from "lucide-react";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = parseInt((await params).id);
  if (isNaN(id)) notFound();

  const product = await getProduct(id);
  if (!product) notFound();
  const similarProducts = await getSimilarProducts(product.categoryId);
  const comments = await getComments(id);
  const filteredSimilarProducts = similarProducts
    ?.filter((p) => p.id !== product.id)
    .slice(0, 4);

  const originalPrice = Math.round(
    product.price * (1 + product.discount / 100),
  );
  const hasDiscount = product.discount > 0;

  const imageSrc = resolvePublicImageUrl(product.image) ?? "";

  return (
    <main className="container min-h-screen mx-auto py-8 md:py-16 px-4 md:px-8">
      <SetBreadcrumbs
        items={[
          {
            label: "Catalogue",
            href: "/catalogue",
          },
          {
            label:
              product.name.length > 40
                ? product.name.slice(0, 40) + "..."
                : product.name,
            href: `/product/${product.id}`,
            title: product.name,
          },
        ]}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mt-8">
        {/* Product Image Stage */}
        <div className="relative aspect-square overflow-hidden rounded-3xl bg-white border-primary/5 shadow-2xl shadow-primary/5 flex items-center justify-center p-8 group">
          <Image
            src={imageSrc}
            alt={product.name}
            fill
            className="object-contain p-12 transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 1024px) 90vw, 45vw"
            priority
            unoptimized={imageSrc.includes("localhost")}
          />
          {hasDiscount && (
             <div className="absolute top-8 left-8">
              <Badge className="bg-primary text-primary-foreground text-lg py-1 px-4 rounded-xl font-bold">
                -{product.discount}%
              </Badge>
            </div>
          )}
        </div>

        {/* Product Info Section */}
        <div className="flex flex-col">
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
               <Badge variant={!product.inStock ? "destructive" : "secondary"} className="rounded-lg px-3 py-1 font-bold">
                {!product.inStock ? "Currently Unavailable" : "Premium Series"}
              </Badge>
              <div className="flex items-center">
                <Rating rating={product.rating || 0} size={18} />
                <span className="ml-2 text-sm font-bold text-muted-foreground">
                  {product.rating ? product.rating.toFixed(1) : "0.0"} Rating
                </span>
              </div>
            </div>
            
            <h1 className="text-2xl md:text-4xl font-black tracking-tighter mb-6 leading-tight">
              {product.name}
            </h1>

            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-4xl md:text-5xl font-black text-foreground">
                {product.price.toLocaleString()} €
              </span>
              {hasDiscount && (
                <span className="text-muted-foreground line-through text-2xl decoration-primary/20">
                  {originalPrice.toLocaleString()} €
                </span>
              )}
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground mb-10 leading-relaxed">
              <ReadMore text={product.description} />
            </div>

            {product.inStock ? (
              <div className="space-y-6">
                <AddProduct product={product} />
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-primary/5">
                  <div className="flex flex-col items-center p-4 rounded-2xl bg-muted/30 text-center">
                    <ShieldCheck className="size-6 text-primary mb-2" />
                    <span className="text-xs font-bold uppercase tracking-widest opacity-60">Warranty</span>
                    <span className="text-sm font-bold mt-1">2 Year Standard</span>
                  </div>
                  <div className="flex flex-col items-center p-4 rounded-2xl bg-muted/30 text-center">
                    <Truck className="size-6 text-primary mb-2" />
                    <span className="text-xs font-bold uppercase tracking-widest opacity-60">Shipping</span>
                    <span className="text-sm font-bold mt-1">EU Reliable</span>
                  </div>
                  <div className="flex flex-col items-center p-4 rounded-2xl bg-muted/30 text-center">
                    <Zap className="size-6 text-primary mb-2" />
                    <span className="text-xs font-bold uppercase tracking-widest opacity-60">Support</span>
                    <span className="text-sm font-bold mt-1">Tech Experts</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-8 rounded-3xl bg-destructive/5 border border-destructive/10 text-center">
                <p className="text-destructive font-bold text-lg">Product Currently Out of Stock</p>
                <p className="text-muted-foreground mt-2">Check back soon for our next premium shipment.</p>
              </div>
            )}
          </div>

          <div className="mt-auto pt-8 border-t border-primary/5">
            <h3 className="text-sm font-bold uppercase tracking-widest mb-4 opacity-40">Share this excellence</h3>
            <CopyLinkButton text="Copy Product Reference" />
          </div>
        </div>
      </div>

      {filteredSimilarProducts && filteredSimilarProducts.length > 0 && (
        <section className="mt-24 md:mt-40">
          <div className="flex items-end justify-between mb-12">
            <div>
               <div className="inline-flex items-center justify-center space-x-2 text-primary font-bold uppercase tracking-widest text-xs mb-4">
                <span className="w-12 h-px bg-primary" />
                <span>You may also like</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight">Similar Tech</h2>
            </div>
            <Link href="/catalogue" className="text-primary font-bold hover:underline mb-2">View Full Catalog</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredSimilarProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}

      <div className="mt-24 md:mt-40 bg-muted/30 rounded-[3rem] p-8 md:p-16">
        <div className="mb-12">
          <div className="inline-flex items-center justify-center space-x-2 text-primary font-bold uppercase tracking-widest text-xs mb-4">
            <span className="w-12 h-px bg-primary" />
            <span>Customer Experience</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">Technical Reviews</h2>
        </div>
        
        <NewComment productId={product.id} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">
          {comments?.length ? (
            comments.map((comment) => (
              <CommentCard key={comment.id} comment={comment} />
            ))
          ) : (
            <div className="col-span-full py-12 text-center text-muted-foreground italic">
              No technical reviews yet. Be the first to share your experience.
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const id = parseInt((await params).id);
  if (isNaN(id)) return { title: "Product Not Found" };

  const product = await getProduct(id);

  if (!product) return { title: "Product Not Found" };

  return {
    title: `${product.name} | Adriatek Limited`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [{ url: resolvePublicImageUrl(product.image) ?? "" }],
    },
  };
}

export async function generateStaticParams() {
  const result = await getProducts();

  const products = Array.isArray(result)
    ? result
    : result && "products" in result
      ? result.products
      : [];

  return products.map((product: Product) => ({
    id: String(product.id),
  }));
}
