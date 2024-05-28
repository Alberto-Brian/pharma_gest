import { Category } from '@prisma/client';
import ICategory from '../../../src/interfaces/ICategory';
import prisma from '../../../src/utils/prisma'
import seed_service from '../Services/Selection';

const db = prisma.category;
export default async function seed(first_time: boolean = false): Promise<Object[]> {
    const seed_data = [
        {
            name: 'first category',
            description: 'Starting my first category '
        },

        {
            name: 'second category',
            description: 'Starting my second category '
        },

        {
            name: 'third category',
            description: 'Starting my third category '
        },

        {
            name: 'fourth category',
            description: 'Starting my fourth category '
        }
    ]


    if(first_time) await db.createMany({ data: seed_data });
    if(!first_time){ const busineess_man_seed = seed_service(db, seed_data);}


    const  categories = await db.findMany({ select: { id: true } });

    return categories;
}
