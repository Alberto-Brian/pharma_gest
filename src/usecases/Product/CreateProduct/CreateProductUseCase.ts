import { IProductRequest, IProductResponse } from "../../../interfaces/IProduct";
import IProductRepository from "../../../repositories/IProductRepository";
import IPharmacyRepository from "../../../repositories/IPharmacyRepositorio";

export default class CreateProductUseCase {
    constructor(
        private productRepository: IProductRepository,
        private pharmacyRepository: IPharmacyRepository
    ){}

    async run(data: IProductRequest): Promise<IProductResponse | Error>{
     
        if(!data.name || !data.price || !data.image || !data.id_pharmacy /*|| !data.id_category*/){
            throw new Error('fill all mandatory fields!!');
        }        

        const pharmacyExists = await this.pharmacyRepository.findById(data.id_pharmacy);
        if(!pharmacyExists){
            throw new Error('This Pharmacy does not exists!!')
        } 

        if(!pharmacyExists.status){
            throw new Error('Pharmacy desactivated!!');
        }
        
        const response = await this.productRepository.createProduct(data);
        return response
    }
}