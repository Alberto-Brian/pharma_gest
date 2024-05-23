import PrismaBusinessManRepository from '../../../prisma_repositories/PrismaBusinessManRepository';
import CreateUserController from './CreateBusinessManController';
import CreateUserUseCase from './CreateBusinessManUseCase';

export default function createUserFactory(): CreateUserController {
    const prismaBusinessManRepository = new PrismaBusinessManRepository();
    const createUserUseCase = new CreateUserUseCase(prismaBusinessManRepository);
    const createUserController = new CreateUserController(createUserUseCase);
    return createUserController;
}


