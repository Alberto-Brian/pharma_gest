import PrismaProductRepository from "../../../prisma_repositories/PrismaProductRepository";
import ReadAllProductsUseCase from "./ReadAllProductsUseCase";
import ReadAllProductsController from "./ReadAllProductsController";

export default function ReadAllProductsFactory(): ReadAllProductsController {
    const prismaProductRepository = new PrismaProductRepository();
    const readAllProductsUseCase = new ReadAllProductsUseCase(prismaProductRepository);
    const readAllProductsController = new ReadAllProductsController(readAllProductsUseCase)
    return readAllProductsController;
}  