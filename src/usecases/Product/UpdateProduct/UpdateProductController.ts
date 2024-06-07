import { Request, Response } from "express";
import UpdateProductUseCase from "./UpdateProductUseCase";

export default class UpdateProductController {
    constructor(
        private productUseCase: UpdateProductUseCase
    ){}
    async handler(request: Request, response: Response): Promise<Response>{
        try {
                const {id, name, description} = request.body;
                const result = await this.productUseCase.run({name, description}, id)
                return response.status(200).json({result})

        } catch (error: any) {
            return response.status(500).json({
                error: error?.message || "Unexpected error"
            })
        }
    }
}