import PrismaProductRepository from "../../../prisma_repositories/PrismaProductRepository";
import FindByIdProductUseCase from "./FindByIdProductUseCase";
import FindByIdProductController from "./FindByIdProductController";

export default function FindByIdProductFactory(): FindByIdProductController{
    const prismaProductRepository = new PrismaProductRepository();
    const findByIdProductUseCase = new FindByIdProductUseCase(prismaProductRepository);
    const findByIdProdutController = new FindByIdProductController(findByIdProductUseCase);
    return findByIdProdutController;
}