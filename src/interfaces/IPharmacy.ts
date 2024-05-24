import IBase from "./IBase";

export default interface IPharmacy extends IBase {
    name: string
    email: string
    phone: string
    address: string
    status: boolean
    avatar: string
    logo: string
    doc: string
    banking_account: string
    url_pharmacy?: string
    info: string
    deleted_at: Date | null
    deleted_by: string
}

export interface IPharmacyRequest {
    name: string
    email: string
    doc: string
    banking_account: string,
    phone?: string,
    address?: string,
    info?: string,
    avatar?: string,
    logo?: string

}

export interface IPharmacyResponse extends IBase {
    name: string
    email: string
    status: boolean 
    doc: string
    banking_account: string

}