import { ISigInRequest, ISigInResponse } from "../../../../interfaces/IAuth";
import { Request, Response } from 'express';
import PrismaUserRepository from "../../../../prisma_repositories/PrismaUserRepository";
const userRepository = new PrismaUserRepository();
export default class Logged{
    async LoggedUser(request: Request, response: Response):
    Promise<Response>{
       try {
            const user = await userRepository.findById(request.body.user.id);
            return response.status(200).json(user);
       } catch (error: any) {
            return response.status(500).json({
                error: error?.message || 'Unexpected error'
            })
       }
    }
}