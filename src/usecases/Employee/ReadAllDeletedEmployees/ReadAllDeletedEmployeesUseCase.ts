import IEmployeeRepository from "../../../repositories/IEmployeeRepository";
import IResultPaginated from "../../../interfaces/IResultPaginated";

export default class ReadAllDeletedEmployeesUseCase {
    constructor(
        private employeeRepository: IEmployeeRepository
    ){}

 async run(page: number, perPage: number): Promise<IResultPaginated>{
        const employees = await this.employeeRepository.readAllDeleted(page, perPage);
        return employees;
    }
}