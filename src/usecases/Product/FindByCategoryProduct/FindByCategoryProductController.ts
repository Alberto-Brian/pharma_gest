import { Request, Response } from 'express';
import FindByCategoryProductUseCase from './FindByCategoryProductUseCase';

export default class FindByCategoryProductController {
    constructor(
        private productUseCase: FindByCategoryProductUseCase
    ){}

    async handler(request: Request, response: Response): Promise<Response>{
        try {

            const { id_category, id_pharmacy } = request.params;
            const page: number = parseInt(request.query.page as string)
            const perPage: number = parseInt(request.query.limit as string)
            const result = await this.productUseCase.run(id_category, id_pharmacy, page, perPage);
            return response.status(200).json({ result })
            
        } catch (error: any) {
            return response.status(500).json({
                error: error.message || 'Unexpected error'
            })
        }
    }
}