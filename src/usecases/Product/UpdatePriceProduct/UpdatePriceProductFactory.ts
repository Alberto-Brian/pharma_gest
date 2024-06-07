import PrismaProductRepository from "../../../prisma_repositories/PrismaProductRepository";
import UpdatePriceProductUseCase from "./UpdatePriceProductUseCase";
import UpdatePriceProductController from "./UpdatePriceProductController";

export default function UpdatePriceProductFactory(): UpdatePriceProductController {
    const prismaProductRepository = new PrismaProductRepository();
    const updatePriceProductUseCase = new UpdatePriceProductUseCase(prismaProductRepository);
    const updatePriceProductController = new UpdatePriceProductController(updatePriceProductUseCase);
    return updatePriceProductController
}