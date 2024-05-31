import IEmployeeRepository from "../../../repositories/IEmployeeRepository";
import { IEmployeeUpdateCredentialsRequest, IEmployeeUpdateCredentialsResponse } from "../../../interfaces/IEmployee";
import { comparePassword } from "../../../utils/bcrypt";
import validator from "validator";
export default class UpdateCredentialsEmployeesUseCase {
    constructor(
        private employeeRepository: IEmployeeRepository
    ){}

 async run(data: IEmployeeUpdateCredentialsRequest,
           old_password: string, confirm_password: string, id: string):
           Promise<IEmployeeUpdateCredentialsResponse>{

        if(!data.email || !data.password || !old_password || !confirm_password){
            throw new Error('Fill all mandatory fields');
        }    

        if(!validator.isEmail(data.email)){
            throw new Error('Invalid email!!');
        }

        if(!validator.isLowercase(data.email)){
             throw new Error('E-mail must have lowercase letters!!')
        }

        const employeeExists = await this.employeeRepository.findById(id);
        if(!employeeExists){
            throw new Error('Employee does not exists')
        }

        if(!comparePassword(old_password, employeeExists.password)){
            throw new Error('Incorrect password');
        }

        if(data.password !== confirm_password){
            throw new Error('Passwords do not match. Please try again')
        }

        const employee = await this.employeeRepository.updateCredentials(data, id)
        return employee
    }
}