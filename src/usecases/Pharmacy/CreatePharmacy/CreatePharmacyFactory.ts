import PrismaPharmacyRepository from "../../../prisma_repositories/PrismaPharmacyRepository";
import CreatePharmacyUseCase from "./CreatePharmacyUseCase";
import CreatePharmacyController from "./CreatePharmacyController";

export default function CreatePharmacyFactory(): CreatePharmacyController {
    const prismaPharmacyRepository = new PrismaPharmacyRepository();
    const createPharmacyUseCase = new CreatePharmacyUseCase(prismaPharmacyRepository);
    const createPharmacyController = new CreatePharmacyController(createPharmacyUseCase);
    return createPharmacyController;
 }