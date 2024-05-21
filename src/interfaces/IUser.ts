import IBase from "./IBase"
import IPost from "./IPost"


export default interface IUser extends IBase {
    username: string,
    email: string,
    password: string,
    // posts: IPost[],
    deleted_at: Date | null,
    deleted_by: string 
}

export interface IUserResponse {
    id: string,
    username: string,
    email: string,
    status: boolean,
    created_at: Date,
    updated_at: Date | null,
}

export interface IUserCreatedResponse {
    id: string,
    username: string,
    email: string,
    status: boolean,
    created_at: Date
}

export interface IUserRequest {
    username: string,
    email: string,
    password: string,
}