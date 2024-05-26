import IPharmacyRepository from "../../../repositories/IPharmacyRepositorio";
import IResultPaginated from "../../../interfaces/IResultPaginated";

export default class ReadAllPendingPharmaciesUseCase {
     constructor(
        private pharmacyRepository: IPharmacyRepository
     ){}

     async run(page: number, perPage: number): Promise<IResultPaginated>{
            const result = await this.pharmacyRepository.readPendingPharmacies(page, perPage);
            return result;
     }
}