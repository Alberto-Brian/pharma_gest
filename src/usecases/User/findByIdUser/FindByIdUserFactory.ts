import FindByIdUserEntity from "./FindByIdUserEntity";
import FindByIdUserController from "./FindByIdUserController";
import PrismaUserRepository from "../../../prisma_repositories/PrismaUserRepository";

export default function FindByIdUserFactory(){
    const prismaUserRepository = new PrismaUserRepository();
    const findByIdUserEntity = new FindByIdUserEntity(prismaUserRepository);
    const findByIdUserController = new FindByIdUserController(findByIdUserEntity);
    return findByIdUserController;
}