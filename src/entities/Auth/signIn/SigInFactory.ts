import PrismaBusinessManRepository from "../../../prisma_repositories/PrismaBusinessManRepository";
import PrismaAuthRepository from "../../../prisma_repositories/PrismaAuthRepository";
import SigInEntinty from "./SignInEntity";
import SigInController from "./SigInController";

export default function SigInFactory(): SigInController {
    const prismaBusinessManRepository = new PrismaBusinessManRepository();
    const prismaAuthRepository = new PrismaAuthRepository()
    const sigInEntinty = new SigInEntinty(prismaAuthRepository, prismaBusinessManRepository);
    const sigInController = new SigInController(sigInEntinty);
    return sigInController;
}