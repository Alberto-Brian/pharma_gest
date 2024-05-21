import IResultPaginated from "../interfaces/IResultPaginated";
import { IBusinessManRequest, IBusinessManResponse, ICreatedBusinessManResponse } from "../interfaces/IBusinessMan";


export default interface IBusinessManRepository {
    createBusinessMan: (data: IBusinessManRequest) => Promise<ICreatedBusinessManResponse | Error>;
    readAllUsers: (page: number, perPage: number) => Promise<IResultPaginated>;
    readAllDeletedUsers: (page: number, perPage: number) => Promise<IResultPaginated>;
    findByEmail: (email: string) => Promise<IBusinessManResponse | null>;
    findById: (id: string) => Promise<IBusinessManResponse | null>;
    delete: (id: string, user: string) => Promise<void>;
} 