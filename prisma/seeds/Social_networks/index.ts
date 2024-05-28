import prisma from "../../../src/utils/prisma";

const db = prisma.social_networks;

export default async function seed(): Promise<Object[]>{
    await db.createMany({
        data: [
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
    })

    const  social_networks = await db.findMany({ select: { id: true } });
    return social_networks;
}