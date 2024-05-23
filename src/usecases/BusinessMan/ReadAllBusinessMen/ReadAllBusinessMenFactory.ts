import PrismaBusinessManRepository from "../../../prisma_repositories/PrismaBusinessManRepository";
import ReadAllBusinessMenUseCase from "./ReadAllBusinessMenUseCase";
import ReadAllBusinessMenController from "./ReadAllBusinessMenController";
export default function ReadAllUsersFactory(): ReadAllBusinessMenController {
    const prismaUserRepository = new PrismaBusinessManRepository();
    const readAllBusinessMenUseCase = new ReadAllBusinessMenUseCase(prismaUserRepository);
    const readAllBusinessMenController = new ReadAllBusinessMenController(readAllBusinessMenUseCase);
    return readAllBusinessMenController;
}