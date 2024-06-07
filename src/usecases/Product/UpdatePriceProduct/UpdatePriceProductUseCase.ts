import IProductRepository from "../../../repositories/IProductRepository";
import { IProductUpdatePriceRequest, IProductUpdatePriceResponse } from "../../../interfaces/IProduct";

export default class UpdatePriceProductUseCase {
    constructor(
        private productRepository: IProductRepository
    ){}

 async run(data: IProductUpdatePriceRequest): Promise<IProductUpdatePriceResponse>{

        const product = await this.productRepository.updatePriceProduct(data)
        return product
    }
}