import prisma from "../../../src/utils/prisma";
const db = prisma.nationality;
import seed_service from '../Services/Selection';

export default async function seed(first_time: boolean = false): Promise<Object[] | void> {
        const seed_data = [
            {
                name: 'Angola',
                description: ''
            },

            {
                name: 'Moçambique',
                description: ''
            },

            {
                name: 'República Democrática do Congo',
                description: ''
            },

            {
                name: 'Zâmbia',
                description: ''
            },

            {
                name: 'Namíbia',
                description: ''
            },

            {
                name: 'Cabo verde',
                description: ''
            },

            {
                name: 'Zimbabwe',
                description: ''
            },

            {
                name: 'São Tomé e Príncipe',
                description: ''
            },

            {
                name: 'Marrocos',
                description: ''
            },

            {
                name: 'Senagal',
                description: ''
            },

            {
                name: 'Gana',
                description: ''
            },

            {
                name: 'Etiópia',
                description: ''
            },

            {
                name: 'Mali',
                description: ''
            },
            {
                name: 'Nigéria',
                description: ''
            },
            {
                name: 'Malawi',
                description: ''
            },

            {
                name: 'Guiné Bissau',
                description: ''
            },

            {
                name: 'República do Kongo',
                description: ''
            },

            {
                name: 'Somália',
                description: ''
            },


        ]


    if(first_time) await db.createMany({ data: seed_data });
    if(!first_time){ const busineess_man_seed = seed_service(db, seed_data);}

    const  nationalities = await db.findMany({ select: { id: true } });
    
    if(first_time)
    return nationalities;
}