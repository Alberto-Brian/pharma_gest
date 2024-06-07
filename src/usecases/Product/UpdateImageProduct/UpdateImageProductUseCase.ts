import IProductRepository from "../../../repositories/IProductRepository";
import {IProductUpdateImageResponse } from "../../../interfaces/IProduct";

export default class UpdateImageProductUseCase {
    constructor(
        private productRepository: IProductRepository
    ){}

 async run(filename: string, id: string): Promise<IProductUpdateImageResponse>{

        const product = await this.productRepository.updateImageProduct(filename, id)
        return product
    }
}