import { Request, Response } from "express";
import ReadAllEmployeesUseCase from "./ReadAllEmployeesUseCase";

export default class ReadAllEmployeesController {
    constructor(
        private employeeUseCase: ReadAllEmployeesUseCase
    ){}
    async handler(request: Request, response: Response): Promise<Response>{
        try {
                const page: number = parseInt(request.query.page as string);
                const perPage: number = parseInt(request.query.limit as string);
                const result = await this.employeeUseCase.run(page, perPage)
                return response.status(200).json({result})
        } catch (error: any) {
            return response.status(500).json({
                error: error?.message || "Unexpected error"
})
}
}
}