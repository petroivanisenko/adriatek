import prisma from "../lib/prisma";

async function main() {
  const products = await prisma.product.findMany();

  for (const product of products) {
    await prisma.product.update({
      where: { id: product.id },
      data: {
        rating: Math.random() * 2 + 3,
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
