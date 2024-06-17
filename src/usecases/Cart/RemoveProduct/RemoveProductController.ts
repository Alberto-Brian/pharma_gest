import { Request, Response } from "express";
import RemoveProductUseCase from "./RemoveProductUseCase";

export default class RemoveProductController {
    constructor(
        private cartUseCase: RemoveProductUseCase
    ){}
    async handler(request: Request, response: Response): Promise<Response>{
        try {
                const { id } = request.params;
                const result = await this.cartUseCase.run(id)
                return response.status(200).json({result})

        } catch (error: any) {
            return response.status(500).json({
                error: error?.message || "Unexpected error"
            })
        }
    }
}