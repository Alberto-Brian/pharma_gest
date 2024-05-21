import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main(){
  const userCreated = await prisma.user.create({
    data: {
      username: 'Test',
      email: 'test@gmail.com',
      password: 'test'
    }
  })

  console.log(userCreated);
}

main()
  .then(async () => {
    await prisma.$connect();
  }).catch(async error => {
    console.log(error);
    await prisma.$disconnect();
    process.exit(1);
  })
