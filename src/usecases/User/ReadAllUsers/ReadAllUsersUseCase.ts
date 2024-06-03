import IResultPaginated from "../../../interfaces/IResultPaginated";
import IUserRepository from "../../../repositories/IUserRepository";

export default class ReadAllUsersEntity {
    constructor(
        private userRepository: IUserRepository
    ){}

    async run(page: number, perPage: number): Promise<IResultPaginated> {
        const result = this.userRepository.read(page, perPage);
        return result;
    }
}