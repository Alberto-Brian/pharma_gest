import IResultPaginated from "../interfaces/IResultPaginated";
import { IBusinessManRequest, IBusinessManResponse, ICreatedBusinessManResponse } from "../interfaces/IBusinessMan";
import { ISigInResponse } from "../interfaces/IAuth";


export default interface IBusinessManRepository {
    sigin: (email: string, password: string) => Promise<ISigInResponse | void>
    createBusinessMan: (data: IBusinessManRequest, id_pharmacy: string) => Promise<ICreatedBusinessManResponse | Error>;
    readAllBusinessMen: (page: number, perPage: number) => Promise<IResultPaginated>;
    readAllDeletedBusinessMen: (page: number, perPage: number) => Promise<IResultPaginated>;
    findByEmail: (email: string) => Promise<IBusinessManResponse | null>;
    findById: (id: string) => Promise<IBusinessManResponse | null>;
    delete: (id: string, user: string) => Promise<void>;
    setPharmacy: (id_pharmacy: string, id_business_man: string)=> Promise<void>;
} 

