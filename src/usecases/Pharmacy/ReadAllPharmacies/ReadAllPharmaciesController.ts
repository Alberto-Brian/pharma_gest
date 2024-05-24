import { Request, Response } from 'express';
import ReadAllPharmaciesUseCase from './ReadAllPharmaciesUseCase';

export default class ReadAllPharmaciesController {
    constructor(
        private pharmacyUseCase: ReadAllPharmaciesUseCase
    ){}

    async handler(request: Request, response: Response): Promise<Response>{
        try {
             const page: number = parseInt(request.query.page as string);
             const perPage: number = parseInt(request.query.limit as string);
             const pharmacies = await this.pharmacyUseCase.run(page, perPage)
             return response.status(200).json({pharmacies});
        } catch (error: any) {
            return response.status(500).json({
                errro: error.message || 'Unexpected error!!'
            })
        }
    }
}