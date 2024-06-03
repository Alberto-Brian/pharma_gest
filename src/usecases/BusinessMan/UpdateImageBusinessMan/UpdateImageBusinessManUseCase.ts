import IBusinessManRepository from "../../../repositories/IBusinessManRepository";
import {IBusinessManUpdateImageResponse } from "../../../interfaces/IBusinessMan";

export default class UpdateImageBusinessManUseCase {
    constructor(
        private business_manRepository: IBusinessManRepository
    ){}

 async run(filename: string, id: string): Promise<IBusinessManUpdateImageResponse>{
        const business_man = await this.business_manRepository.updateImageBusinessMan(filename, id)
        return business_man
    }
}