import PrismaUserRepository from "../../../prisma_repositories/PrismaUserRepository";
import UpdateUserUseCase from "./UpdateUserUseCase";
import UpdateUserController from "./UpdateUserController";

export default function UpdateUserFactory(): UpdateUserController {
    const prismaEmployeeRepository = new PrismaUserRepository();
    const updateUserUseCase = new UpdateUserUseCase(prismaEmployeeRepository);
    const updateUserController = new UpdateUserController(updateUserUseCase);
    return updateUserController
}