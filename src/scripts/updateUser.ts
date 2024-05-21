import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main(){
 const updatedUser = await prisma.user.update({
  where: {
    id: '289fcad6-ea53-40e6-8d58-16cdb7345efa',
  }, 
  data: {
    email: 'alfredo@gmail.com',
    username: 'Alfredo Massanza', 
    password: 'Alfredo'
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
