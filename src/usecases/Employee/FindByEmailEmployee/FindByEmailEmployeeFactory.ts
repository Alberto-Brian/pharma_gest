import PrismaEmployeeRepository from "../../../prisma_repositories/PrismaEmployeeRepository";
import FindByEmailEmployeeUseCase from "./FindByEmailEmployeeUseCase";
import FindByEmailEmployeeController from "./FindByEmailEmployeeController";

export default function FindByEmailEmployeeFactory(): FindByEmailEmployeeController {
    const prismaEmployeeRepository = new PrismaEmployeeRepository();
    const findByEmailEmployeeUseCase = new FindByEmailEmployeeUseCase(prismaEmployeeRepository);
    const findByEmailEmployeeController = new FindByEmailEmployeeController(findByEmailEmployeeUseCase);
    return findByEmailEmployeeController
}