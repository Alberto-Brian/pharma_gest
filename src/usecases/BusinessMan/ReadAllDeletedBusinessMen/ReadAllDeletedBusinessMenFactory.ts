import PrismaBusinessManRepository from "../../../prisma_repositories/PrismaBusinessManRepository";
import ReadAllDeletedBusinessMenController from "./ReadAllDeletedBusinessMenController";
import ReadAllDeletedBusinessMenUseCase from "./ReadAllDeletedBusinessMenUseCase";

export default function ReadAllDeletedUsersFactory(): ReadAllDeletedBusinessMenController{
    const prismaBusinessManRepository = new PrismaBusinessManRepository();
    const readAllDeletedBusinessMenUseCase = new ReadAllDeletedBusinessMenUseCase(prismaBusinessManRepository);
    const readAllDeletedBusinessMenController = new ReadAllDeletedBusinessMenController(readAllDeletedBusinessMenUseCase);
    return readAllDeletedBusinessMenController;
}