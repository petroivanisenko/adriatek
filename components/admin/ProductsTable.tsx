"use client";
import { useState, useTransition } from "react";
import { ProductWithCategory, deleteProducts, updateProductsStock } from "@/actions/product";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { resolvePublicImageUrl } from "@/lib/images";
import { ProductFormModal } from "@/components/shared/ProductFormModal";
import { DeleteProductButton } from "@/components/shared/DeleteProductButton";
import { Trash2, AlertCircle, Loader2, CheckCircle2, XCircle } from "lucide-react";
import { toast } from "sonner";

import { useSearchParams, usePathname } from "next/navigation";

interface ProductsTableProps {
  products: ProductWithCategory[];
  sortBy: string;
  sortOrder: "asc" | "desc";
  categoryId?: string;
}

export function ProductsTable({
  products,
  sortBy,
  sortOrder,
  categoryId,
}: ProductsTableProps) {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [isPending, startTransition] = useTransition();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const createSortLink = (field: string) => {
    const nextOrder = sortBy === field && sortOrder === "asc" ? "desc" : "asc";
    const params = new URLSearchParams(searchParams.toString());
    params.set("sortBy", field);
    params.set("sortOrder", nextOrder);
    params.set("page", "1");
    if (categoryId) {
       params.set("categoryId", categoryId);
    }
    return `${pathname}?${params.toString()}`;
  };

  const renderSortIndicator = (field: string) =>
    sortBy === field ? (
      <span className="text-xs ml-1">{sortOrder === "asc" ? "↑" : "↓"}</span>
    ) : null;

  const toggleSelectAll = () => {
    if (selectedIds.length === products.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(products.map((p) => p.id));
    }
  };

  const toggleSelect = (id: number) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  const handleBulkDelete = () => {
    if (selectedIds.length === 0) return;

    if (
      confirm(`Are you sure you want to delete ${selectedIds.length} products?`)
    ) {
      startTransition(async () => {
        const result = await deleteProducts(selectedIds);
        if (result.success) {
          toast.success(`Successfully deleted ${selectedIds.length} products`);
          setSelectedIds([]);
        } else {
          toast.error(result.error || "Failed to delete products");
        }
      });
    }
  };

  const handleBulkStockUpdate = (inStock: boolean) => {
    if (selectedIds.length === 0) return;

    startTransition(async () => {
      const result = await updateProductsStock(selectedIds, inStock);
      if (result.success) {
        toast.success(`Successfully updated ${selectedIds.length} products`);
        setSelectedIds([]);
      } else {
        toast.error(result.error || "Failed to update products");
      }
    });
  };

  return (
    <div className="space-y-4">
      {selectedIds.length > 0 && (
        <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg border border-primary/10 animate-in fade-in slide-in-from-top-2">
          <div className="flex items-center gap-3">
            <AlertCircle className="size-5 text-primary" />
            <span className="text-sm font-bold">
              {selectedIds.length} products selected
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleBulkStockUpdate(true)}
              disabled={isPending}
              className="h-10 px-4 rounded-xl font-bold border-primary/20 hover:bg-primary/5"
            >
              <CheckCircle2 className="size-4 mr-2 text-green-500" />
              Mark In Stock
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleBulkStockUpdate(false)}
              disabled={isPending}
              className="h-10 px-4 rounded-xl font-bold border-primary/20 hover:bg-primary/5"
            >
              <XCircle className="size-4 mr-2 text-red-500" />
              Mark Out of Stock
            </Button>
            <Separator orientation="vertical" className="h-6 mx-2" />
            <Button
              variant="destructive"
              size="sm"
              onClick={handleBulkDelete}
              disabled={isPending}
              className="h-10 px-6 rounded-xl font-bold shadow-lg shadow-destructive/20"
            >
              {isPending ? (
                <Loader2 className="size-4 animate-spin mr-2" />
              ) : (
                <Trash2 className="size-4 mr-2" />
              )}
              Delete
            </Button>
          </div>
        </div>
      )}

      <div className="border rounded-xl overflow-hidden bg-background">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/30">
              <TableHead className="w-[50px]">
                <Checkbox
                  checked={
                    products.length > 0 &&
                    selectedIds.length === products.length
                  }
                  onCheckedChange={toggleSelectAll}
                  aria-label="Select all"
                />
              </TableHead>
              <TableHead>
                <Link
                  href={createSortLink("id")}
                  className="flex items-center gap-1"
                >
                  <span>ID</span>
                  {renderSortIndicator("id")}
                </Link>
              </TableHead>
              <TableHead>
                <Link
                  href={createSortLink("image")}
                  className="flex items-center gap-1"
                >
                  <span>Image</span>
                  {renderSortIndicator("image")}
                </Link>
              </TableHead>
              <TableHead>
                <Link
                  href={createSortLink("name")}
                  className="flex items-center gap-1"
                >
                  <span>Name</span>
                  {renderSortIndicator("name")}
                </Link>
              </TableHead>
              <TableHead>
                <Link
                  href={createSortLink("category")}
                  className="flex items-center gap-1"
                >
                  <span>Category</span>
                  {renderSortIndicator("category")}
                </Link>
              </TableHead>
              <TableHead>
                <Link
                  href={createSortLink("price")}
                  className="flex items-center gap-1"
                >
                  <span>Price</span>
                  {renderSortIndicator("price")}
                </Link>
              </TableHead>
              <TableHead>
                <Link
                  href={createSortLink("status")}
                  className="flex items-center gap-1"
                >
                  <span>Status</span>
                  {renderSortIndicator("status")}
                </Link>
              </TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id} className="hover:bg-primary/5 transition-colors group">
                <TableCell>
                  <Checkbox
                    checked={selectedIds.includes(product.id)}
                    onCheckedChange={() => toggleSelect(product.id)}
                    aria-label={`Select ${product.name}`}
                  />
                </TableCell>
                <TableCell className="text-xs font-mono opacity-50">{product.id}</TableCell>
                <TableCell>
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-muted border border-primary/5">
                    <Image
                      src={resolvePublicImageUrl(product.image) ?? ""}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      unoptimized={(
                        resolvePublicImageUrl(product.image) ?? ""
                      ).includes("localhost")}
                    />
                  </div>
                </TableCell>
                <TableCell className="font-bold tracking-tight" title={product.name}>
                  {product.name.length > 40 ? product.name.substring(0, 40) + "..." : product.name}
                </TableCell>
                <TableCell>
                   <Badge variant="outline" className="bg-primary/5 text-primary border-primary/10">
                    {product.category?.name}
                   </Badge>
                </TableCell>
                <TableCell className="font-black">€{product.price.toLocaleString()}</TableCell>
                <TableCell>
                  <Badge variant={product.inStock ? "default" : "destructive"} className="rounded-lg uppercase text-[10px] font-black tracking-widest">
                    {product.inStock ? "In Stock" : "Out of Stock"}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ProductFormModal product={product} />
                    <DeleteProductButton productId={product.id} />
                  </div>
                </TableCell>
              </TableRow>
            ))}
            {products.length === 0 && (
              <TableRow>
                <TableCell colSpan={8} className="text-center py-20">
                  <div className="flex flex-col items-center gap-4 opacity-50">
                    <AlertCircle className="size-12" />
                    <p className="text-lg font-bold">No products found in this spectrum</p>
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
