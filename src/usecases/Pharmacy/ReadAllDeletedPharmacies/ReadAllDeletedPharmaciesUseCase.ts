import IPharmacyRepository from "../../../repositories/IPharmacyRepositorio";
import IResultPaginated from "../../../interfaces/IResultPaginated";

export default class ReadAllDeletedPharmaciesUseCase {
     constructor(
        private pharmacyRepository: IPharmacyRepository
     ){}

     async run(page: number, perPage: number): Promise<IResultPaginated>{
            const result = await this.pharmacyRepository.readAllDeletedPharmacies(page, perPage);
            return result;
     }
}