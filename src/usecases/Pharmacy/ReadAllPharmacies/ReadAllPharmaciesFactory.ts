import PrismaPharmacyRepository from "../../../prisma_repositories/PrismaPharmacyRepository";
import ReadAllPharmaciesUseCase from "./ReadAllPharmaciesUseCase";
import ReadAllPharmaciesController from "./ReadAllPharmaciesController";

export default function ReadAllPharmaciesFactory(): ReadAllPharmaciesController{
    const prismaPharmacyRepository = new PrismaPharmacyRepository();
    const readAllPharmaciesUseCase = new ReadAllPharmaciesUseCase(prismaPharmacyRepository);
    const readAllPharmaciesController = new ReadAllPharmaciesController(readAllPharmaciesUseCase);
    return readAllPharmaciesController
}