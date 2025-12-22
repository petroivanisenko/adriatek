import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRightIcon, CheckCircle2Icon, MailIcon } from "lucide-react";
import { advantages, values } from "@/constants";
import { SetBreadcrumbs } from "@/components/SetBreadcrumbs";
import { Metadata } from "next";

const breadcrumbItems = [{ label: "About Us", href: "/about" }];

export default function AboutPage() {
  return (
    <div className="container mx-auto pb-4 sm:pb-6 md:pb-8 px-4 sm:px-6 md:px-8">
      <SetBreadcrumbs items={breadcrumbItems} />

      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8">
          About Our Company
        </h1>

        <div className="prose prose-lg max-w-none mb-8 sm:mb-10 md:mb-12">
          <p>
            ZOLTANTECH LTD is a UK-based company specializing in the
            distribution of premium and exclusive electronics for home and
            office use across Europe. Our portfolio is carefully curated to
            include only high-performance, design-driven, and technologically
            advanced solutions that meet the expectations of the most discerning
            clients.
          </p>
          <p>
            At the core of our approach is a client-oriented philosophy. We
            focus on understanding individual requirements and delivering
            tailored solutions, supported by professional consultation, precise
            logistics, and consistent after-sales support. This ensures a
            seamless experience from selection to delivery.
          </p>
          <p>
            We work directly with authorized suppliers to ensure product
            authenticity, full warranty coverage, and professional delivery
            within 30 days to all European countries.
          </p>
          <p>
            We accept only SEPA bank transfers for full prepayment, ensuring
            maximum security and traceability for all transactions. This payment
            method complies with European banking standards and provides
            complete documentation for both business and personal purchases.
          </p>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
          Our Values
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10 md:mb-12">
          {values.map((value) => (
            <Card key={value.title}>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <value.icon className="h-5 w-5 text-primary" />
                  {value.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
          Our Advantages
        </h2>
        <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10 md:mb-12">
          {advantages.map((advantage, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle2Icon className="h-6 w-6 text-primary shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold mb-1">{advantage.title}</h3>
                <p className="text-muted-foreground">{advantage.description}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="bg-muted rounded-lg p-6 sm:p-8 md:p-10 text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
            Ready to order premium electronics?
          </h2>
          <p className="text-muted-foreground mb-4 sm:mb-6 max-w-2xl mx-auto">
            Browse our catalogue of high-end electronics for home and office.
            Secure SEPA payment and delivery across Europe.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/catalogue">
                View Catalogue <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contacts">
                Contact us <MailIcon />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "About Us - ZoltanTech LTD",
  description:
    "ZoltanTech LTD - Premium electronics distributor for Europe. UK-based company offering high-end electronics for home and office with SEPA payment and European delivery.",
};
