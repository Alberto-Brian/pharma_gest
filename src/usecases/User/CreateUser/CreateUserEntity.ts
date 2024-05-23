import { IUserRequest } from '../../../interfaces/IUser';
import { IUserCreatedResponse } from './CreateUserInterface';
import IUserRepository from '../../../repositories/IUserRepository'; 

export default class CreateUserEntity {
    constructor(private userRepository: IUserRepository){}

    async run(user_data: IUserRequest): Promise<IUserCreatedResponse | Error>{
        const user = await this.userRepository.findByEmail(user_data.email)

        if(user){
            throw new Error('user already exists!!');
        }

        const response = await this.userRepository.create(user_data);
        return response;
    }

}