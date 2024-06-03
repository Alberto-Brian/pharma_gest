import PrismaUserRepository from "../../../../prisma_repositories/PrismaUserRepository";
import SigInUseCase from "./SignInUseCase";
import SigInController from "./SigInController";

export default function SigInFactory(): SigInController {
    const prismaUserRepository = new PrismaUserRepository();
    const sigInUseCase = new SigInUseCase(prismaUserRepository);
    const sigInController = new SigInController(sigInUseCase);
    return sigInController;
}