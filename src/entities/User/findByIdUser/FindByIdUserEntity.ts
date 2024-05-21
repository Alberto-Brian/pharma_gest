import IUserRepository from "../../../repositories/IUserRepository";
import { IUserResponse } from "../../../interfaces/IUser";

export default class FindByIdUserEntity{
  constructor(
    private userRepository: IUserRepository
  ){ }

  async run(id: string): Promise<IUserResponse | Error>{
    const user = await this.userRepository.findById(id);
    if(!user){
      throw new Error("This user doesn\'t exist");
    }

    return user;
  }
}