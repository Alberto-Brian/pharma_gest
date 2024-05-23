import prisma from '../utils/prisma';
import BusinessManRepository from '../repositories/IBusinessManRepository';
import { hasPassword } from '../utils/bcrypt';
import { IBusinessManRequest, IBusinessManResponse, ICreatedBusinessManResponse } from '../interfaces/IBusinessMan';
import IResultPaginated from '../interfaces/IResultPaginated';
import { ResultPaginated } from '../utils/Pagination';

export default class PrismaBusinessManRepository implements BusinessManRepository{

    async createBusinessMan(data: IBusinessManRequest): Promise<ICreatedBusinessManResponse | Error>{

        const user_data = await prisma.business_man.create({
            data: {
                username: data.username,
                email: data.email,
                password: hasPassword(data.password),
            }
        })

        return user_data;
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