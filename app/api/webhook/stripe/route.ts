import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { stripe } from "@/lib/stripe";
import { prisma } from "@/lib/prisma";
import { sendOrderEmails } from "@/actions/place-order";

export async function POST(req: Request) {
  const body = await req.text();
  const signature = (await headers()).get("Stripe-Signature") as string;

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (error: any) {
    return new NextResponse(`Webhook Error: ${error.message}`, { status: 400 });
  }

  const session = event.data.object as any;

  if (event.type === "checkout.session.completed") {
    const orderId = session.metadata?.orderId;

    if (!orderId) {
      return new NextResponse("Order ID missing", { status: 400 });
    }

    // 1. Update order status in DB
    const order = await prisma.order.update({
      where: { id: parseInt(orderId) },
      data: { status: "PAID" },
      include: {
        items: {
          include: {
            product: true
          }
        }
      }
    });

    // 2. Send Emails
    await sendOrderEmails(order);
  }

  return new NextResponse(null, { status: 200 });
}
