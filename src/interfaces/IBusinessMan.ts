import IBase from "./IBase"

//FULL RESPONSE (used to return the find requests)
export interface IBusinessMan extends IBase {
    username: string,
    email: string,
    password: string,
    address: string | null,
    gender: string | null,
    phone: string | null,
    status: boolean,
    birthdate: Date | null,
    avatar: string | null,
    deleted_at: Date | null,
    deleted_by: string 
}


//-----------------------------------------------------------------------------
//CREATE ACCOUNT REQUEST
export interface IBusinessManCreateRequest {
    username: string,
    email: string,
    password: string,
    pharmacy_id?: string
}

//CREATE ACCOUNT RESPONSE
export interface IBusinessManCreateResponse {
   user: {
    id: string,
    username: string,
    email: string,
    status: boolean,
    created_at: Date,
    },
    token: string,

}

//---------------------------------------------------------------------
//UPDATE DATE REQUEST
export interface IBusinessManUpdateRequest{
    username: string
    phone: string   
    gender: string  
    address: string
    birthdate: Date | null
}

//UPDATE DATE RESPONSE
export interface IBusinessManUpdateResponse extends IBase{
    username: string
    phone: string | null  
    gender: string | null
    address: string | null
    birthdate: Date | null
    status: boolean
}


//-------------------------------------------------------
//UPDATE CREDENTIALS REQUEST
export interface IBusinessManUpdateCredentialsRequest{
    email: string,
    password: string
}

//UPDATE CREDENTIALS RESPONSE
export interface IBusinessManUpdateCredentialsResponse extends IBase{
    email: string,
    password: string
}


//-------------------------------------------------------
//UPDATE IMAGE RESPONSE
export interface IBusinessManUpdateImageResponse extends IBase{
    avatar: string | null
}



//--------------------------------------------------------------------------
//SETTING PHARMACY TO BUSINESS MAN ACCOUNT
export interface IBusinessSetPharmacyRequest{
    id_pharmacy: string;
    id_business_man: string
}