import { Request, Response } from 'express';
import CreatePharmacyUseCase from "./CreatePharmacyUseCase";
import upload from '@/utils/multer';

export default class CreatePharmacyController {
    constructor(
        private pharmacyUseCase: CreatePharmacyUseCase
    ){}

    async handler(request: Request, response: Response): Promise<Response> {
        try {
              const doc = request.file?.path ?? '';
              const { name, email, banking_account } = request.body;
              const pharmacy = await this.pharmacyUseCase.run({
                      name, email, banking_account, doc 
              })

              return response.status(201).json({response: pharmacy})
            
        } catch (error: any) {
            return response.status(500).json({
                error: error.message || "Unexpected error!!"
            })
        }
    }
}