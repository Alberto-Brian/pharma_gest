import { Request, Response } from 'express';
import CreateUserEntity from './CreateUserEntity';

export default class CreateUserController {
    constructor(
        private userEntity: CreateUserEntity 
    ){}

    async handler(request: Request, response: Response): Promise<Response>{
        try {
            const {username, email, password } = request.body;
            const responsee = await this.userEntity.run({
                username, email, password
            });
            return response.status(201).send({responsee});
        } catch (error: any) {
            return response.status(500).json({
               error: error.message || "Unexpected error"
        });
        }
    }
}