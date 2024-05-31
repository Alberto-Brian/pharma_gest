import IEmployeeRepository from "../../../repositories/IEmployeeRepository";
import { IEmployee } from "../../../interfaces/IEmployee";
import IResultPaginated from "../../../interfaces/IResultPaginated";

export default class ReadAllEmployeesUseCase {
    constructor(
        private employeeRepository: IEmployeeRepository
    ){}

 async run(page: number, perPage: number): Promise<IResultPaginated>{
        const employee = await this.employeeRepository.read(page, perPage);
        return employee
    }
}