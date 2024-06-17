import ICartRepository from "../../../repositories/ICartRepository";
import { Product } from "../../../utils/types";
// import { ICartResponse } from "../../../interfaces/ICart";
import IProductRepository from "../../../repositories/IProductRepository";
export default class AddProductUseCase {
    constructor(
        private cartRepository: ICartRepository,
        private productRepository: IProductRepository
    ){}

 async run(data: Product): Promise<any>{

     const productExists = await this.productRepository.findByIdProduct(data.product_id);
     if(!productExists){
         throw new Error("Product does not exists!!");
         } 
         
         if(!productExists.status){
             throw new Error("Product already desactivated!!");
             }
             
        const products = this.cartRepository.addProductToCart(data);
        return products
    }
}