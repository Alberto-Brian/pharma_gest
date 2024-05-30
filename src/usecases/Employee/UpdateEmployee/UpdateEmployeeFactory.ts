import PrismaEmployeeRepository from "../../../prisma_repositories/PrismaEmployeeRepository";
import UpdateEmployeeUseCase from "./UpdateEmployeeUseCase";
import UpdateEmployeeController from "./UpdateEmployeeController";

export default function UpdateEmployeeFactory(): UpdateEmployeeController {
    const prismaEmployeeRepository = new PrismaEmployeeRepository();
    const updateEmployeeUseCase = new UpdateEmployeeUseCase(prismaEmployeeRepository);
    const updateEmployeeController = new UpdateEmployeeController(updateEmployeeUseCase);
    return updateEmployeeController
}