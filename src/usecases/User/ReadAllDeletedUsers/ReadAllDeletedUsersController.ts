import { Request, Response } from 'express';
import ReadAllDeletedUsersUseCase from './ReadAllDeletedUsersUseCase';

export default class ReadAllDeletedUsersController{
    constructor(
        private userUseCase: ReadAllDeletedUsersUseCase
    ){}

    async handler(request: Request, response: Response): Promise<Response> {
        try {
             const page: number = parseInt(request.query.page as string)
             const perPage: number = parseInt(request.query.limit as string)
             const result = await this.userUseCase.run(page, perPage);
             return response.status(200).json(result);
        } catch (error: any) {
            return response.status(200).json({
                message: error.message || 'Unexpected error!!'
            })
        }
    }
}