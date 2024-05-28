import prisma from "../../../src/utils/prisma"
import { hasPassword } from "../../../src/utils/bcrypt";
import connect from "../Services/Connect";

const db = prisma.business_man;
export default async function seed(): Promise<void>{
    await db.createMany({
        data: [
            { 
                username: 'Alberto Brian',
                email: 'albertobrian@gmail.com',
                password: hasPassword('brian'),
                address: 'Viana/Capalanga',
                phone: '932047303',
                birthdate: new Date('2020-10-10'),
                gender: 'Masculino',
            },

            { 
                username: 'Alfredo Massanza',
                email: 'alfredonsoki@gmail.com',
                password: hasPassword('freddy'),
                address: 'Nóqui/sede',
                phone: '932847333',
                birthdate: new Date('2020-10-10'),
                gender: 'Masculino'

            }, 

            { 
                username: 'Filipe João',
                email: 'filipe@gmail.com',
                password: hasPassword('filipe'),
                address: 'Luanda Sul',
                phone: '932847333',
                birthdate: new Date('2020-10-10'),
                gender: 'Masculino'

            },

            { 
                username: 'Celestina Amélia',
                email: 'celestina@gmail.com',
                password: hasPassword('amelia'),
                address: 'Vila de Viana',
                phone: '938484422',
                birthdate: new Date('1999-02-02'),
                gender: 'Feminino'

            },

            { 
                username: 'Domingos César Manguxi',
                email: 'manguxi@gmail.com',
                password: hasPassword('manguxi'),
                address: 'Vila Alice',
                phone: '985689345',
                birthdate: new Date('1978-03-12'),
                gender: 'Masculino'

            },

            { 
                username: 'Henique José de Almeida',
                email: 'henriquejose@gmail.com',
                password: hasPassword('henrique'),
                address: 'Talatona',
                phone: '938547333',
                birthdate: new Date('2001-12-30'),
                gender: 'Masculino'

            },

            { 
                username: 'Albertina Jéssica Makiesse',
                email: 'albertina@gmail.com',
                password: hasPassword('amelia'),
                address: 'Projecto nova vida',
                phone: '945843744',
                birthdate: new Date('1993-10-10'),
                gender: 'Feminino',

            },

        ]
    })



    const business_man = await prisma.business_man.findMany();
    const pharmacies = await prisma.pharmacy.findMany();

    /* Relational connections*/
    connect(business_man, pharmacies, db, true);
    // connect();

}