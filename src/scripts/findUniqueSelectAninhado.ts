import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main(){
  const users = await prisma.user.findMany(
    {
      where: {
        email: {
          startsWith: 'brian'
        }
      },
        select: {
          email: true,
          posts: {
            select: {
              title: true,
              id: false
            }
          }
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
