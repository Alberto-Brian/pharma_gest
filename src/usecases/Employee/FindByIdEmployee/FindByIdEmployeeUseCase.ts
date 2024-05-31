import IEmployeeRepository from "../../../repositories/IEmployeeRepository";
import { IEmployee } from "../../../interfaces/IEmployee";

export default class FindByIdEmployeeUseCase {
    constructor(
        private employeeRepository: IEmployeeRepository
    ){}

 async run(id: string): Promise<IEmployee>{

        const employee = await this.employeeRepository.findById(id);

        if(!employee){
            throw new Error('Employee not found!!')
        }

        return employee
    }
}