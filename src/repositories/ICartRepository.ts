import { IResultCartPaginated } from "../interfaces/IResultPaginated";
import { ICartBuyingResponse } from "../interfaces/ICart";
import { Product, Cart } from "../utils/types";

export default interface ICartRepository {
    addProductToCart: (product: Product ) => Promise<Object>
    removeProductInCart: (product: string) => Promise<Object>
    showCart: (page: number, perPage: number) => Promise<IResultCartPaginated>
    buyProductsInCart: () => Promise<void>

    // readUsers: (page: number, perPage: number)  => Promise<IResultPaginated>
    // readEmployees: (page: number, perPage: number)  => Promise<IResultPaginated>
    // readProducts: (page: number, perPage: number)  => Promise<IResultPaginated>
    
}