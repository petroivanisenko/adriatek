"use server";

import { stripe } from "@/lib/stripe";
import { prisma } from "@/lib/prisma";

type CheckoutParams = {
  orderId: number;
  items: {
    name: string;
    price: number;
    quantity: number;
  }[];
  customerEmail: string;
};

export async function createCheckoutSession(data: CheckoutParams) {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: data.items.map((item) => ({
        price_data: {
          currency: "eur",
          product_data: {
            name: item.name,
          },
          unit_amount: item.price * 100, // Stripe expects amounts in cents
        },
        quantity: item.quantity,
      })),
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/checkout/cancel`,
      customer_email: data.customerEmail,
      metadata: {
        orderId: data.orderId.toString(),
      },
    });

    // Update order with session ID
    await prisma.order.update({
      where: { id: data.orderId },
      data: { stripeSessionId: session.id },
    });

    return { url: session.url };
  } catch (error) {
    console.error("Stripe Session Error:", error);
    throw new Error("Failed to create checkout session");
  }
}
