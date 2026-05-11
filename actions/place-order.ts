"use server";

import nodemailer from "nodemailer";
import { prisma } from "@/lib/prisma";
import { createCheckoutSession } from "./stripe";

type OrderItem = {
  product: {
    id: number;
    name: string;
    price: number;
  };
  quantity: number;
};

type PlaceOrderParams = {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  address: string;
  postalCode: string;
  additionalInfo?: string;
  items: OrderItem[];
  totalAmount: number;
};

export async function sendOrderEmails(order: any) {
  // Check if SMTP is configured
  if (!process.env.SMTP_HOST) {
    console.log("SMTP not configured. Simulating email sending.");
    return;
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const orderId = `ORD-${order.id}`;

  const invoiceHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto;">
      <h1>New Order Received: ${orderId}</h1>
      <h2>Customer Details</h2>
      <p><strong>Name:</strong> ${order.customerName}</p>
      <p><strong>Email:</strong> ${order.customerEmail}</p>
      <p><strong>Phone:</strong> ${order.customerPhone}</p>
      <p><strong>Address:</strong> ${order.address}, ${order.city}, ${order.postalCode}, ${order.country}</p>

      <h2>Order Items</h2>
      <table style="width: 100%; border-collapse: collapse;">
        <thead>
          <tr style="background-color: #f2f2f2;">
            <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">Product</th>
            <th style="padding: 10px; text-align: right; border: 1px solid #ddd;">Quantity</th>
            <th style="padding: 10px; text-align: right; border: 1px solid #ddd;">Price</th>
            <th style="padding: 10px; text-align: right; border: 1px solid #ddd;">Total</th>
          </tr>
        </thead>
        <tbody>
          ${order.items
            .map(
              (item: any) => `
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd;">${item.product.name}</td>
              <td style="padding: 10px; text-align: right; border: 1px solid #ddd;">${item.quantity}</td>
              <td style="padding: 10px; text-align: right; border: 1px solid #ddd;">€${item.price}</td>
              <td style="padding: 10px; text-align: right; border: 1px solid #ddd;">€${item.price * item.quantity}</td>
            </tr>
          `,
            )
            .join("")}
        </tbody>
        <tfoot>
          <tr>
            <td colspan="3" style="padding: 10px; text-align: right; font-weight: bold;">Total:</td>
            <td style="padding: 10px; text-align: right; font-weight: bold;">€${order.totalAmount}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  `;

  const customerHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="text-align: center; margin-bottom: 20px;">
        <h1 style="color: #333;">Adriatek Limited</h1>
      </div>
      <p>Dear ${order.customerName},</p>
      <p>Thank you for your order!</p>
      <p>We have received your payment and your order is being processed.</p>
      <h3>Order Summary (${orderId})</h3>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
        <thead>
          <tr style="border-bottom: 1px solid #eee;">
            <th style="padding: 10px; text-align: left;">Product</th>
            <th style="padding: 10px; text-align: right;">Qty</th>
            <th style="padding: 10px; text-align: right;">Price</th>
          </tr>
        </thead>
        <tbody>
          ${order.items
            .map(
              (item: any) => `
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px;">${item.product.name}</td>
              <td style="padding: 10px; text-align: right;">${item.quantity}</td>
              <td style="padding: 10px; text-align: right;">€${item.price}</td>
            </tr>
          `,
            )
            .join("")}
        </tbody>
      </table>
      <p style="text-align: right; font-size: 18px; font-weight: bold;">Total Amount: €${order.totalAmount}</p>
    </div>
  `;

  await transporter.sendMail({
    from: '"Adriatek Store" <noreply@adriatek-limited.com>',
    to: "support@adriatek-limited.com",
    subject: `New PAID Order #${orderId}`,
    html: invoiceHtml,
  });

  await transporter.sendMail({
    from: '"Adriatek Limited" <support@adriatek-limited.com>',
    to: order.customerEmail,
    subject: "Order Confirmation - Adriatek Limited",
    html: customerHtml,
  });
}

export async function placeOrder(data: PlaceOrderParams) {
  try {
    // 1. Save order to database
    const order = await prisma.order.create({
      data: {
        customerName: data.fullName,
        customerEmail: data.email,
        customerPhone: data.phone,
        address: data.address,
        city: data.city,
        country: data.country,
        postalCode: data.postalCode,
        totalAmount: data.totalAmount,
        status: "PENDING",
        items: {
          create: data.items.map((item) => ({
            productId: item.product.id,
            quantity: item.quantity,
            price: item.product.price,
          })),
        },
      },
    });

    // 2. Create Stripe Checkout Session
    const checkout = await createCheckoutSession({
      orderId: order.id,
      customerEmail: data.email,
      items: data.items.map((item) => ({
        name: item.product.name,
        price: item.product.price,
        quantity: item.quantity,
      })),
    });

    return { success: true, url: checkout.url };
  } catch (error) {
    console.error("Error processing order:", error);
    return { success: false, error: "Failed to process order" };
  }
}
