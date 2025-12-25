import { getProducts } from "@/actions/product";
import { getCategories } from "@/actions/category";
import { CategoryFilter } from "@/components/admin/CategoryFilter";
import { ProductFormModal } from "@/components/shared/ProductFormModal";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { resolvePublicImageUrl } from "@/lib/images";

import { DeleteProductButton } from "@/components/shared/DeleteProductButton";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type SortField = "id" | "image" | "name" | "category" | "price" | "status";

import { ProductsTable } from "@/components/admin/ProductsTable";

export default async function AdminProductsPage({
  searchParams,
}: {
  searchParams: Promise<{
    page?: string;
    sortBy?: string;
    sortOrder?: string;
    categoryId?: string;
  }>;
}) {
  const params = await searchParams;
  const limit = 10;

  const validSortFields: SortField[] = [
    "id",
    "image",
    "name",
    "category",
    "price",
    "status",
  ];
  const sortByParam = params.sortBy;
  const sortOrderParam = params.sortOrder;
  const sortBy = validSortFields.includes(sortByParam as SortField)
    ? (sortByParam as SortField)
    : "id";
  const sortOrder = sortOrderParam === "desc" ? "desc" : "asc" as "asc" | "desc";

  const page = parseInt(params.page || "1", 10);
  const categoryIdParam = params.categoryId;
  const categoryId =
    categoryIdParam && categoryIdParam !== "all"
      ? parseInt(categoryIdParam)
      : undefined;

  const [data, categories] = await Promise.all([
    getProducts(page, limit, categoryId),
    getCategories(),
  ]);

  const products = data && "products" in data ? (data as any).products : [];
  const total = data && "total" in data ? (data as any).total : 0;
  const totalPages = Math.ceil(total / limit);

  const getSortValue = (product: any, field: SortField) => {
    switch (field) {
      case "id":
        return product.id ?? 0;
      case "image":
        return product.image ?? "";
      case "name":
        return product.name ?? "";
      case "category":
        return product.category?.name ?? "";
      case "price":
        return product.price ?? 0;
      case "status":
        return product.inStock ? "In Stock" : "Out of Stock";
      default:
        return product.id ?? 0;
    }
  };

  const sortedProducts = [...products].sort((a, b) => {
    const valueA = getSortValue(a, sortBy);
    const valueB = getSortValue(b, sortBy);

    if (typeof valueA === "number" && typeof valueB === "number") {
      return sortOrder === "asc" ? valueA - valueB : valueB - valueA;
    }

    return sortOrder === "asc"
      ? String(valueA).localeCompare(String(valueB))
      : String(valueB).localeCompare(String(valueA));
  });

  const createPageLink = (targetPage: number) => {
    const search = new URLSearchParams({
      page: targetPage.toString(),
      sortBy,
      sortOrder,
    });
    if (categoryIdParam) search.set("categoryId", categoryIdParam);
    return `?${search.toString()}`;
  };

  return (
    <div className="container mx-auto py-10 px-8 lg:px-12 max-w-7xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-black tracking-tighter uppercase mb-2">Inventory Control</h1>
          <div className="flex items-center gap-2 text-accent-foreground font-bold uppercase tracking-widest text-[10px] opacity-60">
            <span className="w-8 h-px bg-primary/30" />
            <span>Active SKU count: {total}</span>
          </div>
        </div>
        <div className="flex items-center gap-4 w-full md:w-auto">
          <CategoryFilter categories={categories || []} />
          <ProductFormModal />
        </div>
      </div>

      <ProductsTable
        products={sortedProducts}
        sortBy={sortBy}
        sortOrder={sortOrder}
        categoryId={categoryIdParam}
      />

      {totalPages > 1 && (
        <div className="mt-8">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href={createPageLink(page > 1 ? page - 1 : 1)}
                  aria-disabled={page <= 1}
                  className={page <= 1 ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>

              {Array.from({ length: totalPages }).map((_, i) => {
                const p = i + 1;
                if (
                  p === 1 ||
                  p === totalPages ||
                  (p >= page - 1 && p <= page + 1)
                ) {
                  return (
                    <PaginationItem key={p}>
                      <PaginationLink
                        href={createPageLink(p)}
                        isActive={p === page}
                      >
                        {p}
                      </PaginationLink>
                    </PaginationItem>
                  );
                }
                if (p === page - 2 || p === page + 2) {
                  return (
                    <PaginationItem key={p}>
                      <span className="px-4">...</span>
                    </PaginationItem>
                  );
                }
                return null;
              })}

              <PaginationItem>
                <PaginationNext
                  href={createPageLink(
                    page < totalPages ? page + 1 : totalPages,
                  )}
                  aria-disabled={page >= totalPages}
                  className={
                    page >= totalPages ? "pointer-events-none opacity-50" : ""
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
}
