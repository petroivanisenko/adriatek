"use server";

import nodemailer from "nodemailer";

export async function sendContactEmail(
  _prevState: any,
  formData: FormData
): Promise<{ success: boolean; message: string }> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { success: false, message: "Please fill in all fields" };
  }

  try {
    // Check if SMTP is configured
    if (!process.env.SMTP_HOST) {
      console.log("SMTP not configured. Simulating contact email.");
      console.log("Contact Details:", { name, email, message });
      return {
        success: true,
        message: "Message sent successfully (Simulated)",
      };
    }

    // Create a transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email content
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-radius: 5px;">
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      </div>
    `;

    // Send email to "info@adriatek-limited.com"
    await transporter.sendMail({
      from: '"Adriatek Contact" <info@adriatek-limited.com>',
      to: "info@adriatek-limited.com",
      replyTo: email,
      subject: `New Contact Message from ${name}`,
      html: htmlContent,
    });

    return { success: true, message: "Message sent successfully" };
  } catch (error) {
    console.error("Error sending contact email:", error);
    return {
      success: false,
      message: "Failed to send message. Please try again.",
    };
  }
}
