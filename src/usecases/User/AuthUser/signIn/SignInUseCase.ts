import { ISigInRequest, ISigInResponse } from "../../../../interfaces/IAuth";
import IUserRepository from "../../../../repositories/IUserRepository";
import validator from 'validator';

export default class SignInUseCase{
    constructor(
        private userRepository: IUserRepository
    ){}

    async run(data: ISigInRequest): Promise<ISigInResponse | void>{
        
        if(!data.email){
            throw new Error('E-mail is mandatory');
        }

        if(!data.password){
            throw new Error('Password is mandatory');
        }

        if(!validator.isEmail(data.email)){
            throw new Error('Invalid email!!')
        }

        if(!validator.isLowercase(data.email)){
            throw new Error('E-mail must have lowercase letters!!')
        }

        const userExists = await this.userRepository.findByEmail(data.email);
        if(!userExists){
            throw new Error('User does not exists!!');
        }

        if(!userExists.status){
            throw new Error('User already desactivated');
        }

        const user = await this.userRepository.sigin(data);
        return user;
    }
}