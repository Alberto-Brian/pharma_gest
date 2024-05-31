import PrismaBusinessManRepository from "../../../prisma_repositories/PrismaBusinessManRepository";
import UpdateBusinessManUseCase from "./UpdateBusinessManUseCase";
import UpdateBusinessManController from "./UpdateBusinessManController";

export default function UpdateBusinessManFactory(): UpdateBusinessManController {
    const prismaBusinessManRepository = new PrismaBusinessManRepository();
    const updateBusinessManUseCase = new UpdateBusinessManUseCase(prismaBusinessManRepository);
    const updateBusinessManController = new UpdateBusinessManController(updateBusinessManUseCase);
    return updateBusinessManController
}