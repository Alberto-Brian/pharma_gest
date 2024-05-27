import PrismaProductRepository from '../../../prisma_repositories/PrismaProductRepository';
import PrismaPharmacyRepository from '../../../prisma_repositories/PrismaPharmacyRepository';
import CreateProductUseCase from './CreateProductUseCase';
import CreateProductController from './CreateProductController';

export default function CreateProductFactory(): CreateProductController {
    const prismaProductRepository = new PrismaProductRepository();
    const prismaPharmacyRepository = new PrismaPharmacyRepository();
    const createProductUseCase = new CreateProductUseCase(
          prismaProductRepository, prismaPharmacyRepository);
    const createProductController = new CreateProductController(createProductUseCase);
    return createProductController;
}