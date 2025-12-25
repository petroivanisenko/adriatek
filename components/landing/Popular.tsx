import { Category } from "@/generated/prisma";
import { MoveUpRightIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getCategories } from "@/actions/category";

export default async function Popular() {
  const categories = await getCategories();
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center justify-center space-x-2 text-primary font-bold uppercase tracking-widest text-sm mb-4">
              <span className="w-8 h-px bg-primary" />
              <span>Curated Collections</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
              Shop by Category
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              Explore our comprehensive range of high-end electronics, from professional 
              workstations to premium audio systems.
            </p>
          </div>
          <Link href="/catalogue" className="group inline-flex items-center text-lg font-bold hover:text-primary transition-colors">
            View All Categories 
            <MoveUpRightIcon className="ml-2 size-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories && categories.length > 0 ? (
            categories.map((category: Category) => (
              <Link
                href={`/catalogue/${category.slug}`}
                key={category.name}
                className="group relative h-[500px] overflow-hidden rounded-3xl transition-all duration-700 bg-muted"
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10 pointer-events-none">
                  <div className="transform transition-all duration-500 group-hover:-translate-y-4">
                    <div className="inline-flex items-center justify-center size-12 rounded-xl bg-white/10 backdrop-blur-md mb-6 border border-white/20 transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                      <MoveUpRightIcon className="size-6 text-white" />
                    </div>
                    <h3 className="text-3xl font-black text-white mb-4 tracking-tight">
                      {category.name}
                    </h3>
                    <p className="text-white/70 text-lg leading-relaxed line-clamp-2 max-w-xs transition-colors group-hover:text-white">
                      {category.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-20 bg-muted/50 rounded-3xl border-2 border-dashed border-primary/20">
              <div className="text-muted-foreground text-xl font-bold">
                Awaiting our premium additions...
              </div>
              <p className="text-muted-foreground/60 mt-4 max-w-sm mx-auto">
                We're currently updating our exclusive collections. Please return soon.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
