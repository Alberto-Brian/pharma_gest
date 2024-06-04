import { Request, Response } from 'express';
import CreateProductUseCase from './CreateProductUseCase';

export default class CreateProductController {
    constructor(
        private productUseCase: CreateProductUseCase
    ){}

    async handler(request: Request, response: Response): Promise<Response>{
        try{    
            const image = request.file?.filename ?? '';
            const price = parseFloat(request.body.price as string);
            const old_price = parseFloat(request.body?.old_price as string);
            const { name, id_pharmacy, id_category, description } = request.body
            console.log(name+" "+id_pharmacy+" "+
            id_category+" "+description+" "+image+" "+price+" "+old_price)
            const result = await this.productUseCase.run({
                name, price, old_price, id_pharmacy, id_category, image, description
            })

            return response.status(201).json({ result });
        } catch(error: any){
            return response.status(500).json({
                error: error.message || 'Unexpected error!!'
            })
        }
    }
}