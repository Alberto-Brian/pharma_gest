import PrismaPharmacyRepository from "../../../prisma_repositories/PrismaPharmacyRepository";
import DeletePharmacyUseCase from "./DeletePharmacyUseCase";
import DeletePharmacyController from "./DeletePharmacyController";

export default function DeletePharmacyFactory(): DeletePharmacyController {
    const prismaPharmacyRepository = new PrismaPharmacyRepository();
    const deletePharmacyUseCase = new DeletePharmacyUseCase(prismaPharmacyRepository);
    const deletePharmacyController = new DeletePharmacyController(deletePharmacyUseCase);
    return deletePharmacyController;
}