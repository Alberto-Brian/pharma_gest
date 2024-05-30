import validator from "validator";
import { IBusinessManRequest, ICreatedBusinessManResponse } from "../../../interfaces/IBusinessMan";
import IPharmacyRepository from "../../../repositories/IPharmacyRepositorio";
import IBusinessManRepository from "../../../repositories/IBusinessManRepository";

export default class CreateBusinessManUseCase {
    constructor(
        private userRepository: IBusinessManRepository,
        private pharmacyRepository: IPharmacyRepository
        ){}

    async run(user_data: IBusinessManRequest, id_pharmacy: string, confirm_password: string): Promise<ICreatedBusinessManResponse | Error>{
        if(!user_data.username || !user_data.email || 
           !user_data.password || !confirm_password) {
            throw new Error("Fill all mandatory fields!!")
        }
        
        const user = await this.userRepository.findByEmail(user_data.email)
        if(user){
            throw new Error('user already exists!!');
        }

        if(!validator.isEmail(user_data.email)){
                    throw new Error('Invalid Email!!')
        }    
         
        if(user_data.password !== confirm_password){
            throw new Error('Passwords do not match. Please try again')
        }

        if(!id_pharmacy) {
            throw new Error("Pharmacy not selected")
        }

        const pharmacy = await this.pharmacyRepository.findById(id_pharmacy);
        if(!pharmacy){
            throw new Error('Pharmacy not exists!!')
        }

        const pendingPharmacy = await this.pharmacyRepository.findByIdPendingPharmacy(id_pharmacy);
        if(!pendingPharmacy){
            throw new Error('Pharmacy already in use!!')
        }        


        
        
        const response = await this.userRepository.createBusinessMan(user_data, id_pharmacy);
        return response;
    }

}