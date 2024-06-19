import ICartRepository from "../../../repositories/ICartRepository";
import { ICartBuyingResponse } from "../../../interfaces/ICart";
import { Cart } from "../../../utils/types";
import { IResultCartPaginated } from "../../../interfaces/IResultPaginated";

export default class ShowCartUseCase {
    constructor(
        private cartRepository: ICartRepository
    ){}

 async run(page: number, perPage: number): Promise<IResultCartPaginated>{
     const result = await this.cartRepository.showCart(page, perPage);
     return result;
    }
}