import { Request, Response } from "express";
import ShowCartUseCase from "./ShowCartUseCase";
import { ICartBuyingResponse } from "../../../interfaces/ICart";

export default class ShowCartController {
    constructor(
        private productUseCase: ShowCartUseCase
    ){}
    async handler(request: Request, response: Response): Promise<Response>{
        try {
                // const { cart } = request.body;
                const result: ICartBuyingResponse = await this.productUseCase.run()
                return response.status(200).json({result})

        } catch (error: any) {
            return response.status(500).json({
                error: error?.message || "Unexpected error"
            })
        }
    }
}