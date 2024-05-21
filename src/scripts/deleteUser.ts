import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main(){
 const deletedUser = await prisma.user.delete({
  where: {
    id: 'b5639f11-7c9e-4727-bd8c-bc16595dc3b4',
  }
 })
 console.log(deletedUser);
}

main()
  .then(async () => {
    await prisma.$connect();
  }).catch(async error => {
    console.log(error);
    await prisma.$disconnect();
    process.exit(1);
  })
