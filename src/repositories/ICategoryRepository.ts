import IResultPaginated from "../interfaces/IResultPaginated";
import { ICategoryRequest, ICategoryResponse } from "../interfaces/ICategory";

export default interface ICategoryRepository {
    create: (data: ICategoryRequest) => Promise<ICategoryResponse | Error>
    read: (page: number, perPage: number) => Promise<IResultPaginated>
    find: (name: string) => Promise<ICategoryResponse | null>
    delete: (id: string) => Promise<void>
}