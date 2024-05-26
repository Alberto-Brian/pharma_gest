import IProductRepository from "../../../repositories/IProductRepository";
import { IProductResponse } from "../../../interfaces/IProduct";

export default class FindByIdProductUseCase {
    constructor(
        private productRepository: IProductRepository
    ){}

    async run(id: string): Promise<IProductResponse | null>{
        const product = await this.productRepository.findByIdProduct(id);

        if(!product){
            throw new Error('Product not found!!');
        }

        return product;
    }
}