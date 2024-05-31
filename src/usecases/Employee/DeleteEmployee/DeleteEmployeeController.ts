import { Request, Response } from "express";
import DeleteEmployeeUseCase from "./DeleteEmployeeUseCase";

export default class DeleteEmployeeController {
    constructor(
        private employeeUseCase: DeleteEmployeeUseCase
    ){}
    async handler(request: Request, response: Response): Promise<Response>{
        try {
                const { id } = request.params;
                const user = request.body.user.id;
                await this.employeeUseCase.run(id, user);
                return response.status(200).json({});

        } catch (error: any) {
            return response.status(500).json({
                error: error?.message || "Unexpected error"
        })
    }
  }
}