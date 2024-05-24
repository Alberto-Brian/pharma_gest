
import { IBusinessManResponse } from "../../../interfaces/IBusinessMan";
import IBusinessManRepository from "../../../repositories/IBusinessManRepository";
import prisma from "../../../utils/prisma";
import validator from "validator";

export default class FindByEmailBusinessMasUseCase {
  constructor(
    private userRepository: IBusinessManRepository
  ){}
  async run(email: string): Promise<IBusinessManResponse | Error> {
    const user = await this.userRepository.findByEmail(email);
    if(!validator.isEmail(email)){
      throw new Error('Invalid email!!');
    }

    if(!user){
      throw new Error('This user doesn\'t exist')
    }
      return user
  }
}