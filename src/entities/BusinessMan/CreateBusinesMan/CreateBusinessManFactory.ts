import PrismaBusinessManRepository from '../../../prisma_repositories/PrismaBusinessManRepository';
import CreateUserController from './CreateBusinessManController';
import CreateUserEntity from './CreateBusinessManEntity';

export default function createUserFactory(): CreateUserController {
    const prismaBusinessManRepository = new PrismaBusinessManRepository();
    const createUserEntity = new CreateUserEntity(prismaBusinessManRepository);
    const createUserController = new CreateUserController(createUserEntity);
    return createUserController;
}


