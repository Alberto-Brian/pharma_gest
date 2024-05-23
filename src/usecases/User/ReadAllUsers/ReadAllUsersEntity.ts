import IResultPaginated from "../../../interfaces/IResultPaginated";
import { IUserResponse } from "../../../interfaces/IUser";
import IUserRepository from "../../../repositories/IUserRepository";

export default class ReadAllUsersEntity {
    constructor(
        private userRepository: IUserRepository
    ){}

    async run(page: number, perPage: number): Promise<IResultPaginated> {
        const result = this.userRepository.readAllUsers(page, perPage);
        return result;
    }
}