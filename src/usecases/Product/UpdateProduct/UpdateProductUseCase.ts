import IProductRepository from "../../../repositories/IProductRepository";
import { IProductUpdateRequest, IProductUpdateResponse } from "../../../interfaces/IProduct";

export default class UpdateProductUseCase {
    constructor(
        private productRepository: IProductRepository
    ){}

 async run(data: IProductUpdateRequest, id: string): Promise<IProductUpdateResponse>{
        const productExists = await this.productRepository.findByIdProduct(id);
        if(!productExists){
            throw new Error("Product does not exist!!")
        }
        const product = await this.productRepository.updateProduct(data, id);
        return product
    }
}