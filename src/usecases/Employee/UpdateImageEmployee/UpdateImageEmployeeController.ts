import { Request, Response } from "express";
import UpdateImageEmployeeUseCase from "./UpdateImageEmployeeUseCase";

export default class UpdateImageEmployeeController {
    constructor(
        private employeeUseCase: UpdateImageEmployeeUseCase
    ){}
    async handler(request: Request, response: Response): Promise<Response>{
        try {
                const filename : string | null = request.file?.filename ?? '';
                
                console.log('aqui no controller');
                console.log(filename);
                const id: string = request.body.user.id;
                const result = await this.employeeUseCase.run(filename, id);
                return response.status(200).json({result})
        } catch (error: any) {
            return response.status(500).json({
                error: error?.message || "Unexpected error"
})
}
}
}