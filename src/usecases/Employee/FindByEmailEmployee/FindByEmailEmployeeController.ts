import { Request, Response } from "express";
import FindByEmailEmployeeUseCase from "./FindByEmailEmployeeUseCase";

export default class FindByEmailEmployeeController {
    constructor(
        private employeeUseCase: FindByEmailEmployeeUseCase
    ){}
    async handler(request: Request, response: Response): Promise<Response>{
        try {
                const { email } = request.params;
                const result = await this.employeeUseCase.run(email);
                return response.status(200).json({ result });

        } catch (error: any) {
            return response.status(500).json({
                error: error?.message || "Unexpected error"
})
}
}
}