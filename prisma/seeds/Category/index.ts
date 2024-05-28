import { Category } from '@prisma/client';
import ICategory from '../../../src/interfaces/ICategory';
import prisma from '../../../src/utils/prisma'

const db = prisma.category;
export default async function seed(): Promise<Object[]> {
    await db.createMany({
        data: [
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
    })

    const  categories = await db.findMany({ select: { id: true } });
    return categories;
}
