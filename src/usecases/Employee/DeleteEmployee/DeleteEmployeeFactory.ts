import PrismaEmployeeRepository from "../../../prisma_repositories/PrismaEmployeeRepository";
import DeleteEmployeeUseCase from "./DeleteEmployeeUseCase";
import DeleteEmployeeController from "./DeleteEmployeeController";

export default function DeleteEmployeeFactory(): DeleteEmployeeController {
    const prismaEmployeeRepository = new PrismaEmployeeRepository();
    const deleteEmployeeUseCase = new DeleteEmployeeUseCase(prismaEmployeeRepository);
    const deleteEmployeeController = new DeleteEmployeeController(deleteEmployeeUseCase);
    return deleteEmployeeController
}