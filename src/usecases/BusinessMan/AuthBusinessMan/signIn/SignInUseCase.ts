import { builtinModules } from "module";
import { ISigInRequest, ISigInResponse } from "../../../../interfaces/IAuth";
import IBusinessManRepository from "../../../../repositories/IBusinessManRepository";
import validator from 'validator';

export default class SignInUseCase{
    constructor(
        private userRepository: IBusinessManRepository
    ){}

    async run(data: ISigInRequest): Promise<ISigInResponse | void>{
        if(!validator.isEmail(data.email)){
            throw new Error('Invalid email!!')
        }

        const businessManExists = await this.userRepository.findByEmail(data.email);
        if(!businessManExists){
            throw new Error('Business man does not exists!!');
        }

        const user = await this.userRepository.sigin(data.email, data.password);
        return user;
    }
}