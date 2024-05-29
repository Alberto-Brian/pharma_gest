import prisma from "../utils/prisma";
import { hasPassword } from "../utils/bcrypt";
import { ResultPaginated } from "../utils/Pagination";
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

const db = prisma.employee;
export default class PrismaEmployeeRepository {
    async create(data: IEmployeeCreateRequest, id_pharmacy: string)
    : Promise<IEmployeeCreateResponse> {
        const employee = await db.create({ 
            data: {
                username: data.username,
                email: data.email,
                password: hasPassword(data.password),
                pharmacy: {
                    connect: { id: id_pharmacy}
                }
            },
            
            select:{
                id: true,
                username: true,
                email: true,
                password: true,
                status: true,
                created_at: true,
                updated_at: true
            }
        })
        
        return employee
    }

    async read(page: number, perPage: number): Promise<IResultPaginated> {
        const employees = await db.findMany({
            where: {
                deleted_at: null,
                deleted_by: ''
            }
        });

        const result = ResultPaginated(employees, page, perPage)
        return result
    }

    async readAllDeleted(page: number, perPage: number): Promise<IResultPaginated> {
        const employees = await db.findMany({
            where: {
                deleted_at: { not: null },
                deleted_by: { not: '' }
            }
        });

        const result = ResultPaginated(employees, page, perPage)
        return result
    }

    async findById(id: string): Promise<IEmployee | null> {
        const employee = await db.findFirst({
            where: { id }
        })

        return employee;
    }

    async findByEmail(email: string): Promise<IEmployee | null> {
        const employee = await db.findFirst({
            where: { email }
        })

        return employee;
    }

    async update(data: IEmployeeUpdateRequest, id: string)
    : Promise<IEmployeeUpdateResponse> {
        const employee = await db.update({ 
            data,
            where: { id },
            select: {
                id: true,
                username: true,
                phone: true,   
                gender: true, 
                address: true, 
                birthdate: true, 
                status: true,
                created_at: true,
                updated_at: true
            } 
         })

         return employee
    }

    
    async upadateImage(data: IEmployeeUpdateImageRequest, id: string)
    : Promise<IEmployeeUpdateImageResponse> {
        const employee_image = await db.update({
            data,
            where: { id },
            select: {
                id: true,
                avatar: true,
                created_at: true,
                updated_at: true
            }

        })

        return employee_image
    }

    async updateCredentials(data: IEmployeeUpdateCredentialsRequest, id: string)
    : Promise<IEmployeeUpdateCredentialsResponse> {
        const employee_credentials = db.update({
            data,
            where: { id },
            select: {
                id: true,
                email: true,
                password: true,
                created_at: true,
                updated_at: true
            }
        })

        return employee_credentials;
    }
    
    async delete(id: string, user: string): Promise<void> {
            await db.update({
                data: {
                    status: false,
                    deleted_at: new Date(),
                    deleted_by: user
                },
                where: { id }
            })
    } 

}