import prisma from '../utils/prisma';
import BusinessManRepository from '../repositories/IBusinessManRepository';
import IResultPaginated from '../interfaces/IResultPaginated';
import jwt from 'jsonwebtoken';

import { hashPassword, comparePassword } from '../utils/bcrypt';
import { JWT_SECRET } from "../core";
import { IBusinessManRequest, IBusinessManResponse, ICreatedBusinessManResponse } from '../interfaces/IBusinessMan';
import { ResultPaginated } from '../utils/Pagination';

export default class PrismaBusinessManRepository implements BusinessManRepository{

    async sigin(email: string, password: string): Promise<any>{

        const user = await prisma.business_man.findUnique({
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

    async createBusinessMan(data: IBusinessManRequest, id_pharmacy: string): Promise<ICreatedBusinessManResponse | Error>{

        const user_data = await prisma.business_man.create({
            
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
        const business_men = await prisma.business_man.findMany({
            select: {
                id: true,
                username: true,
                password: true,
                email: true,
                status: true,
                created_at: true,
                updated_at: true
            },
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
         const business_men = await prisma.business_man.findMany({
                 where: {
                    AND: {
                        deleted_at: {not: null},
                        deleted_by: {not: ''},
                        status: false
                    }
            }, select:{
                id: true,
                password: false,
                username: true,
                email: true,
                status: true,
                created_at: true,
                updated_at: true,
                deleted_at: true,
                deleted_by: true
            }
         })

         const result = ResultPaginated(business_men, page, perPage);
         return result;
     }

    async findByEmail(email: string): Promise<IBusinessManResponse | null>{
        const business_man = await prisma.business_man.findUnique({
            where: {
                email: email
            }
        });

        return business_man;
    }

    async findById(id: string): Promise<IBusinessManResponse | null>{
        const business_men = await prisma.business_man.findUnique({
            where: {
                id: id
            }
        });

        return business_men;
    }

    async setPharmacy(id_pharmacy: string, id_business_man: string): Promise<void>{
        await prisma.business_man.update({
            where: { id: id_business_man },
            data: { 
                //  pharmacy: id_pharmacy
             },
        })
    }

    async delete(id: string, user: string): Promise<void> {
        await prisma.business_man.update({
            where: { id },
            data:{
                status: false,
                deleted_at: new Date(),
                deleted_by: user
            }
        })
    }

}