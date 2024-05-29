import { Request, Response } from "express";
import FindByIdEmployeeUseCase from "./FindByIdEmployeeUseCase";

export default class FindByIdEmployeeController {
    constructor(
        private employeeUseCase: FindByIdEmployeeUseCase
    ){}
    async handler(request: Request, response: Response): Promise<Response>{
        try {
                const { id } = request.params;
                const employee = await this.employeeUseCase.run(id);
                return response.status(200).json({employee});


        } catch (error: any) {
            return response.status(500).json({
                error: error?.message || "Unexpected error"
})
}
}
}