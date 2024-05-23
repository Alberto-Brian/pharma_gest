import PrismaUserRepository from "../../../prisma_repositories/PrismaUserRepository";
import FindByEmailUserEntity from "./FindByEmailUserEntity";
import FindByEmailUserController from "./FindByEmailUserController";

export default function FindByEmailUserFactory(): FindByEmailUserController {
   const prismaUserRepository = new PrismaUserRepository();
   const findByEmailUserEntity = new FindByEmailUserEntity(prismaUserRepository);
   const findByEmailUserController = new FindByEmailUserController(findByEmailUserEntity)
   return findByEmailUserController;
}