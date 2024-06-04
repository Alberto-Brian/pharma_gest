import prisma from '../../../src/utils/prisma';
import random from '../Services/Random';
import { hashPassword } from "../../../src/utils/bcrypt";

const db = prisma.employee;
import connect from "../Services/Connect";



export default async function seed(): Promise<Object[]> {
        const seed_data = [
            {
                username: "António Domingos Júnior",
                email: "domingos@gmail.com",
                password: hashPassword("domi"),
                address: 'Sambizanga',
                phone: "932-986-567",
                birthdate: new Date(),
                gender: "Masculino",
                avatar: 'default avatar',

            },

            {
                username: "Anselmo Da Silva Jota",
                email: "anselmo@gmail.com",
                password: hashPassword("anselmo"),
                address: 'Talatona',
                phone: "934-777-609",
                birthdate: new Date(),
                gender: "Masculino",
                avatar: 'default avatar',
            },

            {
                username: "Tânia Francisca Domingos",
                email: "taniadomingos@gmail.com",
                password: hashPassword("tania"),
                address: 'Projecto nova vida',
                phone: "922-645-005",
                birthdate: new Date(),
                gender: "Feminino",
                avatar: 'default avatar',
            },

            {
                username: "Elisandra Beatriz Matos",
                email: "beatriz@gmail.com",
                password: hashPassword("domi"),
                address: 'Luanda Sul',
                phone: "942-2480-570",
                birthdate: new Date(),
                gender: "Feminino",
                avatar: 'default avatar',
            },
            {
                username: "Bernadeth José Emiliana",
                email: "emiliana@gmail.com",
                password: hashPassword("emmy"),
                address: 'Sambizanga',
                phone: "945-126-639",
                birthdate: new Date(),
                gender: "Feminino",
                avatar: 'default avatar',
            },

            {
                username: "Edvânia Cristina dos Santos",
                email: "cristina@gmail.com",
                password: hashPassword("edvania"),
                address: 'Calemba II',
                phone: "911-945-511",
                birthdate: new Date(),
                gender: "Feminino",
                avatar: 'default avatar',
            },

            {
                username: "Jeovánia Josefa Joana",
                email: "jjj3@gmail.com",
                password: hashPassword("jjj"),
                address: '1º de Maio',
                phone: "911-923-521",
                birthdate: new Date(),
                gender: "Feminino",
                avatar: 'default avatar',
            }
        ]
    
    await db.createMany({ data: seed_data })

    const employee = await prisma.employee.findMany();
    const pharmacies = await prisma.pharmacy.findMany();
    const nationalities = await prisma.nationality.findMany();
    const social_networks = await prisma.social_networks.findMany();


    /* Relational connections*/
    connect(employee, pharmacies, db);
    // connect(employee, nationalities, db);
    // connect(employee, social_networks, db);

    const  employee_ = await db.findMany({ select: { id: true} });
    return employee_;
}