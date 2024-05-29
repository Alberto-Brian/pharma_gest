import IBase from "./IBase";

//FULL REQUEST
export default interface IEmployee extends IBase{
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
export interface IEmployeeCreateResponse extends IBase {
    username: string
    email: string
    password: string
    status: boolean
}


//---------------------------------------------------------------------
//UPDATE DATE REQUEST
export interface IEmployeeUpdateRequest{
    username: string
    phone: string   
    gender: string  
    address: string
    birthdate: Date
}

//UPDATE DATE RESPONSE
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
//UPDATE IMAGE REQUEST
export interface IEmployeeUpdateImageRequest{
    avatar: string
}

//UPDATE IMAGE RESPONSE
export interface IEmployeeUpdateImageResponse extends IBase{
    avatar: string | null
}