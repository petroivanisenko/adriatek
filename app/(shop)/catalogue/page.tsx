import { getFilteredProducts, getMinMaxPrices } from "@/actions/product";
import CatalogueClient from "@/components/shop/catalogue/CatalogueClient";
import { getCategories } from "@/actions/category";
import { Metadata } from "next";

export default async function CatalogPage() {
  const [products, categories, priceRange] = await Promise.all([
    getFilteredProducts(),
    getCategories(),
    getMinMaxPrices(),
  ]);

  return (
    <CatalogueClient
      initialProducts={products || []}
      categories={categories || []}
      minPrice={priceRange.min}
      maxPrice={priceRange.max}
    />
  );
}

export const metadata: Metadata = {
  title: "Electronics Catalogue - ZoltanTech LTD",
  description:
    "Browse premium electronics for home and office. Computers, laptops, gaming equipment, TVs, appliances, and more from €1,000 to €7,000.",
};
