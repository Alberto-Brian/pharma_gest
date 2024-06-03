import PrismaUserRepository from '../../../prisma_repositories/PrismaUserRepository';
import CreateUserController from './CreateUserController';
import CreateUserUseCase from './CreateUserUseCase';

export default function createUserFactory(): CreateUserController {
    const prismaUserRepository = new PrismaUserRepository();
    const createUserUseCase = new CreateUserUseCase(prismaUserRepository);
    const createUserController = new CreateUserController(createUserUseCase);
    return createUserController;
}


