import IResultPaginated from "../interfaces/IResultPaginated";
import IUser, { IUserRequest, IUserResponse, IUserCreatedResponse } from "../interfaces/IUser";


export default interface IUserRepository {
    create: (user: IUserRequest) => Promise<IUserCreatedResponse | Error>;
    readAllUsers: (page: number, perPage: number) => Promise<IResultPaginated>;
    readAllDeletedUsers: (page: number, perPage: number) => Promise<IResultPaginated>;
    findByEmail: (email: string) => Promise<IUserResponse | null>;
    findById: (id: string) => Promise<IUserResponse | null>;
    delete: (id: string, user: string) => Promise<void>;
} 