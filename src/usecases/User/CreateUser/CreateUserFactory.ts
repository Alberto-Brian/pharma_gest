import PrismaUserRepository from '../../../prisma_repositories/PrismaUserRepository';
import CreateUserController from './CreateUserController';
import CreateUserEntity from './CreateUserEntity';

export default function createUserFactory(): CreateUserController {
    const prismaUserRepository = new PrismaUserRepository();
    const createUserEntity = new CreateUserEntity(prismaUserRepository);
    const createUserController = new CreateUserController(createUserEntity);
    return createUserController;
}


