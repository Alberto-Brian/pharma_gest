import IEmployeeRepository from "../../../repositories/IEmployeeRepository";
import { IEmployeeUpdateRequest, IEmployeeUpdateResponse } from "../../../interfaces/IEmployee";

export default class UpdateEmployeeUseCase {
    constructor(
        private employeeRepository: IEmployeeRepository
    ){}

 async run(data: IEmployeeUpdateRequest, id: string): Promise<IEmployeeUpdateResponse>{

        const employee = await this.employeeRepository.update(data, id);
        return employee
    }
}