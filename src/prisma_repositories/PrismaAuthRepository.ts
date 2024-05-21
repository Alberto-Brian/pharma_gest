import prisma from "../utils/prisma";
import IAuthRepository from '../repositories/IAuthRepository'
import { ISigInResponse } from "../interfaces/IAuth";
import { JWT_SECRET } from "../core";
import jwt from 'jsonwebtoken';

export default class PrismaAuthRepository implements IAuthRepository{
    async sigin(email: string, password: string): Promise<any>{
        const user = await prisma.business_man.findUnique({
            select: {
                    id: true,
                    username: true,
                    email: true,
                    password: false, 
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
                    email: email,
                    password: password
            }
        })

        if(!user){
            throw new Error("Incorrect password, please try again!!")
        }

        const token = jwt.sign(user as object, JWT_SECRET ?? "mysecret",
                               { expiresIn: "10d"});
        return {
             user,
             token
        }
    }
}