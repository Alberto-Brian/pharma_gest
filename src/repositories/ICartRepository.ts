import { ICartResponse } from "../interfaces/ICart";
import { Product, Cart } from "../utils/types";

export default interface ICartInterface {
    addProductToCart: (product: Product ) => Promise<Object>
    buyProducts: (cart: Cart) => Promise<void>

    // readUsers: (page: number, perPage: number)  => Promise<IResultPaginated>
    // readEmployees: (page: number, perPage: number)  => Promise<IResultPaginated>
    // readProducts: (page: number, perPage: number)  => Promise<IResultPaginated>
    
}