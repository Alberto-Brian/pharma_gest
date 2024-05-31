import DeleteBusinessManUseCase from "./DeleteBusinessManUseCase";
import { Request, Response } from "express";

export default class DeleteUserController{
    constructor(
        private userEntity: DeleteBusinessManUseCase
    ){}

    async handler(request: Request, response: Response): Promise<Response>{
        try {
            const { id } = request.params;
            const user = request.body.user.id;
            await this.userEntity.run(id, user);
            return response.status(200).send({message: 'removido com sucesso!!'})  
        } catch (error: any) {
            return response.status(500).json({
                message: error.message || 'Unexpected Error'
            })
        }
    }
}