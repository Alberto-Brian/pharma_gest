import PrismaCartRepository from "../../../prisma_repositories/PrismaCartRepository";
import ShowCartUseCase from "./ShowCartUseCase";
import ShowCartController from "./ShowCartController";

export default function ShowCartFactory(): ShowCartController {
    const prismaCartRepository = new PrismaCartRepository();
    const showCartUseCase = new ShowCartUseCase(prismaCartRepository);
    const showCartController = new ShowCartController(showCartUseCase);
    return showCartController
}