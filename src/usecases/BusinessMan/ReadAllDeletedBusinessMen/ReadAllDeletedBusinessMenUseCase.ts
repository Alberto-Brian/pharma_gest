import IResultPaginated from "../../../interfaces/IResultPaginated";
import IBusinessManRepository from "../../../repositories/IBusinessManRepository";

export default class ReadAllDeletedBusinessMenUseCase{
    constructor(
        private userRepository: IBusinessManRepository
    ){}

    async run(page: number, perPage: number): Promise<IResultPaginated>{
        const users = await this.userRepository.readAllDeletedBusinessMen(page, perPage);
        return users;
    }
}