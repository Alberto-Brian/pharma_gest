import PrismaUserRepository from '../../../prisma_repositories/PrismaUserRepository';
import DeleteUserController from './DeleteUserController'
import DeleteUserUseCase from './DeleteUserUseCase'

export default function DeleteUserFactory (): DeleteUserController {
    const prismaUserRepository = new PrismaUserRepository();
    const deleteUserUseCase = new DeleteUserUseCase(prismaUserRepository);
    const deleteUserController = new DeleteUserController(deleteUserUseCase);
    return deleteUserController;
}