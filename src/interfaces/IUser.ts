import IBase from "./IBase"

//FULL RESPONSE 
export interface IUser extends IBase{
    username: string
    email: string
    password: string
    gender: string | null,
    phone: string  | null
    address: string  | null
    avatar: string  | null
    birthdate: Date  | null
    status: boolean
    deleted_at: Date | null
    deleted_by: string
}

//---------------------------------------------------------------
//CREATE ACCOUNT REQUEST
export interface IUserCreateRequest{
    username: string
    email: string
    password: string 
}

//CREATE ACCOUNT RESPONSE
export interface IUserCreateResponse {
    user: {
        id: string
        username: string
        email: string
        password: string
        status: boolean,
        created_at: Date,
        updated_at: Date
    },
    token: string
}

//---------------------------------------------------------------------
//UPDATE DATA REQUEST
export interface IUserUpdateRequest{
    username: string
    phone: string   
    gender: string  
    address: string
    birthdate: Date | null
}

//UPDATE DATA RESPONSE
export interface IUserUpdateResponse extends IBase{
    username: string
    phone: string | null  
    gender: string | null
    address: string | null
    birthdate: Date | null
    status: boolean
}

//-------------------------------------------------------
//UPDATE CREDENTIALS REQUEST
export interface IUserUpdateCredentialsRequest{
    email: string,
    password: string
}

//UPDATE CREDENTIALS RESPONSE
export interface IUserUpdateCredentialsResponse extends IBase{
    email: string,
    password: string
}


//-------------------------------------------------------
//UPDATE IMAGE RESPONSE
export interface IUserUpdateImageResponse extends IBase{
    avatar: string | null
}


