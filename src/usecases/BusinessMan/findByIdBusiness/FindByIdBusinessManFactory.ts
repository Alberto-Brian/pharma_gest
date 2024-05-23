import FindByIdBusinessManUseCase from "./FindByIdBusinessManUseCase";
import FindByIdBusinessManController from "./FindByIdBusinessManController";
import PrismaBusinessManRepository from "../../../prisma_repositories/PrismaBusinessManRepository";

export default function FindByIdUserFactory(): FindByIdBusinessManController{
    const prismaBusinessManRepository = new PrismaBusinessManRepository();
    const findByIdBusinessManUseCase = new FindByIdBusinessManUseCase(prismaBusinessManRepository);
    const findByIdBusinessManController = new FindByIdBusinessManController(findByIdBusinessManUseCase);
    return findByIdBusinessManController;
}