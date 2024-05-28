import prisma from "../../../src/utils/prisma";
import seed_service from '../Services/Selection';

const db = prisma.social_networks;

export default async function seed(first_time: boolean = false): Promise<Object[] | void>{
        const seed_data = [
            {
                name: 'Facebook',
                description: 'the most popular social network' 
            },

            {
                name: 'YouTube',
                description: ''
            },

            {
                name: 'Instagram',
                description: ''
            }, 

            {
                name: 'Whatsaap',
                description: ''
            },

            {
                name: 'Tiktok',
                description: ''
            },

            {
                name: 'Twitter',
                description: ''
            },

            {
                name: 'Yhaoo',
                description: ''
            },

            {
                name: 'Github',
                description: ''
            }
        ]

    if(first_time) await db.createMany({ data: seed_data });
    if(!first_time){ const busineess_man_seed = seed_service(db, seed_data);}

    const  social_networks = await db.findMany({ select: { id: true } });
    
    if(first_time)
    return social_networks;
}