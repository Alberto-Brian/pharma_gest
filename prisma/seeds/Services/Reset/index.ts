import prisma from "../../../../src/utils/prisma";

export default async function reset(db: any, data: Object[]): Promise<void> {
    // await prisma.product.deleteMany({});
    // await prisma.business_man.deleteMany({});
    // await prisma.pharmacy.deleteMany({});
    // await prisma.category.deleteMany({});
    // await prisma.nationality.deleteMany({});
    // 
    console.log('aqui')
        for(const instance of data ){
            Object.values(instance)[0] && console.log(Object.values(instance)[0])
            await db.delete({
                where: { id: Object.values(instance)[0] }
            })
            console.log(instance);

        }
}