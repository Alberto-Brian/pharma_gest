import IPharmacyRepository from "../../../repositories/IPharmacyRepositorio";
import { IPharmacyResponse } from "../../../interfaces/IPharmacy";
import validator from "validator";
export default class FindByIdPharmacyUseCase {
    constructor(
        private pharmacyRepository: IPharmacyRepository
    ){}

    async run(id: string): Promise<IPharmacyResponse | Error> {
       const pharmacy = await this.pharmacyRepository.findById(id);
       if(!pharmacy){
          throw new Error('Pharmacy does not exists!!')
       }
       return pharmacy
    }
}