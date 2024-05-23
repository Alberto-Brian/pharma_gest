import PrismaBusinessManRepository from '../../../prisma_repositories/PrismaBusinessManRepository';
import DeleteBusinessManController from './DeleteBusinessManController'
import DeleteUserEntity from './DeleteBusinessManUseCase'

export default function DeleteUserFactory (): DeleteBusinessManController {
    const prismaBusinessManRepository = new PrismaBusinessManRepository();
    const deleteUserEntity = new DeleteUserEntity(prismaBusinessManRepository);
    const deleteBusinessManController = new DeleteBusinessManController(deleteUserEntity);
    return deleteBusinessManController;
}