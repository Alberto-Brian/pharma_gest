import PrismaBusinessManRepository from '../../../prisma_repositories/PrismaBusinessManRepository';
import PrismaPharmacyRepository from '../../../prisma_repositories/PrismaPharmacyRepository';
import CreateUserController from './CreateBusinessManController';
import CreateUserUseCase from './CreateBusinessManUseCase';

export default function createUserFactory(): CreateUserController {
    const prismaBusinessManRepository = new PrismaBusinessManRepository();
    const prismaPharmacyRepository = new PrismaPharmacyRepository()
    const createUserUseCase = new CreateUserUseCase(
        prismaBusinessManRepository, prismaPharmacyRepository);
    const createUserController = new CreateUserController(createUserUseCase);
    return createUserController;
}


