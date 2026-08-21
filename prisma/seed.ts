import "dotenv/config";
import { hash } from "bcryptjs";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const db = new PrismaClient({ adapter });

const CATEGORIES = [
  "Clothing",
  "Shoes",
  "Watches",
  "Jewellery",
  "Bags",
  "Furniture",
  "Home Decor",
  "Leather Products",
];

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

async function seedAdmin() {
  const email = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD;

  if (!email || !password) {
    throw new Error("ADMIN_EMAIL and ADMIN_PASSWORD must be set in .env");
  }

  if (password.length < 12) {
    throw new Error("ADMIN_PASSWORD must be at least 12 characters");
  }

  const passwordHash = await hash(password, 12);

  const admin = await db.user.upsert({
    where: { email },
    update: { passwordHash, roles: ["ADMIN"] },
    create: {
      email,
      name: "Platform Admin",
      passwordHash,
      roles: ["ADMIN"],
      emailVerified: new Date(),
    },
  });

  console.log(`✅ admin ready: ${admin.email}`);
}

async function seedCategories() {
  for (const name of CATEGORIES) {
    await db.category.upsert({
      where: { slug: slugify(name) },
      update: {},
      create: { name, slug: slugify(name) },
    });
  }

  console.log(`✅ ${CATEGORIES.length} categories ready`);
}

async function main() {
  await seedAdmin();
  await seedCategories();
}

main()
  .catch((error) => {
    console.error("❌ seed failed:", error);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
