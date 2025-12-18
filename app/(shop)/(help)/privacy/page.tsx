import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { ShieldIcon } from "lucide-react";
import { SetBreadcrumbs } from "@/components/SetBreadcrumbs";
import { Metadata } from "next";

const breadcrumbItems = [{ label: "Privacy Policy", href: "/privacy" }];

export default function PrivacyPage() {
  return (
    <div className="container mx-auto pb-4 sm:pb-6 md:pb-8 px-4 sm:px-6 md:px-8">
      <SetBreadcrumbs items={breadcrumbItems} />

      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-4 sm:mb-6 md:mb-8">
          <ShieldIcon className="h-8 w-8 text-primary" />
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Privacy Policy
          </h1>
        </div>

        <Card className="mb-6 sm:mb-8">
          <CardHeader>
            <CardTitle>1. Introduction</CardTitle>
            <CardDescription>Last updated: January 15, 2025</CardDescription>
          </CardHeader>
          <CardContent className="prose prose-sm sm:prose max-w-none">
            <p>
              This Privacy Policy explains how ZoltanTech LTD (&quot;we&quot;,
              &quot;us&quot;, &quot;our&quot;, or &quot;Company&quot;) collects,
              uses, and protects personal data of individuals (&quot;User&quot;,
              &quot;you&quot;, or &quot;your&quot;) who use our website
              zoltantech-ltd.com (the &quot;Site&quot;).
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
              <li>Phone: +36 205582310</li>
            </ul>
            <p>
              By using our Site and services, you consent to the collection,
              processing, and use of your personal data as described in this
              Privacy Policy. If you do not agree with this Privacy Policy,
              please do not use our Site.
            </p>
            <p>
              This Privacy Policy complies with the General Data Protection
              Regulation (GDPR) and UK Data Protection Act 2018, as well as
              other applicable data protection laws in the European Economic
              Area (EEA) and United Kingdom.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6 sm:mb-8">
          <CardHeader>
            <CardTitle>2. Information We Collect</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm sm:prose max-w-none">
            <h3>2.1 Personal Information You Provide</h3>
            <p>
              When you place an order or contact us, we collect the following
              personal information:
            </p>
            <ul>
              <li>
                <strong>Contact Information:</strong> Full name, email address,
                phone number
              </li>
              <li>
                <strong>Delivery Information:</strong> Shipping address,
                country, postal code
              </li>
              <li>
                <strong>Order Information:</strong> Products ordered,
                quantities, prices, order date
              </li>
              <li>
                <strong>Communication Data:</strong> Messages, inquiries, and
                correspondence with us
              </li>
              <li>
                <strong>Business Information:</strong> Company name, VAT number
                (for business customers)
              </li>
            </ul>

            <h3>2.2 Payment Information</h3>
            <p>
              We accept only SEPA bank transfers. We do NOT collect or store
              your bank account details. Payment is processed directly between
              you and your bank. We only receive confirmation of payment receipt
              from our bank.
            </p>

            <h3>2.3 Automatically Collected Information</h3>
            <ul>
              <li>
                <strong>Technical Data:</strong> IP address, browser type,
                device information, operating system
              </li>
              <li>
                <strong>Usage Data:</strong> Pages visited, time spent on Site,
                clickstream data
              </li>
              <li>
                <strong>Cookies:</strong> See our{" "}
                <Link href="/cookies" className="text-primary hover:underline">
                  Cookie Policy
                </Link>{" "}
                for details
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6 sm:mb-8">
          <CardHeader>
            <CardTitle>3. How We Use Your Information</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm sm:prose max-w-none">
            <p>
              We process your personal data for the following purposes and legal
              bases:
            </p>

            <h3>3.1 Contract Performance</h3>
            <ul>
              <li>Processing and fulfilling your orders</li>
              <li>Arranging delivery with suppliers</li>
              <li>Sending order confirmations and invoices</li>
              <li>Providing customer support</li>
              <li>Managing returns and refunds (if applicable)</li>
            </ul>

            <h3>3.2 Legal Obligations</h3>
            <ul>
              <li>Complying with tax and accounting requirements</li>
              <li>Maintaining transaction records as required by law</li>
              <li>Responding to legal requests from authorities</li>
              <li>Preventing fraud and ensuring payment security</li>
            </ul>

            <h3>3.3 Legitimate Interests</h3>
            <ul>
              <li>Improving our website and services</li>
              <li>Analyzing customer behavior and preferences</li>
              <li>Protecting our business from fraud and security threats</li>
              <li>Sending service-related communications</li>
            </ul>

            <h3>3.4 Consent</h3>
            <ul>
              <li>
                Sending marketing communications (only with your explicit
                consent)
              </li>
              <li>Using cookies for analytics and personalization</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6 sm:mb-8">
          <CardHeader>
            <CardTitle>4. Data Sharing and Disclosure</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm sm:prose max-w-none">
            <p>
              We may share your personal data with the following third parties:
            </p>

            <h3>4.1 Suppliers and Delivery Partners</h3>
            <p>
              We share your name, delivery address, and order details with our
              authorized suppliers who deliver products directly to you. This is
              necessary to fulfill your order.
            </p>

            <h3>4.2 Service Providers</h3>
            <ul>
              <li>Email service providers (for sending order confirmations)</li>
              <li>Web hosting providers</li>
              <li>Analytics services (Google Analytics)</li>
              <li>IT support and maintenance providers</li>
            </ul>

            <h3>4.3 Legal Requirements</h3>
            <p>
              We may disclose your information to government authorities, law
              enforcement, or legal advisors when:
            </p>
            <ul>
              <li>Required by law or legal process</li>
              <li>To protect our rights or property</li>
              <li>To prevent fraud or security threats</li>
              <li>To comply with regulatory obligations</li>
            </ul>

            <h3>4.4 Business Transfers</h3>
            <p>
              In the event of a merger, acquisition, or sale of assets, your
              personal data may be transferred to the acquiring entity.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6 sm:mb-8">
          <CardHeader>
            <CardTitle>5. Data Retention</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm sm:prose max-w-none">
            <p>We retain your personal data for the following periods:</p>
            <ul>
              <li>
                <strong>Order Data:</strong> 7 years (for tax and accounting
                purposes as required by UK/EU law)
              </li>
              <li>
                <strong>Customer Account Data:</strong> Until you request
                deletion or 3 years of inactivity
              </li>
              <li>
                <strong>Marketing Consent:</strong> Until you withdraw consent
              </li>
              <li>
                <strong>Technical/Analytics Data:</strong> Up to 26 months
              </li>
              <li>
                <strong>Communication Records:</strong> 3 years from last
                contact
              </li>
            </ul>
            <p>
              After the retention period expires, we securely delete or
              anonymize your personal data.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6 sm:mb-8">
          <CardHeader>
            <CardTitle>6. Your Rights Under GDPR and UK DPA</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm sm:prose max-w-none">
            <p>
              As a data subject in the EEA or UK, you have the following rights:
            </p>
            <ul>
              <li>
                <strong>Right to Access:</strong> Request a copy of your
                personal data we hold
              </li>
              <li>
                <strong>Right to Rectification:</strong> Correct inaccurate or
                incomplete data
              </li>
              <li>
                <strong>Right to Erasure:</strong> Request deletion of your data
                (subject to legal obligations)
              </li>
              <li>
                <strong>Right to Restrict Processing:</strong> Limit how we use
                your data
              </li>
              <li>
                <strong>Right to Data Portability:</strong> Receive your data in
                a machine-readable format
              </li>
              <li>
                <strong>Right to Object:</strong> Object to processing based on
                legitimate interests
              </li>
              <li>
                <strong>Right to Withdraw Consent:</strong> Withdraw consent for
                marketing or cookies
              </li>
              <li>
                <strong>Right to Lodge a Complaint:</strong> Contact your local
                data protection authority
              </li>
            </ul>
            <p>
              To exercise any of these rights, please contact us at
              info@zoltantech-ltd.com with your request. We will respond within
              30 days.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6 sm:mb-8">
          <CardHeader>
            <CardTitle>7. International Data Transfers</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm sm:prose max-w-none">
            <p>
              ZoltanTech LTD is registered in England. When you use our
              services, your personal data may be transferred to and processed
              in the United Kingdom.
            </p>
            <p>
              We ensure appropriate safeguards are in place for international
              data transfers:
            </p>
            <ul>
              <li>Standard Contractual Clauses (SCCs) approved by the EU</li>
              <li>Adequate security measures to protect your data</li>
              <li>
                Compliance with GDPR requirements for data transfers outside the
                EEA
              </li>
            </ul>
            <p>
              Your data is primarily processed by suppliers located within the
              European Economic Area to fulfill your orders.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6 sm:mb-8">
          <CardHeader>
            <CardTitle>8. Data Security</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm sm:prose max-w-none">
            <p>
              We implement appropriate technical and organizational measures to
              protect your personal data:
            </p>
            <ul>
              <li>SSL/TLS encryption for data transmission</li>
              <li>
                Secure server infrastructure with regular security updates
              </li>
              <li>
                Access controls limiting data access to authorized personnel
              </li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Employee training on data protection</li>
              <li>Secure backup and disaster recovery procedures</li>
            </ul>
            <p>
              However, please note that no method of transmission over the
              internet is 100% secure. While we strive to protect your data, we
              cannot guarantee absolute security.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6 sm:mb-8">
          <CardHeader>
            <CardTitle>9. Children's Privacy</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm sm:prose max-w-none">
            <p>
              Our Site and services are not intended for children under 16 years
              of age. We do not knowingly collect personal data from children.
            </p>
            <p>
              If you are a parent or guardian and believe your child has
              provided us with personal data, please contact us immediately at
              info@zoltantech-ltd.com, and we will delete such information.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6 sm:mb-8">
          <CardHeader>
            <CardTitle>10. Changes to This Privacy Policy</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm sm:prose max-w-none">
            <p>
              We may update this Privacy Policy from time to time to reflect
              changes in our practices, legal requirements, or for other
              operational reasons.
            </p>
            <p>
              The updated version will be indicated by the &quot;Last
              updated&quot; date at the top of this policy. Material changes
              will be communicated via email or prominent notice on our Site.
            </p>
            <p>
              We encourage you to review this Privacy Policy periodically. Your
              continued use of the Site after changes constitutes acceptance of
              the updated policy.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6 sm:mb-8">
          <CardHeader>
            <CardTitle>11. Contact Us</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm sm:prose max-w-none">
            <p>
              If you have any questions, concerns, or requests regarding this
              Privacy Policy or our data practices, please contact us:
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
                <strong>Phone:</strong> +36 205582310
              </li>
              <li>
                <strong>Address:</strong> 3rd Floor, 86-90, Paul Street, London,
                England, EC2A 4NE
              </li>
              <li>
                <strong>Working Hours:</strong> Monday-Friday: 9:00-18:00,
                Saturday: 10:00-17:00
              </li>
            </ul>
            <p>
              For more information, please also review our{" "}
              <Link href="/cookies" className="text-primary hover:underline">
                Cookie Policy
              </Link>
              ,{" "}
              <Link href="/terms" className="text-primary hover:underline">
                Terms & Conditions
              </Link>
              , and{" "}
              <Link href="/delivery" className="text-primary hover:underline">
                Delivery & Payment
              </Link>{" "}
              information.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6 sm:mb-8">
          <CardHeader>
            <CardTitle>12. Supervisory Authority</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm sm:prose max-w-none">
            <p>
              If you have concerns about how we handle your personal data, you
              have the right to lodge a complaint with your local data
              protection supervisory authority:
            </p>
            <ul>
              <li>
                <strong>UK:</strong> Information Commissioner&apos;s Office
                (ICO) - www.ico.org.uk
              </li>
              <li>
                <strong>EU:</strong> Your national data protection authority -
                find yours at www.edpb.europa.eu
              </li>
            </ul>
            <p>
              However, we encourage you to contact us first so we can address
              your concerns directly.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Privacy Policy - ZoltanTech LTD",
  description:
    "ZoltanTech LTD Privacy Policy. Learn how we collect, use, and protect your personal data in compliance with GDPR and UK Data Protection Act 2018.",
};
