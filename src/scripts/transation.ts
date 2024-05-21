import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main(){
 
 const deletePosts = await prisma.post.deleteMany({
   where: {
    authorId: '7c23319d-1bf1-4684-a276-4ad4857f89a7',
   },
 })
 
  const deleteUser = await prisma.user.delete({
  where: {
    id: '7c23319d-1bf1-4684-a276-4ad4857f89a7',
  },
 })
//  const transaction = await prisma.$transaction([deletePosts, deleteUser]);  
}

main()
  .then(async () => {
    await prisma.$connect();
  }).catch(async error => {
    console.log(error);
    await prisma.$disconnect();
    process.exit(1);
  })
