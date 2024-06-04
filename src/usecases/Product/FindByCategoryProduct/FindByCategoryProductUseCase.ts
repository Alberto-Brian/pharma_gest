import IProductRepository from "../../../repositories/IProductRepository";
import ICategoryRepository from "../../../repositories/ICategoryRepository";
import IResultPaginated from "../../../interfaces/IResultPaginated";
import IPharmacyRepository from "../../../repositories/IPharmacyRepositorio";
export default class FindByCategoryProductUseCase {
    constructor(
        private productRepository: IProductRepository,
        private pharmacyRepository: IPharmacyRepository,
        private categoryRepository: ICategoryRepository
    ){}

    async run(id_category: string, id_pharmacy: string, page: number, perPage: number): Promise<IResultPaginated>{

        const pharmacyExists = await this.pharmacyRepository.findById(id_pharmacy)
        const categoryExists = await this.categoryRepository.findById(id_category);

        if(!pharmacyExists){
            throw new Error('This pharmacy does not exists!!');
        }
        
        if(!categoryExists){
            throw new Error('This category does not exists!!');
        }
        
        const products = await this.productRepository.
        findByCategoryProducts(id_category, id_pharmacy, page, perPage);
        return products;
    }
}