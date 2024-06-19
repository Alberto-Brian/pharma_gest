import { Request, Response } from "express";
import ShowCartUseCase from "./ShowCartUseCase";
import { IResultCartPaginated } from "../../../interfaces/IResultPaginated";

export default class ShowCartController {
    constructor(
        private productUseCase: ShowCartUseCase
    ){}
    async handler(request: Request, response: Response): Promise<Response>{
        try {
                const page: number = parseInt(request.query.page as string) || 1;
                const perPage: number = parseInt(request.query.limit as string) || 5;
                const result: IResultCartPaginated = await this.productUseCase.run(page, perPage);
                return response.status(200).json({result})

        } catch (error: any) {
            return response.status(500).json({
                error: error?.message || "Unexpected error"
            })
        }
    }
}