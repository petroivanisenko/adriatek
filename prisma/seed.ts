import prisma from "@/lib/prisma";
import { Prisma } from "../generated/prisma/client";

const categoryData: Prisma.CategoryCreateInput[] = [
  {
    name: "Computers & Peripherals",
    description:
      "Desktop computers, monitors, keyboards, mice, and essential computer accessories",
    image: "/categories/computers.jpg",
    slug: "computers-peripherals",
  },
  {
    name: "Laptops & All-in-One Computers",
    description:
      "Portable laptops and space-saving all-in-one desktop solutions",
    image: "/categories/laptops.jpg",
    slug: "laptops-all-in-one",
  },
  {
    name: "Gaming Gadgets & Equipment",
    description:
      "Gaming consoles, controllers, headsets, and professional gaming accessories",
    image: "/categories/gaming.jpg",
    slug: "gaming-gadgets",
  },
  {
    name: "Televisions",
    description:
      "Smart TVs, OLED, QLED, and premium home entertainment displays",
    image: "/categories/televisions.jpg",
    slug: "televisions",
  },
  {
    name: "Home Appliances",
    description:
      "Smart home appliances, kitchen equipment, and household electronics",
    image: "/categories/home-appliances.jpg",
    slug: "home-appliances",
  },
  {
    name: "Smart Gadgets",
    description: "Smart home devices, wearables, and innovative tech gadgets",
    image: "/categories/smart-gadgets.jpg",
    slug: "smart-gadgets",
  },
  {
    name: "E-Scooters & E-Bikes",
    description: "Electric scooters, e-bikes, and personal mobility solutions",
    image: "/categories/e-mobility.jpg",
    slug: "e-scooters-e-bikes",
  },
  {
    name: "Acoustic Systems",
    description:
      "Premium speakers, soundbars, home theater systems, and audio equipment",
    image: "/categories/acoustic.jpg",
    slug: "acoustic-systems",
  },
  {
    name: "Backup Power Supplies",
    description: "UPS systems, power banks, and backup power solutions",
    image: "/categories/power-supplies.jpg",
    slug: "backup-power",
  },
  {
    name: "Office Equipment",
    description:
      "Printers, scanners, projectors, and professional office technology",
    image: "/categories/office.jpg",
    slug: "office-equipment",
  },
];

export async function main() {
  console.log("Start seeding...");

  // Seed Categories
  for (const category of categoryData) {
    const existingCategory = await prisma.category.findFirst({
      where: { slug: category.slug },
    });

    if (!existingCategory) {
      await prisma.category.create({ data: category });
      console.log(`Created category: ${category.name}`);
    } else {
      console.log(`Category already exists: ${category.name}`);
    }
  }

  console.log("Seeding finished.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
