import { Request, Response } from "express";
import UpdatePriceProductUseCase from "./UpdatePriceProductUseCase";

export default class UpdatePriceProductController {
    constructor(
        private productUseCase: UpdatePriceProductUseCase
    ){}
    async handler(request: Request, response: Response): Promise<Response>{
        try {
                const { id } = request.body;
                const price: number = parseFloat(request.body.price as string)
                const result = await this.productUseCase.run({id, price})
                return response.status(200).json({result})

        } catch (error: any) {
            return response.status(500).json({
                error: error?.message || "Unexpected error"
            })
        }
    }
}