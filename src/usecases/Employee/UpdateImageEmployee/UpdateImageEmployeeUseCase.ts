import IEmployeeRepository from "../../../repositories/IEmployeeRepository";
import {IEmployeeUpdateImageResponse } from "../../../interfaces/IEmployee";

export default class UpdateImageEmployeeUseCase {
    constructor(
        private employeeRepository: IEmployeeRepository
    ){}

 async run(filename: string, id: string): Promise<IEmployeeUpdateImageResponse>{
        const employee = await this.employeeRepository.upadateImage(filename, id)
        return employee
    }
}