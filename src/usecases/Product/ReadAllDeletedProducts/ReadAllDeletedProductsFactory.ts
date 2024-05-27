import PrismaProductRepository from "../../../prisma_repositories/PrismaProductRepository";
import ReadAllDeletedProductsUseCase from "./ReadAllDeletedProductsUseCase";
import ReadAllDeletedProductsController from "./ReadAllDeletedProductsController";

export default function ReadAllDeletedProductsFactory(): ReadAllDeletedProductsController {
    const prismaProductRepository = new PrismaProductRepository();
    const readAllDeletedProductsUseCase = new ReadAllDeletedProductsUseCase(prismaProductRepository);
    const readAllDeletedProductsController = new ReadAllDeletedProductsController(readAllDeletedProductsUseCase)
    return readAllDeletedProductsController;
}  