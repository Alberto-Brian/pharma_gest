import prisma from '../utils/prisma';
import BusinessManRepository from '../repositories/IBusinessManRepository';
import IResultPaginated from '../interfaces/IResultPaginated';
import jwt from 'jsonwebtoken';

import { ResultPaginated } from '../utils/Pagination';
import { hashPassword, comparePassword } from '../utils/bcrypt';
import { JWT_SECRET } from "../core";

import { 
         IBusinessMan, 
         IBusinessManCreateRequest, 
         IBusinessManCreateResponse,
         IBusinessManUpdateRequest,
         IBusinessManUpdateResponse,
         IBusinessManUpdateImageResponse,
         IBusinessManUpdateCredentialsRequest,
         IBusinessManUpdateCredentialsResponse 
    } from '../interfaces/IBusinessMan';

const db = prisma.business_man;
export default class PrismaBusinessManRepository implements BusinessManRepository{

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

    async createBusinessMan(data: IBusinessManCreateRequest, id_pharmacy: string): Promise<IBusinessManCreateResponse | Error>{

        const user_data = await db.create({
            
            select: {
                id: true,
                username: true,
                email: true,
                password: true,
                status: true,
                created_at: true
            },
            data: {
                username: data.username,
                email: data.email,
                password: hashPassword(data.password),
                pharmacy: {
                    connect: {
                        id: id_pharmacy
                    }
                },

            }
        })

        if(user_data){
             await prisma.pharmacy.update({
                where:{ id: id_pharmacy},
                data:{ status: true}
             });
        }

        const token = jwt.sign(user_data as object, JWT_SECRET ?? "mysecret",
        { expiresIn: "10d"});

        return { user: user_data, token };
    }

    async readAllBusinessMen(page: number, perPage: number): Promise<IResultPaginated>{
        const business_men = await db.findMany({
             where: {
                deleted_at: null,
                deleted_by: ''
             }
        });
        // console.log(users);
        const result = ResultPaginated(business_men, page, perPage);
        return result;
    }

     async readAllDeletedBusinessMen(page: number, perPage: number): Promise<IResultPaginated>{
         const business_men = await db.findMany({
                 where: {
                    AND: {
                        deleted_at: {not: null},
                        deleted_by: {not: ''},
                        status: false
                    }
            }
         })

         const result = ResultPaginated(business_men, page, perPage);
         return result;
     }

    async findByEmail(email: string): Promise<IBusinessMan | null>{
        const business_man = await db.findUnique({
            where: {
                email: email
            }
        });

        return business_man;
    }

    async findById(id: string): Promise<IBusinessMan | null>{
        const business_men = await db.findUnique({
            where: {
                id: id
            }
        });

        return business_men;
    }

    async setPharmacy(id_pharmacy: string, id_business_man: string): Promise<void>{
        await db.update({
            where: { id: id_business_man },
            data: { 
                //  pharmacy: id_pharmacy
             },
        })
    }


    async updateBusinessMan (data: IBusinessManUpdateRequest, id: string): 
        Promise<IBusinessManUpdateResponse>{
        
            const business_man = await db.update({ 
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
    
             return business_man
    }
    async updateImageBusinessMan (filename: string, id: string): Promise<IBusinessManUpdateImageResponse>{
        const business_man_image = await db.update({
            data: { avatar: filename },
            where: { id },
            select: {
                id: true,
                avatar: true,
                created_at: true,
                updated_at: true
            }

        })

        return business_man_image
    }
    async updateCredentialsBusinessMan (data: IBusinessManUpdateCredentialsRequest, id: string): Promise<IBusinessManUpdateCredentialsResponse>{
        const business_man_credentials = db.update({
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

        return business_man_credentials;
    }



    async delete(id: string, user: string): Promise<void> {
        console.log('aqui');
        console.log(user);
        await db.update({
            where: { id },
            data:{
                status: false,
                deleted_at: new Date(),
                deleted_by: user
            }
        })
    }

}