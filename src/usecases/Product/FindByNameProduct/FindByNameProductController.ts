import { Request, Response } from 'express';
import FindByNameProductUseCase from './FindByNameProductUseCase';

export default class FindByIdProductController {
    constructor(
        private productUseCase: FindByNameProductUseCase
    ){}

    async handler(request: Request, response: Response): Promise<Response>{
        try {

            const { name } = request.params;
            const result = await this.productUseCase.run(name);
            return response.status(200).json({ result })
            
        } catch (error: any) {
            return response.status(500).json({
                error: error.message || 'Unexpected error'
            })
        }
    }
}