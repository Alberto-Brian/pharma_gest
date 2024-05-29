import { Request, Response } from "express";
import CreateEmployeeUseCase from "./CreateEmployeeUseCase";

export default class CreateEmployeeController {
    constructor(
        private employeeUseCase: CreateEmployeeUseCase
    ){}
    async handler(request: Request, response: Response): Promise<Response>{
        try {
                const {username, email, password, id_pharmacy} = request.body;
                const result = await this.employeeUseCase.run({
                    username, email, password}, id_pharmacy);
                return response.status(201).json({ result });    

        } catch (error: any) {
            return response.status(500).json({
                error: error?.message || "Unexpected error"
})
}
}
}