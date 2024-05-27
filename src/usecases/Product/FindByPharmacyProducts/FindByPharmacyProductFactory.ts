import PrismaProductRepository from "../../../prisma_repositories/PrismaProductRepository";
import PrismaPharmacyRepository from "../../../prisma_repositories/PrismaPharmacyRepository";
import FindByPharmacyProductUseCase from "./FindByPharmacyUseCase";
import FindByPharmacyProductController from "./FindByPharmacyController";

export default function FindByPharmacyProductFactory(): FindByPharmacyProductController{
    const prismaProductRepository = new PrismaProductRepository();
    const prismaPharmacyRepository = new PrismaPharmacyRepository();
    const findByPharmacyProductUseCase = new FindByPharmacyProductUseCase(
          prismaProductRepository, prismaPharmacyRepository
    )
    const findByPharmacyProductController = new FindByPharmacyProductController(findByPharmacyProductUseCase);
    return findByPharmacyProductController;
} 