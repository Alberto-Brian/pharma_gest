import { IUserResponse } from "../../../interfaces/IUser";
import IUserRepository from "../../../repositories/IUserRepository";
import prisma from "../../../utils/prisma";

export default class FindByEmailUserEntity {
  constructor(
    private userRepository: IUserRepository
  ){}
  async run(email: string): Promise<IUserResponse| Error> {
    const user = await this.userRepository.findByEmail(email);
    if(!user){
      throw new Error('This user doesn\'t exist')
    }
      return user
  }
}