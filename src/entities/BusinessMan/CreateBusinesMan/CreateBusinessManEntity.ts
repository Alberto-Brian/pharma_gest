import validator from "validator";
import { IBusinessManRequest, ICreatedBusinessManResponse } from "../../../interfaces/IBusinessMan";
import IBusinessManRepository from "../../../repositories/IBusinessManRepository";

export default class CreateBusinessManEntity {
    constructor(private userRepository: IBusinessManRepository){}

    async run(user_data: IBusinessManRequest): Promise<ICreatedBusinessManResponse | Error>{
        const user = await this.userRepository.findByEmail(user_data.email)

        if(!validator.isEmail(user_data.email)){
            throw new Error('Invalid Email!!')
        }

        if(user){
            throw new Error('user already exists!!');
        }

        const response = await this.userRepository.createBusinessMan(user_data);
        return response;
    }

}