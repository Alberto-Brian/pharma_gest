import PrismaUserRepository from "../../../prisma_repositories/PrismaUserRepository";
import ReadAllUsersEntity from "./ReadAllUsersEntity";
import ReadAllUsersController from "./ReadAllUsersController";
export default function ReadAllUsersFactory(): ReadAllUsersController {
    const prismaUserRepository = new PrismaUserRepository();
    const readAllUsersEntity = new ReadAllUsersEntity(prismaUserRepository);
    const readAllUsersController = new ReadAllUsersController(readAllUsersEntity);
    return readAllUsersController;
}