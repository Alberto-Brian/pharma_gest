import { IPharmacyRequest, IPharmacyResponse } from "../../../interfaces/IPharmacy";
import IPharmacyRepository from "../../../repositories/IPharmacyRepositorio";
import validator from "validator";

export default class CreatePharmacyUseCase {
    constructor(
        private pharmacyRepository: IPharmacyRepository
    ){}

    async run(data: IPharmacyRequest): Promise<IPharmacyResponse | Error> {

        if(!data.name || !data.email || !data.banking_account || !data.doc) {
            throw new Error("Fill all mandatory fields!!")
        }

        if(!validator.isEmail(data.email)){
            throw new Error('Invalid email!!')
        }

        if(!validator.isNumeric(data.banking_account)){
            throw new Error('Invalid banking account, it can only have numbers')
        }

        if(!validator.isNumeric(data.banking_account)){
            throw new Error('Invalid phone number, it can only have numbers')
        }


        const pharmacyExists = await this.pharmacyRepository.findByEmail(data.email)
        if(pharmacyExists){
            throw new Error('Pharmacy already exists!!');
        }

        const result = await this.pharmacyRepository.createPharmacy(data);
        return result
    }
}