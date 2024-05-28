import prisma from "../../../../src/utils/prisma";

export default async function reset(): Promise<void> {
    await prisma.product.deleteMany({});
    await prisma.business_man.deleteMany({});
    await prisma.pharmacy.deleteMany({});
    await prisma.category.deleteMany({});
    await prisma.nationality.deleteMany({});
    await prisma.social_networks.deleteMany({});
}