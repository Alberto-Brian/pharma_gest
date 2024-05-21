import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main(){
  const users = await prisma.user.findMany(
    {
      where: {
      OR:[
        {
          email: {
            startsWith: 'I',
          }
        }, 
        {
            AND: {
            username: {
              equals: 'BRIAN'
            }, 
            password: {
              equals: 'brian'
            },
          },
        },
      ],
    },
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
