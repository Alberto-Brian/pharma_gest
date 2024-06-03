import prisma from "../../../../src/utils/prisma";

export default async function reset(db?: any, data?: Object[]): Promise<void> {
    await prisma.product.deleteMany({});
    await prisma.business_man.deleteMany({});
    await prisma.pharmacy.deleteMany({});
    await prisma.category.deleteMany({});
    await prisma.nationality.deleteMany({});
    await prisma.social_networks.deleteMany({});
    await prisma.employee.deleteMany({});
    await prisma.user.deleteMany({});

    // console.log('aqui...')
    // if(data && db){
    //     for(const instance of data ){
    //         console.log(Object.values(instance)[0])
    //         // await db.delete({
    //         //     where: { id: Object.values(instance)[0].id }
    //         // })
    //     }
    // }

}