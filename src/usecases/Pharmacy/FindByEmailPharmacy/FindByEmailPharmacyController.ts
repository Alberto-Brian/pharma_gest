import { Request, Response } from 'express'
import FindByEmailPharmacyUseCase from './FindByEmailPharmacyUseCase'

export default class FindByEmailPharmacyController {
    constructor(
        private pharmacyUseCase: FindByEmailPharmacyUseCase
    ){}

    async handler(request: Request, response: Response){
        try {
              const { email } = request.params;
              const result = await this.pharmacyUseCase.run(email);
              return response.status(200).json(result);
        } catch (error: any) {
            return response.status(200).json({
                error: error.message || 'Unexpected error!!'
            })
        }
    }
}