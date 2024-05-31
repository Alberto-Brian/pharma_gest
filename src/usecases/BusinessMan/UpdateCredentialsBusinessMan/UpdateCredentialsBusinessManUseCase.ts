import IBusinessManRepository from "../../../repositories/IBusinessManRepository";
import validator from "validator";

import { comparePassword } from "../../../utils/bcrypt";
import { 
        IBusinessManUpdateCredentialsRequest, 
        IBusinessManUpdateCredentialsResponse 
     } from "../../../interfaces/IBusinessMan";

export default class UpdateCredentialsBusinessManUseCase {
    constructor(
        private business_manRepository: IBusinessManRepository
    ){}

 async run(data: IBusinessManUpdateCredentialsRequest,
           old_password: string, confirm_password: string, id: string):
           Promise<IBusinessManUpdateCredentialsResponse>{

        if(!data.email || !data.password || !old_password || !confirm_password){
            throw new Error('Fill all mandatory fields');
        }    

        if(!validator.isEmail(data.email)){
            throw new Error('Invalid email!!');
        }

        if(!validator.isLowercase(data.email)){
             throw new Error('E-mail must have lowercase letters!!')
        }

        const business_manExists = await this.business_manRepository.findById(id);
        if(!business_manExists){
            throw new Error('business_man does not exists')
        }

        if(!comparePassword(old_password, business_manExists.password)){
            throw new Error('Incorrect password');
        }

        if(data.password !== confirm_password){
            throw new Error('Passwords do not match. Please try again')
        }

        const business_man = await this.business_manRepository.updateCredentialsBusinessMan(data, id)
        return business_man
    }
}