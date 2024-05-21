import { ISigInRequest, ISigInResponse } from "../../../interfaces/IAuth";
import ISignInRepository from "../../../repositories/IAuthRepository";
import IBusinessManRepository from "../../../repositories/IBusinessManRepository";
import validator from 'validator';

export default class SigInEntinty{
    constructor(
        private signInUser: ISignInRepository,
        private userRepository: IBusinessManRepository
    ){}

    async run(data: ISigInRequest): Promise<ISigInResponse | void>{
        if(!validator.isEmail(data.email)){
            throw new Error('Invalid email!!')
        }
        const userExists = await this.userRepository.findByEmail(data.email);
        if(!userExists){
            throw new Error('User doesn\'t exists!!')
        }
        const user = await this.signInUser.sigin(data.email, data.password);
        return user;
    }
}