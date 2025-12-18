"use server";

import { Category, Prisma, Product } from "@/generated/prisma";
import prisma from "@/lib/prisma";
import { uploadToS3 } from "@/lib/s3";
import { revalidatePath } from "next/cache";

export type ProductWithCategory = Product & {
  category: Category | null;
};

export type ProductFilterParams = {
  categoryIds?: number[];
  minPrice?: number;
  maxPrice?: number;
  sortBy?: "popular" | "price_asc" | "price_desc" | "new";
  searchQuery?: string;
};

export async function getFilteredProducts(
  filters: ProductFilterParams = {},
): Promise<ProductWithCategory[] | null> {
  const {
    categoryIds = [],
    minPrice,
    maxPrice,
    sortBy = "popular",
    searchQuery,
  } = filters;

  // Build the where clause
  const where: Prisma.ProductWhereInput = {};

  // Add price range filter
  if (minPrice !== undefined || maxPrice !== undefined) {
    where.price = {};
    if (minPrice !== undefined) where.price.gte = minPrice;
    if (maxPrice !== undefined) where.price.lte = maxPrice;
  }

  // Add category filter
  if (categoryIds.length > 0) where.categoryId = { in: categoryIds };

  // Add search query filter
  if (searchQuery) where.name = { contains: searchQuery, mode: "insensitive" };

  // Determine ordering
  let orderBy = {};
  switch (sortBy) {
    case "price_asc":
      orderBy = { price: "asc" };
      break;
    case "price_desc":
      orderBy = { price: "desc" };
      break;
    case "new":
      orderBy = { createdAt: "desc" };
      break;
    case "popular":
    default:
      orderBy = { rating: "desc" };
      break;
  }

  return prisma.product.findMany({
    where,
    orderBy,
    include: {
      category: true,
    },
  });
}

export async function getProducts(
  page?: number,
  limit?: number,
  categoryId?: number,
): Promise<
  | ProductWithCategory[]
  | { products: ProductWithCategory[]; total: number }
  | null
> {
  const where: Prisma.ProductWhereInput = {};
  if (categoryId) {
    where.categoryId = categoryId;
  }

  if (page && limit) {
    const skip = (page - 1) * limit;

    const [products, total] = await Promise.all([
      prisma.product.findMany({
        where,
        skip,
        take: limit,
        include: {
          category: true,
        },
        orderBy: {
          id: "desc",
        },
      }),
      prisma.product.count({ where }),
    ]);

    return { products, total };
  }

  return prisma.product.findMany({
    where,
    include: {
      category: true,
    },
    orderBy: {
      id: "desc",
    },
  });
}

export async function getPopularProducts() {
  return prisma.product.findMany({
    where: {
      rating: {
        gte: 4,
      },
    },
    take: 10,
  });
}

export async function getProduct(id: number): Promise<Product | null> {
  return prisma.product.findUnique({
    where: { id },
    include: {
      category: true,
    },
  });
}

export async function getSimilarProducts(
  categoryId: number,
): Promise<ProductWithCategory[] | null> {
  return prisma.product.findMany({
    where: {
      categoryId,
    },
    include: {
      category: true,
    },
    take: 4,
  });
}

export async function searchProducts(
  query: string,
): Promise<ProductWithCategory[] | null> {
  return prisma.product.findMany({
    where: {
      name: { contains: query, mode: "insensitive" },
    },
    include: {
      category: true,
    },
  });
}

export async function getMinMaxPrices(): Promise<{ min: number; max: number }> {
  const products = await prisma.product.findMany({
    select: {
      price: true,
    },
    orderBy: {
      price: "asc",
    },
  });

  if (products.length === 0) return { min: 0, max: 0 };

  return {
    min: products[0].price,
    max: products[products.length - 1].price,
  };
}

export async function getProductDetails(
  id: number,
): Promise<ProductWithCategory | null> {
  try {
    const product = await prisma.product.findUnique({
      where: { id },
      include: {
        category: true,
      },
    });
    return product;
  } catch (error) {
    console.error("Failed to get product details:", error);
    return null;
  }
}

export async function createProduct(formData: FormData) {
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const price = parseInt(formData.get("price") as string);
  const categoryId = parseInt(formData.get("categoryId") as string);
  const discount = parseInt(formData.get("discount") as string) || 0;
  const rating = parseFloat(formData.get("rating") as string) || 0;
  const inStock =
    formData.get("inStock") === "on" || formData.get("inStock") === "true";

  const imageFile = formData.get("image") as File | string;
  let imageUrl = "";

  if (imageFile instanceof File) {
    const buffer = Buffer.from(await imageFile.arrayBuffer());
    const fileName = `${Date.now()}-${imageFile.name}`;
    imageUrl = await uploadToS3(buffer, fileName, imageFile.type);
  } else if (typeof imageFile === "string") {
    if (imageFile.startsWith("http")) {
      const response = await fetch(imageFile);

      if (!response.ok) {
        throw new Error("Failed to fetch image from URL");
      }

      const contentType = response.headers.get("content-type") || "image/jpeg";

      if (!contentType.startsWith("image/")) {
        throw new Error("URL provided is not an image");
      }

      const arrayBuffer = await response.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const extension = contentType.split("/")[1].split(";")[0];
      const fileName = `${Date.now()}-imported.${extension}`;
      imageUrl = await uploadToS3(buffer, fileName, contentType);
    } else if (imageFile.startsWith("data:")) {
      const matches = imageFile.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
      if (matches && matches.length === 3) {
        const contentType = matches[1];
        const buffer = Buffer.from(matches[2], "base64");
        const fileName = `${Date.now()}-pasted.${contentType.split("/")[1]}`;
        imageUrl = await uploadToS3(buffer, fileName, contentType);
      }
    }
  }

  if (!imageUrl) {
    throw new Error("Image is required");
  }

  await prisma.product.create({
    data: {
      name,
      description,
      price,
      categoryId,
      image: imageUrl,
      inStock,
      discount,
      rating,
    },
  });

  revalidatePath("/");
  revalidatePath("/catalogue");
  revalidatePath("/admin/products");
}

export async function updateProduct(id: number, formData: FormData) {
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const price = parseInt(formData.get("price") as string);
  const categoryId = parseInt(formData.get("categoryId") as string);
  const discount = parseInt(formData.get("discount") as string) || 0;
  const rating = parseFloat(formData.get("rating") as string) || 0;
  const inStock =
    formData.get("inStock") === "on" || formData.get("inStock") === "true";

  const imageFile = formData.get("image") as File | string | null;
  let imageUrl: string | undefined = undefined;

  if (imageFile) {
    if (imageFile instanceof File) {
      const buffer = Buffer.from(await imageFile.arrayBuffer());
      const fileName = `${Date.now()}-${imageFile.name}`;
      imageUrl = await uploadToS3(buffer, fileName, imageFile.type);
    } else if (typeof imageFile === "string") {
      if (imageFile.startsWith("data:")) {
        const matches = imageFile.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
        if (matches && matches.length === 3) {
          const contentType = matches[1];
          const buffer = Buffer.from(matches[2], "base64");
          const fileName = `${Date.now()}-pasted.${contentType.split("/")[1]}`;
          imageUrl = await uploadToS3(buffer, fileName, contentType);
        }
      } else if (imageFile.startsWith("http")) {
        const existingProduct = await prisma.product.findUnique({
          where: { id },
          select: { image: true },
        });

        if (existingProduct?.image !== imageFile) {
          const response = await fetch(imageFile);

          if (!response.ok) {
            throw new Error("Failed to fetch image from URL");
          }

          const contentType =
            response.headers.get("content-type") || "image/jpeg";

          if (!contentType.startsWith("image/")) {
            throw new Error("URL provided is not an image");
          }

          const arrayBuffer = await response.arrayBuffer();
          const buffer = Buffer.from(arrayBuffer);
          const extension = contentType.split("/")[1].split(";")[0];
          const fileName = `${Date.now()}-imported.${extension}`;
          imageUrl = await uploadToS3(buffer, fileName, contentType);
        } else {
          imageUrl = imageFile;
        }
      }
    }
  }

  await prisma.product.update({
    where: { id },
    data: {
      name,
      description,
      price,
      categoryId,
      inStock,
      discount,
      rating,
      ...(imageUrl ? { image: imageUrl } : {}),
    },
  });

  revalidatePath("/");
  revalidatePath("/catalogue");
  revalidatePath("/admin/products");
}

export async function deleteProduct(id: number) {
  try {
    await prisma.product.delete({
      where: { id },
    });
    revalidatePath("/");
    revalidatePath("/catalogue");
    revalidatePath("/admin/products");
    return { success: true };
  } catch (error) {
    console.error("Error deleting product:", error);
    return { success: false, error: "Failed to delete product" };
  }
}
