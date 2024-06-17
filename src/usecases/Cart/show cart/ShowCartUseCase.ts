import ICartRepository from "../../../repositories/ICartRepository";
import { ICartBuyingResponse } from "../../../interfaces/ICart";
import { Cart } from "../../../utils/types";

export default class ShowCartUseCase {
    constructor(
        private cartRepository: ICartRepository
    ){}

 async run(): Promise<ICartBuyingResponse>{
     const result = await this.cartRepository.showCart();
     return result;
    }
}