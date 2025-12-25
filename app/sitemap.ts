import { MetadataRoute } from "next";
import { getProducts } from "@/actions/product";
import { getCategories } from "@/actions/category";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://adriatek-limited.com";

  // 1. Static Routes
  const staticRoutes = [
    "",
    "/catalogue",
    "/about",
    "/delivery",
    "/contacts",
    "/privacy",
    "/cookies",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // 2. Dynamic Product Routes
  const productsData = await getProducts();
  // Handle the return type of getProducts which can be an array or an object with { products, total }
  const products = Array.isArray(productsData)
    ? productsData
    : productsData?.products || [];

  const productRoutes = products.map((product) => ({
    url: `${baseUrl}/product/${product.id}`,
    lastModified: new Date(product.updatedAt),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // 3. Dynamic Category Routes
  const categories = (await getCategories()) || [];
  const categoryRoutes = categories.map((category) => ({
    url: `${baseUrl}/catalogue/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...categoryRoutes, ...productRoutes];
}
