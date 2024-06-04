import { IProductRequest, IProductResponse } from "../../../interfaces/IProduct";
import IProductRepository from "../../../repositories/IProductRepository";
import IPharmacyRepository from "../../../repositories/IPharmacyRepositorio";
import ICategoryRepository from "../../../repositories/ICategoryRepository";

export default class CreateProductUseCase {
    constructor(
        private productRepository: IProductRepository,
        private pharmacyRepository: IPharmacyRepository,
        private categoryRepository: ICategoryRepository
    ){}

    async run(data: IProductRequest): Promise<IProductResponse | Error>{
     
        if(!data.name || !data.price || !data.image || !data.id_pharmacy || !data.id_category){
            throw new Error('fill all mandatory fields!!');
        }        

        const pharmacyExists = await this.pharmacyRepository.findById(data.id_pharmacy);
        const categoryExists = await this.categoryRepository.findById(data.id_category);
        if(!pharmacyExists){
            throw new Error('This Pharmacy does not exists!!')
        } 

        if(!pharmacyExists.status){
            throw new Error('Pharmacy desactivated!!');
        }

        if(!categoryExists){
            throw new Error('Category does not exists!!');
        }
        
        const response = await this.productRepository.createProduct(data);
        return response
    }
}