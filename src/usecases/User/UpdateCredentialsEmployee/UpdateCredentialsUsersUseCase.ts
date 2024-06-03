import IUserRepository from "../../../repositories/IUserRepository";
import { IUserUpdateCredentialsRequest, IUserUpdateCredentialsResponse } from "../../../interfaces/IUser";
import { comparePassword } from "../../../utils/bcrypt";
import validator from "validator";
export default class UpdateCredentialsUsersUseCase {
    constructor(
        private userRepository: IUserRepository
    ){}

 async run(data: IUserUpdateCredentialsRequest,
           old_password: string, confirm_password: string, id: string):
           Promise<IUserUpdateCredentialsResponse>{

        if(!data.email || !data.password || !old_password || !confirm_password){
            throw new Error('Fill all mandatory fields');
        }    

        if(!validator.isEmail(data.email)){
            throw new Error('Invalid email!!');
        }

        if(!validator.isLowercase(data.email)){
             throw new Error('E-mail must have lowercase letters!!')
        }

        const userExists = await this.userRepository.findById(id);
        if(!userExists){ 
            throw new Error('User does not exists')
        }

        if(!comparePassword(old_password, userExists.password)){
            throw new Error('Incorrect password');
        }

        if(data.password !== confirm_password){
            throw new Error('Passwords do not match. Please try again')
        }

        const user = await this.userRepository.updateCredentials(data, id)
        return user
    }
}