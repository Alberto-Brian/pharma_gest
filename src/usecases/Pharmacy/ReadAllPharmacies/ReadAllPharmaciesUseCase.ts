import IPharmacyRepository from "../../../repositories/IPharmacyRepositorio";
import IResultPaginated from "../../../interfaces/IResultPaginated";

export default class ReadAllPharmaciesUseCase {
     constructor(
        private pharmacyRepository: IPharmacyRepository
     ){}

     async run(page: number, perPage: number): Promise<IResultPaginated>{
            const result = await this.pharmacyRepository.readPharmacies(page, perPage);
            return result;
     }
}