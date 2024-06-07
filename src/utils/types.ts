export type MODEL = { 
    model: string
    findByEmail: (email: string) => Object 
} 

export type Product  = {product_id: string, count: number}
export type Cart = {products: Object[], total: number}