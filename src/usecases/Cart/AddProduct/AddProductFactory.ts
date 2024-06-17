import PrismaCartRepository from "../../../prisma_repositories/PrismaCartRepository";
import PrismaProductRepository from "../../../prisma_repositories/PrismaProductRepository";
import AddProductUseCase from "./AddProductUseCase";
import AddProductController from "./AddProductController";

export default function AddProductFactory(): AddProductController {
    const prismaCartRepository = new PrismaCartRepository();
    const prismaProductRepository = new PrismaProductRepository();
    const addProductUseCase = new AddProductUseCase(prismaCartRepository, prismaProductRepository);
    const addProductController = new AddProductController(addProductUseCase);
    return addProductController
}