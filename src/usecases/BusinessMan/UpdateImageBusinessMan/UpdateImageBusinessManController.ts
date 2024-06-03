import { Request, Response } from "express";
import UpdateImageBusinessManUseCase from "./UpdateImageBusinessManUseCase";

export default class UpdateImageBusinessManController {
    constructor(
        private business_manUseCase: UpdateImageBusinessManUseCase
    ){}
    async handler(request: Request, response: Response): Promise<Response>{
        try {
                const filename : string | null = request.file?.filename ?? '';
                const id: string = request.body.user.id;
                const result = await this.business_manUseCase.run(filename, id);
                return response.status(200).json({result})
        } catch (error: any) {
            return response.status(500).json({
                error: error?.message || "Unexpected error"
})
}
}
}