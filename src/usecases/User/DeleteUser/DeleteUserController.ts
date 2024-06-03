import DeleteUserUseCase from "./DeleteUserUseCase";
import { Request, Response } from "express";

export default class DeleteUserController{
    constructor(
        private userUseCase: DeleteUserUseCase
    ){}

    async handler(request: Request, response: Response): Promise<Response>{
        try {
            const { id } = request.params;
            const user = request.body.user.id;
            await this.userUseCase.run(id, user);
            return response.status(200).send({})  
        } catch (error: any) {
            return response.status(500).json({
                message: error.message || 'Unexpected Error'
            })
        }
    }
}