import ICartRepository from "../repositories/ICartRepository";
import prisma from "../utils/prisma";
import { Product } from "../utils/types";
import { ICartResponse, ICartBuyingResponse } from "../interfaces/ICart";
import { Cart } from '../utils/types'
import { ResultCartPaginated } from "../utils/Pagination";
import { IResultCartPaginated } from "@/interfaces/IResultPaginated";

const db_product = prisma.product;
const cart: Cart  = { products: [], total: 0 }

export default class PrismaCartRepository implements ICartRepository {
    
    async addProductToCart(product: Product): Promise<ICartResponse>{
       let doPush: boolean = true;
       const found_product = await db_product.findUnique({
           where: { id: product.product_id },
           select: {
               id: true,
               name: true,
               price: true,
               old_price: true,
               image: true,
               description: true,
               pharmacy: { select: { id: true } }
               } 
          })
               
               for(const element of cart.products){
                   if(element && (element.id === product.product_id)){
                       element.count += product.count
                       doPush = false;
                       element.subtotal = (element.count * found_product?.price!).toString();
                   }
               }
               

    const subtotal = product.count * found_product?.price!;
    cart.total += parseFloat(subtotal.toFixed(2));
    const prodd: ICartResponse = { ...found_product, count: product.count, subtotal: subtotal.toFixed(2) }
    doPush && cart.products.push(prodd);

    cart.total = parseFloat(cart.total.toFixed(2));

    const currentProduct = cart.products.filter( item => item.id === product.product_id)
    return currentProduct[0]
}


    async showCart(page: number, perPage: number): Promise<IResultCartPaginated>{
        let products = cart.products.map(product => {
            // if(product){
                const id = product.id
                const name = product.name
                const price = product.price
                const count = product.count
                const subtotal = product.subtotal
                return {id, name, price, count, subtotal}
            // } 
         } )

         const resultCartPagitnated = await ResultCartPaginated(products, page, perPage, cart.total.toFixed(2));
        // const result =  { products, total: cart.total.toFixed(2) }
        return resultCartPagitnated;
    }
        
    async buyProductsInCart(): Promise<void>{

        if(!cart.products || !cart.total){
            throw new Error("Cart is empty!!")
        }
            cart.products = [];
            cart.total = 0;

        }
    
    async removeProductInCart(product: string): Promise<Cart>{
            const index = cart.products.findIndex(item => item.id == product);
            if(index !== -1) cart.products.splice(index, 1);
            cart.total = 0;
            for(const instance of cart.products){
                if(instance) cart.total += parseFloat(instance.subtotal);
            }
            
        return cart
    } 

}
