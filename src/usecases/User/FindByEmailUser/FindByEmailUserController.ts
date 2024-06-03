import { Request, Response } from 'express';
import FindByEmailUserUseCase from './FindByEmailUserUseCase';

export default class FindByEmailUserController{
  constructor(
    private userRepository: FindByEmailUserUseCase
  ){}

  async handler(request: Request, response: Response){
    try {
      const { email } = request.params;
      const result = await this.userRepository.run(email);
      return response.status(200).json(result);
    } catch (error: any) {
      return response.status(500).send({error: error?.message})
    }
  }
}