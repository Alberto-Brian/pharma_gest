import { Request, Response } from "express";
import ReadAllDeletedEmployeesUseCase from "./ReadAllDeletedEmployeesUseCase";

export default class ReadAllDeletedEmployeesController {
    constructor(
        private employeeUseCase: ReadAllDeletedEmployeesUseCase
    ){}
    async handler(request: Request, response: Response): Promise<Response>{
        try {
            const page: number = parseInt(request.query.page as string)
            const perPage: number = parseInt(request.query.limit as string)
            const result = await this.employeeUseCase.run(page, perPage);
            return response.status(200).json(result);
        } catch (error: any) {
            return response.status(500).json({
                error: error?.message || "Unexpected error"
        })
    } 
  }
}