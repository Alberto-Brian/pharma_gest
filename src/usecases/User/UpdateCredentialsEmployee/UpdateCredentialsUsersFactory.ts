import PrismaUserRepository from "../../../prisma_repositories/PrismaUserRepository";
import UpdateCredentialsUsersUseCase from "./UpdateCredentialsUsersUseCase";
import UpdateCredentialUsersController from "./UpdateCredentialsUsersController";

export default function UpdateCredentialsUsersFactory(): UpdateCredentialUsersController {
    const prismaUserRepository = new PrismaUserRepository();
    const updateCredentialsUsersUseCase = new UpdateCredentialsUsersUseCase(prismaUserRepository);
    const updateCredentialsUsersController = new UpdateCredentialUsersController(updateCredentialsUsersUseCase)
    return updateCredentialsUsersController
}