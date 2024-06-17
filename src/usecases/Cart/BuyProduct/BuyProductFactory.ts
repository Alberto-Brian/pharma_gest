import PrismaCartRepository from "../../../prisma_repositories/PrismaCartRepository";
import BuyProductUseCase from "./BuyProductUseCase";
import BuyProductController from "./BuyProductController";

export default function BuyProductFactory(): BuyProductController {
    const prismaCartRepository = new PrismaCartRepository();
    const buyProductUseCase = new BuyProductUseCase(prismaCartRepository);
    const buyProductController = new BuyProductController(buyProductUseCase);
    return buyProductController
}