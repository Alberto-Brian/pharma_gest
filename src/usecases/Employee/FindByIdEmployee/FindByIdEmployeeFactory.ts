import PrismaEmployeeRepository from "../../../prisma_repositories/PrismaEmployeeRepository";
import FindByIdEmployeeUseCase from "./FindByIdEmployeeUseCase";
import FindByIdEmployeeController from "./FindByIdEmployeeController";

export default function FindByIdEmployeeFactory(): FindByIdEmployeeController {
    const prismaEmployeeRepository = new PrismaEmployeeRepository();
    const findByIdEmployeeUseCase = new FindByIdEmployeeUseCase(prismaEmployeeRepository);
    const findByIdEmployeeController = new FindByIdEmployeeController(findByIdEmployeeUseCase);
    return findByIdEmployeeController
}