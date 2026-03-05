"use client";

import {
  useCallback,
  useEffect,
  useState,
  useTransition,
  Fragment,
} from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { SlidersHorizontalIcon, SearchCheckIcon, FilterX } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ProductCard from "@/components/ProductCard";
import { Category, Product } from "@/generated/prisma";
import { getFilteredProducts } from "@/actions/product";
import { useDebounceValue } from "usehooks-ts";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FilterState } from "@/types";
import SortSelector from "@/components/SortSelector";
import LoadingIndicator from "@/components/LoadingIndicator";
import PaginationControl from "@/components/PaginationControl";
import EmptyState from "@/components/EmptyState";
import { FilterPanel } from "./filters/Filters";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";
import { TechnicalBriefCard } from "./BuyingGuides";
import BuyingGuides from "./BuyingGuides";
import { SetBreadcrumbs } from "@/components/SetBreadcrumbs";

interface CatalogueClientProps {
  initialProducts: Product[];
  initialTotal?: number;
  categories: Category[];
  title?: string;
  currentCategory?: number;
  minPrice: number;
  maxPrice: number;
}

const PRODUCTS_PER_PAGE = 9;

export default function CatalogueClient({
  initialProducts,
  initialTotal,
  categories,
  title = "Catalogue",
  currentCategory,
  minPrice,
  maxPrice,
}: CatalogueClientProps) {
  const [isPending, startTransition] = useTransition();
  const [showFilters, setShowFilters] = useState(true);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // ---------------------------------------------------------------------------
  // Derive all filter state from URL params — this is the single source of truth
  // ---------------------------------------------------------------------------
  const currentPage = parseInt(searchParams.get("page") || "1", 10);

  const sortByParam = (searchParams.get("sortBy") ||
    "popular") as FilterState["sortBy"];

  const categoryIdsParam = searchParams
    .getAll("categoryIds")
    .map(Number)
    .filter(Boolean);

  const minPriceParam = searchParams.get("minPrice")
    ? Number(searchParams.get("minPrice"))
    : minPrice;
  const maxPriceParam = searchParams.get("maxPrice")
    ? Number(searchParams.get("maxPrice"))
    : maxPrice;

  // Local state only for the price range slider (debounced to avoid too many requests)
  const [localPriceRange, setLocalPriceRange] = useState<[number, number]>([
    minPriceParam,
    maxPriceParam,
  ]);
  const [debouncedPriceRange] = useDebounceValue(localPriceRange, 500);

  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [totalProducts, setTotalProducts] = useState(
    initialTotal ?? initialProducts.length,
  );
  const totalPages = Math.ceil(totalProducts / PRODUCTS_PER_PAGE);

  // ---------------------------------------------------------------------------
  // URL builder — keeps all filter params in the URL
  // ---------------------------------------------------------------------------
  const buildURL = useCallback(
    (overrides: {
      page?: number;
      sortBy?: string;
      categoryIds?: number[];
      minPrice?: number;
      maxPrice?: number;
    }) => {
      const params = new URLSearchParams();

      const page = overrides.page ?? currentPage;
      const sort = overrides.sortBy ?? sortByParam;
      const cats =
        overrides.categoryIds !== undefined
          ? overrides.categoryIds
          : categoryIdsParam;
      const min =
        overrides.minPrice !== undefined ? overrides.minPrice : minPriceParam;
      const max =
        overrides.maxPrice !== undefined ? overrides.maxPrice : maxPriceParam;

      if (page > 1) params.set("page", String(page));
      if (sort !== "popular") params.set("sortBy", sort);
      cats.forEach((id) => params.append("categoryIds", String(id)));
      if (min !== minPrice) params.set("minPrice", String(min));
      if (max !== maxPrice) params.set("maxPrice", String(max));

      const qs = params.toString();
      return `${pathname}${qs ? `?${qs}` : ""}`;
    },
    [
      pathname,
      currentPage,
      sortByParam,
      categoryIdsParam,
      minPriceParam,
      maxPriceParam,
      minPrice,
      maxPrice,
    ],
  );

  const createPageURL = useCallback(
    (pageNumber: number | string) => buildURL({ page: Number(pageNumber) }),
    [buildURL],
  );

  // ---------------------------------------------------------------------------
  // Fetch products whenever URL-derived filter values change
  // ---------------------------------------------------------------------------
  const fetchProducts = useCallback(() => {
    startTransition(async () => {
      const result = await getFilteredProducts({
        categoryIds: categoryIdsParam,
        minPrice: debouncedPriceRange[0],
        maxPrice: debouncedPriceRange[1],
        sortBy: sortByParam,
        page: currentPage,
        limit: PRODUCTS_PER_PAGE,
      });

      if (result && "products" in result) {
        setProducts(result.products);
        setTotalProducts(result.total);
      } else if (Array.isArray(result)) {
        setProducts(result);
        setTotalProducts(result.length);
      }
    });
  }, [
    // eslint-disable-next-line react-hooks/exhaustive-deps
    JSON.stringify(categoryIdsParam),
    debouncedPriceRange,
    sortByParam,
    currentPage,
  ]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // ---------------------------------------------------------------------------
  // Filter change handlers — update the URL which triggers a re-fetch
  // ---------------------------------------------------------------------------
  const handleSortChange = useCallback(
    (sortBy: FilterState["sortBy"]) => {
      router.push(buildURL({ sortBy, page: 1 }), { scroll: false });
    },
    [router, buildURL],
  );

  const handleCategoryChange = useCallback(
    (categoryIds: number[]) => {
      router.push(buildURL({ categoryIds, page: 1 }), { scroll: false });
    },
    [router, buildURL],
  );

  const handlePriceChange = useCallback((range: [number, number]) => {
    setLocalPriceRange(range);
  }, []);

  // When debounced price settles, push to URL
  useEffect(() => {
    router.push(
      buildURL({
        minPrice: debouncedPriceRange[0],
        maxPrice: debouncedPriceRange[1],
        page: 1,
      }),
      { scroll: false },
    );
    // We only want this to run when the debounced price changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedPriceRange]);

  const handleFilterChange = useCallback(
    (updates: Partial<FilterState>, _resetPage = true) => {
      if (updates.sortBy !== undefined) handleSortChange(updates.sortBy);
      if (updates.categoryIds !== undefined)
        handleCategoryChange(updates.categoryIds);
      if (updates.priceRange !== undefined)
        handlePriceChange(updates.priceRange as [number, number]);
    },
    [handleSortChange, handleCategoryChange, handlePriceChange],
  );

  const resetFilters = useCallback(() => {
    setLocalPriceRange([minPrice, maxPrice]);
    router.push(pathname, { scroll: false });
  }, [minPrice, maxPrice, router, pathname]);

  // Derived filterState object (for passing to FilterPanel / SortSelector)
  const filterState: FilterState = {
    categoryIds: categoryIdsParam,
    occasionIds: [],
    priceRange: localPriceRange,
    sortBy: sortByParam,
  };

  return (
    <div className="bg-background min-h-screen">
      <SetBreadcrumbs items={[{ label: "Catalogue", href: "/catalogue" }]} />
      {/* Immersive Editorial Header */}
      <div className="relative pt-32 pb-24 md:pt-48 md:pb-32 bg-slate-950 dark:bg-card overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-background/50 to-transparent pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white dark:text-foreground tracking-tighter mb-8 leading-[0.85] capitalize">
              {title}
            </h1>
            <p className="text-white/60 dark:text-muted-foreground text-xl md:text-2xl font-medium leading-relaxed max-w-2xl border-l-2 border-primary/30 pl-8">
              Technical excellence meets refined sourcing. Explore our
              collection of {totalProducts} professional-grade components.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-10 mb-24 relative z-20">
        <div className="flex flex-col xl:flex-row gap-8 md:gap-12">
          {/* Sticky Technical Controls */}
          <aside className="xl:w-80 shrink-0">
            <div className="sticky top-24 space-y-6">
              <div className="p-6 rounded-3xl bg-background border border-primary/10 shadow-xl shadow-primary/5">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-primary/5">
                  <h2 className="font-black uppercase tracking-widest text-sm flex items-center gap-2">
                    <SlidersHorizontalIcon className="size-4 text-primary" />
                    Specs Filter
                  </h2>
                  <Badge
                    variant="secondary"
                    className="bg-primary/5 text-primary border-none font-bold"
                  >
                    {totalProducts}
                  </Badge>
                </div>

                <FilterPanel
                  filterState={filterState}
                  categories={categories}
                  minPrice={minPrice}
                  maxPrice={maxPrice}
                  onFilterChange={handleFilterChange}
                  onReset={resetFilters}
                  isPending={isPending}
                />

                <div className="mt-8 pt-8 border-t border-primary/5 space-y-4">
                  <SortSelector
                    value={filterState.sortBy}
                    onChange={handleSortChange}
                  />

                  <Button
                    variant="outline"
                    className="w-full h-12 rounded-xl lg:hidden"
                    onClick={() => setShowFilters(false)}
                  >
                    Apply Filters
                  </Button>
                </div>
              </div>
            </div>
          </aside>

          {/* Product discovery flow */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              {isPending ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-20"
                >
                  <LoadingIndicator />
                </motion.div>
              ) : products && products.length > 0 ? (
                <motion.div
                  key="products"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-12"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {products.map((product, idx) => (
                      <Fragment key={product.id}>
                        <ProductCard product={product} />
                        {(idx + 1) % 3 === 0 && idx !== products.length - 1 && (
                          <TechnicalBriefCard index={Math.floor(idx / 3)} />
                        )}
                      </Fragment>
                    ))}
                  </div>

                  {totalPages > 1 && (
                    <div className="flex justify-center pt-12">
                      <PaginationControl
                        currentPage={currentPage}
                        totalPages={totalPages}
                        createPageURL={createPageURL}
                      />
                    </div>
                  )}
                </motion.div>
              ) : (
                <EmptyState />
              )}
            </AnimatePresence>
          </div>
        </div>

        <BuyingGuides />
      </div>
    </div>
  );
}
