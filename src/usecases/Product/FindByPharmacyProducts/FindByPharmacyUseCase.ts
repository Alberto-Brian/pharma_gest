import IProductRepository from '../../../repositories/IProductRepository';
import IResultPaginated from '../../../interfaces/IResultPaginated';
import IPharmacyRepository from '../../../repositories/IPharmacyRepositorio';
export default class FindByPharmacyProductUseCase {
    constructor(
        private productRepository: IProductRepository,
        private pharmacyRepository: IPharmacyRepository
    ){}

    async run(id_pharmacy: string, page: number, perPage: number): Promise<IResultPaginated> {
        const pharmacy = await this.pharmacyRepository.findById(id_pharmacy);
        if(!pharmacy){
            throw new Error('This pharmacy does not exists!!')
        } 

        const products = await this.productRepository.findByPharmacyProduct(id_pharmacy, page, perPage);
        return products;

    }
}