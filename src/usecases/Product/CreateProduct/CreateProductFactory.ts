import PrismaProductRepository from '../../../prisma_repositories/PrismaProductRepository';
import CreateProductUseCase from './CreateProductUseCase';
import CreateProductController from './CreateProductController';

export default function CreateProductFactory(): CreateProductController {
    const prismaProductRepository = new PrismaProductRepository();
    const createProductUseCase = new CreateProductUseCase(prismaProductRepository);
    const createProductController = new CreateProductController(createProductUseCase);
    return createProductController;
}