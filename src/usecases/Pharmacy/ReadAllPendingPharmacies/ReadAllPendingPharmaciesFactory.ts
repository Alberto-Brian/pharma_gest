import PrismaPharmacyRepository from "../../../prisma_repositories/PrismaPharmacyRepository";
import ReadAllPendingPharmaciesUseCase from "./ReadAllPendingPharmaciesUseCase";
import ReadAllPendingPharmaciesController from "./ReadAllPendingPharmaciesController";

export default function ReadAllPendingPharmaciesFactory(): ReadAllPendingPharmaciesController{
    const prismaPharmacyRepository = new PrismaPharmacyRepository();
    const readAllPendingPharmaciesUseCase = new ReadAllPendingPharmaciesUseCase(prismaPharmacyRepository);
    const readAllPendingPharmaciesController = new ReadAllPendingPharmaciesController(readAllPendingPharmaciesUseCase);
    return readAllPendingPharmaciesController
}