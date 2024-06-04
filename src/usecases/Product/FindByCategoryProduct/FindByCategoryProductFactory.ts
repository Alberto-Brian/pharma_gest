import PrismaProductRepository from "../../../prisma_repositories/PrismaProductRepository";
import PrismaPharmacyRepository from "../../../prisma_repositories/PrismaPharmacyRepository";
import PrismaCategoryRepository from "../../../prisma_repositories/PrisamCategoryRepository";
import FindByCategoryProductUseCase from "./FindByCategoryProductUseCase";
import FindByCategoryProductController from "./FindByCategoryProductController";

export default function FindByCategoryProductFactory(): FindByCategoryProductController{
    const prismaProductRepository = new PrismaProductRepository();
    const prismaPharmacyRepository = new PrismaPharmacyRepository();
    const prismaCategoryRepositoy = new PrismaCategoryRepository();
    const findByCategoryProductUseCase = new FindByCategoryProductUseCase(
          prismaProductRepository,
          prismaPharmacyRepository,
          prismaCategoryRepositoy
        );
    const findByCategoryProdutController = new FindByCategoryProductController(findByCategoryProductUseCase);
    return findByCategoryProdutController;
}