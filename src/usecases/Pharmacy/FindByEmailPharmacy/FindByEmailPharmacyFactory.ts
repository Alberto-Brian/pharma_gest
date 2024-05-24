import PrismaPharmacyRepository from "../../../prisma_repositories/PrismaPharmacyRepository";
import FindByEmailPharmacyUseCase from "./FindByEmailPharmacyUseCase";
import FindByEmailPharmacyController from "./FindByEmailPharmacyController";

export default function FindByEmailPharmacyFactory(): FindByEmailPharmacyController {
        const prismaPharmacyRepository = new PrismaPharmacyRepository();
        const findByEmailPharmacyUseCase = new FindByEmailPharmacyUseCase(prismaPharmacyRepository);
        const findByEmailPharmacyController = new FindByEmailPharmacyController(findByEmailPharmacyUseCase);
        return findByEmailPharmacyController;
}       