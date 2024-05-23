import FindByIdBusinessManUseCase from "./FindByIdBusinessManUseCase";
import { Request, Response } from 'express';

export default class FindByIdUserController {
  constructor(
    private userRepository: FindByIdBusinessManUseCase
  ){}

  async handler(request: Request, response: Response): Promise<Response>{
   try {
        const { id } = request.params;
        const user = await this.userRepository.run(id);
        return response.status(200).json(user);
      } catch (error: any) {
        return response.status(500).json({
          error: error?.message || "Unexpected error!!"
        });    
   }

  }

}