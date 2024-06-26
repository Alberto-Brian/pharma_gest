import ICartRepository from "../../../repositories/ICartRepository";
import { ICartBuyingResponse } from "../../../interfaces/ICart";
import { Cart } from "../../../utils/types";

export default class BuyProductUseCase {
    constructor(
        private cartRepository: ICartRepository
    ){}

 async run(): Promise<void>{
        await this.cartRepository.buyProductsInCart();
        return
    }
}