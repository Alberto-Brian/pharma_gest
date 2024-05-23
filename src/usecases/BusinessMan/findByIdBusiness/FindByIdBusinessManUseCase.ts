import IBusinessManRepository from "../../../repositories/IBusinessManRepository";
import { IBusinessManResponse } from "../../../interfaces/IBusinessMan";
export default class FindByIdUserUseCase{
  constructor(
    private userRepository: IBusinessManRepository
  ){ }

  async run(id: string): Promise<IBusinessManResponse | Error>{
    const user = await this.userRepository.findById(id);
    if(!user){
      throw new Error("This user doesn\'t exist!!");
    }
    return user;
  }
}