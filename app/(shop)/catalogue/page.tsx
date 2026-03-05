import { getFilteredProducts, getMinMaxPrices } from "@/actions/product";
import CatalogueClient from "@/components/shop/catalogue/CatalogueClient";
import { getCategories } from "@/actions/category";
import { Metadata } from "next";

export default async function CatalogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page: pageParam } = await searchParams;
  const page = parseInt(pageParam || "1", 10);
  const limit = 9;

  const [productsData, categories, priceRange] = await Promise.all([
    getFilteredProducts({ page, limit }),
    getCategories(),
    getMinMaxPrices(),
  ]);

  const products =
    productsData && "products" in productsData
      ? productsData.products
      : Array.isArray(productsData)
        ? productsData
        : [];

  const total =
    productsData && "total" in productsData
      ? productsData.total
      : products.length;

  return (
    <CatalogueClient
      initialProducts={products}
      initialTotal={total}
      categories={categories || []}
      minPrice={priceRange.min}
      maxPrice={priceRange.max}
    />
  );
}

export const metadata: Metadata = {
  title: "Electronics Catalogue - Adriatek Limited",
  description:
    "Browse premium electronics for home and office. Quality computers, laptops, and gadgets from Adriatek Limited. European delivery and SEPA payments.",
};
