import prisma from "../src/utils/prisma";

async function main(){
    await prisma.business_man.createMany({
        data: [
            { 
                username: 'Filipe João',
                email: 'filipe@gmail.com',
                password: 'filipe',
                address: 'Luanda Sul',
                phone: '932847333',
                birthdate: new Date('2020-10-10'),
                gender: 'Masculino'

            },

            { 
                username: 'Celestina Amélia',
                email: 'celestina@gmail.com',
                password: 'amelia',
                address: 'Vila de Viana',
                phone: '938484422',
                birthdate: new Date('1999-02-02'),
                gender: 'Feminino'

            },

        ]
    })
}

main() 
    .then(async () => {
        await prisma.$connect();
        console.log("executado com sucesso!!")
    })
    .catch(async (error: any) => {
        console.log(error);
        await prisma.$disconnect();
        process.exit(1);
    })