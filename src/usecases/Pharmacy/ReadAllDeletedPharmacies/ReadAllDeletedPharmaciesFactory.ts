import PrismaPharmacyRepository from "../../../prisma_repositories/PrismaPharmacyRepository";
import ReadAllDeletedPharmaciesUseCase from "./ReadAllDeletedPharmaciesUseCase";
import ReadAllDeletedPharmaciesController from "./ReadAllDeletedPharmaciesController";

export default function ReadAllDeletedPharmaciesFactory(): ReadAllDeletedPharmaciesController{
    const prismaPharmacyRepository = new PrismaPharmacyRepository();
    const readAllDeletedPharmaciesUseCase = new ReadAllDeletedPharmaciesUseCase(prismaPharmacyRepository);
    const readAllDeletedPharmaciesController = new ReadAllDeletedPharmaciesController(readAllDeletedPharmaciesUseCase);
    return readAllDeletedPharmaciesController
}