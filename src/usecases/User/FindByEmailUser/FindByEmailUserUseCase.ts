import { IUser } from "../../../interfaces/IUser";
import IUserRepository from "../../../repositories/IUserRepository";

export default class FindByEmailUserUseCase {
  constructor(
    private userRepository: IUserRepository
  ){}
  async run(email: string): Promise<IUser | Error> {
    const user = await this.userRepository.findByEmail(email);
    if(!user){
      throw new Error('This user doesn\'t exist')
    }
      return user
  }
}