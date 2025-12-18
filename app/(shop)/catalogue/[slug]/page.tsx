import CatalogueClient from "@/components/shop/catalogue/CatalogueClient";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import prisma from "@/lib/prisma";
import { getCategories } from "@/actions/category";
import { getFilteredProducts, getMinMaxPrices } from "@/actions/product";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = await prisma.category.findFirst({
    where: { slug },
  });

  if (!category) notFound();

  const [products, categories, priceRange] = await Promise.all([
    getFilteredProducts({ categoryIds: [category.id] }),
    getCategories(),
    getMinMaxPrices(),
  ]);

  return (
    <CatalogueClient
      initialProducts={products || []}
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
