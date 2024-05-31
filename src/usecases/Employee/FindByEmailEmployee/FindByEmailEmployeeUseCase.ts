import IEmployeeRepository from "../../../repositories/IEmployeeRepository";
import { IEmployee } from "../../../interfaces/IEmployee";
import validator from "validator";

export default class FindByEmailEmployeeUseCase {
    constructor(
        private employeeRepository: IEmployeeRepository
    ){}

 async run(email: string): Promise<IEmployee>{

        if(!validator.isEmail(email)){
            throw new Error('Invalid email!!');
        }

        const employee = await this.employeeRepository.findByEmail(email);
        if(!employee){
            throw new Error('Employee not found!!');
        }

        return employee
    }
}