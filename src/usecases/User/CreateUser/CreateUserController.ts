import { Request, Response } from 'express';
import CreateUserUseCase from './CreateUserUseCase';

export default class CreateUserController {
    constructor(
        private userUseCase: CreateUserUseCase 
    ){}

    async handler(request: Request, response: Response): Promise<Response>{
        try {
            const {username, email, password, confirm_password } = request.body;
            const result = await this.userUseCase.run({
                username, email, password
            }, confirm_password);
            return response.status(201).send({result});
        } catch (error: any) {
            return response.status(500).json({
               error: error.message || "Unexpected error"
        });
        }
    }
}