import IUserRepository from "../../../repositories/IUserRepository";
import { IUser } from "../../../interfaces/IUser";

export default class FindByIdUserUseCase{
  constructor(
    private userRepository: IUserRepository
  ){ }

  async run(id: string): Promise<IUser | Error>{
    const user = await this.userRepository.findById(id);
    if(!user){
      throw new Error("This user doesn\'t exist");
    }

    return user;
  }
}