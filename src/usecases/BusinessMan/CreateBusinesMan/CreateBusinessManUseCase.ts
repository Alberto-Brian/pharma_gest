import validator from "validator";
import { IBusinessManRequest, ICreatedBusinessManResponse } from "../../../interfaces/IBusinessMan";
import IBusinessManRepository from "../../../repositories/IBusinessManRepository";

export default class CreateBusinessManUseCase {
    constructor(private userRepository: IBusinessManRepository){}

    async run(user_data: IBusinessManRequest): Promise<ICreatedBusinessManResponse | Error>{
        if(!user_data.username || !user_data.email || !user_data.password) {
            throw new Error("Fill all mandatory fields!!")
        }

        const user = await this.userRepository.findByEmail(user_data.email)
        if(user){
            throw new Error('user already exists!!');
        }
        
        if(!validator.isEmail(user_data.email)){
                    throw new Error('Invalid Email!!')
                }     
        
        const response = await this.userRepository.createBusinessMan(user_data);
        return response;
    }

}