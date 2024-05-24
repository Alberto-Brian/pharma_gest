import IPharmacyRepository from "../../../repositories/IPharmacyRepositorio";

export default class DeletePharmacyUseCase {
    constructor(
        private pharmacyRepository: IPharmacyRepository
    ){}

    async run(id: string, user: string): Promise<void> {
        const pharmacyExists = this.pharmacyRepository.findById(id);
        if(!pharmacyExists){
            throw new Error('Pharmacy does not exists!!');
        }

         await this.pharmacyRepository.delete(id, user)
    }
}