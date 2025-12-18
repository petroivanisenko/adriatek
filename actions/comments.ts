"use server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { Comment } from "@/generated/prisma";

export async function createComment({
  name,
  email,
  content,
  productId,
  recommended,
}: {
  name: string;
  email: string;
  content: string;
  productId: number;
  recommended: boolean;
}): Promise<Comment | null> {
  try {
    const comment = await prisma.comment.create({
      data: {
        name,
        email,
        content,
        productId,
        recommended,
      },
    });

    revalidatePath(`/product/${productId}`);
    revalidatePath("/comments");

    return comment;
  } catch (error) {
    console.error("Failed to create comment:", error);
    throw new Error("Failed to create comment");
  }
}

export async function getComments(
  productId: number,
): Promise<Comment[] | null> {
  try {
    const comments = await prisma.comment.findMany({
      where: { productId },
      orderBy: { createdAt: "desc" },
    });

    return comments;
  } catch (error) {
    console.error("Failed to get comments:", error);
    throw new Error("Failed to get comments");
  }
}

export async function getAllComments(): Promise<Comment[] | null> {
  try {
    const comments = await prisma.comment.findMany({
      orderBy: { createdAt: "desc" },
    });
    return comments;
  } catch (error) {
    console.error("Failed to get all comments:", error);
    throw new Error("Failed to get all comments");
  }
}

export async function deleteComment({
  id,
}: {
  id: string;
}): Promise<Comment | null> {
  try {
    const comment = await prisma.comment.delete({
      where: {
        id,
      },
    });

    revalidatePath(`/product/${comment?.productId}`);

    return comment;
  } catch (error) {
    console.error("Failed to delete comment:", error);
    throw new Error("Failed to delete comment");
  }
}
