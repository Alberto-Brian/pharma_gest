import { Request, Response } from "express";
import BuyProductUseCase from "./BuyProductUseCase";
import { Cart } from "../../../utils/types";

export default class BuyProductController {
    constructor(
        private productUseCase: BuyProductUseCase
    ){}
    async handler(request: Request, response: Response): Promise<Response>{
        try {
                const { cart } = request.body;
                const result = await this.productUseCase.run(cart)
                return response.status(200).json({result})

        } catch (error: any) {
            return response.status(500).json({
                error: error?.message || "Unexpected error"
            })
        }
    }
}