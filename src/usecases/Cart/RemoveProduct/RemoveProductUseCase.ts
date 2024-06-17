import ICartRepository from "../../../repositories/ICartRepository";
import { ICartResponse} from "../../../interfaces/ICart";

export default class RemoveProductUseCase {
    constructor(
        private cartRepository: ICartRepository
    ){}

 async run(product: string): Promise<any>{
        const cart = await this.cartRepository.removeProductInCart(product)
        return cart
    }
}