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
import { Cookie } from "lucide-react";

const breadcrumbItems = [{ label: "Cookie Policy", href: "/cookies" }];

export default function CookiePolicyPage() {
  return (
    <div className="container mx-auto pb-4 sm:pb-6 md:pb-8 px-4 sm:px-6 md:px-8">
      <SetBreadcrumbs items={breadcrumbItems} />
      <div className="max-w-4xl mx-auto">
        <div className="flex gap-3">
          <Cookie className="h-8 w-8 text-primary" />
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8">
            Cookie Policy
          </h1>
        </div>

        <Card className="mb-6 sm:mb-8">
          <CardHeader>
            <CardTitle>1. Introduction</CardTitle>
            <CardDescription>Last updated: January 15, 2025</CardDescription>
          </CardHeader>
          <CardContent className="prose prose-sm sm:prose max-w-none">
            <p>
              This Cookie Policy explains how Adriatek Limited (&quot;we&quot;,
              &quot;us&quot;, or &quot;our&quot;) uses cookies and similar
              technologies on our website adriatek-limited.com (the
              &quot;Site&quot;).
            </p>
            <p>
              By using our Site, you consent to the use of cookies in accordance
              with this Cookie Policy. If you do not agree to our use of cookies
              in this way, you should set your browser settings accordingly or
              not use our Site.
            </p>
            <p>
              <strong>Company Details:</strong>
            </p>
            <ul>
              <li>Company Name: Adriatek Limited</li>
              <li>Company Number: 79144752</li>
              <li>
                Registered Address: RM 8, S-V, 6/F VALIANT IND CTR 2-12 AU PUI WAN ST FO TAN HONG KONG
              </li>
              <li>Email: info@adriatek-limited.com</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6 sm:mb-8">
          <CardHeader>
            <CardTitle>2. What Are Cookies</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm sm:prose max-w-none">
            <p>
              Cookies are small text files that are placed on your computer or
              mobile device when you visit a website. They are widely used to
              make websites work more efficiently and provide information to the
              owners of the site.
            </p>
            <p>
              Cookies enable us to recognize your device and remember certain
              information about your preferences or past actions. They help us
              provide you with a better experience and allow us to improve our
              Site.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6 sm:mb-8">
          <CardHeader>
            <CardTitle>3. Types of Cookies We Use</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm sm:prose max-w-none">
            <h3>3.1 Strictly Necessary Cookies</h3>
            <p>
              These cookies are essential for the operation of our Site. They
              enable you to navigate our Site and use its features, such as
              accessing secure areas and managing your shopping cart. Without
              these cookies, services you have requested cannot be provided.
            </p>
            <ul>
              <li>Session management</li>
              <li>Shopping cart functionality</li>
              <li>Security and authentication</li>
              <li>Load balancing</li>
            </ul>

            <h3>3.2 Functional Cookies</h3>
            <p>
              These cookies allow our Site to remember choices you make (such as
              your language preference or the region you are in) and provide
              enhanced, more personalized features.
            </p>
            <ul>
              <li>Language preferences</li>
              <li>Theme preferences (light/dark mode)</li>
              <li>Region/location settings</li>
              <li>Remember your login details</li>
            </ul>

            <h3>3.3 Performance and Analytics Cookies</h3>
            <p>
              これらのクッキーは、訪問者が当サイトをどのように利用しているかに関する情報を収集します（どのページが最も頻繁に訪問されているかなど）。これにより、当サイトの動作を改善し、ユーザーの行動を理解することができます。
            </p>
            <ul>
              <li>Page visit statistics</li>
              <li>Time spent on pages</li>
              <li>Click patterns</li>
              <li>Error messages encountered</li>
            </ul>

            <h3>3.4 Marketing and Advertising Cookies</h3>
            <p>
              These cookies are used to deliver advertisements that are relevant
              to you and your interests. They may also be used to limit the
              number of times you see an advertisement and help measure the
              effectiveness of advertising campaigns.
            </p>
            <ul>
              <li>Tracking ad impressions</li>
              <li>Measuring campaign effectiveness</li>
              <li>Personalizing content</li>
              <li>Remarketing to previous visitors</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6 sm:mb-8">
          <CardHeader>
            <CardTitle>4. Third-Party Cookies</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm sm:prose max-w-none">
            <p>
              In addition to our own cookies, we may also use various
              third-party cookies to report usage statistics of the Site and
              deliver advertisements on and through the Site.
            </p>
            <p>Third-party services we may use include:</p>
            <ul>
              <li>
                <strong>Google Analytics:</strong> To analyze website traffic
                and usage patterns
              </li>
              <li>
                <strong>Social Media Platforms:</strong> To enable sharing
                functionality (Facebook, Twitter, LinkedIn)
              </li>
              <li>
                <strong>Payment Processors:</strong> To facilitate secure
                transactions (for bank transfer verification)
              </li>
              <li>
                <strong>Email Service Providers:</strong> To manage newsletter
                subscriptions and order confirmations
              </li>
            </ul>
            <p>
              These third parties may collect information about your online
              activities over time and across different websites. Please review
              their privacy policies for more information about how they use
              your data.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6 sm:mb-8">
          <CardHeader>
            <CardTitle>5. Cookie Duration</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm sm:prose max-w-none">
            <h3>Session Cookies</h3>
            <p>
              These are temporary cookies that expire when you close your
              browser. They are used to maintain your session while browsing our
              Site.
            </p>

            <h3>Persistent Cookies</h3>
            <p>
              These cookies remain on your device for a set period or until you
              delete them. They help us recognize you as a returning visitor and
              remember your preferences.
            </p>
            <p>Cookie retention periods:</p>
            <ul>
              <li>Essential cookies: Duration of session or up to 1 year</li>
              <li>Functional cookies: Up to 1 year</li>
              <li>Analytics cookies: Up to 2 years</li>
              <li>Marketing cookies: Up to 1 year</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6 sm:mb-8">
          <CardHeader>
            <CardTitle>6. Managing Cookies</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm sm:prose max-w-none">
            <p>
              You have the right to decide whether to accept or reject cookies.
              You can exercise your cookie preferences by clicking on the
              appropriate opt-out links provided in our cookie consent banner.
            </p>

            <h3>Browser Settings</h3>
            <p>
              You can set or amend your web browser controls to accept or refuse
              cookies. The method for doing this varies from browser to browser.
              Here are links to cookie management instructions for popular
              browsers:
            </p>
            <ul>
              <li>
                <strong>Google Chrome:</strong> Settings &gt; Privacy and
                security &gt; Cookies and other site data
              </li>
              <li>
                <strong>Mozilla Firefox:</strong> Options &gt; Privacy &amp;
                Security &gt; Cookies and Site Data
              </li>
              <li>
                <strong>Safari:</strong> Preferences &gt; Privacy &gt; Manage
                Website Data
              </li>
              <li>
                <strong>Microsoft Edge:</strong> Settings &gt; Cookies and site
                permissions &gt; Cookies and site data
              </li>
            </ul>

            <h3>Impact of Disabling Cookies</h3>
            <p>
              Please note that if you choose to block or delete cookies, some
              features of our Site may not function properly. Specifically:
            </p>
            <ul>
              <li>You may not be able to add items to your shopping cart</li>
              <li>
                Your preferences and settings may not be saved between visits
              </li>
              <li>
                You may experience reduced functionality when browsing our
                catalogue
              </li>
              <li>Some pages may load more slowly</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6 sm:mb-8">
          <CardHeader>
            <CardTitle>7. Your Rights Under GDPR</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm sm:prose max-w-none">
            <p>
              If you are located in the European Economic Area (EEA), you have
              certain data protection rights under the General Data Protection
              Regulation (GDPR):
            </p>
            <ul>
              <li>
                <strong>Right to Access:</strong> You can request information
                about the cookies we use and the data they collect
              </li>
              <li>
                <strong>Right to Rectification:</strong> You can request
                correction of inaccurate data
              </li>
              <li>
                <strong>Right to Erasure:</strong> You can request deletion of
                your data
              </li>
              <li>
                <strong>Right to Restrict Processing:</strong> You can request
                limitation of data processing
              </li>
              <li>
                <strong>Right to Object:</strong> You can object to processing
                of your data
              </li>
              <li>
                <strong>Right to Data Portability:</strong> You can request
                transfer of your data
              </li>
            </ul>
            <p>
              To exercise any of these rights, please contact us at
              info@adriatek-limited.com
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6 sm:mb-8">
          <CardHeader>
            <CardTitle>8. Updates to This Policy</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm sm:prose max-w-none">
            <p>
              We may update this Cookie Policy from time to time to reflect
              changes in our practices or for other operational, legal, or
              regulatory reasons. The updated version will be indicated by an
              updated &quot;Last updated&quot; date at the top of this policy.
            </p>
            <p>
              We encourage you to review this Cookie Policy periodically to stay
              informed about how we use cookies. Your continued use of the Site
              after any changes to this Cookie Policy will constitute your
              acceptance of such changes.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6 sm:mb-8">
          <CardHeader>
            <CardTitle>9. Contact Us</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm sm:prose max-w-none">
            <p>
              If you have any questions about this Cookie Policy or our use of
              cookies, please contact us:
            </p>
            <ul>
              <li>
                <strong>Email:</strong> info@adriatek-limited.com
              </li>
              <li>
                <strong>Phone:</strong> +44 7350818336
              </li>
              <li>
                <strong>Address:</strong> RM 8, S-V, 6/F VALIANT IND CTR 2-12 AU PUI WAN ST FO TAN HONG KONG
              </li>
              <li>
                <strong>Working Hours:</strong> Monday-Friday: 9:00-18:00,
                Saturday: 10:00-17:00
              </li>
            </ul>
            <p>
              For more information about our data protection practices, please
              see our{" "}
              <Link href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6 sm:mb-8">
          <CardHeader>
            <CardTitle>10. Related Policies</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm sm:prose max-w-none">
            <p>
              For comprehensive information about how we handle your data,
              please also review:
            </p>
            <ul>
              <li>
                <Link href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>{" "}
                - How we collect, use, and protect your personal data
              </li>
              <li>
                <Link href="/terms" className="text-primary hover:underline">
                  Terms &amp; Conditions
                </Link>{" "}
                - The terms governing your use of our Site
              </li>
              <li>
                <Link href="/delivery" className="text-primary hover:underline">
                  Delivery &amp; Payment
                </Link>{" "}
                - Information about our delivery and payment processes
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Cookie Policy - Adriatek Limited",
  description:
    "Learn about how Adriatek Limited uses cookies and similar technologies on our website. GDPR-compliant cookie policy for European customers.",
};
