import { Request, Response } from 'express';
import CreateCategoryUseCase from './CreateCategoryUseCase';

export default class CreateCategoryController{
    constructor(
        private categoryUseCase: CreateCategoryUseCase
    ){}

    async handler(request: Request, response: Response): Promise<Response> {
        try {
             const { name, description } = request.body;
             const category = await this.categoryUseCase.run({name, description});
             return response.status(201).json({ category })
        } catch (error: any) {
            return response.status(500).json({
                error: error?.message || 'Unexpected error'
            })
        }
    }
}