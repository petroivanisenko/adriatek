import prisma from "@/lib/prisma";

const categoryData = [
  {
    name: "Computers & Peripherals",
    description: "High-end workstations and professional displays.",
    image:
      "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&q=80&w=800",
    slug: "computers-peripherals",
  },
  {
    name: "Laptops & All-in-One Computers",
    description: "Premium ultrabooks and professional mobile workstations.",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=800",
    slug: "laptops-all-in-one",
  },
  {
    name: "Gaming Gadgets & Equipment",
    description: "Ultimate gaming rigs and professional accessories.",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800",
    slug: "gaming-gadgets",
  },
  {
    name: "Televisions",
    description: "State-of-the-art OLED and QLED cinematic displays.",
    image:
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&q=80&w=800",
    slug: "televisions",
  },
  {
    name: "Home Appliances",
    description: "Smart premium household technology.",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
    slug: "home-appliances",
  },
  {
    name: "Smart Gadgets",
    description: "Advanced wearable and home automation tech.",
    image:
      "https://images.unsplash.com/photo-1558089687-f282ffcbc126?auto=format&fit=crop&q=80&w=800",
    slug: "smart-gadgets",
  },
  {
    name: "E-Scooters & E-Bikes",
    description: "Premium electric mobility solutions.",
    image:
      "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=800",
    slug: "e-scooters-e-bikes",
  },
  {
    name: "Acoustic Systems",
    description: "Audiophile-grade sound systems and headphones.",
    image:
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80&w=800",
    slug: "acoustic-systems",
  },
  {
    name: "Backup Power Supplies",
    description: "Industrial-grade energy storage and UPS systems.",
    image:
      "https://images.unsplash.com/photo-1620288627223-53302f4e8c70?auto=format&fit=crop&q=80&w=800",
    slug: "backup-power",
  },
  {
    name: "Office Equipment",
    description: "Next-generation professional office technology.",
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=800",
    slug: "office-equipment",
  },
];

const productData = [
  // Laptops & All-in-One Computers
  {
    name: "Microsoft Surface Laptop Studio 2",
    description:
      "Intel Core i7, 32GB RAM, 1TB SSD, RTX 4060. The ultimate creative workstation with a flexible hinge design.",
    price: 2899.45,
    image:
      "https://images.unsplash.com/photo-1661961111184-112730500f15?auto=format&fit=crop&q=80&w=800",
    categorySlug: "laptops-all-in-one",
    inStock: true,
    rating: 4.8,
    discount: 0,
  },
  {
    name: "Razer Blade 16 (2024)",
    description:
      "Intel i9-14900HX, RTX 4090, 32GB RAM, 2TB SSD, 4K Dual Mini-LED. The pinnacle of gaming performance.",
    price: 4599.95,
    image:
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&q=80&w=800",
    categorySlug: "laptops-all-in-one",
    inStock: true,
    rating: 4.9,
    discount: 5,
  },
  {
    name: "MSI Titan GT77 HX",
    description:
      "Desktop replacement with i9-13980HX and RTX 4090. Maximum performance for heavy computations.",
    price: 5299.8,
    image:
      "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&q=80&w=800",
    categorySlug: "laptops-all-in-one",
    inStock: true,
    rating: 4.7,
    discount: 0,
  },
  {
    name: "Acer Predator Helios 18",
    description:
      "i9-14900HX, RTX 4090, 64GB RAM, 4TB RAID SSD. Massive 18-inch display.",
    price: 3950.25,
    image:
      "https://images.unsplash.com/photo-1593642634367-d91a135587b5?auto=format&fit=crop&q=80&w=800",
    categorySlug: "laptops-all-in-one",
    inStock: true,
    rating: 4.8,
    discount: 0,
  },
  // Computers & Peripherals
  {
    name: "Samsung Odyssey Neo G9",
    description:
      "57-inch Dual UHD Mini-LED gaming monitor. Unmatched immersion with 1000R curvature.",
    price: 2499.99,
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=800",
    categorySlug: "computers-peripherals",
    inStock: true,
    rating: 4.9,
    discount: 10,
  },
  {
    name: "ASUS ProArt Station PD5",
    description:
      "Professional workstation for creators. i9-13900, 64GB RAM, RTX 4070. ISV certified.",
    price: 3199.15,
    image:
      "https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&q=80&w=800",
    categorySlug: "computers-peripherals",
    inStock: true,
    rating: 4.6,
    discount: 0,
  },
  {
    name: "NVIDIA GeForce RTX 4090 Founders Edition",
    description:
      "The ultimate graphics card. 24GB G6X memory, DLSS 3.5, and Ada Lovelace architecture.",
    price: 2150.4,
    image:
      "https://images.unsplash.com/photo-1610465299993-e6675c9f9efa?auto=format&fit=crop&q=80&w=800",
    categorySlug: "computers-peripherals",
    inStock: true,
    rating: 5.0,
    discount: 0,
  },
  {
    name: "Threadripper PRO 7995WX Workstation",
    description:
      "96 cores, 192 threads, 256GB RAM, Dual RTX 6000 Ada. Ultimate compute power.",
    price: 6995.5,
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=800",
    categorySlug: "computers-peripherals",
    inStock: true,
    rating: 5.0,
    discount: 0,
  },
  // Gaming Gadgets & Equipment
  {
    name: "Professional Sim Racing Rig Ultra",
    description:
      "Direct drive wheelbase, hydraulic pedals, carbon fiber seat, triple 4K monitors. Professional grade simulation.",
    price: 6850.75,
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800",
    categorySlug: "gaming-gadgets",
    inStock: true,
    rating: 5.0,
    discount: 0,
  },
  {
    name: "Varjo XR-4 Focal Edition",
    description:
      "Highest resolution mixed reality headset. Professional-grade optics and tracking.",
    price: 4250.9,
    image:
      "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&q=80&w=800",
    categorySlug: "gaming-gadgets",
    inStock: true,
    rating: 4.9,
    discount: 0,
  },
  // Televisions
  {
    name: 'LG SIGNATURE OLED M3 77"',
    description:
      "World'sแรก Wireless OLED TV. 4K 120Hz Zero Connect system for clean installation.",
    price: 4999.25,
    image:
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&q=80&w=800",
    categorySlug: "televisions",
    inStock: true,
    rating: 4.9,
    discount: 0,
  },
  {
    name: 'Sony BRAVIA XR A95L 85"',
    description:
      "Flagship QD-OLED 4K HDR TV with Google TV and XR Processor for unmatched realism.",
    price: 5499.55,
    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800",
    categorySlug: "televisions",
    inStock: true,
    rating: 4.8,
    discount: 0,
  },
  {
    name: "Samsung Odyssey OLED G9",
    description:
      "49-inch Dual QHD OLED with 0.03ms response time and 240Hz refresh rate.",
    price: 1850.45,
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=800",
    categorySlug: "televisions",
    inStock: true,
    rating: 4.9,
    discount: 0,
  },
  // Acoustic Systems
  {
    name: "Devialet Phantom I 108 dB (Pair)",
    description:
      "Audiophile-grade wireless speakers. 2200W Peak power. Zero distortion, zero saturation.",
    price: 6200.35,
    image:
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80&w=800",
    categorySlug: "acoustic-systems",
    inStock: true,
    rating: 5.0,
    discount: 0,
  },
  {
    name: "Sennheiser HE 1 Orpheus",
    description:
      "The world's best headphones. Electrostatic system with valve amplifier on Carrara marble base.",
    price: 6950.5,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800",
    categorySlug: "acoustic-systems",
    inStock: true,
    rating: 5.0,
    discount: 0,
  },
  {
    name: "Beolab 50 High-End Speaker",
    description:
      "Active loudspeaker with acoustic lens technology and adaptive room compensation.",
    price: 4750.85,
    image:
      "https://images.unsplash.com/photo-1589129140230-179bfc885579?auto=format&fit=crop&q=80&w=800",
    categorySlug: "acoustic-systems",
    inStock: true,
    rating: 4.9,
    discount: 0,
  },
  // Backup Power Supplies
  {
    name: "EcoFlow Delta Pro Home Ecosystem",
    description:
      "Portable power station with additional batteries and smart panel. 7.2kWh capacity for home backup.",
    price: 4299.1,
    image:
      "https://images.unsplash.com/photo-1620288627223-53302f4e8c70?auto=format&fit=crop&q=80&w=800",
    categorySlug: "backup-power",
    inStock: true,
    rating: 4.8,
    discount: 5,
  },
  {
    name: "Tesla Powerwall 3 (Simulated)",
    description:
      "Next-gen solar battery storage system with integrated solar inverter. 13.5kWh capacity.",
    price: 6850.2,
    image:
      "https://images.unsplash.com/photo-1620288627223-53302f4e8c70?auto=format&fit=crop&q=80&w=800",
    categorySlug: "backup-power",
    inStock: true,
    rating: 5.0,
    discount: 0,
  },
  // E-Scooters & E-Bikes
  {
    name: "Dualtron X Limited",
    description:
      "High-performance electric scooter. 84V 60Ah battery, 100km/h top speed. Hydraulic suspension.",
    price: 6499.45,
    image:
      "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=800",
    categorySlug: "e-scooters-e-bikes",
    inStock: true,
    rating: 4.9,
    discount: 0,
  },
  {
    name: "Specialized Turbo Vado 5.0",
    description:
      "Professional electric commuter bike. Integrated 710Wh battery, Garmin Radar integration.",
    price: 5250.75,
    image:
      "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=800",
    categorySlug: "e-scooters-e-bikes",
    inStock: true,
    rating: 4.8,
    discount: 0,
  },
  // Home Appliances
  {
    name: "De'Longhi PrimaDonna Elite Experience",
    description:
      "Smart whole bean-to-cup coffee machine with chocolate function and app control.",
    price: 2150.95,
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
    categorySlug: "home-appliances",
    inStock: true,
    rating: 4.9,
    discount: 10,
  },
  {
    name: "Miele G 7975 SCVi XXL",
    description:
      "Premium fully integrated dishwasher with AutoDos and PowerDisk. World-first technology.",
    price: 2850.4,
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
    categorySlug: "home-appliances",
    inStock: true,
    rating: 4.8,
    discount: 0,
  },
  // Smart Gadgets
  {
    name: "Fenix 7X Pro Sapphire Solar",
    description:
      "High-performance multisport GPS watch with built-in LED flashlight and solar charging.",
    price: 1050.5,
    image:
      "https://images.unsplash.com/photo-1558089687-f282ffcbc126?auto=format&fit=crop&q=80&w=800",
    categorySlug: "smart-gadgets",
    inStock: true,
    rating: 4.9,
    discount: 0,
  },
  {
    name: "Oura Ring Gen3 Horizon Gold",
    description:
      "Advanced health tracking wearable. Monitors sleep, readiness, and activity in style.",
    price: 1050.99,
    image:
      "https://images.unsplash.com/photo-1558089687-f282ffcbc126?auto=format&fit=crop&q=80&w=800",
    categorySlug: "smart-gadgets",
    inStock: true,
    rating: 4.7,
    discount: 0,
  },
  // Office Equipment
  {
    name: "Herman Miller Embody Gaming Chair",
    description:
      "Professional ergonomic workstation seating designed for ultimate comfort and support.",
    price: 1850.45,
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=800",
    categorySlug: "office-equipment",
    inStock: true,
    rating: 4.9,
    discount: 0,
  },
  {
    name: 'Smart Board 7000 Pro Series 86"',
    description:
      "Professional 4K interactive display for corporate environments with iQ technology.",
    price: 5850.6,
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=800",
    categorySlug: "office-equipment",
    inStock: true,
    rating: 4.8,
    discount: 0,
  },
];

export async function main() {
  console.log("Start seeding...");

  // Clear existing products to avoid conflicts and satisfy reset requirement
  await prisma.comment.deleteMany();
  await prisma.orderItem.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();

  // Seed Categories
  const categories = [];
  for (const cat of categoryData) {
    const category = await prisma.category.create({
      data: cat,
    });
    categories.push(category);
    console.log(`Created category: ${category.name}`);
  }

  // Seed Products
  for (const prod of productData) {
    const category = categories.find((c) => c.slug === prod.categorySlug);
    if (category) {
      await prisma.product.create({
        data: {
          name: prod.name,
          description: prod.description,
          price: prod.price,
          image: prod.image,
          categoryId: category.id,
          inStock: prod.inStock,
          rating: prod.rating,
          discount: prod.discount,
        },
      });
      console.log(`Created product: ${prod.name}`);
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
