import { Request, Response } from "express";
import UpdateCredentialsEmployeesUseCase from "./UpdateCredentialsEmployeesUseCase";

export default class UpdateCredentialsEmployeesController {
    constructor(
        private employeeUseCase: UpdateCredentialsEmployeesUseCase
    ){}
    async handler(request: Request, response: Response): Promise<Response>{
        try {
                const {email, password, old_password, confirm_password} = request.body;
                const id = request.body.user.id;
                const result = await this.employeeUseCase.run({
                    email, password}, old_password, confirm_password, id)
                return response.status(200).json({result})
        } catch (error: any) {
            return response.status(500).json({
                error: error?.message || "Unexpected error"
})
}
}
}