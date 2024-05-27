import IBase from "./IBase"

export default interface ICategory extends IBase {
    name: string
    description: string | null
    deleted_at: Date
    deleted_by: string
}



export interface ICategoryRequest {
    name: string 
    description?: string
}

export interface ICategoryResponse {
    id: string
    name: string
    description: string | null
    created_at: Date 
}