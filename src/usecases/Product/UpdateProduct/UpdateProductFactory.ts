import PrismaProductRepository from "../../../prisma_repositories/PrismaProductRepository";
import UpdateProductUseCase from "./UpdateProductUseCase";
import UpdateProductController from "./UpdateProductController";

export default function UpdateProductFactory(): UpdateProductController {
    const prismaProductRepository = new PrismaProductRepository();
    const updateProductUseCase = new UpdateProductUseCase(prismaProductRepository);
    const updateProductController = new UpdateProductController(updateProductUseCase);
    return updateProductController
}