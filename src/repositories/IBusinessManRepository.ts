import IResultPaginated from "../interfaces/IResultPaginated";
import { 
         IBusinessMan,
         IBusinessManCreateRequest, 
         IBusinessManCreateResponse, 
         IBusinessManUpdateRequest,
         IBusinessManUpdateResponse,
         IBusinessManUpdateImageResponse,
         IBusinessManUpdateCredentialsRequest,
         IBusinessManUpdateCredentialsResponse  
        } from "../interfaces/IBusinessMan";
import { ISigInResponse } from "../interfaces/IAuth";


export default interface IBusinessManRepository {
    sigin: (email: string, password: string) => Promise<ISigInResponse | void>
    createBusinessMan: (data: IBusinessManCreateRequest, id_pharmacy: string) => Promise<IBusinessManCreateResponse | Error>;
    readAllBusinessMen: (page: number, perPage: number) => Promise<IResultPaginated>;
    readAllDeletedBusinessMen: (page: number, perPage: number) => Promise<IResultPaginated>;
    findByEmail: (email: string) => Promise<IBusinessMan | null>;
    findById: (id: string) => Promise<IBusinessMan | null>;
    updateBusinessMan: (data: IBusinessManUpdateRequest, id: string) => Promise<IBusinessManUpdateResponse>
    updateImageBusinessMan: (filename: string, id: string) => Promise<IBusinessManUpdateImageResponse>
    updateCredentialsBusinessMan: (data: IBusinessManUpdateCredentialsRequest, id: string) => Promise<IBusinessManUpdateCredentialsResponse>
    delete: (id: string, user: string) => Promise<void>;
    setPharmacy: (id_pharmacy: string, id_business_man: string)=> Promise<void>;
} 

