import { Request, Response } from 'express';
import CreateBusinessManUseCase from './CreateBusinessManUseCase';

export default class CreateBusinessManController {
    constructor(
        private userEntity: CreateBusinessManUseCase 
    ){}

    async handler(request: Request, response: Response): Promise<Response>{
        try {
            const {username, email, password, pharmacy_id } = request.body;
            const responsee = await this.userEntity.run({
                username, email, password, pharmacy_id
            });

            return response.status(201).send({responsee});
        } catch (error: any) {
            return response.status(500).json({
               error: error.message || "Unexpected error"
        });
        }
    }
}