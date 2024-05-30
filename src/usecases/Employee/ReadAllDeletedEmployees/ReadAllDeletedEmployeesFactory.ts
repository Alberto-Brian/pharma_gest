import PrismaEmployeeRepository from "../../../prisma_repositories/PrismaEmployeeRepository";
import ReadAllDeletedEmployeesUseCase from "./ReadAllDeletedEmployeesUseCase";
import ReadAllDeletedEmployeesController from "./ReadAllDeletedEmployeesController";

export default function ReadAllDeletedEmployeesFactory(): ReadAllDeletedEmployeesController {
    const prismaEmployeeRepository = new PrismaEmployeeRepository();
    const readAllDeletedEmployeesUseCase = new ReadAllDeletedEmployeesUseCase(prismaEmployeeRepository);
    const readAllDeletedEmployeesController = new ReadAllDeletedEmployeesController(readAllDeletedEmployeesUseCase);
    return readAllDeletedEmployeesController
}