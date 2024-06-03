import PrismaUserRepository from "../../../prisma_repositories/PrismaUserRepository";
import ReadAllDeletedUsersController from "./ReadAllDeletedUsersController";
import ReadAllDeletedUsersUseCase from "./ReadAllDeletedUsersUseCase";

export default function ReadAllDeletedUsersFactory(): ReadAllDeletedUsersController{
    const prismaUserRepository = new PrismaUserRepository();
    const readAllDeletedUsersUseCase = new ReadAllDeletedUsersUseCase(prismaUserRepository);
    const readAllDeletedUsersController = new ReadAllDeletedUsersController(readAllDeletedUsersUseCase);
    return readAllDeletedUsersController;
}