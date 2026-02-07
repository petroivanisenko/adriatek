import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ContactForm } from "@/components/shop/help/ContactForm";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  AtSignIcon,
  ClockIcon,
  MapPinIcon,
  PhoneIcon,
  SendIcon,
} from "lucide-react";
import { SetBreadcrumbs } from "@/components/SetBreadcrumbs";
import { Metadata } from "next";

export default function ContactsPage() {
  return (
    <div className="container mx-auto py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-8">
      <SetBreadcrumbs items={[{ label: "Contacts", href: "/contacts" }]} />

      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8">
          Contact Information
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 sm:mb-10 md:mb-12">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
              Our Contacts
            </h2>
            <div className="space-y-4 sm:space-y-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <MapPinIcon className="h-5 w-5 text-primary" />
                    Address
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    3rd Floor, 86-90, Paul Street
                  </p>
                  <p className="text-muted-foreground">
                    London, England, EC2A 4NE
                  </p>
                  <p className="text-muted-foreground">UNITED KINGDOM</p>
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">
                      Company Number:
                    </span>{" "}
                    16887893
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <PhoneIcon className="h-5 w-5 text-primary" />
                    Phone
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    <a
                      href="tel:+44 7350 814588"
                      className="text-primary hover:underline"
                    >
                      +44 7350 814588
                    </a>
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <AtSignIcon className="h-5 w-5 text-primary" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    <a
                      href="mailto:info@zoltantech-ltd.com"
                      className="text-primary hover:underline"
                    >
                      info@zoltantech-ltd.com
                    </a>
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <ClockIcon className="h-5 w-5 text-primary" />
                    Working Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Monday - Friday: 9:00 - 18:00
                  </p>
                  <p className="text-muted-foreground">
                    Saturday: 10:00 - 17:00
                  </p>
                  <p className="text-muted-foreground">Sunday: Closed</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
              Contact Us
            </h2>
            <Card>
              <CardHeader>
                <CardTitle>Contact Form</CardTitle>
                <CardDescription>
                  Fill out the form, and we&apos;ll get back to you shortly
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Contacts",
  description: "Contact us for any inquiries or feedback.",
};
