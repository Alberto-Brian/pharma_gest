import prisma from '../../../src/utils/prisma';
import connect from "../Services/Connect";
import { hashPassword } from "../../../src/utils/bcrypt";

const db = prisma.user;



export default async function seed(): Promise<Object[]> {
        const seed_data = [
            {
                username: "John McCurvey",
                email: "curvey@gmail.com",
                password: hashPassword("john"),
                address: 'Sambizanga',
                phone: "932-986-567",
                birthdate: new Date('2000-09-24'),
                gender: "Masculino",
                avatar: 'default avatar',

            },

            {
                username: "Tomé Da Silva",
                email: "silva@gmail.com",
                password: hashPassword("tome"),
                address: 'Talatona',
                phone: "934-777-609",
                birthdate: new Date('1999-02-02'),
                gender: "Masculino",
                avatar: 'default avatar',
            },

            {
                username: "Jessé Santos",
                email: "santos@gmail.com",
                password: hashPassword("santos"),
                address: 'Projecto nova vida',
                phone: "922-645-005",
                birthdate: new Date('1980-09-30'),
                gender: "Masculino",
                avatar: 'default avatar',
            },

            {
                username: "Maravilha da Luz Cordeiro",
                email: "cordeiroluz@gmail.com",
                password: hashPassword("luz"),
                address: 'Sambizanga',
                phone: "942-2480-570",
                birthdate: new Date('2001-12-12'),
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
                address: 'Calemba II',
                phone: "911-923-521",
                birthdate: new Date(),
                gender: "Feminino",
                avatar: 'default avatar',
            }
        ]
    
    await db.createMany({ data: seed_data })

    const user = await prisma.user.findMany();
    const pharmacies = await prisma.pharmacy.findMany();
    const nationalities = await prisma.nationality.findMany();
    const social_networks = await prisma.social_networks.findMany();


    /* Relational connections*/
    connect(user, pharmacies, db);
    // connect(user, nationalities, db);
    // connect(user, social_networks, db);

    const  user_ = await db.findMany({ select: { id: true} });
    return user_;
}