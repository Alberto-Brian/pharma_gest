import prisma from '../../../src/utils/prisma';
import random from '../Services/Random'
const db = prisma.pharmacy;
export default async function seed(): Promise<Object[]> {
     await db.createMany({
        data: [
            {
                name: 'Mypharma',
                email: 'mypharam.geral@gmail.com',
                banking_account: '0040-0000-2384-9876-1019-1',
                info: 'default info',
                phone: '923-345-984',
                address: 'Viana/Capalanga',
                doc: 'default doc'
            },
 
            {
                name: 'Sellmed',
                email: 'sellmed.enterprise@hotmail.com',
                banking_account: '0055-0000-2984-3876-1019-2',
                info: 'default info',
                phone: '900-232-990',
                address: 'Belas/Talatona',
                doc: 'default doc'
            }, 

            {
                name: 'Medison',
                email: 'medison.geral@gmail.com',
                banking_account: '0020-0006-0584-9376-1019-3',
                info: 'default info',
                phone: '933-543-904',
                address: 'Viana/Bela vista',
                doc: 'default doc'
            },

            {
                name: 'Sunshine',
                email: 'sunshine.behealth@gmail.com',
                banking_account: '0007-0000-2904-9865-1019-4',
                info: 'default info',
                phone: '911-900-984',
                address: 'Cazenga/Rangel',
                doc: 'default doc'
            },

            {
                name: 'BeHealthy',
                email: 'gehealthy.sun@gmail.com',
                banking_account: '0060-0880-4484-9876-1015-5',
                info: 'default info',
                phone: '923-345-984',
                address: 'Viana/Capalanga',
                doc: 'default doc'
            },

            {
                name: 'Savelife',
                email: 'life.save@gmail.com',
                banking_account: '0060-0880-4484-9876-1015-5',
                info: 'default info',
                phone: '923-345-984',
                address: 'Viana/Luanda sul',
                doc: 'default doc'
            },

            {
                name: 'PriorityHealth',
                email: 'prihealthy.go@gmail.com',
                banking_account: '0060-0880-4484-9876-1015-5',
                info: 'default info',
                phone: '923-345-984',
                address: 'Cazenga/Hoyi-a-Henda',
                doc: 'default doc'
            },
        ]
     })

    const  pharmacies = await db.findMany({ 
        select: { id: true},
        // where: {created_at: new Date()} 
    });
    return pharmacies;
}