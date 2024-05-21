import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main(){
 const updatedUser = await prisma.user.updateMany({
  where: {
    email: {
      contains: '@gmail.com'
    }
  }, 
  data: {
    // role: 'ADMIN'
  }
 })
 console.log(updatedUser);
}

main()
  .then(async () => {
    await prisma.$connect();
  }).catch(async error => {
    console.log(error);
    await prisma.$disconnect();
    process.exit(1);
  })
