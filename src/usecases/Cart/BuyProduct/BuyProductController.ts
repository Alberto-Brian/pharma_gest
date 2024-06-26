import { Request, Response } from "express";
import BuyProductUseCase from "./BuyProductUseCase";

export default class BuyProductController {
    constructor(
        private productUseCase: BuyProductUseCase
    ){}
    async handler(request: Request, response: Response): Promise<Response>{
        try {
                await this.productUseCase.run()
                return response.status(200).json({})

        } catch (error: any) {
            return response.status(500).json({
                error: error?.message || "Unexpected error"
            })
        }
    }
}