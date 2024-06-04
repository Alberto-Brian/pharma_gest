import { Request, Response } from 'express';
import FindByIdCategoryUseCase from './FindByIdCategoryUseCase';

export default class FindByIdCategoryController{
    constructor(
        private categoryUseCase: FindByIdCategoryUseCase
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