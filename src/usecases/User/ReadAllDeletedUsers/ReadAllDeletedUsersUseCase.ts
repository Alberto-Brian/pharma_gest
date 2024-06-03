import IResultPaginated from "../../../interfaces/IResultPaginated";
import IUserRepository from "../../../repositories/IUserRepository";

export default class ReadAllDeletedUsersUseCase{
    constructor(
        private userRepository: IUserRepository
    ){}

    async run(page: number, perPage: number): Promise<IResultPaginated>{
        const users = await this.userRepository.readAllDeleted(page, perPage);
        return users;
    }
}