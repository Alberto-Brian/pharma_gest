import { Request, Response } from 'express';
import DeletePharmacyUseCase from './DeletePharmacyUseCase';

export default class DeletePharmacyController {
    constructor(
        private pharmacyUseCase: DeletePharmacyUseCase
    ){}

    async handler(request: Request, response: Response): Promise<Response>{
        try {
             const user = request.body.user.id;
             const { id } = request.params;
             await this.pharmacyUseCase.run(id, user);
             return response.status(200).json();
         } catch (error: any) {
            return response.status(500).json({
                error: error.message || 'Unexpected error'
            })
        }
    }
}