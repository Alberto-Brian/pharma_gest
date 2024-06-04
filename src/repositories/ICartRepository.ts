import { ICartResponse } from "../interfaces/ICart";
import { Product } from "../utils/types";

export default interface ICartInterface {
    addProductToCart: (product: Product ) => Promise<Object>

    // readUsers: (page: number, perPage: number)  => Promise<IResultPaginated>
    // readEmployees: (page: number, perPage: number)  => Promise<IResultPaginated>
    // readProducts: (page: number, perPage: number)  => Promise<IResultPaginated>
    
}