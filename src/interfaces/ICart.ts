export interface ICartResponse {
    id: string,
    name: string,
    price: number,
    old_price: number | null,
    image: string,
    description: string | null,
    pharmacy: {id: string}
    count: number
    subtotal: number
}