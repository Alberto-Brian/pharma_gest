import IPharmacyRepository from "../../../repositories/IPharmacyRepositorio";
import { IPharmacyResponse } from "../../../interfaces/IPharmacy";
import validator from "validator";
export default class FindByEmailPharmacyUseCase {
    constructor(
        private pharmacyRepository: IPharmacyRepository
    ){}

    async run(email: string): Promise<IPharmacyResponse | Error> {
        if(!validator.isEmail(email)){
            throw new Error('Invalid email');
        }

       const pharmacy = await this.pharmacyRepository.findByEmail(email);
       if(!pharmacy){
          throw new Error('Pharmacy does not exists!!')
       }
       return pharmacy
    }
}