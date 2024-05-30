import { Request, Response } from "express";
import UpdateEmployeeUseCase from "./UpdateEmployeeUseCase";

export default class UpdateEmployeeController {
    constructor(
        private employeeUseCase: UpdateEmployeeUseCase
    ){}
    async handler(request: Request, response: Response): Promise<Response>{
        try {
                const {username, phone, gender, address, birthdate} = request.body;
                const id: string = request.body.user.id;
                const result = await this.employeeUseCase.run({
                    username, phone,gender, address, birthdate
                }, id)
                return response.status(200).json({result})
        } catch (error: any) {
            return response.status(500).json({
                error: error?.message || "Unexpected error"
        })
    }
  }
}