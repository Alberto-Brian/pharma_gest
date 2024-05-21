import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main(){
  const users = await prisma.user.findMany(
    {
      where: {
        email: {
          startsWith: 'valencia'
        }
      },
        select: {
          username: true,
          email: true,
          password: false
        }
   }
  )
  console.log(users);
}

main()
  .then(async () => {
    await prisma.$connect();
  }).catch(async error => {
    console.log(error);
    await prisma.$disconnect();
    process.exit(1);
  })
