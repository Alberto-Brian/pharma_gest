export interface ICartResponse {
    id?: string,
    name?: string,
    price?: number,
    old_price?: number | null,
    image?: string,
    description?: string | null,
    pharmacy?: {id: string}
    count: number
    subtotal: string
}

//I CART BUYING RESPONSE
export interface ICartBuyingResponse{
    products: {
        name?: string
        price?: number
        count: number
        subtotal: string
        }[]
    total: string
}

