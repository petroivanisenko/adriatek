import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { SetBreadcrumbs } from "@/components/SetBreadcrumbs";
import { Metadata } from "next";

const breadcrumbItems = [{ label: "Delivery & Payment", href: "/delivery" }];
import { deliveryOptions, deliveryZones, importantInfo } from "@/constants";
import { AlertCircle, CheckCircle2, Package, Truck } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function DeliveryPaymentPage() {
  return (
    <div className="container mx-auto pb-4 sm:pb-6 md:pb-8 px-4 sm:px-6 md:px-8">
      <SetBreadcrumbs items={breadcrumbItems} />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8">
          Delivery & Payment Information
        </h1>

        {/* Payment Section */}
        <section className="mb-12">
          <h2 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-2">
            <Package className="h-6 w-6 text-primary" />
            Payment Methods
          </h2>

          <Alert className="mb-6 border-primary">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Important Payment Information</AlertTitle>
            <AlertDescription>
              We accept ONLY SEPA bank transfers. Full prepayment is required
              before order processing. Cash and card payments are strictly
              prohibited.
            </AlertDescription>
          </Alert>

          <Card className="mb-6 sm:mb-8">
            <CardHeader>
              <CardTitle>SEPA Bank Transfer (Only Accepted Method)</CardTitle>
              <CardDescription>Last updated: January 15, 2025</CardDescription>
            </CardHeader>
            <CardContent className="prose prose-sm sm:prose max-w-none">
              <p>
                <strong>ZoltanTech LTD</strong> accepts exclusively SEPA (Single
                Euro Payments Area) bank transfers for all transactions. This
                ensures maximum security, traceability, and compliance with
                European banking regulations.
              </p>

              <h3>Why SEPA Bank Transfer Only?</h3>
              <ul>
                <li>
                  <strong>Security:</strong> Fully traceable through European
                  banking systems
                </li>
                <li>
                  <strong>Documentation:</strong> Complete transaction records
                  for business and tax purposes
                </li>
                <li>
                  <strong>Compliance:</strong> Meets EU and UK financial
                  regulations
                </li>
                <li>
                  <strong>Protection:</strong> Both buyer and seller are
                  protected by banking institutions
                </li>
              </ul>

              <h3>Payment Process</h3>
              <ol>
                <li>Place your order through our website shopping cart</li>
                <li>Receive an invoice with our bank details via email</li>
                <li>
                  Make the full payment via SEPA bank transfer within 5 business
                  days
                </li>
                <li>Send payment confirmation to info@zoltantech-ltd.com</li>
                <li>
                  Order processing begins after payment verification (1-2
                  business days)
                </li>
                <li>Delivery is arranged with the supplier within 30 days</li>
              </ol>

              <h3>Payment Terms</h3>
              <ul>
                <li>
                  <strong>Full Prepayment Required:</strong> 100% payment before
                  order processing
                </li>
                <li>
                  <strong>Currency:</strong> EUR (Euros)
                </li>
                <li>
                  <strong>Payment Deadline:</strong> Within 5 business days of
                  invoice receipt
                </li>
                <li>
                  <strong>Bank Transfer Fees:</strong> Customer is responsible
                  for any bank transfer fees
                </li>
              </ul>

              <Alert className="my-4 border-destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Prohibited Payment Methods</AlertTitle>
                <AlertDescription>
                  <ul className="mt-2 space-y-1">
                    <li>❌ Cash payments - NOT ACCEPTED</li>
                    <li>❌ Credit/Debit card payments - NOT ACCEPTED</li>
                    <li>❌ PayPal or other e-wallets - NOT ACCEPTED</li>
                    <li>❌ Cryptocurrency - NOT ACCEPTED</li>
                    <li>❌ Cash on delivery - NOT ACCEPTED</li>
                  </ul>
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          <Card className="mb-6 sm:mb-8">
            <CardHeader>
              <CardTitle>Invoice and Documentation</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm sm:prose max-w-none">
              <p>After placing your order:</p>
              <ul>
                <li>
                  Our manager will contact you to confirm the order and provide
                  the invoice
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Delivery Section */}
        <section className="mb-12">
          <h2 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-2">
            <Truck className="h-6 w-6 text-primary" />
            Delivery Information
          </h2>

          <Card className="mb-6 sm:mb-8">
            <CardHeader>
              <CardTitle>Delivery Process</CardTitle>
              <CardDescription>Last updated: January 15, 2025</CardDescription>
            </CardHeader>
            <CardContent className="prose prose-sm sm:prose max-w-none">
              <p>
                <strong>ZoltanTech LTD</strong> works directly with authorized
                suppliers to deliver premium electronics across Europe. Our
                delivery process ensures product authenticity and proper
                handling.
              </p>

              <h3>Delivery Timeline</h3>
              <ul>
                <li>
                  <strong>Standard Delivery:</strong> Within 30 days from order
                  confirmation
                </li>
                <li>
                  <strong>Order Confirmation:</strong> After payment
                  verification (1-2 business days)
                </li>
                <li>
                  <strong>Supplier Processing:</strong> 3-5 business days
                </li>
                <li>
                  <strong>Transit Time:</strong> 5-25 days depending on
                  destination
                </li>
              </ul>

              <Alert className="my-4">
                <CheckCircle2 className="h-4 w-4" />
                <AlertTitle>Supplier Direct Delivery</AlertTitle>
                <AlertDescription>
                  All products are delivered directly from authorized suppliers
                  to ensure authenticity, proper packaging, and full warranty
                  coverage.
                </AlertDescription>
              </Alert>

              <h3>What to Expect</h3>
              <ol>
                <li>
                  <strong>Payment Confirmation:</strong> You'll receive
                  confirmation once payment is verified
                </li>
                <li>
                  <strong>Order Processing:</strong> Supplier is notified and
                  begins processing
                </li>
                <li>
                  <strong>Delivery:</strong> Product arrives at your specified
                  address
                </li>
                <li>
                  <strong>Confirmation:</strong> Delivery confirmation email
                </li>
              </ol>
            </CardContent>
          </Card>

          <Card className="mb-6 sm:mb-8">
            <CardHeader>
              <CardTitle>Delivery Coverage</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm sm:prose max-w-none">
              <p>
                We deliver to all countries in geographical Europe, with some
                exceptions:
              </p>

              <h3>✅ Delivery Available To:</h3>
              <ul>
                <li>
                  <strong>European Union (EU):</strong> All 27 member states
                </li>
                <li>
                  <strong>European Free Trade Association (EFTA):</strong>{" "}
                  Iceland, Liechtenstein, Norway, Switzerland
                </li>
                <li>
                  <strong>United Kingdom:</strong> England, Scotland, Wales,
                  Northern Ireland
                </li>
                <li>
                  <strong>Other European Countries:</strong> Albania, Andorra, Monaco, Montenegro, San Marino, Serbia, Turkey, Vatican City
                </li>
              </ul>

              <h3>❌ Delivery NOT Available To:</h3>
              <ul>
                <li>Russia</li>
                <li>Belarus</li>
                <li>Ukraine</li>
                <li>And other countries under sanctions</li>
              </ul>

              <p className="text-sm text-muted-foreground">
                Delivery restrictions are subject to change based on current
                regulations and international situations.
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {deliveryOptions.map((option) => (
              <Card key={option.id}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <option.icon className="h-5 w-5 text-primary" />
                    {option.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{option.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Delivery Zones */}
        <section className="mb-12">
          <h2 className="text-xl sm:text-2xl font-bold mb-6">
            Delivery Zones & Costs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {deliveryZones.map((zone) => (
              <Card key={zone.id} className="relative">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <zone.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{zone.name}</CardTitle>
                  <CardDescription>{zone.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm">
                      <strong>Delivery Cost:</strong> {zone.price}
                    </p>
                    <p className="text-sm">
                      <strong>Delivery Time:</strong> {zone.time}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Delivery Costs</AlertTitle>
            <AlertDescription>
              Delivery costs are calculated individually based on order weight,
              dimensions, destination, and current supplier rates. Final
              delivery cost will be confirmed in your invoice.
            </AlertDescription>
          </Alert>
        </section>

        {/* Important Information */}
        <section className="mb-12">
          <h2 className="text-xl sm:text-2xl font-bold mb-6">
            Important Information
          </h2>
          <Card>
            <CardHeader>
              <CardTitle>Please Note</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {importantInfo.map((info, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{info}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Contact Section */}
        <section className="mb-8">
          <Card className="bg-muted">
            <CardHeader>
              <CardTitle>Need Help?</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm sm:prose max-w-none">
              <p>
                If you have questions about delivery, payment, or need
                assistance with your order, please contact us:
              </p>
              <ul>
                <li>
                  <strong>Email:</strong> info@zoltantech-ltd.com
                </li>
                <li>
                  <strong>Working Hours:</strong> Mon-Fri 9:00-18:00, Sat
                  10:00-17:00
                </li>
              </ul>
              <p>
                For more information, please also review our{" "}
                <Link href="/terms" className="text-primary hover:underline">
                  Terms & Conditions
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Delivery & Payment - ZoltanTech LTD",
  description:
    "Learn about our SEPA bank transfer payment method and delivery process. We deliver premium electronics across Europe within 30 days. Full prepayment required.",
};
