import PrismaProductRepository from "../../../prisma_repositories/PrismaProductRepository";
import DeleteProductUseCase from "./DeleteProductUseCase";
import DeleteProductController from "./DeleteProductController";

export default function DeleteProductFactory(): DeleteProductController{
    const prismaProductRepository = new PrismaProductRepository();
    const deleteProductUseCase = new DeleteProductUseCase(prismaProductRepository);
    const deleteProductController = new DeleteProductController(deleteProductUseCase);
    return deleteProductController;
}