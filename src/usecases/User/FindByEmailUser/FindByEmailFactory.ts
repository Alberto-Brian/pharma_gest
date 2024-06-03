import PrismaUserRepository from "../../../prisma_repositories/PrismaUserRepository";
import FindByEmailUserUseCase from "./FindByEmailUserUseCase";
import FindByEmailUserController from "./FindByEmailUserController";

export default function FindByEmailUserFactory(): FindByEmailUserController {
   const prismaUserRepository = new PrismaUserRepository();
   const findByEmailUserUseCase = new FindByEmailUserUseCase(prismaUserRepository);
   const findByEmailUserController = new FindByEmailUserController(findByEmailUserUseCase)
   return findByEmailUserController;
}