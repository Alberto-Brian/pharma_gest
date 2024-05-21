import PrismaUserRepository from '../../../prisma_repositories/PrismaUserRepository';
import DeleteUserController from './DeleteUserController'
import DeleteUserEntity from './DeleteUserEntity'

export default function DeleteUserFactory (): DeleteUserController {
    const prismaUserRepository = new PrismaUserRepository();
    const deleteUserEntity = new DeleteUserEntity(prismaUserRepository);
    const deleteUserController = new DeleteUserController(deleteUserEntity);
    return deleteUserController;
}