import { Request, Response } from 'express';
import FindByEmailBusinessMasUseCase from './FindByEmailBusinessManUseCase';

export default class FindByEmailBusinessManController{
  constructor(
    private userRepository: FindByEmailBusinessMasUseCase
  ){}

  async handler(request: Request, response: Response){
    try {
      const { email } = request.params;
      const result = await this.userRepository.run(email);
      return response.status(200).json(result);
    } catch (error: any) {
      return response.status(500).send({
        error: error?.message || "Unexpected error!!"
      })
    }
  }
}