import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { FileTextIcon } from "lucide-react";
import { SetBreadcrumbs } from "@/components/SetBreadcrumbs";
import { Metadata } from "next";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

const breadcrumbItems = [{ label: "Terms & Conditions", href: "/terms" }];

export default function TermsPage() {
  return (
    <div className="container mx-auto pb-4 sm:pb-6 md:pb-8 px-4 sm:px-6 md:px-8">
      <SetBreadcrumbs items={breadcrumbItems} />
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-4 sm:mb-6 md:mb-8">
          <FileTextIcon className="h-8 w-8 text-primary" />
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Terms & Conditions
          </h1>
        </div>

        <Card className="mb-6 sm:mb-8">
          <CardHeader>
            <CardTitle>1. General Provisions</CardTitle>
            <CardDescription>Last updated: January 15, 2025</CardDescription>
          </CardHeader>
          <CardContent className="prose prose-sm sm:prose max-w-none">
            <p>
              These Terms and Conditions (&quot;Terms&quot;) constitute a legal
              agreement between you (&quot;Customer&quot;, &quot;you&quot;, or
              &quot;your&quot;) and ZoltanTech LTD (&quot;Company&quot;,
              &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) governing your
              use of our website zoltantech-ltd.com (the &quot;Site&quot;) and
              the purchase of products.
            </p>
            <p>
              <strong>Company Details:</strong>
            </p>
            <ul>
              <li>Company Name: ZoltanTech LTD</li>
              <li>Company Number: 16887893</li>
              <li>
                Registered Address: 3rd Floor, 86-90, Paul Street, London,
                England, EC2A 4NE
              </li>
              <li>Email: info@zoltantech-ltd.com</li>
              <li>Working Hours: Mon-Fri 9:00-18:00, Sat 10:00-17:00</li>
            </ul>
            <p>
              By accessing our Site, browsing our catalogue, or placing an
              order, you acknowledge that you have read, understood, and agree
              to be bound by these Terms. If you do not agree to these Terms,
              please do not use our Site or services.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6 sm:mb-8">
          <CardHeader>
            <CardTitle>2. Products and Services</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm sm:prose max-w-none">
            <h3>2.1 Product Range</h3>
            <p>
              ZoltanTech LTD specializes in the distribution of premium
              electronics for home and office use. Our product range includes:
            </p>
            <ul>
              <li>Computers and peripherals</li>
              <li>Laptops and all-in-one computers</li>
              <li>Gaming gadgets and equipment</li>
              <li>Televisions</li>
              <li>Home appliances</li>
              <li>Smart gadgets</li>
              <li>E-scooters and e-bikes</li>
              <li>Acoustic systems</li>
              <li>Backup power supplies</li>
              <li>Office equipment</li>
            </ul>

            <h3>2.2 Product Information</h3>
            <p>
              We strive to provide accurate product descriptions,
              specifications, and images. However, we do not warrant that
              product descriptions or other content on the Site are accurate,
              complete, reliable, current, or error-free.
            </p>
            <p>
              Product images are for illustrative purposes only. Actual products
              may vary slightly in appearance from images displayed on the Site.
            </p>

            <h3>2.3 Product Availability</h3>
            <p>
              All products are subject to availability. We reserve the right to
              discontinue any product at any time without notice. In the event a
              product is unavailable after you have placed an order, we will
              notify you and offer a full refund.
            </p>

            <h3>2.4 Price Information</h3>
            <p>
              All prices are displayed in Euros (EUR) and include applicable
              taxes unless otherwise stated. Prices are subject to change
              without notice. The price applicable to your order will be the
              price displayed at the time you submit your order.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6 sm:mb-8">
          <CardHeader>
            <CardTitle>3. Ordering Process</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm sm:prose max-w-none">
            <h3>3.1 Placing an Order</h3>
            <p>To place an order, you must:</p>
            <ol>
              <li>Browse our catalogue and select products</li>
              <li>Add products to your shopping cart</li>
              <li>Review your cart and proceed to checkout</li>
              <li>Provide accurate delivery information</li>
              <li>Provide a valid email address for correspondence</li>
              <li>Review and accept these Terms & Conditions</li>
              <li>Submit your order</li>
            </ol>

            <h3>3.2 Order Confirmation</h3>
            <p>
              After submitting your order, you will receive an automatic order
              acknowledgment email. This does NOT constitute acceptance of your
              order.
            </p>
            <p>
              Order acceptance occurs when we send you a commercial invoice with
              payment instructions. We reserve the right to refuse any order at
              our discretion.
            </p>

            <h3>3.3 Order Cancellation by Customer</h3>
            <p>
              You may cancel your order before making payment by contacting us
              at info@zoltantech-ltd.com. Once payment is made and confirmed,
              orders cannot be cancelled unless the product is defective or as
              specified in Section 8 (Returns and Refunds).
            </p>

            <h3>3.4 Order Cancellation by Company</h3>
            <p>We reserve the right to cancel any order if:</p>
            <ul>
              <li>Products are unavailable</li>
              <li>Pricing errors occur</li>
              <li>Payment is not received within 5 business days</li>
              <li>We suspect fraudulent activity</li>
              <li>Delivery to your address is not possible</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6 sm:mb-8">
          <CardHeader>
            <CardTitle>4. Payment Terms</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm sm:prose max-w-none">
            <Alert className="mb-4 border-primary">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Critical Payment Information</AlertTitle>
              <AlertDescription>
                ONLY SEPA bank transfer payments are accepted. Full prepayment
                is MANDATORY. Cash and card payments are STRICTLY PROHIBITED.
              </AlertDescription>
            </Alert>

            <h3>4.1 Accepted Payment Method</h3>
            <p>
              <strong>SEPA Bank Transfer ONLY</strong> - We exclusively accept
              SEPA (Single Euro Payments Area) bank transfers for all
              transactions.
            </p>

            <h3>4.2 Prohibited Payment Methods</h3>
            <p>The following payment methods are NOT accepted:</p>
            <ul>
              <li>❌ Cash payments</li>
              <li>❌ Credit cards</li>
              <li>❌ Debit cards</li>
              <li>❌ PayPal</li>
              <li>❌ Cryptocurrency</li>
              <li>❌ Cash on delivery</li>
              <li>❌ Any other payment method</li>
            </ul>

            <h3>4.3 Payment Process</h3>
            <ol>
              <li>
                After order submission, you will receive a commercial invoice
                via email
              </li>
              <li>
                The invoice contains our bank details and payment reference
              </li>
              <li>
                You must transfer the full amount within 5 business days of
                invoice receipt
              </li>
              <li>
                Include the payment reference number in your bank transfer
              </li>
              <li>Send payment confirmation to info@zoltantech-ltd.com</li>
              <li>
                We verify payment receipt (1-2 business days) and confirm order
                processing
              </li>
            </ol>

            <h3>4.4 Full Prepayment Requirement</h3>
            <p>
              100% full prepayment is required before order processing begins.
              No partial payments or payment plans are available. Orders will
              not be processed until full payment is received and verified.
            </p>

            <h3>4.5 Payment Deadline</h3>
            <p>
              Payment must be received within 5 business days of invoice date.
              Failure to pay within this period may result in automatic order
              cancellation.
            </p>

            <h3>4.6 Bank Transfer Fees</h3>
            <p>
              Customer is responsible for all bank transfer fees charged by
              their bank. The full invoice amount must be received by us - any
              deductions for transfer fees must be added to the payment amount.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6 sm:mb-8">
          <CardHeader>
            <CardTitle>5. Delivery Terms</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm sm:prose max-w-none">
            <h3>5.1 Delivery Method</h3>
            <p>
              Products are delivered directly from authorized suppliers.
              ZoltanTech LTD arranges delivery but does not physically handle
              the products. This ensures authenticity and proper manufacturer
              packaging.
            </p>

            <h3>5.2 Delivery Timeline</h3>
            <p>
              <strong>Standard delivery time: Within 30 days</strong> from order
              confirmation (after payment verification).
            </p>
            <p>Delivery timeline breakdown:</p>
            <ul>
              <li>Payment verification: 1-2 business days</li>
              <li>Supplier order processing: 3-5 business days</li>
              <li>Transit time: 5-25 days (depending on destination)</li>
            </ul>

            <h3>5.3 Delivery Coverage</h3>
            <p>
              We deliver to European countries only. Delivery is available to:
            </p>
            <ul>
              <li>All European Union (EU) member states</li>
              <li>United Kingdom</li>
              <li>
                EFTA countries (Iceland, Liechtenstein, Norway, Switzerland)
              </li>
              <li>
                Other European countries (Albania, Andorra, Bosnia, Kosovo,
                Monaco, Montenegro, North Macedonia, San Marino, Serbia, Turkey,
                Vatican)
              </li>
            </ul>
            <p>
              <strong>Delivery is NOT available to:</strong> Russia, Belarus,
              Ukraine
            </p>

            <h3>5.4 Delivery Address</h3>
            <p>
              You must provide a complete and accurate delivery address. We are
              not responsible for delays or failed deliveries due to incorrect
              address information.
            </p>

            <h3>5.5 Delivery Delays</h3>
            <p>
              Delivery times are estimates and not guaranteed. Delays may occur
              due to:
            </p>
            <ul>
              <li>Customs procedures</li>
              <li>Supplier stock availability</li>
              <li>Courier delays</li>
              <li>Force majeure events</li>
              <li>Public holidays</li>
            </ul>
            <p>
              We are not liable for delays beyond our reasonable control. If
              delivery exceeds 30 days, we will inform you and provide updates.
            </p>

            <h3>5.6 Delivery Costs</h3>
            <p>
              Delivery costs are calculated individually based on order weight,
              size, destination, and supplier rates. Final delivery cost will be
              included in your invoice.
            </p>

            <h3>5.7 Receiving Your Order</h3>
            <p>Upon delivery, you must:</p>
            <ul>
              <li>Inspect the package for visible damage</li>
              <li>
                Note any damage on the delivery receipt before signing (if
                applicable)
              </li>
              <li>
                Report any damage or missing items within 48 hours to
                info@zoltantech-ltd.com
              </li>
              <li>Keep all original packaging for potential returns</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6 sm:mb-8">
          <CardHeader>
            <CardTitle>6. Warranty and Product Quality</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm sm:prose max-w-none">
            <h3>6.1 Manufacturer Warranty</h3>
            <p>
              All products sold by ZoltanTech LTD come with the manufacturer's
              original warranty. Warranty period and terms are specified by the
              manufacturer and included with the product documentation.
            </p>

            <h3>6.2 Warranty Claim Process</h3>
            <p>For warranty claims, you must:</p>
            <ol>
              <li>
                Contact us at info@zoltantech-ltd.com with your order number
              </li>
              <li>Describe the defect or issue</li>
              <li>Provide proof of purchase (invoice)</li>
              <li>Follow manufacturer's warranty procedures</li>
            </ol>
            <p>
              We will assist in facilitating warranty claims with the
              manufacturer or authorized service centers.
            </p>

            <h3>6.3 Warranty Exclusions</h3>
            <p>Warranty does not cover:</p>
            <ul>
              <li>Damage caused by misuse, abuse, or negligence</li>
              <li>Unauthorized repairs or modifications</li>
              <li>Normal wear and tear</li>
              <li>Damage during customer's transportation of the product</li>
              <li>Software issues (unless hardware-related)</li>
              <li>Consumable items (batteries, ink cartridges, etc.)</li>
            </ul>

            <h3>6.4 Product Authenticity</h3>
            <p>
              We guarantee that all products are 100% original and sourced
              directly from authorized manufacturers or distributors. All
              products include original packaging, documentation, and serial
              numbers.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6 sm:mb-8">
          <CardHeader>
            <CardTitle>7. Consumer Rights (EU/UK)</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm sm:prose max-w-none">
            <h3>7.1 Right of Withdrawal (Distance Selling)</h3>
            <p>
              Under EU Consumer Rights Directive and UK Consumer Contracts
              Regulations, you have the right to withdraw from the purchase
              within 14 days of receiving the product without giving a reason.
            </p>

            <h3>7.2 Exercising Right of Withdrawal</h3>
            <p>To exercise your right of withdrawal:</p>
            <ol>
              <li>
                Contact us at info@zoltantech-ltd.com within 14 days of receipt
              </li>
              <li>State clearly that you wish to withdraw from the contract</li>
              <li>Provide your order number and product details</li>
              <li>
                Return the product in original, unopened packaging within 14
                days
              </li>
            </ol>

            <h3>7.3 Conditions for Return</h3>
            <p>For withdrawal right to apply:</p>
            <ul>
              <li>Product must be unused and in original condition</li>
              <li>
                Original packaging must be intact and unopened (sealed products)
              </li>
              <li>All accessories and documentation must be included</li>
              <li>Product must not show signs of use</li>
            </ul>

            <h3>7.4 Exceptions to Right of Withdrawal</h3>
            <p>Right of withdrawal does not apply to:</p>
            <ul>
              <li>
                Sealed electronics that have been opened (for hygiene/health
                reasons)
              </li>
              <li>Products made to customer specifications</li>
              <li>Software with broken seal</li>
              <li>Digital content already downloaded</li>
            </ul>

            <h3>7.5 Refund Processing</h3>
            <p>
              Upon receiving and inspecting the returned product, we will
              process your refund within 14 days. Refund will be made via SEPA
              bank transfer to the account used for original payment.
            </p>
            <p>
              Customer is responsible for return shipping costs unless the
              product is defective or we made an error.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6 sm:mb-8">
          <CardHeader>
            <CardTitle>8. Returns and Refunds</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm sm:prose max-w-none">
            <h3>8.1 Defective Products</h3>
            <p>If you receive a defective product:</p>
            <ol>
              <li>Contact us within 48 hours of receipt</li>
              <li>Provide photos/videos of the defect</li>
              <li>Describe the issue in detail</li>
              <li>We will arrange return or replacement</li>
            </ol>

            <h3>8.2 Wrong Product Delivered</h3>
            <p>
              If you receive a wrong product, contact us immediately. We will
              arrange collection of the wrong item and delivery of the correct
              product at our expense.
            </p>

            <h3>8.3 Return Shipping</h3>
            <p>
              For defective products or our errors, we cover return shipping
              costs. For other returns (e.g., change of mind within withdrawal
              period), customer is responsible for return shipping costs.
            </p>

            <h3>8.4 Refund Timeline</h3>
            <ul>
              <li>
                Refund processing begins after product is received and inspected
              </li>
              <li>Inspection takes 3-5 business days</li>
              <li>Refund is processed within 14 days of approval</li>
              <li>
                Bank transfer refunds may take 3-5 additional business days
              </li>
            </ul>

            <h3>8.5 Restocking Fee</h3>
            <p>
              Opened electronics returned for non-defect reasons may be subject
              to a restocking fee of up to 15% to cover inspection, testing, and
              repackaging costs.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6 sm:mb-8">
          <CardHeader>
            <CardTitle>9. Limitation of Liability</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm sm:prose max-w-none">
            <h3>9.1 General Limitations</h3>
            <p>
              To the maximum extent permitted by law, ZoltanTech LTD shall not
              be liable for:
            </p>
            <ul>
              <li>
                Indirect, incidental, special, consequential, or punitive
                damages
              </li>
              <li>Loss of profits, revenue, data, or business opportunities</li>
              <li>
                Damages arising from product use or inability to use products
              </li>
              <li>Third-party claims</li>
            </ul>

            <h3>9.2 Maximum Liability</h3>
            <p>
              Our total liability for any claim shall not exceed the amount paid
              by you for the specific product giving rise to the claim.
            </p>

            <h3>9.3 Statutory Rights</h3>
            <p>Nothing in these Terms excludes or limits our liability for:</p>
            <ul>
              <li>Death or personal injury caused by negligence</li>
              <li>Fraud or fraudulent misrepresentation</li>
              <li>
                Any liability that cannot be excluded or limited under
                applicable law
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6 sm:mb-8">
          <CardHeader>
            <CardTitle>10. Intellectual Property</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm sm:prose max-w-none">
            <p>
              All content on this Site, including text, graphics, logos, images,
              and software, is the property of ZoltanTech LTD or its content
              suppliers and is protected by international copyright laws.
            </p>
            <p>You may not:</p>
            <ul>
              <li>Copy, reproduce, or distribute Site content</li>
              <li>Use content for commercial purposes</li>
              <li>Modify or create derivative works</li>
              <li>Remove copyright or proprietary notices</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6 sm:mb-8">
          <CardHeader>
            <CardTitle>11. Privacy and Data Protection</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm sm:prose max-w-none">
            <p>
              Your use of our Site and services is also governed by our{" "}
              <Link href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
              , which explains how we collect, use, and protect your personal
              data in compliance with GDPR and UK Data Protection Act 2018.
            </p>
            <p>
              For cookie usage, please see our{" "}
              <Link href="/cookies" className="text-primary hover:underline">
                Cookie Policy
              </Link>
              .
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6 sm:mb-8">
          <CardHeader>
            <CardTitle>12. Force Majeure</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm sm:prose max-w-none">
            <p>
              We shall not be liable for any failure or delay in performing our
              obligations due to circumstances beyond our reasonable control,
              including but not limited to:
            </p>
            <ul>
              <li>Acts of God, natural disasters</li>
              <li>War, terrorism, civil unrest</li>
              <li>Government actions or regulations</li>
              <li>Strikes or labor disputes</li>
              <li>Supplier failures</li>
              <li>Pandemics or epidemics</li>
              <li>Internet or telecommunications failures</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6 sm:mb-8">
          <CardHeader>
            <CardTitle>13. Governing Law and Jurisdiction</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm sm:prose max-w-none">
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of England and Wales, without regard to conflict of law
              principles.
            </p>
            <p>
              For consumer contracts with EU/UK residents, you also benefit from
              mandatory provisions of consumer protection laws in your country
              of residence.
            </p>
            <p>
              Any disputes arising from these Terms or your use of our services
              shall be subject to the exclusive jurisdiction of the courts of
              England and Wales, except where EU/UK consumer protection laws
              grant you the right to bring proceedings in your local courts.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6 sm:mb-8">
          <CardHeader>
            <CardTitle>14. Changes to Terms</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm sm:prose max-w-none">
            <p>
              We reserve the right to modify these Terms at any time. Changes
              will be effective immediately upon posting on the Site with an
              updated &quot;Last updated&quot; date.
            </p>
            <p>
              Your continued use of the Site after changes constitutes
              acceptance of the modified Terms. We recommend reviewing these
              Terms periodically.
            </p>
            <p>
              Material changes affecting existing orders will not apply to those
              orders - the Terms in effect at the time of order placement will
              govern.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6 sm:mb-8">
          <CardHeader>
            <CardTitle>15. Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm sm:prose max-w-none">
            <p>
              For questions, concerns, or complaints regarding these Terms or
              our services, please contact us:
            </p>
            <ul>
              <li>
                <strong>Company Name:</strong> ZoltanTech LTD
              </li>
              <li>
                <strong>Company Number:</strong> 16887893
              </li>
              <li>
                <strong>Email:</strong> info@zoltantech-ltd.com
              </li>
              <li>
                <strong>Address:</strong> 3rd Floor, 86-90, Paul Street, London,
                England, EC2A 4NE
              </li>
              <li>
                <strong>Working Hours:</strong> Monday-Friday: 9:00-18:00,
                Saturday: 10:00-17:00, Sunday: Closed
              </li>
            </ul>
            <p>Related policies:</p>
            <ul>
              <li>
                <Link href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-primary hover:underline">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/delivery" className="text-primary hover:underline">
                  Delivery & Payment Information
                </Link>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6 sm:mb-8">
          <CardHeader>
            <CardTitle>16. Severability</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm sm:prose max-w-none">
            <p>
              If any provision of these Terms is found to be invalid, illegal,
              or unenforceable, the remaining provisions shall continue in full
              force and effect. The invalid provision shall be replaced with a
              valid provision that most closely reflects the intent of the
              original provision.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6 sm:mb-8">
          <CardHeader>
            <CardTitle>17. Entire Agreement</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm sm:prose max-w-none">
            <p>
              These Terms, together with our Privacy Policy, Cookie Policy, and
              Delivery & Payment Information, constitute the entire agreement
              between you and ZoltanTech LTD regarding your use of the Site and
              purchase of products, superseding any prior agreements or
              understandings.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Terms & Conditions - ZoltanTech LTD",
  description:
    "Read ZoltanTech LTD's Terms & Conditions. UK and EU compliant terms for electronics sales, SEPA payments, delivery, returns, and consumer rights.",
};
