import PrismaBusinessManRepository from "../../../prisma_repositories/PrismaBusinessManRepository";
import UpdateImageBusinessManUseCase from "./UpdateImageBusinessManUseCase";
import UpdateImageBusinessManController from "./UpdateImageBusinessManController";

export default function UpdateImageBusinessManFactory(): UpdateImageBusinessManController {
    const prismaBusinessManRepository = new PrismaBusinessManRepository();
    const updateImageBusinessManUseCase = new UpdateImageBusinessManUseCase(prismaBusinessManRepository);
    const updateImageBusinessManController = new UpdateImageBusinessManController(updateImageBusinessManUseCase);
    return updateImageBusinessManController
}