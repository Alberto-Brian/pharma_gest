import IProductRepository from "../../../repositories/IProductRepository";
import { IProductResponse } from "../../../interfaces/IProduct";

export default class FindByNameProductUseCase {
    constructor(
        private productRepository: IProductRepository
    ){}

    async run(name: string): Promise<IProductResponse | null>{
        const product = await this.productRepository.findByNameProduct(name);

        if(!product){
            throw new Error('Product not found!!');
        }

        return product;
    }
}