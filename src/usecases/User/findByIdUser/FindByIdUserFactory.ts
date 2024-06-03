import FindByIdUserUseCase from "./FindByIdUserUseCase";
import FindByIdUserController from "./FindByIdUserController";
import PrismaUserRepository from "../../../prisma_repositories/PrismaUserRepository";

export default function FindByIdUserFactory(){
    const prismaUserRepository = new PrismaUserRepository();
    const findByIdUserUseCase = new FindByIdUserUseCase(prismaUserRepository);
    const findByIdUserController = new FindByIdUserController(findByIdUserUseCase);
    return findByIdUserController;
}