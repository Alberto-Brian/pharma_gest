import { IProductRequest, IProductResponse } from "../../../interfaces/IProduct";
import IProductRepository from "../../../repositories/IProductRepository";

export default class CreateProductUseCase {
    constructor(
        private productRepository: IProductRepository
    ){}

    async run(data: IProductRequest): Promise<IProductResponse | Error>{
     
        if(!data.name || !data.price || !data.image || !data.id_pharmacy || !data.id_category){
            throw new Error('fill all mandatory fields!!');
        }        

        const response = await this.productRepository.createProduct(data);
        return response
    }
}