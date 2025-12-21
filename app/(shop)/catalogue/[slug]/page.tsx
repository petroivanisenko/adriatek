import CatalogueClient from "@/components/shop/catalogue/CatalogueClient";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import prisma from "@/lib/prisma";
import { getCategories } from "@/actions/category";
import { getFilteredProducts, getMinMaxPrices } from "@/actions/product";

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string }>;
}) {
  const { slug } = await params;
  const { page: pageParam } = await searchParams;
  const page = parseInt(pageParam || "1", 10);
  const limit = 9;

  const category = await prisma.category.findFirst({
    where: { slug },
  });

  if (!category) notFound();

  const [productsData, categories, priceRange] = await Promise.all([
    getFilteredProducts({ categoryIds: [category.id], page, limit }),
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
      title={`${category.name} - ZoltanTech LTD`}
      currentCategory={category.id}
      minPrice={priceRange.min}
      maxPrice={priceRange.max}
    />
  );
}

export async function generateStaticParams() {
  const categories = await getCategories();
  return (categories || []).map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params).slug;
  const category = await prisma.category.findFirst({
    where: { slug },
  });

  if (!category)
    return {
      title: "Category Not Found",
      description: "The requested category was not found.",
    };

  return {
    title: `${category.name} - ZoltanTech LTD`,
    description: `Browse our premium ${category.name} collection. High-end electronics for home and office from ZoltanTech LTD.`,
  };
}
