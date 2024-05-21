import IResultPaginated from "../../../interfaces/IResultPaginated";
import IUserRepository from "../../../repositories/IUserRepository";

export default class ReadAllDeletedUsersEntity{
    constructor(
        private userRepository: IUserRepository
    ){}

    async run(page: number, perPage: number): Promise<IResultPaginated>{
        const users = await this.userRepository.readAllDeletedUsers(page, perPage);
        return users;
    }
}