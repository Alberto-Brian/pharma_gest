import PrismaUserRepository from "../../../prisma_repositories/PrismaUserRepository";
import ReadAllDeletedUsersController from "./ReadAllDeletedUsersController";
import ReadAllDeletedUsersEntity from "./ReadAllDeletedUsersEntity";

export default function ReadAllDeletedUsersFactory(): ReadAllDeletedUsersController{
    const prismaUserRepository = new PrismaUserRepository();
    const readAllDeletedUsersEntity = new ReadAllDeletedUsersEntity(prismaUserRepository);
    const readAllDeletedUsersController = new ReadAllDeletedUsersController(readAllDeletedUsersEntity);
    return readAllDeletedUsersController;
}