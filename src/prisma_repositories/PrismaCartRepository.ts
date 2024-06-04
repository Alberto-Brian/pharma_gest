import ICartInterface from "../repositories/ICartRepository";
import prisma from "../utils/prisma";
import { Product } from "../utils/types";
import { ICartResponse } from "../interfaces/ICart";

const db_product = prisma.product;
const cart: Object[] = []

// let cart: {products: Object[], total: number}

export default class PrismaCartRepository implements ICartInterface {
    
   async addProductToCart(product: Product): Promise<any[]>{
    const found_product = await db_product.findUnique({
        where: { id: product.product_id },
        select: {
            id: true,
            name: true,
            price: true,
            old_price: true,
            image: true,
            description: true,
            pharmacy: {
                select: {
                    id: true
                }
            }
        } 
    })

    const subtotal = product.count * found_product?.price!;
    const prodd: Object = { ...found_product, count: product.count, subtotal }
    // cart.total += subtotal; 
    cart.push(prodd)
    

    console.log(cart);
    return cart
}

}