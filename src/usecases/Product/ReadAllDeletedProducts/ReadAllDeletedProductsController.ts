import { Request, Response } from 'express'
import ReadAllDeletedProductsUseCase from './ReadAllDeletedProductsUseCase'

export default class ReadAllProductsController {
    constructor(
        private productUseCase: ReadAllDeletedProductsUseCase
    ){}

    async handler(request: Request, response: Response):  Promise<Response> {
        try {
              const page: number = parseInt(request.query.page as string);
              const limit: number = parseInt(request.query.limit as string);
              const products = await this.productUseCase.run(page, limit);
              return response.status(200).json({respose: products})
        } catch(error: any) {
            return response.status(500).json({
                error: error?.message || 'Unexpected error!!'
            })
        }
    }
}