import { Request, Response } from 'express';
import FindByEmailUserEntity from './FindByEmailUserEntity';

export default class FindByEmailUserController{
  constructor(
    private userRepository: FindByEmailUserEntity
  ){}

  async handler(request: Request, response: Response){
    try {
      const { email } = request.body;
      const result = await this.userRepository.run(email);
      return response.status(200).json(result);
    } catch (error: any) {
      return response.status(500).send({error: error?.message})
    }
  }
}