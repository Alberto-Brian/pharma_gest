import prisma from '../utils/prisma';
import UserRepository from '../repositories/IUserRepository';
import IResultPaginated from '../interfaces/IResultPaginated';
import jwt from 'jsonwebtoken';

import { JWT_SECRET } from '../core';
import { hashPassword, comparePassword } from '../utils/bcrypt';
import { ResultPaginated } from '../utils/Pagination';
import { ISigInRequest, ISigInResponse } from '../interfaces/IAuth';

import { 
         IUser,
         IUserCreateRequest,
         IUserCreateResponse,
         IUserUpdateRequest,
         IUserUpdateResponse,
         IUserUpdateCredentialsRequest,
         IUserUpdateCredentialsResponse,
         IUserUpdateImageResponse 
        } from '../interfaces/IUser';


const db = prisma.user;        
export default class PrismaUserRepository implements UserRepository{
    async sigin(data: ISigInRequest): Promise<ISigInResponse>{

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
                    created_at: true,
                    updated_at: false,
                    deleted_at: false,
                    deleted_by: false
            },
            where: { 
                    email: data.email
            }
        })


        if(!comparePassword(data.password, user?.password ?? '')){
            throw new Error("Incorrect password, please try again!!")
        }

        const token = jwt.sign(user as object, JWT_SECRET ?? "mysecret",
                               { expiresIn: "10d"});
        return {
             user: user as {
                id: string
                username: string
                email: string
                password: string
                status: boolean
                phone: string
                address: string
                avatar: string
                created_at: Date
             },
             token
        }
    }


    async create(data: IUserCreateRequest): Promise<IUserCreateResponse>{

        const user = await db.create({ 
            data: {
                username: data.username,
                email: data.email,
                password: hashPassword(data.password),
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
        
        const token = jwt.sign(user as object, JWT_SECRET ?? "mysecret",
        { expiresIn: "10d"});

        return {user: user, token}
    }

    async read(page: number, perPage: number): Promise<IResultPaginated>{
        const users = await db.findMany({
            // select: {
            //     id: true,
            //     username: true,
            //     password: true,
            //     email: true,
            //     status: true,
            //     created_at: true,
            //     updated_at: true
            // },
             where: {
                AND: {
                    deleted_at: null,
                    deleted_by:'',
                    status: true
                }
             }
        });
        // console.log(users);
        const result = ResultPaginated(users, page, perPage);
        return result;
    }

     async readAllDeleted(page: number, perPage: number): Promise<IResultPaginated>{
         const users = await db.findMany({
                 where: {
                    AND: {
                        deleted_at: {not: null},
                        deleted_by: {not: ''},
                        status: false
                    }
                 }
         })

         const result = ResultPaginated(users, page, perPage);
         return result;
     }

    async findByEmail(email: string): Promise<IUser | null>{
        const user = await db.findUnique({ where: { email } });
        return user;
    }

    async findById(id: string): Promise<IUser | null>{
        const user = await db.findUnique({ where: { id } });
        return user;
    }

    async update (data: IUserUpdateRequest, id: string):
    Promise<IUserUpdateResponse>{
        const user = await db.update({ 
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

         return user
    }

    async updateImage (filename: string, id: string): 
    Promise<IUserUpdateImageResponse>{
        const user_image = await db.update({
            data: { avatar: filename },
            where: { id },
            select: {
                id: true,
                avatar: true,
                created_at: true,
                updated_at: true
            }

        })

        return user_image
    }

    async updateCredentials (data: IUserUpdateCredentialsRequest, id: string):
    Promise<IUserUpdateCredentialsResponse>{
        const user_credentials = await db.update({
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
    });

    return user_credentials;
}

    async delete(id: string, user: string): Promise<void> {
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