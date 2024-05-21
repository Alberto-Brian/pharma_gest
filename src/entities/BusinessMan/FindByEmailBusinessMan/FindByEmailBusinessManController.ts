import { Request, Response } from 'express';
import FindByEmailBusinessMasEntity from './FindByEmailBusinessManEntity';

export default class FindByEmailBusinessManController{
  constructor(
    private userRepository: FindByEmailBusinessMasEntity
  ){}

  async handler(request: Request, response: Response){
    try {
      const { email } = request.body;
      const result = await this.userRepository.run(email);
      return response.status(200).json(result);
    } catch (error: any) {
      return response.status(500).send({
        error: error?.message || "Unexpected error!!"
      })
    }
  }
}