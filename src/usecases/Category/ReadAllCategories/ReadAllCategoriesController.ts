import { Request, Response } from 'express';
import ReadAllCategoriesUseCase from './ReadAllCategoriesUseCase';

export default class ReadAllCategoriesController{
    constructor(
        private categoryUseCase: ReadAllCategoriesUseCase
    ){}

    async handler(request: Request, response: Response): Promise <Response> {
        try {
             const page: number = parseInt(request.query.page as string);
             const limit: number = parseInt(request.query.limit as string);
             const categories = await this.categoryUseCase.run(page, limit);
             return response.status(201).json({ categories })
        } catch (error: any) {
            return response.status(500).json({
                error: error?.message || 'Unexpected error'
            })
        }
    }
}