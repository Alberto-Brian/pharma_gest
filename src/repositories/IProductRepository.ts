import { IProductRequest, IProductResponse } from "../interfaces/IProduct";
import  IResultPaginated  from "../interfaces/IResultPaginated";

export default interface IProductRepository {
    createProduct: (data: IProductRequest) => Promise<IProductResponse | Error>
    readAllProducts: (page: number, perPage: number) => Promise<IResultPaginated>
    readAllDeletedProducts: (page: number, perPage: number) => Promise<IResultPaginated>
    findByIdProduct: (id: string) => Promise<IProductResponse | null>
    findByNameProduct: (name: string) => Promise<IProductResponse | null>
    findByPharmacyProduct: (id_pharmacy: string, page: number, perPage: number) => Promise<IResultPaginated>
    findByCategoryProducts: (id_category: string, page: number, perPage: number) => Promise<IResultPaginated>
    deleteProduct: (id: string, user: string) => Promise<void>
}

//TO DO LIST 

/*
    set expiration date attribute

*/