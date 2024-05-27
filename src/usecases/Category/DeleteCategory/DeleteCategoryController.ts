import { Request, Response } from 'express';
import DeleteCategoryUseCase from './DeleteCategoryUseCase';

export default class DeleteCategoryController{
    constructor(
        private categoryUseCase: DeleteCategoryUseCase
    ){}

    async handler(request: Request, response: Response): Promise <Response> {
        try {
             const { id } = request.params;
             const category = await this.categoryUseCase.run(id);
             return response.status(201).json({ category })
        } catch (error: any) {
            return response.status(500).json({
                error: error?.message || 'Unexpected error'
            })
        }
    }
}