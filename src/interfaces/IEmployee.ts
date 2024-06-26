import IBase from "./IBase";

//FULL RESPONSE (used to return the find requests)
export interface IEmployee extends IBase{
    username: string
    email: string
    password: string
    phone: string | null   
    gender: string | null  
    address: string | null
    birthdate: Date | null
    status: boolean
    avatar: string | null
    deleted_at: Date | null
    deleted_by: string 
}


//---------------------------------------------------------------
//CREATE ACCOUNT REQUEST
export interface IEmployeeCreateRequest{
    username: string
    email: string
    password: string 
}

//CREATE ACCOUNT RESPONSE
export interface IEmployeeCreateResponse {
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
export interface IEmployeeUpdateRequest{
    username: string
    phone: string   
    gender: string  
    address: string
    birthdate: Date | null
}

//UPDATE DATA RESPONSE
export interface IEmployeeUpdateResponse extends IBase{
    username: string
    phone: string | null  
    gender: string | null
    address: string | null
    birthdate: Date | null
    status: boolean
}


//-------------------------------------------------------
//UPDATE CREDENTIALS REQUEST
export interface IEmployeeUpdateCredentialsRequest{
    email: string,
    password: string
}

//UPDATE CREDENTIALS RESPONSE
export interface IEmployeeUpdateCredentialsResponse extends IBase{
    email: string,
    password: string
}


//-------------------------------------------------------
//UPDATE IMAGE RESPONSE
export interface IEmployeeUpdateImageResponse extends IBase{
    avatar: string | null
}