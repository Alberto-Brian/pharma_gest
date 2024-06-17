import PrismaCartRepository from "../../../prisma_repositories/PrismaCartRepository";
import RemoveProductUseCase from "./RemoveProductUseCase";
import RemoveProductController from "./RemoveProductController";

export default function RemoveProductFactory(): RemoveProductController {
    const prismaCartRepository = new PrismaCartRepository();
    const removeProductUseCase = new RemoveProductUseCase(prismaCartRepository);
    const removeProductController = new RemoveProductController(removeProductUseCase);
    return removeProductController
}