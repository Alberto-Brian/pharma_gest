import { Request, Response } from 'express';
import FindByIdProductUseCase from './FindByIdProductUseCase';

export default class FindByIdProductController {
    constructor(
        private productUseCase: FindByIdProductUseCase
    ){}

    async handler(request: Request, response: Response): Promise<Response>{
        try {

            const { id } = request.params;
            const result = await this.productUseCase.run(id);
            return response.status(200).json({ result })
            
        } catch (error: any) {
            return response.status(500).json({
                error: error.message || 'Unexpected error'
            })
        }
    }
}