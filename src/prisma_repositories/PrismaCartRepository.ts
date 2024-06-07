import ICartInterface from "../repositories/ICartRepository";
import prisma from "../utils/prisma";
import { Product } from "../utils/types";
import { ICartResponse } from "../interfaces/ICart";
import { Cart } from '../utils/types'
const db_product = prisma.product;
const cart: Cart  = { products: [], total: 0 }

export default class PrismaCartRepository implements ICartInterface {
    
   async addProductToCart(product: Product): Promise<Cart>{
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

    const subtotal = product.count * found_product?.price!;
    cart.total += parseFloat(subtotal.toFixed(2));
    const prodd: Object = { ...found_product, count: product.count, subtotal: subtotal.toFixed(2) }
    cart.products.push(prodd)
    

    // console.log(cart);
    return cart
}


    async buyProducts(cart: Cart): Promise<void>{
        
    }
    
}