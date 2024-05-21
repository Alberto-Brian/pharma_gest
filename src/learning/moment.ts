import moment from "moment";
import PrismaUserRepository from "../prisma_repositories/PrismaUserRepository";
moment.locale('pt-br');
const prismaRepository = new PrismaUserRepository();

prismaRepository.findByEmail("alfredonsoki10@gmail.com")
    .then(user => console.log(moment(user?.created_at).fromNow()))
    .catch(error => console.log(error));







