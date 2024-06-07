import PrismaProductRepository from "../../../prisma_repositories/PrismaProductRepository";
import UpdateImageProductUseCase from "./UpdateImageProductUseCase";
import UpdateImageProductController from "./UpdateImageProductController";

export default function UpdateImageProductFactory(): UpdateImageProductController {
    const prismaProductRepository = new PrismaProductRepository();
    const updateImageProductUseCase = new UpdateImageProductUseCase(prismaProductRepository);
    const updateImageProductController = new UpdateImageProductController(updateImageProductUseCase);
    return updateImageProductController
}