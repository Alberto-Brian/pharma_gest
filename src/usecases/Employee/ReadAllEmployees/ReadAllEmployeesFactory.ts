import PrismaEmployeeRepository from "../../../prisma_repositories/PrismaEmployeeRepository";
import ReadAllEmployeesUseCase from "./ReadAllEmployeesUseCase";
import ReadAllEmployeesController from "./ReadAllEmployeesController";

export default function ReadAllEmployeesFactory(): ReadAllEmployeesController {
    const prismaEmployeeRepository = new PrismaEmployeeRepository();
    const readAllEmployeesUseCase = new ReadAllEmployeesUseCase(prismaEmployeeRepository);
    const readAllEmployeesController = new ReadAllEmployeesController(readAllEmployeesUseCase);
    return readAllEmployeesController
}