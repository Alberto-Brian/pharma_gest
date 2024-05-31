import PrismaEmployeeRepository from "../../../prisma_repositories/PrismaEmployeeRepository";
import UpdateImageEmployeeUseCase from "./UpdateImageEmployeeUseCase";
import UpdateImageEmployeeController from "./UpdateImageEmployeeController";

export default function UpdateImageEmployeeFactory(): UpdateImageEmployeeController {
    const prismaEmployeeRepository = new PrismaEmployeeRepository();
    const updateImageEmployeeUseCase = new UpdateImageEmployeeUseCase(prismaEmployeeRepository);
    const updateImageEmployeeController = new UpdateImageEmployeeController(updateImageEmployeeUseCase);
    return updateImageEmployeeController
}