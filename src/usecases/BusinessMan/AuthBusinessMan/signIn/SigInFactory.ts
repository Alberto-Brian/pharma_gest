import PrismaBusinessManRepository from "../../../../prisma_repositories/PrismaBusinessManRepository";
// import PrismaAuthRepository from "../../../prisma_repositories/PrismaAuthRepository";
import SigInUseCase from "./SignInUseCase";
import SigInController from "./SigInController";

export default function SigInFactory(): SigInController {
    const prismaBusinessManRepository = new PrismaBusinessManRepository();
    const sigInUseCase = new SigInUseCase(prismaBusinessManRepository);
    const sigInController = new SigInController(sigInUseCase);
    return sigInController;
}