import { Request, Response } from "express";
import FindByPharmacyProductUseCase from "./FindByPharmacyUseCase";

export default class FindByPharmacyProductController {
    constructor(
        private productUseCase: FindByPharmacyProductUseCase
    ){}

    async handler(request: Request, response: Response): Promise<Response> {
        try {
             const page: number = parseInt(request.query.page as string);
             const limit: number = parseInt(request.query.limit as string);
             const { id_pharmacy } = request.params;
             const produts = await this.productUseCase.run(id_pharmacy, page, limit);

             return response.status(200).json({response: produts})
        } catch (error: any) {
            return response.status(500).json({
                error: error?.message || 'Unexpected error!!'
            })
        }
    }
}