import PrismaBusinessManRepository from "../../../prisma_repositories/PrismaBusinessManRepository";
import UpdateCredentialsBusinessManUseCase from "./UpdateCredentialsBusinessManUseCase";
import UpdateCredentialsBusinessManController from "./UpdateCredentialsBusinessManController";

export default function UpdateCredentialsBusinessManFactory(): UpdateCredentialsBusinessManController {
    const prismaBusinessManRepository = new PrismaBusinessManRepository();
    const updateCredentialsBusinessManUseCase = new UpdateCredentialsBusinessManUseCase(prismaBusinessManRepository);
    const updateCredentialsBusinessManController = new UpdateCredentialsBusinessManController(updateCredentialsBusinessManUseCase);
    return updateCredentialsBusinessManController
}