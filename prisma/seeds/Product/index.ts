import prisma from '../../../src/utils/prisma'
import random_ids from '../Services/Random';
import seed_service from '../Services/Selection';
const db = prisma.product;
export default async function seed(pharmacies: Object[], categories: Object[], first_time: boolean = false): Promise<Object[] | void>{
        const seed_data = [
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



        if(first_time) await db.createMany({ data: seed_data });
        if(!first_time){ const busineess_man_seed = seed_service(db, seed_data);}

    const  products_id = await db.findMany({ 
        select: { id: true},
        // where: {created_at: new Date()} 
    });

    if(first_time)
    return products_id;
}