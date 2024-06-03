import { builtinModules } from "module";
import { ISigInRequest, ISigInResponse } from "../../../../interfaces/IAuth";
import IEmployeeRepository from "../../../../repositories/IEmployeeRepository";
import validator from 'validator';

export default class SignInUseCase{
    constructor(
        private userRepository: IEmployeeRepository
    ){}

    async run(data: ISigInRequest): Promise<ISigInResponse | void>{
        if(!validator.isEmail(data.email)){
            throw new Error('Invalid email!!')
        }

        if(!validator.isLowercase(data.email)){
            throw new Error('E-mail must have lowercase letters!!')
       }

        const employeeExists = await this.userRepository.findByEmail(data.email);
        if(!employeeExists){
            throw new Error('Employee does not exists!!');
        }

        if(!employeeExists.status){
            throw new Error('Employee already desactivated!!')
        }
        const user = await this.userRepository.sigin(data);
        return user;
    }
}