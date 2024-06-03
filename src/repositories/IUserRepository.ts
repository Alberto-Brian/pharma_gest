import IResultPaginated from "../interfaces/IResultPaginated";
import { ISigInRequest, ISigInResponse } from "../interfaces/IAuth";
import { 
        IUser,
        IUserCreateRequest,
        IUserCreateResponse,
        IUserUpdateRequest,
        IUserUpdateResponse,
        IUserUpdateCredentialsRequest,
        IUserUpdateCredentialsResponse,
        IUserUpdateImageResponse
     } from "../interfaces/IUser";


export default interface IUserRepository {
    sigin: (data: ISigInRequest) => Promise<ISigInResponse>
    create: (data: IUserCreateRequest) => Promise<IUserCreateResponse>;
    read: (page: number, perPage: number) => Promise<IResultPaginated>;
    readAllDeleted: (page: number, perPage: number) => Promise<IResultPaginated>;
    findByEmail: (email: string) => Promise<IUser | null>;
    findById: (id: string) => Promise<IUser | null>;
    update: (data: IUserUpdateRequest, id: string) => Promise<IUserUpdateResponse>
    updateImage: (filename: string, id: string) => Promise<IUserUpdateImageResponse>
    updateCredentials: (data: IUserUpdateCredentialsRequest, id: string) => Promise<IUserUpdateCredentialsResponse>
    delete: (id: string, user: string) => Promise<void>;
} 

