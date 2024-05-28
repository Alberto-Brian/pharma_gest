import prisma from '../../../src/utils/prisma'
import random_ids from '../Services/Random';
const db = prisma.product;
export default async function seed(pharmacies: Object[], categories: Object[]): Promise<Object[]>{
    await db.createMany({
        data:[
            {
                name: 'Paracetamol',
                price: 459.900,
                description: 'default description',
                id_pharmacy: random_ids(pharmacies),
                id_category: random_ids(categories),
                image: 'default image'
            },

            {
                name: 'Ibucap',
                price: 229.100,
                description: 'default description',
                id_pharmacy: random_ids(pharmacies),
                id_category: random_ids(categories),
                image: 'default image'
            }
        ]
    })


    const  products_id = await db.findMany({ 
        select: { id: true},
        // where: {created_at: new Date()} 
    });
    return products_id;
}