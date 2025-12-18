"use server";

import { Order } from "@/generated/prisma";
import prisma from "@/lib/prisma";
import { CartItem } from "@/types";
type CreateOrderParams = {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  deliveryArea: string;
  deliveryAddress: string;
  deliveryDate: string;
  deliveryTime: string;
  paymentMethod: string;
  paymentIntentId?: string;
  comment?: string;
  totalAmount: number;
  items: CartItem[];
};

export async function createOrder(
  data: CreateOrderParams,
): Promise<{ success: boolean; orderId?: number; error?: string }> {
  try {
    // Create order with items
    const order = await prisma.order.create({
      data: {
        customerEmail: data.customerEmail,
        totalAmount: data.totalAmount,
        items: {
          create: data.items.map((item) => ({
            productId: item.productId,
            quantity: item.quantity,
            price: item.product.price,
          })),
        },
      },
    });

    return { success: true, orderId: order.id };
  } catch (error) {
    console.error("Error creating order:", error);
    return { success: false, error: "Failed to create order" };
  }
}

export async function getOrderById(id: number): Promise<Order | null> {
  return prisma.order.findUnique({
    where: { id },
    include: {
      items: {
        include: {
          product: true,
        },
      },
    },
  });
}

export async function getAllOrders(): Promise<Order[] | null> {
  return prisma.order.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      items: {
        include: {
          product: true,
        },
      },
    },
  });
}
