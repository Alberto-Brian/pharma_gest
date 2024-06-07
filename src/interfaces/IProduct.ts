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
    // id_pharmacy: string | null
    id_category: string
}

//------------------------------------------------------------
//UPDATE PRICE REQUEST
export interface IProductUpdatePriceRequest{
    id: string
    price: number
}

//UPDATE PRICE RESPONSE
export interface IProductUpdatePriceResponse extends IBase{
    price: number
    old_price: number | null
}


//--------------------------------------------------------
//UPDATE DATA REQUEST
export interface IProductUpdateRequest{
    name: string
    description: string | null
}

//UPDATE DATA RESPONSE
export interface IProductUpdateResponse extends IBase{
    name: string
    description: string | null
}


//-------------------------------------------------------
//UPDATE IMAGE RESPONSE
export interface IProductUpdateImageResponse extends IBase{
    image: string | null
}
