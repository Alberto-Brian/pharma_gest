import PrismaUserRepository from "../../../prisma_repositories/PrismaUserRepository";
import ReadAllUsersUseCase from "./ReadAllUsersUseCase";
import ReadAllUsersController from "./ReadAllUsersController";
export default function ReadAllUsersFactory(): ReadAllUsersController {
    const prismaUserRepository = new PrismaUserRepository();
    const readAllUsersUseCase = new ReadAllUsersUseCase(prismaUserRepository);
    const readAllUsersController = new ReadAllUsersController(readAllUsersUseCase);
    return readAllUsersController;
}