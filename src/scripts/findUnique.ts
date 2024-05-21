import { PrismaClient,  Prisma } from "@prisma/client";

const prisma = new PrismaClient;

async function main(){
   const user = await prisma.user.findUnique({
    where: {
        id: 'ceb121f9-ad42-41d1-894a-d8b2b7874dca'
    }
   })
   console.log(user);
}
main()
    .then(async () => {
        await prisma.$connect()
    } ) 
    .catch(async (error) => {
        console.log(error);
        await prisma.$disconnect()
        process.exit(1);
    } )