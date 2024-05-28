import { Request, Response } from 'express';
import FindByNameCategoryUseCase from './FindByNameCategoryUseCase';

export default class FindByNameCategoryController{
    constructor(
        private categoryUseCase: FindByNameCategoryUseCase
    ){}

    async handler(request: Request, response: Response): Promise <Response> {
        try {
             const { name } = request.body;
             const category = await this.categoryUseCase.run(name);
             return response.status(201).json({ category })
        } catch (error: any) {
            return response.status(500).json({
                error: error?.message || 'Unexpected error'
            })
        }
    }
}