import { Request, Response } from "express";
import UpdateImageProductUseCase from "./UpdateImageProductUseCase";

export default class UpdateImageProductController {
    constructor(
        private productUseCase: UpdateImageProductUseCase
    ){}
    async handler(request: Request, response: Response): Promise<Response>{
        try {
                const filename = request.file?.filename as string;
                const id = request.body.id;
                const result = await this.productUseCase.run(filename, id)
                return response.status(200).json({result})

        } catch (error: any) {
            return response.status(500).json({
                error: error?.message || "Unexpected error"
            })
        }
    }
}