import ICartRepository from "../../../repositories/ICartRepository";
import { Product } from "../../../utils/types";
import { ICartResponse } from "../../../interfaces/ICart";
export default class AddProductUseCase {
    constructor(
        private cartRepository: ICartRepository
    ){}

 async run(data: Product): Promise<any>{

        const products = this.cartRepository.addProductToCart(data)
        return products
    }
}