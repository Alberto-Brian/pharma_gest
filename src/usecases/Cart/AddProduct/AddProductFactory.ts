import PrismaCartRepository from "../../../prisma_repositories/PrismaCartRepository";
import AddProductUseCase from "./AddProductUseCase";
import AddProductController from "./AddProductController";

export default function AddProductFactory(): AddProductController {
    const prismaCartRepository = new PrismaCartRepository();
    const addProductUseCase = new AddProductUseCase(prismaCartRepository);
    const addProductController = new AddProductController(addProductUseCase);
    return addProductController
}