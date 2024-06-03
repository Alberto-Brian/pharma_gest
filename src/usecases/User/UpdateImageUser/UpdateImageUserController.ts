import { Request, Response } from "express";
import UpdateImageUserUseCase from "./UpdateImageUserUseCase";

export default class UpdateImageUserController {
    constructor(
        private userUseCase: UpdateImageUserUseCase
    ){}
    async handler(request: Request, response: Response): Promise<Response>{
        try {
                const filename : string | null = request.file?.filename ?? '';
                console.log(filename);
                const id: string = request.body.user.id;
                const result = await this.userUseCase.run(filename, id);
                return response.status(200).json({result})
        } catch (error: any) {
            return response.status(500).json({
                error: error?.message || "Unexpected error"
})
}
}
}