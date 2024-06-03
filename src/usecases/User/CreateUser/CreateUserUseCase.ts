import validator from 'validator';
import IUserRepository from '../../../repositories/IUserRepository'; 

import { 
        IUserCreateRequest, 
        IUserCreateResponse
    } from '../../../interfaces/IUser';


export default class CreateUserUseCase {
    constructor(private userRepository: IUserRepository){}

    async run(user_data: IUserCreateRequest, confirm_password: string): Promise<IUserCreateResponse | Error>{
        
        if(!user_data.username || !user_data.email || 
            !user_data.password || !confirm_password) {
                throw new Error("Fill all mandatory fields!!")
            }
            
            if(!validator.isEmail(user_data.email)){
                throw new Error('Invalid Email!!')
            }  
            
            if(!validator.isLowercase(user_data.email)){
                throw new Error('E-mail must have lowercase letters!!');
            }
            
        const userExists = await this.userRepository.findByEmail(user_data.email)
        if(userExists){
            throw new Error('user already exists!!');
        }

        if(user_data.password !== confirm_password){
            throw new Error('Passwords do not match. Please try again')
        }

        const response = await this.userRepository.create(user_data);
        return response;
    }

}