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
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary/30 to-transparent" />

      {/* Subtle background glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-3 text-primary font-bold uppercase tracking-[0.2em] text-xs mb-6 px-1">
              <span className="w-12 h-px bg-primary/40" />
              <span>Curated Collections</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-[0.9]">
              Shop by <span className="text-primary">Category</span>
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-xl">
              Explore our comprehensive range of high-end electronics, from
              professional workstations to premium audio systems.
            </p>
          </div>
          <Link
            href="/catalogue"
            className="group inline-flex items-center text-sm font-bold uppercase tracking-widest hover:text-primary transition-all duration-300 pb-2 border-b border-transparent hover:border-primary"
          >
            View All Categories
            <MoveUpRightIcon className="ml-3 size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {categories && categories.length > 0 ? (
            categories.map((category: Category) => (
              <Link
                href={`/catalogue/${category.slug}`}
                key={category.name}
                className="group relative h-[600px] overflow-hidden rounded-[2.5rem] transition-all duration-700 bg-muted border border-white/5 shadow-2xl hover:shadow-primary/10"
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Advanced Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-overlay" />

                <div className="absolute inset-0 flex flex-col justify-end p-10 md:p-12">
                  <div className="transform transition-all duration-700">
                    <div className="inline-flex items-center justify-center size-14 rounded-2xl bg-white/10 backdrop-blur-xl mb-8 border border-white/20 transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                      <MoveUpRightIcon className="size-6 text-white" />
                    </div>

                    <h3 className="text-4xl font-black text-white mb-6 tracking-tight group-hover:text-primary transition-colors duration-500">
                      {category.name}
                    </h3>

                    <p className="text-white/60 text-lg leading-relaxed line-clamp-2 max-w-sm transition-all duration-500 group-hover:text-white/90 transform translate-y-4 group-hover:translate-y-0 group-hover:opacity-100">
                      {category.description}
                    </p>

                    <div className="mt-8 pt-8 border-t border-white/10 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-200">
                      <span className="text-white text-xs font-bold uppercase tracking-[0.2em]">
                        Explore Collection
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-32 bg-muted/30 rounded-[3rem] border-2 border-dashed border-primary/10 backdrop-blur-sm">
              <div className="text-muted-foreground text-2xl font-black tracking-tight mb-4">
                Awaiting our premium additions...
              </div>
              <p className="text-muted-foreground/60 text-lg max-w-md mx-auto">
                We're currently updating our exclusive collections. Please
                return soon.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
