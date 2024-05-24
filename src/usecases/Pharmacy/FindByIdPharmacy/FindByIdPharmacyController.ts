import { Request, Response } from 'express'
import FindByIdPharmacyUseCase from './FindByIdPharmacyUseCase'

export default class FindByEmailPharmacyController {
    constructor(
        private pharmacyUseCase: FindByIdPharmacyUseCase
    ){}

    async handler(request: Request, response: Response){
        try {
              const { id } = request.params;
              const result = await this.pharmacyUseCase.run(id);
              return response.status(200).json(result);
        } catch (error: any) {
            return response.status(200).json({
                error: error.message || 'Unexpected error!!'
            })
        }
    }
}