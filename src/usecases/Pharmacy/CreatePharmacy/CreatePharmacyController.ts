import { Request, Response } from 'express';
import CreatePharmacyUseCase from "./CreatePharmacyUseCase";
// import upload from '../../../middlewares/multer';

export default class CreatePharmacyController {
    constructor(
        private pharmacyUseCase: CreatePharmacyUseCase
    ){}

    async handler(request: Request, response: Response): Promise<Response> {
        try {
              const doc = request.file?.filename ?? '';
              const { name, email, banking_account,
                      info, phone, address  
                    } = request.body;
              const pharmacy = await this.pharmacyUseCase.run({
                      name, email, banking_account, doc, 
                      info, phone, address
              })

              return response.status(201).json({response: pharmacy})
            
        } catch (error: any) {
            return response.status(500).json({
                error: error.message || "Unexpected error!!"
            })
        }
    }
}