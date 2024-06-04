import { Request, Response } from 'express';
import DeleteProductUseCase from './DeleteProductUseCase';

export default class DeleteProductController {
    constructor(
        private productUseCase: DeleteProductUseCase
    ){}

    async handler(request: Request, response: Response): Promise<Response> {
        try {

            const { id } = request.params;
            const user = request.body.user.id;
            await this.productUseCase.run(id, user);
            return response.status(200).json({});
            
        } catch (error: any) {
            return response.status(500).json({
            error: error?.message || 'Unexpected error'
        })
        }
    }
}