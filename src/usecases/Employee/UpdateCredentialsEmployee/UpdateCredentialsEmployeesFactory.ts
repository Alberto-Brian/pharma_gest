import PrismaEmployeeRepository from "../../../prisma_repositories/PrismaEmployeeRepository";
import UpdateCredentialsEmployeesUseCase from "./UpdateCredentialsEmployeesUseCase";
import UpdateCredentialsEmployeesController from "./UpdateCredentialsEmployeesController";

export default function UpdateCredentialsEmployeesFactory(): UpdateCredentialsEmployeesController {
    const prismaEmployeeRepository = new PrismaEmployeeRepository();
    const updateCredentialsEmployeesUseCase = new UpdateCredentialsEmployeesUseCase(prismaEmployeeRepository);
    const updateCredentialsEmployeesController = new UpdateCredentialsEmployeesController(updateCredentialsEmployeesUseCase);
    return updateCredentialsEmployeesController
}