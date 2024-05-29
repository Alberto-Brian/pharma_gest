import IResultPaginated from "../interfaces/IResultPaginated";
import IEmployee, { 
    IEmployeeCreateRequest,
    IEmployeeCreateResponse,
    IEmployeeUpdateRequest,
    IEmployeeUpdateResponse,
    IEmployeeUpdateImageRequest,
    IEmployeeUpdateImageResponse,
    IEmployeeUpdateCredentialsRequest,
    IEmployeeUpdateCredentialsResponse 
} from "../interfaces/IEmployee";

 export default interface IEmployeeRepository{
    create: (data: IEmployeeCreateRequest, id_pharmacy: string) => Promise<IEmployeeCreateResponse>;
    read: (page: number, perPage: number) => Promise<IResultPaginated>
    readAllDeleted: (page: number, perPage: number) => Promise<IResultPaginated>
    findById: (id: string) => Promise<IEmployee | null>
    findByEmail: (email: string) => Promise<IEmployee | null>
    update: (data: IEmployeeUpdateRequest, id: string) => Promise<IEmployeeUpdateResponse>
    upadateImage: (data: IEmployeeUpdateImageRequest, id: string) => Promise<IEmployeeUpdateImageResponse>
    updateCredentials: (data: IEmployeeUpdateCredentialsRequest, id: string) => Promise<IEmployeeUpdateCredentialsResponse>
    delete: (id: string, user: string) => Promise<void> 
 }