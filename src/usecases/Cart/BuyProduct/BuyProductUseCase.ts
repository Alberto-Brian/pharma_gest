import ICartRepository from "../../../repositories/ICartRepository";
import { Cart } from "../../../utils/types";

export default class BuyProductUseCase {
    constructor(
        private cartRepository: ICartRepository
    ){}

 async run(cart: Cart): Promise<void>{
        await this.cartRepository.buyProducts(cart);
    }
}