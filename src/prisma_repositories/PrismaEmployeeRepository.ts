import prisma from "../utils/prisma";
import IResultPaginated from "../interfaces/IResultPaginated";
import jwt from 'jsonwebtoken';

import { hashPassword, comparePassword } from "../utils/bcrypt";
import { ResultPaginated } from "../utils/Pagination";
import { JWT_SECRET } from "../core";

import {
    IEmployee, 
    IEmployeeCreateRequest,
    IEmployeeCreateResponse,
    IEmployeeUpdateRequest,
    IEmployeeUpdateResponse, 
    IEmployeeUpdateImageResponse,
    IEmployeeUpdateCredentialsRequest,
    IEmployeeUpdateCredentialsResponse
} from "../interfaces/IEmployee";
import { PassThrough } from "stream";

const db = prisma.employee;
export default class PrismaEmployeeRepository {

    async sigin(email: string, password: string): Promise<any>{

        const user = await db.findUnique({
            select: {
                    id: true,
                    username: true,
                    email: true,
                    password: true, 
                    status: true,
                    phone: true, 
                    address: true, 
                    avatar: true, 
                    created_at: false,
                    updated_at: false,
                    deleted_at: false,
                    deleted_by: false
            },
            where: {
                    email: email
            }
        })


        if(!comparePassword(password, user?.password ?? '')){
            throw new Error("Incorrect password, please try again!!")
        }

        const token = jwt.sign(user as object, JWT_SECRET ?? "mysecret",
                               { expiresIn: "10d"});
        return {
             user,
             token
        }
    }


    async create(data: IEmployeeCreateRequest, id_pharmacy: string)
    : Promise<IEmployeeCreateResponse> {
        const employee = await db.create({ 
            data: {
                username: data.username,
                email: data.email,
                password: hashPassword(data.password),
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
        
        const token = jwt.sign(employee as object, JWT_SECRET ?? "mysecret",
        { expiresIn: "10d"});

        return {user: employee, token}
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

    
    async upadateImage(filename: string, id: string)
    : Promise<IEmployeeUpdateImageResponse> {
        const employee_image = await db.update({
            data: { avatar: filename },
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
            data: {
                email: data.email,
                password: hashPassword(data.password)
            },
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