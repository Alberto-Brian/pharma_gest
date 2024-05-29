import PrismaEmployeeRepository from "../../../prisma_repositories/PrismaEmployeeRepository";
import PrismaPharmacyRepository from "../../../prisma_repositories/PrismaPharmacyRepository";
import CreateEmployeeUseCase from "./CreateEmployeeUseCase";
import CreateEmployeeController from "./CreateEmployeeController";

export default function CreateEmployeeFactory(): CreateEmployeeController {
    const prismaEmployeeRepository = new PrismaEmployeeRepository();
    const prismaPharmacyRepository = new PrismaPharmacyRepository()
    const createEmployeeUseCase = new CreateEmployeeUseCase(prismaEmployeeRepository, prismaPharmacyRepository);
    const createEmployeeController = new CreateEmployeeController(createEmployeeUseCase);
    return createEmployeeController
}   