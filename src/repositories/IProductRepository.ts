import  IResultPaginated  from "../interfaces/IResultPaginated";
import { 
        IProductRequest, 
        IProductResponse, 
        IProductUpdateRequest,
        IProductUpdateResponse, 
        IProductUpdatePriceRequest, 
        IProductUpdatePriceResponse,
        IProductUpdateImageResponse,
    } from "../interfaces/IProduct";

export default interface IProductRepository {
    createProduct: (data: IProductRequest) => Promise<IProductResponse | Error>
    readAllProducts: (page: number, perPage: number) => Promise<IResultPaginated>
    readAllDeletedProducts: (page: number, perPage: number) => Promise<IResultPaginated>
    findByIdProduct: (id: string) => Promise<IProductResponse | null>
    findByNameProduct: (name: string) => Promise<IProductResponse | null>
    findByPharmacyProduct: (id_pharmacy: string, page: number, perPage: number) => Promise<IResultPaginated>
    findByCategoryProducts: (id_category: string, id_pharmacy: string, page: number, perPage: number) => Promise<IResultPaginated>
    deleteProduct: (id: string, user: string) => Promise<void>
    updateProduct: (data: IProductUpdateRequest, id: string) => Promise<IProductUpdateResponse>
    updatePriceProduct: (data: IProductUpdatePriceRequest) => Promise<IProductUpdatePriceResponse>
    updateImageProduct: (filename: string, id: string) => Promise<IProductUpdateImageResponse>
}

//TO DO LIST 

/*
    set expiration date attribute

*/