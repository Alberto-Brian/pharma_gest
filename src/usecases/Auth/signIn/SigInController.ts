import SigInEntinty from './SignInUseCase';
import { Request, Response } from 'express'

export default class SigInController {
    constructor(
        private sigInUser: SigInEntinty
    ){}

    async handler(request: Request, response: Response): Promise<Response>{
        try{
              const { email, password } = request.body
              const user = await this.sigInUser.run({email, password})
              return response.status(200).json({user});
        }catch(error: any){
            return response.status(500).json({
                error: error.message || 'Unexpected error'
            })
        }
    }   
}