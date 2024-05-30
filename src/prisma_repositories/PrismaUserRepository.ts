import prisma from '../utils/prisma';
import UserRepository from '../repositories/IUserRepository';
import { IUserRequest, IUserResponse, IUserCreatedResponse } from '../interfaces/IUser';
import { hashPassword } from '../utils/bcrypt';
import IResultPaginated from '../interfaces/IResultPaginated';
import { ResultPaginated } from '../utils/Pagination';

export default class PrismaUserRepository implements UserRepository{

    async create(data: IUserRequest): Promise<IUserCreatedResponse | Error>{

        const user_data = await prisma.user.create({
            data: {
                username: data.username,
                email: data.email,
                password: hashPassword(data.password),
               
            }
        })

        return user_data;
    }

    async readAllUsers(page: number, perPage: number): Promise<IResultPaginated>{
        const users = await prisma.user.findMany({
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
        const result = ResultPaginated(users, page, perPage);
        return result;
    }

     async readAllDeletedUsers(page: number, perPage: number): Promise<IResultPaginated>{
         const users = await prisma.user.findMany({
                 where: {
                    AND: {
                        deleted_at: {not: null},
                        deleted_by: {not: ''},
                        status: false
                    }
            }, select:{
                id: true,
                // password: true,
                email: true,
                status: true,
                created_at: true,
                updated_at: true,
                deleted_at: true,
                deleted_by: true
            }
         })

         const result = ResultPaginated(users, page, perPage);
         return result;
     }

    async findByEmail(email: string): Promise<IUserResponse | null>{
        const user = await prisma.user.findUnique({
            where: {
                email: email
            },
            select:{
                id: true,
                username: true,
                // password: true,
                email: true,
                status: true,
                created_at: true,
                updated_at: true,
            }
        });

        return user;
    }

    async findById(id: string): Promise<IUserResponse | null>{
        const user = await prisma.user.findUnique({
            where: {
                id: id
            }
        });

        return user;
    }

    async delete(id: string, user: string): Promise<void> {
        await prisma.user.update({
            where: { id },
            data:{
                status: false,
                deleted_at: new Date(),
                deleted_by: user
            }
        })
    }

}