import IResultPaginated from "../../../interfaces/IResultPaginated";
import IBusinessManRepository from "../../../repositories/IBusinessManRepository";

export default class ReadAllBusinessMenUseCase {
    constructor(
        private userRepository: IBusinessManRepository
    ){}

    async run(page: number, perPage: number): Promise<IResultPaginated> {
        const result = this.userRepository.readAllBusinessMen(page, perPage);
        return result;
    }
}