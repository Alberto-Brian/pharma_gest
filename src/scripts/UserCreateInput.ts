import { PrismaClient,  Prisma } from "@prisma/client";

const prisma = new PrismaClient;

async function main(){
   let includePosts: boolean = true; 
   let user: Prisma.UserCreateInput;

   if(includePosts){
    user = {
        username: 'BRIAN',
        email: 'brian@gmail.com',
        password: 'brian',
        posts: {
            create: {
                title: 'Postando alguma coisa'
            }
        }
    }
   } else {
        user = {
            username: 'BRIAN',
            email: 'brian@gmail.com',
            password: 'brian',
        }
   }

    const users = await prisma.user.create ({data: user});
    console.log(users);

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