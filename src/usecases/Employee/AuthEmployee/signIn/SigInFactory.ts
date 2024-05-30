import PrismaEmployeeRepository from "../../../../prisma_repositories/PrismaEmployeeRepository";
import SigInUseCase from "./SignInUseCase";
import SigInController from "./SigInController";

export default function SigInFactory(): SigInController {
    const prismaEmployeeRepository = new PrismaEmployeeRepository();
    const sigInUseCase = new SigInUseCase(prismaEmployeeRepository);
    const sigInController = new SigInController(sigInUseCase);
    return sigInController;
}