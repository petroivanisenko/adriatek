import {
  Building2Icon,
  CheckCheckIcon,
  ClockIcon,
  CreditCardIcon,
  HeartIcon,
  HouseIcon,
  MountainIcon,
  PackageIcon,
  SearchCheckIcon,
  ShieldCheckIcon,
  StarIcon,
  TrophyIcon,
  TruckIcon,
} from "lucide-react";

export const advantages = [
  {
    title: "Premium Selection",
    description:
      "High-end electronics for home and office. Only quality brands and original products.",
  },
  {
    title: "Supplier Direct Delivery",
    description:
      "Products delivered directly from suppliers within 30 days to European countries.",
  },
  {
    title: "Official Warranty",
    description:
      "Full manufacturer warranty on all products with authorized service support.",
  },
  {
    title: "Wide Assortment",
    description:
      "Extensive catalogue of computers, laptops, gaming gadgets, TVs, appliances, and more.",
  },
  {
    title: "Secure Payment",
    description:
      "SEPA bank transfer only - secure and traceable banking transactions.",
  },
];

export const values = [
  {
    title: "Quality",
    description:
      "We offer only premium electronics from authorized manufacturers with full documentation.",
    icon: StarIcon,
  },
  {
    title: "Reliability",
    description:
      "Established company with transparent business processes and secure payment methods.",
    icon: HeartIcon,
  },
  {
    title: "Security",
    description:
      "Full prepayment via SEPA bank transfer ensures transaction security and traceability.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Expertise",
    description:
      "Professional team with deep knowledge of electronics market and European regulations.",
    icon: TrophyIcon,
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Michael Chen",
    avatar: "/avatar1.webp",
    rating: 5,
    text: "Ordered professional equipment for our office. Great service and quality products!",
    date: "2024-11-15",
  },
  {
    id: 2,
    name: "Sarah Wilson",
    avatar: "/avatar2.webp",
    rating: 5,
    text: "Excellent selection of high-end laptops. Delivery was exactly as promised.",
    date: "2024-10-22",
  },
  {
    id: 3,
    name: "David Martinez",
    avatar: "/avatar3.webp",
    rating: 5,
    text: "Professional approach and premium products. Highly recommended for business purchases!",
    date: "2024-09-18",
  },
];

export const deliveryBenefits = [
  {
    title: "Supplier Delivery",
    description: "Direct delivery from suppliers within 30 days",
    icon: TruckIcon,
  },
  {
    title: "Secure Packaging",
    description: "Professional packaging for safe electronics transport",
    icon: PackageIcon,
  },
  {
    title: "SEPA Payment",
    description: "Secure bank transfer only",
    icon: CreditCardIcon,
  },
  {
    title: "European Coverage",
    description: "Delivery across European countries",
    icon: ClockIcon,
  },
];

export const paymentMethods = [
  {
    id: 1,
    name: "SEPA Bank Transfer",
    description:
      "Full prepayment via SEPA bank transfer (only accepted payment method)",
    icon: CreditCardIcon,
  },
];

export const paymentFAQ = [
  {
    id: 1,
    question: "What payment methods do you accept?",
    answer:
      "We accept only SEPA bank transfers. Full prepayment is required before order processing. Cash and card payments are not accepted.",
  },
  {
    id: 2,
    question: "Is SEPA bank transfer safe?",
    answer:
      "Yes, SEPA bank transfers are highly secure and fully traceable. All transactions are processed through regulated European banking systems with full documentation.",
  },
  {
    id: 3,
    question: "When should I make the payment?",
    answer:
      "Full prepayment is required immediately after order confirmation. You will receive an invoice with our bank details via email.",
  },
];

export const deliveryOptions = [
  {
    id: 1,
    title: "30-Day Delivery",
    description: "Standard delivery time up to 30 days from order confirmation",
    icon: ClockIcon,
  },
  {
    id: 2,
    title: "Supplier Direct",
    description: "Products delivered directly from authorized suppliers",
    icon: PackageIcon,
  },
  {
    id: 3,
    title: "European Coverage",
    description:
      "Delivery to all European countries (excluding Russia, Belarus, Ukraine)",
    icon: CheckCheckIcon,
  },
];

export const deliveryZones = [
  {
    id: 1,
    name: "Western Europe",
    description:
      "UK, Ireland, France, Germany, Netherlands, Belgium, Luxembourg",
    price: "Calculated individually",
    time: "up to 30 days",
    icon: Building2Icon,
  },
  {
    id: 2,
    name: "Southern Europe",
    description: "Spain, Portugal, Italy, Greece, Malta, Cyprus",
    price: "Calculated individually",
    time: "up to 30 days",
    icon: HouseIcon,
  },
  {
    id: 3,
    name: "Northern & Eastern Europe",
    description:
      "Nordic countries, Poland, Czech Republic, Hungary, Romania, Baltic states",
    price: "Calculated individually",
    time: "up to 30 days",
    icon: MountainIcon,
  },
];

export const importantInfo = [
  "Payment only via SEPA bank transfer - full prepayment required",
  "Cash and card payments are strictly prohibited",
  "Delivery within 30 days from order confirmation",
  "Products delivered directly from suppliers",
  "Delivery available to European countries (EU + other European countries)",
  "Delivery NOT available to Russia, Belarus, and Ukraine",
  "Invoice will be sent to your email after order placement",
];

export const workingHours = {
  weekdays: "Mon-Fri 9:00-18:00",
  saturday: "Sat 10:00-17:00",
  sunday: "Closed",
};

export const productCategories = [
  "Computers and Peripherals",
  "Laptops and All-in-Ones",
  "Gaming Gadgets",
  "Televisions",
  "Home Appliances",
  "Smart Gadgets",
  "E-scooters and E-bikes",
  "Acoustic Systems",
  "Backup Power",
  "Office Equipment",
];
