import prisma from '../../../src/utils/prisma'
import random_ids from '../Services/Random';
const db = prisma.product;
export default async function seed(pharmacies: Object[], categories: Object[]): Promise<Object[]>{
    await db.createMany({
        data:[
            {
                name: 'Paracetamol',
                price: 459.90,
                description: 'default description',
                id_pharmacy: random_ids(pharmacies),
                id_category: random_ids(categories),
                image: 'default image'
            },

            {
                name: 'Ibucap',
                price: 229.15,
                description: 'default description',
                id_pharmacy: random_ids(pharmacies),
                id_category: random_ids(categories),
                image: 'default image'
            },

            {
                name: 'Amoxy',
                price: 250.10,
                description: 'default description',
                id_pharmacy: random_ids(pharmacies),
                id_category: random_ids(categories),
                image: 'default image'
            },

            {
                name: 'Coartem',
                price: 1000.00,
                description: 'default description',
                id_pharmacy: random_ids(pharmacies),
                id_category: random_ids(categories),
                image: 'default image'
            },

            {
                name: 'Artemeter',
                price: 500.30,
                description: 'default description',
                id_pharmacy: random_ids(pharmacies),
                id_category: random_ids(categories),
                image: 'default image'
            },

            {
                name: 'Seringa',
                price: 100.00,
                description: 'default description',
                id_pharmacy: random_ids(pharmacies),
                id_category: random_ids(categories),
                image: 'default image'
            },

            {
                name: 'Relief',
                price: 200.00,
                description: 'default description',
                id_pharmacy: random_ids(pharmacies),
                id_category: random_ids(categories),
                image: 'default image'
            },
            
            {
                name: 'Ibuprofeno',
                price: 100.00,
                description: 'default description',
                id_pharmacy: random_ids(pharmacies),
                id_category: random_ids(categories),
                image: 'default image'
            },

            {
                name: 'Dipirona',
                price: 150.00,
                description: 'default description',
                id_pharmacy: random_ids(pharmacies),
                id_category: random_ids(categories),
                image: 'default image'
            },

            {
                name: 'Shaldex',
                price: 500.00,
                description: 'default description',
                id_pharmacy: random_ids(pharmacies),
                id_category: random_ids(categories),
                image: 'default image'
            },

            {
                name: 'Gotas nasais',
                price: 250.00,
                description: 'default description',
                id_pharmacy: random_ids(pharmacies),
                id_category: random_ids(categories),
                image: 'default image'
            },
            
            {
                name: 'Metazol',
                price: 750.00,
                description: 'default description',
                id_pharmacy: random_ids(pharmacies),
                id_category: random_ids(categories),
                image: 'default image'
            },

            {
                name: 'Ketazol comprimido',
                price: 300.00,
                description: 'default description',
                id_pharmacy: random_ids(pharmacies),
                id_category: random_ids(categories),
                image: 'default image'
            },

            {
                name: 'Ketazol pomada',
                price: 250.00,
                description: 'default description',
                id_pharmacy: random_ids(pharmacies),
                id_category: random_ids(categories),
                image: 'default image'
            },

            {
                name: 'Azaq',
                price: 1000.00,
                description: 'default description',
                id_pharmacy: random_ids(pharmacies),
                id_category: random_ids(categories),
                image: 'default image'
            },

            {
                name: 'Vitamina C',
                price: 300.00,
                description: 'default description',
                id_pharmacy: random_ids(pharmacies),
                id_category: random_ids(categories),
                image: 'default image'
            },

        ]
    })


    const  products_id = await db.findMany({ 
        select: { id: true},
        // where: {created_at: new Date()} 
    });
    return products_id;
}