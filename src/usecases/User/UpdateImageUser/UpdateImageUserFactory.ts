import PrismaUserRepository from "../../../prisma_repositories/PrismaUserRepository";
import UpdateImageUserUseCase from "./UpdateImageUserUseCase";
import UpdateImageUserController from "./UpdateImageUserController";

export default function UpdateImageUserFactory(): UpdateImageUserController {
    const prismaUserRepository = new PrismaUserRepository();
    const updateImageUserUseCase = new UpdateImageUserUseCase(prismaUserRepository);
    const updateImageUserController = new UpdateImageUserController(updateImageUserUseCase);
    return updateImageUserController
}