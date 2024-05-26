import IBase from "./IBase"

export default interface IProduct extends IBase {
    name: string
    price: number
    old_price: number | null
    status: boolean
    image: string
    description?: string
    id_pharmacy: string
    id_category: string
    deleted_at: Date
    deleted_by: Date
}

export interface IProductRequest {
    name: string
    price: number
    old_price: number | null
    image: string
    description: string | null
    id_pharmacy: string
    id_category: string
}

export interface IProductResponse extends IBase {
    name: string
    price: number
    image: string
    description: string | null
    id_pharmacy: string
    id_category: string
}

