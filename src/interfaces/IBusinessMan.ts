import IBase from "./IBase"

export default interface IBusinessMan extends IBase {
    username: string,
    email: string,
    password: string,
    address: string,
    phone: string,
    status: boolean,
    birthdate: Date,
    avatar: string,
    deleted_at: Date | null,
    deleted_by: string 
}

export interface IBusinessManResponse extends IBase{
    username: string,
    email: string,
    address: string | null,
    phone: string | null,
    status: boolean,
    birthdate: Date | null,
    avatar: string | null,
}

export interface ICreatedBusinessManResponse {
    id: string,
    username: string,
    email: string,
    status: boolean,
    created_at: Date,
}


export interface IBusinessManRequest {
    username: string,
    email: string,
    password: string,
    pharmacy_id?: string
}

export interface IBusinessSetPharmacyRequest{
    id_pharmacy: string;
    id_business_man: string
}