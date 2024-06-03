import { Request, Response } from "express";
import UpdateCredentialsUsersUseCase from "./UpdateCredentialsUsersUseCase";

export default class UpdateCredentialsUsersController {
    constructor(
        private userUseCase: UpdateCredentialsUsersUseCase
    ){}
    async handler(request: Request, response: Response): Promise<Response>{
        try {
                const {email, password, old_password, confirm_password} = request.body;
                const id = request.body.user.id;
                const result = await this.userUseCase.run({
                    email, password}, old_password, confirm_password, id)
                return response.status(200).json({result})
        } catch (error: any) {
            return response.status(500).json({
                error: error?.message || "Unexpected error"
})
}
}
}