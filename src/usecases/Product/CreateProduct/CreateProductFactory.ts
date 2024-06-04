import PrismaProductRepository from '../../../prisma_repositories/PrismaProductRepository';
import PrismaPharmacyRepository from '../../../prisma_repositories/PrismaPharmacyRepository';
import PrismaCategoryRepository from '../../../prisma_repositories/PrisamCategoryRepository';
import CreateProductUseCase from './CreateProductUseCase';
import CreateProductController from './CreateProductController';

export default function CreateProductFactory(): CreateProductController {
    const prismaProductRepository = new PrismaProductRepository();
    const prismaPharmacyRepository = new PrismaPharmacyRepository();
    const prismaCategoryRepository = new PrismaCategoryRepository()
    const createProductUseCase = new CreateProductUseCase(
          prismaProductRepository,
          prismaPharmacyRepository,
          prismaCategoryRepository
        );
    const createProductController = new CreateProductController(createProductUseCase);
    return createProductController;
}