import prisma from "../../../src/utils/prisma";
const db = prisma.nationality;
export default async function seed(): Promise<Object[]> {
    await db.createMany({
        data: [
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
    })

    const  nationalities = await db.findMany({ select: { id: true } });
    return nationalities;
}