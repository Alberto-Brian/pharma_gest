import IBusinessManRepository from "../../../repositories/IBusinessManRepository";
import { IBusinessManUpdateRequest, IBusinessManUpdateResponse } from "../../../interfaces/IBusinessMan";

export default class UpdateBusinessManUseCase {
    constructor(
        private business_manRepository: IBusinessManRepository
    ){}

 async run(data: IBusinessManUpdateRequest, id: string): Promise<IBusinessManUpdateResponse>{
    const business_manExists = await this.business_manRepository.findById(id);
    if(business_manExists && !data.birthdate){
            data.birthdate = business_manExists.birthdate;
        }
        const business_man = await this.business_manRepository.updateBusinessMan(data, id);
        return business_man
    }
}