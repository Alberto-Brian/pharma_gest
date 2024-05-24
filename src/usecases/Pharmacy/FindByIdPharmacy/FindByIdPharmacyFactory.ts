import PrismaPharmacyRepository from "../../../prisma_repositories/PrismaPharmacyRepository";
import FindByIdPharmacyUseCase from "./FindByIdPharmacyUseCase";
import FindByIdPharmacyController from "./FindByIdPharmacyController";

export default function FindByEmailPharmacyFactory(): FindByIdPharmacyController {
        const prismaPharmacyRepository = new PrismaPharmacyRepository();
        const findByIdPharmacyUseCase = new FindByIdPharmacyUseCase(prismaPharmacyRepository);
        const findByIdPharmacyController = new FindByIdPharmacyController(findByIdPharmacyUseCase);
        return findByIdPharmacyController;
}       