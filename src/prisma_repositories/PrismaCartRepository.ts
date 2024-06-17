import ICartRepository from "../repositories/ICartRepository";
import prisma from "../utils/prisma";
import { Product } from "../utils/types";
import { ICartResponse, ICartBuyingResponse } from "../interfaces/ICart";
import { Cart } from '../utils/types'

const db_product = prisma.product;
const cart: Cart  = { products: [], total: 0 }

export default class PrismaCartRepository implements ICartRepository {
    
    async addProductToCart(product: Product): Promise<Cart>{
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
                       element.subtotal = (element.count * found_product?.price!).toString();
                       doPush = false;
                   }
               }
               

    const subtotal = product.count * found_product?.price!;
    cart.total += parseFloat(subtotal.toFixed(2));
    const prodd: ICartResponse = { ...found_product, count: product.count, subtotal: subtotal.toFixed(2) }
    doPush && cart.products.push(prodd);

    cart.total = parseFloat(cart.total.toFixed(2));
    return cart
}


    async showCart(): Promise<ICartBuyingResponse>{
        const products = cart.products.map((product) => {
            // if(product){
                const name = product.name
                const price = product.price
                const count = product.count
                const subtotal = product.subtotal
                return {name, price, count, subtotal}
            // } 
         } )

        const result =  { products, total: cart.total.toFixed(2) }
        return result;
        }
        
    async buyProductsInCart(): Promise<void>{

        if(!cart.products || !cart.total){
            throw new Error("Cart is empty!!")
        }
            cart.products = [];
            cart.total = 0;

        }
    
    async removeProductInCart(product: string): Promise<Cart>{
        for(const oneproduct in cart.products){
            if(cart.products[oneproduct].id === product){
                delete cart.products[oneproduct];
                cart.total = 0;
                for(const instance of cart.products){
                    if(instance) cart.total += parseFloat(instance.subtotal);
                }
            }
        }
        return cart
    }
}