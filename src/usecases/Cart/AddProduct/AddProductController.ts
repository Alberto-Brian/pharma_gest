import { Request, Response } from "express";
import AddProductUseCase from "./AddProductUseCase";

export default class AddProductController {
    constructor(
        private cartUseCase: AddProductUseCase
    ){}
    async handler(request: Request, response: Response): Promise<Response>{
        try {
                const { product_id, quantity} = request.params;
                const count: number = parseInt(quantity)
                const result = await this.cartUseCase.run({product_id, count })
                return response.status(200).json({result})

        } catch (error: any) {
            return response.status(500).json({
                error: error?.message || "Unexpected error"
            })
        }
    }
}